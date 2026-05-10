---
name: project-quality
description: Use when Codex writes, edits, reviews, or delegates work where repo-wide quality objectives, navigation, clarity, verification, tracking, or onboarding maintainability matter.
---

# Project Quality

## Status

Copied and adapted from `msc-math`. Jörn should review this before treating it
as a settled durable instruction surface.

## Long-Term Quality Objectives

The project is worked on by many agents over a long time. Fresh agents should
be able to find the relevant local truth, understand the current state, make a
bounded change, and verify it without reconstructing chat history.

- **Verifiability**: Distinguish source facts, agent inference, game
  extrapolation, current implementation state, aspirations, and Jörn-approved
  claims. Link important claims to source files or commands when the source is
  not obvious.
- **Reproducibility**: Generated card exports, maps, builds, simulations, and
  review artifacts should be reproducible from tracked source truth.
- **Navigability**: Use descriptive file names, predictable terminology, and
  explicit links. Keep frequently co-needed knowledge colocated.
- **Clarity**: Write plainly for future agents. Prefer concrete local
  readability over clever abstractions. Duplication is acceptable when it makes
  a file easier to understand in one pass.
- **Tracking**: Keep current task state in `tasks/`, not in chat. Delete stale
  tracker detail once git history is enough.

## Conventions

All conventions serve the public-understanding goal of the game, long-term
agent maintainability, and short-term task success.

**Navigation and Exploration**
- use long descriptive names for files and folders
- use predictable code symbols and keywords; grep to quickly find definitions
  and uses
- cross-reference other files, avoid unstable line numbers

**Clarity**
- write plainly, don't use metaphors or analogies
- focus on information transfer to future agents
- use standard terminology
- use audience-appropriate terms in player-facing text
- be specific, neither over- nor under-inclusive
- break down sentences that entangle multiple concerns
- avoid vague terms
- don't abstract prematurely

**Verification and Tracking**
- link claims to their source of truth, except where obvious
- record enough arguments and intermediate steps for future agents to check
  whether a reasoning result still follows
- explicitly track epistemic status when content claims depend on contested or
  current-world evidence
- track task states, Jörn decisions, and results of expensive checks so future
  agents can avoid redoing unchanged work
- move unnecessary claims into the git history i.e. delete them, since they are expensive to verify
