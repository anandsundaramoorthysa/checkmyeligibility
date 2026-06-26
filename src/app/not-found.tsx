import type { Metadata } from "next";
import Link from "next/link";
import {
  FileX2,
  XCircle,
  Home,
  MessageSquareText,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SpotIllustration } from "@/components/illustrations/SpotIllustration";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Page Not Eligible",
  path: "/404",
  noindex: true,
});

// Deadpan mock "government eligibility report" that rejects the missing page.
const REPORT_ROWS: { label: string; value: React.ReactNode }[] = [
  { label: "Applicant", value: "This Page" },
  { label: "Scheme applied for", value: "Existence on checkmyeligibility.in" },
  {
    label: "Status",
    value: (
      <span className="inline-flex items-center gap-1.5 font-semibold text-rose-600">
        <XCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
        Rejected
      </span>
    ),
  },
  {
    label: "Reason for rejection",
    value:
      "The requested page could not be located in our records. It may have been moved, retired, or never filed in the first place.",
  },
  { label: "Eligible benefits", value: "None at this address." },
  { label: "Required documents", value: "A valid URL." },
  {
    label: "Officer's remarks",
    value:
      "Unlike most government benefits, this page is genuinely unavailable — and that's not bureaucracy, it's just a 404.",
  },
];

export default function NotFound() {
  return (
    <Container className="py-20 sm:py-28">
      <div className="relative mx-auto max-w-3xl">
        {/* Faint giant 404 watermark behind the report. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 flex select-none items-center justify-center font-display text-[12rem] font-extrabold leading-none text-navy/[0.04] sm:text-[18rem]"
        >
          404
        </span>

        <article className="relative z-10 overflow-hidden rounded-[2rem] border border-surface-muted bg-surface-card shadow-card-lg animate-fade-in">
          {/* Official document header band. */}
          <header className="border-b border-surface-muted bg-surface px-6 py-7 sm:px-9">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <SpotIllustration
                  icon={FileX2}
                  tone="navy"
                  label="Rejected eligibility report"
                  className="w-16 shrink-0 sm:w-20"
                />
                <div>
                  <h1 className="font-display text-2xl font-extrabold tracking-tight text-navy-deep sm:text-3xl">
                    ELIGIBILITY ASSESSMENT REPORT
                  </h1>
                  <p className="mt-1.5 font-mono text-xs uppercase tracking-widest text-ink-faint">
                    Ref No: GE/404/NOT-FOUND
                  </p>
                </div>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full bg-saffron-soft px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-saffron-deep">
                <XCircle className="h-4 w-4" aria-hidden="true" />
                Not Eligible
              </span>
            </div>
            <div className="tricolor-rule mt-6" aria-hidden="true" />
          </header>

          {/* Mock report table. */}
          <div className="px-6 py-7 sm:px-9">
            <dl className="divide-y divide-surface-muted">
              {REPORT_ROWS.map((row) => (
                <div
                  key={row.label}
                  className="grid gap-1 py-3.5 sm:grid-cols-[11rem_1fr] sm:gap-6"
                >
                  <dt className="font-mono text-xs uppercase tracking-wide text-ink-faint sm:pt-0.5">
                    {row.label}
                  </dt>
                  <dd className="text-pretty text-sm leading-relaxed text-ink sm:text-base">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Closing line — warm pivot back to value. */}
            <p className="mt-7 text-pretty font-display text-xl font-extrabold tracking-tight text-navy sm:text-2xl">
              But you are almost certainly entitled to something. Let&rsquo;s find it.
            </p>

            {/* CTAs. */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
              >
                <Home className="h-4 w-4" aria-hidden="true" />
                Return to home
              </Link>
              <Link
                href="/chat"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/25 px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-surface-subtle focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
              >
                <MessageSquareText className="h-4 w-4" aria-hidden="true" />
                Ask the bot instead
              </Link>
            </div>
          </div>
        </article>
      </div>
    </Container>
  );
}
