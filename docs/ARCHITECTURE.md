<p align="center">
  <img src="../public/brand/favicon.svg" alt="CheckMyEligibility logo" width="72" height="72" />
</p>

# Architecture

This document explains how CheckMyEligibility is structured: the two **swap seams** that
keep the data store and chat engine decoupled from UI code, and the Phase 2 AI pipeline
that powers the live assistant.

## High-level overview

```
Browser
  |
  +-- Marketing pages (SSG on Vercel)
  |     +-- SchemeProvider (src/lib/data.ts) --> src/data/schemes/*.ts
  |
  +-- /chat (client component)
        +-- fetch  POST /api/chat  (Next.js route on Vercel)
                       +-- Guardrail (input sanitisation, prompt-injection check)
                       +-- Rate limiter (Neon PostgreSQL, per-IP)
                       +-- Retrieval (Qdrant vector search)
                       +-- Groq (LLM, streamed via Vercel AI SDK)
                       +-- Thread store (Neon PostgreSQL, cookie-backed)
```

## Tech stack

| Layer | Technology | Host |
|-------|-----------|------|
| Frontend | Next.js 15 + TypeScript + Tailwind CSS | Vercel |
| AI SDK | Vercel AI SDK v6 (streaming) | Vercel |
| LLM | Groq (llama-based, fast inference) | Groq API |
| Embeddings | Google Gemini | Google AI |
| Vector store | Qdrant Cloud | Qdrant Cloud |
| Relational DB | Neon (PostgreSQL) | Neon |
| Icons | lucide-react | bundled |
| Testing | Playwright (e2e) | CI / local |
| Package manager | pnpm | local |

## Routing and layout

- `src/app/layout.tsx` — root layout: fonts (`next/font`), global JSON-LD, and `<SiteShell>`.
- `src/components/layout/SiteShell.tsx` — client wrapper that renders the marketing Header +
  Footer on normal routes, but renders `/chat` full-bleed (its own slim header, no marketing
  chrome) so the assistant fills the viewport.
- Marketing sections live in `src/components/marketing/*`; shared primitives in
  `src/components/ui/*` and `src/components/layout/*`.

## Seam 1 — Data (`SchemeProvider`)

Everything that needs scheme data goes through **one async interface**, so the backing store
can be replaced without touching any caller.

```ts
// src/lib/data.ts
getAllSchemes(): Promise<Scheme[]>
getSchemeBySlug(slug): Promise<Scheme | null>
filterSchemes({ category?, state?, text? }): Promise<Scheme[]>
searchSchemes(text): Scheme[]   // sync keyword match
```

- **Types** live in `src/lib/types.ts` (`Scheme`, `EligibilityCriterion`, `RequiredDocument`,
  ...). These are the contract every scheme file and the chat engine must satisfy.
- **Now:** 200+ manually validated TypeScript scheme files in `src/data/schemes/`. Each file
  exports one `Scheme` object. The folder is scanned and re-exported by
  `src/data/schemes/index.ts`, which is **auto-generated** by `pnpm collect-schemes` — never
  edit it manually.
- **Seam contract:** every page and the bot read through `SchemeProvider`. If the backing
  store ever changes (e.g. a live API), only `data.ts` changes — all callers stay the same.

## Seam 2 — Chat (`ChatEngine` / `/api/chat`)

The chat UI never calls an engine directly. It calls the Next.js API route, which handles
the full AI pipeline.

```
ChatScreen (client)
  +-- src/lib/chat/client.ts  --> fetch POST /api/chat
        +-- src/app/api/chat/route.ts
              +-- sanitizeInput / checkInput (guardrail.ts)
              +-- isRateLimited (rateLimiter.ts, Neon)
              +-- readThreadToken / appendTurn (threadStore.ts, Neon)
              +-- retrieveWithMeta (retrieval.ts, Qdrant)
              +-- buildMessages / isComparisonIntent / isGrievanceIntent (systemPrompt.ts)
              +-- streamText (Vercel AI SDK) --> Groq
              +-- validateOutput (guardrail.ts)
              +-- logChat (chatLogger.ts, Neon)
```

### `/api/chat` pipeline (per request)

1. **Guardrail in** — `sanitizeInput` strips control chars and HTML; `checkInput` blocks
   prompt injection patterns, political content, and off-topic requests.
2. **Rate limiter** — per-IP sliding-window check against Neon. Returns 429 if exceeded.
3. **Thread restore** — reads a signed cookie to restore the conversation thread from Neon,
   so multi-turn context is maintained across page refreshes.
4. **Retrieval** — embeds the user message with Gemini, queries Qdrant for the top-k most
   relevant scheme chunks. Results are injected into the system prompt as grounding context.
5. **Intent detection** — determines whether the request is a comparison intent (two schemes
   side by side), a grievance intent (complaint/rejection guidance), or a standard query.
6. **LLM call** — `streamText` (Vercel AI SDK) sends the assembled messages to Groq and
   streams the response back to the browser via SSE.
7. **Guardrail out** — `validateOutput` checks the streamed response does not claim to submit
   applications or make eligibility guarantees.
8. **Thread persist** — `appendTurn` writes the turn to Neon for future context.
9. **Chat log** — `logChat` records an anonymised hash of the IP and the exchange to Neon
   for quality monitoring.

### Intent flows

**Comparison flow** — triggered when the user asks to compare two or more schemes. The
system prompt is switched to a structured comparison template that produces a verdict table
(eligibility requirements, benefit amounts, documents needed, and a recommendation).

**Grievance flow** — triggered when the user mentions a rejection, complaint, or appeal.
The assistant identifies the responsible ministry or state portal and provides the correct
grievance redressal URL and process.

## Embeddings and retrieval

Scheme embeddings are generated with Google Gemini and stored in Qdrant Cloud.

```
pnpm embed:schemes (one-time / on data update)
  +-- embedder.ts  -->  Gemini text-embedding API
  +-- qdrant.ts    -->  Qdrant upsert (scheme_embeddings collection)

At query time:
  retrieval.ts  -->  Gemini embed(user message)
              -->  Qdrant search (top-k cosine similarity)
              -->  returns { scheme, chunk, score }[]
```

The collection name defaults to `scheme_embeddings` and is configurable via
`QDRANT_COLLECTION`.

## Guardrails

`src/lib/chat/guardrail.ts` implements defence in depth:

- **Input sanitisation** — strips HTML, truncates at 2000 chars, removes null bytes.
- **Input check** — regex + keyword blocklist for prompt injection, political content,
  medical advice requests, and off-topic queries.
- **Output validation** — post-generation check that the assistant response does not:
  - claim to submit applications on the user's behalf
  - guarantee eligibility
  - include disallowed external URLs

## Rate limiting

`src/lib/chat/rateLimiter.ts` uses Neon PostgreSQL as the backing store for a
sliding-window counter keyed by hashed IP. Limits are configurable and apply per environment.

## Thread persistence

`src/lib/chat/threadStore.ts` maintains multi-turn context across page refreshes:

- A signed JWT cookie (`cme-thread`) is issued on the first message.
- Subsequent turns verify the cookie signature and append to the thread row in Neon.
- Thread rows are TTL-expired automatically.
- Thread persistence is optional: it only activates when `DATABASE_URL` and a session
  secret are set. Without them, context is in-memory per request (still works, just not
  cross-refresh).

## Eligibility matching approach

The assistant uses **retrieval-grounded generation**, not structured DB queries:

1. The user describes their situation in natural language.
2. Qdrant returns the most semantically relevant scheme chunks.
3. Groq generates a plain-language response grounded in those chunks.

This lets the assistant handle nuanced, multi-factor eligibility without maintaining a
structured eligibility database — at the cost of being less precise for exact boundary
conditions (income thresholds, exact age limits). Phase 3 may add structured SQL filtering
for high-confidence numeric constraints.

## The chat UI

`src/components/chat/ChatScreen.tsx` is the orchestrator (a `100dvh` client island):

- Welcome state with persona example chips (student-focused)
- Centred conversation (`role="log"`, `aria-live="polite"`) of user/assistant bubbles
- `SchemeResultCard`s for matched schemes (with "Apply on the official portal" link)
- Fixed bottom composer, follow-up chips, a typing indicator, and a scroll-to-bottom pill
- `?q=` deep-link (auto-asks once), `/` to focus and `Esc` to stop
- `localStorage` transcript persistence for the current session

## SEO

- Per-page metadata via `src/lib/seo/metadata.ts` (`buildMetadata`) with canonical URLs,
  OpenGraph, Twitter cards, and full `googleBot` directives.
- `src/app/sitemap.ts` and `src/app/robots.ts` generate `sitemap.xml` / `robots.txt`.
- `/chat` is excluded from sitemap (`noindex`) — it is a dynamic session, not a crawlable page.
- JSON-LD emitters in `src/lib/seo/jsonld.ts`: `Organization`, `WebSite`,
  `GovernmentService` (with `ApplyAction` potentialAction), `FAQPage`, `BreadcrumbList`.
- OG images for scheme detail pages are generated statically at build time via
  `src/app/explore/[slug]/opengraph-image.tsx` (Node.js runtime, not Edge).

## Design system

- **Palette:** Indian flag — saffron `#FF9933`, white, India-green `#138808`, navy
  `#0A3D91`/`#000080` as Tailwind tokens.
- **Type:** Sora (display) + Inter (body) via `next/font`.
- **Icons:** `lucide-react` only — no emojis in the product.
- **Components:** shadcn/ui on top of Tailwind for standard UI primitives; custom components
  for brand-specific UI.

## Why this shape

The two seams (SchemeProvider for data, `/api/chat` for the AI pipeline) de-risk development
and make each layer independently replaceable. The Next.js frontend is fully deployed and
working. The AI stack (Groq, Qdrant, Gemini) is the current production implementation, but
each component could be swapped for an alternative without touching UI code — only
`route.ts`, `retrieval.ts`, and `embedder.ts` would change.

Retrieval-grounded generation keeps the bot factually anchored to validated scheme data,
reducing hallucination risk compared to a purely parametric LLM response.
