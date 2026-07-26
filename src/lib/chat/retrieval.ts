import type { Scheme, Message } from "@/lib/types";
import { extractIntent } from "./intentExtractor";
import { embedText } from "./embedder";
import { searchByVector } from "./qdrant";
import { fetchApprovedSchemes, fetchSchemesByIds } from "./db";
import { rowToScheme } from "./schemeMapper";

const MAX_RESULTS = 5;
const STRUCTURED_LIMIT = 20;
const VECTOR_LIMIT = 10;
/** Assistant turns can run long; cap how much of them seeds the embedding so
 * the student's actual question is not drowned out by earlier bot prose. */
const HISTORY_CONTEXT_CHARS = 400;

// In-memory embedding cache — avoids re-embedding identical or repeated queries.
// Capped at 100 entries; oldest entry evicted when full.
const EMBED_CACHE = new Map<string, number[]>();
const EMBED_CACHE_MAX = 100;

async function getCachedEmbedding(text: string): Promise<number[] | null> {
  const cached = EMBED_CACHE.get(text);
  if (cached) {
    // Refresh recency so hot queries survive eviction.
    EMBED_CACHE.delete(text);
    EMBED_CACHE.set(text, cached);
    return cached;
  }
  try {
    const vector = await embedText(text);
    if (EMBED_CACHE.size >= EMBED_CACHE_MAX) {
      EMBED_CACHE.delete(EMBED_CACHE.keys().next().value!);
    }
    EMBED_CACHE.set(text, vector);
    return vector;
  } catch (err) {
    console.error("[retrieval] embedding failed:", err);
    return null;
  }
}

/** Build the retrieval query from the current message + recent assistant turns
 * so follow-ups like "tell me more about the second one" resolve correctly. */
function buildRetrievalQuery(message: string, history: Message[]): string {
  const recentAssistant = history
    .filter((m) => m.role === "assistant")
    .slice(-2)
    .map((m) => m.content)
    .join(" ")
    .slice(-HISTORY_CONTEXT_CHARS);
  return recentAssistant ? `${recentAssistant} ${message}` : message;
}

async function structuredLeg(message: string) {
  try {
    return await fetchApprovedSchemes(extractIntent(message), STRUCTURED_LIMIT);
  } catch (err) {
    // Never let a structured-query failure take down semantic search too.
    console.error("[retrieval] structured lookup failed:", err);
    return [];
  }
}

async function vectorLeg(retrievalQuery: string): Promise<string[]> {
  const queryVec = await getCachedEmbedding(retrievalQuery);
  if (!queryVec) return [];
  try {
    return await searchByVector(queryVec, VECTOR_LIMIT);
  } catch (err) {
    console.error("[retrieval] vector search failed:", err);
    return [];
  }
}

export async function retrieve(message: string, history: Message[] = []): Promise<Scheme[]> {
  const retrievalQuery = buildRetrievalQuery(message, history);

  // Settled, not all — one leg failing must not discard the other's results.
  const [structuredRows, vectorIds] = await Promise.all([
    structuredLeg(message),
    vectorLeg(retrievalQuery),
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

  const extra = vectorIds.filter((id) => !seen.has(id));
  if (extra.length) {
    try {
      for (const row of await fetchSchemesByIds(extra)) {
        const id = String(row.id);
        if (!seen.has(id)) {
          seen.add(id);
          merged.push(row);
        }
      }
    } catch (err) {
      console.error("[retrieval] hydrating vector hits failed:", err);
    }
  }

  return merged.slice(0, MAX_RESULTS).map(rowToScheme);
}
