# CheckMyEligibility — Development Roadmap

Open-source project funded by the Dept. of Data Science, Loyola College, Chennai.
MIT License · [github.com/anandsundaramoorthysa/checkmyeligibility](https://github.com/anandsundaramoorthysa/checkmyeligibility)

---

## Status Legend
- `[x]` Done
- `[ ]` Pending
- `[~]` In progress

---

## Phase 1 — Foundation (Complete)

- [x] Brand identity — logo, palette (saffron / green / navy), typography (Sora + Inter)
- [x] Marketing site — Home, About, Explore, Certificates, How it works, FAQ, Privacy, Terms, 404
- [x] Scheme detail pages — `/explore/[slug]` (18 sample schemes, SSG)
- [x] Certificate detail pages — `/certificates/[slug]` (8 sample certificates, SSG)
- [x] Chat UI — `/chat` full-screen assistant with bubbles, chips, composer, transcript persistence
- [x] Mock chat engine — keyword intent matching over sample data (`src/lib/chat/mockEngine.ts`)
- [x] `/api/chat` route with payload guards
- [x] SEO — JSON-LD, sitemap, robots.txt, OG images, canonical URLs
- [x] Security hardening — CSP, X-Frame-Options, HSTS, noreferrer on external links
- [x] `site.ts` — added `github`, `institution`, `license` fields
- [x] `jsonld.ts` — added `sameAs`, `license`, `funder` to `organizationLd()`

---

## Phase 2 — Real Data + AI Chat (Next)

### Step 0 — Wire validated scheme data (prerequisite for everything below)
- [ ] Export validated schemes from Console → `validated-schemes.v1.json`
- [ ] Replace `src/data/schemes.ts` (18 samples) with Console export via `SchemeProvider` (`src/lib/data.ts`)
- [ ] All existing pages (`/explore`, `/explore/[slug]`, sitemap) auto-populate with real 3,237 schemes

### Step 1 — Real LLM chat engine
- [ ] Install Vercel AI SDK (`ai`) + free provider packages (Groq, Cerebras, Gemini free, OpenRouter `:free`)
- [ ] Build provider-fallback `ChatEngine` replacing `mockEngine`
- [ ] Answer caching (same question → 1 model call for thousands of users)
- [ ] Per-IP rate limiting
- [ ] Farmer-friendly "system busy, try again" message (no emoji, Lucide clock icon)
- [ ] Optional BYOK ("Advanced: connect your own key") — key stored in browser localStorage only, never sent to server
- [ ] System prompt + guardrails

### Step 2 — RAG store
- [ ] Embed validated scheme data into a vector store
- [ ] Wire retrieval into the chat engine for grounded answers

### Step 3 — Special chat features
- [ ] Scheme comparison — detect "compare X and Y" → 3 follow-up chips → definitive verdict + application pivot
- [ ] Rejection/grievance guidance — detect rejection → ask state + reason → state-specific portal links + timelines

---

## Phase 3 — Balance Pages

> Requires Step 0 (real data) to be complete first.

- [ ] **#11 — `/explore` refactor** — replace full scheme dump with category overview grid (8 cards with counts + "View all →" links)
- [ ] **#9 — `/explore/[category]`** — category landing pages with paginated scheme grid
- [ ] **#10 — `/explore/state/[state]`** — state landing pages with paginated scheme grid
- [ ] Update `sitemap.ts` — add category + state URLs
- [ ] Optional: `/search?q=` — keyword search results page (low priority; chatbot may cover this)

---

## Phase 4 — Site Content Updates

> Can be done any time, independent of data/AI.

- [ ] **Footer** — add MIT License badge + GitHub link; add "Supported by Dept. of Data Science, Loyola College, Chennai"; rename "Company" → "Project"; add GitHub + Team links
- [ ] **About page** — add "The project" section (open source, MIT, GitHub); add "Behind the data" section (human validation team); add institutional acknowledgement; add 5th value card "Human-verified"
- [ ] **How It Works** — add 4th step "Verified by humans"; update WE_DO list
- [ ] **FAQ** — add "About the project" group (who built this, open source, how data is validated); update existing accuracy + language FAQs
- [ ] **Home — StatBand** — update scheme count to 3,200+ once real data wired; remove "Figures illustrative" disclaimer
- [ ] **Home — Backed-by strip** — new component between CitizensBand and footer CTA: Loyola College + MIT License + GitHub

---

## Phase 5 — Team Showcase

> After validation sprint is complete.

- [ ] `/team` page — member cards by role (Project Leads / Platform Devs / Data Validators); contribution counts from Console feed; per-member AI summary
- [ ] Enrich `/about` with team section + link to `/team`
- [ ] Add "Team" to nav (`PRIMARY_NAV` + `FOOTER_NAV`)

---

## Phase 6 — Multilingual

- [ ] Hindi + Tamil chatbot responses
- [ ] Farmer "busy" message in Hindi + regional languages
- [ ] UI language switcher (types already carry `LangCode`)

---

## Phase 7 — Infra & Legal

- [x] Domain `checkmyeligibility.in` purchased via Spaceship (26-Jun-2026)
- [x] Attach domain to Vercel
- [ ] Real rate limiting (Upstash/Vercel WAF) once LLM is live
- [ ] Legal/compliance review before monetising (GODL/MyScheme terms, DPDP, GST)
- [ ] Data-refresh pipeline (re-validate changed schemes periodically)

---

## Data Source

Scheme data comes from the [CheckMyEligibility Console](https://github.com/anandsundaramoorthysa/goveligify-console) — an internal validation tool where a trained team of 18 manually reviews each of the 3,237 schemes against official government portals before it appears on this site.
