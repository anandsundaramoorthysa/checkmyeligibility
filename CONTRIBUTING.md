<p align="center">
  <img src="public/brand/favicon.svg" alt="CheckMyEligibility logo" width="72" height="72" />
</p>

# Contributing to CheckMyEligibility

Thanks for your interest in improving CheckMyEligibility! This is a community effort to make
Indian government schemes and certificates easier to find and claim — every contribution
helps, whether it's a bug fix, better sample data, an accessibility tweak, a new feature, or
documentation.

## Building a scheme page (assigned contributors)

Each `[Scheme Page]` GitHub issue asks you to build one `/explore/<slug>` page. The workflow is
intentionally **one file per scheme** â€” this means multiple contributors can work in parallel with
zero merge conflicts.

### Steps

1. **Create your scheme file** â€” one TypeScript file in `src/data/schemes/`:

   ```
   src/data/schemes/your-scheme-slug.ts
   ```

2. **Export a named const** whose name is the camelCase of the filename:

   ```ts
   // src/data/schemes/pm-yasasvi-post-matric.ts
   import type { Scheme } from "@/lib/types";

   export const pmYasasviPostMatric: Scheme = {
     id: "pm-yasasvi-post-matric",
     slug: "pm-yasasvi-post-matric-xxxxxxxx",   // copy the exact slug from your issue
     // â€¦ all other fields
   };
   ```

3. **Run `pnpm dev`** and verify your page appears at `http://localhost:3000/explore/<slug>`.

4. **Open a PR** â€” your PR should contain exactly **one new file**. Nothing else.

### Do NOT edit `src/data/schemes/index.ts`

`index.ts` is **auto-generated** at build time by `pnpm collect-schemes`. It scans the folder and
rebuilds itself automatically. If you edit it manually, your changes will be overwritten on the
next build, and if two people edit it simultaneously you get a merge conflict. Leave it alone.

---

## Ways to contribute

- **Report a bug** — open an [issue](https://github.com/anandsundaramoorthysa/checkmyeligibility/issues)
  with steps to reproduce, what you expected, and what happened (screenshots help).
- **Suggest a feature** — open an issue describing the problem it solves before writing code.
- **Improve sample data** — the schemes/certificates in `src/data/` are sample data. Fixes to
  eligibility, documents, or official-portal links are very welcome (cite a source).
- **Build a scheme page** â€” if youâ€™ve been assigned a `[Scheme Page]` issue, see the section above.
- **Pick up an issue** — anything labelled `good first issue` or `help wanted` is a great start.

> For anything non-trivial, please **open an issue first** so we can agree on the approach
> before you invest time.

## Development setup

**Prerequisites:** Node.js 18.17+ (Node 20 recommended) and pnpm.

```bash
git clone https://github.com/anandsundaramoorthysa/checkmyeligibility.git
cd checkmyeligibility
pnpm install
pnpm dev          # http://localhost:3000
```

No API keys or environment variables are needed in Phase 1.

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
- **No emojis in the product.** Use [Lucide](https://lucide.dev/) icons instead. (Markdown
  docs are fine without them too.)
- **The assistant never submits applications.** It guides users to official portals only — do
  not add anything that submits forms, collects credentials, or implies official affiliation.
- **Keep the data seam clean.** Pages and the bot read data through `src/lib/data.ts`
  (`SchemeProvider`) and the bot through the `ChatEngine` interface — don't bypass them.
- **Styling:** Tailwind, Indian-flag palette tokens; body text/buttons use navy/ink, with
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
