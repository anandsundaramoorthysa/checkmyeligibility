import type { Scheme } from "@/lib/types";
import { extractIntent } from "./intentExtractor";
import { embedText } from "./embedder";
import { searchByVector } from "./qdrant";
import { fetchApprovedSchemes, fetchSchemesByIds } from "./db";
import { rowToScheme } from "./schemeMapper";

const MAX_RESULTS = 5;
const STRUCTURED_LIMIT = 20;
const VECTOR_LIMIT = 10;

export async function retrieve(message: string): Promise<Scheme[]> {
  const intent = extractIntent(message);

  const [structuredRows, queryVec] = await Promise.all([
    fetchApprovedSchemes(intent, STRUCTURED_LIMIT),
    embedText(message).catch(() => null),
  ]);

  const seen = new Set<string>();
  const merged: typeof structuredRows = [];

  for (const row of structuredRows) {
    const id = String(row.id);
    if (!seen.has(id)) {
      seen.add(id);
      merged.push(row);
    }
  }

  if (queryVec) {
    try {
      const vectorIds = await searchByVector(queryVec, VECTOR_LIMIT);
      const extra = vectorIds.filter((id) => !seen.has(id));
      if (extra.length) {
        const extraRows = await fetchSchemesByIds(extra);
        for (const row of extraRows) {
          const id = String(row.id);
          if (!seen.has(id)) {
            seen.add(id);
            merged.push(row);
          }
        }
      }
    } catch {
      // vector search unavailable — structured-only results are fine
    }
  }

  return merged.slice(0, MAX_RESULTS).map(rowToScheme);
}
