import { cn } from "@/lib/utils";

/** Eyebrow + title + optional lead, used to head marketing sections. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <p className="font-mono text-xs font-medium uppercase tracking-widest text-saffron-deep">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {lead && <p className="mt-4 text-pretty text-lg text-ink-muted">{lead}</p>}
    </div>
  );
}
