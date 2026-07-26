// 768-dim multilingual embeddings via Gemini text-embedding-004 (v1 API only)
export async function embedText(text: string): Promise<number[]> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY is not set");

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1/models/text-embedding-004:embedContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: { parts: [{ text }] } }),
    },
  );

  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`Gemini embed ${res.status}: ${detail}`);
  }

  const data = await res.json();
  return data.embedding.values as number[];
}
