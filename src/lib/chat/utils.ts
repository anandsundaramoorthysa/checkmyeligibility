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

/**
 * The DB stores enum-ish tokens ("phd", "fee_waiver", "sc_st"). Those are fine
 * for filtering but must never reach the student — a scheme card that reads
 * "Education level: phd" or "grant — ₹20,000" looks unfinished.
 */
const TOKEN_LABELS: Record<string, string> = {
  // education_level
  primary: "Primary school",
  upper_primary: "Upper primary",
  secondary: "Secondary (class 9–10)",
  higher_secondary: "Higher secondary (class 11–12)",
  diploma: "Diploma",
  ug: "Undergraduate",
  pg: "Postgraduate",
  phd: "PhD",
  professional: "Professional course",
  all: "All levels",
  // benefit_type
  scholarship: "Scholarship",
  stipend: "Stipend",
  grant: "Grant",
  loan: "Education loan",
  fee_waiver: "Fee waiver",
  hostel: "Hostel support",
  // category
  fellowship: "Fellowship",
  sc_st: "SC / ST",
  obc: "OBC",
  bc_mbc: "BC / MBC",
  ews: "EWS",
  minority: "Minority",
  girl_women: "Girls and women",
  differently_abled: "Differently abled",
  general_merit: "General merit",
  // beneficiary_gender
  female: "Female",
  male: "Male",
};

/** Human-readable form of a single DB token. */
export function tokenLabel(token: string): string {
  const key = token.trim().toLowerCase();
  if (TOKEN_LABELS[key]) return TOKEN_LABELS[key];
  // Unknown token — still avoid showing raw snake_case.
  const spaced = key.replace(/[_-]+/g, " ").trim();
  return spaced ? spaced.charAt(0).toUpperCase() + spaced.slice(1) : token;
}

/** Like joinArray, but maps each token to its human-readable label. */
export function joinLabels(val: unknown): string {
  const joined = joinArray(val);
  if (!joined) return "";
  return joined
    .split(",")
    .map((t) => tokenLabel(t))
    .filter(Boolean)
    .join(", ");
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
