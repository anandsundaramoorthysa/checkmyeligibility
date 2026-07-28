/**
 * Reply/UI coherence evaluation.
 *
 * Scheme cards are only rendered when retrieval actually matched something.
 * That gate is right, but it only works if the model is given the same view:
 * feed it a filler scheme list while the UI renders nothing and it will name
 * schemes the student has no card, link or way to act on.
 *
 * Two failure modes are checked on messages that carry no searchable detail:
 *   1. The reply names a scheme that will not be shown.
 *   2. The reply claims there are no schemes in the database. There are
 *      hundreds; the message simply had nothing to search on, and telling a
 *      student otherwise is both wrong and discouraging.
 *
 * Requires DATABASE_URL and an LLM key.
 * Usage: pnpm eval:coherence
 */
import { generateText } from "ai";
import { createGroq } from "@ai-sdk/groq";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { retrieveWithMeta } from "../src/lib/chat/retrieval";
import { buildMessages } from "../src/lib/chat/systemPrompt";

/** Word ceiling for a reply. A chat on a phone, not a letter. */
const MAX_WORDS = 110;
/** Cards shown at once. More than this buries the reply on a phone. */
const MAX_CARDS = 3;

/** Messages a student might open with that carry nothing to search on. */
const QUERIES = [
  "hello",
  "hi",
  "can you help me",
  "what do you do",
  "I want something",
  "good morning",
  "namaste",
  "are you there",
];

/** Gap between generations so the free provider tier does not rate-limit us. */
const PACE_MS = 4000;

async function gen(system: string, messages: { role: "user" | "assistant"; content: string }[]) {
  try {
    if (process.env.GROQ_API_KEY) {
      const g = createGroq({ apiKey: process.env.GROQ_API_KEY });
      return (await generateText({ model: g("llama-3.3-70b-versatile"), system, messages, temperature: 0 })).text;
    }
  } catch {
    /* quota or outage — fall back to Gemini, same as the app does */
  }
  const gg = createGoogleGenerativeAI({ apiKey: process.env.GEMINI_API_KEY });
  return (await generateText({ model: gg("gemini-2.5-flash"), system, messages, temperature: 0 })).text;
}

/** Words from a scheme name that are specific enough to identify it. */
function distinctive(name: string): string[] {
  const generic = new Set([
    "scheme", "scholarship", "fellowship", "for", "of", "the", "and", "students",
    "student", "national", "central", "india", "indian", "government", "yojana", "education",
  ]);
  return name.split(/[^A-Za-z]+/).filter((w) => w.length > 3 && !generic.has(w.toLowerCase()));
}

const CLAIMS_EMPTY_DB =
  /(don't|do not|dont)\s+have\s+any\s+(matching\s+)?schemes|no\s+(matching\s+)?schemes\s+in\s+(my|the)\s+database/i;

/** Real questions, checked for brevity and for eligibility-appropriate cards. */
const ANSWERED: { q: string; mustNotShow?: RegExp }[] = [
  // "his" makes this student male, so women-only schemes are not merely a
  // weaker match, they are closed to him.
  { q: "I'm a passed-out who finished his masters in data science", mustNotShow: /women|girl|mahila|kanya/i },
  { q: "I am a girl student in class 12 from Kerala" },
  { q: "I need an education loan for my masters" },
];

async function main() {
  let mismatches = 0;
  let misleading = 0;
  let tooLong = 0;
  let tooMany = 0;
  let ineligible = 0;
  const rows: string[] = [];

  for (const q of QUERIES) {
    if (rows.length) await new Promise((r) => setTimeout(r, PACE_MS));

    const { schemes, matched } = await retrieveWithMeta(q);
    // Mirror exactly what the route renders and what it sends the model.
    const displaySchemes = matched ? schemes : [];
    const prompt = buildMessages(q, [], displaySchemes, undefined, { matched });
    const text = await gen(prompt.system, prompt.messages);

    const named = schemes.filter((s) =>
      distinctive(s.name).some((w) => new RegExp(`\\b${w}\\b`, "i").test(text)),
    );
    const namesWithoutCards = displaySchemes.length === 0 && named.length > 0;
    const claimsEmpty = CLAIMS_EMPTY_DB.test(text);
    if (namesWithoutCards) mismatches++;
    if (claimsEmpty) misleading++;

    const bad = namesWithoutCards || claimsEmpty;
    rows.push(
      `${bad ? "FAIL" : " ok "}  ${q.padEnd(18)} cards=${displaySchemes.length}` +
        `  namesUnshown=${named.length}  claimsDbEmpty=${claimsEmpty}` +
        (bad ? `\n        "${text.replace(/\s+/g, " ").slice(0, 150)}"` : ""),
    );
  }

  // ─── Brevity and eligibility on real questions ──────────────────────────
  const answeredRows: string[] = [];
  for (const { q, mustNotShow } of ANSWERED) {
    await new Promise((r) => setTimeout(r, PACE_MS));
    const { schemes, matched } = await retrieveWithMeta(q);
    const displaySchemes = matched ? schemes : [];
    const prompt = buildMessages(q, [], displaySchemes, undefined, { matched });
    const text = await gen(prompt.system, prompt.messages);

    const words = text.trim().split(/\s+/).filter(Boolean).length;
    const longReply = words > MAX_WORDS;
    const manyCards = displaySchemes.length > MAX_CARDS;
    const wrong = mustNotShow ? displaySchemes.filter((s) => mustNotShow.test(s.name)) : [];
    if (longReply) tooLong++;
    if (manyCards) tooMany++;
    if (wrong.length) ineligible++;

    const bad = longReply || manyCards || wrong.length > 0;
    answeredRows.push(
      `${bad ? "FAIL" : " ok "}  ${q.slice(0, 44).padEnd(44)} words=${String(words).padStart(3)} cards=${displaySchemes.length}` +
        (wrong.length ? `\n        ineligible for this student: ${wrong.map((s) => s.name).join(", ").slice(0, 90)}` : ""),
    );
  }

  console.log("\n─── Reply/UI coherence ─────────────────────────────────────");
  console.log(rows.join("\n"));
  console.log("────────────────────────────────────────────────────────────");
  console.log(`Prompts: ${QUERIES.length}`);
  console.log(`  naming a scheme with no card : ${mismatches}`);
  console.log(`  claiming the database is empty: ${misleading}`);
  console.log("\n─── Brevity and eligibility ────────────────────────────────");
  console.log(answeredRows.join("\n"));
  console.log("────────────────────────────────────────────────────────────");
  console.log(`  replies over ${MAX_WORDS} words   : ${tooLong}`);
  console.log(`  turns over ${MAX_CARDS} cards      : ${tooMany}`);
  console.log(`  ineligible cards shown : ${ineligible}\n`);

  process.exit(mismatches > 0 || misleading > 0 || tooLong > 0 || tooMany > 0 || ineligible > 0 ? 1 : 0);
}

main();
