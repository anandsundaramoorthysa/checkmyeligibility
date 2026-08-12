import type { Metadata } from "next";
import { ExternalLink, GitMerge, GitCommitHorizontal, MessageSquare } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbLd } from "@/lib/seo/jsonld";
import { SITE } from "@/lib/site";
import { TEAM, TEAM_GROUPS, GROUP_ACCENT, type TeamMember } from "@/data/team";

export const metadata: Metadata = buildMetadata({
  title: "Our Team",
  description:
    "Meet the 18 students from Loyola College, Chennai who built CheckMyEligibility — researchers, engineers, and QA testers making India's scholarship landscape navigable.",
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

interface GitHubStat {
  prsMerged: number;
  commits: number;
  reviewsDone: number;
}

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

async function fetchAllStats(): Promise<Record<string, GitHubStat>> {
  if (!process.env.GITHUB_TOKEN) return {};
  const entries = await Promise.all(
    TEAM.map(async (m) => {
      const stat = await fetchStatForMember(m.githubUsername);
      return [m.githubUsername, stat] as const;
    }),
  );
  return Object.fromEntries(entries);
}

// ─── Icons ─────────────────────────────────────────────────────────────────

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// ─── Components ────────────────────────────────────────────────────────────

function StatPill({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  label: string;
}) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full bg-navy/5 px-3 py-1 text-xs font-medium text-ink-muted"
      title={label}
    >
      <Icon className="h-3.5 w-3.5 shrink-0 text-navy" />
      {value}
    </span>
  );
}

function MemberCard({
  member,
  stat,
  large,
}: {
  member: TeamMember;
  stat?: GitHubStat;
  large?: boolean;
}) {
  const accent = GROUP_ACCENT[member.group];
  const words = member.name.trim().split(/\s+/);
  const initials = ((words[0]?.[0] ?? "") + (words[1]?.[0] ?? "")).toUpperCase();
  const hasStats = stat && (stat.prsMerged > 0 || stat.commits > 0 || stat.reviewsDone > 0);

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-navy/5 bg-surface-card shadow-card transition-shadow hover:shadow-md">
      {/* Group accent bar */}
      <div className="h-[3px] w-full shrink-0" style={{ backgroundColor: accent }} />

      <div className={`flex flex-1 flex-col ${large ? "p-6" : "p-5"}`}>
        {/* Header row */}
        <div className="flex items-start gap-3.5">
          {/* Initials badge */}
          <div
            className={`flex shrink-0 select-none items-center justify-center rounded-full font-bold tracking-wider text-white ${
              large ? "h-14 w-14 text-xl" : "h-11 w-11 text-base"
            }`}
            style={{ backgroundColor: accent }}
            aria-hidden="true"
          >
            {initials}
          </div>

          {/* Name + title */}
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <p
                className={`font-display font-bold leading-snug text-ink ${
                  large ? "text-lg sm:text-xl" : "text-sm sm:text-base"
                }`}
              >
                {member.name}
              </p>

              {/* Social links */}
              <div className="flex shrink-0 items-center gap-0.5">
                <a
                  href={`https://github.com/${member.githubUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-7 w-7 items-center justify-center rounded-md text-ink-muted transition-colors hover:bg-navy/10 hover:text-ink"
                  aria-label={`${member.name} on GitHub`}
                  title="GitHub profile"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                {member.linkedIn && (
                  <a
                    href={member.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-7 w-7 items-center justify-center rounded-md text-ink-muted transition-colors hover:bg-[#0A66C2]/10 hover:text-[#0A66C2]"
                    aria-label={`${member.name} on LinkedIn`}
                    title="LinkedIn profile"
                  >
                    <LinkedInIcon className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>

            <p className={`mt-0.5 text-ink-muted ${large ? "text-sm" : "text-xs"}`}>
              {member.title}
            </p>
          </div>
        </div>

        {/* Stats row */}
        {hasStats && (
          <div className="mt-4 flex flex-wrap gap-2 border-t border-navy/5 pt-4">
            <StatPill icon={GitMerge} value={stat.prsMerged} label="PRs merged" />
            <StatPill icon={GitCommitHorizontal} value={stat.commits} label="Commits" />
            <StatPill icon={MessageSquare} value={stat.reviewsDone} label="Reviews" />
          </div>
        )}
      </div>
    </div>
  );
}

function SectionHeading({ title, count }: { title: string; count: number }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">{title}</h2>
      <span className="inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-navy/10 px-2 text-xs font-semibold text-navy">
        {count}
      </span>
      <div className="h-px flex-1 bg-navy/8" />
    </div>
  );
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
      name: "Our Team — CheckMyEligibility",
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
            Department of Data Science, Loyola College, Chennai — researchers, engineers,
            and QA testers — designed, developed, and continue to maintain this platform,
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

      <Container className="space-y-14 py-12 sm:py-16 lg:py-20">
        {/* Project Management & Coordination */}
        <section>
          <SectionHeading
            title={TEAM_GROUPS.coordinator.label}
            count={TEAM_GROUPS.coordinator.members.length}
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {TEAM_GROUPS.coordinator.members.map((m) => (
              <MemberCard
                key={m.githubUsername}
                member={m}
                stat={stats[m.githubUsername]}
                large
              />
            ))}
          </div>
        </section>

        {/* Team Leads */}
        <section>
          <SectionHeading
            title={TEAM_GROUPS.lead.label}
            count={TEAM_GROUPS.lead.members.length}
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM_GROUPS.lead.members.map((m) => (
              <MemberCard
                key={m.githubUsername}
                member={m}
                stat={stats[m.githubUsername]}
              />
            ))}
          </div>
        </section>

        {/* Developer Team */}
        <section>
          <SectionHeading
            title={TEAM_GROUPS.developer.label}
            count={TEAM_GROUPS.developer.members.length}
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM_GROUPS.developer.members.map((m) => (
              <MemberCard
                key={m.githubUsername}
                member={m}
                stat={stats[m.githubUsername]}
              />
            ))}
          </div>
        </section>

        {/* Tester Team */}
        <section>
          <SectionHeading
            title={TEAM_GROUPS.tester.label}
            count={TEAM_GROUPS.tester.members.length}
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM_GROUPS.tester.members.map((m) => (
              <MemberCard
                key={m.githubUsername}
                member={m}
                stat={stats[m.githubUsername]}
              />
            ))}
          </div>
        </section>

        {/* Footer note */}
        <p className="border-t border-navy/5 pt-8 text-center text-sm text-ink-faint">
          Department of Data Science, Loyola College, Chennai &middot; GitHub stats refresh
          every hour.
        </p>
      </Container>
    </>
  );
}
