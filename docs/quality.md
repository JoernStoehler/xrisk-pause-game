# Quality

Purpose: shared quality target for developer agents and reviewer agents.

Use when planning, implementing, reviewing, pruning docs, adding tools, changing
architecture, or deciding what checks matter. Without a shared target model,
agents have previously optimized for local plausibility, visual neatness,
generic architecture patterns, or "more checks" instead of project success.

Authority: source truth still wins. Code/tests/generated artifacts describe
implementation behavior. Source notes and Jörn decisions describe domain truth.
This file describes what the repo is trying to preserve or improve.

Maintenance: update this file when a new failure mode, Jörn decision, observed
playtest result, or architecture decision changes what "good" means. Keep it
agent-operational. Prefer named concepts GPT-5.5 already knows over explaining
generic TypeScript, React, testing, or code-review basics.

## Project Success Chain

Project success: more people understand that a global AI pause treaty could
work and can better recognize blatant misunderstandings or false claims about
what such a treaty needs under different threat models.

Causal chain:

1. The game must be playable enough that people experience repeated decisions.
2. The decisions must teach that a pause is active crisis management, not quiet
   waiting.
3. Expert-grounded claims must remain reviewable by Jörn and source notes.
4. The codebase must let agents add, revise, test, and review mechanisms fast.
5. Deploy/release workflows must preserve feedback from players and reviewers.

## Epistemic Labels

Use these exact labels when confusion would matter:

- **Source fact:** supported by a source note, literature file, or cited source.
- **Jörn-provided context:** stated by Jörn or recorded in project instructions.
- **Jörn-approved claim:** explicitly approved by Jörn for durable game content.
- **Agent inference:** an agent's reasoning from available context.
- **Game extrapolation:** a playable simplification or fictionalized mechanism.
- **Current implementation state:** what source/tests currently do.
- **Observed playtest result:** recorded behavior from a player/session.
- **Aspirational goal:** desired future state, not current truth.

Rule: do not convert "Jörn said X" into "X is true" or "X causes project
success" without the missing bridge. Preserve evidence type.

## Strong Requirements

- approval boundaries visible; expert-grounded player-facing claims draft until
  Jörn approval;
- no stale parallel source truth; update/delete maps when code, tests,
  generated artifacts, or Jörn decisions contradict them;
- game loop inspectable: state, history, eligibility, choice effects, death,
  save/rehydration;
- executable checks for cheap behavior claims; markdown checklists only for
  judgment work or currently-not-worth-automating checks;
- future-agent routes true; no pointers to deleted files, removed commands, or
  obsolete workflows;
- deploy/build success treated as feedback-loop health, not project success.

## Softer Heuristics

Violations need a concrete reason:

- boring TypeScript/React, common public-repo patterns, standard library and
  framework idioms;
- explicit state, direct `state.foo.bar`, grep/AST-friendly access;
- local card ownership for visible mechanisms: text, monthly rate, choice
  reducer;
- generated review surfaces for drift-prone counts/graphs/links;
- no token-saving wrappers unless they remove repeated errors or enable a
  review browser/E2E/tests cannot provide;
- docs short enough to read, precise enough to update when context changes.

## Player Understanding

Target model:

- a pause agency has to manage crises, enforcement, legitimacy, safety research,
  intelligence uncertainty, and political constraints at the same time;
- bad policy choices can make the pause fail in different ways;
- treaty success depends on mechanisms, incentives, and monitoring details, not
  slogans;
- uncertainty and fog of war matter, but the game should not teach false causal
  certainty as if it were expert-grounded.

Good signs:

- Players can state the core thesis after play without reading a design note.
- Cards create concrete decisions, not generic opinions.
- Resource/state feedback helps players infer tradeoffs instead of merely
  punishing them.
- Share/playtest outputs preserve enough context to discuss what happened.

Bad signs:

- The game feels like random punishment unrelated to visible choices.
- Cards imply expert claims that are unsupported or unapproved.
- Players learn that a pause is passive bureaucracy or simple prohibition.
- Fun, virality, or polish is optimized in a way that damages the teaching goal.

## Expert Truthfulness

Requirements:

- broad content/card rewrites wait for Jörn approval when they affect thesis,
  political model, terminology, card concepts, major UX direction, final
  feature set, or expert predictions;
- agent-written content marked draft unless approved;
- source fact / Jörn context / agent inference / game extrapolation not blurred
  where the distinction affects review or player understanding.

Acceptable current scaffolding:

- dummy cards for architecture testing;
- simplified rates and resources;
- death/tutorial/share text used to exercise UI and engine surfaces.

Escalation: burden rises when content becomes player-facing as expert-grounded
material.

## Playability

Playability is instrumental to player understanding.

Good signs:

- Mobile card decisions are readable and fast.
- Choices look like actions by an ISIA director or their delegated agency, not
  abstract values.
- Repeated decisions create a sense of time, pressure, and consequence.
- UI feedback helps players understand why the situation changed.

Bad signs:

- Text or controls do not fit mobile.
- The player cannot tell what kind of action a choice represents.
- Hidden mechanics dominate outcomes without later explanation or review value.
- The interface becomes a dashboard before the Reigns-style loop has proven too
  weak.

## Agent Maintainability

Future dev agents are architecture users. Optimize for friction, error-rate,
and speed, not minimal edit distance.

Good signs:

- A fresh agent can add a visible mechanism by editing one card module and maybe
  `src/engine/state.ts`.
- State reads and writes are syntactically obvious.
- Tests and generated artifacts reveal when a mechanism is not wired as
  intended.
- Docs explain why architecture choices exist, not just what files exist.
- Tooling has a current use case and an owner/source of truth.

Bad signs:

- Agents have to reconstruct architecture from chat.
- One stale wrapper or map contradicts source truth.
- A generic abstraction hides the card/state/history relationship.
- A reviewer prompt tries to inspect every quality dimension at once and returns
  false negatives from attention limits.

## Architecture Qualities

Current quality links:

- **Pure engine/session functions:** make behavior testable and independent of
  React.
- **Explicit centralized state schema:** makes state explorable and avoids
  premature slice composition.
- **Card-local rate and reducer:** makes the common "add a mechanism" workflow
  local and grep-friendly.
- **Continuous-time visible hazard deck:** matches the current approximation of
  independent per-month processes without a scheduler that real content has not
  yet demanded.
- **Plain React app state:** fits the small mobile UI and avoids Redux-style
  ceremony where the main modularity problem is the world model, not view-local
  UI state.
- **Generated card review artifacts:** make card counts, groups, rates, and
  state references cheaper to inspect.
- **No separate engine CLI:** avoids duplicate persistence/output logic when
  browser interaction, Playwright, engine tests, and playtest export cover the
  current use cases.

Change architecture when these links stop being true. Example: many exact
invisible deadlines => timestep loop or scheduler, not card-rate hacks.

## Validation Quality

Validation should be cheap enough to run and strong enough that behavior claims
do not live only in chat.

Evidence:

- focused Vitest tests for engine/session behavior;
- Playwright tests for browser flows and mobile regressions;
- generated card review artifacts after card edits;
- manual screenshot/UI checks when layout changes;
- deploy/build checks when release or public review links matter;
- playtest logs and observations when content/pacing claims matter.

Do not overclaim: passing checks only covers their surfaces.

## Review Quality

Reviewer prompts should provide context plus narrow scope. "No findings" means
"no findings under this lens," not global safety.

Useful lenses:

- bug/behavior risk;
- KISS/YAGNI and unnecessary tooling;
- future-agent navigation and stale surfaces;
- epistemic/content labeling;
- UI/playability;
- deployment/release readiness.

After fixing high-risk findings, run another targeted pass if the fix changes
architecture, routes, tests, or docs. Attention is limited.

## When To Split This File

Keep this file as one shared model while it remains easy to scan. Split when:

- the file exceeds roughly 1000 lines;
- reviewers or developers repeatedly need only one section;
- edits to one quality dimension create merge friction with unrelated sections;
- detailed examples start crowding out the top-level model.

Likely split:

- `docs/quality/player-understanding.md`
- `docs/quality/expert-truthfulness.md`
- `docs/quality/agent-maintainability.md`
- `docs/quality/architecture.md`
- `docs/quality/validation-and-review.md`
