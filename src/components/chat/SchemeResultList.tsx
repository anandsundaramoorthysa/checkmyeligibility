"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Scheme } from "@/lib/types";
import { cn } from "@/lib/utils";
import { SchemeResultCard } from "@/components/chat/SchemeResultCard";

/** Shortest useful line about a scheme: who it is for, and what it pays. */
function oneLiner(scheme: Scheme): string {
  const forWhom = scheme.eligibility.find((c) => c.label === "For")?.value;
  const benefit = scheme.benefits[0];
  return [forWhom, benefit].filter(Boolean).join(" · ");
}

/**
 * Results as a collapsed list rather than a stack of full cards.
 *
 * Three expanded cards is most of a phone screen each, so the reply scrolls
 * away before the student has read what they were even offered. Each scheme is
 * a single tappable row here — name, level, and one line of who-it-is-for and
 * what-it-pays — and opens into the full card on demand. The first result
 * starts open so a confident single match still reads as an answer, not a
 * menu.
 */
export function SchemeResultList({ schemes }: { schemes: Scheme[] }) {
  const [openIds, setOpenIds] = useState<Set<string>>(
    () => new Set(schemes.length === 1 ? schemes.map((s) => s.id) : []),
  );

  if (!schemes.length) return null;

  const toggle = (id: string) =>
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <div className="space-y-2">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-faint">
        {schemes.length === 1 ? "1 possible match" : `${schemes.length} possible matches`}
      </p>

      <ul className="space-y-2">
        {schemes.map((scheme) => {
          const open = openIds.has(scheme.id);
          const panelId = `scheme-panel-${scheme.id}`;
          return (
            <li key={scheme.id}>
              {open ? (
                <div>
                  <button
                    type="button"
                    onClick={() => toggle(scheme.id)}
                    aria-expanded={true}
                    aria-controls={panelId}
                    className="mb-1 flex w-full items-center gap-1.5 rounded-lg px-1 py-1 text-left text-[11px] font-semibold text-ink-muted transition-colors hover:text-navy"
                  >
                    <ChevronDown size={13} aria-hidden="true" />
                    Hide details
                  </button>
                  <div id={panelId}>
                    <SchemeResultCard scheme={scheme} />
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => toggle(scheme.id)}
                  aria-expanded={false}
                  aria-controls={panelId}
                  className={cn(
                    "flex w-full items-start gap-2.5 rounded-2xl border border-navy/10 border-l-[3px] border-l-green",
                    "bg-surface-card p-3 text-left shadow-card transition-colors hover:bg-surface-subtle",
                  )}
                >
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-bold leading-tight text-navy-deep">
                      {scheme.shortName ?? scheme.name}
                    </span>
                    <span className="mt-0.5 block truncate text-xs text-ink-muted">
                      {oneLiner(scheme) || scheme.summary}
                    </span>
                  </span>
                  <ChevronDown
                    size={16}
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-ink-faint"
                  />
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
