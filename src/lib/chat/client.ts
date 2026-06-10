import type { BotTurn, Message } from "@/lib/types";

/**
 * Browser-side client for the chat seam. POSTs to /api/chat and returns the
 * parsed BotTurn. On any network/parse failure it returns a friendly fallback
 * turn so the UI never breaks — the same shape a real backend would return.
 */
export async function sendToBot(
  message: string,
  history: Message[],
): Promise<BotTurn> {
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ message, history }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return (await res.json()) as BotTurn;
  } catch {
    return {
      messages: [
        {
          content:
            "I couldn't reach the assistant just now. Please check your connection and try again in a moment.",
        },
      ],
    };
  }
}
