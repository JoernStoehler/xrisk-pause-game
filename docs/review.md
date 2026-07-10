# Review

Purpose: review map for agents evaluating changes against `docs/quality.md`.

Use when selecting validation commands, writing tests, delegating subagent
review, checking generated artifacts, doing visual review, or deciding an early
exit is acceptable. This file exists because agents otherwise overclaim from
passing checks or run broad checks without knowing their blind spots.

Authority: commands and source files define actual behavior. This file defines
current check intent and blind spots. Update it when commands, test coverage,
manual workflows, or quality risks change.

## Test Philosophy

Tests/reviews are feedback-loop checks:

- player understanding;
- playability;
- Jörn/expert review;
- automated validation;
- future-agent onboarding;
- deploy/release confidence.

Acceptable evidence types: Vitest, Playwright, generated artifact inspection,
screenshot/visual review, deploy/build logs, playtest exports, markdown
checklists with explicit early exits.

## Automated Behavior Checks

Default source-rewrite check set:

```bash
npm run check
npm run cards
npm run test:e2e
git diff --check
bash scripts/toc.sh AGENTS.md FACTSHEET.md ARCHITECTURE.md PROGRESS.md
```

| Command | Covers | Main blind spots |
|---|---|---|
| `npm run check` | typecheck, lint, production build, Vitest unit/component tests | browser layout details beyond tested components |
| `npm run cards` | generated card review export and card/state map | semantic correctness of card content |
| `npm run test:e2e` | browser title/tutorial/game/death/drag/mobile/playtest export flows | aesthetics and content quality |
| `git diff --check` | whitespace/conflict hygiene | logic |
| `scripts/toc.sh` | map file headings remain parseable | map truthfulness |

## Focused Engine Tests

- `src/engine/engine.test.ts`
- E2E tests that drive the real browser app

Covered now:

- initial aggregate state is explicit;
- pool building filters zero rates and rejects invalid rates;
- deterministic RNG selection;
- exponential elapsed-time sampling;
- dynamic card text resolution;
- disabled down-choice handling;
- card reducers update state;
- death checks and death messages;
- active-card rehydration;
- browser persistence and choice commits.

Add a focused test if touching:

- RNG;
- rate eligibility;
- elapsed time;
- history queries;
- disabled choices;
- resource extremes;
- save compatibility.

## Generated Review Tests

- `docs/cards-export.md`
- `public/cards-map.html`

After card/content edits:

1. Run `npm run cards`.
2. Inspect card count, group count, initial eligibility, total initial rate,
   down-choice count, state reads, and state writes.
3. Check whether the generated state references reveal the dependency you
   expected.
4. Treat generated state references as navigation aids, not semantic proof.

Failure examples to look for:

- a new card has initial rate `0/month` when it should appear in new games;
- a card has no `idea`;
- state writes are invisible because code uses unexpected aliasing;
- generated counts do not match source expectations.

## Manual Visual/UI Review

Inputs:

- local app from `npm run dev`;
- Playwright screenshots if useful;
- `#qa` route;
- mobile viewport around 390x844;
- desktop viewport around 1280x720.

Check:

1. Start from title screen.
2. Start game or skip tutorial.
3. Check the game screen:
   - resource bars fit;
   - year display does not overlap;
   - speaker portrait loads;
   - long card text remains readable;
   - left/right/down labels are visible and tappable;
   - swipe and button paths both work.
4. Trigger or load death screen:
   - failure text fits;
   - share and restart controls are reachable;
   - playtest export button appears only with `?playtest=1`.
5. Visit `#qa`:
   - page scrolls;
   - card and portrait references are readable.

Exit early if:

- no UI/rendering files changed and `npm run test:e2e` passed.

Report:

- viewport;
- route/state;
- screenshot path if any;
- observation;
- whether it blocks merge.

## Manual Code-Quality Review

Reviewer stance:

- findings first;
- KISS/YAGNI;
- future-agent local edit cost;
- stale docs/routes;
- tests that should exist but do not.

Check:

1. Can a future agent add one new mechanism by editing one card module and
   optionally `src/engine/state.ts`?
2. Are rates in events/month and frozen-between-draw semantics documented near
   code and maps?
3. Do invalid mechanism definitions fail loudly?
4. Are state reads/writes direct enough for generated scans and grep?
5. Are abstractions pulling their weight?
6. Are docs consistent with source truth?
7. Are generated files regenerated rather than hand-edited?
8. Are unrelated files changed?

Suggested reviewer prompt:

> Review this branch for architecture overreach and future-agent footguns.
> Focus on KISS/YAGNI, adding mechanisms fast, rate/time/history semantics,
> stale docs, and missing behavior tests. Return findings with file/line
> references.

## Manual Content/Writing Review

Check:

1. Does the text support the core thesis that a pause is active crisis
   management?
2. Is expert-grounded content marked as draft unless Jörn approved it?
3. Does the text avoid implying domain claims not supported by source notes or
   Jörn decisions?
4. Is the advisor voice concrete and decision-oriented?
5. Are choices genuinely different actions, not vague attitudes?
6. Do labels fit mobile controls?
7. Does the player have enough context to infer the tradeoff?

Claim provenance rule:

- Mark claim-heavy cards with enough nearby provenance that a reviewer can tell
  source fact, Jörn-provided context, agent inference, game extrapolation,
  fictional anchor, current implementation, and placeholder text apart.
- Treat old `// Source:` comments and generated card flags as origin hints or
  triage, not proof that a player-facing claim is sourced.
- Prefer deleting over-specific numbers to preserving unsupported precision.

Claim-heavy examples:

- numeric thresholds, costs, death tolls, timelines, or rates;
- named countries, institutions, companies, people, or incidents;
- claims about what a treaty needs;
- claims about how actors predictably behave;
- claims about what causes extinction or prevents it.

Exit early if:

- only engine/internal code changed and generated card text is unchanged.

## Manual Deployment Review

Source truth:

- `.github/workflows/deploy.yml`
- `wrangler.toml`
- `package.json`
- `.agents/skills/deploy/SKILL.md`

Check:

1. Run `npm run build`.
2. If generated card artifacts changed, run `npm run cards` before build.
3. Confirm `dist/` is still the configured build output.
4. Confirm deploy workflow still runs on intended branch/event.
5. Distinguish:
   - local build success;
   - GitHub Actions deploy success;
   - Cloudflare Pages availability;
   - actual public/playtest success.
6. Check whether `#qa` and `?playtest=1` exposure is still acceptable for the
   intended audience.

Exit early if:

- no deploy files, build config, generated artifact paths, or public route
  behavior changed and `npm run build` passed.

## Manual Performance Review

Current assessment: performance is not a meaningful constraint. Small static
card set, simple rate functions, ordinary React screens.

Early-exit test:

1. Did the change add large assets, large loops, background simulation over many
   days, network calls, or heavy rendering?
2. If no, stop. Performance is dominated by complexity cost, not runtime cost.
3. If yes, run a local browser session and inspect:
   - initial load responsiveness;
   - card swipe responsiveness;
   - memory/CPU only if there is visible jank.

Do not add benchmark infrastructure until a concrete performance risk appears.

## Coverage Gaps To Keep Visible

- No automated long-run balance validation.
- No automated semantic check that generated state-reference scans catch all
  reads/writes.
- No screenshot diff baseline.
- No public deployment smoke in CI beyond configured workflow.
- No approved expert-content corpus.

These are acceptable now because the current branch is architecture scaffolding.
Reassess when real expert-grounded content or public playtesting starts.
