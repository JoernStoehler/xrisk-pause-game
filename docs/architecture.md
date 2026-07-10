# Architecture Considerations

Status: current agent assessment for this worktree, not a Jörn-approved domain
model.

Purpose: make the architecture reasoning visible enough that future agents can
update it when the context changes, instead of trusting an opaque conclusion.

## Project Context

The game is a serious Reigns-style mobile web game about directing an
international AI pause agency. The core teaching target is that a pause is not
quiet waiting; it is active crisis management while safety work tries to catch
up.

Current content in this branch is dummy architecture scaffolding. It is not the
approved expert model. The architecture is optimized for the next work loop:

1. Jörn or source notes improve the expert model.
2. Agents turn mechanisms into playable events.
3. E2E checks, playtest exports, and playtests reveal unrealistic or misleading
   dynamics.
4. Agents revise rates, state, cards, and review surfaces.
5. Jörn reviews the expert-grounded claims that matter.

## Future Dev-Agent Stories

These are speculative. They should be revised when observed work differs.

| Story | Expected frequency | Error cost | Architecture implication |
|---|---:|---:|---|
| Add a new visible mechanism fast | high | medium | one local card module should usually be enough |
| Tune rates/timing after playtests | high | high | rates must be local, explicit, and testable |
| Add delayed visible follow-up | medium-high | high | history/time queries must be easy to grep |
| Revise aggregate state | medium-high | medium-high | one explicit state schema is acceptable and navigable |
| Debug why a run happened | high | high | event log must include seed, draw time, rates, and choices |
| Model hidden/offscreen causal state | real but deferred | high | add a scheduler later if visible discovery cards become hacks |
| Add exact deadline mechanics | low-medium initially | medium | defer queue until exact scheduled commitments dominate |

Jörn clarified two important priors during this cleanup:

- Initial serious modeling can approximate many dynamics as independent
  exponential/Poisson processes with per-time rates.
- Adding mechanisms fast matters more now than prematurely modeling every
  hidden/offscreen process. Refactoring later is acceptable if real content
  exposes repeated hacks.

## Current System Shape

The source layout is intentionally boring:

- `src/engine/`: pure TypeScript state, history, card resolution, rate pool,
  sampler, reducer boundary, RNG, and focused tests.
- `src/content/cards/`: dummy visible card declarations. Each card owns text,
  monthly rate, and choice reducer.
- `src/app/`: browser-facing React orchestration and storage.
- `src/components/`: UI surfaces.
- `scripts/export-cards.ts`: generated review surfaces.
- `e2e/`: Playwright behavioral coverage.
- `docs/`: architecture and quality-evaluation surface.

This branch intentionally has no separate engine CLI. The removed CLI duplicated
browser/session behavior, carried a separate persistence/output surface, and had
enough staleness risk that Playwright, engine tests, generated card review
surfaces, and `?playtest=1` exports are the better current tool mix.

Current tool-surface rationale:

| Tool/surface | Current use case | Keep while true |
|---|---|---|
| `npm run cards` | generate card review markdown and card/state map after card edits | agents need cheap content/navigation review |
| `npm run screenshot` | capture browser screenshots for manual visual review | visual UI checks remain useful |
| `#qa` | inspect cards, portraits, and UI references in the browser | internal review needs one browser route |
| `?playtest=1` | copy parseable death-run logs from the real app | playtest runs need low-friction export |
| `scripts/decrypt-literature.sh` | access encrypted source-derived notes when authorized | encrypted literature remains in repo |
| `scripts/generate-portrait.mjs` | regenerate portrait assets when character art changes | portrait assets remain generated |
| `scripts/generate-og-image.mjs` | regenerate social preview image | public sharing keeps an OG image |

Do not add a separate wrapper only because it saves a small number of agent
tokens. Prefer browser/E2E interaction plus markdown learnings unless the wrapper
removes a repeated error source or enables a review that the browser path cannot
provide.

## Engine Decision

Current decision: **visible-card hazard deck with continuous-time exponential
sampling**.

Loop:

1. `buildPool(cards, state, history)` evaluates each card's monthly
   `rate(state, history)`.
2. `pickCard(rngState, pool)` samples elapsed months from `Exp(totalRate)` and
   selects a card with probability `rate / totalRate`.
3. The session advances `state.elapsedMonths`.
4. The card is shown.
5. The player chooses.
6. The card reducer updates aggregate state.
7. The session increments `state.decisionCount`.
8. Terminal/death state is checked.

Important semantic constraint:

Rates are evaluated at draw boundaries and treated as constant until the next
visible card. A card that becomes eligible at month 12 will not fire at the
exact invisible instant; it becomes eligible when a prior visible draw advances
time past that point. This is an intentional KISS/YAGNI tradeoff for the current
branch.

Current card rates should not claim exact expiry/deadline semantics. A rate that
is positive at the draw boundary can still be sampled after a later threshold,
because no mid-wait recheck occurs. Use this architecture for coarse stochastic
hazards and visible follow-ups. If content needs "happens before month X or not
at all" semantics, that is evidence for a timestep loop, deadline queue, or
hidden event scheduler.

## Engine Alternatives

| Candidate | Why considered | Why not current |
|---|---|---|
| Decision-turn visible deck | simplest Reigns loop | wrong time model for per-month Poisson rates |
| Visible deck plus functional curves | good KISS baseline | still needs exponential wait sampling for rate units |
| Daily timestep process loop | supports offscreen events and quiet days | adds scheduler/process concepts before content pressure proves they pay |
| Daily loop plus deadline queue | handles exact future commitments | queue/cancellation is premature until deadlines dominate |
| Pure calendar priority queue | good for scheduled events | weak for independent stochastic hazards |
| Continuous-time visible hazard deck | matches per-time Poisson approximation and local authoring | current choice |
| Hidden/world event hazard engine | matches fog-of-war processes | deferred until visible discovery cards/rate functions become hacks |
| Redux topic reducers/pool builders | familiar state architecture | reopens slice-order and topic-boundary problems |
| Scenario statecharts/workflows | good for closed arcs | many mechanisms are sparse independent hazards, not closed scenarios |
| ECS/rules engine | very expressive | too much indirection for agent-fast mechanism authoring |
| Data-only cards plus global handlers | separates text/data from effects | poor locality for agents adding mechanisms |
| One-file model prototype | maximum initial locality | does not scale to many mechanism edits |

## Hidden/Offscreen Dynamics

Real pause dynamics can happen offscreen and be discovered late. This branch
does not deny that. It only defers first-class hidden event scheduling.

Current representation options:

- visible discovery cards: an advisor reports that something happened earlier;
- functional curves: slow drift is computed from explicit state support points;
- local history/rate checks: follow-up cards become active after prior visible
  events and elapsed months.

Current non-option:

- exact invisible deadlines or cancellations inside one sampled wait. Those need
  a different scheduler or an explicitly approximate content treatment.

Trigger a new architecture review if:

- multiple mechanisms need state to change before the director learns about it;
- rate functions repeat scheduler logic;
- playtests show visible discovery cards make fog of war misleading;
- exact deadline/cancellation logic becomes common.

### Daily Timestep Spike Evidence

Status: salvaged result from discarded branch `codebase-cleanup-daily-spike`.
The spike code itself was not merged.

The spike tested a boring daily process loop with:

- `process.step(context)` called once per simulated day;
- logged non-visible `worldEvent` emissions that can update state;
- visible advisor events/cards with choices;
- history entries for day jumps, world events, visible events, and choices.

What worked:

- delayed follow-ups were local to one process;
- interruption/cancellation by player choice stayed local;
- non-visible state changes were explicit and logged;
- later visible events could depend on earlier non-visible world events;
- debug history explained why a visible event appeared.

Costs/design issues:

- process order matters for same-day emissions and state updates;
- non-emissions are not explained unless optional debug tracing exists;
- multiple visible events on one day need a queue or deterministic tie-break;
- visible choice effects still need a single-source-of-truth rule;
- production should reuse the explicit `State` and `History` shape, not the
  spike-local state.

Current interpretation:

- keep the visible-card hazard deck while content stays mostly visible and
  follow-ups fit local rate functions;
- pivot toward daily/process scheduling if hidden world events, exact deadlines,
  cancellation/interruption, or quiet periods become common enough that card
  rates repeat scheduler logic.

## State And History

State is centralized in `src/engine/state.ts` to keep direct
`state.foo.bar` access grep-friendly.

Current top-level time fields:

- `elapsedMonths`: continuous simulation time.
- `decisionCount`: number of committed player choices.

History is append-only:

- `gameStarted`
- `cardDrawn`
- `choiceCommitted`

`cardDrawn` records absolute elapsed months, delta months, total rate, card id,
and RNG states. `choiceCommitted` records elapsed months, zero-based
`decisionIndex`, card id, and choice. `decisionIndex` is deliberately not named
`decisionCount` because it is the index before incrementing aggregate state.

## Frontend UI Decision

Current decision: keep the UI as a mobile-first phone-like Reigns interface.

Rationale:

- The public/player workflow is repeated fast card decisions.
- Mobile-first flow is the genre expectation and the likely sharing surface.
- Desktop can remain phone-app-like until a concrete desktop review workflow
  appears.

Frontend surfaces:

- title and tutorial;
- game screen with resource bars, year display, card, swipe/button/keyboard
  choice controls;
- death screen with share copy and optional playtest export;
- `#qa` reference screen for internal review.

Alternatives considered:

| Candidate | Reason to consider | Why not current |
|---|---|---|
| Desktop dashboard sim | exposes state and logs well | weak for Reigns-like player experience |
| Split review app and play app | cleaner expert review surface | more routes and state sync before review pain is proven |
| Rich map/timeline UI | better for geopolitical simulation | too complex before core card loop is validated |
| Minimal card-only UI | simpler | loses resource/time/history feedback needed for playtests |

## Deployment Decision

Current deployment source truth remains:

- `.github/workflows/deploy.yml`
- `wrangler.toml`
- `package.json`
- deploy skill notes in `.agents/skills/deploy/SKILL.md`

Current deploy architecture:

- Vite builds static assets into `dist/`.
- GitHub Actions deploys pushes to `main` to Cloudflare Pages project
  `global-pause`.
- `#qa` and `?playtest=1` are intentionally reachable internal review surfaces.
- Branch/commit preview deploys are not configured as a documented workflow.

Alternatives:

| Candidate | Why consider | Why not current |
|---|---|---|
| Keep main-only Cloudflare deploy | simple and source-truth exists | current choice |
| Branch preview deploys | useful for playtest/review links | add only when worktree-first review needs public previews |
| Separate QA deployment | safer for internal surfaces | not needed until public launch risk changes |
| Server/API deployment | supports server simulations/logging | static app is sufficient now |

## Quality Side Effects We Want

The architecture and docs are intended to create these effects:

- future agents can add a mechanism without rebuilding the codebase map;
- architecture tradeoffs are inspectable and updatable;
- behavior claims live in tests, not chat memory;
- generated artifacts make content review cheaper;
- manual review workflows are explicit enough for agents/subagents to repeat;
- deployment confidence is distinguished from project success.

## Update Rules

Update this document when:

- event/time semantics change;
- hidden/world events become first-class;
- deploy workflow changes;
- UI route structure changes;
- future-agent story distribution changes based on observed work;
- a manual or automated quality test becomes obsolete.
