import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES } from "@/data/categories";
import { SpotIllustration } from "@/components/illustrations/SpotIllustration";
import { getCategoryArt } from "@/components/illustrations/registry";

/** 8-card editorial grid linking each category to its anchor on /explore. */
export function CategoryGrid() {
  return (
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {CATEGORIES.map((category) => {
        const art = getCategoryArt(category.key);
        return (
          <li key={category.key}>
            <Link
              href={`/explore#${category.key}`}
              className="group flex h-full flex-col items-center text-center sm:items-start sm:text-left rounded-3xl border border-navy/10 bg-surface-card p-6 transition-all hover:-translate-y-0.5 hover:border-navy/25 hover:shadow-card-lg"
            >
              <SpotIllustration
                icon={art.Icon}
                tone={art.tone}
                label={category.title}
                className="w-20"
              />
              <span className="mt-5 flex items-start gap-1 font-display text-lg font-extrabold tracking-tight text-ink">
                {category.title}
                <ArrowUpRight
                  className="mt-0.5 h-4 w-4 shrink-0 text-ink-faint transition-colors group-hover:text-navy"
                  aria-hidden="true"
                />
              </span>
              <span className="mt-2 text-sm leading-relaxed text-ink-muted">
                {category.blurb}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
