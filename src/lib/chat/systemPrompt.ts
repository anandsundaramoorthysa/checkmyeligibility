import type { Scheme } from "@/lib/types";
import type { Message } from "@/lib/types";
import { buildGrievanceContext } from "./grievancePortals";

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

function buildSystemPrompt(lang?: string): string {
  const langInstruction = lang && lang !== "en"
    ? `\n- The user's UI language is set to "${lang}". Respond in that language unless the user writes in a different language — then match the language they used.`
    : "";

  return `You are Eli AI, a friendly and knowledgeable assistant helping Indian students discover government education schemes they may qualify for.

Your job: help students find scholarships, fellowships, education loans, and grants from Indian government portals.

Rules:
- Only recommend schemes from the CONTEXT block below. Never invent or hallucinate schemes.
- Always include the official URL so the student can verify eligibility and apply.
- Be concise: 2–4 sentences per scheme, plain language, no jargon.
- If no schemes match, say so honestly and suggest the student rephrase or visit scholarships.gov.in.
- Never ask for Aadhaar numbers, bank details, passwords, or any personal credentials.
- Never guarantee eligibility — always say "you may qualify" or "check the eligibility criteria".
- Never submit applications on behalf of the student.
- If asked about anything outside education schemes (general knowledge, other topics), politely say you only help with education schemes and redirect.${langInstruction}

Tone: warm, encouraging, clear. You are talking to students who may be navigating government systems for the first time.

Format: plain conversational text. Use a numbered list when presenting multiple schemes.`;
}

export function buildContextBlock(schemes: Scheme[]): string {
  if (!schemes.length) return "CONTEXT: No matching schemes found in the database.";

  const lines = ["CONTEXT — matched schemes:"];
  for (let i = 0; i < schemes.length; i++) {
    const s = schemes[i];
    lines.push(`\n[${i + 1}] ${s.name}`);
    if (s.level && s.level !== "central") {
      lines.push(`    Level: ${s.level}`);
    }
    if (s.states && !s.states.includes("all-india" as never)) {
      lines.push(`    States: ${s.states.join(", ")}`);
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

type CoreMessage = { role: "system" | "user" | "assistant"; content: string };

export function buildMessages(
  userMessage: string,
  history: Message[],
  schemes: Scheme[],
  lang?: string,
  options?: { comparisonMode?: boolean; grievanceMode?: boolean },
): CoreMessage[] {
  const contextBlock = buildContextBlock(schemes);
  let addon = "";

  if (options?.comparisonMode) {
    addon += buildComparisonAddon(schemes);
  }

  if (options?.grievanceMode) {
    const state = extractState(userMessage);
    const grievanceBlock = buildGrievanceContext(state);
    if (grievanceBlock) addon += `\n\n${grievanceBlock}`;
  }

  // Single system message: persona + context block + optional addons
  const systemContent = `${buildSystemPrompt(lang)}\n\n${contextBlock}${addon}`;

  const messages: CoreMessage[] = [
    { role: "system", content: systemContent },
  ];

  // Add history, then truncate if total estimated tokens exceed the cap
  const historySlice = history.slice(-MAX_HISTORY);
  for (const turn of historySlice) {
    if ((turn.role === "user" || turn.role === "assistant") && turn.content) {
      messages.push({ role: turn.role, content: turn.content });
    }
  }
  messages.push({ role: "user", content: userMessage });

  // Token guard: drop oldest history turns until under the cap
  let total = messages.reduce((sum, m) => sum + estimateTokens(m.content), 0);
  while (total > MAX_PROMPT_TOKENS && messages.length > 2) {
    // messages[0] = system, messages[1] = oldest history — remove it
    const removed = messages.splice(1, 1)[0];
    total -= estimateTokens(removed.content);
  }

  return messages;
}
