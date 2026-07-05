import { cn } from "@/lib/utils";

/** The CheckMyEligibility "Seal Check" mark — tricolor seal ring + navy disc + tick. */
export function LogoMark({
  className,
  title = "CheckMyEligibility",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={cn("h-9 w-9", className)}
      role="img"
      aria-label={title}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 60 A53 53 0 0 1 113 60" stroke="#FF9933" strokeWidth="7" />
      <path d="M113 60 A53 53 0 0 1 7 60" stroke="#138808" strokeWidth="7" />
      <g fill="#0A3D91">
        {SEAL_DOTS.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="1.5" />
        ))}
      </g>
      <circle cx="60" cy="60" r="36" fill="#0A3D91" />
      <path
        d="M44 61 l11 11 l22 -25"
        stroke="#fff"
        strokeWidth="7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Full lockup: mark + "CheckMyEligibility" wordmark (navy "Check" + saffron "My" + green "Eligibility"). */
export function Logo({
  className,
  markClassName,
  showWordmark = true,
}: {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={markClassName} />
      {showWordmark && (
        <span className="font-display text-xl font-extrabold tracking-tight">
          <span className="text-navy-deep">Check</span>
          <span className="text-saffron">My</span>
          <span className="text-green">Eligibility</span>
        </span>
      )}
    </span>
  );
}

// 24 chakra-style seal dots (precomputed points on r≈45.5 circle, center 60,60).
const SEAL_DOTS: [number, number][] = [
  [60, 14.5], [71.8, 16.1], [82.6, 20.9], [91.8, 28.5], [98.9, 38.4],
  [103.4, 49.8], [105.5, 60], [103.4, 70.2], [98.9, 81.6], [91.8, 91.5],
  [82.6, 99.1], [71.8, 103.9], [60, 105.5], [48.2, 103.9], [37.4, 99.1],
  [28.2, 91.5], [21.1, 81.6], [16.6, 70.2], [14.5, 60], [16.6, 49.8],
  [21.1, 38.4], [28.2, 28.5], [37.4, 20.9], [48.2, 16.1],
];
