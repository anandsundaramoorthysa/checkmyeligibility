"use client";

import {
  ArrowUpRight,
  FileBadge,
  GraduationCap,
  Sprout,
  Store,
  Users,
  type LucideIcon,
} from "lucide-react";
import { LogoMark } from "@/components/brand/Logo";
import { cn } from "@/lib/utils";
import type { LangCode } from "@/lib/types";
import { STRINGS } from "@/lib/chat/translations";

interface PersonaChip {
  icon: LucideIcon;
  key: keyof typeof STRINGS.en.personas;
  /** Plain-language text seeded into the chat — kept in English so the
   * keyword-matching mock engine still recognises it regardless of UI
   * language. */
  send: string;
}

/** Persona entry points — mirror the mock engine's starter quick replies. */
const PERSONAS: PersonaChip[] = [
  { icon: Sprout, key: "farmer", send: "I'm a farmer looking for schemes" },
  { icon: GraduationCap, key: "student", send: "I'm a student looking for a scholarship" },
  { icon: Users, key: "senior", send: "I'm a senior citizen looking for a pension" },
  { icon: Store, key: "business", send: "I run a small business and need a loan" },
  { icon: FileBadge, key: "certificate", send: "I need help getting a certificate" },
];

/** English queries dispatched to the mock engine, in the same order as the
 * translated `examples` strings shown to the user. */
const EXAMPLE_SENDS = [
  "What schemes help small farmers?",
  "Scholarships for college students",
  "Pension for senior citizens",
];

interface Props {
  onPick: (text: string) => void;
  lang: LangCode;
}

/**
 * Empty-state hero: a haloed, floating bot mark, the page <h1>, a subtitle, a
 * wrap of persona + example starter chips, and a small trust row.
 */
export function WelcomeState({ onPick, lang }: Props) {
  const t = STRINGS[lang];

  return (
    <div className="mx-auto flex min-h-full max-w-2xl flex-col items-center justify-center px-4 py-10 text-center">
      {/* Haloed, floating bot mark */}
      <div className="relative grid h-24 w-24 place-items-center motion-safe:animate-welcome-rise">
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-saffron/40 motion-safe:animate-pulse-ring"
        />
        <span className="relative grid h-20 w-20 place-items-center rounded-full border border-navy/10 bg-surface-card shadow-card-lg motion-safe:animate-[float_5s_ease-in-out_infinite] dark:border-white/10 dark:bg-navy-dark">
          <LogoMark className="h-12 w-12" title="" />
        </span>
      </div>

      <h1 className="mt-6 text-balance font-display text-3xl font-extrabold tracking-tight text-navy-deep motion-safe:animate-welcome-rise sm:text-4xl dark:text-white">
        {t.welcomeTitle}
      </h1>

      <p className="mt-3 max-w-md text-pretty text-base leading-relaxed text-ink-muted motion-safe:animate-fade-in dark:text-white/70">
        {t.welcomeSubtitle}
      </p>

      {/* Persona chips */}
      <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
        {PERSONAS.map(({ icon: Icon, key, send }) => (
          <button
            key={key}
            type="button"
            onClick={() => onPick(send)}
            className="touch:min-h-[44px] inline-flex items-center gap-2 rounded-full border border-navy/15 bg-surface-card px-4 py-2 text-sm font-semibold text-navy shadow-card transition-all hover:-translate-y-0.5 hover:border-navy/30 hover:shadow-card-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron dark:border-white/15 dark:bg-navy-dark dark:text-white dark:hover:border-white/30"
          >
            <Icon size={16} aria-hidden="true" className="shrink-0 text-saffron-deep" />
            {t.personas[key]}
          </button>
        ))}
      </div>

      {/* Example questions */}
      <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
        {t.examples.map((q, i) => (
          <button
            key={q}
            type="button"
            onClick={() => onPick(EXAMPLE_SENDS[i])}
            className={cn(
              "touch:min-h-[44px] group inline-flex items-center gap-1.5 rounded-full border border-dashed border-navy/20 px-3.5 py-1.5 text-sm text-ink-muted transition-all",
              "hover:-translate-y-0.5 hover:border-navy/35 hover:bg-surface-subtle hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron",
              "dark:border-white/20 dark:text-white/70 dark:hover:border-white/35 dark:hover:bg-white/5 dark:hover:text-white",
            )}
          >
            <span>{q}</span>
            <ArrowUpRight
              size={14}
              aria-hidden="true"
              className="shrink-0 text-ink-faint transition-colors group-hover:text-saffron-deep dark:text-white/40"
            />
          </button>
        ))}
      </div>

      <p className="mt-8 text-xs font-medium text-ink-faint dark:text-white/40">{t.freeNote}</p>
      <p className="mt-2 max-w-md text-xs text-ink-faint/80 dark:text-white/30">
        {t.previewNote}
      </p>
    </div>
  );
}
