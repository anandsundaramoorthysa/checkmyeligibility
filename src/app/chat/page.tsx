import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ChatScreen } from "@/components/chat/ChatScreen";

export const metadata: Metadata = buildMetadata({
  title: "Ask CheckMyEligibility",
  description:
    "Find scholarships and education loans you qualify for. Describe your situation to our free AI assistant and get matched to official Indian government portals.",
  path: "/chat",
});

/**
 * Statically prerendered. Reading `?q=` through searchParams forced a server
 * render on every visit, and under concurrency /chat measured roughly four
 * times slower than the static pages for no benefit: the seed query is only
 * ever consumed by a client component, which can read it from the URL itself.
 */
export default function ChatPage() {
  return (
    <>
      {/* Static intro — gives search engines real text to index */}
      <div className="border-b border-navy/5 bg-surface-subtle px-4 py-3 text-center">
        <p className="text-sm text-ink-muted">
          Free AI assistant for Indian government scholarships, fellowships, and education loans.
          Describe your situation and get matched instantly to official portals.
        </p>
      </div>
      <ChatScreen />
    </>
  );
}
