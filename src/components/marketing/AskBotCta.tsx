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
    <div className="flex flex-col items-start gap-5 rounded-3xl border border-navy/10 bg-saffron-soft/50 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
      <div className="flex items-start gap-4">
        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-saffron text-navy-deep">
          <MessageSquare className="h-6 w-6" aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-display text-xl font-extrabold tracking-tight text-ink">
            {title}
          </h3>
          <p className="mt-1.5 text-pretty text-ink-muted">{body}</p>
        </div>
      </div>
      <HeroCta label={label} seed={seed} size="md" className="shrink-0" />
    </div>
  );
}
