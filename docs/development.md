# Development

Purpose: developer-agent operating notes for turning task intent into repo
changes that satisfy `docs/quality.md`.

Use when implementing code, content scaffolding, docs, tests, generated
artifacts, or tooling. This file exists because agents otherwise overfit local
code, add token-saving wrappers, skip source-truth updates, or optimize generic
architecture instead of project success.

Authority: `AGENTS.md` and `FACTSHEET.md` set project/harness boundaries.
Source files and tests define behavior. `docs/quality.md` defines target
qualities. This file is practical guidance, not source truth over code.

Maintenance: update when implementation routes, commands, architecture
contracts, or repeated developer-agent failure modes change. Prefer named
standard practices over explaining TypeScript/React basics.

## Start Here

Ordinary code/content work:

1. Read `FACTSHEET.md` for project goal and approval boundaries.
2. Read `ARCHITECTURE.md` for current implementation map.
3. Skim `docs/quality.md` for the quality dimensions affected by the task.
4. Read the relevant section of `docs/architecture.md` when touching engine,
   UI, deploy, generated artifacts, or tooling.
5. Use `docs/review.md` to choose checks/reviews.

## Task Framing

Name the feedback loop before coding:

- player understanding;
- playability;
- Jörn/expert review;
- automated validation;
- future-agent onboarding;
- deploy/release confidence.

If no loop improves, reconsider scope.

## TypeScript And React

Prefer:

- standard TypeScript/React idioms;
- explicit exported types at module boundaries;
- pure helpers for engine behavior;
- React components that receive already-computed state rather than hiding game
  logic;
- focused tests for behavior changes;
- simple prop/data flow over global UI state libraries.

Avoid:

- clever dynamic property access where direct state access would be clearer;
- React-only logic for engine behavior that should be testable without the DOM;
- broad abstractions introduced before two or three concrete call sites prove
  they reduce real complexity.

## Engine/Content Contract

Default mechanism shape:

- state schema in `src/engine/state.ts`;
- history helpers in `src/engine/history.ts`;
- card text, monthly `rate(state, history)`, and choice `reduce(...)` together
  in a card module under `src/content/cards/`;
- grouped card registration in `src/content/cards/index.ts`;
- generated review artifacts from `npm run cards`.

Rate semantics:

- rates are events/month;
- rates are evaluated at visible draw boundaries;
- rates are treated as constant until the next visible card is drawn;
- exact mid-wait deadlines or cancellations need a scheduler/timestep design,
  not just a card-rate helper.

## Grep/AST-Friendly State

- use the name `state` for `State` parameters where possible;
- prefer direct `state.foo.bar` reads and writes;
- avoid aliases that hide state paths from grep and generated scans;
- add state helpers only when they encode a real domain view used in multiple
  places or prevent a repeated bug.

## Behavior Claims

Add/update focused tests when changing:

- RNG or draw selection;
- rate eligibility;
- elapsed-time semantics;
- history queries;
- disabled/down choices;
- state reducers;
- save compatibility;
- death/victory behavior;
- browser persistence or interaction flow.

- run `npm run cards` after card/content changes;
- inspect generated diffs;
- never hand-edit `docs/cards-export.md` or `public/cards-map.html`.

## Docs And Maps

Use:

- `ARCHITECTURE.md` for current implementation map;
- `docs/architecture.md` for why the architecture is shaped this way;
- `docs/quality.md` for shared quality definitions;
- `docs/review.md` for validation and review workflows;
- `PROGRESS.md` for current work state/blockers.

Delete stale claims instead of preserving parallel summaries.

## Tooling

Do not add wrappers/scripts only to save small agent typing cost. Add tooling
when it:

- removes a repeated error source;
- enables a review that browser/E2E/tests cannot provide;
- produces generated artifacts that would otherwise drift;
- is tied to a documented workflow and validation command.

Document current use case in `docs/architecture.md` or `docs/review.md`.

## Jörn Review Gates

Ask Jörn before changing:

- game thesis;
- political model;
- player-facing terminology;
- card concepts;
- major UX direction;
- final feature set;
- expert predictions;
- harness authority boundaries.

Agents may draft, implement, test, refactor, and propose wording independently
inside those boundaries. Mark expert-grounded content as draft until approved.
