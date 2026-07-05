import { Award, GraduationCap, Banknote } from "lucide-react";
import { cn } from "@/lib/utils";

const ROWS = [130, 186, 242];

/**
 * Hero showpiece: a stylised "your matched schemes" result card surrounded by
 * floating category chips, on a tricolor geometric backdrop. Original vector art.
 */
export function HeroArt({ className }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="CheckMyEligibility matching a student to the education schemes they qualify for"
      className={cn("relative w-full", className)}
    >
      <svg
        viewBox="0 0 460 400"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          <filter id="hero-card-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#0A3D91" floodOpacity="0.14" />
          </filter>
        </defs>

        {/* tricolor backdrop */}
        <circle cx="402" cy="70" r="96" fill="#FFE9D2" />
        <circle cx="56" cy="350" r="84" fill="#DCEFD7" />
        <circle cx="404" cy="316" r="20" fill="#FF9933" opacity="0.5" />
        <circle cx="40" cy="70" r="11" fill="#138808" opacity="0.55" />
        {[[150, 30], [172, 40], [190, 26], [210, 36]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3" fill="#0A3D91" opacity="0.4" />
        ))}

        {/* result card */}
        <rect x="78" y="70" width="304" height="262" rx="26" fill="#FFFFFF" filter="url(#hero-card-shadow)" />

        {/* card header: seal dot + title bars + "eligible" pill */}
        <circle cx="108" cy="104" r="11" fill="#0A3D91" />
        <path d="M103 104 l4 4 l7 -8" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="128" y="98" width="96" height="8" rx="4" fill="#0B1020" opacity="0.78" />
        <rect x="128" y="112" width="60" height="6" rx="3" fill="#0B1020" opacity="0.3" />
        <rect x="298" y="94" width="62" height="24" rx="12" fill="#DCEFD7" />
        <path d="M309 106 l4 4 l8 -9" stroke="#0E6606" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="326" y="102" width="26" height="8" rx="4" fill="#0E6606" opacity="0.85" />

        {/* three matched-scheme rows */}
        {ROWS.map((y, i) => (
          <g key={i}>
            <rect x="98" y={y} width="264" height="46" rx="13" fill="#F2F5FB" />
            <circle cx={124} cy={y + 23} r="13" fill="#138808" />
            <path
              d={`M118 ${y + 23} l4 4 l8 -9`}
              stroke="#fff"
              strokeWidth="2.6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect x="148" y={y + 14} width="120" height="8" rx="4" fill="#0B1020" opacity="0.62" />
            <rect x="148" y={y + 28} width="78" height="6" rx="3" fill="#0B1020" opacity="0.26" />
            <rect x="300" y={y + 13} width="46" height="20" rx="10" fill="#FF9933" />
          </g>
        ))}
      </svg>

      {/* floating category chips */}
      <Chip className="left-[2%] top-[18%]" tone="#138808">
        <Award className="h-1/2 w-1/2" strokeWidth={1.9} aria-hidden="true" />
      </Chip>
      <Chip className="right-[1%] top-[44%]" tone="#0A3D91">
        <GraduationCap className="h-1/2 w-1/2" strokeWidth={1.9} aria-hidden="true" />
      </Chip>
      <Chip className="bottom-[8%] left-[10%]" tone="#C25E12">
        <Banknote className="h-1/2 w-1/2" strokeWidth={1.9} aria-hidden="true" />
      </Chip>
    </div>
  );
}

function Chip({
  className,
  tone,
  children,
}: {
  className?: string;
  tone: string;
  children: React.ReactNode;
}) {
  return (
    <span
      style={{ color: tone }}
      className={cn(
        "absolute flex h-[14%] w-[14%] min-h-[44px] min-w-[44px] items-center justify-center rounded-2xl bg-white shadow-card",
        className,
      )}
    >
      {children}
    </span>
  );
}
