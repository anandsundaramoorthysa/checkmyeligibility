import { cn } from "@/lib/utils";

type Tone = "eligible" | "saffron" | "navy" | "neutral";

const tones: Record<Tone, string> = {
  eligible: "bg-green-soft text-green-deep dark:bg-green/20 dark:text-green-soft", // "you qualify / success"
  saffron: "bg-saffron-soft text-saffron-deep dark:bg-saffron/20 dark:text-saffron-soft",
  navy: "bg-navy/10 text-navy dark:bg-white/10 dark:text-white",
  neutral: "bg-surface-muted text-ink-muted dark:bg-white/10 dark:text-white/70",
};

/** Small status pill. Tones chosen so green/saffron only appear as accents. */
export function Badge({
  tone = "neutral",
  className,
  children,
}: {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
