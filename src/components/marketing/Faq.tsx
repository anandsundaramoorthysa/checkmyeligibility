"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

/** Reusable accordion for FAQ Q&As. Used on the home teaser and /faq. */
export function Faq({
  items,
  className,
}: {
  items: { q: string; a: string }[];
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className={cn("divide-y divide-navy/10 overflow-hidden rounded-xl border border-navy/5 bg-surface-subtle sm:rounded-2xl", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left text-sm transition-colors hover:bg-surface-card sm:gap-4 sm:px-5 sm:py-5 sm:text-base"
              >
                <span className="font-display font-bold tracking-tight text-ink">
                  {item.q}
                </span>
                <Plus
                  className={cn(
                    "h-5 w-5 shrink-0 text-saffron-deep transition-transform duration-200",
                    isOpen && "rotate-45",
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            {isOpen && (
              <div className="border-t border-navy/5 px-4 pb-4 pt-3 text-sm leading-relaxed text-ink-muted break-words sm:border-t-0 sm:px-5 sm:pb-5 sm:pt-0 sm:text-base">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
