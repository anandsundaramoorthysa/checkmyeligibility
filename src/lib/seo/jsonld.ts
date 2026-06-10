import { SITE } from "@/lib/site";
import type { Scheme } from "@/lib/types";

/** schema.org emitters — kept as plain objects, rendered by <JsonLd>. */

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    email: SITE.email,
    logo: `${SITE.url}/brand/goveligify-mark.svg`,
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/explore?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function faqPageLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: new URL(it.path, SITE.url).toString(),
    })),
  };
}

export function governmentServiceLd(scheme: Scheme) {
  return {
    "@context": "https://schema.org",
    "@type": "GovernmentService",
    name: scheme.name,
    serviceType: scheme.category,
    description: scheme.summary,
    provider: scheme.ministry
      ? { "@type": "GovernmentOrganization", name: scheme.ministry }
      : undefined,
    areaServed: scheme.states.includes("all-india")
      ? { "@type": "Country", name: "India" }
      : scheme.states.map((s) => ({ "@type": "AdministrativeArea", name: s })),
    url: scheme.officialPortalUrl,
  };
}
