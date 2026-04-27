---
name: research-topic
description: "Use when turning expert literature, current sources, or design questions into source-grounded pause-game mechanisms, scenarios, card concepts, or domain-model updates."
---

# Research Topic

## Purpose

Produce game-usable design material that is grounded in sources and compatible
with the current pause-game model. The usual output is a short synthesis,
scenario mechanism list, or proposed additions to `design/card-concepts.md`.

## Inputs To Check

- `TASKS.md` for the current content gap and escalation marker.
- `design/domain-model.md` for the settled model and resource mapping.
- `design/card-concepts.md` for existing concepts and duplicates.
- `design/geopolitics-synthesis.md` and `design/research/*.md` when working on
  enforcement, corruption, sanctions, arms control, or geopolitics.
- `literature/INDEX.md`, `literature/REFERENCES.md`, and relevant
  `literature/*` files for source notes.
- `design/iabied-vocabulary.md` when using treaty or book terminology.

## Workflow

1. Define the research question in game terms: which mechanism, scenario, card
   family, or model gap is being filled.
2. Gather sources narrowly. Prefer primary sources, expert reports, or existing
   repo literature notes. For current-world facts, browse and record the
   concrete source/date.
3. Extract mechanisms, not summaries. A useful mechanism names actors,
   incentives, constraints, observable signals, failure modes, and timescale.
4. Map each mechanism to game levers: resources, hidden state, `poolWeight`
   conditions, history chains, card tags, or design-document changes.
5. Separate source-backed facts from game extrapolations.
6. Check against existing concepts before proposing new ones.

## Output Shape

Prefer concise structured output:

- research question
- sources checked
- mechanism list with source anchors
- game mapping for each mechanism
- proposed card concepts or domain-model edits
- uncertainties and Jörn-only decisions

Do not add large prose literature reviews unless asked. If writing directly to
repo files, keep citations or source pointers close to the mechanism they
support.

## Stop Conditions

Stop for Jörn review before:

- changing the core domain model or resource mapping;
- encoding contested real-world claims without adequate source support;
- adding card concepts that change the game's thesis or political model;
- treating agent-written research as validated expert judgment.
