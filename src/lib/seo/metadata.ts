import type { Metadata } from "next";
import { SITE } from "@/lib/site";

interface BuildMetaArgs {
  title?: string;
  description?: string;
  path?: string; // e.g. "/explore" - used for canonical + OG url
  noindex?: boolean;
}

/**
 * Central metadata builder. Pages pass a title/description/path; this fills in
 * the title template, canonical, OpenGraph + Twitter cards consistently.
 */
export function buildMetadata({
  title,
  description = SITE.description,
  path = "/",
  noindex = false,
}: BuildMetaArgs = {}): Metadata {
  const url = new URL(path, SITE.url).toString();
  const fullTitle = title ? `${title} · ${SITE.name}` : `${SITE.name} - ${SITE.tagline}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "website",
      siteName: SITE.name,
      title: fullTitle,
      description,
      url,
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
