import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CitizensFrieze } from "./CitizensFrieze";

/**
 * Celebratory "for every Indian" band: a clean heading over a row of citizen
 * illustrations standing on a tricolour baseline. Shown on a white surface so
 * the white-background illustrations blend seamlessly.
 */
export function CitizensBand({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="overflow-hidden border-t border-navy/10 bg-surface-card">
      <Container className="pt-16 text-center sm:pt-20">
        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />
        <div className="mt-14">
          <CitizensFrieze />
        </div>
      </Container>
      <div className="tricolor-rule" aria-hidden="true" />
    </section>
  );
}
