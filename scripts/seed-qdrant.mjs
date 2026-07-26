/**
 * Local seeding script — run with:
 *   node scripts/seed-qdrant.mjs
 * Requires .env.local to be present in the project root.
 */
import { createRequire } from "module";
import { readFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

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

const adminKey = process.env.CHATBOT_ADMIN_KEY;
if (!adminKey) { console.error("CHATBOT_ADMIN_KEY not set"); process.exit(1); }

// Use the local Next.js dev server or fallback to production URL
const BASE = process.env.SEED_URL ?? "https://checkmyeligibility.vercel.app";

console.log(`Seeding via ${BASE}/api/embed ...`);
const t0 = Date.now();

try {
  const res = await fetch(`${BASE}/api/embed`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-admin-key": adminKey,
    },
    body: "{}",
    // No timeout here — let it run as long as needed
  });

  const body = await res.text();
  const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
  console.log(`Status: ${res.status} (${elapsed}s)`);
  try { console.log(JSON.stringify(JSON.parse(body), null, 2)); }
  catch { console.log(body); }
} catch (err) {
  console.error("Fetch failed:", err.message);
  process.exit(1);
}
