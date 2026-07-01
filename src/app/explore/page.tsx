import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SchemeCard } from "@/components/marketing/SchemeCard";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/marketing/CtaBand";
import { SpotIllustration } from "@/components/illustrations/SpotIllustration";
import { getCategoryArt } from "@/components/illustrations/registry";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbLd } from "@/lib/seo/jsonld";
import { chatHref } from "@/lib/chat/openChat";
import { SITE } from "@/lib/site";
import { getAllSchemes } from "@/lib/data";
import { CATEGORIES } from "@/data/categories";
import type { Scheme, SchemeCategory } from "@/lib/types";

export const metadata: Metadata = buildMetadata({
  title: "Explore schemes",
  description:
    "Browse Indian government education schemes by category — scholarships, fellowships, education loans, and research grants for students. Plain-language summaries with direct links to official portals.",
  path: "/explore",
});

function groupByCategory(schemes: Scheme[]) {
  const byMember = new Map<SchemeCategory, Scheme[]>();
  for (const scheme of schemes) {
    const list = byMember.get(scheme.category) ?? [];
    list.push(scheme);
    byMember.set(scheme.category, list);
  }
  return CATEGORIES.map((category) => ({
    category,
    schemes: category.members.flatMap((m) => byMember.get(m) ?? []),
  })).filter((g) => g.schemes.length > 0);
}

export default async function ExplorePage() {
  const schemes = await getAllSchemes();
  const groups = groupByCategory(schemes);

  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Explore government schemes",
    description: SITE.description,
    url: new URL("/explore", SITE.url).toString(),
  };

  return (
    <>
      <JsonLd
        data={[
          collectionLd,
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Explore", path: "/explore" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Explore"
        title="Education schemes for students, grouped by type"
        lead={`Browse all ${schemes.length} education schemes across ${groups.length} categories. Each links to the official portal where you verify details and apply yourself.`}
        art={
          <SpotIllustration
            icon={GraduationCap}
            tone="navy"
            label="Education schemes grouped by type"
          />
        }
      >
        <nav aria-label="Jump to a category">
          <ul className="flex flex-wrap justify-center gap-2.5 lg:justify-start">
            {groups.map(({ category }) => {
              const art = getCategoryArt(category.key);
              return (
                <li key={category.key}>
                  <Link
                    href={`#${category.key}`}
                    className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-surface-card px-3.5 py-1.5 text-sm font-semibold text-ink transition-colors hover:border-navy/30 hover:bg-surface-subtle"
                  >
                    <art.Icon className="h-4 w-4 text-navy" aria-hidden="true" />
                    {category.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </PageHero>

      <section className="py-12 sm:py-16">
        <Container className="space-y-14 sm:space-y-16">
          {groups.map(({ category, schemes: items }) => {
            const art = getCategoryArt(category.key);
            return (
              <div key={category.key} id={category.key} className="scroll-mt-28">
                <div className="flex items-center gap-5">
                  <SpotIllustration
                    icon={art.Icon}
                    tone={art.tone}
                    label={category.title}
                    className="w-16 shrink-0 sm:w-20"
                  />
                  <div className="max-w-2xl">
                    <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink">
                      {category.title}
                    </h2>
                    <p className="mt-2 text-ink-muted">{category.blurb}</p>
                  </div>
                </div>
                <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((scheme) => (
                    <li key={scheme.id} className="flex">
                      <SchemeCard scheme={scheme} />
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </Container>
      </section>

      <CtaBand
        title="Not sure which scheme fits you?"
        lead="Describe your situation and the assistant will match you."
        primary={{ label: "Check my eligibility", href: chatHref() }}
        secondary={{ label: "Browse certificates", href: "/certificates" }}
      />
    </>
  );
}
