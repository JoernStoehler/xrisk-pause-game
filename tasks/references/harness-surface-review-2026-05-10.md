<!--
Purpose: review artifact for iterating on the msc-math-style harness migration.
Context: written in worktree `.codex/worktrees/harness-msc-math` on branch
`harness/msc-math-port`. Use chat for Jörn feedback on the questions, not as
the durable review store.
-->

# Harness Surface Review 2026-05-10

## Executive Take

The migrated harness is directionally right: short `AGENTS.md`, topic task
bundles, no repo-local Codex config stub, optional empty subagent template
folder, and a small skill set. The main missing work is not another harness
mechanism; it is making the app/content/test/deploy surfaces visible enough
that fresh agents choose the right validation and do not treat draft content as
settled truth.

My default recommendation:

1. Keep the `msc-math` shape.
2. Keep `AGENTS.md` as a map, not a rulebook.
3. Keep `tasks/MAP.md` as the simple session-start map/cache and do not add a
   parallel `ROADMAP.md`.
4. Keep `research-topic` and `write-cards` as TODO placeholders until Jörn
   writes or approves them.
5. Keep `project-quality` as a separate skill, but revise it only via
   Jörn-reviewed variants because game feedback loops matter more here than
   mathematical correctness.

## Current Branch Surface

Branch: `harness/msc-math-port`

Commits:

- `569a371` ports the `msc-math` skeleton mechanically.
- `7b27f86` adapts it to pause-game and prunes irrelevant copied skills.

Primary files:

- `AGENTS.md`: project map, file map, map files, review policy, commands.
- `tasks/MAP.md`: current priority map, authority boundaries, maturity map,
  validation map.
- `tasks/README.md`: task bundle conventions.
- `tasks/app.md`: app, engine, UI, playability.
- `tasks/content.md`: research, card content, balance.
- `tasks/deploy.md`: Cloudflare Pages deployment and post-deploy outcome
  tracking.
- `tasks/harness.md`: harness/process migration.
- `tasks/playtesting.md`: player feedback loops, learning objectives, and
  quality gates.
- `.agents/skills/harness-engineering/SKILL.md`: generic harness principles
  plus this repo's structure and skill-change policy.
- `.agents/skills/project-quality/SKILL.md`: copied/adapted generic quality
  objectives; needs Jörn review.
- `.agents/skills/git-worktrees-merge/SKILL.md`: copied generic worktree
  guidance.
- `.agents/skills/post-mortem/SKILL.md`: copied generic session reflection
  guidance.
- `.agents/skills/research-topic/SKILL.md`: TODO placeholder.
- `.agents/skills/write-cards/SKILL.md`: TODO placeholder.

Review-triggered follow-up commit:

- adds explicit `tasks/MAP.md` session-start guidance to `AGENTS.md`;
- maps deployment/tooling source surfaces;
- clarifies validation meanings and current test limitations;
- records card export and side-effect import risks;
- fixes `scripts/toc.sh` so headings inside fenced code blocks are ignored;
- cleans `.codex/.gitignore` wording after deleting `.codex/config.toml`.

Jörn feedback incorporated after the review:

- `AGENTS.md`, `tasks/MAP.md`, `project-quality`, and the current `tasks/*.md`
  structure are approved.
- `tasks/MAP.md` fully replaces `ROADMAP.md`.
- `research-topic` and `write-cards` stay as bare TODO placeholders for now.
- deployment has its own `tasks/deploy.md` because deploy is not project end;
  the project cares about months-later public-understanding outcomes.
- playtesting has its own `tasks/playtesting.md` because known objectives and
  quality gates need a durable home before broader public feedback loops.
- `project-quality` remains a separate skill. Jörn approved the B+C direction:
  public-understanding frame plus operational checks, with feedback loops used
  as observable symptoms/handles rather than the whole reasoning process.
- `scripts/codex-worktree.sh` is deleted because the copied helper is broken.
- `AGENTS.md` and skill bodies require Jörn approval before becoming final
  durable instruction material.

## Architecture Comparison

### Option A: Keep Old Pause-Game Harness

Shape:

- `AGENTS.md` points to `TASKS.md`.
- `.codex/config.toml` exists as a repo-local config/stub.
- Generic `.codex/agents/*.toml` roles exist.
- Two strong project skills exist for content/card work.

Pros:

- More concrete card workflow guidance was immediately available.
- Fewer files than the ported `tasks/` structure.

Cons:

- `TASKS.md` becomes a large mixed-purpose route over time.
- Repo-local `.codex/config.toml` is a false surface if it only says settings
  belong elsewhere.
- Generic role TOMLs compete with explicit, task-local delegation prompts.
- Fresh agents can mistake old tracker detail for current state.

Assessment: not the right long-term shape.

### Option B: Full `msc-math` Copy

Shape:

- Copy all skills, `AGENTS.md`, `.codex`, helper scripts, task conventions.
- Delete anything local not present in `msc-math`.

Pros:

- Fast way to import a known cleaner scaffold.
- Gives us `scripts/toc.sh`, task conventions, and generic
  quality/worktree/postmortem skills.

Cons:

- Direct copy carries wrong domain surfaces: thesis, Rust, formal math, LICCA,
  papers, experiments.
- Direct `AGENTS.md` copy hides the game architecture and content authority
  boundaries.
- Direct devcontainer copy would be wrong because this app is Node/Playwright,
  not Rust/TeX/Sage.

Assessment: useful as an intermediate checkpoint only. This is why commit
`569a371` exists but should not be merged alone.

### Option C: `msc-math` Shape, Pause-Game Content

Shape:

- Keep `msc-math`'s structural pattern.
- Rewrite `AGENTS.md`, `tasks/`, and harness skill bottom section for this repo.
- Delete irrelevant copied skills.
- Preserve domain skills as placeholders pending Jörn review.

Pros:

- Gives fresh agents a predictable root map and task map.
- Avoids dead Rust/math/thesis routes.
- Keeps skill bodies honest: TODO placeholders are better than fake settled
  instructions.
- Removes `.codex/config.toml` stub and generic role TOMLs.

Cons:

- Current placeholders are weaker than the previous concrete `write-cards` and
  `research-topic` skills.
- The task map now needs to cover deployment, generated artifacts, and test
  suite boundaries better.
- Skill approval policy adds process overhead, though probably worth it.

Assessment: best current architecture.

## Framework And Tooling Surface

Runtime/frameworks:

- React 19.
- Vite 7.
- TypeScript 5.9 with strict app config.
- Tailwind v4 through `@tailwindcss/vite`.
- Cloudflare Pages deployment via GitHub Actions and Wrangler.

Test/validation tools:

- `npm run typecheck`: `tsc -b --noEmit`.
- `npm run lint`: ESLint 9 flat config with TypeScript, React Hooks, React
  Refresh.
- `npm run build`: `tsc -b && vite build`.
- `npm test`: Vitest in jsdom.
- `npm run check`: typecheck, lint, build, unit tests.
- `npm run test:e2e`: Playwright, local Vite dev server, 390x844 viewport in
  current specs.
- `npm run cli auto 20`: headless random playthrough smoke/balance check.
- `npm run cards`: regenerates `design/cards-export.md` and
  `public/cards-map.html`.
- `bash scripts/decrypt-literature.sh`: decrypts encrypted literature when
  needed.
- `.devcontainer/host-devcontainer-rebuild.sh` and
  `.devcontainer/host-vscode-tunnel.sh`: environment validation.

Deployment surface:

- `.github/workflows/deploy.yml` deploys on pushes to `main`.
- Uses Node 22, `npm install`, `npm run build`, then Cloudflare Pages deploy.
- `wrangler.toml` names project `global-pause` and output `dist`.

Review outcome: deployment is now first-class in `tasks/deploy.md` because
deploy success is operational state, not the project endpoint. The desired
outcomes are public-understanding and feedback effects over later months.

## Test Suite Assessment

Current unit tests:

- `src/engine/state.test.ts`: new game, draw card, apply choice, death checks.
- `src/components/shareText.test.ts`: share text variants and notable cards.

Current E2E tests:

- `e2e/smoke.spec.ts`: title, start game, swipe, death/restart flow.
- `e2e/drag.spec.ts`: visible labels, drag behavior, impact indicators,
  commit swipe.
- `e2e/tutorial.spec.ts`: first-play tutorial, skip persistence, keyboard.

Generated/review tests:

- `npm run cards` is a generator, not a test. It is still a validation command
  because card edits must keep generated review surfaces current.

Balance tests:

- `npm run cli auto 20` is a smoke check, not a strong balance test. Larger
  batches are needed for tuning.

Gaps worth recording in the harness:

- No card corpus invariant test yet: duplicate IDs, empty text/labels,
  duplicate tags, unknown hidden keys, invalid pool weights.
- No generated-artifact freshness check in `npm run check`.
- No deploy workflow check beyond `npm run build`.
- E2E uses one mobile viewport by default; that matches mobile-first, but tasks
  should say when extra viewport screenshots are required.
- Playwright tests rely on timeouts around animations; useful but not enough to
  prove visual polish.

Reviewer-added caveats:

- Current unit coverage is a small smoke suite, not a broad engine contract
  suite.
- Current E2E coverage is mobile-flow coverage at 390x844, not broad responsive
  or deployed-environment coverage.
- Current CLI autoplay samples only left/right choices even though the engine
  supports down choices.

## Content And Card Surface

Current source-of-truth split:

- `design/domain-model.md`: domain model and resource mapping.
- `design/card-concepts.md`: card concept inventory.
- `design/geopolitics-synthesis.md` and `design/research/*.md`: source-grounded
  mechanism synthesis.
- `literature/`: source notes, some encrypted.
- `src/data/cards/*.ts`: implemented card pool.
- `design/cards-export.md` and `public/cards-map.html`: generated review
  surfaces.

Current risk:

- The branch replaced previous concrete card/research skills with TODO
  placeholders. That is honest, but merging without immediate Jörn follow-up
  weakens content-specific guardrails.

Candidate fixes:

- Either restore the prior `write-cards` and `research-topic` bodies as
  "interim, needs Jörn review" instead of bare TODOs, or keep TODOs and accept
  that agents must fall back to `tasks/content.md` plus local inspection.
- Add a short `tasks/content.md` row explicitly naming the current authoritative
  design/content files and generated review surfaces.
- Add card corpus tests before large card rewriting begins.
- Enrich `cards-export.md` or another generated review artifact with tags,
  hidden effects, pool weights, gated choices, source/rationale comments, and
  source file references.
- Resolve or migrate `event-map` references if no durable `event-map` source
  surface exists.

## Harness Surface Decisions

Decisions already made in the branch:

- Delete `.codex/config.toml`.
- Delete generic `.codex/agents/reviewer.toml` and
  `.codex/agents/simplification-scout.toml`.
- Add `.codex/agents/.gitkeep`.
- Add `scripts/toc.sh`.
- Delete irrelevant copied `msc-math` skills.
- Keep `project-quality`, `git-worktrees-merge`, and `post-mortem`.
- Rewrite `project-quality` around public understanding, game/teaching feedback
  loops, and surface-specific completeness checks.
- Keep `research-topic` and `write-cards` as bare TODO placeholders.
- Add `tasks/deploy.md`.
- Add `tasks/playtesting.md`.
- Delete `scripts/codex-worktree.sh`.

Open decisions:

- When Jörn wants to replace the `write-cards` and `research-topic` TODO
  placeholders with settled bodies.

## Proposed Patch Queue

Small patches that appear worth doing before merge:

1. DONE: Add deployment and generated-artifact rows to `tasks/MAP.md` and
   `tasks/app.md`.
2. DONE: Add an explicit "test suite map" to `tasks/app.md`.
3. DONE: Add a "card corpus validation missing" row to `tasks/content.md`.
4. DONE: Keep TODO placeholders for `write-cards` and `research-topic`.
5. DONE: Add a source map row for `.github/workflows/deploy.yml` and `wrangler.toml`
   in `AGENTS.md`.
6. DONE: Fix `scripts/toc.sh` to ignore fenced code blocks.
7. DONE: Clean `.codex/.gitignore` wording after deleting `.codex/config.toml`.
8. DONE: Add `tasks/deploy.md`.
9. DONE: Delete broken `scripts/codex-worktree.sh`.
10. DONE: Add `tasks/playtesting.md` for feedback loops, learning objectives,
    and quality gates.

Patches I would defer:

- Adding Codex web setup scripts.
- Hardening devcontainer package pins.
- Writing final `write-cards` and `research-topic` skill bodies without Jörn's
  review.
- Refactoring app/card architecture in this harness branch.

## Project Quality Skill Decision

Jörn chose to keep `project-quality` as a separate skill. The selected direction
combines Variant B as the frame and Variant C as operational checks.

Key shift from `msc-math`: the quality model is not mathematical correctness.
It is whether the repo helps agents produce a playable game that teaches the
intended claims and creates fast feedback loops from players, Jörn, tests,
generated artifacts, deployment, and future agents back into concrete
improvements.

Jörn caveat: named feedback loops are observables/symptoms/handles, not the
whole reasoning process. Agents still need to reason about expected value,
correctness, taste, timing, and future maintenance.

The implemented skill has:

- a public-understanding frame;
- common feedback loop categories;
- quality objectives for truthfulness, teachability, playability,
  maintainability, and tracking;
- completeness checks for code/engine, cards/content, design/research,
  UI/playability, harness/tasks, deploy/playtesting;
- a bias toward small durable improvements when verification or onboarding is
  hard.

## Resolved Questions From Jörn

1. Should `tasks/MAP.md` fully replace `ROADMAP.md` as the session-start state
   map, or do you want both names to exist for a transition period?
   - Answer: yes, `tasks/MAP.md` replaces `ROADMAP.md`; make clear that this is
     a simple map/cache plus grouped task definitions.

2. For `write-cards` and `research-topic`, which merge state do you prefer?
   - A: bare TODO placeholders, safest because no unapproved skill body exists;
   - B: previous concrete skill bodies restored and clearly marked "interim,
     needs Jörn review";
   - C: three short candidate bodies drafted for you to choose from.
   - Answer: A. The repo may need these skills eventually, but not settled
     bodies in this pass.

3. Should deployment be a first-class task bundle?
   - A: no, just mention `.github/workflows/deploy.yml` and `wrangler.toml` in
     `AGENTS.md` and `tasks/app.md`;
   - B: yes, add `tasks/deploy.md`;
   - C: defer until deployment breaks or release process becomes active.
   - Answer: yes. Deploy is not project end because desired outcomes are months
     later.

4. Keep `project-quality` as a separate skill?
   - A: yes, broad repo-quality trigger is useful;
   - B: no, fold its few useful points into `harness-engineering` and
     `tasks/README.md`;
   - C: keep only as TODO for Jörn like the content skills.
   - Answer: A, but propose variants before editing because quality should
     focus more on game/teaching feedback loops than mathematical correctness.

5. Should `scripts/codex-worktree.sh` stay in this repo?
   - A: yes, worktrees are standard workflow now;
   - B: yes, but only after a separate review;
   - C: no, use raw git commands.
   - Answer: no, it is broken.

6. Is "agents may draft skill changes but Jörn must approve skill bodies before
   final merge" the right strictness?
   - A: yes;
   - B: only for content/domain skills;
   - C: too strict, agents may merge low-risk process skills after review.
   - Answer: A, also for `AGENTS.md`.

## Review Log

- Local review by parent agent:
  - read `harness-engineering`;
  - inspected branch status and file map;
  - compared `AGENTS.md`, `tasks/`, `.codex`, devcontainer, scripts, package,
    Playwright, deployment, CLI, card export, and representative tests;
  - ran `git diff --check main..HEAD`;
  - ran `bash scripts/toc.sh AGENTS.md tasks/MAP.md tasks/harness.md`.
- Subagent reviews pending at initial artifact write:
- Subagent review, harness architecture:
  - agreed with the broad `msc-math` shape;
  - flagged missing session-start `tasks/MAP.md` instruction;
  - flagged TODO skills as the main onboarding weakness;
  - caught `toc.sh` fenced-code false headings;
  - caught stale `.codex/.gitignore` wording.
- Subagent review, app/test/framework:
  - flagged deployment/env surfaces as under-mapped;
  - flagged generated card artifact maintenance risks;
  - clarified current Vitest and Playwright coverage limits;
  - flagged CLI left/right-only balance sampling.
- Subagent review, content/research/cards:
  - flagged TODO skills as high risk;
  - flagged incomplete research-to-card traceability;
  - flagged `cards-export.md` as too thin for review;
  - flagged `card-concepts.md` as overburdened and count/status ambiguous;
  - proposed concept approval/status and hidden-state registry surfaces.
