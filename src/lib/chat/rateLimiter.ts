import { neon } from "@neondatabase/serverless";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 20;
/** Requests with no usable client IP share one bucket, so give it more room
 * than a single user would need while still capping total damage. */
const UNKNOWN_IP_MAX = 60;
const UNKNOWN_IP_KEY = "unknown";
/** Expired rows are swept opportunistically so the table cannot grow forever. */
const CLEANUP_EVERY_MS = 5 * 60_000;

let sql: ReturnType<typeof neon> | null = null;
function getSql() {
  if (!sql) sql = neon(process.env.DATABASE_URL!);
  return sql;
}

/** Ensure the rate_limits table exists. Called once on first use. */
let tableReady = false;
async function ensureTable(): Promise<void> {
  if (tableReady) return;
  await getSql().query(`
    CREATE TABLE IF NOT EXISTS rate_limits (
      ip TEXT PRIMARY KEY,
      count INTEGER NOT NULL DEFAULT 1,
      reset_at BIGINT NOT NULL
    )
  `);
  tableReady = true;
}

let lastCleanup = 0;
async function sweepExpired(now: number): Promise<void> {
  if (now - lastCleanup < CLEANUP_EVERY_MS) return;
  lastCleanup = now;
  try {
    await getSql().query(`DELETE FROM rate_limits WHERE reset_at < $1`, [now - RATE_LIMIT_WINDOW_MS]);
  } catch (err) {
    console.error("[rateLimiter] cleanup failed:", err);
  }
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

    const rows = (await getSql().query(
      `INSERT INTO rate_limits (ip, count, reset_at)
       VALUES ($1, 1, $2)
       ON CONFLICT (ip) DO UPDATE SET
         count    = CASE WHEN rate_limits.reset_at < $3 THEN 1    ELSE rate_limits.count + 1 END,
         reset_at = CASE WHEN rate_limits.reset_at < $3 THEN $2   ELSE rate_limits.reset_at  END
       RETURNING count`,
      [ip, resetAt, now],
    )) as { count: number }[];

    void sweepExpired(now);

    const count = rows[0]?.count ?? 1;
    const max = ip === UNKNOWN_IP_KEY ? UNKNOWN_IP_MAX : RATE_LIMIT_MAX;
    return count > max;
  } catch (err) {
    // If DB is unavailable, fail open (don't block the user)
    console.error("[rateLimiter] check failed, failing open:", err);
    return false;
  }
}
