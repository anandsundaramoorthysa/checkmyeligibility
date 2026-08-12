"use client";

import { useState } from "react";
import { TEAM_GROUPS } from "@/data/team";
import { MemberCard, SectionHeading, type GitHubStat } from "./MemberCard";

type Filter = "all" | "coordinator" | "lead" | "developer" | "tester";

const FILTERS: { label: string; value: Filter; count: number }[] = [
  { label: "All", value: "all", count: Object.values(TEAM_GROUPS).reduce((s, g) => s + g.members.length, 0) },
  { label: "Coordination", value: "coordinator", count: TEAM_GROUPS.coordinator.members.length },
  { label: "Leads",        value: "lead",        count: TEAM_GROUPS.lead.members.length },
  { label: "Developers",   value: "developer",   count: TEAM_GROUPS.developer.members.length },
  { label: "Testers",      value: "tester",      count: TEAM_GROUPS.tester.members.length },
];

interface Props {
  stats: Record<string, GitHubStat>;
}

export function TeamGrid({ stats }: Props) {
  const [filter, setFilter] = useState<Filter>("all");

  return (
    <>
      {/* Filter tabs */}
      <nav className="mb-10 flex flex-wrap gap-2" aria-label="Filter team by role">
        {FILTERS.map(({ label, value, count }) => (
          <button
            key={value}
            onClick={() => setFilter(value)}
            aria-pressed={filter === value}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              filter === value
                ? "bg-navy text-white shadow-sm"
                : "bg-navy/5 text-ink-muted hover:bg-navy/10 hover:text-ink"
            }`}
          >
            {label}
            <span
              className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold leading-none ${
                filter === value ? "bg-white/20 text-white" : "bg-navy/10 text-navy"
              }`}
            >
              {count}
            </span>
          </button>
        ))}
      </nav>

      {/* Grouped layout — shown when "All" is selected */}
      {filter === "all" && (
        <div className="space-y-14">
          <section>
            <SectionHeading
              title={TEAM_GROUPS.coordinator.label}
              count={TEAM_GROUPS.coordinator.members.length}
            />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {TEAM_GROUPS.coordinator.members.map((m) => (
                <MemberCard key={m.githubUsername} member={m} stat={stats[m.githubUsername]} large />
              ))}
            </div>
          </section>

          <section>
            <SectionHeading
              title={TEAM_GROUPS.lead.label}
              count={TEAM_GROUPS.lead.members.length}
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {TEAM_GROUPS.lead.members.map((m) => (
                <MemberCard key={m.githubUsername} member={m} stat={stats[m.githubUsername]} />
              ))}
            </div>
          </section>

          <section>
            <SectionHeading
              title={TEAM_GROUPS.developer.label}
              count={TEAM_GROUPS.developer.members.length}
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {TEAM_GROUPS.developer.members.map((m) => (
                <MemberCard key={m.githubUsername} member={m} stat={stats[m.githubUsername]} />
              ))}
            </div>
          </section>

          <section>
            <SectionHeading
              title={TEAM_GROUPS.tester.label}
              count={TEAM_GROUPS.tester.members.length}
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {TEAM_GROUPS.tester.members.map((m) => (
                <MemberCard key={m.githubUsername} member={m} stat={stats[m.githubUsername]} />
              ))}
            </div>
          </section>
        </div>
      )}

      {/* Flat grid — shown when a specific group is selected */}
      {filter !== "all" && (
        <section>
          <SectionHeading
            title={TEAM_GROUPS[filter].label}
            count={TEAM_GROUPS[filter].members.length}
          />
          <div
            className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${
              filter === "coordinator"
                ? ""
                : filter === "tester"
                  ? "lg:grid-cols-4"
                  : "lg:grid-cols-3"
            }`}
          >
            {TEAM_GROUPS[filter].members.map((m) => (
              <MemberCard
                key={m.githubUsername}
                member={m}
                stat={stats[m.githubUsername]}
                large={filter === "coordinator"}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
