import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { levelLabel, statesHint } from "@/lib/labels";
import type { Scheme } from "@/lib/types";

/** Compact scheme card linking to the detail page. */
export function SchemeCard({ scheme }: { scheme: Scheme }) {
  return (
    <Link
      href={`/explore/${scheme.slug}`}
      className="group flex h-full flex-col items-center text-center sm:items-start sm:text-left rounded-3xl border border-navy/10 bg-surface-card p-6 transition-all hover:-translate-y-0.5 hover:border-navy/25 hover:shadow-card-lg"
    >
      <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
        <Badge tone="navy">{levelLabel(scheme.level)}</Badge>
        {scheme.shortName && <Badge tone="saffron">{scheme.shortName}</Badge>}
      </div>
      <h3 className="mt-4 font-display text-lg font-extrabold tracking-tight text-ink">
        {scheme.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
        {scheme.summary}
      </p>
      <div className="mt-5 flex w-full flex-col items-center gap-2 border-t border-navy/10 pt-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <span className="inline-flex items-center gap-1.5 text-xs text-ink-faint">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {statesHint(scheme.states)}
        </span>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-navy">
          Details
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
