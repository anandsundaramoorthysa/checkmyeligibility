/**
 * The bot lives on its own page (/chat) — not a popup. `openChat` navigates
 * there, optionally seeding the first message via ?q=. Kept as a single helper
 * so every CTA (header, hero, category demo, footer) routes consistently.
 */
export function chatHref(seed?: string): string {
  return seed && seed.trim() ? `/chat?q=${encodeURIComponent(seed.trim())}` : "/chat";
}

export function openChat(seed?: string) {
  if (typeof window === "undefined") return;
  window.location.assign(chatHref(seed));
}
