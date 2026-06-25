import type { Metadata } from "next";
import Link from "next/link";
import {
  MessagesSquare,
  Sparkles,
  ExternalLink,
  Check,
  X,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StepCard } from "@/components/marketing/StepCard";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/marketing/CtaBand";
import { SpotIllustration } from "@/components/illustrations/SpotIllustration";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbLd } from "@/lib/seo/jsonld";
import { chatHref } from "@/lib/chat/openChat";

export const metadata: Metadata = buildMetadata({
  title: "How it works",
  description:
    "How GovEligify helps you find Indian government schemes: describe your situation, get matched, and apply on official portals yourself. We never submit applications for you.",
  path: "/how-it-works",
});

const WE_DO = [
  "Guide you through schemes and certificates in plain language",
  "Match your situation to schemes you may qualify for",
  "List the documents you'll need before you apply",
  "Link you directly to the official government portal",
  "Show only human-verified scheme data",
];

const WE_DONT = [
  "Submit applications on your behalf",
  "Charge any fee or ask for payment",
  "Store your Aadhaar, bank details, or scanned documents",
  "Decide your approval — that's the government's call",
];

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "How it works", path: "/how-it-works" },
        ])}
      />

      <PageHero
        eyebrow="How it works"
        title="From confused to confident, in three steps"
        lead={
          <>
            Government schemes can be hard to navigate. We make the path simple —
            understand what you qualify for, then apply officially, yourself.
          </>
        }
        art={
          <SpotIllustration
            icon={MessagesSquare}
            tone="navy"
            label="A guided conversation about your eligibility"
          />
        }
      />

      {/* Steps */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StepCard step={1} icon={MessagesSquare} tone="navy" title="Tell us about you">
              Describe your situation in plain language — your occupation, age,
              state, income, or simply what you&rsquo;re hoping to find. There are no
              forms to fill and no login to create.
            </StepCard>
            <StepCard step={2} icon={Sparkles} tone="saffron" title="We match the schemes">
              We compare what you&rsquo;ve told us against the eligibility details of
              government schemes and certificates, and surface the ones most likely
              to fit — along with the documents you&rsquo;ll need.
            </StepCard>
            <StepCard step={3} icon={ExternalLink} tone="green" title="You apply, officially">
              We give you a direct link to the genuine government portal. You apply
              there yourself. We never ask for your login and never submit anything
              for you.
            </StepCard>
            <StepCard step={4} icon={BadgeCheck} tone="navy" title="Verified by humans">
              Every scheme on GovEligify is manually reviewed by a trained team
              against the official government portal before it appears here — so
              you get accurate, up-to-date information.
            </StepCard>
          </div>
        </Container>
      </section>

      {/* What we do / don't */}
      <section className="bg-surface-subtle py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Clear boundaries"
            title="What we do, and what we don't"
            lead="We're an independent guide. Knowing exactly where we stop is part of keeping you safe."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex h-full flex-col rounded-2xl border border-green/20 bg-green-soft/40 p-6">
              <h3 className="font-display text-xl font-bold text-green-deep text-center sm:text-left">
                What we do
              </h3>
              <ul className="mt-4 space-y-3">
                {WE_DO.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink">
                    <Check
                      className="mt-0.5 h-5 w-5 shrink-0 text-green-deep"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex h-full flex-col rounded-2xl border border-navy/15 bg-surface-card p-6">
              <h3 className="font-display text-xl font-bold text-ink text-center sm:text-left">
                What we don&rsquo;t do
              </h3>
              <ul className="mt-4 space-y-3">
                {WE_DONT.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink">
                    <X
                      className="mt-0.5 h-5 w-5 shrink-0 text-ink-faint"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Privacy callout */}
      <section className="pt-16 sm:pt-20">
        <Container className="max-w-3xl">
          <div className="flex flex-col items-center text-center gap-4 rounded-[2rem] bg-navy-gradient p-9 text-white sm:flex-row sm:items-center sm:text-left">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-saffron">
              <ShieldCheck className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-display text-xl font-bold">Private by design</h3>
              <p className="mt-2 text-pretty text-white/80">
                You don&rsquo;t need an account, and we only ask for the minimum
                needed to suggest relevant schemes. We never collect your Aadhaar
                number, bank details, or documents.{" "}
                <Link href="/privacy" className="font-semibold text-saffron underline-offset-4 hover:underline">
                  Read our privacy approach
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Ready to find what's yours?"
        primary={{ label: "Check my eligibility", href: chatHref() }}
        secondary={{ label: "Browse all schemes", href: "/explore" }}
      />
    </>
  );
}
