"use client";

import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { SchemeCard } from "@/components/marketing/SchemeCard";
import { SpotIllustration } from "@/components/illustrations/SpotIllustration";
import { getCategoryArt } from "@/components/illustrations/registry";
import { Container } from "@/components/layout/Container";
import type { CategoryCard } from "@/data/categories";
import type { Scheme } from "@/lib/types";

interface Group {
  category: CategoryCard;
  schemes: Scheme[];
}

interface Props {
  allGroups: Group[];
  totalCount: number;
}

function normalize(s: string) {
  return s.toLowerCase().replace(/[-_]/g, " ");
}

function matches(scheme: Scheme, query: string): boolean {
  const q = normalize(query);
  return (
    normalize(scheme.name).includes(q) ||
    normalize(scheme.summary).includes(q) ||
    (scheme.ministry ? normalize(scheme.ministry).includes(q) : false) ||
    (scheme.tags ?? []).some((t) => normalize(t).includes(q))
  );
}

export function ExploreClient({ allGroups, totalCount }: Props) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Counts per category matching only the search query (ignores category filter)
  // so chip badges stay informative when a category is selected.
  const chipCounts = useMemo(() => {
    const q = query.trim();
    const map = new Map<string, number>();
    for (const g of allGroups) {
      const count = q ? g.schemes.filter((s) => matches(s, q)).length : g.schemes.length;
      map.set(g.category.key, count);
    }
    return map;
  }, [allGroups, query]);

  const filtered = useMemo(() => {
    const q = query.trim();
    return allGroups
      .filter((g) => !activeCategory || g.category.key === activeCategory)
      .map((g) => ({
        ...g,
        schemes: q ? g.schemes.filter((s) => matches(s, q)) : g.schemes,
      }))
      .filter((g) => g.schemes.length > 0);
  }, [allGroups, query, activeCategory]);

  const visibleCount = filtered.reduce((n, g) => n + g.schemes.length, 0);
  const isFiltered = query.trim() !== "" || activeCategory !== null;

  function clearAll() {
    setQuery("");
    setActiveCategory(null);
  }

  return (
    <>
      {/* Search + filter bar */}
      <div className="sticky top-16 z-20 border-b border-navy/10 bg-surface/90 backdrop-blur-sm py-3">
        <Container>
          <div className="flex flex-col gap-3 sm:gap-4">
            {/* Search input */}
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-faint"
                aria-hidden="true"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search schemes by name, ministry, or keyword…"
                className="w-full rounded-xl border border-navy/15 bg-surface-card py-2.5 pl-10 pr-10 text-sm text-ink placeholder:text-ink-faint focus:border-navy/40 focus:outline-none focus:ring-2 focus:ring-navy/10"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-faint hover:text-ink"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Category chips */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory(null)}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-colors ${
                  activeCategory === null
                    ? "border-navy bg-navy text-white"
                    : "border-navy/15 bg-surface-card text-ink hover:border-navy/30 hover:bg-surface-subtle"
                }`}
              >
                All
                <span className={`tabular-nums text-xs font-normal ${activeCategory === null ? "text-white/70" : "text-ink-faint"}`}>
                  {visibleCount || totalCount}
                </span>
              </button>
              {allGroups.map(({ category }) => {
                const art = getCategoryArt(category.key);
                const active = activeCategory === category.key;
                const count = chipCounts.get(category.key) ?? 0;
                return (
                  <button
                    key={category.key}
                    onClick={() =>
                      setActiveCategory(active ? null : category.key)
                    }
                    className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-colors ${
                      active
                        ? "border-navy bg-navy text-white"
                        : "border-navy/15 bg-surface-card text-ink hover:border-navy/30 hover:bg-surface-subtle"
                    }`}
                  >
                    <art.Icon className={`h-4 w-4 ${active ? "text-white" : "text-navy"}`} aria-hidden="true" />
                    {category.title}
                    <span className={`tabular-nums text-xs font-normal ${active ? "text-white/70" : "text-ink-faint"}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Result count + clear */}
            {isFiltered && (
              <div className="flex items-center justify-between text-sm text-ink-muted">
                <span>
                  {visibleCount === 0
                    ? "No schemes match"
                    : `Showing ${visibleCount} of ${totalCount} schemes`}
                </span>
                <button
                  onClick={clearAll}
                  className="inline-flex items-center gap-1 text-navy hover:underline"
                >
                  <X className="h-3.5 w-3.5" />
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </Container>
      </div>

      {/* Scheme groups */}
      <section className="py-12 sm:py-16">
        <Container className="space-y-14 sm:space-y-16">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center gap-4 py-20 text-center">
              <Search className="h-10 w-10 text-ink-faint" aria-hidden="true" />
              <p className="text-lg font-semibold text-ink">No schemes found</p>
              <p className="max-w-sm text-sm text-ink-muted">
                Try a different keyword or remove the category filter.
              </p>
              <button
                onClick={clearAll}
                className="mt-2 rounded-full bg-navy px-5 py-2 text-sm font-semibold text-white hover:bg-navy/90"
              >
                Clear filters
              </button>
            </div>
          ) : (
            filtered.map(({ category, schemes }) => {
              const art = getCategoryArt(category.key);
              return (
                <div key={category.key} id={category.key} className="scroll-mt-36">
                  <div className="flex items-center gap-5">
                    <SpotIllustration
                      icon={art.Icon}
                      tone={art.tone}
                      label={category.title}
                      className="w-16 shrink-0 sm:w-20"
                    />
                    <div className="max-w-2xl">
                      <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink">
                        {category.title}
                        <span className="ml-3 align-middle font-sans text-lg font-normal text-ink-faint tabular-nums">
                          {schemes.length}
                        </span>
                      </h2>
                      <p className="mt-2 text-ink-muted">{category.blurb}</p>
                    </div>
                  </div>
                  <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {schemes.map((scheme) => (
                      <li key={scheme.id} className="flex">
                        <SchemeCard scheme={scheme} />
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })
          )}
        </Container>
      </section>
    </>
  );
}
