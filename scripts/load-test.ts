/**
 * Small concurrency check for the static pages.
 *
 * Deliberately does NOT hammer /api/chat: every call there costs an LLM
 * generation and an embedding, and the free provider tiers rate-limit quickly,
 * so a load test against it measures the provider's quota rather than this
 * app. The chat route's own ceiling is already covered by the rate-limit test.
 *
 * Usage: pnpm load:test [baseUrl] [concurrency] [requestsPerPath]
 */
const BASE = process.argv[2] ?? "http://localhost:3100";
const CONCURRENCY = Number(process.argv[3] ?? 20);
const PER_PATH = Number(process.argv[4] ?? 25);

const PATHS = ["/", "/explore", "/certificates", "/faq", "/how-it-works", "/about", "/chat"];

interface Sample {
  path: string;
  ms: number;
  status: number;
  ok: boolean;
}

function percentile(sorted: number[], p: number): number {
  if (!sorted.length) return 0;
  const i = Math.min(sorted.length - 1, Math.floor((p / 100) * sorted.length));
  return sorted[i];
}

async function main() {
  const jobs: string[] = [];
  for (const p of PATHS) for (let i = 0; i < PER_PATH; i++) jobs.push(p);
  // Interleave so we are not hitting one route at a time.
  jobs.sort(() => Math.random() - 0.5);

  const samples: Sample[] = [];
  let next = 0;
  const started = Date.now();

  async function worker() {
    while (next < jobs.length) {
      const path = jobs[next++];
      const t = Date.now();
      try {
        const res = await fetch(BASE + path, { redirect: "follow" });
        await res.arrayBuffer();
        samples.push({ path, ms: Date.now() - t, status: res.status, ok: res.ok });
      } catch {
        samples.push({ path, ms: Date.now() - t, status: 0, ok: false });
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  const wall = Date.now() - started;

  const all = samples.map((s) => s.ms).sort((a, b) => a - b);
  const failed = samples.filter((s) => !s.ok);

  console.log(`\n─── Load test ──────────────────────────────────────────────`);
  console.log(`target      ${BASE}`);
  console.log(`requests    ${samples.length} across ${PATHS.length} paths, ${CONCURRENCY} concurrent`);
  console.log(`wall time   ${(wall / 1000).toFixed(1)}s   throughput ${(samples.length / (wall / 1000)).toFixed(1)} req/s`);
  console.log(`failures    ${failed.length}`);
  console.log(`latency     p50 ${percentile(all, 50)}ms   p90 ${percentile(all, 90)}ms   p99 ${percentile(all, 99)}ms   max ${all[all.length - 1]}ms`);

  console.log(`\nby path:`);
  for (const p of PATHS) {
    const s = samples.filter((x) => x.path === p).map((x) => x.ms).sort((a, b) => a - b);
    if (!s.length) continue;
    console.log(`  ${p.padEnd(16)} p50 ${String(percentile(s, 50)).padStart(5)}ms   p90 ${String(percentile(s, 90)).padStart(5)}ms`);
  }
  if (failed.length) {
    const byStatus = new Map<number, number>();
    for (const f of failed) byStatus.set(f.status, (byStatus.get(f.status) ?? 0) + 1);
    console.log(`\nfailures by status: ${[...byStatus].map(([s, n]) => `${s}=${n}`).join(", ")}`);
  }
  console.log(`────────────────────────────────────────────────────────────\n`);

  process.exit(failed.length ? 1 : 0);
}

main();
