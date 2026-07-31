import { createHmac, randomBytes, timingSafeEqual } from "crypto";
import { neon } from "@neondatabase/serverless";
import type { Message } from "@/lib/types";

/** Cookie holding the signed thread id. */
export const THREAD_COOKIE = "cme_thread";
/** Threads are pruned after this long without activity. */
const RETENTION_DAYS = 30;
/** Cookie lifetime, matched to retention so a stale cookie cannot outlive its row. */
const COOKIE_MAX_AGE_S = RETENTION_DAYS * 24 * 60 * 60;
/** Turns replayed into the UI when a returning student reopens the page. */
const HISTORY_LIMIT = 40;
/** Expired threads are swept opportunistically rather than on a cron. */
const CLEANUP_EVERY_MS = 15 * 60_000;

let sql: ReturnType<typeof neon> | null = null;
function getSql() {
  if (!sql) sql = neon(process.env.DATABASE_URL!);
  return sql;
}

/**
 * Secret for signing the thread cookie. The id itself is 256 bits of entropy,
 * so it is not guessable; the signature is what stops someone probing ids they
 * did not receive. Without a secret configured we refuse to issue threads at
 * all rather than hand out unauthenticated ones, and the client quietly falls
 * back to browser-only history.
 */
function secret(): string | null {
  return process.env.SESSION_SECRET || process.env.CHATBOT_ADMIN_KEY || null;
}

export function threadPersistenceEnabled(): boolean {
  return Boolean(secret() && process.env.DATABASE_URL);
}

function sign(id: string, key: string): string {
  return createHmac("sha256", key).update(id).digest("base64url");
}

/** `<id>.<signature>` — opaque to the client, verified on every read. */
export function issueThreadToken(): { id: string; token: string } | null {
  const key = secret();
  if (!key) return null;
  const id = randomBytes(32).toString("base64url");
  return { id, token: `${id}.${sign(id, key)}` };
}

/** Returns the thread id only when the signature checks out. */
export function readThreadToken(token: string | undefined): string | null {
  const key = secret();
  if (!key || !token) return null;
  const dot = token.lastIndexOf(".");
  if (dot <= 0) return null;
  const id = token.slice(0, dot);
  const provided = Buffer.from(token.slice(dot + 1));
  const expected = Buffer.from(sign(id, key));
  if (provided.length !== expected.length) return null;
  return timingSafeEqual(provided, expected) ? id : null;
}

export function threadCookie(token: string): string {
  // Lax rather than Strict: the assistant is reached by links from the
  // marketing pages, and Strict would drop the cookie on those navigations.
  return [
    `${THREAD_COOKIE}=${token}`,
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
    `Max-Age=${COOKIE_MAX_AGE_S}`,
    process.env.NODE_ENV === "production" ? "Secure" : "",
  ]
    .filter(Boolean)
    .join("; ");
}

let tableReady = false;
async function ensureTables(): Promise<void> {
  if (tableReady) return;
  await getSql().query(`
    CREATE TABLE IF NOT EXISTS chat_threads (
      id           TEXT PRIMARY KEY,
      created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      last_seen_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);
  await getSql().query(`
    CREATE TABLE IF NOT EXISTS chat_messages (
      id         BIGSERIAL PRIMARY KEY,
      thread_id  TEXT        NOT NULL REFERENCES chat_threads(id) ON DELETE CASCADE,
      role       TEXT        NOT NULL CHECK (role IN ('user', 'assistant')),
      content    TEXT        NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);
  await getSql().query(
    `CREATE INDEX IF NOT EXISTS chat_messages_thread_idx ON chat_messages (thread_id, id)`,
  );
  tableReady = true;
}

let lastCleanup = 0;
async function sweepExpired(): Promise<void> {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_EVERY_MS) return;
  lastCleanup = now;
  try {
    // Messages go with the thread via ON DELETE CASCADE.
    await getSql().query(
      `DELETE FROM chat_threads WHERE last_seen_at < NOW() - ($1 || ' days')::interval`,
      [String(RETENTION_DAYS)],
    );
  } catch (err) {
    console.error("[threadStore] cleanup failed:", err);
  }
}

export async function touchThread(id: string): Promise<void> {
  try {
    await ensureTables();
    await getSql().query(
      `INSERT INTO chat_threads (id) VALUES ($1)
       ON CONFLICT (id) DO UPDATE SET last_seen_at = NOW()`,
      [id],
    );
    void sweepExpired();
  } catch (err) {
    console.error("[threadStore] touch failed:", err);
  }
}

export async function appendTurn(
  id: string,
  turns: { role: "user" | "assistant"; content: string }[],
): Promise<void> {
  const usable = turns.filter((t) => t.content.trim());
  if (!usable.length) return;
  try {
    await ensureTables();
    for (const t of usable) {
      await getSql().query(
        `INSERT INTO chat_messages (thread_id, role, content) VALUES ($1, $2, $3)`,
        [id, t.role, t.content.slice(0, 4000)],
      );
    }
  } catch (err) {
    // History is a convenience; never fail a reply because it could not be saved.
    console.error("[threadStore] append failed:", err);
  }
}

export async function loadThread(id: string): Promise<Message[]> {
  try {
    await ensureTables();
    const rows = (await getSql().query(
      `SELECT role, content, created_at FROM chat_messages
       WHERE thread_id = $1
       ORDER BY id DESC
       LIMIT $2`,
      [id, HISTORY_LIMIT],
    )) as { role: "user" | "assistant"; content: string; created_at: string }[];

    return rows
      .reverse()
      .map((r, i) => ({
        id: `srv-${id.slice(0, 8)}-${i}`,
        role: r.role,
        content: r.content,
        createdAt: new Date(r.created_at).getTime(),
      }));
  } catch (err) {
    console.error("[threadStore] load failed:", err);
    return [];
  }
}

/** Drops a thread outright — used by the client's "clear chat" control. */
export async function deleteThread(id: string): Promise<void> {
  try {
    await ensureTables();
    await getSql().query(`DELETE FROM chat_threads WHERE id = $1`, [id]);
  } catch (err) {
    console.error("[threadStore] delete failed:", err);
  }
}
