import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

type AvatarTone = "saffron" | "green" | "navy";

const TONE_BG: Record<AvatarTone, string> = {
  saffron: "bg-saffron text-navy-deep",
  green: "bg-green text-white",
  navy: "bg-navy text-white",
};

const TESTIMONIALS: {
  name: string;
  role: string;
  quote: string;
  tone: AvatarTone;
}[] = [
  {
    name: "Meera P.",
    role: "B.Tech student, Tamil Nadu",
    tone: "green",
    quote:
      "I didn't know AICTE Pragati existed. In a few minutes I understood what I qualified for and where to apply — no agent, no fees.",
  },
  {
    name: "Arjun S.",
    role: "Student, Bihar",
    tone: "navy",
    quote:
      "It pointed me to the right scholarship and listed every document. I applied on the official portal the same evening.",
  },
  {
    name: "Fatima A.",
    role: "PG student, Uttar Pradesh",
    tone: "saffron",
    quote:
      "Plain language, no jargon. I finally understood which scholarship I could apply for as a minority girl student.",
  },
];

/** Build initials from a display name, e.g. "Lakshmi R." -> "LR". */
function initials(name: string): string {
  return name
    .split(/\s+/)
    .map((part) => part.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/** Three illustrative testimonial cards with initials avatars (no photos). */
export function Testimonials() {
  return (
    <>
      <ul className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <li
            key={t.name}
            className="flex h-full flex-col items-center text-center sm:items-start sm:text-left rounded-3xl border border-navy/10 bg-surface-card p-7 shadow-card"
          >
            <Quote className="h-8 w-8 text-saffron" aria-hidden="true" />
            <blockquote className="mt-5 flex-1 text-pretty text-lg leading-relaxed text-ink">
              {t.quote}
            </blockquote>
            <footer className="mt-6 flex flex-col items-center gap-3 border-t border-navy/10 pt-5 text-center sm:flex-row sm:text-left">
              <span
                aria-hidden="true"
                className={cn(
                  "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-sm font-extrabold",
                  TONE_BG[t.tone],
                )}
              >
                {initials(t.name)}
              </span>
              <span>
                <span className="block font-semibold text-ink">{t.name}</span>
                <span className="block text-sm text-ink-muted">{t.role}</span>
              </span>
            </footer>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-center text-xs text-ink-faint">
        Testimonials are illustrative examples, not real users.
      </p>
    </>
  );
}
