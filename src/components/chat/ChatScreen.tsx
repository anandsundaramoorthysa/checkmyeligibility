"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type UIEvent,
} from "react";
import { v4 as uuidv4 } from "uuid";
import { ChevronDown } from "lucide-react";
import type { BotTurn, Message, QuickReply } from "@/lib/types";
import { mockEngine } from "@/lib/chat/mockEngine";
import { sendToBot } from "@/lib/chat/client";
import {
  DEFAULT_FONT_STEP_INDEX,
  FONT_SCALE_STEPS,
  getStoredFontStepIndex,
  getStoredSoundOn,
  storeFontStepIndex,
  storeSoundOn,
} from "@/lib/chat/preferences";
import { playChime } from "@/lib/chat/sound";
import { downloadTranscript } from "@/lib/chat/transcript";
import { ScreenHeader } from "./screen/ScreenHeader";
import { WelcomeState } from "./screen/WelcomeState";
import { ScreenBubble, ScreenTyping } from "./screen/ScreenBubble";
import { FollowUpChips } from "./screen/FollowUpChips";
import { Composer } from "./screen/Composer";

const TYPING_MS = 650;
const STORAGE_KEY = "goveligify-chat";
const MAX_PERSISTED = 20;

interface Props {
  /** Optional seed query (from /chat?q=…) auto-sent once on mount. */
  initialQuery: string;
}

/** Build the assistant Message(s) for one BotTurn (mirrors ChatPanel). */
function turnToMessages(turn: BotTurn): {
  messages: Message[];
  quickReplies: QuickReply[];
} {
  const messages = turn.messages.map((m, i) => ({
    id: uuidv4(),
    role: "assistant" as const,
    content: m.content,
    createdAt: Date.now() + i,
    schemeResults: i === turn.messages.length - 1 ? turn.schemeResults : undefined,
  }));
  return { messages, quickReplies: turn.quickReplies ?? [] };
}

/**
 * The full-screen GovEligify assistant: ambient background, slim header, a
 * scrollable centered conversation (welcome overlay when empty), follow-up
 * chips, a fixed bottom composer, and a scroll-to-bottom pill.
 */
export function ChatScreen({ initialQuery }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [quickReplies, setQuickReplies] = useState<QuickReply[]>([]);
  const [typing, setTyping] = useState(false);
  const [showJump, setShowJump] = useState(false);
  const [fontStepIndex, setFontStepIndex] = useState(DEFAULT_FONT_STEP_INDEX);
  const [soundOn, setSoundOn] = useState(false);

  const messagesRef = useRef<Message[]>(messages);
  messagesRef.current = messages;
  const scrollRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const composerRef = useRef<HTMLTextAreaElement>(null);
  const atBottomRef = useRef(true);
  const typingRef = useRef(false);
  typingRef.current = typing;
  const soundOnRef = useRef(soundOn);
  soundOnRef.current = soundOn;
  const sendRef = useRef<(t: string) => void>(() => {});
  const seededRef = useRef(false);
  const restoredRef = useRef(false);
  const prefsRestoredRef = useRef(false);
  const cancelledRef = useRef<{ cancelled: boolean } | null>(null);

  const hasMessages = messages.length > 0;

  // Restore a persisted transcript on mount (settled snapshot only).
  useEffect(() => {
    if (restoredRef.current) return;
    restoredRef.current = true;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as Message[];
        if (Array.isArray(saved) && saved.length) setMessages(saved);
      }
    } catch {
      /* ignore corrupt storage */
    }
  }, []);

  // Restore text size / sound / theme preferences on mount.
  useEffect(() => {
    if (prefsRestoredRef.current) return;
    prefsRestoredRef.current = true;
    setFontStepIndex(getStoredFontStepIndex());
    setSoundOn(getStoredSoundOn());
  }, []);

  // Apply the text-size preference to the page while the assistant is open;
  // restore the default size when leaving so other routes are unaffected.
  useEffect(() => {
    document.documentElement.style.fontSize = `${FONT_SCALE_STEPS[fontStepIndex]}%`;
    return () => {
      document.documentElement.style.fontSize = "";
    };
  }, [fontStepIndex]);

  // Persist the transcript (only when settled, capped).
  useEffect(() => {
    if (typing) return;
    try {
      if (messages.length) {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(messages.slice(-MAX_PERSISTED)),
        );
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      /* ignore quota / disabled storage */
    }
  }, [messages, typing]);

  // Auto-scroll to the latest message unless the user has scrolled up.
  useEffect(() => {
    if (atBottomRef.current) {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, typing]);

  const send = useCallback(async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || typingRef.current) return;

    const token = { cancelled: false };
    cancelledRef.current = token;

    const userMsg: Message = {
      id: uuidv4(),
      role: "user",
      content: trimmed,
      createdAt: Date.now(),
    };
    const history = messagesRef.current;
    // Seed the greeting as the first assistant turn before the first answer.
    const greeting =
      history.length === 0
        ? turnToMessages(mockEngine.greeting()).messages
        : [];
    atBottomRef.current = true;
    setMessages([...history, ...greeting, userMsg]);
    setQuickReplies([]);
    setTyping(true);

    const turn = await new Promise<BotTurn>((resolve) => {
      setTimeout(async () => resolve(await sendToBot(trimmed, history)), TYPING_MS);
    });
    if (token.cancelled) return;

    const { messages: botMsgs, quickReplies: qr } = turnToMessages(turn);
    setTyping(false);
    setMessages([...messagesRef.current, ...botMsgs]);
    setQuickReplies(qr);
    if (soundOnRef.current) playChime();
  }, []);

  sendRef.current = send;

  const stop = useCallback(() => {
    if (cancelledRef.current) cancelledRef.current.cancelled = true;
    setTyping(false);
  }, []);

  const reset = useCallback(() => {
    stop();
    setMessages([]);
    setQuickReplies([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }, [stop]);

  const increaseFont = useCallback(() => {
    setFontStepIndex((i) => {
      const next = Math.min(i + 1, FONT_SCALE_STEPS.length - 1);
      storeFontStepIndex(next);
      return next;
    });
  }, []);

  const decreaseFont = useCallback(() => {
    setFontStepIndex((i) => {
      const next = Math.max(i - 1, 0);
      storeFontStepIndex(next);
      return next;
    });
  }, []);

  const toggleSound = useCallback(() => {
    setSoundOn((v) => {
      const next = !v;
      storeSoundOn(next);
      return next;
    });
  }, []);

  const handleDownload = useCallback(() => {
    downloadTranscript(messagesRef.current);
  }, []);

  // ?q= deep-link: auto-send once on mount, then leave the URL clean.
  // Guarded by seededRef so it fires exactly once (incl. under dev StrictMode's
  // double-invoked effects); calling send directly avoids a timeout/cleanup race.
  useEffect(() => {
    if (seededRef.current) return;
    const q = initialQuery.trim();
    if (!q) return;
    seededRef.current = true;
    try {
      window.history.replaceState({}, "", window.location.pathname);
    } catch {
      /* ignore */
    }
    sendRef.current(q.slice(0, 1000));
  }, [initialQuery]);

  // Keyboard: "/" focuses the composer, "Esc" stops a pending turn.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = document.activeElement;
      const isTyping =
        el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement;
      if (e.key === "/" && !isTyping) {
        e.preventDefault();
        composerRef.current?.focus();
      } else if (e.key === "Escape") {
        stop();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [stop]);

  function onScroll(e: UIEvent<HTMLDivElement>) {
    const el = e.currentTarget;
    const dist = el.scrollHeight - el.scrollTop - el.clientHeight;
    atBottomRef.current = dist < 80;
    setShowJump(dist > 260);
  }

  function jumpDown() {
    atBottomRef.current = true;
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  // Follow-ups: latest settled assistant turn's chips, minus already-asked.
  const last = messages[messages.length - 1];
  const asked = new Set(
    messages
      .filter((m) => m.role === "user")
      .map((m) => m.content.trim().toLowerCase()),
  );
  const activeFollowUps =
    !typing && last && last.role === "assistant"
      ? quickReplies.filter((r) => !asked.has(r.send.trim().toLowerCase()))
      : [];

  return (
    <div
      className="relative flex h-full flex-col overflow-hidden bg-surface"
    >
      {/* Ambient tricolor background */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-saffron/15 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-green/10 blur-3xl" />
      </div>

      <div className="relative z-10 flex h-full flex-col">
        <ScreenHeader
          hasMessages={hasMessages}
          onReset={reset}
          onDownload={handleDownload}
          fontStepIndex={fontStepIndex}
          maxFontStepIndex={FONT_SCALE_STEPS.length - 1}
          onIncreaseFont={increaseFont}
          onDecreaseFont={decreaseFont}
          soundOn={soundOn}
          onToggleSound={toggleSound}
        />

        <div
          ref={scrollRef}
          onScroll={onScroll}
          className="scrollbar-thin flex-1 overflow-y-auto"
        >
          {!hasMessages ? (
            <WelcomeState onPick={send} />
          ) : (
            <div
              role="log"
              aria-live="polite"
              className="mx-auto max-w-3xl space-y-5 px-4 py-6"
            >
              {messages.map((m) => (
                <ScreenBubble key={m.id} message={m} />
              ))}
              {typing && <ScreenTyping />}
              {activeFollowUps.length > 0 && (
                <FollowUpChips replies={activeFollowUps} onPick={send} />
              )}
              <div ref={endRef} />
            </div>
          )}
        </div>

        {/* Scroll-to-bottom pill */}
        {showJump && (
          <button
            type="button"
            onClick={jumpDown}
            aria-label="Scroll to latest"
            className="absolute bottom-32 left-1/2 z-20 grid h-10 w-10 -translate-x-1/2 animate-fade-in place-items-center rounded-full border border-navy/10 bg-surface-card text-navy shadow-card-lg transition-colors hover:bg-surface-subtle"
          >
            <ChevronDown size={20} aria-hidden="true" />
          </button>
        )}

        <div className="flex-shrink-0 px-3 pb-4 pt-2 sm:px-4">
          <Composer
            ref={composerRef}
            onSend={send}
            onStop={stop}
            pending={typing}
          />
        </div>
      </div>
    </div>
  );
}
