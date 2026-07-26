import type { BotTurn, LangCode, Message, QuickReply, Scheme } from "@/lib/types";

export type TokenCallback = (token: string) => void;

const FALLBACK_TURN: BotTurn = {
  messages: [
    {
      content:
        "Eli couldn't reach the server just now. Please check your connection and try again in a moment.",
    },
  ],
  quickReplies: [
    { label: "Try again", send: "What scholarships am I eligible for?" },
  ],
};

/**
 * Streams a chat turn from /api/chat via SSE.
 * Calls onToken for each text chunk so the UI can render progressively.
 * Returns the complete BotTurn when the stream ends.
 */
export async function sendToBot(
  message: string,
  history: Message[],
  lang: LangCode,
  onToken: TokenCallback,
  onMeta: (schemes: Scheme[] | undefined, quickReplies: QuickReply[]) => void,
): Promise<BotTurn> {
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ message, history, lang }),
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    // Handle non-streaming JSON fallback (rate limit, guardrail blocks, etc.)
    const ct = res.headers.get("content-type") ?? "";
    if (ct.includes("application/json")) {
      return (await res.json()) as BotTurn;
    }

    // SSE stream
    const reader = res.body?.getReader();
    if (!reader) throw new Error("No response body");

    const decoder = new TextDecoder();
    let buffer = "";
    let schemeResults: Scheme[] | undefined;
    let quickReplies: QuickReply[] = [];
    let fullText = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const parts = buffer.split("\n\n");
      buffer = parts.pop() ?? "";

      for (const part of parts) {
        const line = part.trim();
        if (!line.startsWith("data: ")) continue;
        const data = line.slice(6).trim();
        if (!data || data === "[DONE]") continue;

        let obj: { type: string; schemeResults?: Scheme[]; quickReplies?: QuickReply[]; text?: string };
        try {
          obj = JSON.parse(data);
        } catch {
          continue;
        }

        if (obj.type === "meta") {
          schemeResults = obj.schemeResults;
          quickReplies = obj.quickReplies ?? [];
          onMeta(schemeResults, quickReplies);
        } else if (obj.type === "token" && obj.text) {
          fullText += obj.text;
          onToken(obj.text);
        } else if (obj.type === "replace" && obj.text) {
          // Output was sanitized server-side — replace accumulated text
          fullText = obj.text;
        }
      }
    }

    return {
      messages: [{ content: fullText || FALLBACK_TURN.messages[0].content }],
      schemeResults,
      quickReplies: quickReplies.length ? quickReplies : undefined,
    };
  } catch {
    return FALLBACK_TURN;
  }
}
