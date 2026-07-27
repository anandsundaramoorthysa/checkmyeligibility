import { neon } from "@neondatabase/serverless";
import type { Intent } from "./intentExtractor";

export type SchemeRow = Record<string, unknown>;

const SELECT_COLS = `
  id, slug, name, category, education_level, beneficiary_gender,
  benefit_type, amount, description, eligibility, documents,
  application_process, official_url, level, states, reviewed_at
`;

// The HTTP client, not Pool: these are one-shot reads, so a per-query HTTP
// round trip beats standing up a WebSocket pool on every cold start, and it
// works on any runtime with fetch instead of needing a WebSocket constructor.
let sql: ReturnType<typeof neon> | null = null;
function getSql() {
  if (!sql) sql = neon(process.env.DATABASE_URL!);
  return sql;
}

async function query<T = SchemeRow>(text: string, params: unknown[] = []): Promise<T[]> {
  return (await getSql().query(text, params)) as T[];
}

/**
 * `category`, `education_level`, `benefit_type` and `states` are TEXT columns
 * holding a JSON array, e.g. '["ug","pg"]' — they are not Postgres arrays, so
 * `= ANY(col)` raises "op ANY/ALL (array) requires array on right side" and
 * takes the whole retrieval down with it. This builds a containment test that
 * works on the JSON-array form and still tolerates a bare scalar value.
 */
function jsonContains(col: string, paramIdx: number): string {
  // Everything goes through ::text first so this works whether the column is
  // still TEXT holding JSON ('["ug","pg"]') or has been migrated to a real
  // text[] ('{ug,pg}'). That keeps migration 001 safe to run at any point
  // without a coordinated code deploy, rather than requiring the two to land
  // together.
  return `(${col} IS NOT NULL AND EXISTS (
    SELECT 1 FROM unnest(
      CASE
        WHEN ${col}::text ~ '^\\s*\\[' THEN ARRAY(SELECT jsonb_array_elements_text(${col}::text::jsonb))
        WHEN ${col}::text ~ '^\\s*\\{' THEN (${col}::text)::text[]
        ELSE ARRAY[${col}::text]
      END
    ) AS tok WHERE tok = $${paramIdx}
  ))`;
}

/**
 * Ranked lookup. Every extracted signal contributes to a relevance score
 * rather than acting as a hard AND filter, so one bad guess from the keyword
 * extractor degrades the ordering instead of returning an empty list. When at
 * least one signal was extracted we require a non-zero score, which keeps
 * results on-topic without ever failing closed on a single mismatch.
 */
export async function fetchApprovedSchemes(intent: Intent, limit = 20): Promise<SchemeRow[]> {
  const params: unknown[] = [];
  const scoreParts: string[] = [];
  let idx = 1;

  if (intent.benefitType) {
    params.push(intent.benefitType);
    scoreParts.push(`(CASE WHEN ${jsonContains("benefit_type", idx++)} THEN 3 ELSE 0 END)`);
  }
  if (intent.socialCategory) {
    params.push(intent.socialCategory);
    scoreParts.push(`(CASE WHEN ${jsonContains("category", idx++)} THEN 3 ELSE 0 END)`);
  }
  if (intent.educationLevel) {
    params.push(intent.educationLevel);
    const levelMatch = jsonContains("education_level", idx++);
    scoreParts.push(
      `(CASE WHEN ${levelMatch} THEN 3 WHEN ${jsonContains("education_level", idx++)} THEN 1 ELSE 0 END)`,
    );
    params.push("all");
  }
  if (intent.gender && intent.gender !== "all") {
    params.push(intent.gender);
    scoreParts.push(
      `(CASE WHEN beneficiary_gender = $${idx++} THEN 2 WHEN beneficiary_gender = 'all' THEN 1 ELSE 0 END)`,
    );
  }
  if (intent.state) {
    params.push(intent.state);
    const stateMatch = jsonContains("states", idx++);
    scoreParts.push(
      `(CASE WHEN ${stateMatch} THEN 3 WHEN ${jsonContains("states", idx++)} THEN 1 ELSE 0 END)`,
    );
    params.push("all-india");
  }

  // Name matches score highest: if a student names a scheme, that scheme is
  // what they want, and no combination of category tokens can express it.
  for (const term of intent.nameTerms ?? []) {
    params.push(`%${term}%`);
    scoreParts.push(`(CASE WHEN name ILIKE $${idx++} THEN 4 ELSE 0 END)`);
  }

  // No usable signal — fall back to the most recently reviewed schemes.
  if (!scoreParts.length) {
    params.push(limit);
    return query(
      `SELECT ${SELECT_COLS} FROM schemes
       WHERE status = 'approved'
       ORDER BY reviewed_at DESC NULLS LAST
       LIMIT $${idx}`,
      params,
    );
  }

  const score = scoreParts.join(" + ");
  params.push(limit);
  return query(
    `SELECT ${SELECT_COLS}, (${score}) AS relevance
     FROM schemes
     WHERE status = 'approved' AND (${score}) > 0
     ORDER BY relevance DESC, reviewed_at DESC NULLS LAST
     LIMIT $${idx}`,
    params,
  );
}

export async function fetchSchemesByIds(ids: string[]): Promise<SchemeRow[]> {
  if (!ids.length) return [];
  return query(`SELECT ${SELECT_COLS} FROM schemes WHERE id = ANY($1::uuid[]) AND status = 'approved'`, [ids]);
}

export async function fetchAllApprovedSchemes(): Promise<SchemeRow[]> {
  return query(
    `SELECT ${SELECT_COLS} FROM schemes WHERE status = 'approved' ORDER BY reviewed_at DESC NULLS LAST`,
  );
}
