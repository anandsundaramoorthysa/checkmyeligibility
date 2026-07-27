/**
 * Cleans junk out of the stored official portal URLs.
 *
 * Two problems found in the live data:
 *   - Three URLs carry "?utm_source=chatgpt.com", left over from how the rows
 *     were sourced. It is a dead giveaway of provenance on a public site, and
 *     the parameter has no business in a government portal link.
 *   - One URL ends in "/." which is not a valid path.
 *
 * DRY RUN BY DEFAULT. It prints what it would change and touches nothing.
 * Pass --fix to actually write, and only against a database you intend to edit.
 *
 * Usage:
 *   pnpm clean:urls          # report only
 *   pnpm clean:urls -- --fix # apply
 */
import { neon } from "@neondatabase/serverless";

const APPLY = process.argv.includes("--fix");

/** Tracking parameters that should never appear on an official portal link. */
const JUNK_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "fbclid", "gclid"];

export function cleanUrl(raw: string): string {
  let out = raw.trim();
  // Trailing punctuation picked up from prose, e.g. "https://x.gov.in/."
  out = out.replace(/[.,;)\]]+$/, "");
  try {
    const u = new URL(out);
    for (const p of JUNK_PARAMS) u.searchParams.delete(p);
    // Drop a now-empty "?" so the stored value stays tidy.
    u.search = u.searchParams.toString() ? `?${u.searchParams.toString()}` : "";
    out = u.toString();
    // URL() re-adds a trailing slash on bare hosts; keep that, it is canonical.
  } catch {
    // Not parseable — leave whatever is there rather than mangling it further.
  }
  return out;
}

async function main() {
  const sql = neon(process.env.DATABASE_URL!);
  const rows = (await sql.query(
    `SELECT id, name, official_url FROM schemes
     WHERE official_url IS NOT NULL AND official_url <> ''`,
  )) as { id: string; name: string; official_url: string }[];

  const changes = rows
    .map((r) => ({ ...r, cleaned: cleanUrl(r.official_url) }))
    .filter((r) => r.cleaned !== r.official_url);

  console.log(`\nscanned ${rows.length} URLs, ${changes.length} need cleaning\n`);
  for (const c of changes) {
    console.log(`  ${c.name}`);
    console.log(`    from: ${c.official_url}`);
    console.log(`    to:   ${c.cleaned}`);
  }

  if (!changes.length) {
    console.log("nothing to do\n");
    return;
  }

  if (!APPLY) {
    console.log(`\nDRY RUN — nothing written. Re-run with --fix to apply.\n`);
    return;
  }

  for (const c of changes) {
    await sql.query(`UPDATE schemes SET official_url = $1 WHERE id = $2`, [c.cleaned, c.id]);
  }
  console.log(`\napplied ${changes.length} update(s)\n`);
}

main().catch((e) => {
  console.error("ERR:", e instanceof Error ? e.message : String(e));
  process.exit(1);
});
