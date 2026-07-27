import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ChatScreen } from "@/components/chat/ChatScreen";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Ask CheckMyEligibility",
    description:
      "Chat with CheckMyEligibility to discover the scholarships, fellowships, and education loans you may qualify for. Sample experience; live matching coming soon.",
    path: "/chat",
  }),
  // Mock/sample experience — keep it out of search until live matching ships.
  robots: { index: false, follow: true },
};

/**
 * Statically prerendered. Reading `?q=` through searchParams forced a server
 * render on every visit, and under concurrency /chat measured roughly four
 * times slower than the static pages for no benefit: the seed query is only
 * ever consumed by a client component, which can read it from the URL itself.
 */
export default function ChatPage() {
  return <ChatScreen />;
}
