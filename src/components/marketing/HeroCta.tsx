import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonClasses } from "@/components/ui/Button";
import { chatHref } from "@/lib/chat/openChat";

/** CTA that navigates to the standalone /chat page, optionally seeded. */
export function HeroCta({
  label = "Check my eligibility",
  seed,
  variant = "primary",
  size = "lg",
  className,
}: {
  label?: string;
  seed?: string;
  variant?: "primary" | "saffron" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  return (
    <Link
      href={chatHref(seed)}
      className={buttonClasses({ variant, size, className })}
    >
      {label}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}
