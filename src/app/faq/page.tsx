import type { Metadata } from "next";
import { MessageCircleQuestion } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { TableOfContents } from "@/components/layout/TableOfContents";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Faq } from "@/components/marketing/Faq";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/marketing/CtaBand";
import { SpotIllustration } from "@/components/illustrations/SpotIllustration";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo/metadata";
import { faqPageLd, breadcrumbLd } from "@/lib/seo/jsonld";
import { chatHref } from "@/lib/chat/openChat";
import { FAQS } from "@/data/faq";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  description:
    "Answers to common questions about CheckMyEligibility: cost, privacy, whether we apply for you, how scheme matching works, and our independence from the government.",
  path: "/faq",
});

/** Group the flat FAQ list into themed sections by question text. */
const GROUPS: { title: string; match: (q: string) => boolean }[] = [
  {
    title: "Cost & access",
    match: (q) => /free|account|guarantee/i.test(q),
  },
  {
    title: "Privacy & independence",
    match: (q) => /data safe|government|apply for me/i.test(q),
  },
  {
    title: "How it works",
    match: (q) => /matching|languages|accurate|can't find/i.test(q),
  },
  {
    title: "Scholarships & applications",
    match: (q) => /scholarship|private college|NSP|reapply|multiple/i.test(q),
  },
  {
    title: "About the project",
    match: (q) => /who built|open source|validated|validation/i.test(q),
  },
];

const slugify = (title: string) =>
  `group-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;

function buildGroups() {
  const used = new Set<string>();
  const sections = GROUPS.map((g) => {
    const items = FAQS.filter((f) => !used.has(f.q) && g.match(f.q));
    items.forEach((f) => used.add(f.q));
    return { title: g.title, items };
  }).filter((s) => s.items.length > 0);

  const rest = FAQS.filter((f) => !used.has(f.q));
  if (rest.length) sections.push({ title: "More questions", items: rest });
  return sections.map((s) => ({ ...s, id: slugify(s.title) }));
}

export default function FaqPage() {
  const sections = buildGroups();

  return (
    <>
      <JsonLd
        data={[
          faqPageLd(FAQS),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />

      <PageHero
        eyebrow="FAQ"
        title="Questions, answered honestly"
        lead={
          <>
            Everything you might want to know about how CheckMyEligibility works, what it
            costs, and how we handle your information.
          </>
        }
        art={
          <SpotIllustration
            icon={MessageCircleQuestion}
            tone="navy"
            label="Common questions about CheckMyEligibility"
          />
        }
      />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-14">
            <TableOfContents
              sections={sections.map((s) => ({ id: s.id, title: s.title }))}
            />

            <div className="space-y-12 sm:space-y-14">
              {sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-24">
                  <SectionHeading
                    align="left"
                    title={section.title}
                    className="max-w-none"
                  />
                  <div className="mt-6">
                    <Faq items={section.items} />
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Still have a question?"
        lead="Ask the assistant directly — it's free."
        primary={{ label: "Check my eligibility", href: chatHref() }}
        secondary={{ label: "Browse schemes", href: "/explore" }}
      />
    </>
  );
}
