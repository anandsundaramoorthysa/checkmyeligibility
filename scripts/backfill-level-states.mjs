/**
 * Backfill level + states for all approved schemes using Gemini.
 * Analyzes name + description + eligibility text and returns
 * { level: "central"|"state"|"central-state", states: string[] }.
 *
 * Run with: node scripts/backfill-level-states.mjs
 */
import { readFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { neon } from "@neondatabase/serverless";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env.local
const envPath = resolve(__dirname, "../.env.local");
if (existsSync(envPath)) {
  const lines = readFileSync(envPath, "utf8").split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const val = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, "");
    if (key && !process.env[key]) process.env[key] = val;
  }
  console.log("Loaded .env.local");
}

const DB_URL = process.env.DATABASE_URL;
const GEMINI_KEY = process.env.GEMINI_API_KEY;

if (!DB_URL || !GEMINI_KEY) {
  console.error("Missing required env vars: DATABASE_URL, GEMINI_API_KEY");
  process.exit(1);
}

const VALID_STATES = new Set([
  "all-india", "andhra-pradesh", "assam", "bihar", "delhi", "gujarat",
  "karnataka", "kerala", "madhya-pradesh", "maharashtra", "odisha",
  "punjab", "rajasthan", "tamil-nadu", "telangana", "uttar-pradesh",
  "west-bengal", "chhattisgarh", "meghalaya",
]);

const STATE_NAME_MAP = {
  "andhra pradesh": "andhra-pradesh",
  "assam": "assam",
  "bihar": "bihar",
  "delhi": "delhi",
  "gujarat": "gujarat",
  "karnataka": "karnataka",
  "kerala": "kerala",
  "madhya pradesh": "madhya-pradesh",
  "maharashtra": "maharashtra",
  "odisha": "odisha",
  "orissa": "odisha",
  "punjab": "punjab",
  "rajasthan": "rajasthan",
  "tamil nadu": "tamil-nadu",
  "telangana": "telangana",
  "uttar pradesh": "uttar-pradesh",
  "west bengal": "west-bengal",
  "chhattisgarh": "chhattisgarh",
  "meghalaya": "meghalaya",
};

function normalizeState(s) {
  const slug = s.toLowerCase().trim().replace(/\s+/g, " ");
  return STATE_NAME_MAP[slug] ?? (VALID_STATES.has(slug.replace(/\s+/g, "-")) ? slug.replace(/\s+/g, "-") : null);
}

async function classifyScheme(name, description, eligibility) {
  const prompt = `You are classifying Indian government education schemes by their level and applicable states.

Scheme name: ${name}
${description ? `Description: ${description.slice(0, 500)}` : ""}
${eligibility ? `Eligibility: ${eligibility.slice(0, 300)}` : ""}

Respond ONLY with a JSON object. No explanation, no markdown, just the JSON.
Rules:
- "level" must be one of: "central", "state", or "central-state"
  - "central" = national schemes (e.g. NSP, PM scholarships, AICTE)
  - "state" = only for students of a specific state
  - "central-state" = central + states implement their own versions
- "states" must be an array:
  - If "central" → ["all-india"]
  - If "state" or "central-state" → list specific Indian states using these exact slugs:
    andhra-pradesh, assam, bihar, delhi, gujarat, karnataka, kerala, madhya-pradesh,
    maharashtra, odisha, punjab, rajasthan, tamil-nadu, telangana, uttar-pradesh,
    west-bengal, chhattisgarh, meghalaya
  - If states are unclear for a "state" scheme, use ["all-india"]

JSON format: {"level": "...", "states": ["..."]}`;

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0, maxOutputTokens: 400 },
      }),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Gemini ${res.status}: ${err.slice(0, 200)}`);
  }

  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";

  // Extract JSON from response (strip markdown fences if present)
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error(`No JSON in response: ${text.slice(0, 100)}`);

  const parsed = JSON.parse(jsonMatch[0]);
  const level = ["central", "state", "central-state"].includes(parsed.level) ? parsed.level : "central";
  const rawStates = Array.isArray(parsed.states) ? parsed.states : ["all-india"];
  const states = rawStates
    .map((s) => (typeof s === "string" ? normalizeState(s) : null))
    .filter(Boolean);

  return { level, states: states.length ? states : ["all-india"] };
}

// ---- main ----

const sql = neon(DB_URL);

const rows = await sql`
  SELECT id, name, description, eligibility
  FROM schemes
  WHERE status = 'approved'
  ORDER BY reviewed_at DESC NULLS LAST
`;

console.log(`Found ${rows.length} approved schemes to classify`);

let updated = 0;
let failed = 0;
let skipped = 0;
const t0 = Date.now();

for (const row of rows) {
  try {
    const { level, states } = await classifyScheme(row.name, row.description, row.eligibility);

    await sql`
      UPDATE schemes
      SET level = ${level}, states = ${JSON.stringify(states)}
      WHERE id = ${row.id}
    `;

    updated++;
    if (updated % 10 === 0) {
      const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
      console.log(`  ${updated}/${rows.length} classified (${elapsed}s)`);
    }

    // Small delay to avoid rate limits
    await new Promise((r) => setTimeout(r, 300));
  } catch (err) {
    console.error(`  FAILED scheme ${row.id} (${row.name}): ${err.message}`);
    failed++;
    // Wait longer after a failure
    await new Promise((r) => setTimeout(r, 1000));
  }
}

const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
console.log(`\nDone: ${updated} updated, ${failed} failed, ${skipped} skipped (${elapsed}s)`);
