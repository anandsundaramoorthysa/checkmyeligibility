# Architecture

This document explains how GovEligify is put together and, most importantly, the two **swap
seams** that let Phase 1 (sample data + mock bot) become Phase 2 (real data + real AI) without
rewriting the UI.

## High-level overview

GovEligify is a single [Next.js 14](https://nextjs.org/) App Router application:

- **Marketing pages** (`/`, `/explore`, `/certificates`, `/how-it-works`, `/about`, `/faq`,
  `/privacy`, `/terms`, scheme & certificate detail pages) are server components, rendered
  statically for SEO and speed.
- **The assistant** lives at `/chat` as a full-screen client experience, talking to a single
  dynamic API route, `POST /api/chat`.

```
Browser
  │
  ├── marketing pages (SSG)  ──reads──▶  SchemeProvider (src/lib/data.ts)  ──▶  src/data/*
  │
  └── /chat (client)  ──fetch──▶  POST /api/chat  ──▶  ChatEngine (src/lib/chat/engine.ts)
                                                          └─ Phase 1: mockEngine
                                                          └─ Phase 2: RAG + LLM
```

## Routing & layout

- `src/app/layout.tsx` — root layout: fonts (`next/font`), global JSON-LD, and `<SiteShell>`.
- `src/components/layout/SiteShell.tsx` — a small client wrapper that renders the marketing
  **Header + Footer** on normal routes, but renders `/chat` **full-bleed** (its own slim chat
  header, no marketing chrome) so the assistant can fill the viewport.
- Marketing sections are composed from `src/components/marketing/*` (Hero, `CategoryGrid`,
  `StatBand`, `CitizensBand`, `Faq`, testimonials, etc.) and shared primitives in
  `src/components/ui/*` and `src/components/layout/*`.

## Seam 1 — Data (`SchemeProvider`)

Everything that needs scheme or certificate data goes through **one async interface**, so the
backing store can change without touching callers.

```ts
// src/lib/data.ts (shape)
getAllSchemes(): Promise<Scheme[]>
getSchemeBySlug(slug): Promise<Scheme | null>
filterSchemes({ category?, state?, text? }): Promise<Scheme[]>
getAllCertificates(): Promise<Certificate[]>
getCertificateBySlug(slug): Promise<Certificate | null>
searchSchemes(text): Scheme[]   // sync keyword match used by the mock bot
```

- **Types** live in `src/lib/types.ts` (`Scheme`, `Certificate`, `EligibilityCriterion`,
  `RequiredDocument`, `SchemeCategory`, `IndianState`, …). They're the contract a real
  pipeline must satisfy.
- **Phase 1** is backed by typed sample files in `src/data/` (`schemes.ts`, `certificates.ts`,
  `categories.ts`, `faq.ts`), all clearly marked `source: "sample"`.
- **Phase 2** swaps the provider implementation for a real data source (MyScheme,
  data.gov.in, state portals) plus a refresh job. Pages, the explorer, the sitemap, and the
  bot all keep working unchanged because they only know the interface.

## Seam 2 — Chat (`ChatEngine`)

The chat UI never calls an engine directly — it calls the API route, which delegates to a
`ChatEngine`.

```
ChatScreen (client)
  └─ src/lib/chat/client.ts  → fetch POST /api/chat
        └─ src/app/api/chat/route.ts
              └─ ChatEngine (src/lib/chat/engine.ts)
                    └─ Phase 1: src/lib/chat/mockEngine.ts (keyword intents over sample data)
                    └─ Phase 2: real RAG + LLM (retrieval, prompts, streaming, cache, guardrails)
```

- `ChatEngine` returns a `BotTurn`: assistant message(s), optional `schemeResults` (rendered
  as result cards), and `quickReplies` (follow-up chips).
- **Phase 1** `mockEngine` matches keywords/intents and pulls **real `Scheme` objects** from
  the data provider, so result cards already exercise the data layer end-to-end.
- **Phase 2** replaces the engine internals — the React components (`ChatScreen`, `screen/*`,
  `SchemeResultCard`) don't change. The `Message` type already carries a `LangCode` for the
  planned multilingual support.

## The chat UI

`src/components/chat/ChatScreen.tsx` is the orchestrator (a `100dvh` client island):

- a **welcome state** with persona/example starter chips,
- a centred conversation (`role="log"`, `aria-live="polite"`) of user/assistant bubbles,
- `SchemeResultCard`s for matched schemes (with an outbound "Apply on the official portal"
  link, `rel="nofollow noopener"`),
- a fixed bottom composer, follow-up chips, a typing indicator, and a scroll-to-bottom pill,
- `?q=` deep-link (auto-asks once), `/` to focus and `Esc` to stop, and `localStorage`
  transcript persistence.

Presentational pieces live in `src/components/chat/screen/*`.

## SEO

- Per-page metadata via `src/lib/seo/metadata.ts` (`buildMetadata`), with canonical URLs and
  OpenGraph/Twitter cards.
- `src/app/sitemap.ts` and `src/app/robots.ts` generate `sitemap.xml` / `robots.txt`, including
  an entry for every scheme and certificate slug.
- JSON-LD emitters in `src/lib/seo/jsonld.ts` (`Organization`, `WebSite`, `GovernmentService`
  on scheme pages, `FAQPage`, `BreadcrumbList`), rendered by `src/components/seo/JsonLd.tsx`.
- A default OpenGraph image is generated at `src/app/opengraph-image.tsx`.

## Design system

- **Palette:** the Indian flag — saffron `#FF9933`, white, India-green `#138808`, navy
  `#0A3D91`/`#000080` — as Tailwind tokens. Body text and primary buttons use navy/ink; saffron
  and green are reserved for accents and "eligible/success" states (AA-contrast aware).
- **Type:** Sora (display) + Inter (body) via `next/font`.
- **Icons:** `lucide-react` only — **no emojis** in the product.
- **Illustrations:** original brand vector art in `src/components/illustrations/*`
  (`SpotIllustration`, `HeroArt`), plus the Republic-Day citizen WebP set in `public/images`.

## Testing

End-to-end tests use [Playwright](https://playwright.dev/) (`tests/e2e/`): home loads, primary
nav reaches Explore, scheme detail renders the official-portal link, key pages load, the
assistant answers a seeded query with a scheme card, and the funny 404 renders. Run with
`pnpm test:e2e`.

## Why this shape

The whole point of the two seams is **de-risking**: the team can ship a polished, correct,
accessible product now (Phase 1) and later plug in the genuinely hard parts — a fresh
government-data pipeline and a grounded, multilingual AI assistant — behind interfaces that the
rest of the app already depends on. No UI rewrite, no big-bang migration.
