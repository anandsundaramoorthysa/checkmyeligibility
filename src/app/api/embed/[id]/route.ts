import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
import { buildChunk } from "@/lib/chat/buildChunk";
import { embedText } from "@/lib/chat/embedder";
import { upsertEmbedding, ensureCollection } from "@/lib/chat/qdrant";
import { isAuthorized } from "@/lib/chat/adminAuth";

export const runtime = "nodejs";

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

let sql: ReturnType<typeof neon> | null = null;
function getSql() {
  if (!sql) sql = neon(process.env.DATABASE_URL!);
  return sql;
}

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
): Promise<NextResponse> {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  // `id` goes straight into a uuid column; reject bad shapes up front so the
  // driver does not surface a raw type-cast error.
  if (!id || !UUID_RE.test(id)) {
    return NextResponse.json({ error: "Invalid scheme id" }, { status: 400 });
  }

  try {
    const rows = (await getSql().query(
      `SELECT id, slug, name, category, education_level, beneficiary_gender,
              benefit_type, amount, description, eligibility, documents,
              application_process, official_url, reviewed_at
       FROM schemes WHERE id = $1 AND status = 'approved'`,
      [id],
    )) as Record<string, unknown>[];

    if (!rows.length) {
      return NextResponse.json({ error: "Scheme not found or not approved" }, { status: 404 });
    }

    // These were previously outside the try block, so a Qdrant or Gemini
    // outage surfaced as an unhandled rejection instead of a 500.
    await ensureCollection();
    const chunk = buildChunk(rows[0]);
    const vector = await embedText(chunk);
    await upsertEmbedding(id, chunk, vector);

    return NextResponse.json({ embedded: true, id });
  } catch (err) {
    console.error(`[embed/${id}] failed:`, err);
    return NextResponse.json({ error: "Embedding failed" }, { status: 500 });
  }
}
