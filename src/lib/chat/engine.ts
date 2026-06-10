import type { BotTurn, Message } from "@/lib/types";

/**
 * The single seam every chat surface talks to. Phase-1 ships a local mock
 * (mockEngine.ts) that keyword-matches over the sample catalogue; Phase-2 can
 * swap in a real RAG/streaming backend behind this exact interface without any
 * UI change.
 */
export interface ChatEngine {
  /** The opening assistant turn shown before the user types anything. */
  greeting(): BotTurn;
  /**
   * Produce the assistant reply for `input`, given prior `history`. Async so a
   * future implementation can hit a network/LLM without changing callers.
   */
  send(input: string, history: Message[]): Promise<BotTurn>;
}
