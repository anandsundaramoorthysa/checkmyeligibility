import { timingSafeEqual } from "crypto";

/**
 * Constant-time check of the X-Admin-Key header. A plain `===` leaks how much
 * of the key matched through response timing, which is enough to recover a
 * secret one byte at a time.
 */
export function isAuthorized(req: Request): boolean {
  const expected = process.env.CHATBOT_ADMIN_KEY;
  if (!expected) return false;

  const provided = req.headers.get("x-admin-key");
  if (!provided) return false;

  const a = Buffer.from(provided, "utf8");
  const b = Buffer.from(expected, "utf8");
  if (a.length !== b.length) {
    // Still burn a comparison so length is not distinguishable by timing.
    timingSafeEqual(b, b);
    return false;
  }
  return timingSafeEqual(a, b);
}
