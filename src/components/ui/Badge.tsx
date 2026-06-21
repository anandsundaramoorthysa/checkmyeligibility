import { cn } from "@/lib/utils";

type Tone = "eligible" | "saffron" | "navy" | "neutral";

const tones: Record<Tone, string> = {
  eligible: "bg-green-soft text-green-deep", // "you qualify / success"
  saffron: "bg-saffron-soft text-saffron-deep",
  navy: "bg-navy/10 text-navy",
  neutral: "bg-surface-muted text-ink-muted",
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
