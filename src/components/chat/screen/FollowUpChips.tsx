"use client";

import { Sparkles } from "lucide-react";
import type { QuickReply } from "@/lib/types";

interface Props {
  replies: QuickReply[];
  onPick: (text: string) => void;
}

/** Follow-up suggestion chips shown after the latest settled assistant turn. */
export function FollowUpChips({ replies, onPick }: Props) {
  if (replies.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2 pl-10">
      {replies.map((r) => (
        <button
          key={r.label}
          type="button"
          onClick={() => onPick(r.send)}
          className="touch:min-h-[44px] inline-flex items-center gap-1.5 rounded-full border border-navy/15 bg-surface-card px-3.5 py-1.5 text-xs font-medium text-ink-muted shadow-card transition-all hover:-translate-y-0.5 hover:border-navy/30 hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron"
        >
          <Sparkles size={13} aria-hidden="true" className="shrink-0 text-saffron-deep" />
          {r.label}
        </button>
      ))}
    </div>
  );
}
