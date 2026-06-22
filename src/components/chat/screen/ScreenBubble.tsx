"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Message } from "@/lib/types";
import { LogoMark } from "@/components/brand/Logo";
import { SchemeResultCard } from "@/components/chat/SchemeResultCard";

/** Strips common markdown syntax so read-aloud doesn't speak raw symbols. */
function stripMarkdown(text: string): string {
  return text
    .replace(/`{1,3}[^`]*`{1,3}/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[*_#>~-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * One conversation turn in the full-screen layout. User bubbles sit right
 * (navy), assistant bubbles left (surface-card) with a LogoMark avatar; scheme
 * result cards render beneath the assistant text. Assistant turns also get a
 * read-aloud button backed by the browser's speech-synthesis API.
 */
export function ScreenBubble({ message }: { message: Message }) {
  const isUser = message.role === "user";
  const [speaking, setSpeaking] = useState(false);
  const [ttsSupported, setTtsSupported] = useState(false);

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

  if (isUser) {
    return (
      <div className="flex animate-fade-in justify-end">
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

          {ttsSupported && (
            <button
              type="button"
              onClick={toggleSpeak}
              aria-label={speaking ? "Stop reading aloud" : "Read message aloud"}
              title={speaking ? "Stop reading aloud" : "Read message aloud"}
              className={cn(
                "mt-2 grid h-7 w-7 place-items-center rounded-full text-ink-faint transition-colors hover:bg-surface-subtle hover:text-navy",
                speaking && "text-saffron-deep",
              )}
            >
              {speaking ? (
                <VolumeX size={14} aria-hidden="true" />
              ) : (
                <Volume2 size={14} aria-hidden="true" />
              )}
            </button>
          )}
        </div>

        {message.schemeResults && message.schemeResults.length > 0 && (
          <div className="grid gap-3 sm:grid-cols-2">
            {message.schemeResults.map((scheme) => (
              <SchemeResultCard key={scheme.id} scheme={scheme} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/** Assistant "thinking" indicator: avatar + three staggered dots. */
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
