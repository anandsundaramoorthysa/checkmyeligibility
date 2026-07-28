import type { Scheme } from "@/lib/types";
import type { Message } from "@/lib/types";
import { buildGrievanceContext } from "./grievancePortals";
import { levelLabel, stateLabel } from "@/lib/labels";

export const MAX_HISTORY = 10;
// Rough token estimate: 4 chars ≈ 1 token. Hard-cap at 5 000 tokens to stay
// well inside both Groq (128k) and Gemini (1M) context limits while leaving
// ample room for the response.
const MAX_PROMPT_TOKENS = 5_000;

function estimateTokens(text: string): number {
  return Math.ceil(text.length / 4);
}

// ─── Comparison intent detection ──────────────────────────────────────────────
const COMPARISON_PATTERNS: RegExp[] = [
  /\bcompare\b.{2,60}\band\b/i,
  /\bcompare\b.{2,60}\bvs\.?\b/i,
  /\bcompare\b.{2,60}\bversus\b/i,
  /\bcompare\b.{2,60}\bwith\b/i,
  /\bdifference\s+between\b/i,
  /\bwhich\s+(scheme|one|is|are)\s+(is\s+)?better\b/i,
  /\bvs\.?\s+\w/i,
];

export function isComparisonIntent(message: string): boolean {
  return COMPARISON_PATTERNS.some((p) => p.test(message));
}

// ─── Grievance / rejection intent detection ────────────────────────────────
const GRIEVANCE_PATTERNS: RegExp[] = [
  /\b(rejected|rejection)\b/i,
  /\b(appeal|appealing|file\s+an?\s+appeal)\b/i,
  /\b(complaint|complain|grievance|grievance\s+portal)\b/i,
  /\b(not\s+(selected|approved|processed))\b/i,
  /\b(application\s+(was\s+)?(rejected|failed|declined))\b/i,
  /\bhow\s+to\s+complain\b/i,
  /\bgrievance\s+redress(al)?\b/i,
];

export function isGrievanceIntent(message: string): boolean {
  return GRIEVANCE_PATTERNS.some((p) => p.test(message));
}

/** Try to extract a state name from the user message for targeted grievance info. */
function extractState(message: string): string | undefined {
  const STATE_NAMES = [
    "andhra pradesh", "assam", "bihar", "delhi", "gujarat", "karnataka",
    "kerala", "madhya pradesh", "maharashtra", "odisha", "punjab",
    "rajasthan", "tamil nadu", "telangana", "uttar pradesh", "west bengal",
    "chhattisgarh", "meghalaya",
  ];
  const lower = message.toLowerCase();
  return STATE_NAMES.find((s) => lower.includes(s));
}

const LANGUAGE_NAMES: Record<string, string> = {
  hi: "Hindi", ta: "Tamil", ml: "Malayalam", kn: "Kannada", te: "Telugu",
  mr: "Marathi", ur: "Urdu", sa: "Sanskrit", bn: "Bengali", en: "English",
};

function buildSystemPrompt(lang?: string): string {
  // Stated up front and unconditionally. The previous wording ("respond in that
  // language unless the user writes in a different language, then match them")
  // contradicted itself for the most common case in India: the student picks a
  // language in the UI and still types the question in English. The model then
  // correctly read that as "reply in English" and the setting silently did
  // nothing.
  const langName = lang ? LANGUAGE_NAMES[lang] ?? lang : undefined;
  const langInstruction =
    langName && lang !== "en"
      ? `\n\nLANGUAGE: Write your entire reply in ${langName}. The student has chosen ${langName} in the interface. They may type in English, or mix English and ${langName}; reply in ${langName} regardless. Keep scheme names and URLs in their official form. Only use a different language if the student explicitly asks you to.`
      : "";

  return `You are CheckMyEligibility, a friendly and knowledgeable assistant helping Indian students discover government education schemes they may qualify for.

Your job: help students find scholarships, fellowships, education loans, and grants from Indian government portals.

Rules:
- Only recommend schemes from the CONTEXT block below. Never invent or hallucinate schemes.
- Never name a scheme that is not in the CONTEXT, not even as a suggestion or an example.
- The CONTEXT is a list of candidates, not a list of matches. Some will not fit
  this student. Read each scheme's "For" line: if it names a group (SC / ST,
  OBC, EWS, minority, girls and women, differently abled) then only that group
  qualifies. Never tell a student a scheme is for them when its "For" line says
  a different group, and never widen or merge those groups.
- If a scheme is only a partial fit, say so plainly rather than implying it fits.
- Never state an amount, deadline, income limit or criterion that is not written
  in the CONTEXT. If the student asks for something not there, say you do not
  have it and point them to the official URL.
- Always include the official URL so the student can verify eligibility and apply.
- Be concise: 2–4 sentences per scheme, plain language, no jargon.
- If no schemes match, say so honestly and suggest the student rephrase or visit scholarships.gov.in.
- Never ask for Aadhaar numbers, bank details, passwords, or any personal credentials.
- Never guarantee eligibility — always say "you may qualify" or "check the eligibility criteria".
- Never submit applications on behalf of the student.
- If asked about anything outside education schemes (general knowledge, other topics), politely say you only help with education schemes and redirect.

Tone: warm, encouraging, clear. You are talking to students who may be navigating government systems for the first time.

Format: plain conversational text. Use a numbered list when presenting multiple schemes.${langInstruction}`;
}

export function buildContextBlock(schemes: Scheme[], matched = true): string {
  if (!schemes.length) {
    // Deliberately not "no schemes found in the database": the database holds
    // hundreds, and a greeting simply carries nothing to search on. Telling a
    // student there is nothing for them is both wrong and discouraging.
    return [
      "CONTEXT: This message did not contain enough detail to search on, so no",
      "schemes were looked up for it. Do NOT say the database is empty or that",
      "there are no schemes for this student, because neither is true. Say you",
      "need a little more to go on, then ask what they are studying, which",
      "state they are in, and their category.",
    ].join("\n");
  }

  const lines = matched
    ? ["CONTEXT — matched schemes:"]
    : [
        "CONTEXT — NOT matched to this student. Nothing in their message narrowed",
        "the search, so these are simply recently reviewed schemes. Offer them as",
        "a starting point, say plainly that you could not match yet, and ask what",
        "they are studying, their state, and their category so you can narrow it.",
        "",
        "Schemes:",
      ];
  for (let i = 0; i < schemes.length; i++) {
    const s = schemes[i];
    lines.push(`\n[${i + 1}] ${s.name}`);
    if (s.level && s.level !== "central") {
      lines.push(`    Level: ${levelLabel(s.level)}`);
    }
    if (s.states && !s.states.includes("all-india" as never)) {
      // Readable names, not the kebab slugs — the model echoes what it is given.
      lines.push(`    States: ${s.states.map(stateLabel).join(", ")}`);
    }
    if (s.eligibility.length) {
      const criteria = s.eligibility.map((e) => `${e.label}: ${e.value}`).join("; ");
      lines.push(`    Eligibility: ${criteria}`);
    }
    if (s.benefits.length) {
      lines.push(`    Benefit: ${s.benefits.join("; ")}`);
    }
    if (s.officialPortalUrl) {
      lines.push(`    Official URL: ${s.officialPortalUrl}`);
    }
  }
  return lines.join("\n");
}

/** Build comparison-specific addon that instructs the LLM to produce a table. */
export function buildComparisonAddon(schemes: Scheme[]): string {
  if (schemes.length < 2) return "";
  return `
COMPARISON REQUEST: The user wants to compare schemes. Please respond with:
1. A clear markdown table comparing the schemes on: Name, Who qualifies, Benefit amount, How to apply (URL).
2. One or two sentences of recommendation based on the student's situation.
Keep the table concise — one row per scheme, no more than 4 columns.`;
}

type CoreMessage = { role: "user" | "assistant"; content: string };

/** System instructions kept separate from the conversation. Passing them as a
 * message inside `messages` is what the AI SDK warns about: a crafted turn can
 * sit alongside them and read as an instruction of equal weight. */
export interface Prompt {
  system: string;
  messages: CoreMessage[];
}

export function buildMessages(
  userMessage: string,
  history: Message[],
  schemes: Scheme[],
  lang?: string,
  options?: { comparisonMode?: boolean; grievanceMode?: boolean; matched?: boolean },
): Prompt {
  const contextBlock = buildContextBlock(schemes, options?.matched ?? true);
  let addon = "";

  if (options?.comparisonMode) {
    addon += buildComparisonAddon(schemes);
  }

  if (options?.grievanceMode) {
    const state = extractState(userMessage);
    const grievanceBlock = buildGrievanceContext(state);
    if (grievanceBlock) addon += `\n\n${grievanceBlock}`;
  }

  // Persona + context block + optional addons, delivered as system input.
  const system = `${buildSystemPrompt(lang)}\n\n${contextBlock}${addon}`;

  const messages: CoreMessage[] = [];

  // Add history, then truncate if total estimated tokens exceed the cap
  const historySlice = history.slice(-MAX_HISTORY);
  for (const turn of historySlice) {
    if ((turn.role === "user" || turn.role === "assistant") && turn.content) {
      messages.push({ role: turn.role, content: turn.content });
    }
  }
  messages.push({ role: "user", content: userMessage });

  // Token guard: drop oldest history turns until under the cap. The system
  // text and the current question are counted but never dropped.
  let total =
    estimateTokens(system) + messages.reduce((sum, m) => sum + estimateTokens(m.content), 0);
  while (total > MAX_PROMPT_TOKENS && messages.length > 1) {
    const removed = messages.splice(0, 1)[0];
    total -= estimateTokens(removed.content);
  }

  return { system, messages };
}
