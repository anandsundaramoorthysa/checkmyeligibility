/**
 * Link checker for the official portal URLs.
 *
 * Every scheme card ends in "Apply on official portal". A dead link there is
 * the worst possible failure for this product: the student has done everything
 * right and lands on nothing. This walks all approved schemes and reports the
 * ones that do not resolve.
 *
 * Government portals are slow and often reject HEAD, so each URL gets a HEAD
 * first and a GET retry, with a generous timeout. Reports rather than fails,
 * because these are third-party sites and transient outages are common.
 *
 * Usage: pnpm check:urls
 */
import { neon } from "@neondatabase/serverless";

const TIMEOUT_MS = 20_000;
const CONCURRENCY = 8;

interface Row {
  slug: string;
  name: string;
  official_url: string;
}

async function probe(url: string): Promise<{ ok: boolean; status: number | string }> {
  for (const method of ["HEAD", "GET"] as const) {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
    try {
      const res = await fetch(url, {
        method,
        signal: ctrl.signal,
        redirect: "follow",
        headers: {
          // Some portals block default agents outright.
          "user-agent":
            "Mozilla/5.0 (compatible; CheckMyEligibility-linkcheck/1.0; +https://checkmyeligibility.in)",
        },
      });
      clearTimeout(t);
      // Many gov portals answer HEAD with 403/405 but serve GET fine.
      if (res.status === 403 || res.status === 405) {
        if (method === "HEAD") continue;
      }
      return { ok: res.status < 400, status: res.status };
    } catch (e) {
      clearTimeout(t);
      if (method === "GET") {
        const msg = e instanceof Error ? e.message : String(e);
        return { ok: false, status: /abort/i.test(msg) ? "timeout" : msg.slice(0, 40) };
      }
    }
  }
  return { ok: false, status: "unreachable" };
}

async function main() {
  const sql = neon(process.env.DATABASE_URL!);
  const rows = (await sql.query(
    `SELECT slug, name, official_url FROM schemes
     WHERE status = 'approved' AND official_url IS NOT NULL AND official_url <> ''
     ORDER BY name`,
  )) as Row[];

  console.log(`checking ${rows.length} official URLs, ${CONCURRENCY} at a time\n`);

  const bad: string[] = [];
  let done = 0;
  let queue = 0;

  async function worker() {
    while (queue < rows.length) {
      const row = rows[queue++];
      const { ok, status } = await probe(row.official_url);
      done++;
      if (!ok) {
        bad.push(`  [${String(status).padEnd(11)}] ${row.name}\n      ${row.official_url}`);
      }
      if (done % 25 === 0) console.log(`  ...${done}/${rows.length}`);
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  console.log("\n─── Official URL check ─────────────────────────────────────");
  if (bad.length) {
    console.log(`unreachable or erroring (${bad.length}):\n`);
    console.log(bad.sort().join("\n"));
  } else {
    console.log("all URLs resolved");
  }
  console.log("────────────────────────────────────────────────────────────");
  console.log(`total: ${rows.length}   reachable: ${rows.length - bad.length}   failing: ${bad.length}\n`);

  // Third-party outages should not break a build, so this always exits 0.
  // Read the list and fix the data.
}

main().catch((e) => {
  console.error("ERR:", e instanceof Error ? e.message : String(e));
  process.exit(1);
});
