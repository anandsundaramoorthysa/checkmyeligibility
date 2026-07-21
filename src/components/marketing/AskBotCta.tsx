import { MessageSquare } from "lucide-react";
import { HeroCta } from "@/components/marketing/HeroCta";

/** Reusable "not sure? ask the bot" panel used across hub/detail pages. */
export function AskBotCta({
  title = "Not sure where you fit?",
  body = "Describe your situation and let the assistant point you to the scholarships and education schemes most likely to match.",
  label = "Ask the assistant",
  seed,
}: {
  title?: string;
  body?: string;
  label?: string;
  seed?: string;
}) {
  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-navy/10 bg-surface-card p-6 shadow-card sm:flex-row sm:items-center sm:justify-between sm:rounded-3xl sm:p-8">
      <div className="flex items-start gap-4">
        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-saffron/10 text-saffron-deep">
          <MessageSquare className="h-6 w-6" aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-display text-lg font-extrabold tracking-tight text-ink sm:text-xl">
            {title}
          </h3>
          <p className="mt-1.5 text-sm text-pretty text-ink-muted sm:text-base">{body}</p>
        </div>
      </div>
      <HeroCta label={label} seed={seed} size="md" className="w-full shrink-0 sm:w-auto" />
    </div>
  );
}
