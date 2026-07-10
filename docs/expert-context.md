# Expert And Content Context

Status: compact replacement for stale `design/` notes.

Purpose: preserve only context future agents need before writing or reviewing
expert-grounded content. This file is not approval for card text or domain
claims.

## Claim Labels

Use these labels when adding or revising material:

- **Jörn-provided context:** a claim attributed to Jörn from project
  instructions or prior discussion.
- **Current implementation state:** what the code currently does.
- **Agent inference:** reasoning by an agent from project context or code.
- **Game extrapolation:** a proposed playable simplification, not a source fact.
- **Open question:** something that needs Jörn, source research, playtesting, or
  implementation evidence.
- **Observed playtest result:** a recorded player/session observation.

Do not convert one label into another. For example, "Jörn said X" is not the
same claim as "X will improve project success."

## Durable Jörn-Provided Context

These points are project context, not final card wording.

- The game is about directing an international AI pause agency.
- The core thesis is that a pause is not quiet waiting; it is fragile active
  crisis management while safety work tries to catch up.
- The public-understanding goal is that more people understand that a global AI
  pause treaty could work and can recognize blatant misunderstandings or false
  claims about what such a treaty needs under different threat models.
- Expert-grounded content is draft until Jörn approves it.
- A global treaty is the relevant proposal, not unilateral U.S. slowdown.
- Mistrust, cheating risk, enforcement, monitoring, chip controls,
  inspections, intelligence sharing, and credible enforcement are treaty-design
  problems to model; they are not by themselves proof that a treaty cannot
  work.
- Treaty failure should often be represented as delayed mechanism failure or
  institutional precursor, not immediate collapse.
- Important dynamics can happen offscreen and be discovered by the director
  later. This fog of war matters for loopholes, secret training, detection,
  leaks, and failure.
- For the next modeling experiment, many dynamics can initially be approximated
  as independent exponential/Poisson processes with per-time rates, plus local
  repeatable vs non-repeatable behavior.
- Refactoring later is acceptable if real content shows the visible-card hazard
  model is accumulating hacks.

## Current Implementation State

- Current card content is dummy architecture scaffolding in `src/content/cards/`.
- Cards own monthly `rate(state, history)` and
  `reduce(state, history, choice)` functions.
- The sampler draws elapsed months from the total active monthly rate and then
  picks a visible card by rate share.
- The engine does not currently model hidden state-changing world events before
  visible discovery.
- Slow background dynamics may be represented as explicit state curves or as
  visible discovery/follow-up cards.
- Generated review output is `docs/cards-export.md`; the public card/state map
  is `public/cards-map.html`.

## Agent Inferences Currently Guiding The Branch

- The fastest common future-agent workflow is adding or revising a visible
  mechanism in one local card module, plus state schema changes when needed.
- A first-class hidden-event scheduler would likely be useful later if multiple
  mechanisms require offscreen state changes before discovery.
- Adding that scheduler now would make the first content pass slower and less
  local without enough implementation evidence.
- Direct state access such as `state.enforcement.visibility` is preferable to
  selectors until repeated invariants justify helpers.
- A single global state schema is acceptable while the state remains readable.

## Game Extrapolations Allowed As Drafts

Agents may draft these as playable simplifications, but should label them as
draft extrapolations until Jörn/source review:

- visible advisor cards that report discoveries of earlier offscreen events;
- card rates as rough monthly hazards;
- public fatigue or institutional drift as functional state curves;
- resource bars as compressed indicators of political power, intelligence,
  safety progress, and algorithmic/capability pressure;
- dummy deaths and tutorial text for mechanical testing.

## Open Questions

These should not be silently resolved as implementation facts:

- Which hidden/offscreen processes must eventually change state before the
  director learns about them?
- Which rates should be state-dependent, and which should stay static during
  the first playtestable model?
- Which resource bars, hidden state variables, and terminal conditions survive
  expert review?
- Which card concepts are expert-grounded enough to implement beyond dummy
  scaffolding?
- How much false causal story-making by players is acceptable or useful in the
  independent-process experiment?

## Source Routing

- Use `FACTSHEET.md` for durable project facts and approval boundaries.
- Use `ARCHITECTURE.md` and `docs/architecture.md` for current implementation
  and architecture reasoning.
- Use `docs/expert-model-chat-excerpts.md` for recovered raw Jörn wording from
  the 2026-05-11 expert-model extraction stream.
- Use `docs/expert-model-recovered.md` for recovered synthesis, then check
  against raw excerpts before treating a point as Jörn-provided context.
- Use `docs/review.md` for validation and review workflows.
- Use `literature/INDEX.md` and source notes for source-derived claims.
- Ask Jörn before changing the game's thesis, political model,
  player-facing terminology, card concepts, major UX direction, final feature
  set, or expert predictions.
