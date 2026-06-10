"use client";

import {
  forwardRef,
  useLayoutEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import { ArrowUp, Info, Square, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  onSend: (text: string) => void;
  onStop: () => void;
  pending: boolean;
}

const MAX_HEIGHT_PX = 140;
const MAX_LEN = 1000;

/**
 * Bottom composer: auto-grow textarea + circular send/stop button, plus a
 * centered trust line with a "How this works" popover. Forwards a ref to the
 * textarea so the parent can implement the "/" focus shortcut.
 */
export const Composer = forwardRef<HTMLTextAreaElement, Props>(function Composer(
  { onSend, onStop, pending },
  ref,
) {
  const [value, setValue] = useState("");
  const [showHelp, setShowHelp] = useState(false);
  const innerRef = useRef<HTMLTextAreaElement | null>(null);

  const setRefs = (el: HTMLTextAreaElement | null) => {
    innerRef.current = el;
    if (typeof ref === "function") ref(el);
    else if (ref) ref.current = el;
  };

  useLayoutEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, MAX_HEIGHT_PX)}px`;
    el.style.overflowY = el.scrollHeight > MAX_HEIGHT_PX ? "auto" : "hidden";
  }, [value]);

  function submit(e?: FormEvent) {
    e?.preventDefault();
    const text = value.trim();
    if (!text || pending) return;
    onSend(text);
    setValue("");
  }

  function onKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  }

  const hasText = value.trim().length > 0;

  return (
    <div className="mx-auto w-full max-w-3xl">
      <form
        onSubmit={submit}
        className="flex items-end gap-2 rounded-2xl border border-navy/15 bg-surface-card px-3 py-2 shadow-card-lg transition-shadow focus-within:border-navy/30"
      >
        <label htmlFor="screen-composer" className="sr-only">
          Describe your situation
        </label>
        <textarea
          id="screen-composer"
          ref={setRefs}
          rows={1}
          value={value}
          maxLength={MAX_LEN}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Describe your situation…"
          aria-label="Message"
          className="block w-full resize-none border-0 bg-transparent px-2 py-1.5 text-sm leading-relaxed text-ink outline-none placeholder:text-ink-faint scrollbar-thin"
          style={{ maxHeight: MAX_HEIGHT_PX }}
        />

        {pending ? (
          <button
            type="button"
            onClick={onStop}
            aria-label="Stop"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-navy/15 text-ink-muted transition-transform active:scale-90"
          >
            <Square size={16} fill="currentColor" aria-hidden="true" />
          </button>
        ) : (
          <button
            type="submit"
            disabled={!hasText}
            aria-label="Send message"
            className={cn(
              "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy text-white transition-all active:scale-90 disabled:opacity-40",
              hasText &&
                "shadow-[0_0_0_3px_rgba(255,153,51,0.25),0_4px_14px_rgba(255,153,51,0.35)] hover:bg-navy-light",
            )}
          >
            <ArrowUp size={18} aria-hidden="true" />
          </button>
        )}
      </form>

      {/* Trust line + how-it-works popover */}
      <div className="relative mt-2 flex items-center justify-center gap-1.5 px-2">
        <p className="text-center text-[11px] leading-snug text-ink-faint">
          Sample guidance — always verify on the official portal. We never submit
          applications for you.
        </p>
        <button
          type="button"
          onClick={() => setShowHelp((v) => !v)}
          aria-label="How this works"
          aria-expanded={showHelp}
          className="grid h-5 w-5 shrink-0 place-items-center rounded-full text-ink-faint transition-colors hover:text-navy"
        >
          <Info size={14} aria-hidden="true" />
        </button>

        {showHelp && (
          <>
            <div
              className="fixed inset-0 z-30"
              onClick={() => setShowHelp(false)}
              aria-hidden="true"
            />
            <div className="absolute bottom-8 left-1/2 z-40 w-[min(92vw,22rem)] -translate-x-1/2 animate-fade-in rounded-2xl border border-navy/10 bg-surface-card p-4 text-left shadow-card-lg">
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-display text-sm font-bold text-navy-deep">
                  How this works
                </h2>
                <button
                  type="button"
                  onClick={() => setShowHelp(false)}
                  aria-label="Close"
                  className="text-ink-muted transition-colors hover:text-navy"
                >
                  <X size={16} aria-hidden="true" />
                </button>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                Describe your situation and GovEligify matches you to sample
                government schemes and certificates, with the documents you&apos;ll
                need and a link to the official portal. This is a sample
                experience — replies are illustrative, so always confirm details
                on the official site. We never submit applications for you.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
});
