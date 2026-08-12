import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbLd } from "@/lib/seo/jsonld";
import { SITE } from "@/lib/site";
import { TEAM } from "@/data/team";
import { TeamGrid } from "./_components/TeamGrid";
import type { GitHubStat } from "./_components/MemberCard";

export const metadata: Metadata = buildMetadata({
  title: "Our Team",
  description:
    "Meet the 18-person student team behind CheckMyEligibility, built by the Department of Data Science, Loyola College, Chennai.",
  path: "/team",
});

// Revalidate once per hour so GitHub stats stay reasonably fresh.
export const revalidate = 3600;

// ─── GitHub stats ──────────────────────────────────────────────────────────

const REPOS = [
  "anandsundaramoorthysa/checkmyeligibility",
  "anandsundaramoorthysa/checkmyeligibility-console",
  "anandsundaramoorthysa/checkmyeligibility-backend-chatbot",
  "anandsundaramoorthysa/goveligify",
];

const REPO_QUERY = REPOS.map((r) => `repo:${r}`).join("+");

async function ghFetch(path: string): Promise<Response> {
  const token = process.env.GITHUB_TOKEN;
  return fetch(`https://api.github.com${path}`, {
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "checkmyeligibility",
    },
    next: { revalidate: 3600 },
  });
}

async function searchCount(q: string): Promise<number> {
  try {
    const res = await ghFetch(`/search/issues?q=${encodeURIComponent(q)}&per_page=1`);
    if (!res.ok) return 0;
    const data = (await res.json()) as { total_count?: number };
    return data.total_count ?? 0;
  } catch {
    return 0;
  }
}

async function commitCount(username: string): Promise<number> {
  let total = 0;
  await Promise.all(
    REPOS.map(async (repo) => {
      try {
        for (let page = 1; page <= 3; page++) {
          const res = await ghFetch(
            `/repos/${repo}/commits?author=${encodeURIComponent(username)}&per_page=100&page=${page}`,
          );
          if (!res.ok) break;
          const data = (await res.json()) as unknown[];
          if (!Array.isArray(data) || data.length === 0) break;
          total += data.length;
          if (data.length < 100) break;
        }
      } catch {
        // skip per-repo failures
      }
    }),
  );
  return total;
}

async function fetchStatForMember(username: string): Promise<GitHubStat> {
  try {
    const [prsMerged, commits, reviewsDone] = await Promise.all([
      searchCount(`type:pr+is:merged+author:${username}+${REPO_QUERY}`),
      commitCount(username),
      searchCount(`type:pr+reviewed-by:${username}+${REPO_QUERY}`),
    ]);
    return { prsMerged, commits, reviewsDone };
  } catch {
    return { prsMerged: 0, commits: 0, reviewsDone: 0 };
  }
}

export async function fetchAllStats(): Promise<Record<string, GitHubStat>> {
  if (!process.env.GITHUB_TOKEN) return {};
  const entries = await Promise.all(
    TEAM.map(async (m) => {
      const stat = await fetchStatForMember(m.githubUsername);
      return [m.githubUsername, stat] as const;
    }),
  );
  return Object.fromEntries(entries);
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default async function TeamPage() {
  const stats = await fetchAllStats();
  const hasStats = Object.keys(stats).length > 0;

  const ld = [
    breadcrumbLd([
      { name: "Home", path: "/" },
      { name: "Team", path: "/team" },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Our Team | CheckMyEligibility",
      description:
        "Meet the 18-person student team that built CheckMyEligibility, India's free AI guide to government education schemes.",
      url: new URL("/team", SITE.url).toString(),
    },
  ];

  return (
    <>
      <JsonLd data={ld} />

      {/* Hero */}
      <header className="border-b border-navy/5 bg-gradient-to-b from-navy/5 via-navy/[0.02] to-transparent">
        <Container className="py-12 sm:py-16 lg:py-20">
          <h1 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            The Team
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-ink-muted sm:text-lg">
            CheckMyEligibility is built entirely by students. Eighteen members of the
            Department of Data Science, Loyola College, Chennai: engineers and QA testers
            who designed, developed, and continue to maintain this platform
            with the goal of making India&apos;s scholarship landscape navigable for every
            student, regardless of background.
          </p>
          {!hasStats && (
            <p className="mt-4 text-xs text-ink-faint">
              GitHub contribution stats will appear once{" "}
              <code className="rounded bg-navy/5 px-1 font-mono text-navy">GITHUB_TOKEN</code> is
              set in the Vercel environment.
            </p>
          )}
        </Container>
      </header>

      <Container className="py-12 sm:py-16 lg:py-20">
        <TeamGrid stats={stats} />

        <p className="mt-14 border-t border-navy/5 pt-8 text-center text-sm text-ink-faint">
          Department of Data Science, Loyola College, Chennai &middot; GitHub stats refresh
          every hour.
        </p>
      </Container>
    </>
  );
}
