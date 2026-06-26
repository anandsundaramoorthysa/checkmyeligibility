import type { Message } from "@/lib/types";

/** Render a conversation as plain text, oldest turn first. */
export function formatTranscript(messages: Message[]): string {
  const lines = messages.map((m) => {
    const who = m.role === "user" ? "You" : "CheckMyEligibility Assistant";
    const when = new Date(m.createdAt).toLocaleString();
    return `${who} (${when}):\n${m.content}\n`;
  });
  return [
    "CheckMyEligibility Assistant — chat transcript",
    "Sample guidance — always verify on the official portal.",
    "",
    ...lines,
  ].join("\n");
}

/** Trigger a browser download of the transcript as a .txt file. */
export function downloadTranscript(messages: Message[]): void {
  if (messages.length === 0) return;
  const text = formatTranscript(messages);
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const stamp = new Date().toISOString().slice(0, 10);

  const a = document.createElement("a");
  a.href = url;
  a.download = `CheckMyEligibility-chat-${stamp}.txt`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
