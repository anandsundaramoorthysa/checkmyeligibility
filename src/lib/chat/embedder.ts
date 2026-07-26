import { GoogleGenerativeAI } from "@google/generative-ai";

const EMBEDDING_MODEL = "text-embedding-004"; // 768-dim, matches Qdrant collection size

function getModel() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY is not set");
  return new GoogleGenerativeAI(apiKey).getGenerativeModel({ model: EMBEDDING_MODEL });
}

export async function embedText(text: string): Promise<number[]> {
  const result = await getModel().embedContent(text);
  return result.embedding.values;
}
