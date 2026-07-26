import { NextResponse } from "next/server";
import { generateText } from "ai";
import { createGroq } from "@ai-sdk/groq";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import type { BotTurn, Message } from "@/lib/types";
import { retrieve } from "@/lib/chat/retrieval";
import { buildMessages } from "@/lib/chat/systemPrompt";
import { mockEngine } from "@/lib/chat/mockEngine";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 64 * 1024;
const MAX_MESSAGE_CHARS = 2000;
const MAX_HISTORY_ITEMS = 30;

const FALLBACK: BotTurn = {
  messages: [{ content: "Sorry, something went wrong. Please try again in a moment." }],
};

const BUSY_MESSAGE =
  "I'm handling a lot of requests right now. Please try again in a moment, or visit scholarships.gov.in directly.";

async function callLLM(messages: { role: "system" | "user" | "assistant"; content: string }[]): Promise<string> {
  if (process.env.GROQ_API_KEY) {
    try {
      const groq = createGroq({ apiKey: process.env.GROQ_API_KEY });
      const { text } = await generateText({
        model: groq("llama-3.3-70b-versatile"),
        messages,
      });
      return text;
    } catch {
      // fall through to Gemini
    }
  }

  if (process.env.GEMINI_API_KEY) {
    try {
      const google = createGoogleGenerativeAI({ apiKey: process.env.GEMINI_API_KEY });
      const { text } = await generateText({
        model: google("gemini-2.5-flash"),
        messages,
      });
      return text;
    } catch {
      // fall through
    }
  }

  return BUSY_MESSAGE;
}

export async function POST(req: Request): Promise<NextResponse> {
  const declaredLen = Number(req.headers.get("content-length") ?? 0);
  if (declaredLen > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Payload too large" }, { status: 413 });
  }

  let body: { message?: string; history?: Message[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const message = (typeof body.message === "string" ? body.message : "").trim();
  if (!message) return NextResponse.json({ error: "Missing 'message'" }, { status: 400 });
  if (message.length > MAX_MESSAGE_CHARS) return NextResponse.json({ error: "Message too long" }, { status: 413 });

  const history = (Array.isArray(body.history) ? body.history : [])
    .filter((m): m is Message => !!m && typeof m.content === "string")
    .slice(-MAX_HISTORY_ITEMS);

  // Dev fallback — mock engine when no API keys are configured
  const hasBackend = process.env.GROQ_API_KEY || process.env.GEMINI_API_KEY;
  if (!hasBackend && process.env.NODE_ENV !== "production") {
    try {
      return NextResponse.json(await mockEngine.send(message, history));
    } catch {
      return NextResponse.json(FALLBACK);
    }
  }

  try {
    const schemes = await retrieve(message);
    const llmMessages = buildMessages(message, history, schemes);
    const text = await callLLM(llmMessages);

    const turn: BotTurn = {
      messages: [{ content: text }],
      schemeResults: schemes.length ? schemes : undefined,
    };
    return NextResponse.json(turn);
  } catch (err) {
    console.error("[chat] error:", err);
    return NextResponse.json(FALLBACK);
  }
}
