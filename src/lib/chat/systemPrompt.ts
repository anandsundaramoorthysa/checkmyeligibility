import type { Scheme } from "@/lib/types";
import type { Message } from "@/lib/types";

export const SYSTEM_PROMPT = `You are CheckMyEligibility Assistant, a helpful AI for Indian students.

Your job: help students find government education schemes, scholarships, fellowships, and loans they may qualify for.

Rules:
- Only recommend schemes from the CONTEXT block below. Never invent schemes.
- Always end with the official URL so the student can verify and apply.
- Be concise: 2-4 sentences per scheme, plain language, no jargon.
- If no schemes match, say so honestly and suggest the student try rephrasing or visit scholarships.gov.in.
- Never ask for Aadhaar numbers, bank details, or passwords.
- Never guarantee eligibility — always say "you may qualify" or "check the eligibility criteria".
- Respond in the same language the student used.

Format: plain conversational text. Use a numbered list when presenting multiple schemes.`;

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
): CoreMessage[] {
  const messages: CoreMessage[] = [
    { role: "system", content: SYSTEM_PROMPT },
    { role: "system", content: buildContextBlock(schemes) },
  ];

  for (const turn of history.slice(-10)) {
    if ((turn.role === "user" || turn.role === "assistant") && turn.content) {
      messages.push({ role: turn.role, content: turn.content });
    }
  }

  messages.push({ role: "user", content: userMessage });
  return messages;
}
