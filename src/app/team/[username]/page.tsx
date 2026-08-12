import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, GitMerge, GitCommitHorizontal, MessageSquare } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbLd } from "@/lib/seo/jsonld";
import { SITE } from "@/lib/site";
import { TEAM, GROUP_ACCENT, GROUP_LABEL } from "@/data/team";
import { LinkedInIcon, StatPill } from "../_components/MemberCard";
import { fetchAllStats } from "../page";

export const revalidate = 3600;

export async function generateStaticParams() {
  return TEAM.map((m) => ({ username: m.githubUsername }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ username: string }>;
}): Promise<Metadata> {
  const { username } = await params;
  const member = TEAM.find((m) => m.githubUsername === username);
  if (!member) return {};

  return buildMetadata({
    title: `${member.name}, Team`,
    description: `${member.name}, ${member.title} at CheckMyEligibility. ${member.skills?.join(", ") ?? ""}`,
    path: `/team/${member.githubUsername}`,
  });
}

export default async function MemberProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const member = TEAM.find((m) => m.githubUsername === username);
  if (!member) notFound();

  const allStats = await fetchAllStats();
  const stat = allStats[member.githubUsername];
  const hasStats = stat && (stat.prsMerged > 0 || stat.commits > 0 || stat.reviewsDone > 0);

  const accent = GROUP_ACCENT[member.group];
  const groupLabel = GROUP_LABEL[member.group];
  const words = member.name.trim().split(/\s+/);
  const initials = ((words[0]?.[0] ?? "") + (words[1]?.[0] ?? "")).toUpperCase();

  const ld = breadcrumbLd([
    { name: "Home", path: "/" },
    { name: "Team", path: "/team" },
    { name: member.name, path: `/team/${member.githubUsername}` },
  ]);

  return (
    <>
      <JsonLd data={ld} />

      <Container className="py-10 sm:py-14">
        {/* Back link */}
        <Link
          href="/team"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Team
        </Link>

        <div className="mx-auto max-w-2xl">
          {/* Profile card */}
          <div className="overflow-hidden rounded-2xl border border-navy/5 bg-surface-card shadow-card">
            {/* Accent bar */}
            <div className="h-1.5 w-full" style={{ backgroundColor: accent }} />

            <div className="p-8 sm:p-10">
              {/* Avatar + name row */}
              <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start">
                {/* Large initials badge */}
                <div
                  className="flex h-24 w-24 shrink-0 select-none items-center justify-center rounded-full text-4xl font-bold tracking-widest text-white shadow-sm"
                  style={{ backgroundColor: accent }}
                  aria-hidden="true"
                >
                  {initials}
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <h1 className="font-display text-2xl font-extrabold leading-tight text-ink sm:text-3xl">
                    {member.name}
                  </h1>
                  <p className="mt-1 text-base text-ink-muted">{member.title}</p>

                  {/* Group badge */}
                  <span
                    className="mt-3 inline-flex items-center rounded-full px-3 py-0.5 text-xs font-semibold text-white"
                    style={{ backgroundColor: accent }}
                  >
                    {groupLabel}
                  </span>
                </div>
              </div>

              {/* Skills */}
              {member.skills && member.skills.length > 0 && (
                <div className="mt-7 border-t border-navy/5 pt-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink-faint">
                    Skills
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-navy/8 bg-navy/5 px-3 py-1 text-sm font-medium text-ink-muted"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* GitHub stats */}
              {hasStats && (
                <div className="mt-7 border-t border-navy/5 pt-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink-faint">
                    GitHub Contributions
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <StatPill icon={GitMerge} value={stat.prsMerged} label="PRs merged" />
                    <StatPill
                      icon={GitCommitHorizontal}
                      value={stat.commits}
                      label="Commits"
                    />
                    <StatPill
                      icon={MessageSquare}
                      value={stat.reviewsDone}
                      label="Reviews"
                    />
                  </div>
                </div>
              )}

              {/* Social links */}
              <div className="mt-7 flex flex-wrap gap-3 border-t border-navy/5 pt-6">
                <a
                  href={`https://github.com/${member.githubUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-navy/10 bg-navy/5 px-4 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-navy/10 hover:text-ink"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  @{member.githubUsername}
                </a>

                {member.linkedIn && (
                  <a
                    href={member.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-[#0A66C2]/20 bg-[#0A66C2]/5 px-4 py-2 text-sm font-medium text-[#0A66C2] transition-colors hover:bg-[#0A66C2]/10"
                  >
                    <LinkedInIcon className="h-4 w-4" />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Institution note */}
          <p className="mt-6 text-center text-sm text-ink-faint">
            Department of Data Science &middot; Loyola College, Chennai &middot;{" "}
            <a
              href={SITE.url}
              className="text-navy hover:underline"
            >
              CheckMyEligibility
            </a>
          </p>
        </div>
      </Container>
    </>
  );
}
