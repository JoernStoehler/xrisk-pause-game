<!--
Purpose: agent-facing task map for xrisk-pause-game.
Context: this is the simple session-start map/cache for grouped task
definitions under tasks/. It is not a complete history of old task rows.
-->

# Tasks Map

## Status

- State: canonical session-start map/cache.
- Last updated: 2026-05-10.
- Project phase: content overhaul and harness simplification.

## Source Surfaces

| Surface | Role |
| --- | --- |
| `AGENTS.md` | root instruction map |
| `tasks/MAP.md` | simple roadmap/cache and routing surface for humans and agents |
| `tasks/*.md` | grouped task definitions and cached decision context |
| `design/domain-model.md` | domain model and resource mapping |
| `design/card-concepts.md` | card idea inventory |
| `design/cards-export.md` | generated card review export |
| `public/cards-map.html` | generated card graph |
| `literature/INDEX.md` and `literature/*` | source-note navigation and source-derived material |
| `package.json`, `vite.config.ts`, `playwright.config.ts` | app/test framework configuration |
| `.github/workflows/deploy.yml`, `wrangler.toml` | Cloudflare Pages deployment |

The old `TASKS.md` mega-tracker should be deleted after migration. Use this map
and grouped task bundles instead. Do not add a parallel `ROADMAP.md`; keep
session-start state here and topic detail in `tasks/<group>.md`.

## Current Priority Map

| Bundle | Current role | Start here |
| --- | --- | --- |
| Content | source-grounded domain/content overhaul, card quality, balance process | `tasks/content.md` |
| App | engine, UI, gameplay, playability, app validation | `tasks/app.md` |
| Deploy | Cloudflare Pages deployment, release checks, post-deploy outcome tracking | `tasks/deploy.md` |
| Playtesting | player feedback loops, learning objectives, and quality gates | `tasks/playtesting.md` |
| Harness | agent setup, skills, task routing, Codex/devcontainer process | `tasks/harness.md` |

## Authority Boundaries

Ask Jörn before changing:

- the core thesis or political model;
- player-facing terminology for central concepts;
- card concepts or card groups that affect the takeaway message;
- major UX direction or final feature set;
- expert predictions, including claims about what Jörn or another expert model
  would predict under a pause treaty.

Agents can usually act independently on code, tests, refactors, UI
implementation details, generated artifact refreshes, wording drafts, and
focused design proposals. Drafts become settled only after the relevant review
boundary is cleared.

## Maturity Map

| Component | Status | Notes |
| --- | --- | --- |
| Engine | Mostly settled | Pure TypeScript state, card resolution, RNG, tutorial logic, and tests. |
| Swipe/drag UX | Mostly settled | Tuned on real devices and E2E tested. |
| Resource system | Draft | Four visible resources: `pol`, `int`, `saf`, `alg`; mechanics may change with content overhaul. |
| Layout/theme | Mostly settled | Tailwind v4 theme CSS in `src/index.css`; safe to retheme within current UX direction. |
| Screens | Draft | Title, game, death, and tutorial screens exist but content/layout may change. |
| Card content | Draft | Existing card text is agent-written and needs expert review/rewrite. |
| Death messages | Placeholder | Expected to change with the content overhaul. |
| Tutorial | Placeholder | Scripted Deputy Director cards, not final designed content. |
| Portraits | Placeholder | Prior review found bad and borderline portrait styles. |
| Card map tool | Settled | `npm run cards` regenerates review artifacts. |
| Domain model | Mostly settled draft | Geopolitics additions still need Jörn validation. |
| Card concepts | Mostly settled draft | Concepts need Jörn approval before final implementation. |
| Achievements / collection | Not started | Deferred until after content overhaul. |
| Playtesting / outcomes | Not started | Needs objective definitions and quality gates before broader public loops. |
| Harness/environment | In migration | See `tasks/harness.md`. |

## Validation Map

Use the smallest relevant check set:

```bash
git diff --check
npm run check
npm run test:e2e
npm run cli auto 20
npm run cards
bash scripts/decrypt-literature.sh
.devcontainer/host-devcontainer-rebuild.sh
.devcontainer/host-vscode-tunnel.sh
```

Validation meanings:

- `npm run check`: typecheck, lint, build, and current Vitest unit tests.
- `npm run test:e2e`: Playwright mobile-flow coverage, not broad visual
  coverage.
- `npm run cli auto 20`: quick left/right autoplay smoke check, not a full
  balance proof.
- `npm run cards`: generated card review artifacts; inspect diffs after card
  changes.
