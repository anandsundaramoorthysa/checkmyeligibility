import { NextResponse } from "next/server";
import { fetchAllApprovedSchemes } from "@/lib/chat/db";
import { buildChunk } from "@/lib/chat/buildChunk";
import { embedText } from "@/lib/chat/embedder";
import { upsertEmbedding, ensureCollection } from "@/lib/chat/qdrant";

export const runtime = "nodejs";
export const maxDuration = 300; // 5 min — seeding all schemes takes time

function isAuthorized(req: Request): boolean {
  const key = req.headers.get("x-admin-key");
  return !!process.env.CHATBOT_ADMIN_KEY && key === process.env.CHATBOT_ADMIN_KEY;
}

export async function POST(req: Request): Promise<NextResponse> {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await ensureCollection();

  const rows = await fetchAllApprovedSchemes();
  let embedded = 0;
  let failed = 0;
  let firstError: string | null = null;

  for (const row of rows) {
    try {
      const chunk = buildChunk(row);
      let vector: number[];
      try {
        vector = await embedText(chunk);
      } catch (err) {
        throw new Error(`embed step: ${err instanceof Error ? err.message : String(err)}`);
      }
      try {
        await upsertEmbedding(String(row.id), chunk, vector);
      } catch (err) {
        throw new Error(`upsert step (id=${row.id}): ${err instanceof Error ? err.message : String(err)}`);
      }
      embedded++;
    } catch (err) {
      console.error(`[embed/all] failed for scheme ${row.id}:`, err);
      if (!firstError) firstError = err instanceof Error ? err.message : String(err);
      failed++;
    }
  }

  return NextResponse.json({ embedded, failed, total: rows.length, firstError });
}
