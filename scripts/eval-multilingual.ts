/**
 * Multilingual evaluation.
 *
 * The UI ships a language picker with ten languages, and the system prompt
 * tells the model to answer in the chosen one. Nothing verified that it does.
 * This sends the same question in each language and checks the reply is
 * actually written in that script, by measuring how much of the reply falls in
 * the language's Unicode block.
 *
 * Requires DATABASE_URL and GROQ_API_KEY.
 * Usage: pnpm eval:multilingual
 */
import { generateText } from "ai";
import { createGroq } from "@ai-sdk/groq";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { retrieve } from "../src/lib/chat/retrieval";
import { buildMessages } from "../src/lib/chat/systemPrompt";
import { LANGUAGES } from "../src/lib/chat/translations";
import type { LangCode } from "../src/lib/types";

const MODEL = "llama-3.3-70b-versatile";
const GEMINI_MODEL = "gemini-2.5-flash";
const QUESTION = "I am a college student. What scholarships can I apply for?";
/** Share of letter characters that must sit in the expected script. */
const MIN_SCRIPT_SHARE = 0.5;
/** Gap between generations so the free Groq tier does not rate-limit us. */
const PACE_MS = 8000;

/** Unicode ranges per language. English is Latin.
 * Limitation: Hindi, Marathi and Sanskrit all use Devanagari, so this proves
 * the reply is in the right script, not that it is in the right language. */
const SCRIPTS: Record<LangCode, RegExp> = {
  en: /[A-Za-z]/,
  hi: /[ऀ-ॿ]/,
  mr: /[ऀ-ॿ]/,
  sa: /[ऀ-ॿ]/,
  ta: /[஀-௿]/,
  ml: /[ഀ-ൿ]/,
  kn: /[ಀ-೿]/,
  te: /[ఀ-౿]/,
  ur: /[؀-ۿݐ-ݿ]/,
  bn: /[ঀ-৿]/,
};

/** Anything that is not punctuation, digits or whitespace counts as a letter.
 * Avoids \p{L}, which needs the `u` flag and a newer compile target. */
function scriptShare(text: string, re: RegExp): number {
  // Ignore URLs, which legitimately stay in Latin even in an Indic reply.
  const stripped = text.replace(/https?:\/\/\S+/g, " ");
  let total = 0;
  let inScript = 0;
  for (const ch of stripped) {
    if (/[\s\d]/.test(ch) || /[!-/:-@[-`{-~‌-⁀“”‘’—–]/.test(ch)) continue;
    total++;
    if (re.test(ch)) inScript++;
  }
  return total ? inScript / total : 0;
}

function isQuota(e: unknown): boolean {
  const m = e instanceof Error ? e.message : String(e);
  return /rate limit|quota|429|too many requests/i.test(m);
}

/** Mirrors the app: try Groq, fall back to Gemini. Without the fallback a
 * quota error on one provider looks like a language failure. */
async function generate(system: string, messages: { role: "user" | "assistant"; content: string }[]) {
  let lastErr: unknown;
  if (process.env.GROQ_API_KEY) {
    try {
      const groq = createGroq({ apiKey: process.env.GROQ_API_KEY });
      const r = await generateText({ model: groq(MODEL), system, messages, temperature: 0 });
      return { text: r.text, provider: "groq" };
    } catch (e) {
      lastErr = e;
      if (!isQuota(e)) throw e;
    }
  }
  if (process.env.GEMINI_API_KEY) {
    const google = createGoogleGenerativeAI({ apiKey: process.env.GEMINI_API_KEY });
    const r = await generateText({ model: google(GEMINI_MODEL), system, messages, temperature: 0 });
    return { text: r.text, provider: "gemini" };
  }
  throw lastErr ?? new Error("no LLM provider configured");
}

async function main() {
  const schemes = await retrieve(QUESTION);
  console.log(`\nretrieved ${schemes.length} schemes for the shared question\n`);

  let fail = 0;
  let blocked = 0;
  const rows: string[] = [];

  for (const { code, label } of LANGUAGES) {
    const prompt = buildMessages(QUESTION, [], schemes, code);
    let text = "";
    let err = "";
    let provider = "";
    // Paced: the free Groq tier rate-limits a tight loop of ten generations,
    // which otherwise looks like a language failure rather than a quota one.
    if (rows.length) await new Promise((r) => setTimeout(r, PACE_MS));
    try {
      const r = await generate(prompt.system, prompt.messages);
      text = r.text;
      provider = r.provider;
    } catch (e) {
      err = e instanceof Error ? e.message : String(e);
    }

    const re = SCRIPTS[code];
    const share = err ? 0 : scriptShare(text, re);
    // English is the default, so a Latin reply is correct there.
    const quota = /rate limit|quota|429/i.test(err);
    if (quota) blocked++;
    const ok = !err && share >= MIN_SCRIPT_SHARE;
    if (!ok && !quota) fail++;

    rows.push(
      `${ok ? " ok " : quota ? "SKIP" : "FAIL"}  ${code.padEnd(3)} ${label.padEnd(10)} script=${(share * 100).toFixed(0).padStart(3)}% ${provider.padEnd(6)}` +
        (err ? `  ERROR ${err.slice(0, 60)}` : `  "${text.replace(/\s+/g, " ").slice(0, 60)}"`),
    );
  }

  console.log("─── Multilingual evaluation ────────────────────────────────");
  console.log(rows.join("\n"));
  console.log("────────────────────────────────────────────────────────────");
  console.log(
    `Languages: ${LANGUAGES.length}   failing: ${fail}   skipped on upstream quota: ${blocked}   threshold: ${MIN_SCRIPT_SHARE * 100}% in-script\n`,
  );

  // Upstream quota is not a product defect, so it does not fail the run.
  process.exit(fail > 0 ? 1 : 0);
}

main();
