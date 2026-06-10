"use client";

import Link from "next/link";
import { HelpCircle, RotateCcw } from "lucide-react";
import { LogoMark } from "@/components/brand/Logo";

interface Props {
  hasMessages: boolean;
  onReset: () => void;
}

/**
 * Slim sticky header for the full-screen assistant: back arrow, bot avatar +
 * title with an "online" dot, and (when a conversation exists) a New chat reset.
 */
export function ScreenHeader({ hasMessages, onReset }: Props) {
  return (
    <header className="flex h-14 flex-shrink-0 items-center gap-2.5 border-b border-navy/10 bg-surface-card/90 px-3 backdrop-blur sm:px-4">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-navy/15 bg-surface-card">
        <LogoMark className="h-6 w-6" title="" />
      </span>

      <div className="min-w-0 flex-1">
        <p className="flex items-center gap-1.5 text-sm font-semibold leading-tight text-ink">
          <span className="truncate">GovEligify Assistant</span>
          <span
            className="inline-block h-2 w-2 shrink-0 rounded-full bg-green ring-2 ring-green-soft"
            aria-label="Online"
            title="Online"
          />
        </p>
        <p className="truncate text-[11px] leading-tight text-ink-faint">
          Not affiliated with any government
        </p>
      </div>

      <div className="ml-auto flex shrink-0 items-center gap-1">
        {hasMessages && (
          <button
            type="button"
            onClick={onReset}
            aria-label="New chat"
            title="New chat"
            className="inline-flex h-9 items-center gap-1.5 rounded-full px-3 text-xs font-semibold text-ink-muted transition-colors hover:bg-surface-subtle hover:text-navy"
          >
            <RotateCcw size={15} aria-hidden="true" />
            <span className="hidden sm:inline">New chat</span>
          </button>
        )}
        <Link
          href="/how-it-works"
          aria-label="How it works"
          title="How it works"
          className="grid h-9 w-9 place-items-center rounded-full text-ink-muted transition-colors hover:bg-surface-subtle hover:text-navy"
        >
          <HelpCircle size={18} aria-hidden="true" />
        </Link>
      </div>
    </header>
  );
}
