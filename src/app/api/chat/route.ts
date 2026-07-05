import { NextResponse } from "next/server";
import type { BotTurn, Message } from "@/lib/types";
import { mockEngine } from "@/lib/chat/mockEngine";

/**
 * UI → /api/chat → engine seam.
 * When FASTAPI_URL is set, proxies to the FastAPI backend (Phase 2).
 * Falls back to the local mock engine when FASTAPI_URL is absent (Phase 1 / local dev).
 * The BotTurn contract is identical in both paths — no UI changes needed.
 */
export const runtime = "nodejs";

interface ChatRequestBody {
  message?: string;
  history?: Message[];
}

const MAX_BODY_BYTES = 64 * 1024; // 64 KB
const MAX_MESSAGE_CHARS = 2000;
const MAX_HISTORY_ITEMS = 30;
const FASTAPI_TIMEOUT_MS = 30_000;

const FALLBACK: BotTurn = {
  messages: [{ content: "Sorry, something went wrong on my side. Please try again in a moment." }],
};

export async function POST(req: Request): Promise<NextResponse> {
  const declaredLen = Number(req.headers.get("content-length") ?? 0);
  if (declaredLen > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Payload too large" }, { status: 413 });
  }

  let body: ChatRequestBody;
  try {
    body = (await req.json()) as ChatRequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const message = (typeof body.message === "string" ? body.message : "").trim();
  if (!message) {
    return NextResponse.json({ error: "Missing 'message'" }, { status: 400 });
  }
  if (message.length > MAX_MESSAGE_CHARS) {
    return NextResponse.json({ error: "Message too long" }, { status: 413 });
  }

  const history = (Array.isArray(body.history) ? body.history : [])
    .filter((m): m is Message => !!m && typeof (m as Message).content === "string")
    .slice(-MAX_HISTORY_ITEMS);

  // Phase 2: proxy to FastAPI backend when FASTAPI_URL is configured.
  const fastapiUrl = process.env.FASTAPI_URL;
  if (fastapiUrl) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), FASTAPI_TIMEOUT_MS);
      const res = await fetch(`${fastapiUrl}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, history }),
        signal: controller.signal,
      });
      clearTimeout(timer);
      if (!res.ok) {
        console.error(`FastAPI responded ${res.status}`);
        return NextResponse.json(FALLBACK);
      }
      const turn = (await res.json()) as BotTurn;
      return NextResponse.json(turn);
    } catch (err) {
      console.error("FastAPI proxy error:", err);
      return NextResponse.json(FALLBACK);
    }
  }

  // Phase 1 fallback: local mock engine.
  try {
    const turn: BotTurn = await mockEngine.send(message, history);
    return NextResponse.json(turn);
  } catch {
    return NextResponse.json(FALLBACK);
  }
}
