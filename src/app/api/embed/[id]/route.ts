import { NextResponse } from "next/server";
import { Pool } from "@neondatabase/serverless";
import { buildChunk } from "@/lib/chat/buildChunk";
import { embedText } from "@/lib/chat/embedder";
import { upsertEmbedding, ensureCollection } from "@/lib/chat/qdrant";

export const runtime = "nodejs";

function isAuthorized(req: Request): boolean {
  const key = req.headers.get("x-admin-key");
  return !!process.env.CHATBOT_ADMIN_KEY && key === process.env.CHATBOT_ADMIN_KEY;
}

export async function POST(
  req: Request,
  { params }: { params: { id: string } },
): Promise<NextResponse> {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = params;
  if (!id) return NextResponse.json({ error: "Missing scheme id" }, { status: 400 });

  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  let rows;
  try {
    const result = await pool.query(
      `SELECT id, slug, name, category, education_level, beneficiary_gender,
              benefit_type, amount, description, eligibility, documents,
              application_process, official_url, reviewed_at
       FROM schemes WHERE id = $1 AND status = 'approved'`,
      [id],
    );
    rows = result.rows;
  } finally {
    await pool.end();
  }

  if (!rows.length) {
    return NextResponse.json({ error: "Scheme not found or not approved" }, { status: 404 });
  }

  await ensureCollection();
  const chunk = buildChunk(rows[0] as Record<string, unknown>);
  const vector = await embedText(chunk);
  await upsertEmbedding(id, chunk, vector);

  return NextResponse.json({ embedded: true, id });
}
