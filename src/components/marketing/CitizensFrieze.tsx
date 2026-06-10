import Image from "next/image";
import { CITIZENS } from "@/lib/citizens";
import { cn } from "@/lib/utils";

/**
 * A celebratory row of cropped citizen illustrations standing on a baseline.
 * Shows 3 on phone, 5 on tablet, all on desktop. Decorative (lazy-loaded).
 */
export function CitizensFrieze({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-end justify-center gap-1 sm:gap-4 lg:gap-6", className)}>
      {CITIZENS.map((c, i) => (
        <li
          key={c.src}
          className={cn(
            i >= 3 && i < 5 && "hidden sm:block",
            i >= 5 && "hidden lg:block",
          )}
        >
          <Image
            src={c.src}
            alt={c.alt}
            width={c.width}
            height={c.height}
            loading="lazy"
            sizes="(max-width: 640px) 30vw, (max-width: 1024px) 18vw, 12vw"
            className="h-28 w-auto drop-shadow-sm sm:h-36 lg:h-44"
          />
        </li>
      ))}
    </ul>
  );
}
