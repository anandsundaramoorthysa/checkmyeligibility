/**
 * Retrieval evaluation harness.
 *
 * Runs realistic student queries through the real retrieval pipeline and
 * asserts that each one comes back with schemes. A zero-result answer is the
 * failure mode that matters most here: the assistant replies "I couldn't find
 * any matching schemes" and the student leaves empty-handed.
 *
 * Requires DATABASE_URL, GEMINI_API_KEY, QDRANT_URL and QDRANT_API_KEY.
 * Usage: pnpm eval:retrieval
 */
import { retrieve } from "../src/lib/chat/retrieval";
import { extractIntent } from "../src/lib/chat/intentExtractor";

/** Every one of these must return at least one scheme. */
const QUERIES = [
  "I need a scholarship",
  "I am a PhD student looking for a fellowship",
  "I need an education loan for my masters",
  "I am in class 12 in Bihar, what can I apply for?",
  "Scholarships for SC students doing B.Tech",
  "I'm a girl student, are there schemes for me?",
  "Fellowship for research scholars in science",
  "Post-matric scholarship for OBC students",
  "Help for differently abled students in college",
  "Minority scholarship for higher education",
  "Hostel scheme for SC ST students",
  "Fee reimbursement in Andhra Pradesh",
  "I am doing a diploma in polytechnic",
  "Scholarships for students from Tamil Nadu",
  "Any stipend for engineering students?",
  "EWS scholarship for undergraduate study",
  "I want to study abroad, any government support?",
  "Merit scholarship for toppers",
  "help me",
  "What support exists for first generation learners?",
];

/**
 * When a student names a scheme, that scheme must come back. Token filters
 * alone cannot express "the Pragati one", so these guard the name matching.
 * Each entry is [query, substring expected in some returned scheme name].
 */
const NAMED: [string, string][] = [
  ["Compare AICTE Pragati and the INSPIRE scholarship for me", "Pragati"],
  ["Compare AICTE Pragati and the INSPIRE scholarship for me", "INSPIRE"],
  ["Tell me about the Vikramaditya scholarship", "Vikramaditya"],
  ["Am I eligible for the Babu Jagjivan Ram hostel scheme?", "Jagjivan"],
  ["What is the AICTE Yashasvi scheme?", "Yashasvi"],
  ["Details of Vidya Lakshmi education loan", "Vidya Lakshmi"],
];

async function main() {
  let empty = 0;
  const rows: string[] = [];

  for (const q of QUERIES) {
    const t0 = Date.now();
    let n = 0;
    let names = "";
    let err = "";
    try {
      const schemes = await retrieve(q);
      n = schemes.length;
      names = schemes.slice(0, 2).map((s) => s.name).join(" | ");
    } catch (e) {
      err = e instanceof Error ? e.message : String(e);
    }
    if (n === 0) empty++;
    const intent = extractIntent(q);
    rows.push(
      `${n === 0 ? "MISS" : " ok "}  ${String(n).padStart(2)}  ${String(Date.now() - t0).padStart(5)}ms  ` +
        `${q.slice(0, 46).padEnd(46)}  intent=${JSON.stringify(intent)}${err ? `  ERROR=${err}` : ""}` +
        `${names ? `\n            -> ${names.slice(0, 110)}` : ""}`,
    );
  }

  console.log("\n─── Retrieval evaluation ───────────────────────────────────");
  console.log(rows.join("\n"));
  console.log("────────────────────────────────────────────────────────────");
  console.log(
    `Queries: ${QUERIES.length}   zero-result: ${empty}   coverage: ${(((QUERIES.length - empty) / QUERIES.length) * 100).toFixed(1)}%`,
  );

  // ─── Named-scheme lookups ──────────────────────────────────────────────────
  let namedMiss = 0;
  const namedRows: string[] = [];
  const cache = new Map<string, string[]>();
  for (const [q, expected] of NAMED) {
    let names = cache.get(q);
    if (!names) {
      // Comparisons legitimately need a wider set, same as the route allows.
      const cap = /\bcompare\b|\bvs\.?\b|difference between/i.test(q) ? 6 : undefined;
      names = (await retrieve(q, [], cap)).map((s) => s.name);
      cache.set(q, names);
    }
    const hit = names.some((n) => n.toLowerCase().includes(expected.toLowerCase()));
    if (!hit) namedMiss++;
    namedRows.push(
      `${hit ? " ok " : "MISS"}  expect "${expected}" from "${q.slice(0, 44)}"` +
        (hit ? "" : `\n            got: ${names.join(" | ").slice(0, 120) || "(nothing)"}`),
    );
  }

  console.log("\n─── Named-scheme lookups ───────────────────────────────────");
  console.log(namedRows.join("\n"));
  console.log("────────────────────────────────────────────────────────────");
  console.log(`Named lookups: ${NAMED.length}   missed: ${namedMiss}\n`);

  process.exit(empty > 0 || namedMiss > 0 ? 1 : 0);
}

main();
