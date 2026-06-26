import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
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
  title: "Privacy",
  description:
    "How CheckMyEligibility handles your data: minimal collection, no application submission, no Aadhaar or bank details stored, written in plain language and DPDP-aware.",
  path: "/privacy",
});

const LAST_UPDATED = "8 June 2026";

const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const SECTIONS = [
  "What we collect",
  "How the chat works",
  "Cookies & analytics",
  "Third-party official portals",
  "Your rights",
  "Changes to this policy",
  "How to reach us",
].map((title) => ({ title, id: slugify(title) }));

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
        ])}
      />

      <PageHero
        eyebrow="Privacy"
        title="Your privacy, in plain language"
        lead={
          <>
            CheckMyEligibility is built to be private by design. No login, no Aadhaar, no
            bank details, no documents — this page explains exactly how we handle
            your information.
          </>
        }
        art={
          <SpotIllustration
            icon={ShieldCheck}
            tone="navy"
            label="Privacy protection by design"
          />
        }
      >
        <p className="text-sm text-ink-muted">Last updated: {LAST_UPDATED}</p>
      </PageHero>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-14">
            <nav aria-label="Privacy sections" className="hidden lg:block">
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
              <p className="rounded-2xl border border-navy/10 bg-surface-subtle p-5 text-sm">
                This is a plain-language summary of how we treat your data, not
                legal advice. We aim to align with India&rsquo;s Digital Personal
                Data Protection (DPDP) principles.
              </p>

              <section id={SECTIONS[0].id} className="scroll-mt-24 space-y-3">
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                  {SECTIONS[0].title}
                </h2>
                <p>
                  As little as possible — in most cases, nothing that identifies
                  you. You don&rsquo;t create an account, and we never ask for the
                  sensitive details a scheme application might need. Specifically,
                  we do not collect:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Your Aadhaar number</li>
                  <li>Your bank account or payment details</li>
                  <li>Scanned copies of your documents</li>
                  <li>Government portal login credentials</li>
                </ul>
                <p>
                  If a scheme requires any of these, you provide them yourself,
                  directly on the official government portal — never to us.
                </p>
              </section>

              <section id={SECTIONS[1].id} className="scroll-mt-24 space-y-3">
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                  {SECTIONS[1].title}
                </h2>
                <p>
                  When you describe your situation to the assistant, that text is
                  used only to suggest relevant schemes during your visit. In this
                  phase of the product we do not store your conversation on our
                  servers and we do not build a personal profile of you. We never
                  submit applications on your behalf or transmit your details to
                  any government department.
                </p>
              </section>

              <section id={SECTIONS[2].id} className="scroll-mt-24 space-y-3">
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                  {SECTIONS[2].title}
                </h2>
                <p>
                  We may use essential cookies to make the site work and limited,
                  privacy-respecting analytics to understand which pages are
                  useful. These do not identify you personally. We do not sell
                  your data or use it for advertising.
                </p>
              </section>

              <section id={SECTIONS[3].id} className="scroll-mt-24 space-y-3">
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                  {SECTIONS[3].title}
                </h2>
                <p>
                  CheckMyEligibility links out to official government portals so you can
                  apply yourself. Those portals are operated by third parties and
                  their own privacy policies and terms apply once you leave our
                  site. We don&rsquo;t control them and aren&rsquo;t responsible
                  for how they handle your data.
                </p>
              </section>

              <section id={SECTIONS[4].id} className="scroll-mt-24 space-y-3">
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                  {SECTIONS[4].title}
                </h2>
                <p>
                  Because we keep collection minimal and account-free, there is
                  very little personal data tied to you. In keeping with the DPDP
                  framework, you can still reach out to:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Ask what information, if any, relates to you</li>
                  <li>Request correction or deletion of any such data</li>
                  <li>Raise a concern about how your data has been handled</li>
                </ul>
                <p>
                  Just email us using the address below and we&rsquo;ll respond.
                </p>
              </section>

              <section id={SECTIONS[5].id} className="scroll-mt-24 space-y-3">
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                  {SECTIONS[5].title}
                </h2>
                <p>
                  This policy is provided for transparency and may evolve as the
                  product grows. When it changes materially, we&rsquo;ll update the
                  &ldquo;last updated&rdquo; date at the top of this page.
                </p>
              </section>

              <section id={SECTIONS[6].id} className="scroll-mt-24 space-y-3">
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                  {SECTIONS[6].title}
                </h2>
                <p>
                  Questions about your data? Write to us at{" "}
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
                <p className="rounded-2xl border border-navy/10 bg-surface-subtle p-5 text-sm">
                  {SITE.disclaimer}
                </p>
              </section>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Questions about your data?"
        lead="Ask the assistant directly, or read the FAQ — both are free."
        primary={{ label: "Ask the assistant", href: chatHref() }}
        secondary={{ label: "Read the FAQ", href: "/faq" }}
      />
    </>
  );
}
