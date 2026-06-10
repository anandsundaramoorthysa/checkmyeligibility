import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type Tone = "saffron" | "green" | "navy";

// Flag-palette tones. `second` cross-mixes so each spot carries the tricolor.
const TONES: Record<Tone, { soft: string; base: string; deep: string; second: string }> = {
  saffron: { soft: "#FFF1E0", base: "#FF9933", deep: "#C25E12", second: "#138808" },
  green: { soft: "#E3F2DE", base: "#138808", deep: "#0E6606", second: "#FF9933" },
  navy: { soft: "#E6ECF7", base: "#0A3D91", deep: "#06245A", second: "#FF9933" },
};

const DOTS: [number, number][] = [
  [60, 44], [74, 33], [90, 27], [108, 25], [126, 29], [142, 38], [154, 50],
];

/**
 * Composable flat brand illustration: tricolor geometric backdrop (circles +
 * chakra dots) with a white disc holding a Lucide icon. Original artwork, so
 * it's copyright-free and always on-palette.
 */
export function SpotIllustration({
  icon: Icon,
  tone = "navy",
  label,
  className,
}: {
  icon: LucideIcon;
  tone?: Tone;
  label: string;
  className?: string;
}) {
  const c = TONES[tone];
  return (
    <div
      role="img"
      aria-label={label}
      className={cn("relative aspect-square w-full overflow-hidden rounded-[16%]", className)}
    >
      <svg
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <rect width="200" height="200" fill={c.soft} />
        <circle cx="164" cy="172" r="66" fill={c.base} opacity="0.9" />
        <circle cx="34" cy="40" r="30" fill={c.second} opacity="0.85" />
        <circle cx="178" cy="32" r="12" fill={c.base} opacity="0.45" />
        <circle cx="24" cy="150" r="9" fill={c.second} opacity="0.5" />
        {DOTS.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2.6" fill="#0A3D91" opacity="0.45" />
        ))}
        {/* tricolor signature bar */}
        <g transform="translate(26 176)">
          <rect width="14" height="5" rx="2.5" fill="#FF9933" />
          <rect x="18" width="14" height="5" rx="2.5" fill="#0A3D91" opacity="0.8" />
          <rect x="36" width="14" height="5" rx="2.5" fill="#138808" />
        </g>
      </svg>

      <div className="absolute left-1/2 top-1/2 flex aspect-square w-[44%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-card">
        <Icon
          className="h-[46%] w-[46%]"
          style={{ color: c.deep }}
          strokeWidth={1.75}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
