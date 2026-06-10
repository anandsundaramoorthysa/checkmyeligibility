import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { buttonClasses } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface CtaLink {
  label: string;
  href: string;
}

/**
 * Reusable closing call-to-action band (navy gradient). Replaces bare
 * floating button groups so every page ends with a strong, consistent CTA.
 */
export function CtaBand({
  title,
  lead,
  primary,
  secondary,
}: {
  title: React.ReactNode;
  lead?: React.ReactNode;
  primary: CtaLink;
  secondary?: CtaLink;
}) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="overflow-hidden rounded-[2rem] bg-navy-gradient px-6 py-14 text-center text-white sm:px-12 sm:py-16">
          <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {lead && (
            <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-white/80">{lead}</p>
          )}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={primary.href} className={buttonClasses({ variant: "saffron", size: "lg" })}>
              {primary.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            {secondary && (
              <Link
                href={secondary.href}
                className={cn(
                  buttonClasses({ size: "lg" }),
                  "border border-white/30 bg-transparent text-white hover:bg-white/10",
                )}
              >
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
