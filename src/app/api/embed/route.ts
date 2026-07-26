import { NextResponse } from "next/server";
import { fetchAllApprovedSchemes } from "@/lib/chat/db";
import { buildChunk } from "@/lib/chat/buildChunk";
import { embedText } from "@/lib/chat/embedder";
import { upsertEmbedding, ensureCollection } from "@/lib/chat/qdrant";
import { isAuthorized } from "@/lib/chat/adminAuth";

export const runtime = "nodejs";
export const maxDuration = 300;

export async function POST(req: Request): Promise<NextResponse> {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await ensureCollection();

    const rows = await fetchAllApprovedSchemes();
    let embedded = 0;
    let failed = 0;

    for (const row of rows) {
      try {
        const chunk = buildChunk(row);
        const vector = await embedText(chunk);
        await upsertEmbedding(String(row.id), chunk, vector);
        embedded++;
      } catch (err) {
        console.error(`[embed/all] failed for scheme ${row.id}:`, err);
        failed++;
      }
    }

    return NextResponse.json({ embedded, failed, total: rows.length });
  } catch (err) {
    // Log the detail server-side; the response stays generic so connection
    // strings and upstream error bodies are not echoed back to the caller.
    console.error("[embed/all] fatal:", err);
    return NextResponse.json({ error: "Embedding run failed" }, { status: 500 });
  }
}
