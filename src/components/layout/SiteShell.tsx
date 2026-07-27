"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

/**
 * Renders the marketing chrome (Header + Footer) for normal routes, but renders
 * children full-bleed on /chat so the assistant can be a 100dvh immersive page.
 * /chat brings its own slim header (ScreenHeader) instead of the site Header —
 * stacking both wasted a full row of vertical space for a page that already
 * has its own logo/back-link, so /chat gets no site chrome at all here.
 */
export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const fullScreen = pathname === "/chat" || pathname.startsWith("/chat/");

  if (fullScreen) {
    return (
      <div className="flex h-[100dvh] flex-col">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <main id="main" className="min-h-0 flex-1">
          {children}
        </main>
      </div>
    );
  }

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
