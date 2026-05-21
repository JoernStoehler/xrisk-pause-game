---
name: project-quality
description: Use when Codex writes, edits, reviews, or delegates work where repo-wide quality objectives, feedback loops, navigation, verification, tracking, or onboarding maintainability matter.
---

# Project Quality

## Frame

Quality in this repo means the project gets better at producing a serious,
playable game that teaches the intended claims about AI pause governance.
Realism, fun, maintainability, tests, maps, and generated artifacts are
instrumental to that goal.

The useful default question is:

> What observable feedback loop improves, and how does that help the game teach
> the intended thing?

That question is a symptom/handle, not a substitute for judgment. Agents still
need to reason about expected value, correctness, taste, timing, and future
maintenance. But naming the feedback loop usually prevents vague "quality"
claims and helps future agents check whether the change paid off.

Common feedback loops:

- **Player understanding**: confusion, remembered takeaways, false-belief
  correction, and whether players understand pause as active crisis management.
- **Playability**: friction, pacing, readability, mobile flow, card variety,
  and whether players keep playing long enough to see the relevant tradeoffs.
- **Jörn/expert review**: compact review packets, grouped decisions, source
  traceability, and clear approval boundaries.
- **Automated validation**: unit tests, E2E flows, CLI simulations, generated
  card exports, screenshots, and deploy/build checks.
- **Future-agent onboarding**: maps, generated summaries, explicit contracts,
  and removal of stale routes.

## Quality Objectives

- **Public understanding**: Backchain from the goal that more people understand
  that a global AI pause treaty could work and can recognize blatant
  misunderstandings or false claims about what such a treaty needs.
- **Truthfulness**: Separate source fact, agent inference, game extrapolation,
  current implementation state, aspiration, and Jörn-approved claim.
- **Teachability**: Prefer designs where players can infer the intended
  takeaway from play, not from out-of-game explanation.
- **Playability**: Fun and friction matter because they determine whether
  players experience enough months of play to encounter the core tradeoffs.
- **Agent maintainability**: Prefer explicit maps, local readability,
  checkable claims, boring structure, and useful duplication over abstractions
  that require fresh agents to reconstruct context.
- **Tracking**: Keep current implementation state in `ARCHITECTURE.md`, current
  work state in `PROGRESS.md`, and release operations in `DEPLOY.md`, not in
  chat. Delete stale tracker detail once git history is enough.

## Completeness Checks

Use the relevant checks for the surface being changed. These are prompts for
thinking, not a mandatory checklist for every task.

**Code and Engine**
- Did the changed behavior get focused tests, not just a broad `npm run check`?
- Are hidden state, disabled/down choices, draw eligibility, anti-repeat,
  death/victory, RNG, or save compatibility affected?
- Is the implementation concrete and locally readable enough for a fresh agent?

**Cards and Content**
- Are source facts, game extrapolations, and Jörn-approved claims separated?
- Did `npm run cards` run after TypeScript card edits?
- Did the generated diffs make card count, grouping, hidden-state edges, and
  repeated concepts easier to review?
- Does the change improve player understanding rather than only adding detail?

**Design and Research**
- Is the source of truth clear: design doc, literature note, generated export,
  map file, or code?
- Are uncertainty and approval status explicit where they matter?
- Is the result easy for Jörn to review without reconstructing the full chat?

**UI and Playability**
- Does the change preserve mobile-first usability?
- If visual/flow behavior changed, was it checked with E2E, screenshots, or a
  local run as appropriate?
- Does the interaction help players understand decisions and tradeoffs faster?

**Harness and Maps**
- Did maps change when routes, priorities, or validation changed?
- Were stale instruction paths removed instead of preserved in parallel?
- If a skill or `AGENTS.md` changed, is it clearly Jörn-approved before final
  merge?

**Deploy and Playtesting**
- Is deploy success distinguished from project success?
- Does the change improve or preserve later public feedback loops?
- Are playtest findings routed back to content, app, deploy, or harness/map
  work?

## When To Improve The Repo

If a quality gap slowed the task or made verification hard, prefer a small
durable improvement over a chat explanation. Examples:

- add or update `ARCHITECTURE.md`, `PROGRESS.md`, or `DEPLOY.md`;
- add a focused test;
- enrich a generated review artifact;
- record a Jörn decision in the relevant map, design, or source file;
- remove a stale route;
- make a repeated review question explicit.
