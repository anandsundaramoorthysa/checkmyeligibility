import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  Gift,
  FileText,
  ExternalLink,
  Building2,
  MapPin,
  ChevronRight,
  Info,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { buttonClasses } from "@/components/ui/Button";
import { Faq } from "@/components/marketing/Faq";
import { AskBotCta } from "@/components/marketing/AskBotCta";
import { SpotIllustration } from "@/components/illustrations/SpotIllustration";
import { getCategoryArt } from "@/components/illustrations/registry";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  governmentServiceLd,
  breadcrumbLd,
  faqPageLd,
} from "@/lib/seo/jsonld";
import { levelLabel, statesHint } from "@/lib/labels";
import { getSchemeBySlug } from "@/lib/data";
import { getCategory } from "@/data/categories";
import { SCHEMES } from "@/data/schemes";

export function generateStaticParams() {
  return SCHEMES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const scheme = await getSchemeBySlug(params.slug);
  if (!scheme) return buildMetadata({ title: "Scheme not found", noindex: true });
  return buildMetadata({
    title: scheme.name,
    description: scheme.summary,
    path: `/explore/${scheme.slug}`,
  });
}

export default async function SchemeDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const scheme = await getSchemeBySlug(params.slug);
  if (!scheme) notFound();

  const category = getCategory(scheme.category);
  const art = getCategoryArt(scheme.category);

  const ld: object[] = [
    governmentServiceLd(scheme),
    breadcrumbLd([
      { name: "Home", path: "/" },
      { name: "Explore", path: "/explore" },
      { name: scheme.name, path: `/explore/${scheme.slug}` },
    ]),
  ];
  if (scheme.faqs?.length) ld.push(faqPageLd(scheme.faqs));

  return (
    <>
      <JsonLd data={ld} />

      <article>
        {/* Hero */}
        <header className="border-b border-navy/5 bg-gradient-to-b from-navy/5 via-navy/[0.02] to-transparent">
          <Container className="py-8 sm:py-14 lg:py-20">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs text-ink-muted sm:text-sm">
                <li>
                  <Link href="/" className="inline-flex min-h-[44px] items-center hover:text-navy">
                    Home
                  </Link>
                </li>
                <ChevronRight className="h-3.5 w-3.5 shrink-0 text-ink-faint" aria-hidden="true" />
                <li>
                  <Link href="/explore" className="inline-flex min-h-[44px] items-center hover:text-navy">
                    Explore
                  </Link>
                </li>
                <ChevronRight className="h-3.5 w-3.5 shrink-0 text-ink-faint" aria-hidden="true" />
                <li className="min-w-0 truncate font-medium text-ink" aria-current="page">
                  {scheme.shortName ?? scheme.name}
                </li>
              </ol>
            </nav>

            <div className="mt-6 grid items-start gap-6 sm:mt-8 sm:grid-cols-[1fr_auto] sm:gap-10">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <Badge tone="navy">{levelLabel(scheme.level)}</Badge>
                  {category && <Badge tone="saffron">{category.title}</Badge>}
                  {scheme.shortName && <Badge tone="neutral">{scheme.shortName}</Badge>}
                </div>

                <h1 className="mt-4 max-w-2xl text-balance font-display text-2xl font-extrabold leading-[1.12] tracking-tight text-ink sm:text-4xl lg:text-5xl">
                  {scheme.name}
                </h1>
                <p className="mt-3 max-w-2xl text-pretty text-base leading-relaxed text-ink-muted sm:mt-4 sm:text-lg">
                  {scheme.summary}
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <a
                    href={scheme.officialPortalUrl}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className={buttonClasses({ variant: "saffron", size: "lg", className: "w-full sm:w-auto" })}
                  >
                    Apply on official portal
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <Link
                    href="/explore"
                    className={buttonClasses({ variant: "outline", size: "lg", className: "w-full sm:w-auto" })}
                  >
                    Browse more schemes
                  </Link>
                </div>
              </div>

              <SpotIllustration
                icon={art.Icon}
                tone={art.tone}
                label={category ? category.title : scheme.name}
                className="hidden w-24 sm:block lg:w-36"
              />
            </div>
          </Container>
        </header>

        {/* Body */}
        <Container className="py-8 sm:py-12 lg:py-16">
          {/* Sidebar + Content grid */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-10">
            {/* Main content */}
            <div className="space-y-5 lg:col-span-2 lg:space-y-8">
              {/* About */}
              <section className="rounded-2xl border border-navy/5 bg-surface-card p-5 shadow-card sm:p-6">
                <h2 className="font-display text-lg font-bold text-ink sm:text-xl">
                  About this scheme
                </h2>
                <p className="mt-3 break-words text-pretty text-sm leading-relaxed text-ink-muted sm:text-base">
                  {scheme.description}
                </p>
              </section>

              {/* Eligibility */}
              <section className="rounded-2xl border border-navy/5 bg-surface-card p-5 shadow-card sm:p-6">
                <h2 className="font-display text-lg font-bold text-ink sm:text-xl">
                  Eligibility
                </h2>
                <ul className="mt-4 space-y-3">
                  {scheme.eligibility.map((c) => (
                    <li key={c.label} className="flex items-start gap-3">
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0 text-green-deep"
                        aria-hidden="true"
                      />
                      <span className="min-w-0 text-sm text-ink sm:text-base">
                        <span className="font-semibold">{c.label}:</span> {c.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Benefits */}
              <section className="rounded-2xl border border-navy/5 bg-surface-card p-5 shadow-card sm:p-6">
                <h2 className="font-display text-lg font-bold text-ink sm:text-xl">
                  Benefits
                </h2>
                <ul className="mt-4 space-y-3">
                  {scheme.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <Gift
                        className="mt-0.5 h-5 w-5 shrink-0 text-saffron-deep"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-ink sm:text-base">{b}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Required documents */}
              <section className="rounded-2xl border border-navy/5 bg-surface-card p-5 shadow-card sm:p-6">
                <h2 className="font-display text-lg font-bold text-ink sm:text-xl">
                  Required documents
                </h2>
                <ul className="mt-4 space-y-3">
                  {scheme.requiredDocuments.map((d) => (
                    <li key={d.name} className="flex items-start gap-3">
                      <FileText
                        className="mt-0.5 h-5 w-5 shrink-0 text-navy"
                        aria-hidden="true"
                      />
                      <span className="min-w-0 text-sm text-ink sm:text-base">
                        {d.name}
                        {!d.mandatory && (
                          <span className="ml-2 text-xs text-ink-faint">(optional)</span>
                        )}
                        {d.note && (
                          <span className="block text-xs text-ink-muted sm:text-sm">{d.note}</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* FAQ */}
              {scheme.faqs?.length ? (
                <section className="rounded-2xl border border-navy/5 bg-surface-card p-5 shadow-card sm:p-6">
                  <h2 className="font-display text-lg font-bold text-ink sm:text-xl">
                    Frequently asked
                  </h2>
                  <div className="mt-4">
                    <Faq items={scheme.faqs} />
                  </div>
                </section>
              ) : null}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="space-y-4 lg:sticky lg:top-24 lg:space-y-6">
                {/* At a glance card */}
                <div className="rounded-2xl border border-navy/10 bg-surface-card p-5 shadow-card sm:p-6">
                  <h2 className="font-display text-base font-bold text-ink sm:text-lg">
                    At a glance
                  </h2>
                  <dl className="mt-4 space-y-4 text-sm">
                    {scheme.ministry && (
                      <div className="flex items-start gap-3">
                        <Building2
                          className="mt-0.5 h-5 w-5 shrink-0 text-navy"
                          aria-hidden="true"
                        />
                        <div className="min-w-0">
                          <dt className="text-ink-faint">Ministry</dt>
                          <dd className="min-w-0 break-words font-medium text-ink">
                            {scheme.ministry}
                          </dd>
                        </div>
                      </div>
                    )}
                    <div className="flex items-start gap-3">
                      <MapPin
                        className="mt-0.5 h-5 w-5 shrink-0 text-navy"
                        aria-hidden="true"
                      />
                      <div className="min-w-0">
                        <dt className="text-ink-faint">Coverage</dt>
                        <dd className="min-w-0 break-words font-medium text-ink">
                          {statesHint(scheme.states)}
                        </dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Info
                        className="mt-0.5 h-5 w-5 shrink-0 text-navy"
                        aria-hidden="true"
                      />
                      <div className="min-w-0">
                        <dt className="text-ink-faint">Application mode</dt>
                        <dd className="font-medium capitalize text-ink">
                          {scheme.applicationMode?.join(", ") ?? "Online"}
                        </dd>
                      </div>
                    </div>
                  </dl>
                  <a
                    href={scheme.officialPortalUrl}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className={buttonClasses({
                      variant: "saffron",
                      size: "md",
                      className: "mt-6 w-full",
                    })}
                  >
                    Apply on official portal
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <p className="mt-3 text-xs leading-relaxed text-ink-faint">
                    You apply directly on the government portal. CheckMyEligibility never
                    submits applications for you.
                  </p>
                </div>

                {/* Help card */}
                <div className="rounded-2xl border border-navy/10 bg-saffron-soft/30 p-5 sm:p-6">
                  <h3 className="font-display text-sm font-bold text-ink">
                    Need help checking eligibility?
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                    Use our AI assistant to check if you qualify for this scheme and discover similar opportunities.
                  </p>
                  <Link
                    href={`/chat?seed=${encodeURIComponent(scheme.name)}`}
                    className={buttonClasses({
                      variant: "primary",
                      size: "sm",
                      className: "mt-4 w-full",
                    })}
                  >
                    Ask the assistant
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </Container>

        {/* CTA */}
        <Container className="pb-10 sm:pb-16">
          <AskBotCta
            title="Looking for more schemes like this?"
            body="Tell the assistant about your situation and discover everything else you may qualify for."
            seed={`Schemes similar to ${scheme.name}`}
          />
        </Container>
      </article>
    </>
  );
}
