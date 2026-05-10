<!--
Purpose: agent-facing task map for xrisk-pause-game.
Context: this is the simple session-start map/cache for grouped task
definitions under tasks/. It is not a complete history of old task rows.
-->

# Tasks Map

## Status

- State: canonical session-start map/cache.
- Last updated: 2026-05-10.
- Project phase: handoff after non-content architecture, test, and deploy
  cleanup; content overhaul and observed playtesting remain next.

## Source Surfaces

| Surface | Role |
| --- | --- |
| `AGENTS.md` | root instruction map |
| `tasks/MAP.md` | simple roadmap/cache and routing surface for humans and agents |
| `tasks/*.md` | grouped task definitions and cached decision context |
| `design/domain-model.md` | domain model and resource mapping |
| `design/card-concepts.md` | card idea inventory |
| `design/cards-export.md` | generated card review export |
| `public/cards-map.html` | generated, ignored card graph; create with `npm run cards` |
| `literature/INDEX.md` and `literature/*` | source-note navigation and source-derived material |
| `package.json`, `vite.config.ts`, `playwright.config.ts` | app/test framework configuration |
| `.github/workflows/deploy.yml`, `wrangler.toml` | Cloudflare Pages deployment |

The old `TASKS.md` mega-tracker has been deleted. Use this map and grouped
task bundles instead. Do not add a parallel `ROADMAP.md`; keep session-start
state here and topic detail in `tasks/<group>.md`.

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
| Engine | Mostly settled | Pure TypeScript state, session transitions, card resolution, RNG, and tests. |
| Swipe/drag UX | Mostly settled | Tuned on real devices and E2E tested. |
| Resource system | Draft | Four visible resources: `pol`, `int`, `saf`, `alg`; mechanics may change with content overhaul. |
| Layout/theme | Mostly settled | Tailwind v4 theme CSS in `src/index.css`; safe to retheme within current UX direction. |
| Screens | Draft | Title, game, death, and tutorial screens exist but content/layout may change. |
| Card content | Draft | Existing card text is agent-written and needs expert review/rewrite. Card files export explicit arrays through `src/data/cards/groups.ts`. |
| Death messages | Placeholder | Expected to change with the content overhaul. |
| Tutorial | Placeholder | Scripted Deputy Director cards, not final designed content. |
| Portraits | Placeholder | Prior review found bad and borderline portrait styles. |
| Card map tool | Settled | `npm run cards` regenerates review artifacts. |
| Deploy workflow | Settled | Pushes to `main` run validation, regenerate card artifacts, build, and deploy to Cloudflare Pages. |
| Domain model | Mostly settled draft | Geopolitics additions still need Jörn validation. |
| Card concepts | Mostly settled draft | Concepts need Jörn approval before final implementation. |
| Achievements / collection | Not started | Deferred until after content overhaul. |
| Playtesting / outcomes | Not started | Playtest first, then record observed process and findings; do not pre-design rubrics unless Jörn asks. |
| Harness/environment | Mostly settled | See `tasks/harness.md`; keep maps current when structure changes. |

## Validation Map

Use the smallest relevant check set:

```bash
git diff --check
npm run check
npm run test:e2e
npm run cli auto 20
npm run cards
bash scripts/toc.sh AGENTS.md tasks/MAP.md
bash scripts/decrypt-literature.sh
.devcontainer/host-devcontainer-rebuild.sh
.devcontainer/host-vscode-tunnel.sh
```

Validation meanings:

- `npm run check`: typecheck, lint, build, and current Vitest unit tests,
  including engine/session/card/CLI/storage/share-text coverage.
- `npm run test:e2e`: Playwright mobile-flow coverage, not broad visual
  coverage.
- `npm run cli auto 20`: quick autoplay smoke check over available choices, not
  a full balance proof.
- `npm run cards`: generated card review artifacts; inspect diffs after card
  changes.
- `bash scripts/toc.sh AGENTS.md tasks/MAP.md`: cheap navigation check after
  docs/map edits; add touched task bundles as needed.
