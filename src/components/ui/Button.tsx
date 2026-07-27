import { cn } from "@/lib/utils";

type Variant = "primary" | "saffron" | "outline" | "ghost" | "white";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60 touch:min-h-[44px]";

const variants: Record<Variant, string> = {
  // navy = primary action (AA-safe on white)
  primary: "bg-navy text-white hover:bg-navy-light",
  // saffron accent CTA. White on flag saffron measures 2.13:1, so the primary
  // "Check my eligibility" button failed AA. Navy on saffron is 7.5:1 and is
  // already the pairing used elsewhere in the design (about page, testimonials),
  // so the flag colour is kept and only the text darkens.
  saffron:
    "bg-saffron text-navy-deep hover:bg-saffron-hover hover:shadow-sm active:scale-[0.97] active:bg-saffron-hover",
  outline: "border border-navy/25 text-navy hover:bg-surface-subtle",
  ghost: "text-navy hover:bg-surface-subtle",
  white: "bg-white text-navy-deep hover:bg-gray-50 hover:shadow-md active:bg-gray-100",
};

const sizes: Record<Size, string> = {
  sm: "px-3.5 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

/** Shared button classes — apply to <button>, <a>, or next/link <Link>. */
export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
} = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

export function Button({
  variant,
  size,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
}) {
  return <button className={buttonClasses({ variant, size, className })} {...props} />;
}
