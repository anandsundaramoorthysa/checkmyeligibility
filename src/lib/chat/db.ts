import { Pool } from "@neondatabase/serverless";
import type { Intent } from "./intentExtractor";

export type SchemeRow = Record<string, unknown>;

const SELECT_COLS = `
  id, slug, name, category, education_level, beneficiary_gender,
  benefit_type, amount, description, eligibility, documents,
  application_process, official_url, reviewed_at
`;

async function query<T = SchemeRow>(sql: string, params: unknown[] = []): Promise<T[]> {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  try {
    const result = await pool.query(sql, params);
    return result.rows as T[];
  } finally {
    await pool.end();
  }
}

export async function fetchApprovedSchemes(intent: Intent, limit = 20): Promise<SchemeRow[]> {
  const conditions: string[] = ["status = 'approved'"];
  const params: unknown[] = [];
  let idx = 1;

  if (intent.category) {
    conditions.push(`$${idx} = ANY(category)`);
    params.push(intent.category);
    idx++;
  }

  if (intent.educationLevel && intent.educationLevel !== "all") {
    conditions.push(`($${idx} = ANY(education_level) OR 'all' = ANY(education_level))`);
    params.push(intent.educationLevel);
    idx++;
  }

  if (intent.gender && intent.gender !== "all") {
    conditions.push(`(beneficiary_gender = $${idx} OR beneficiary_gender = 'all')`);
    params.push(intent.gender);
    idx++;
  }

  params.push(limit);
  return query(
    `SELECT ${SELECT_COLS} FROM schemes WHERE ${conditions.join(" AND ")} ORDER BY reviewed_at DESC NULLS LAST LIMIT $${idx}`,
    params,
  );
}

export async function fetchSchemesByIds(ids: string[]): Promise<SchemeRow[]> {
  if (!ids.length) return [];
  return query(`SELECT ${SELECT_COLS} FROM schemes WHERE id = ANY($1) AND status = 'approved'`, [ids]);
}

export async function fetchAllApprovedSchemes(): Promise<SchemeRow[]> {
  return query(
    `SELECT ${SELECT_COLS} FROM schemes WHERE status = 'approved' ORDER BY reviewed_at DESC NULLS LAST`,
  );
}
