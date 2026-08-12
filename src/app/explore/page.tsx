import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/marketing/CtaBand";
import { SpotIllustration } from "@/components/illustrations/SpotIllustration";
import { ExploreClient } from "@/components/explore/ExploreClient";
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
    "Browse 200+ Indian government scholarships, fellowships, and education loans. Plain-language summaries with direct links to apply on official portals.",
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
      />

      <ExploreClient allGroups={groups} totalCount={schemes.length} />

      <CtaBand
        title="Not sure which scheme fits you?"
        lead="Describe your situation and the assistant will match you."
        primary={{ label: "Check my eligibility", href: chatHref() }}
        secondary={{ label: "Browse certificates", href: "/certificates" }}
      />
    </>
  );
}
