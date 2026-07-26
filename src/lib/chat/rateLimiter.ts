import { Pool } from "@neondatabase/serverless";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 20;

let pool: Pool | null = null;
function getPool(): Pool {
  if (!pool) pool = new Pool({ connectionString: process.env.DATABASE_URL });
  return pool;
}

/** Ensure the rate_limits table exists. Called once on first use. */
let tableReady = false;
async function ensureTable(): Promise<void> {
  if (tableReady) return;
  await getPool().query(`
    CREATE TABLE IF NOT EXISTS rate_limits (
      ip TEXT PRIMARY KEY,
      count INTEGER NOT NULL DEFAULT 1,
      reset_at BIGINT NOT NULL
    )
  `);
  tableReady = true;
}

/**
 * Returns true if the IP is over the rate limit.
 * Uses an upsert so the increment is atomic across instances.
 */
export async function isRateLimited(ip: string): Promise<boolean> {
  try {
    await ensureTable();
    const now = Date.now();
    const resetAt = now + RATE_LIMIT_WINDOW_MS;

    const result = await getPool().query<{ count: number }>(
      `INSERT INTO rate_limits (ip, count, reset_at)
       VALUES ($1, 1, $2)
       ON CONFLICT (ip) DO UPDATE SET
         count    = CASE WHEN rate_limits.reset_at < $3 THEN 1    ELSE rate_limits.count + 1 END,
         reset_at = CASE WHEN rate_limits.reset_at < $3 THEN $2   ELSE rate_limits.reset_at  END
       RETURNING count`,
      [ip, resetAt, now],
    );

    const count = result.rows[0]?.count ?? 1;
    return count > RATE_LIMIT_MAX;
  } catch {
    // If DB is unavailable, fail open (don't block the user)
    return false;
  }
}
