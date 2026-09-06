<div align="center">

<img src="public/brand/favicon.svg" alt="CheckMyEligibility logo" width="96" height="96" />

# CheckMyEligibility

[![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: PolyForm Noncommercial](https://img.shields.io/badge/license-PolyForm%20Noncommercial-blue?style=flat-square)](LICENSE)
[![Commercial license available](https://img.shields.io/badge/commercial-license%20available-success?style=flat-square)](COMMERCIAL-LICENSE.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](CONTRIBUTING.md)
[![Status: Live](https://img.shields.io/badge/status-live-brightgreen?style=flat-square)](#project-status)

### Find what you're entitled to.

</div>

> Millions of Indians miss out on schemes, subsidies, and certificates they qualify for,
> not because they're ineligible, but because the information is scattered, jargon-heavy, and
> hard to navigate. **CheckMyEligibility** is an AI guide that fixes that.

Describe your situation in plain language and CheckMyEligibility surfaces the government schemes and
certificates you may qualify for, the documents you'll need, and a **direct link to the
official portal** so you can apply yourself.

> [!IMPORTANT]
> CheckMyEligibility is an **independent guide**. It is **not affiliated with, endorsed
> by, or operated by any government body**, and it **never submits applications on your
> behalf** — it points you to the official portal and you apply there. This is kept
> deliberately transparent for consent, trust, and legal safety.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Why CheckMyEligibility](#why-checkmyeligibility)
- [Features](#features)
- [Project Status](#project-status)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [How It Works](#how-it-works)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Code of Conduct](#code-of-conduct)
- [Security](#security)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## About the Project

India runs thousands of central and state welfare schemes, scholarships, pensions, and
subsidies — plus the certificates (income, caste, domicile, EWS, disability, and more) that
unlock them. Yet every year, billions in benefits go **unclaimed**, because the information
is fragmented across hundreds of portals and written for bureaucrats, not citizens.

CheckMyEligibility is a friendly, plain-language front door to that maze. A citizen describes their
situation ("I'm a farmer", "a student looking for a scholarship", "a senior citizen") and the
assistant explains **what they may qualify for, why, the documents required, and exactly
where to apply** on the official government portal.

The project is built to be **trustworthy and transparent**: it guides and informs, but always
hands you off to the genuine portal to submit — it never asks for your credentials and never
files anything for you.

## Why CheckMyEligibility

| Capability | Scattered govt portals | A generic search | **CheckMyEligibility** |
|---|:---:|:---:|:---:|
| Plain-language, conversational guidance | No | Partial | **Yes** |
| Matches schemes to *your* situation | No | No | **Yes** |
| Lists the exact documents you'll need | Partial | No | **Yes** |
| Direct deep-link to the **official** portal | Yes | Partial | **Yes** |
| One place for schemes **and** certificates | No | No | **Yes** |
| Free, no login, privacy-first | Varies | Varies | **Yes** |

## Features

- **Conversational eligibility assistant** — a full-screen chat where you describe your
  situation and get matched schemes as rich result cards (eligibility, benefits, required
  documents, and an "Apply on the official portal" deep-link).
- **Side-by-side scheme comparison** — ask "compare these two scholarships" and get a
  structured verdict on eligibility, benefits, and documents.
- **Grievance guidance** — the assistant identifies the right ministry or state portal to
  raise a complaint if a scheme application is rejected.
- **Browse by need** — an Explore section grouping 200+ schemes into citizen-friendly
  categories (scholarships, fellowships, loans, and more), each with its own detail page.
- **Certificates guide** — what each common certificate is for, who issues it, the documents
  and steps to get it, and where to apply.
- **SEO-first** — server-rendered pages, per-page metadata, `sitemap.xml`, `robots.txt`, and
  JSON-LD structured data (`Organization`, `WebSite`, `GovernmentService`, `FAQPage`,
  `BreadcrumbList`).
- **Accessible and responsive** — keyboard-navigable, `aria-live` chat log, WCAG-minded colour
  contrast, and a mobile-first layout tuned for phone, tablet, and desktop.
- **On-brand by design** — the Indian-flag palette (saffron, white, green, navy), Sora + Inter
  typography, original vector illustrations, and **Lucide line icons only — no emojis**
  anywhere in the product.
- **A genuinely funny 404** — a deadpan "Eligibility Assessment Report" that returns a verdict
  of *Not Eligible* for the page you were looking for.

## Project Status

> [!NOTE]
> **Phase 2 (current): live AI assistant over real scheme data.** The chatbot runs on a
> production LLM stack (Groq + Google Gemini) with vector retrieval (Qdrant) over 200+
> manually validated schemes. The full marketing site, Explore pages, and conversational
> assistant are all deployed and publicly accessible at [checkmyeligibility.in](https://checkmyeligibility.in).

## Tech Stack

| Area | Choice |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) (strict) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Icons | [lucide-react](https://lucide.dev/) |
| AI SDK | [Vercel AI SDK v6](https://sdk.vercel.ai/) |
| LLM primary | [Groq](https://groq.com/) (fast inference) |
| Embeddings | [Google Gemini](https://ai.google.dev/) |
| Vector store | [Qdrant Cloud](https://qdrant.tech/) |
| Database | [Neon](https://neon.tech/) (PostgreSQL — rate limiting, chat threads) |
| Markdown (chat) | [react-markdown](https://github.com/remarkjs/react-markdown) + [remark-gfm](https://github.com/remarkjs/remark-gfm) |
| Fonts | Sora + Inter via `next/font` |
| Testing | [Playwright](https://playwright.dev/) (e2e) |
| Package manager | [pnpm](https://pnpm.io/) |
| Hosting | [Vercel](https://vercel.com/) |

## Getting Started

### Prerequisites

- **Node.js 20 LTS** or later
- **pnpm** (`npm install -g pnpm`)

### Run the Explore pages (no API keys needed)

```bash
# 1. Clone
git clone https://github.com/anandsundaramoorthysa/checkmyeligibility.git
cd checkmyeligibility

# 2. Install dependencies
pnpm install

# 3. Start the dev server
pnpm dev
# open http://localhost:3000
```

The Explore pages, scheme detail pages, certificates, and all static marketing pages run
entirely from the local scheme data in `src/data/schemes/` — no environment variables needed.

### Run the AI assistant locally

To develop the `/chat` endpoint with a live LLM, copy `.env.example` to `.env.local` and
fill in the required keys:

```bash
cp .env.example .env.local
# fill in GROQ_API_KEY, GEMINI_API_KEY, QDRANT_URL, QDRANT_API_KEY, DATABASE_URL
pnpm dev
```

See [Environment Variables](#environment-variables) for what each key does.

## Environment Variables

| Variable | Required | Description |
|---|:---:|---|
| `GROQ_API_KEY` | For `/chat` | LLM inference — get from [console.groq.com/keys](https://console.groq.com/keys) |
| `GEMINI_API_KEY` | For `/chat` | Embedding generation — get from [aistudio.google.com](https://aistudio.google.com/app/apikey) |
| `QDRANT_URL` | For `/chat` | Vector DB cluster URL — from [cloud.qdrant.io](https://cloud.qdrant.io) |
| `QDRANT_API_KEY` | For `/chat` | Qdrant cluster API key |
| `DATABASE_URL` | For `/chat` | Neon PostgreSQL connection string (rate limiting + chat threads) |
| `CHATBOT_ADMIN_KEY` | For `/api/embed` | Protects the embedding seed routes — generate with `openssl rand -hex 32` |
| `QDRANT_COLLECTION` | No | Qdrant collection name (default: `scheme_embeddings`) |

A filled `.env.example` is included in the repository. The Explore and marketing pages work
with **no environment variables at all**.

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the development server (http://localhost:3000) |
| `pnpm build` | Create a production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run ESLint |
| `pnpm typecheck` | Type-check with `tsc --noEmit` |
| `pnpm test:e2e` | Run the Playwright e2e suite |
| `pnpm check:urls` | Audit scheme files for missing or root-level `officialPortalUrl` values |
| `pnpm eval:guardrail` | Evaluate the chat guardrail against known safe and unsafe inputs |
| `pnpm eval:retrieval` | Evaluate Qdrant retrieval quality (precision, recall) |
| `pnpm eval:groundedness` | Check that chat answers are grounded in retrieved scheme data |
| `pnpm eval:coherence` | Check multi-turn chat coherence |

> First time running e2e? Install the browser once: `pnpm exec playwright install chromium`.

## How It Works

CheckMyEligibility is built around two **swap seams** so the data store and the chat engine
can each be upgraded independently without touching UI code.

```
                        +-----------------------------+
   Marketing pages  --> |  SchemeProvider             |  src/lib/data.ts
   (Explore, detail,    |  getAllSchemes / bySlug /   |
    Certificates, ...)  |  filter / search            |
                        +-----------------------------+
                                      |
                                      v  200+ typed scheme files (src/data/schemes/)
                                         auto-collected by pnpm collect-schemes

   Chat UI --> POST /api/chat --> +------------------+
   (ChatScreen)                  |  ChatEngine       |  src/lib/chat/
                                 |  send() / greet   |
                                 +------------------+
                                           |
                                           v  Groq (LLM) + Qdrant (retrieval)
                                              + Gemini (embeddings)
                                              matched Scheme[] --> result cards
```

**Data seam — `SchemeProvider`:** every page and the bot read scheme data through one async
interface. Backed by 200+ validated TypeScript files in `src/data/schemes/`; each file is one
scheme with a strongly typed `Scheme` object.

**Bot seam — `ChatEngine`:** the chat UI calls `POST /api/chat`. The route uses the Vercel AI
SDK to stream a response from Groq, grounded in schemes retrieved from Qdrant by embedding
similarity. Guardrails, rate limiting (Neon), and thread persistence run in the same route.

For a deeper dive, see [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) and
[`docs/CHATBOT.md`](docs/CHATBOT.md).

## Project Structure

```
checkmyeligibility/
+-- public/
|   +-- brand/                # logo, favicon
|   +-- images/               # citizen illustrations (WebP)
+-- src/
|   +-- app/                  # App Router: pages, /api/chat, sitemap, robots, OG images
|   +-- components/
|   |   +-- brand/            # Logo / mark
|   |   +-- layout/           # Header, Footer, SiteShell, Container, PageHero
|   |   +-- ui/               # Button, Badge, SectionHeading
|   |   +-- marketing/        # Hero, CategoryGrid, StatBand, CitizensBand, FAQ, ...
|   |   +-- chat/             # ChatScreen + screen/* (full-screen assistant)
|   |   +-- illustrations/    # SpotIllustration, HeroArt (original brand vectors)
|   |   +-- seo/              # JsonLd
|   +-- data/
|   |   +-- schemes/          # 200+ individual scheme files (one .ts per scheme)
|   |   |   +-- index.ts      # AUTO-GENERATED by pnpm collect-schemes — do not edit
|   |   +-- certificates/     # Certificate data
|   |   +-- categories.ts     # Scheme category definitions
|   +-- lib/
|   |   +-- chat/             # ChatEngine, retrieval (Qdrant), guardrail, rate limiter,
|   |   |                     #   systemPrompt, embedder, threadStore, chatLogger
|   |   +-- seo/              # buildMetadata, JSON-LD emitters
|   |   +-- data.ts           # SchemeProvider (getAllSchemes, getSchemeBySlug, filter)
|   |   +-- types.ts          # Scheme, EligibilityCriterion, RequiredDocument, ...
|   |   +-- site.ts           # SITE constant (name, url, description)
|   +-- scripts/              # collect-schemes, check-scheme-urls, eval-*, load-test
+-- tests/e2e/                # Playwright tests
+-- docs/                     # Architecture, chatbot, roadmap guides
+-- brand/                    # Design source files (not shipped)
```

> **`src/data/schemes/index.ts` is auto-generated.** Run `pnpm collect-schemes` to rebuild it
> after adding a new scheme file. Never edit it manually.

## Deployment

CheckMyEligibility is deployed on **[Vercel](https://vercel.com/)** with zero-config Next.js
support. The `/api/chat` route runs on the Node.js runtime (not Edge) so it can use the full
Vercel AI SDK streaming stack.

```bash
pnpm build   # verify the production build locally before deploying
```

Set all required environment variables in your Vercel project settings before deploying.
See the [Environment Variables](#environment-variables) table above.

## Roadmap

**Foundation (complete)**

- [x] Responsive, SEO-optimised marketing site
- [x] Full-screen conversational assistant UI
- [x] Explore + scheme detail pages, certificates + detail pages
- [x] Original brand illustration system + funny 404
- [x] Playwright e2e coverage

**Phase 2 — live AI assistant (complete)**

- [x] 200+ manually validated scheme data files with full eligibility, benefits, and documents
- [x] Vercel AI SDK + Groq LLM backend behind `/api/chat`
- [x] Qdrant vector retrieval (semantic scheme search)
- [x] Google Gemini embeddings pipeline
- [x] Guardrails (input sanitisation, output validation, prompt injection protection)
- [x] Rate limiting per IP (Neon PostgreSQL)
- [x] Chat thread persistence (cookie-based, Neon-backed)
- [x] Scheme comparison flow (side-by-side eligibility verdict)
- [x] Grievance guidance flow (state-specific complaint portals)

**Phase 3 — planned**

- [ ] Multilingual answers (Tamil, Hindi, and more)
- [ ] Structured eligibility matching (age / income / occupation / state / category filters)
- [ ] Admin dashboard (analytics + wrong-answer reports)
- [ ] Official-portal link verification pipeline

## Contributing

Contributions are very welcome — bug fixes, scheme data accuracy, accessibility, new features,
or docs. Please read **[CONTRIBUTING.md](CONTRIBUTING.md)** first.

1. **Fork** the repository.
2. Create a branch: `git checkout -b feat/your-feature`.
3. Make your change and run `pnpm lint && pnpm typecheck && pnpm build`.
4. **Commit** with a clear message and **open a pull request**.

> Two house rules: **no emojis in the product** (use Lucide icons), and the assistant must
> **never** claim to submit applications — it only guides users to official portals.

## Code of Conduct

This project follows the **[Contributor Covenant](CODE_OF_CONDUCT.md)**. By participating, you
are expected to uphold it.

## Security

Found a vulnerability? Please **do not** open a public issue — see **[SECURITY.md](SECURITY.md)**
for how to report it privately.

## License

CheckMyEligibility uses a **dual license**:

- **Noncommercial use is free** under the [PolyForm Noncommercial License 1.0.0](LICENSE) —
  use, modify, and share it for personal, research, educational, charitable, or government
  purposes at no cost.
- **Commercial use requires a paid commercial license.** See
  [COMMERCIAL-LICENSE.md](COMMERCIAL-LICENSE.md) or [contact the author](#contact).

> Because it restricts commercial use, CheckMyEligibility is **source-available**, not OSI-approved
> "open source." See the [LICENSE](LICENSE) file for the full terms.

## Contact

- **Anand Sundaramoorthy** — [sanand03072005@gmail.com](mailto:sanand03072005@gmail.com?subject=About%20CheckMyEligibility)
- **GitHub:** [@anandsundaramoorthysa](https://github.com/anandsundaramoorthysa)

## Acknowledgements

Built with these excellent open-source projects and resources:

- [Next.js](https://nextjs.org/) — the React framework
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling
- [Vercel AI SDK](https://sdk.vercel.ai/) — streaming AI responses
- [Groq](https://groq.com/) — fast LLM inference
- [Qdrant](https://qdrant.tech/) — vector database for semantic retrieval
- [lucide-react](https://lucide.dev/) — the icon set used throughout the UI
- [react-markdown](https://github.com/remarkjs/react-markdown) + [remark-gfm](https://github.com/remarkjs/remark-gfm) — chat answer rendering
- [Playwright](https://playwright.dev/) — end-to-end testing
- [Neon](https://neon.tech/) — serverless PostgreSQL for rate limiting and threads
- Methodology inspired by **inigo**, a multilingual RAG admission chatbot
- Republic-Day citizen illustrations adapted from a [Vecteezy](https://www.vecteezy.com/) vector set

> Scheme data sourced from official government portals including
> [MyScheme](https://www.myscheme.gov.in/), the
> [National Scholarship Portal](https://scholarships.gov.in/), and individual ministry
> and state government scholarship portals.
