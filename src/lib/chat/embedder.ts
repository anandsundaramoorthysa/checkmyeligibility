import { embed } from "ai";
import { google } from "@ai-sdk/google";

// 768-dim multilingual embeddings — size must match Qdrant collection vector size
const EMBEDDING_MODEL = google.textEmbeddingModel("text-embedding-004");

export async function embedText(text: string): Promise<number[]> {
  if (!process.env.GEMINI_API_KEY) throw new Error("GEMINI_API_KEY is not set");
  const { embedding } = await embed({ model: EMBEDDING_MODEL, value: text });
  return embedding;
}
