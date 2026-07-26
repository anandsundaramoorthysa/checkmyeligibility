/** Joins a DB array column value into a readable string.
 * Handles both JS arrays (from @neondatabase/serverless Pool) and
 * JSON-stringified arrays (legacy psycopg2 format). */
export function joinArray(val: unknown): string {
  if (Array.isArray(val)) return val.filter(Boolean).join(", ");
  if (typeof val === "string") {
    try {
      const parsed: unknown = JSON.parse(val);
      if (Array.isArray(parsed)) return parsed.filter(Boolean).join(", ");
    } catch {
      // not JSON — return as-is
    }
    return val;
  }
  return val ? String(val) : "";
}

/** Returns the first element of a DB array column value. */
export function firstOfArray(val: unknown): string {
  if (Array.isArray(val)) return String(val[0] ?? "");
  if (typeof val === "string") {
    try {
      const parsed: unknown = JSON.parse(val);
      if (Array.isArray(parsed)) return String((parsed as unknown[])[0] ?? "");
    } catch {
      // not JSON
    }
    return val;
  }
  return val ? String(val) : "";
}
