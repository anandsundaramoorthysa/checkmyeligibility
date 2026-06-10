import type {
  Scheme,
  Certificate,
  SchemeCategory,
  IndianState,
} from "@/lib/types";
import { SCHEMES } from "@/data/schemes";
import { CERTIFICATES } from "@/data/certificates";
import { getCategory } from "@/data/categories";

/**
 * Provider seam for Phase-1 local data. Every async function wraps the local
 * arrays in `Promise.resolve` so the signatures are already API-ready: a
 * Phase-2 implementation can fetch from a real API/pipeline without any caller
 * changes. The synchronous `searchSchemes` powers the mock chat engine.
 */

/* ------------------------------- schemes ---------------------------------- */

export async function getAllSchemes(): Promise<Scheme[]> {
  return Promise.resolve(SCHEMES);
}

export async function getSchemeBySlug(slug: string): Promise<Scheme | null> {
  return Promise.resolve(SCHEMES.find((s) => s.slug === slug) ?? null);
}

/** Return every SchemeCategory enum value that a display-card key covers. */
function categoryMembers(key: SchemeCategory): SchemeCategory[] {
  const card = getCategory(key);
  return card ? card.members : [key];
}

export async function filterSchemes(q: {
  category?: SchemeCategory;
  state?: IndianState;
  text?: string;
}): Promise<Scheme[]> {
  let results = SCHEMES;

  if (q.category) {
    const members = new Set<SchemeCategory>(categoryMembers(q.category));
    results = results.filter((s) => members.has(s.category));
  }

  if (q.state) {
    const state = q.state;
    // "all-india" central schemes always surface; otherwise match the state.
    results = results.filter(
      (s) => s.states.includes(state) || s.states.includes("all-india"),
    );
  }

  if (q.text && q.text.trim()) {
    const matched = new Set(searchSchemes(q.text).map((s) => s.id));
    results = results.filter((s) => matched.has(s.id));
  }

  return Promise.resolve(results);
}

/**
 * Synchronous keyword matcher used by the mock bot engine. Matches against
 * name, shortName, summary, tags, and category. Returns matches ordered by a
 * simple relevance score (more field hits first).
 */
export function searchSchemes(text: string): Scheme[] {
  const query = text.toLowerCase().trim();
  if (!query) return [];

  const terms = query.split(/\s+/).filter(Boolean);

  const scored = SCHEMES.map((scheme) => {
    const haystack = [
      scheme.name,
      scheme.shortName ?? "",
      scheme.summary,
      scheme.category,
      ...(scheme.tags ?? []),
    ]
      .join(" ")
      .toLowerCase();

    let score = 0;
    for (const term of terms) {
      if (haystack.includes(term)) score += 1;
    }
    return { scheme, score };
  });

  return scored
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((x) => x.scheme);
}

/* ----------------------------- certificates ------------------------------- */

export async function getAllCertificates(): Promise<Certificate[]> {
  return Promise.resolve(CERTIFICATES);
}

export async function getCertificateBySlug(
  slug: string,
): Promise<Certificate | null> {
  return Promise.resolve(CERTIFICATES.find((c) => c.slug === slug) ?? null);
}
