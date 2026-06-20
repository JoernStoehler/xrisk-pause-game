# Progress

This is the current externally supplied work state: what is active, blocked,
planned, deferred, or needs Jörn. Current implementation state belongs in
`ARCHITECTURE.md`; old tracker detail belongs in git history.

## Labels

- `[active]`: current work or nearest useful next work.
- `[blocked]`: useful but waiting on a named blocker.
- `[planned]`: intended direction, but not necessarily approved unless marked.
- `[idea]`: possible later, not committed.
- `[cut]`: intentionally not on the path.
- `[needs Jörn]`: requires Jörn's domain, scope, taste, or expert-context call.

Nesting is allowed when it clarifies partial progress or feature-local
submodules. The labels are for clarity, not a task-management schema.

## Current Phase

- `[active]` Post-integration maintenance with recovered expert-model material
  consolidated in `design/EXPERT_MODEL.md`.
- `[blocked]` Broad content/card review, rewrites, and new expert-grounded
  mechanisms should wait until Jörn marks the expert-model sheet ready for
  integration review.

## Content

- `[needs Jörn]` Expert-grounded content is draft until Jörn approves it.
- `[active]` Treat `design/EXPERT_MODEL.md` as the single recovered source of
  truth for Jörn's expert model until Jörn replaces or approves it.
- `[active]` Preserve traceability from design/literature notes to card concepts
  and implementation.
- `[active]` Keep static two-or-three-choice cards as the intended content
  direction; migrate or deliberately retain existing dynamic `enabled` options
  later.
- `[blocked]` Implement geopolitics cards only after Jörn approves the relevant
  concepts and mechanism framing.
- `[planned]` Rebalance after the content pass.
- `[planned]` Regenerate portraits after card content stabilizes.
- `[idea]` Add more history-triggered chains and degraded variants after card
  content stabilizes.

## App And Playability

- `[active]` Preserve settled engine, swipe, and theme behavior while content
  overhaul proceeds.
- `[active]` Match validation to touched surface; `npm run check` alone does not
  prove engine/card/UI behavior is fully covered.
- `[active]` Keep app, CLI, and future playtest tooling on shared
  engine/session transitions.
- `[planned]` Rework title/death screen polish after content and takeaway
  message are clearer.
- `[idea]` Revisit achievements/card collection after content overhaul.
- `[cut]` Do not add settings until tutorial skip, accessibility, or another
  real configuration need appears.

## Playtesting

- `[blocked]` No durable playtest corpus exists yet.
- `[active]` Playtest first, then record what was actually observed: build or
  version, player context if known, session shape, confusion points, remembered
  takeaways, fun/friction, bugs, screenshots, and card histories actually
  collected.
- `[active]` Route observed findings back to concrete work: content/source
  issues, app/UX bugs, deploy/release-loop issues, or harness/map issues.
- `[planned]` Once repeated findings exist, propose lightweight capture formats
  or quality gates for Jörn review.

## Deploy And Release

- `[active]` Keep deployment discoverable as a distinct surface because release
  mechanics, public feedback loops, and game-outcome tracking are distinct from
  app implementation.
- `[active]` Current GitHub Actions deploy is main-only. Branch/commit
  Cloudflare preview deployment is possible future deploy work if worktree-first
  development makes preview links important.
- `[planned]` Coordinate with playtesting before treating a public deploy as
  ready for broader feedback loops.
- `[idea]` Add deploy dry-run or preview guidance if deployment changes become
  frequent or risky.

## Harness And Maps

- `[active]` Keep `AGENTS.md` as the root instruction map, not a tracker or
  design doc.
- `[active]` Keep durable project facts and repeated context in `FACTSHEET.md`,
  current implementation state in `ARCHITECTURE.md`, current work state here,
  and deploy operations in `DEPLOY.md`.
- `[active]` Use `skill-writing` and `gpt-55-prompting` for skill, prompt, and
  other agent-facing instruction changes. The old broad `harness-engineering`
  skill has been removed.
- `[active]` Use `plan-first` only when Jörn invokes it or explicitly asks to
  plan before implementation.
- `[active]` Use `stalled-session-recovery` when chat repair overhead blocks
  useful work.
- `[active]` Use `goal-tool` before creating, updating, checkpointing, or
  completing `/goal`.
- `[active]` Ordinary tracked work should happen in git worktrees, not directly
  on `main`, so independent parallel sessions stay mergeable.
- `[needs Jörn]` `AGENTS.md` and skill bodies require Jörn approval before they
  are treated as final durable instruction material.
- `[idea]` Decide later whether the Codex web backup environment needs actual
  setup scripts; current evidence says browser binaries, Node 22+ for Wrangler,
  and `age` are missing there.
