import { NextResponse } from "next/server";
import { Pool } from "@neondatabase/serverless";

export const runtime = "nodejs";

let tableReady = false;

async function ensureTable(pool: Pool): Promise<void> {
  if (tableReady) return;
  await pool.query(`
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

  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  try {
    await ensureTable(pool);
    await pool.query(
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
  } finally {
    await pool.end();
  }
}
