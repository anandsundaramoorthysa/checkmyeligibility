/**
 * Direct seeding script — runs locally, no Vercel involved.
 * Uses env vars from .env.local.
 * Run with: node scripts/seed-direct.mjs
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
const QDRANT_URL = process.env.QDRANT_URL;
const QDRANT_KEY = process.env.QDRANT_API_KEY;
const COLLECTION = process.env.QDRANT_COLLECTION ?? "scheme_embeddings";
const VECTOR_SIZE = 768;

if (!DB_URL || !GEMINI_KEY || !QDRANT_URL) {
  console.error("Missing required env vars: DATABASE_URL, GEMINI_API_KEY, QDRANT_URL");
  process.exit(1);
}

// ---- helpers ----

function joinArray(val) {
  if (Array.isArray(val)) return val.filter(Boolean).join(", ");
  if (typeof val === "string") {
    try {
      const parsed = JSON.parse(val);
      if (Array.isArray(parsed)) return parsed.filter(Boolean).join(", ");
    } catch { return val; }
    return val;
  }
  return val ? String(val) : "";
}

function buildChunk(row) {
  const parts = [`Scheme: ${row.name ?? ""}`];
  if (row.description) parts.push(`Description: ${row.description}`);
  const cat = joinArray(row.category);
  if (cat) parts.push(`Category: ${cat}`);
  const edu = joinArray(row.education_level);
  if (edu) parts.push(`Education level: ${edu}`);
  const bt = joinArray(row.benefit_type);
  if (bt) {
    const benefit = row.amount ? `${bt} — ${row.amount}` : bt;
    parts.push(`Benefit: ${benefit}`);
  }
  if (row.eligibility) parts.push(`Eligibility: ${row.eligibility}`);
  if (row.documents) parts.push(`Documents required: ${row.documents}`);
  if (row.application_process) parts.push(`How to apply: ${row.application_process}`);
  if (row.official_url) parts.push(`Official URL: ${row.official_url}`);
  return parts.join("\n");
}

async function embedText(text) {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:embedContent?key=${GEMINI_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: { parts: [{ text }] },
        outputDimensionality: VECTOR_SIZE,
      }),
    }
  );
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Gemini embed ${res.status}: ${err}`);
  }
  const data = await res.json();
  return data.embedding.values;
}

async function qdrantRequest(method, path, body) {
  const headers = { "Content-Type": "application/json" };
  if (QDRANT_KEY) headers["api-key"] = QDRANT_KEY;
  const res = await fetch(`${QDRANT_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let json;
  try { json = JSON.parse(text); } catch { json = { raw: text }; }
  return { ok: res.ok, status: res.status, json };
}

async function ensureCollection() {
  const r = await qdrantRequest("PUT", `/collections/${COLLECTION}`, {
    vectors: { size: VECTOR_SIZE, distance: "Cosine" },
  });
  if (!r.ok) {
    const msg = JSON.stringify(r.json);
    if (!msg.includes("already exists") && !msg.includes("409") && r.status !== 409) {
      throw new Error(`Create collection failed ${r.status}: ${msg}`);
    }
  }
  console.log(`Collection '${COLLECTION}' ready`);
}

async function upsertEmbedding(id, chunkText, vector) {
  const r = await qdrantRequest("PUT", `/collections/${COLLECTION}/points`, {
    wait: true,
    points: [{ id, vector, payload: { chunk_text: chunkText } }],
  });
  if (!r.ok) throw new Error(`Upsert failed ${r.status}: ${JSON.stringify(r.json)}`);
}

// ---- main ----

const sql = neon(DB_URL);

const rows = await sql`
  SELECT id, slug, name, category, education_level, beneficiary_gender,
         benefit_type, amount, description, eligibility, documents,
         application_process, official_url, reviewed_at
  FROM schemes
  WHERE status = 'approved'
  ORDER BY reviewed_at DESC NULLS LAST
`;

console.log(`Found ${rows.length} approved schemes`);

await ensureCollection();

let embedded = 0;
let failed = 0;
const t0 = Date.now();

for (const row of rows) {
  try {
    const chunk = buildChunk(row);
    const vector = await embedText(chunk);
    await upsertEmbedding(String(row.id), chunk, vector);
    embedded++;
    if (embedded % 10 === 0) {
      const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
      console.log(`  ${embedded}/${rows.length} embedded (${elapsed}s)`);
    }
  } catch (err) {
    console.error(`  FAILED scheme ${row.id} (${row.name}):`, err.message);
    failed++;
  }
}

const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
console.log(`\nDone: ${embedded} embedded, ${failed} failed, ${rows.length} total (${elapsed}s)`);
