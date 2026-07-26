"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type UIEvent,
} from "react";
import { v4 as uuidv4 } from "uuid";
import { ChevronDown } from "lucide-react";
import type { BotTurn, LangCode, Message, QuickReply, Scheme } from "@/lib/types";
import { sendToBot } from "@/lib/chat/client";
import {
  DEFAULT_FONT_STEP_INDEX,
  FONT_SCALE_STEPS,
  getStoredFontStepIndex,
  getStoredLang,
  getStoredSoundOn,
  storeFontStepIndex,
  storeLang,
  storeSoundOn,
} from "@/lib/chat/preferences";
import { playChime } from "@/lib/chat/sound";
import { downloadTranscript } from "@/lib/chat/transcript";
import { ScreenHeader } from "./screen/ScreenHeader";
import { WelcomeState } from "./screen/WelcomeState";
import { ScreenBubble, ScreenTyping } from "./screen/ScreenBubble";
import { FollowUpChips } from "./screen/FollowUpChips";
import { Composer } from "./screen/Composer";

const STORAGE_KEY = "CheckMyEligibility-chat";
const MAX_PERSISTED = 20;

interface Props {
  initialQuery: string;
}

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

export function ChatScreen({ initialQuery }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [quickReplies, setQuickReplies] = useState<QuickReply[]>([]);
  const [typing, setTyping] = useState(false);
  const [streamingMsgId, setStreamingMsgId] = useState<string | null>(null);
  const [showJump, setShowJump] = useState(false);
  const [fontStepIndex, setFontStepIndex] = useState(DEFAULT_FONT_STEP_INDEX);
  const [soundOn, setSoundOn] = useState(false);
  const [lang, setLang] = useState<LangCode>("en");

  const messagesRef = useRef<Message[]>(messages);
  messagesRef.current = messages;
  const scrollRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const composerRef = useRef<HTMLTextAreaElement>(null);
  const atBottomRef = useRef(true);
  const typingRef = useRef(false);
  typingRef.current = typing || streamingMsgId !== null;
  const soundOnRef = useRef(soundOn);
  soundOnRef.current = soundOn;
  const langRef = useRef(lang);
  langRef.current = lang;
  const sendRef = useRef<(t: string) => void>(() => {});
  const cancelledRef = useRef<{ cancelled: boolean } | null>(null);
  const prefsRestoredRef = useRef(false);

  const hasMessages = messages.length > 0;

  // Restore transcript + fire ?q= seed in one effect so seed always has history.
  // A9 fix: seed fires AFTER transcript is restored (same effect, sequential).
  useEffect(() => {
    // Restore transcript
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as Message[];
        if (Array.isArray(saved) && saved.length) setMessages(saved);
      }
    } catch {
      /* ignore corrupt storage */
    }

    // Auto-send ?q= after restoration is scheduled (defer by one task)
    const q = initialQuery.trim();
    if (q) {
      try { window.history.replaceState({}, "", window.location.pathname); } catch { /* ignore */ }
      setTimeout(() => sendRef.current(q.slice(0, 1000)), 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Restore preferences on mount
  useEffect(() => {
    if (prefsRestoredRef.current) return;
    prefsRestoredRef.current = true;
    setFontStepIndex(getStoredFontStepIndex());
    setSoundOn(getStoredSoundOn());
    setLang(getStoredLang());
  }, []);

  useEffect(() => {
    document.documentElement.style.fontSize = `${FONT_SCALE_STEPS[fontStepIndex]}%`;
    return () => { document.documentElement.style.fontSize = ""; };
  }, [fontStepIndex]);

  // Persist transcript when not streaming
  useEffect(() => {
    if (typing || streamingMsgId) return;
    try {
      if (messages.length) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-MAX_PERSISTED)));
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      /* ignore quota */
    }
  }, [messages, typing, streamingMsgId]);

  // Auto-scroll
  useEffect(() => {
    if (atBottomRef.current) {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, typing, streamingMsgId]);

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
    atBottomRef.current = true;
    setMessages([...history, userMsg]);
    setQuickReplies([]);
    setTyping(true);

    const botMsgId = uuidv4();
    let metaFired = false;

    const onMeta = (schemes: Scheme[] | undefined, qr: QuickReply[]) => {
      if (token.cancelled) return;
      metaFired = true;
      setTyping(false);
      setStreamingMsgId(botMsgId);
      setQuickReplies(qr);
      setMessages((prev) => [
        ...prev,
        {
          id: botMsgId,
          role: "assistant" as const,
          content: "",
          createdAt: Date.now(),
          schemeResults: schemes,
        },
      ]);
    };

    const onToken = (t: string) => {
      if (token.cancelled) return;
      setMessages((prev) =>
        prev.map((m) => m.id === botMsgId ? { ...m, content: m.content + t } : m),
      );
    };

    const turn = await sendToBot(trimmed, history, langRef.current, onToken, onMeta);
    if (token.cancelled) return;

    setStreamingMsgId(null);

    if (!metaFired) {
      // Error/fallback path — meta never arrived, add complete message now
      setTyping(false);
      const { messages: botMsgs, quickReplies: qr } = turnToMessages(turn);
      setMessages((prev) => [...prev, ...botMsgs]);
      setQuickReplies(qr);
    } else {
      // Finalize: update content + schemeResults from the resolved turn
      setMessages((prev) =>
        prev.map((m) =>
          m.id === botMsgId
            ? { ...m, content: turn.messages[0]?.content ?? m.content, schemeResults: turn.schemeResults ?? m.schemeResults }
            : m,
        ),
      );
    }

    if (soundOnRef.current) playChime();
  }, []);

  sendRef.current = send;

  const stop = useCallback(() => {
    if (cancelledRef.current) cancelledRef.current.cancelled = true;
    setTyping(false);
    setStreamingMsgId(null);
  }, []);

  const reset = useCallback(() => {
    stop();
    setMessages([]);
    setQuickReplies([]);
    try { localStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }
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

  const onLangChange = useCallback((next: LangCode) => {
    setLang(next);
    storeLang(next);
  }, []);

  const jumpToMessage = useCallback((id: string) => {
    atBottomRef.current = false;
    document.getElementById(`msg-${id}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  // Build feedbackContext map: for each assistant message, store the preceding user message
  const feedbackContextMap = useMemo(() => {
    const map = new Map<string, string>();
    let lastUser = "";
    for (const m of messages) {
      if (m.role === "user") lastUser = m.content;
      else if (m.role === "assistant") map.set(m.id, lastUser);
    }
    return map;
  }, [messages]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = document.activeElement;
      const isTyping = el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement;
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

  const last = messages[messages.length - 1];
  const asked = new Set(
    messages.filter((m) => m.role === "user").map((m) => m.content.trim().toLowerCase()),
  );
  const activeFollowUps =
    !typing && !streamingMsgId && last && last.role === "assistant"
      ? quickReplies.filter((r) => !asked.has(r.send.trim().toLowerCase()))
      : [];

  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-surface">
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
          messages={messages}
          onJumpToMessage={jumpToMessage}
        />

        <div
          ref={scrollRef}
          onScroll={onScroll}
          className="scrollbar-thin flex-1 overflow-y-auto"
        >
          {!hasMessages ? (
            <WelcomeState onPick={send} lang={lang} />
          ) : (
            <div
              role="log"
              aria-live="polite"
              className="mx-auto max-w-3xl space-y-5 px-4 py-6"
            >
              {messages.map((m) => (
                <div key={m.id} id={`msg-${m.id}`}>
                  <ScreenBubble
                    message={m}
                    feedbackContext={m.role === "assistant" ? feedbackContextMap.get(m.id) : undefined}
                    streaming={m.id === streamingMsgId}
                  />
                </div>
              ))}
              {typing && <ScreenTyping />}
              {activeFollowUps.length > 0 && (
                <FollowUpChips replies={activeFollowUps} onPick={send} />
              )}
              <div ref={endRef} />
            </div>
          )}
        </div>

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
            pending={typing || streamingMsgId !== null}
            lang={lang}
            onLangChange={onLangChange}
          />
        </div>
      </div>
    </div>
  );
}
