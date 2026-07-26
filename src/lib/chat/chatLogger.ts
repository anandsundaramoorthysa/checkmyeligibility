import { createHash } from "crypto";
import { neon } from "@neondatabase/serverless";

let sql: ReturnType<typeof neon> | null = null;
function getSql() {
  if (!sql) sql = neon(process.env.DATABASE_URL!);
  return sql;
}

let tableReady = false;
async function ensureTable(): Promise<void> {
  if (tableReady) return;
  await getSql()`
    CREATE TABLE IF NOT EXISTS chat_logs (
      id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
      created_at    TIMESTAMPTZ NOT NULL    DEFAULT NOW(),
      ip_hash       TEXT        NOT NULL,
      message       TEXT        NOT NULL,
      scheme_count  INTEGER     NOT NULL    DEFAULT 0,
      scheme_slugs  TEXT,
      is_fallback   BOOLEAN     NOT NULL    DEFAULT false,
      is_comparison BOOLEAN     NOT NULL    DEFAULT false,
      is_grievance  BOOLEAN     NOT NULL    DEFAULT false,
      is_blocked    BOOLEAN     NOT NULL    DEFAULT false,
      block_reason  TEXT,
      latency_ms    INTEGER
    )
  `;
  await getSql()`CREATE INDEX IF NOT EXISTS chat_logs_created_at_idx ON chat_logs (created_at DESC)`;
  tableReady = true;
}

export interface ChatLogEntry {
  ipHash: string;
  message: string;
  schemeCount: number;
  schemeSlugs?: string[];
  isFallback: boolean;
  isComparison: boolean;
  isGrievance: boolean;
  isBlocked: boolean;
  blockReason?: string;
  latencyMs?: number;
}

export function hashIp(ip: string): string {
  return createHash("sha256").update(ip).digest("hex").slice(0, 16);
}

/** Awaitable — call with `await` to guarantee the row is inserted before streaming starts. */
export async function logChat(entry: ChatLogEntry): Promise<void> {
  try {
    await ensureTable();
    await getSql()`
      INSERT INTO chat_logs
        (ip_hash, message, scheme_count, scheme_slugs,
         is_fallback, is_comparison, is_grievance,
         is_blocked, block_reason, latency_ms)
      VALUES (
        ${entry.ipHash},
        ${entry.message.slice(0, 500)},
        ${entry.schemeCount},
        ${entry.schemeSlugs?.length ? JSON.stringify(entry.schemeSlugs) : null},
        ${entry.isFallback},
        ${entry.isComparison},
        ${entry.isGrievance},
        ${entry.isBlocked},
        ${entry.blockReason ?? null},
        ${entry.latencyMs ?? null}
      )
    `;
  } catch {
    // Never surface logging errors to the user
  }
}
