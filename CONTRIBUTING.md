<p align="center">
  <img src="public/brand/favicon.svg" alt="CheckMyEligibility logo" width="72" height="72" />
</p>

# Contributing to CheckMyEligibility

Thanks for your interest in improving CheckMyEligibility! This is a community effort to make
Indian government schemes and certificates easier to find and claim — every contribution
helps, whether it's a bug fix, better scheme data, an accessibility tweak, a new feature, or
documentation.

## Building a scheme page (assigned contributors)

Each `[Scheme Page]` GitHub issue asks you to build one `/explore/<slug>` page. The workflow is
intentionally **one file per scheme** — this means multiple contributors can work in parallel with
zero merge conflicts.

### Steps

1. **Create your scheme file** — one TypeScript file in `src/data/schemes/`:

   ```
   src/data/schemes/your-scheme-slug.ts
   ```

2. **Export a named const** whose name is the camelCase of the filename:

   ```ts
   // src/data/schemes/pm-yasasvi-post-matric.ts
   import type { Scheme } from "@/lib/types";

   export const pmYasasviPostMatric: Scheme = {
     id: "pm-yasasvi-post-matric",
     slug: "pm-yasasvi-post-matric",
     // ... all other fields
   };
   ```

3. **Run `pnpm dev`** and verify your page appears at `http://localhost:3000/explore/<slug>`.

4. **Open a PR** — your PR should contain exactly **one new file**. Nothing else.

### Do NOT edit `src/data/schemes/index.ts`

`index.ts` is **auto-generated** at build time by `pnpm collect-schemes`. It scans the folder and
rebuilds itself automatically. If you edit it manually, your changes will be overwritten on the
next build, and if two people edit it simultaneously you get a merge conflict. Leave it alone.

---

## Scheme data field reference

Every scheme file exports a `Scheme` object. Here is what every field means, the format
required, and why it matters.

### Required fields

**`id`** — unique string identifier, kebab-case, matches the filename without `.ts`:
```ts
id: "pm-yasasvi-post-matric"
```

**`slug`** — used in the URL (`/explore/<slug>`). Must match `id` exactly:
```ts
slug: "pm-yasasvi-post-matric"
```

**`name`** — the official full scheme name, title-cased:
```ts
name: "PM YASASVI Post-Matric Scholarship"
```

**`summary`** — a plain-language description of the scheme in **155 characters or fewer**,
ending at a sentence boundary. This is used in search results, meta descriptions, and social
cards. Do not truncate mid-word or mid-phrase:
```ts
// Good (140 chars, ends at sentence):
summary: "Post-matric scholarship for OBC, EBC, and DNT students to pursue education beyond Class 10."

// Bad (too long):
summary: "Post-matric scholarship for students from Other Backward Classes, Economically Backward Classes, ..."
```

**`description`** — a full 300-600 word plain-language description covering: what the scheme
is, who it targets, how it works, and the key benefits. Write for a citizen, not a bureaucrat.

**`category`** — one of the following string literals:
```ts
"scholarship" | "fellowship" | "loan" | "internship" | "education" | "health"
| "agriculture" | "housing" | "employment" | "welfare" | "infrastructure" | "other"
```

**`level`** — whether this is a central or state scheme:
```ts
"central" | "state" | "central-state"
```

**`states`** — array of state slugs this scheme applies to. Use `"all-india"` for central
schemes available nationwide:
```ts
states: ["all-india"]                  // central schemes
states: ["tamil-nadu", "puducherry"]   // state-specific
```

**`eligibility`** — an array of `EligibilityCriterion` objects. Each criterion must have:
- `label`: short readable label (e.g. `"Annual income"`, `"Category"`, `"Age limit"`)
- `value`: the actual requirement in plain language
- `type`: one of the types below — choose the most specific one that applies

| `type` | Use for |
|---|---|
| `"income"` | Income or family income limits |
| `"age"` | Age ranges or limits |
| `"education"` | Academic qualifications, minimum marks, course level |
| `"gender"` | Gender or marital status requirements |
| `"caste-category"` | SC, ST, OBC, EWS, minority community, etc. |
| `"residence"` | Domicile, state residence, citizenship requirements |
| `"occupation"` | Employment, profession, institutional affiliation |
| `"other"` | Anything that genuinely does not fit the above (use sparingly) |

Example:
```ts
eligibility: [
  { label: "Category", value: "SC, ST, OBC, or EWS", type: "caste-category" },
  { label: "Annual family income", value: "Must not exceed Rs 2.5 lakh per annum", type: "income" },
  { label: "Age limit", value: "18 to 30 years", type: "age" },
  { label: "Domicile", value: "Must be a permanent resident of Tamil Nadu", type: "residence" },
  { label: "Qualification", value: "Must have passed Class 10 from a recognised board", type: "education" },
  { label: "Citizenship", value: "Indian citizen", type: "residence" },
],
```

**`benefits`** — string array of concrete, specific benefits. Prefer numbers over vague
descriptions:
```ts
// Good:
benefits: [
  "Monthly stipend of Rs 3,000 for day scholars",
  "Monthly stipend of Rs 6,000 for residential students",
  "Free study material provided by the institute",
]

// Bad:
benefits: ["Financial assistance provided"]
```

**`requiredDocuments`** — array of `{ name, mandatory, note? }` objects. Mark only genuinely
optional documents as `mandatory: false`. Use `note` for format or source guidance:
```ts
requiredDocuments: [
  { name: "Aadhaar Card", mandatory: true },
  { name: "Income certificate", mandatory: true, note: "Issued by a gazetted officer or Revenue Department" },
  { name: "Caste certificate", mandatory: false, note: "Required only for SC/ST/OBC applicants" },
],
```

**`officialPortalUrl`** — the URL where an eligible citizen can **start their application**.
This must be as specific as possible:

```ts
// Good: direct application portal
officialPortalUrl: "https://scholarships.gov.in/"

// Good: scheme-specific application page
officialPortalUrl: "https://medhasoft.bih.nic.in/"

// Bad: ministry homepage (not the application portal)
officialPortalUrl: "https://education.gov.in/"

// Bad: Wikipedia or news article
officialPortalUrl: "https://en.wikipedia.org/wiki/..."
```

Point to the **National Scholarship Portal** (`scholarships.gov.in`) for all NSP-integrated
schemes. For state schemes, use the state scholarship portal (not the state government
homepage). For central schemes not on NSP, use the scheme's own dedicated portal.

### Optional fields

**`shortName`** — a shorter display name used in compact UI (e.g. badges):
```ts
shortName: "PM YASASVI"
```

**`ministry`** — the ministry or department responsible for the scheme. Include the full
official name:
```ts
ministry: "Ministry of Social Justice and Empowerment"
```

**`applicationMode`** — how citizens apply:
```ts
applicationMode: ["online"]           // NSP, state portals
applicationMode: ["offline"]          // paper-based applications
applicationMode: ["online", "offline"] // both modes available
```

**`tags`** — array of short keywords for search and filtering. Include the scheme name
abbreviation, target group, exam names, and state if applicable:
```ts
tags: ["scholarship", "OBC", "post-matric", "NSP", "Class 11", "Class 12"]
```

**`faqs`** — array of `{ q, a }` FAQ pairs. Write questions from the citizen's perspective.
Keep answers factual and concise. Aim for 8-15 FAQs per scheme covering the most common
questions (eligibility, documents, deadlines, disbursement):
```ts
faqs: [
  { q: "Who is eligible?", a: "..." },
  { q: "What is the last date to apply?", a: "..." },
],
```

**`lastVerified`** — ISO date string (YYYY-MM-DD) when the scheme data was last checked
against the official source:
```ts
lastVerified: "2026-08-30"
```

**`source`** — where the data was sourced from. Use `"sample"` for manually researched data:
```ts
source: "sample"
```

---

## Data quality checklist

Before opening a PR with a new or updated scheme file, run through this checklist:

- [ ] `summary` is 155 characters or fewer and ends at a sentence boundary
- [ ] `description` is 300-600 words, written for a citizen (not a bureaucrat)
- [ ] All eligibility criteria have the most specific `type` possible (avoid `"other"`)
- [ ] `officialPortalUrl` points to the **application portal**, not a ministry homepage
- [ ] `benefits` include specific amounts (Rs amounts, percentages, durations) wherever known
- [ ] `requiredDocuments` distinguishes `mandatory: true` from `mandatory: false`
- [ ] `faqs` cover eligibility, application process, documents, and disbursement
- [ ] `lastVerified` is set to the date you verified the data (YYYY-MM-DD format)
- [ ] No em dashes (—) in any field — use commas or colons instead
- [ ] The page renders correctly at `http://localhost:3000/explore/<slug>`
- [ ] `pnpm lint && pnpm typecheck && pnpm build` all pass

---

## Ways to contribute

- **Report a bug** — open an [issue](https://github.com/anandsundaramoorthysa/checkmyeligibility/issues)
  with steps to reproduce, what you expected, and what happened (screenshots help).
- **Suggest a feature** — open an issue describing the problem it solves before writing code.
- **Improve scheme data** — fixes to eligibility, documents, benefits, or official-portal
  links are very welcome. Always cite the official source.
- **Build a scheme page** — if you've been assigned a `[Scheme Page]` issue, see the section above.
- **Pick up an issue** — anything labelled `good first issue` or `help wanted` is a great start.

> For anything non-trivial, please **open an issue first** so we can agree on the approach
> before you invest time.

## Development setup

**Prerequisites:** Node.js 20+ and pnpm.

```bash
git clone https://github.com/anandsundaramoorthysa/checkmyeligibility.git
cd checkmyeligibility
pnpm install
pnpm dev          # http://localhost:3000
```

The Explore pages and all scheme detail pages run with no environment variables. To run the
AI assistant locally, copy `.env.example` to `.env.local` and fill in the API keys — see
the [README environment variables section](README.md#environment-variables).

## Before you open a pull request

Please make sure these all pass:

```bash
pnpm lint         # ESLint
pnpm typecheck    # tsc --noEmit
pnpm build        # production build must succeed
pnpm test:e2e     # Playwright (run `pnpm exec playwright install chromium` once)
```

## Pull request process

1. **Fork** the repository and create a topic branch:
   `git checkout -b feat/short-description` (or `fix/...`, `docs/...`).
2. Make focused changes — one logical change per PR is easiest to review.
3. Run the checks above.
4. Write a clear commit message and PR description, and **link the related issue**
   (e.g. "Closes #12").
5. Open the PR against `main`. A maintainer will review and may request changes.

## House rules / code style

- **TypeScript, strict.** No `any` unless genuinely unavoidable.
- **No emojis in the product.** Use [Lucide](https://lucide.dev/) icons instead. Markdown
  docs are fine without them too.
- **The assistant never submits applications.** It guides users to official portals only —
  do not add anything that submits forms, collects credentials, or implies official affiliation.
- **Keep the data seam clean.** Pages and the bot read data through `src/lib/data.ts`
  (`SchemeProvider`) — don't bypass it.
- **Styling:** Tailwind, Indian-flag palette tokens; body text and buttons use navy/ink, with
  saffron/green reserved for accents and "eligible/success" states (contrast-safe).
- **Accessibility:** semantic HTML, keyboard support, sensible `aria-*`, and respect
  `prefers-reduced-motion`.

## Reporting security issues

Please **do not** file security vulnerabilities as public issues — see [SECURITY.md](SECURITY.md).

## Contribution licensing

CheckMyEligibility is **dual-licensed** — free for noncommercial use under the
[PolyForm Noncommercial License 1.0.0](LICENSE), with a separate
[commercial license](COMMERCIAL-LICENSE.md) for commercial use.

By submitting a contribution, you agree that:

- your contribution is provided under the project's [PolyForm Noncommercial License](LICENSE); **and**
- you grant the maintainer (Anand Sundaramoorthy) a perpetual, irrevocable, worldwide right to
  also include and license your contribution as part of CheckMyEligibility under the project's
  **commercial license** — this is required for the dual-licensing model to work; **and**
- you have the right to make the contribution (it's your own work, or you have permission).

You also agree to follow our [Code of Conduct](CODE_OF_CONDUCT.md).
