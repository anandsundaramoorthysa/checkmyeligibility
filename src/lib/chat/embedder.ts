import { embed } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

// 768-dim multilingual embeddings — size must match Qdrant collection vector size
export async function embedText(text: string): Promise<number[]> {
  if (!process.env.GEMINI_API_KEY) throw new Error("GEMINI_API_KEY is not set");
  const google = createGoogleGenerativeAI({ apiKey: process.env.GEMINI_API_KEY });
  const { embedding } = await embed({
    model: google.textEmbeddingModel("text-embedding-004"),
    value: text,
  });
  return embedding;
}
