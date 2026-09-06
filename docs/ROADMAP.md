# CheckMyEligibility — Development Roadmap

Student-focused AI assistant for Indian government education schemes.

---

## Status Legend

- `[x]` Done
- `[ ]` Pending
- `[~]` In progress

---

## Foundation (Complete)

- [x] Brand identity — logo, palette (saffron, green, navy), typography (Sora + Inter)
- [x] Marketing site — Home, About, Explore, Certificates, How it works, FAQ, Privacy, Terms, 404
- [x] Chat UI shell — `/chat` full-screen assistant (bubbles, chips, composer, transcript persistence)
- [x] `/api/chat` route with payload guards (64 KB cap, 2000-char message, 30-item history)
- [x] SEO — JSON-LD (GovernmentService, FAQPage, BreadcrumbList), sitemap, robots.txt, OG images
- [x] Security hardening — CSP, X-Frame-Options, HSTS, noreferrer on external links
- [x] Domain `checkmyeligibility.in` purchased and deployed on Vercel

---

## Phase 2 — Live AI Assistant (Complete)

**Goal:** replace mock engine with production LLM + validated scheme data.

### Data

- [x] 200+ manually validated scheme files in `src/data/schemes/` (one TypeScript file per scheme)
- [x] Full eligibility, benefits, required documents, FAQs, and official portal URLs for each scheme
- [x] Summary length standardised to 155 chars for SEO meta descriptions
- [x] Eligibility criterion types normalised across all schemes
- [x] `pnpm check:urls` script to audit for missing or root-level portal URLs
- [x] `lastVerified` dates set on all scheme files

### Backend

- [x] Vercel AI SDK v6 with Groq (primary LLM) + Google Gemini (embeddings)
- [x] Qdrant Cloud vector store for semantic scheme retrieval
- [x] Neon PostgreSQL for rate limiting and thread persistence
- [x] Input guardrail (sanitisation, prompt injection detection, off-topic blocking)
- [x] Output guardrail (no application submission claims, no eligibility guarantees)
- [x] Per-IP rate limiting (sliding window, Neon-backed)
- [x] Multi-turn thread persistence (signed JWT cookie + Neon)
- [x] Chat logging (anonymised IP hash, Neon)
- [x] Eval scripts: guardrail, retrieval, groundedness, coherence

### Features

- [x] Scheme comparison flow (side-by-side verdict table for two or more schemes)
- [x] Grievance guidance flow (complaint portal and process for rejected applications)
- [x] Dynamic Explore page metadata using live scheme count
- [x] GovernmentService JSON-LD with ApplyAction potentialAction

---

## Phase 3 — Depth and Reach (Planned)

### AI improvements

- [ ] Structured eligibility matching — SQL-level numeric filters (income, age, marks) for
  high-confidence boundary conditions, layered on top of retrieval
- [ ] Multilingual answers — Tamil, Hindi, and additional regional languages
- [ ] Retrieval quality improvements — re-ranking, hybrid search (dense + sparse)
- [ ] Answer quality dashboard — track unhelpful responses from user feedback

### Data

- [ ] 300+ additional schemes (agriculture, health, housing, employment, senior citizens)
- [ ] Scheduled portal-link verification pipeline
- [ ] Certificates guide expansion (all major central + state certificates)
- [ ] State-specific scheme coverage for all 28 states + UTs

### Platform

- [ ] Admin dashboard — analytics, wrong-answer flagging, scheme update queue
- [ ] User-reported corrections workflow
- [ ] Structured sitemap for state + category filtered pages

---

## Phase 4 — Expansion (Long-term)

- [ ] Non-student beneficiary groups: farmers, senior citizens, women, persons with disabilities
- [ ] Certificate application guide with step-by-step walkthroughs
- [ ] Official-portal status monitoring (detect when portals go down)
- [ ] Mobile app (React Native or PWA)
