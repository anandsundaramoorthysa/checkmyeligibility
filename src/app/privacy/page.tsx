import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { TableOfContents } from "@/components/layout/TableOfContents";
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
            bank details, no documents - this page explains exactly how we handle
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
            <TableOfContents sections={SECTIONS} />

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
                  As little as possible - in most cases, nothing that identifies
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
                  directly on the official government portal - never to us.
                </p>
              </section>

              <section id={SECTIONS[1].id} className="scroll-mt-24 space-y-3">
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                  {SECTIONS[1].title}
                </h2>
                <p>
                  When you describe your situation to the assistant, that text is
                  used to suggest relevant schemes. We never submit applications
                  on your behalf, and we never transmit your details to any
                  government department.
                </p>
                <p>
                  So that you can close the tab and pick the conversation back up,
                  your messages and the assistant&apos;s replies are saved on our
                  servers against a random identifier held in a cookie on your
                  device. That identifier is not linked to your name, your email
                  or any account, because there is no account to link it to. It is
                  the only way we can find your conversation, so anyone without
                  that cookie, including us going looking by name, cannot.
                </p>
                <p>
                  Conversations are deleted automatically after 30 days of
                  inactivity. You can delete yours at any time by starting a new
                  chat with the <span className="font-semibold">+</span> button in
                  the assistant, which clears both the copy in your browser and
                  the copy on our servers.
                </p>
                <p>
                  Separately, we keep an operational log of the questions asked so
                  we can see what students are looking for and where the assistant
                  is failing them. Those entries are stored against a one-way hash
                  of your IP address, never the address itself, and are not joined
                  to your saved conversation. We do not build a personal profile of
                  you and we do not sell or share any of this.
                </p>
              </section>

              <section id={SECTIONS[2].id} className="scroll-mt-24 space-y-3">
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                  {SECTIONS[2].title}
                </h2>
                <p>
                  We set one essential cookie. It holds a random identifier for
                  your saved conversation, nothing else: no name, no email, no
                  tracking across other sites. It cannot be read by JavaScript,
                  it is not shared with anyone, and it expires after 30 days.
                  Clearing your cookies, or starting a new chat, ends it.
                </p>
                <p>
                  We may also use limited, privacy-respecting analytics to
                  understand which pages are useful. These do not identify you
                  personally. We do not sell your data or use it for advertising.
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
        lead="Ask the assistant directly, or read the FAQ - both are free."
        primary={{ label: "Ask the assistant", href: chatHref() }}
        secondary={{ label: "Read the FAQ", href: "/faq" }}
      />
    </>
  );
}
