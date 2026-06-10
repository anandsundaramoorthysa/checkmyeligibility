import type { Metadata } from "next";
import Link from "next/link";
import { Scale } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/marketing/CtaBand";
import { SpotIllustration } from "@/components/illustrations/SpotIllustration";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbLd } from "@/lib/seo/jsonld";
import { chatHref } from "@/lib/chat/openChat";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms",
  description:
    "Terms of use for GovEligify: an informational guide only, with no guarantee of eligibility and links to third-party official government portals.",
  path: "/terms",
});

const LAST_UPDATED = "8 June 2026";

const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const SECTIONS = [
  "Plain-language summary",
  "Informational guidance only",
  "Not professional advice",
  "We don't submit applications",
  "No fees",
  "Third-party portal links",
  "Acceptable use",
  "Limitation of liability",
  "Changes to these terms",
  "Governing law",
  "How to reach us",
].map((title) => ({ title, id: slugify(title) }));

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Terms", path: "/terms" },
        ])}
      />

      <PageHero
        eyebrow="Legal"
        title="Terms of use"
        lead={
          <>
            GovEligify is a free, independent guide to Indian government schemes.
            These terms explain what we offer, what we don&rsquo;t, and the limits
            of the help we provide.
          </>
        }
        art={
          <SpotIllustration
            icon={Scale}
            tone="navy"
            label="Plain-language terms of use"
          />
        }
      >
        <p className="text-sm text-ink-muted">Last updated: {LAST_UPDATED}</p>
      </PageHero>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-14">
            <nav aria-label="Terms sections" className="hidden lg:block">
              <div className="sticky top-24">
                <p className="font-mono text-xs font-bold uppercase tracking-widest text-saffron-deep">
                  On this page
                </p>
                <ul className="mt-4 space-y-1">
                  {SECTIONS.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="block rounded-lg px-3 py-2 text-sm font-semibold text-ink-muted transition-colors hover:bg-surface-subtle hover:text-ink"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            <div className="max-w-none space-y-12 text-pretty leading-relaxed text-ink-muted">
              <section id={SECTIONS[0].id} className="scroll-mt-24 space-y-3">
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                  {SECTIONS[0].title}
                </h2>
                <p>
                  By using GovEligify, you agree to these terms. This is a
                  plain-language summary written for clarity, not legal advice. In
                  short: we help you understand government schemes and point you to
                  the official portals, but the government — not us — decides any
                  eligibility or approval, and we never charge you or act on your
                  behalf.
                </p>
              </section>

              <section id={SECTIONS[1].id} className="scroll-mt-24 space-y-3">
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                  {SECTIONS[1].title}
                </h2>
                <p>
                  GovEligify provides general information about Indian government
                  schemes, subsidies, and certificates to help you understand what
                  may be relevant to you. Suggestions are based on the details you
                  share and publicly available scheme information. We do not
                  guarantee that you will qualify for, or receive, any scheme or
                  benefit — final decisions rest entirely with the concerned
                  government authority. Always verify the latest rules and
                  eligibility on the official portal before acting.
                </p>
              </section>

              <section id={SECTIONS[2].id} className="scroll-mt-24 space-y-3">
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                  {SECTIONS[2].title}
                </h2>
                <p>
                  Nothing on GovEligify is legal, financial, tax, or professional
                  advice. Scheme rules, income limits, fees, and deadlines change
                  often and vary by state. For decisions that matter to you,
                  consult the official portal or a qualified professional.
                </p>
              </section>

              <section id={SECTIONS[3].id} className="scroll-mt-24 space-y-3">
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                  {SECTIONS[3].title}
                </h2>
                <p>
                  We are a guide, not an agent. We never submit applications on
                  your behalf, and we never ask for your government portal login,
                  passwords, or one-time passwords. You always apply yourself,
                  directly on the official portal. {SITE.disclaimer}
                </p>
              </section>

              <section id={SECTIONS[4].id} className="scroll-mt-24 space-y-3">
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                  {SECTIONS[4].title}
                </h2>
                <p>
                  GovEligify is free to use. We do not charge any fee, ask for
                  payment, or take a commission for the guidance we provide. If
                  anyone asks you to pay GovEligify for a scheme, treat it as
                  fraudulent.
                </p>
              </section>

              <section id={SECTIONS[5].id} className="scroll-mt-24 space-y-3">
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                  {SECTIONS[5].title}
                </h2>
                <p>
                  We link to official government portals and other third-party
                  sites. We don&rsquo;t control those sites and aren&rsquo;t
                  responsible for their content, availability, or practices. Review
                  their terms and privacy policies when you visit them.
                </p>
              </section>

              <section id={SECTIONS[6].id} className="scroll-mt-24 space-y-3">
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                  {SECTIONS[6].title}
                </h2>
                <p>
                  Please use GovEligify lawfully and as intended. Do not misuse the
                  service — for example, by attempting to disrupt it, scrape it at
                  scale, reverse-engineer it, or use it to mislead others. We may
                  limit or suspend access where use is harmful or abusive.
                </p>
              </section>

              <section id={SECTIONS[7].id} className="scroll-mt-24 space-y-3">
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                  {SECTIONS[7].title}
                </h2>
                <p>
                  To the extent permitted by law, GovEligify is not liable for any
                  loss arising from reliance on information provided here or on
                  linked third-party portals. The service is provided on an
                  &ldquo;as is&rdquo; basis, and you use it at your own discretion.
                </p>
              </section>

              <section id={SECTIONS[8].id} className="scroll-mt-24 space-y-3">
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                  {SECTIONS[8].title}
                </h2>
                <p>
                  We may update the service and these terms from time to time. When
                  the terms change materially, we&rsquo;ll update the &ldquo;last
                  updated&rdquo; date at the top of this page. Continued use after a
                  change means you accept the revised terms.
                </p>
              </section>

              <section id={SECTIONS[9].id} className="scroll-mt-24 space-y-3">
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                  {SECTIONS[9].title}
                </h2>
                <p>
                  These terms are governed by the laws of India, and any disputes
                  will be subject to the jurisdiction of the courts in India.
                </p>
              </section>

              <section id={SECTIONS[10].id} className="scroll-mt-24 space-y-3">
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                  {SECTIONS[10].title}
                </h2>
                <p>
                  Questions about these terms? Email{" "}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="font-semibold text-navy hover:text-navy-light"
                  >
                    {SITE.email}
                  </a>{" "}
                  or browse the{" "}
                  <Link
                    href="/faq"
                    className="font-semibold text-navy hover:text-navy-light"
                  >
                    FAQ
                  </Link>
                  .
                </p>
              </section>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Ready to find what's yours?"
        lead="Ask the assistant directly, or read the FAQ — both are free."
        primary={{ label: "Ask the assistant", href: chatHref() }}
        secondary={{ label: "Read the FAQ", href: "/faq" }}
      />
    </>
  );
}
