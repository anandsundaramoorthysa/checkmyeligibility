import type { Metadata } from "next";
import {
  Compass,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  AlertTriangle,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/marketing/CtaBand";
import { CitizensBand } from "@/components/marketing/CitizensBand";
import { SpotIllustration } from "@/components/illustrations/SpotIllustration";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbLd, organizationLd } from "@/lib/seo/jsonld";
import { chatHref } from "@/lib/chat/openChat";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Why GovEligify exists: to make Indian government schemes and certificates simple, trustworthy, and within reach for everyone. An independent guide, not a government body.",
  path: "/about",
});

const TRUST = ["Free, always", "No login", "Independent guide"];

const VALUES = [
  {
    icon: Compass,
    title: "Clarity over complexity",
    body: "We translate dense rules into plain language so anyone can understand what they qualify for.",
  },
  {
    icon: ShieldCheck,
    title: "Trust and privacy",
    body: "No login, minimal data, and we never collect your Aadhaar, bank details, or documents.",
  },
  {
    icon: HeartHandshake,
    title: "Empowerment, not gatekeeping",
    body: "We point you to official portals and let you apply yourself. Your benefits are your right.",
  },
  {
    icon: Sparkles,
    title: "Honest and accurate",
    body: "We work to keep details correct and always ask you to confirm on the official portal.",
  },
];

export default function AboutPage() {
  const aboutLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About ${SITE.name}`,
    description: SITE.description,
    url: new URL("/about", SITE.url).toString(),
    mainEntity: organizationLd(),
  };

  return (
    <>
      <JsonLd
        data={[
          aboutLd,
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="About us"
        title={<>Helping every Indian claim what&rsquo;s theirs</>}
        lead={
          <>
            {SITE.tagline} GovEligify is a free guide to Indian government schemes,
            subsidies, and certificates — built to be simple, warm, and trustworthy.
          </>
        }
        art={
          <SpotIllustration
            icon={HeartHandshake}
            tone="green"
            label="A helping hand toward government support"
          />
        }
      >
        <ul className="flex flex-wrap justify-center gap-2.5 lg:justify-start">
          {TRUST.map((label) => (
            <li
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-surface-card px-3.5 py-1.5 text-sm font-semibold text-ink"
            >
              <ShieldCheck className="h-4 w-4 text-green-deep" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </PageHero>

      {/* Mission / why */}
      <section className="py-16 sm:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="mx-auto max-w-2xl space-y-6 text-pretty text-center text-lg leading-relaxed text-ink-muted lg:mx-0 lg:text-left">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink">
              Why we exist
            </h2>
            <p>
              India runs hundreds of welfare schemes, scholarships, pensions, and
              subsidies. Yet every year, billions in benefits go unclaimed — not
              because people aren&rsquo;t eligible, but because the information is
              scattered, written in jargon, and hard to navigate.
            </p>
            <p>
              We built GovEligify to close that gap. Describe your situation in plain
              words, and we help you understand which schemes may fit, what documents
              you&rsquo;ll need, and exactly where to apply on the official government
              portal.
            </p>
            <p>
              We don&rsquo;t replace the government. We make it easier to reach — so the
              support that&rsquo;s meant for you actually reaches you.
            </p>
          </div>

          <div className="mx-auto w-full max-w-[16rem] sm:max-w-xs">
            <SpotIllustration
              icon={Compass}
              tone="navy"
              label="A clear path through government support"
            />
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-surface-subtle py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="What we value" title="The principles we build on" />
          <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {VALUES.map((value) => (
              <li
                key={value.title}
                className="flex h-full flex-col items-center text-center sm:items-start sm:text-left rounded-2xl border border-navy/10 bg-surface-card p-6"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-saffron-soft text-saffron-deep">
                  <value.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">
                  {value.title}
                </h3>
                <p className="mt-2 text-ink-muted">{value.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Non-affiliation disclaimer */}
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <div className="flex flex-col items-center text-center gap-5 rounded-3xl border-2 border-saffron/40 bg-saffron-soft/50 p-8 sm:flex-row sm:items-start sm:text-left">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-saffron text-navy-deep">
              <AlertTriangle className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-display text-xl font-extrabold tracking-tight text-ink">
                We are independent
              </h2>
              <p className="mt-2 text-pretty leading-relaxed text-ink-muted">
                {SITE.disclaimer}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Citizens band */}
      <CitizensBand
        eyebrow="Who it's for"
        title="Made for every Indian"
        lead="Whoever you are and wherever you live, there may be support meant for you."
      />

      <CtaBand
        title="Find what you're entitled to."
        primary={{ label: "Check my eligibility", href: chatHref() }}
        secondary={{ label: "See how it works", href: "/how-it-works" }}
      />
    </>
  );
}
