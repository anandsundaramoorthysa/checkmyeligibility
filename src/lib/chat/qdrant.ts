import { QdrantClient } from "@qdrant/js-client-rest";

const COLLECTION = process.env.QDRANT_COLLECTION ?? "scheme_embeddings";
const VECTOR_SIZE = 768;

export function getQdrant(): QdrantClient {
  const url = process.env.QDRANT_URL;
  if (!url) throw new Error("QDRANT_URL is not set");
  return new QdrantClient({ url, apiKey: process.env.QDRANT_API_KEY });
}

export async function ensureCollection(): Promise<void> {
  const client = getQdrant();
  const exists = await client.collectionExists(COLLECTION);
  if (!exists) {
    await client.createCollection(COLLECTION, {
      vectors: { size: VECTOR_SIZE, distance: "Cosine" },
    });
  }
}

export async function upsertEmbedding(
  schemeId: string,
  chunkText: string,
  vector: number[],
): Promise<void> {
  const client = getQdrant();
  await client.upsert(COLLECTION, {
    wait: true,
    points: [{ id: schemeId, vector, payload: { chunk_text: chunkText } }],
  });
}

export async function searchByVector(vector: number[], limit: number): Promise<string[]> {
  const client = getQdrant();
  const results = await client.search(COLLECTION, {
    vector,
    limit,
    with_payload: false,
  });
  return results.map((r) => String(r.id));
}
