# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

A single-page personal portfolio for Eshimov Azizbek, read by four audiences with equal weight:

- **Investors and backers** judging whether to fund or back Portail and future products.
- **Collaborators and clients** deciding whether to hire Azizbek or build something together.
- **Admissions and programs** (universities, accelerators, competitions) evaluating a young founder.
- **Peers and the AI scene**: other builders forming a view of Azizbek's work and reputation.

No audience outranks the others. The same page has to hold up for all four, usually on a first, short visit arriving from a shared link.

## Product Purpose

The site shows who Azizbek is and what they have shipped, so that each audience can act: back, hire, admit, or connect. Success means a visitor leaves convinced the work is real and knows how to make contact.

## Positioning

A 15-year-old AI engineer from Samarkand whose flagship, Portail, is a live product valued at $450K. The work is AI-assisted: AI writes the code, Azizbek holds the architecture, the judgment and the taste. The claim no neighboring portfolio can copy is the combination of age, a live and valued flagship, and an openly stated way of working with AI.

## Operating Context

- Visitors usually arrive from a shared link (pitch, application, DM or social post) and skim before deciding whether to click through to a product.
- The primary action is contact by email (`info@portail.cc`); the secondary action is visiting a live product.
- Azizbek directs AI-assisted development of this site as well as the products it shows.

## Capabilities and Constraints

- Next.js 16 (App Router) with `output: "export"`: a fully static site with no server, no API routes and no image optimizer (`images.unoptimized`).
- Deployed to GitHub Pages at www.azizbek.xyz from `ItzAzizbek/www.azizbek.xyz` (see `.github/workflows/deploy.yml`). The codebase is mirrored; eshimov.uz is served from Netlify and is out of scope for the Pages workflow.
- Current page sections: Hero, About, Selected work, Stack, Contact. A Photography section exists in code (`src/components/sections/Photography.tsx`, data in `src/lib/photos.ts`) but is not mounted and has no photos yet.
- Project data lives in `src/lib/projects.ts`.

**Open decisions**

- **Project list:** Azizbek will supply the list of projects to show. Until then, Portail is the only confirmed project. Clevora AI is currently on the site but not yet confirmed for the new list.
- **Known stale copy to reconcile:**
  - Portail's valuation is **$450K**. The $300K mentions in `layout.tsx` metadata, `About.tsx` and `projects.ts` are out of date.
  - The About paragraph says Portail was "built manually, character by character", and the footer says "Hand-coded". Both contradict the confirmed AI-assisted workflow (principle 02, "AI writes, I decide").

## Brand Commitments

- Name order: **Eshimov Azizbek** (family name first). Short mark in the nav: "Eshimov".
- Title used across the site: **AI Engineer**, based in Samarkand.
- Azizbek's own stated principles, used on the site and binding in voice:
  1. Models are a means: context, memory and routing are the real engineering.
  2. AI writes, I decide: generation is delegated, judgment isn't.
  3. Velocity: ship a working surface in a day, then iterate against real users.
  4. Useful on day one: no vapor, no decks, links you can click.
- Voice: short, confident, plain. Claims are backed by something the visitor can click or check.

## Evidence on Hand

- **Portail** (https://portail.cc): unified AI workspace. Frontier models in one chat with shared context, model switching mid-conversation, memory, document uploads, branching, and bring-your-own-key. Valued at $450K. Public facts read from portail.cc on 2026-11-02: 354 models from 58 labs in one thread, 157 releases with public notes, 23 connected apps, scheduled tasks, Telegram access, free tier plus $20, $80 and $250 plans. Usage: 110M tokens processed (stated by the owner). Started building Portail in June 2026 (stated by the owner).
- **Personal facts:** age 15, IELTS 8.0, SAT 1370, based in Samarkand. Age changes yearly; keep it current.
- **Contact:** info@portail.cc. Profiles: linkedin.com/in/azizbek-eshimov, github.com/vazulies, x.com/Esh1mov (@Esh1mov).
- **Stack list:** in `src/components/sections/Stack.tsx`.
- **Photography:** a hobby with a section ready in code, but no photos supplied yet.

**Absent; do not fabricate:** testimonials, user or revenue numbers, press, awards, client names, investor names, or any metric beyond the valuation and the personal facts above.

## Roles and Ventures

Stated by the owner on 2026-11-02; sites read the same day.

- **BazaarGG** (bazaargg.com): CFO. Russian-language marketplace for game accounts, currency, items and top-ups with escrow ("guarantor") deals.
- **Okayable** (okayable.com): CTO and co-founder. AI tutor for IELTS across four skills. Its page lists the team; its headline numbers (learners, score gains, testimonials) are unverified and must not be repeated here.
- **1600.sh** (1600.sh): founder of this small nonprofit. Digital SAT prep: adaptive mock tests, a study plan, 29 skills.
- **Clevora AI**: founder, 15 December 2025 to 1 June 2026 (year inferred). Site is no longer available. Pivoted into Portail in June 2026.

## Education and Programs

Stated by the owner on 2026-11-02. No dates or outcomes were given for the programs; do not invent any.

- 2017 to 2025: public school.
- 2021: finished his first frontend courses at 10/11 years old.
- 2025 to now: Sodiq School, a private boarding school, on a full scholarship.
- Programs: IT Park Incubation Program; Startup Booster acceleration program by United Ventures.

## Product Principles

1. **Every claim is checkable.** Live links, real figures, nothing invented. If it can't be clicked or verified, it doesn't go on the page.
2. **Portail leads.** The flagship carries the case; other work supports it rather than competing with it.
3. **One page, four readers.** The same facts must read as credible to an investor, a collaborator, an admissions reviewer and a peer, without splitting into audience-specific versions.
4. **Tell the workflow truthfully.** AI-assisted, with judgment held by Azizbek. Never imply hand-typing or hide the AI.
5. **One story everywhere.** Figures, titles and facts match across every section and the metadata.
