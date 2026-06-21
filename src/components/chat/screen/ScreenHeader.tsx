"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Download,
  HelpCircle,
  Keyboard,
  Moon,
  Plus,
  Sun,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import { LogoMark } from "@/components/brand/Logo";
import { cn } from "@/lib/utils";

interface Props {
  hasMessages: boolean;
  onReset: () => void;
  onDownload: () => void;
  fontStepIndex: number;
  maxFontStepIndex: number;
  onIncreaseFont: () => void;
  onDecreaseFont: () => void;
  soundOn: boolean;
  onToggleSound: () => void;
  dark: boolean;
  onToggleDark: () => void;
}

const iconButton =
  "grid h-9 w-9 shrink-0 place-items-center rounded-full text-ink-muted transition-colors hover:bg-surface-subtle hover:text-navy disabled:opacity-30 disabled:hover:bg-transparent dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white";

const SHORTCUTS: { keys: string; label: string }[] = [
  { keys: "/", label: "Focus the message box" },
  { keys: "Enter", label: "Send your message" },
  { keys: "Shift + Enter", label: "Add a new line" },
  { keys: "Esc", label: "Stop the current response" },
];

/**
 * Slim sticky header for the full-screen assistant: back arrow, bot avatar +
 * title with an "online" dot, and a Botinigo-style action toolbar — text
 * size, new chat, download transcript, keyboard shortcuts, sound, dark mode,
 * and help.
 */
export function ScreenHeader({
  hasMessages,
  onReset,
  onDownload,
  fontStepIndex,
  maxFontStepIndex,
  onIncreaseFont,
  onDecreaseFont,
  soundOn,
  onToggleSound,
  dark,
  onToggleDark,
}: Props) {
  const [shortcutsOpen, setShortcutsOpen] = useState(false);

  return (
    <header className="flex h-14 flex-shrink-0 items-center gap-2.5 border-b border-navy/10 bg-surface-card/90 px-3 backdrop-blur sm:px-4 dark:border-white/10 dark:bg-navy-dark/90">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-navy/15 bg-surface-card dark:border-white/15 dark:bg-navy-dark">
        <LogoMark className="h-6 w-6" title="" />
      </span>

      <div className="min-w-0 flex-1">
        <p className="flex items-center gap-1.5 text-sm font-semibold leading-tight text-ink dark:text-white">
          <span className="truncate">GovEligify Assistant</span>
          <span
            className="inline-block h-2 w-2 shrink-0 rounded-full bg-green ring-2 ring-green-soft"
            aria-label="Online"
            title="Online"
          />
        </p>
        <p className="truncate text-[11px] leading-tight text-ink-faint dark:text-white/50">
          Not affiliated with any government
        </p>
      </div>

      <div className="ml-auto flex shrink-0 items-center gap-0.5">
        {/* Text size — hidden on the smallest screens to keep the title readable */}
        <div className="hidden items-center gap-0.5 xs:flex">
          <button
            type="button"
            onClick={onDecreaseFont}
            disabled={fontStepIndex === 0}
            aria-label="Decrease text size"
            title="Decrease text size"
            className={iconButton}
          >
            <span aria-hidden="true" className="text-[11px] font-bold leading-none">
              A<span className="align-super text-[8px]">−</span>
            </span>
          </button>
          <button
            type="button"
            onClick={onIncreaseFont}
            disabled={fontStepIndex === maxFontStepIndex}
            aria-label="Increase text size"
            title="Increase text size"
            className={iconButton}
          >
            <span aria-hidden="true" className="text-sm font-bold leading-none">
              A<span className="align-super text-[9px]">+</span>
            </span>
          </button>
          <span
            aria-hidden="true"
            className="mx-0.5 h-5 w-px bg-navy/15 dark:bg-white/15"
          />
        </div>

        <button
          type="button"
          onClick={onReset}
          aria-label="New chat"
          title="New chat"
          className={iconButton}
        >
          <Plus size={18} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={onDownload}
          disabled={!hasMessages}
          aria-label="Download transcript"
          title="Download transcript"
          className={cn(iconButton, "hidden xs:grid")}
        >
          <Download size={17} aria-hidden="true" />
        </button>

        <div className="relative">
          <button
            type="button"
            onClick={() => setShortcutsOpen((v) => !v)}
            aria-label="Keyboard shortcuts"
            title="Keyboard shortcuts"
            aria-haspopup="menu"
            aria-expanded={shortcutsOpen}
            className={cn(iconButton, "hidden xs:grid")}
          >
            <Keyboard size={17} aria-hidden="true" />
          </button>

          {shortcutsOpen && (
            <>
              <div
                className="fixed inset-0 z-30"
                onClick={() => setShortcutsOpen(false)}
                aria-hidden="true"
              />
              <div className="absolute right-0 top-11 z-40 w-64 animate-fade-in rounded-2xl border border-navy/10 bg-surface-card p-3 text-left shadow-card-lg dark:border-white/10 dark:bg-navy-dark">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="font-display text-sm font-bold text-navy-deep dark:text-white">
                    Keyboard shortcuts
                  </h2>
                  <button
                    type="button"
                    onClick={() => setShortcutsOpen(false)}
                    aria-label="Close"
                    className="text-ink-muted transition-colors hover:text-navy dark:text-white/60 dark:hover:text-white"
                  >
                    <X size={16} aria-hidden="true" />
                  </button>
                </div>
                <ul className="mt-2 space-y-1.5">
                  {SHORTCUTS.map((s) => (
                    <li
                      key={s.keys}
                      className="flex items-center justify-between gap-3 text-xs text-ink-muted dark:text-white/70"
                    >
                      <span>{s.label}</span>
                      <kbd className="rounded-md border border-navy/15 bg-surface-subtle px-1.5 py-0.5 font-mono text-[11px] text-navy dark:border-white/15 dark:bg-white/10 dark:text-white">
                        {s.keys}
                      </kbd>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>

        <button
          type="button"
          onClick={onToggleSound}
          aria-label={soundOn ? "Mute notification sound" : "Unmute notification sound"}
          title={soundOn ? "Mute notification sound" : "Unmute notification sound"}
          className={cn(iconButton, "hidden xs:grid")}
        >
          {soundOn ? (
            <Volume2 size={17} aria-hidden="true" />
          ) : (
            <VolumeX size={17} aria-hidden="true" />
          )}
        </button>

        <button
          type="button"
          onClick={onToggleDark}
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          title={dark ? "Switch to light mode" : "Switch to dark mode"}
          className={iconButton}
        >
          {dark ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
        </button>

        <Link
          href="/how-it-works"
          aria-label="How it works"
          title="How it works"
          className={iconButton}
        >
          <HelpCircle size={18} aria-hidden="true" />
        </Link>
      </div>
    </header>
  );
}
