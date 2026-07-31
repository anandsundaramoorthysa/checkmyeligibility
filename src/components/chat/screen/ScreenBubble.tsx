"use client";

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Check, Pencil, ThumbsDown, ThumbsUp, Volume2, VolumeX, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Message } from "@/lib/types";
import { LogoMark } from "@/components/brand/Logo";
import { SchemeResultList } from "@/components/chat/SchemeResultList";

function stripMarkdown(text: string): string {
  return text
    .replace(/`{1,3}[^`]*`{1,3}/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[*_#>~-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

interface Props {
  message: Message;
  /** Last user message before this turn — enables feedback buttons on assistant turns. */
  feedbackContext?: string;
  /** Whether this message is currently being streamed (disables feedback until done). */
  streaming?: boolean;
  /** Re-ask this turn with edited wording. Absent while a reply is in flight. */
  onEdit?: (messageId: string, next: string) => void;
}

export function ScreenBubble({ message, feedbackContext, streaming, onEdit }: Props) {
  const isUser = message.role === "user";
  const [speaking, setSpeaking] = useState(false);
  const [ttsSupported, setTtsSupported] = useState(false);
  const [feedbackVote, setFeedbackVote] = useState<"up" | "down" | null>(null);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(message.content);
  const editRef = useRef<HTMLTextAreaElement | null>(null);

  // Focus and put the caret at the end when the editor opens.
  useEffect(() => {
    if (!editing) return;
    const el = editRef.current;
    if (!el) return;
    el.focus();
    el.setSelectionRange(el.value.length, el.value.length);
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  }, [editing]);

  function submitEdit() {
    const next = draft.trim();
    setEditing(false);
    if (!next || next === message.content) return;
    onEdit?.(message.id, next);
  }

  function cancelEdit() {
    setDraft(message.content);
    setEditing(false);
  }

  useEffect(() => {
    setTtsSupported(typeof window !== "undefined" && "speechSynthesis" in window);
  }, []);

  useEffect(() => {
    return () => {
      if (speaking) window.speechSynthesis.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function toggleSpeak() {
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(stripMarkdown(message.content));
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(utterance);
    setSpeaking(true);
  }

  async function submitFeedback(vote: "up" | "down") {
    if (feedbackVote) return;
    setFeedbackVote(vote);
    try {
      await fetch("/api/feedback", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          vote,
          userMessage: feedbackContext ?? "",
          botSnippet: message.content.slice(0, 300),
          hasSchemes: (message.schemeResults?.length ?? 0) > 0,
        }),
      });
    } catch {
      // fire-and-forget — failure is silent
    }
  }

  if (isUser) {
    if (editing) {
      return (
        <div className="flex animate-fade-in justify-end">
          <div className="w-full max-w-[85%] rounded-2xl rounded-tr-md border border-navy/20 bg-surface-card p-2.5 shadow-card">
            <label htmlFor={`edit-${message.id}`} className="sr-only">
              Edit your message
            </label>
            <textarea
              id={`edit-${message.id}`}
              ref={editRef}
              value={draft}
              rows={1}
              onChange={(e) => {
                setDraft(e.target.value);
                e.currentTarget.style.height = "auto";
                e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  submitEdit();
                } else if (e.key === "Escape") {
                  e.preventDefault();
                  cancelEdit();
                }
              }}
              className="block w-full resize-none bg-transparent px-1 text-sm leading-relaxed text-ink outline-none scrollbar-thin"
            />
            <div className="mt-1.5 flex items-center justify-end gap-1.5">
              <button
                type="button"
                onClick={cancelEdit}
                className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold text-ink-muted transition-colors hover:bg-surface-subtle"
              >
                <X size={13} aria-hidden="true" />
                Cancel
              </button>
              <button
                type="button"
                onClick={submitEdit}
                disabled={!draft.trim()}
                className="inline-flex items-center gap-1 rounded-full bg-navy px-2.5 py-1 text-xs font-semibold text-white transition-colors hover:bg-navy-light disabled:opacity-40"
              >
                <Check size={13} aria-hidden="true" />
                Send again
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="group flex animate-fade-in items-end justify-end gap-1.5">
        {onEdit && (
          <button
            type="button"
            onClick={() => {
              setDraft(message.content);
              setEditing(true);
            }}
            aria-label="Edit this message and ask again"
            title="Edit and ask again"
            className="mb-1 grid h-7 w-7 shrink-0 place-items-center rounded-full text-ink-faint opacity-0 transition-opacity hover:bg-surface-subtle hover:text-navy focus-visible:opacity-100 group-hover:opacity-100 touch:opacity-100"
          >
            <Pencil size={13} aria-hidden="true" />
          </button>
        )}
        <div className="max-w-[85%] rounded-2xl rounded-tr-md bg-navy px-4 py-2.5 text-sm leading-relaxed text-white shadow-card">
          <p className="whitespace-pre-wrap break-words">{message.content}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex animate-fade-in items-start gap-2.5">
      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-navy/10 bg-surface-card shadow-card">
        <LogoMark className="h-5 w-5" title="" />
      </span>
      <div className="min-w-0 flex-1 space-y-3">
        <div
          className={cn(
            "max-w-[92%] rounded-2xl rounded-tl-md border border-navy/10 bg-surface-card px-4 py-2.5 text-ink shadow-card",
            "md-content",
          )}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({ href, ...props }) => {
                const external = !!href && /^https?:\/\//.test(href);
                return (
                  <a
                    href={href}
                    {...props}
                    {...(external
                      ? { target: "_blank", rel: "nofollow noopener noreferrer" }
                      : {})}
                  />
                );
              },
            }}
          >
            {message.content}
          </ReactMarkdown>

          {/* Action bar: read-aloud + feedback */}
          {!streaming && (
            <div className="mt-2 flex items-center gap-1">
              {ttsSupported && (
                <button
                  type="button"
                  onClick={toggleSpeak}
                  aria-label={speaking ? "Stop reading aloud" : "Read message aloud"}
                  className={cn(
                    "grid h-7 w-7 place-items-center rounded-full text-ink-faint transition-colors hover:bg-surface-subtle hover:text-navy",
                    speaking && "text-saffron-deep",
                  )}
                >
                  {speaking ? <VolumeX size={14} aria-hidden="true" /> : <Volume2 size={14} aria-hidden="true" />}
                </button>
              )}

              {feedbackContext !== undefined && (
                <>
                  <button
                    type="button"
                    onClick={() => submitFeedback("up")}
                    disabled={!!feedbackVote}
                    aria-label="Helpful"
                    title="Helpful"
                    className={cn(
                      "grid h-7 w-7 place-items-center rounded-full text-ink-faint transition-colors hover:bg-surface-subtle hover:text-green-600",
                      feedbackVote === "up" && "text-green-600",
                    )}
                  >
                    <ThumbsUp size={13} aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => submitFeedback("down")}
                    disabled={!!feedbackVote}
                    aria-label="Not helpful"
                    title="Not helpful"
                    className={cn(
                      "grid h-7 w-7 place-items-center rounded-full text-ink-faint transition-colors hover:bg-surface-subtle hover:text-red-500",
                      feedbackVote === "down" && "text-red-500",
                    )}
                  >
                    <ThumbsDown size={13} aria-hidden="true" />
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {message.schemeResults && message.schemeResults.length > 0 && (
          <SchemeResultList schemes={message.schemeResults} />
        )}
      </div>
    </div>
  );
}

export function ScreenTyping() {
  return (
    <div className="flex animate-fade-in items-end gap-2.5" aria-hidden="true">
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-navy/10 bg-surface-card shadow-card">
        <LogoMark className="h-5 w-5" title="" />
      </span>
      <div className="rounded-2xl rounded-tl-md border border-navy/10 bg-surface-card px-4 py-3 shadow-card">
        <span className="flex items-center gap-1.5">
          {["0ms", "150ms", "300ms"].map((delay) => (
            <span
              key={delay}
              className="block h-2 w-2 rounded-full bg-navy/70 animate-typing-dot"
              style={{ animationDelay: delay }}
            />
          ))}
        </span>
      </div>
    </div>
  );
}
