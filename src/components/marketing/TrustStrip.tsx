import { ShieldCheck, Languages, Link2, BadgeIndianRupee } from "lucide-react";
import { SITE } from "@/lib/site";

const ITEMS = [
  { icon: ShieldCheck, label: "Private by design" },
  { icon: Languages, label: "Plain-language answers" },
  { icon: Link2, label: "Direct links to official portals" },
  { icon: BadgeIndianRupee, label: "Always free" },
];

/**
 * Four trust signals + the non-affiliation line.
 * Phone: a compact 2x2 grid of soft tiles (icon centered on top, label below).
 * sm+ : the original transparent icon-beside-label row (unchanged on desktop).
 */
export function TrustStrip() {
  return (
    <div className="rounded-3xl border border-navy/10 bg-surface-card p-6 shadow-card sm:p-8">
      <ul className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
        {ITEMS.map((item) => (
          <li
            key={item.label}
            className="flex h-full flex-col items-center justify-center gap-2.5 rounded-2xl bg-surface-subtle p-4 text-center sm:flex-row sm:justify-start sm:gap-3.5 sm:bg-transparent sm:p-0 sm:text-left"
          >
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy text-white sm:h-12 sm:w-12 sm:rounded-2xl">
              <item.icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
            </span>
            <span className="font-display text-sm font-bold leading-snug tracking-tight text-ink sm:text-base">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-7 border-t border-navy/10 pt-6 text-center text-sm leading-relaxed text-ink-muted">
        {SITE.disclaimer}
      </p>
    </div>
  );
}
