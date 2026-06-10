import type { LucideIcon } from "lucide-react";
import { SpotIllustration, type Tone } from "@/components/illustrations/SpotIllustration";

/** Numbered editorial step card with a brand SpotIllustration on top. */
export function StepCard({
  step,
  icon,
  tone,
  title,
  children,
}: {
  step: number;
  icon: LucideIcon;
  tone: Tone;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="relative flex h-full flex-col items-center text-center sm:items-start sm:text-left rounded-3xl border border-navy/10 bg-surface-card p-7">
      <SpotIllustration icon={icon} tone={tone} label={title} className="w-24" />
      <span className="mt-6 font-mono text-sm font-bold uppercase tracking-widest text-saffron-deep">
        Step {step}
      </span>
      <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-ink">
        {title}
      </h3>
      <p className="mt-3 text-pretty leading-relaxed text-ink-muted">{children}</p>
    </article>
  );
}
