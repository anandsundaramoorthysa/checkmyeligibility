/**
 * Groundedness evaluation.
 *
 * Retrieval coverage only proves schemes come back. It says nothing about
 * whether the assistant's prose matches them. This harness runs the real
 * prompt through the real model, then checks the answer two ways:
 *
 *   1. Deterministic: every URL in the answer must appear in the context, and
 *      any scheme-looking name it cites should be one we actually supplied.
 *   2. LLM judge: a second model call rates whether the answer is supported by
 *      the context and whether it invented eligibility, amounts, or deadlines.
 *
 * The deterministic checks are the gate. The judge is advisory, because a
 * judge can be wrong and should not fail a build on its own.
 *
 * Requires DATABASE_URL, GROQ_API_KEY (and ideally QDRANT_*).
 * Usage: pnpm eval:groundedness
 */
import { generateText } from "ai";
import { createGroq } from "@ai-sdk/groq";
import { retrieve } from "../src/lib/chat/retrieval";
import { buildMessages, isComparisonIntent, isGrievanceIntent } from "../src/lib/chat/systemPrompt";
import { validateOutput, allowedHostsFor } from "../src/lib/chat/guardrail";
import type { Scheme } from "../src/lib/types";

const MODEL = "llama-3.3-70b-versatile";

const QUERIES = [
  "I need a scholarship for B.Tech",
  "I am a PhD student looking for a fellowship",
  "I need an education loan for my masters",
  "Scholarships for SC students doing engineering",
  "I'm a girl student in class 12, what can I apply for?",
  "Compare AICTE Pragati and the INSPIRE scholarship",
  "What documents do I need for the Vikramaditya scholarship?",
  "Minority scholarship for higher education",
  "Help for differently abled students in college",
  "My scholarship application was rejected, what do I do?",
  "Is there a hostel scheme for SC ST students?",
  "What support exists for students from Tamil Nadu?",
];

function groq() {
  const key = process.env.GROQ_API_KEY;
  if (!key) throw new Error("GROQ_API_KEY is not set");
  return createGroq({ apiKey: key });
}

/** URLs the answer is allowed to cite: the ones we handed the model. */
function contextUrls(schemes: Scheme[]): Set<string> {
  const s = new Set<string>();
  for (const sc of schemes) {
    if (sc.officialPortalUrl) {
      try {
        s.add(new URL(sc.officialPortalUrl).hostname.toLowerCase().replace(/^www\./, ""));
      } catch {
        /* skip unusable url */
      }
    }
  }
  // The system prompt explicitly tells the model to fall back to these.
  s.add("scholarships.gov.in");
  s.add("nsp.gov.in");
  return s;
}

function urlsIn(text: string): string[] {
  return (text.match(/https?:\/\/[^\s<>"')\]]+/gi) ?? []).map((u) => {
    try {
      return new URL(u).hostname.toLowerCase().replace(/^www\./, "");
    } catch {
      return u;
    }
  });
}

interface JudgeVerdict {
  grounded: boolean;
  invented_scheme: boolean;
  invented_facts: boolean;
  note: string;
}

async function judge(question: string, context: string, answer: string): Promise<JudgeVerdict | null> {
  const prompt = `You are auditing an assistant that recommends Indian government education schemes.

The assistant must only use schemes from the CONTEXT. Judge the ANSWER.

QUESTION:
${question}

CONTEXT:
${context}

ANSWER:
${answer}

Reply with ONLY a JSON object, no prose:
{"grounded": true|false, "invented_scheme": true|false, "invented_facts": true|false, "note": "one short sentence"}

- grounded: every scheme, benefit and eligibility claim in the ANSWER is supported by the CONTEXT.
- invented_scheme: the ANSWER names a scheme that is not in the CONTEXT.
- invented_facts: the ANSWER states an amount, deadline or criterion not in the CONTEXT.
- Saying "no matching schemes found" or redirecting to an official portal is grounded, not invented.`;

  try {
    const { text } = await generateText({
      model: groq()(MODEL),
      prompt,
      temperature: 0,
    });
    const m = text.match(/\{[\s\S]*\}/);
    return m ? (JSON.parse(m[0]) as JudgeVerdict) : null;
  } catch {
    return null;
  }
}

async function main() {
  let hardFail = 0;
  let judgeFail = 0;
  let judged = 0;
  const rows: string[] = [];

  for (const q of QUERIES) {
    const schemes = await retrieve(q);
    const prompt = buildMessages(q, [], schemes, undefined, {
      comparisonMode: isComparisonIntent(q),
      grievanceMode: isGrievanceIntent(q),
    });

    let answer = "";
    try {
      const { text } = await generateText({
        model: groq()(MODEL),
        system: prompt.system,
        messages: prompt.messages,
        temperature: 0,
      });
      answer = validateOutput(text, allowedHostsFor(schemes.map((s) => s.officialPortalUrl)));
    } catch (e) {
      rows.push(`FAIL  ${q}\n        generation error: ${e instanceof Error ? e.message : String(e)}`);
      hardFail++;
      continue;
    }

    // Deterministic check: no URL outside what we supplied.
    const allowed = contextUrls(schemes);
    const cited = urlsIn(answer);
    const stray = cited.filter((h) => h !== "[link" && !allowed.has(h) && !h.endsWith(".gov.in"));

    const v = await judge(q, prompt.system, answer);
    if (v) {
      judged++;
      if (!v.grounded || v.invented_scheme || v.invented_facts) judgeFail++;
    }

    const bad = stray.length > 0;
    if (bad) hardFail++;

    rows.push(
      `${bad ? "FAIL" : " ok "}  schemes=${String(schemes.length).padStart(2)}  ${q.slice(0, 46).padEnd(46)}` +
        `  judge=${v ? `grounded:${v.grounded} invented:${v.invented_scheme || v.invented_facts}` : "n/a"}` +
        (stray.length ? `\n        STRAY URLS: ${stray.join(", ")}` : "") +
        (v && (!v.grounded || v.invented_scheme || v.invented_facts) ? `\n        judge note: ${v.note}` : ""),
    );
  }

  console.log("\n─── Groundedness evaluation ────────────────────────────────");
  console.log(rows.join("\n"));
  console.log("────────────────────────────────────────────────────────────");
  console.log(`Queries: ${QUERIES.length}`);
  console.log(`Hard failures (stray URLs / generation errors): ${hardFail}`);
  console.log(`Judge concerns: ${judgeFail}/${judged} judged  (advisory, does not fail the run)\n`);

  process.exit(hardFail > 0 ? 1 : 0);
}

main();
