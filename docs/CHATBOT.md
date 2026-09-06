# CheckMyEligibility — Chatbot Development Guide

> End-to-end technical reference for the AI assistant at `/chat`.

---

## Overview

The CheckMyEligibility chatbot helps **Indian students** (UG, PG, PhD, Diploma, professional
courses) discover government schemes — scholarships, fellowships, education loans, and grants
— they are eligible for.

The user describes their situation in plain language and the bot replies with matching schemes,
eligibility details, required documents, and a direct link to apply on the official government
portal.

The bot **never submits applications** — it only points users to the official government
portal. This is intentional for trust, consent, and legal safety.

---

## Current Status

| Layer | Status |
|-------|--------|
| Chat UI (`/chat`) | Live |
| API route (`POST /api/chat`) | Live — Groq + Qdrant + Gemini |
| Input guardrail | Live |
| Rate limiting (per-IP, Neon) | Live |
| Qdrant semantic retrieval | Live |
| Groq LLM streaming (Vercel AI SDK) | Live |
| Gemini embeddings pipeline | Live |
| Thread persistence (Neon) | Live |
| Scheme comparison flow | Live |
| Grievance guidance flow | Live |
| Multilingual (Tamil, Hindi) | Planned — Phase 3 |

---

## Architecture

```
Browser (/chat page)
  |
  +-- ChatScreen (React client component)
       |
       +-- fetch  POST /api/chat  (Next.js route on Vercel)
                    |
                    +-- Guardrail (input sanitise + check)
                    +-- Rate limiter (Neon PostgreSQL, per-IP)
                    +-- Retrieval (Qdrant, Gemini embeddings)
                    +-- Intent detection (comparison / grievance / standard)
                    +-- streamText (Vercel AI SDK) --> Groq
                    +-- Guardrail (output validate)
                    +-- Thread store (Neon, cookie-based)
                    +-- Chat logger (Neon, anonymised IP hash)
```

---

## Target Audience

**Primary:** Indian students.
- Undergraduate (UG)
- Postgraduate (PG)
- PhD / Research scholars
- Diploma students
- Professional course students (engineering, medical, law, etc.)

**Why students first?** Students frequently search for scholarships, fellowships, and grants
scattered across multiple government portals. They are comfortable using AI assistants, and
a student-focused implementation is easier to validate before expanding to other groups.

---

## File Structure

```
src/
+-- app/
|   +-- api/chat/route.ts          <- POST /api/chat (full AI pipeline)
|   +-- chat/page.tsx              <- /chat full-screen page
|
+-- components/chat/
|   +-- ChatScreen.tsx             <- main orchestrator (100dvh client island)
|   +-- SchemeResultCard.tsx       <- scheme result cards with "Apply" link
|   +-- screen/                   <- UI sub-components (bubbles, composer, chips...)
|
+-- lib/chat/
    +-- client.ts                  <- fetch wrapper for POST /api/chat
    +-- systemPrompt.ts            <- prompt templates, intent detection utilities
    +-- retrieval.ts               <- Qdrant vector search + result formatting
    +-- guardrail.ts               <- input sanitise/check + output validation
    +-- rateLimiter.ts             <- per-IP sliding window (Neon)
    +-- threadStore.ts             <- JWT cookie + Neon thread persistence
    +-- embedder.ts                <- Gemini text embedding
    +-- qdrant.ts                  <- Qdrant client wrapper
    +-- chatLogger.ts              <- anonymised turn logging (Neon)
    +-- adminAuth.ts               <- X-Admin-Key guard for /api/embed routes
```

---

## Intent Detection

The system prompt module detects three intent types before the LLM call:

### Standard query
Default. The assistant retrieves relevant schemes from Qdrant and generates a plain-language
eligibility explanation with scheme result cards.

### Comparison intent
Triggered by `isComparisonIntent()` — checks for keywords like "compare", "difference
between", "which is better", "vs". The system prompt switches to a structured comparison
template that produces a verdict table showing eligibility, benefits, and documents side by
side for two or more schemes.

### Grievance intent
Triggered by `isGrievanceIntent()` — checks for keywords like "rejected", "complaint",
"appeal", "grievance", "not received". The assistant identifies the responsible ministry or
state portal and provides the correct grievance redressal URL and the step-by-step process
to raise a complaint.

---

## Retrieval Pipeline

```
User message
  |
  v
Gemini embed (text-embedding-004)
  |
  v
Qdrant vector search (top-k, cosine similarity, scheme_embeddings collection)
  |
  v
{ scheme, chunk, score }[] injected into system prompt as grounding context
```

Scheme chunks are pre-embedded and stored in Qdrant by `pnpm embed:schemes`. The collection
name is `scheme_embeddings` by default (configurable via `QDRANT_COLLECTION`).

---

## System Prompt Design

`src/lib/chat/systemPrompt.ts` assembles the messages array sent to Groq:

1. **System message** — role definition, grounding instructions, safety rules (never claim
   to submit, never guarantee eligibility, always cite official portal URL).
2. **Grounding context** — retrieved scheme chunks injected as assistant context.
3. **History** — last N turns from the thread store (capped at `MAX_HISTORY`).
4. **User message** — sanitised user input.

---

## Guardrails

### Input guardrail (`checkInput`)
Blocks requests matching any of:
- Prompt injection patterns (`ignore previous instructions`, `you are now`, etc.)
- Political content (party names, electoral topics)
- Medical advice requests
- Requests for personal data or credentials
- Off-topic requests (not related to Indian government schemes or certificates)

### Output guardrail (`validateOutput`)
Scans the completed response for:
- Claims of application submission on the user's behalf
- Eligibility guarantees ("you are guaranteed to receive")
- Disallowed external URLs

---

## Rate Limiting

`src/lib/chat/rateLimiter.ts` uses Neon as the backing store. Per-IP requests are counted
in a sliding window. The limit and window are defined as constants at the top of the file.
Returns HTTP 429 with a retry-after message when exceeded.

Requires `DATABASE_URL` to be set. Without it, rate limiting is disabled (suitable for
local development).

---

## Thread Persistence

`src/lib/chat/threadStore.ts` maintains multi-turn context across page refreshes:

- **Cookie issued:** on the first message, a signed JWT (`cme-thread`) is set in the
  response. The signing secret is `SESSION_SECRET` or falls back to `CHATBOT_ADMIN_KEY`.
- **Cookie read:** on subsequent messages, the cookie is verified and the thread ID
  extracted to fetch prior turns from Neon.
- **Fallback:** if the cookie is absent, expired, or `DATABASE_URL` is not set, the request
  is processed statelessly (no prior context).
- **TTL:** thread rows are expired automatically.

---

## Local Development

**Explore pages only (no API keys):**
```bash
pnpm dev   # http://localhost:3000/explore
```

**Full assistant with live LLM:**
```bash
cp .env.example .env.local
# Fill in: GROQ_API_KEY, GEMINI_API_KEY, QDRANT_URL, QDRANT_API_KEY, DATABASE_URL
pnpm dev   # http://localhost:3000/chat
```

---

## Eval Scripts

| Command | What it checks |
|---|---|
| `pnpm eval:guardrail` | Known safe inputs pass; known unsafe inputs are blocked |
| `pnpm eval:retrieval` | Precision and recall of Qdrant retrieval over test queries |
| `pnpm eval:groundedness` | LLM answers cite schemes from the retrieved context |
| `pnpm eval:coherence` | Multi-turn follow-up responses stay coherent and relevant |
| `pnpm eval:multilingual` | (Planned) Responses in Tamil/Hindi are factually consistent |

---

## Adding a New Intent Flow

1. Add a detection function in `systemPrompt.ts` (e.g. `isNewIntent()`).
2. Add a new prompt template function that returns the `Prompt` array for that intent.
3. In `route.ts`, call the detection function and switch the prompt builder before the
   `streamText` call.
4. Add eval cases to `eval-coherence.ts` for the new flow.
