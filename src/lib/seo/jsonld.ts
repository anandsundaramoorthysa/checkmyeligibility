import { SITE } from "@/lib/site";
import type { Scheme } from "@/lib/types";
import type { TeamMember } from "@/data/team";

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    email: SITE.email,
    logo: `${SITE.url}/brand/checkmyeligibility-mark.svg`,
    sameAs: [SITE.github],
    license: "https://polyformproject.org/licenses/noncommercial/1.0.0/",
    funder: {
      "@type": "EducationalOrganization",
      name: SITE.institution,
    },
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

export function certificateServiceLd(certificate: {
  name: string;
  summary: string;
  officialPortalUrl?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "GovernmentService",
    name: certificate.name,
    serviceType: "Government Certificate",
    description: certificate.summary,
    provider: {
      "@type": "GovernmentOrganization",
      name: "Government of India",
    },
    areaServed: { "@type": "Country", name: "India" },
    ...(certificate.officialPortalUrl ? { url: certificate.officialPortalUrl } : {}),
  };
}

export function howToLd(steps: { name: string; text: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to find Indian government schemes on CheckMyEligibility",
    description:
      "A step-by-step guide to discovering and applying for scholarships, fellowships, and education loans via CheckMyEligibility.",
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export function personLd(
  member: Pick<TeamMember, "name" | "title" | "githubUsername" | "linkedIn" | "skills">,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.title,
    url: new URL(`/team/${member.githubUsername}`, SITE.url).toString(),
    sameAs: [
      `https://github.com/${member.githubUsername}`,
      ...(member.linkedIn ? [member.linkedIn] : []),
    ],
    worksFor: {
      "@type": "EducationalOrganization",
      name: SITE.institution,
    },
    ...(member.skills?.length ? { knowsAbout: member.skills } : {}),
  };
}
