import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";
import { SpotIllustration } from "@/components/illustrations/SpotIllustration";
import type { Certificate } from "@/lib/types";

/** Compact certificate card linking to the detail page. */
export function CertificateCard({ certificate }: { certificate: Certificate }) {
  return (
    <Link
      href={`/certificates/${certificate.slug}`}
      className="group flex h-full flex-col items-center text-center sm:items-start sm:text-left rounded-3xl border border-navy/10 bg-surface-card p-6 transition-all hover:-translate-y-0.5 hover:border-navy/25 hover:shadow-card-lg"
    >
      <SpotIllustration
        icon={FileText}
        tone="navy"
        label={certificate.name}
        className="w-16"
      />
      <h3 className="mt-5 font-display text-lg font-extrabold tracking-tight text-ink">
        {certificate.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
        {certificate.summary}
      </p>
      <div className="mt-5 flex w-full flex-col items-center gap-2 border-t border-navy/10 pt-4 text-center sm:flex-row sm:items-end sm:justify-between sm:gap-3 sm:text-left">
        {certificate.fees && (
          <span className="text-xs font-medium leading-snug text-ink-muted">
            Fees: {certificate.fees}
          </span>
        )}
        <span className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-navy sm:ml-auto">
          View
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
