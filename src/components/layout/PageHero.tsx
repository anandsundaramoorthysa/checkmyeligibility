import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

/**
 * Consistent inner-page hero. Asymmetric two-column when `art` is supplied
 * (text left, illustration right), otherwise a left-aligned editorial block.
 * Tighter vertical rhythm than a bare centered hero so content stays close.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  art,
  children,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  art?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) {
  const hasArt = Boolean(art);
  return (
    <section className={cn("relative overflow-hidden bg-hero-glow", className)}>
      <Container
        className={cn(
          "py-16 sm:py-20",
          hasArt && "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
        )}
      >
        {/* Phone: centered. Desktop (lg): left-aligned — unchanged. */}
        <div className={cn("text-center lg:text-left", !hasArt && "mx-auto max-w-3xl lg:mx-0")}>
          {eyebrow && (
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-saffron-deep">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-5 text-balance font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {lead && (
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-ink-muted lg:mx-0">
              {lead}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>

        {hasArt && (
          <div className="mx-auto w-full max-w-[18rem] sm:max-w-sm lg:max-w-md">{art}</div>
        )}
      </Container>
    </section>
  );
}
