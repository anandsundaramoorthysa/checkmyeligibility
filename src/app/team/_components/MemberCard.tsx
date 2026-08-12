import Link from "next/link";
import { ExternalLink, GitMerge, GitCommitHorizontal, MessageSquare } from "lucide-react";
import { GROUP_ACCENT, GROUP_LABEL, type TeamMember } from "@/data/team";

export interface GitHubStat {
  prsMerged: number;
  commits: number;
  reviewsDone: number;
}

// ─── Shared primitives ─────────────────────────────────────────────────────

export function LinkedInIcon({ className }: { className?: string }) {
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

export function StatPill({
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

// ─── Card ──────────────────────────────────────────────────────────────────

export function MemberCard({
  member,
  stat,
  large,
  linkToProfile = true,
}: {
  member: TeamMember;
  stat?: GitHubStat;
  large?: boolean;
  linkToProfile?: boolean;
}) {
  const accent = GROUP_ACCENT[member.group];
  const groupLabel = GROUP_LABEL[member.group];
  const hasStats = stat && (stat.prsMerged > 0 || stat.commits > 0 || stat.reviewsDone > 0);

  const cardContent = (
    <>
      {/* Tinted header zone */}
      <div
        className={`flex flex-1 flex-col ${large ? "p-5 sm:p-6" : "p-4 sm:p-5"}`}
        style={{ backgroundColor: `${accent}0f` }}
      >
        {/* Group chip + social icons */}
        <div className="mb-3 flex items-center justify-between">
          <span
            className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
            style={{ backgroundColor: `${accent}26`, color: accent }}
          >
            {groupLabel}
          </span>

          <div className="flex shrink-0 items-center gap-0.5">
            <a
              href={`https://github.com/${member.githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex h-7 w-7 items-center justify-center rounded-md text-ink-muted transition-colors hover:bg-navy/10 hover:text-ink"
              aria-label={`${member.name} on GitHub`}
              title="GitHub"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            {member.linkedIn && (
              <a
                href={member.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex h-7 w-7 items-center justify-center rounded-md text-ink-muted transition-colors hover:bg-[#0A66C2]/10 hover:text-[#0A66C2]"
                aria-label={`${member.name} on LinkedIn`}
                title="LinkedIn"
              >
                <LinkedInIcon className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Name */}
        <p
          className={`font-display font-bold leading-snug text-ink ${
            large ? "text-xl sm:text-2xl" : "text-base sm:text-lg"
          }`}
        >
          {member.name}
        </p>

        {/* Title */}
        <p className={`mt-1 leading-relaxed text-ink-muted ${large ? "text-sm" : "text-xs sm:text-sm"}`}>
          {member.title}
        </p>
      </div>

      {/* Stats zone */}
      {hasStats && (
        <div
          className="flex flex-wrap gap-2 px-4 py-3 sm:px-5"
          style={{ borderTop: `1px solid ${accent}26` }}
        >
          <StatPill icon={GitMerge} value={stat.prsMerged} label="PRs merged" />
          <StatPill icon={GitCommitHorizontal} value={stat.commits} label="Commits" />
          <StatPill icon={MessageSquare} value={stat.reviewsDone} label="Reviews" />
        </div>
      )}
    </>
  );

  if (linkToProfile) {
    return (
      <Link
        href={`/team/${member.githubUsername}`}
        className="group flex flex-col overflow-hidden rounded-2xl border bg-surface-card shadow-card transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/40"
        style={{ borderColor: `${accent}26` }}
        aria-label={`View ${member.name}'s profile`}
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div
      className="flex flex-col overflow-hidden rounded-2xl border bg-surface-card shadow-card"
      style={{ borderColor: `${accent}26` }}
    >
      {cardContent}
    </div>
  );
}

export function SectionHeading({ title, count }: { title: string; count: number }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">{title}</h2>
      <span className="inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-navy/10 px-2 text-xs font-semibold text-navy">
        {count}
      </span>
      <div className="h-px flex-1 bg-navy/10" />
    </div>
  );
}
