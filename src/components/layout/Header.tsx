"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageSquareText } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/layout/Container";
import { buttonClasses } from "@/components/ui/Button";
import { PRIMARY_NAV } from "@/lib/site";
import { chatHref } from "@/lib/chat/openChat";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // A nav item is active on its exact route or any nested route under it.
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b border-surface-muted bg-surface-card/85 backdrop-blur shadow-header">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="GovEligify home" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {PRIMARY_NAV.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-navy"
                    : "text-ink-muted hover:bg-surface-subtle hover:text-navy",
                )}
              >
                {item.label}
                {active && (
                  <span
                    aria-hidden
                    className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-saffron"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={chatHref()}
            className={cn(
              buttonClasses({ variant: "saffron", size: "sm" }),
              "hidden sm:inline-flex",
            )}
          >
            <MessageSquareText className="h-4 w-4" aria-hidden />
            Check my eligibility
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-navy md:hidden touch:h-11 touch:w-11"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        className={cn(
          "border-t border-surface-muted bg-surface-card md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="flex flex-col gap-1 py-3">
          {PRIMARY_NAV.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2.5 text-base font-medium",
                  active
                    ? "bg-surface-subtle text-navy"
                    : "text-ink-muted hover:bg-surface-subtle hover:text-navy",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href={chatHref()}
            onClick={() => setOpen(false)}
            className={cn(buttonClasses({ variant: "saffron", size: "lg" }), "mt-1 w-full")}
          >
            <MessageSquareText className="h-5 w-5" aria-hidden />
            Check my eligibility
          </Link>
        </Container>
      </div>
    </header>
  );
}
