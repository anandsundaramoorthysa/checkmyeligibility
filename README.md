<div align="center">

# GovEligify

[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](CONTRIBUTING.md)
[![Status: Phase 1](https://img.shields.io/badge/status-phase%201%20(sample%20data)-orange?style=flat-square)](#project-status)

### Find what you're entitled to.

</div>

> Millions of Indians miss out on schemes, subsidies, and certificates they qualify for —
> not because they're ineligible, but because the information is scattered, jargon-heavy, and
> hard to navigate. **GovEligify** is an AI guide that fixes that.

Describe your situation in plain language and GovEligify surfaces the government schemes and
certificates you may qualify for, the documents you'll need, and a **direct link to the
official portal** — so you can apply yourself.

> [!IMPORTANT]
> GovEligify is an **independent, open-source guide**. It is **not affiliated with, endorsed
> by, or operated by any government body**, and it **never submits applications on your
> behalf** — it points you to the official portal and you apply there. This is kept
> deliberately transparent for consent, trust, and legal safety.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Why GovEligify](#why-goveligify)
- [Features](#features)
- [Project Status](#project-status)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
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

GovEligify is a friendly, plain-language front door to that maze. A citizen describes their
situation ("I'm a farmer", "a student looking for a scholarship", "a senior citizen") and the
assistant explains **what they may qualify for, why, the documents required, and exactly
where to apply** on the official government portal.

The project is built to be **trustworthy and transparent**: it guides and informs, but always
hands you off to the genuine portal to submit — it never asks for your credentials and never
files anything for you.

## Why GovEligify

| Capability | Scattered govt portals | A generic search | **GovEligify** |
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
- **Browse by need** — an Explore section grouping schemes into 8 citizen-friendly categories
  (agriculture, education, health, employment, housing, women & child, seniors, finance), each
  with its own detail page.
- **Certificates guide** — what each common certificate is for, who issues it, the documents
  and steps to get it, and where to apply.
- **SEO-first** — server-rendered pages, per-page metadata, `sitemap.xml`, `robots.txt`, and
  JSON-LD structured data (`Organization`, `WebSite`, `GovernmentService`, `FAQPage`,
  `BreadcrumbList`).
- **Accessible & responsive** — keyboard-navigable, `aria-live` chat log, WCAG-minded colour
  contrast, and a mobile-first layout that's been tuned at phone / tablet / desktop.
- **On-brand by design** — the Indian-flag palette (saffron / white / green / navy), Sora +
  Inter typography, original vector illustrations, and **Lucide line icons only — no emojis**
  anywhere in the product.
- **A genuinely funny 404** — a deadpan "Eligibility Assessment Report" that returns a verdict
  of *Not Eligible* for the page you were looking for.

## Project Status

> [!NOTE]
> **Phase 1 (current): a complete front end on sample data.** The full marketing site and the
> chatbot UI are built and working, but the bot runs on a **local mock engine** over ~17
> clearly-labelled **sample** schemes — there is **no live LLM, database, or scraped data
> yet**. The architecture exposes clean seams so Phase 2 can drop in the real data pipeline
> and AI **without rewriting the UI** (see [How It Works](#how-it-works)).

## Tech Stack

| Area | Choice |
|---|---|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) (strict) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Icons | [lucide-react](https://lucide.dev/) |
| Markdown (chat) | [react-markdown](https://github.com/remarkjs/react-markdown) + [remark-gfm](https://github.com/remarkjs/remark-gfm) |
| Fonts | Sora + Inter via `next/font` |
| Testing | [Playwright](https://playwright.dev/) (e2e) |
| Package manager | [pnpm](https://pnpm.io/) |
| Hosting | Cloudflare Pages or Vercel |

## Getting Started

### Prerequisites

- **Node.js 18.17+** (Node 20 LTS recommended)
- **pnpm** (`npm install -g pnpm`)

### Run locally

```bash
# 1. Clone
git clone https://github.com/anandsundaramoorthysa/goveligify.git
cd goveligify

# 2. Install dependencies
pnpm install

# 3. Start the dev server
pnpm dev
# open http://localhost:3000
```

That's it — there are **no environment variables or API keys** required in Phase 1; the bot
runs entirely on the local mock engine.

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the development server (http://localhost:3000) |
| `pnpm build` | Create a production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run ESLint |
| `pnpm typecheck` | Type-check with `tsc --noEmit` |
| `pnpm test:e2e` | Run the Playwright e2e suite |

> First time running e2e? Install the browser once: `pnpm exec playwright install chromium`.

## How It Works

GovEligify is intentionally built around two **swap seams**, so today's mock implementation
and tomorrow's real backend share the exact same interfaces — UI and page code never change.

```
                            ┌─────────────────────────────┐
   Marketing pages  ─────▶  │  SchemeProvider             │   src/lib/data.ts
   (Explore, detail,        │  getAllSchemes / bySlug /   │
    Certificates, …)        │  filter / search            │
                            └─────────────┬───────────────┘
                                          │  Phase 1: typed sample data (src/data/*)
                                          │  Phase 2: real API / pipeline (MyScheme,
                                          │           data.gov.in, state portals)
                                          ▼
   Chat UI  ──▶  POST /api/chat  ──▶  ┌──────────────────┐
   (ChatScreen)                       │  ChatEngine      │   src/lib/chat/engine.ts
                                      │  send() / greet  │
                                      └────────┬─────────┘
                                               │  Phase 1: mockEngine (keyword intents)
                                               │  Phase 2: RAG + LLM (retrieval, prompts,
                                               │           streaming, cache, guardrails)
                                               ▼
                                      matched Scheme[] ──▶ rendered as result cards
```

- **Data seam — `SchemeProvider`:** every page and the bot read scheme/certificate data
  through one async interface. Phase 1 is backed by typed files in `src/data/`; Phase 2 swaps
  in a real provider with zero caller changes.
- **Bot seam — `ChatEngine`:** the chat UI calls `POST /api/chat`, which delegates to a
  `ChatEngine`. Phase 1 is a deterministic `mockEngine`; Phase 2 replaces its internals with a
  real RAG/LLM stack — the React components are untouched.

For a deeper dive, see [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## Project Structure

```
goveligify/
├─ public/
│  ├─ brand/                 # shipped logo + favicon
│  └─ images/                # citizen illustrations (WebP)
├─ src/
│  ├─ app/                   # App Router: pages, /api/chat, sitemap.ts, robots.ts, og image
│  ├─ components/
│  │  ├─ brand/              # Logo / mark
│  │  ├─ layout/             # Header, Footer, SiteShell, Container, PageHero
│  │  ├─ ui/                 # Button, Badge, SectionHeading
│  │  ├─ marketing/          # Hero, CategoryGrid, StatBand, CitizensBand, FAQ, …
│  │  ├─ chat/               # ChatScreen + screen/* (full-screen assistant)
│  │  ├─ illustrations/      # SpotIllustration, HeroArt (original brand vectors)
│  │  └─ seo/                # JsonLd
│  ├─ data/                  # sample schemes, certificates, categories, faq
│  └─ lib/                   # site, types, utils, data (provider), chat (engine/mock/client), seo
├─ tests/e2e/                # Playwright tests
└─ brand/                    # design source-of-truth (not shipped)
```

## Deployment

GovEligify is a standard Next.js app — statically-rendered marketing pages plus a dynamic
`/api/chat` route.

- **Cloudflare Pages** — via [`@cloudflare/next-on-pages`](https://github.com/cloudflare/next-on-pages).
- **Vercel** — zero-config import of the repository.

```bash
pnpm build   # produces the production build the host will serve
```

## Roadmap

**Phase 1 — front end on sample data (done)**

- [x] Responsive, SEO-optimised marketing site
- [x] Full-screen conversational assistant (mock engine)
- [x] Explore + scheme detail pages, certificates + detail pages
- [x] Original brand illustration system + funny 404
- [x] Playwright e2e coverage

**Phase 2 — make it real**

- [ ] Live scheme/certificate **data pipeline** (MyScheme, data.gov.in, state portals) + refresh job
- [ ] Real **RAG + LLM** backend behind `/api/chat` (retrieval, prompts, streaming, caching, rate-limiting)
- [ ] **Structured eligibility matching** (age / income / occupation / state / category)
- [ ] **Multilingual** answers (English, Tamil, Hindi, and more)
- [ ] Admin dashboard (analytics + wrong-answer reports)
- [ ] Official-portal **link verification**

## Contributing

Contributions are very welcome — bug fixes, sample-data accuracy, accessibility, new features,
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

Released under the **MIT License**. You are free to use, modify, and distribute it under the
terms of the license. See [LICENSE](LICENSE) for the full text.

## Contact

- **Anand Sundaramoorthy** — [sanand03072005@gmail.com](mailto:sanand03072005@gmail.com?subject=About%20GovEligify)
- **GitHub:** [@anandsundaramoorthysa](https://github.com/anandsundaramoorthysa)

## Acknowledgements

Built with these excellent open-source projects and resources:

- [Next.js](https://nextjs.org/) — the React framework
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling
- [lucide-react](https://lucide.dev/) — the icon set used throughout the UI
- [react-markdown](https://github.com/remarkjs/react-markdown) + [remark-gfm](https://github.com/remarkjs/remark-gfm) — chat answer rendering
- [Playwright](https://playwright.dev/) — end-to-end testing
- Methodology inspired by **inigo**, a multilingual RAG admission chatbot
- Republic-Day citizen illustrations adapted from a [Vecteezy](https://www.vecteezy.com/) vector set

> Data sources for Phase 2 will include the publicly available [MyScheme](https://www.myscheme.gov.in/),
> the [Open Government Data Platform (data.gov.in)](https://data.gov.in/), and state service portals.
