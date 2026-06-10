import { NextResponse } from "next/server";
import type { BotTurn, Message } from "@/lib/types";
import { mockEngine } from "@/lib/chat/mockEngine";

/**
 * UI → /api/chat → engine seam. Phase-1 calls the local mock engine and returns
 * the BotTurn as JSON. Phase-2 swaps the engine internals (RAG / streaming)
 * without changing this contract or any UI code.
 */
export const runtime = "nodejs";

interface ChatRequestBody {
  message?: string;
  history?: Message[];
}

export async function POST(req: Request): Promise<NextResponse> {
  let body: ChatRequestBody;
  try {
    body = (await req.json()) as ChatRequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const message = (body.message ?? "").trim();
  if (!message) {
    return NextResponse.json({ error: "Missing 'message'" }, { status: 400 });
  }

  const history = Array.isArray(body.history) ? body.history : [];

  try {
    const turn: BotTurn = await mockEngine.send(message, history);
    return NextResponse.json(turn);
  } catch {
    const fallback: BotTurn = {
      messages: [
        {
          content:
            "Sorry, something went wrong on my side. Please try again in a moment.",
        },
      ],
    };
    return NextResponse.json(fallback, { status: 200 });
  }
}
