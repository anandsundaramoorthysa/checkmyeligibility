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
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={cn("divide-y divide-navy/10 overflow-hidden rounded-3xl border border-navy/10 bg-surface-card shadow-card", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-surface-subtle"
              >
                <span className="font-display text-base font-bold tracking-tight text-ink sm:text-lg">
                  {item.q}
                </span>
                <Plus
                  className={cn(
                    "h-5 w-5 shrink-0 text-saffron-deep transition-transform",
                    isOpen && "rotate-45",
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            {isOpen && (
              <div className="px-6 pb-6 text-pretty leading-relaxed text-ink-muted">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
