import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
import { isRateLimited } from "@/lib/chat/rateLimiter";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 8 * 1024;

// Module-level HTTP client — the previous code built a new Pool per request
// and tore down a connection on every thumbs-up.
let sql: ReturnType<typeof neon> | null = null;
function getSql() {
  if (!sql) sql = neon(process.env.DATABASE_URL!);
  return sql;
}

let tableReady = false;
async function ensureTable(): Promise<void> {
  if (tableReady) return;
  await getSql().query(`
    CREATE TABLE IF NOT EXISTS chat_feedback (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      vote TEXT NOT NULL CHECK (vote IN ('up', 'down')),
      user_message TEXT,
      bot_response_snippet TEXT,
      has_schemes BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);
  tableReady = true;
}

export async function POST(req: Request): Promise<NextResponse> {
  // This endpoint is unauthenticated by design, so it needs the same per-IP
  // ceiling as /api/chat — otherwise anyone can write to the table in a loop.
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (await isRateLimited(`feedback:${ip}`)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429, headers: { "Retry-After": "60" } });
  }

  const declared = Number(req.headers.get("content-length") ?? 0);
  if (Number.isFinite(declared) && declared > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Payload too large" }, { status: 413 });
  }

  let body: { vote?: string; userMessage?: string; botSnippet?: string; hasSchemes?: boolean };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { vote, userMessage, botSnippet, hasSchemes } = body;
  if (vote !== "up" && vote !== "down") {
    return NextResponse.json({ error: "vote must be 'up' or 'down'" }, { status: 400 });
  }

  try {
    await ensureTable();
    await getSql().query(
      `INSERT INTO chat_feedback (vote, user_message, bot_response_snippet, has_schemes)
       VALUES ($1, $2, $3, $4)`,
      [
        vote,
        typeof userMessage === "string" ? userMessage.slice(0, 500) : null,
        typeof botSnippet === "string" ? botSnippet.slice(0, 300) : null,
        Boolean(hasSchemes),
      ],
    );
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[feedback] insert failed:", err);
    return NextResponse.json({ error: "Failed to save feedback" }, { status: 500 });
  }
}
