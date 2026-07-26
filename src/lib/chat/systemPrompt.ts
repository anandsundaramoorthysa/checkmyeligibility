import type { Scheme } from "@/lib/types";
import type { Message } from "@/lib/types";

export const MAX_HISTORY = 10;
// Rough token estimate: 4 chars ≈ 1 token. Hard-cap at 5 000 tokens to stay
// well inside both Groq (128k) and Gemini (1M) context limits while leaving
// ample room for the response.
const MAX_PROMPT_TOKENS = 5_000;

function estimateTokens(text: string): number {
  return Math.ceil(text.length / 4);
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

type CoreMessage = { role: "system" | "user" | "assistant"; content: string };

export function buildMessages(
  userMessage: string,
  history: Message[],
  schemes: Scheme[],
  lang?: string,
): CoreMessage[] {
  // Single system message: persona + context block merged
  const systemContent = `${buildSystemPrompt(lang)}\n\n${buildContextBlock(schemes)}`;

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
