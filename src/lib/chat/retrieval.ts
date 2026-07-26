import type { Scheme, Message } from "@/lib/types";
import { extractIntent } from "./intentExtractor";
import { embedText } from "./embedder";
import { searchByVector } from "./qdrant";
import { fetchApprovedSchemes, fetchSchemesByIds } from "./db";
import { rowToScheme } from "./schemeMapper";

const MAX_RESULTS = 5;
const STRUCTURED_LIMIT = 20;
const VECTOR_LIMIT = 10;

// In-memory embedding cache — avoids re-embedding identical or repeated queries.
// Capped at 100 entries; oldest entry evicted when full.
const EMBED_CACHE = new Map<string, number[]>();
const EMBED_CACHE_MAX = 100;

async function getCachedEmbedding(text: string): Promise<number[] | null> {
  if (EMBED_CACHE.has(text)) return EMBED_CACHE.get(text)!;
  try {
    const vector = await embedText(text);
    if (EMBED_CACHE.size >= EMBED_CACHE_MAX) {
      // Evict oldest entry
      EMBED_CACHE.delete(EMBED_CACHE.keys().next().value!);
    }
    EMBED_CACHE.set(text, vector);
    return vector;
  } catch {
    return null;
  }
}

/** Build the retrieval query from the current message + last 2 assistant turns
 * so follow-ups like "tell me more about the second one" resolve correctly. */
function buildRetrievalQuery(message: string, history: Message[]): string {
  const recentAssistant = history
    .filter((m) => m.role === "assistant")
    .slice(-2)
    .map((m) => m.content)
    .join(" ");
  return recentAssistant ? `${recentAssistant} ${message}` : message;
}

export async function retrieve(message: string, history: Message[] = []): Promise<Scheme[]> {
  const intent = extractIntent(message);
  const retrievalQuery = buildRetrievalQuery(message, history);

  const [structuredRows, queryVec] = await Promise.all([
    fetchApprovedSchemes(intent, STRUCTURED_LIMIT),
    getCachedEmbedding(retrievalQuery),
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
