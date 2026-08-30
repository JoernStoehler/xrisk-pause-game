---
name: product-development
description: Use for product discovery, game and interaction design, prototyping, implementation planning, playtest preparation or interpretation, product-artifact review, or delegation of an end-to-end game product slice. This skill owns player/use-context decisions and the route from product hypothesis to inspectable artifact and relevant evidence. Do not use for ordinary bounded code fixes, pure domain research, deployment, or game-model changes with no product or player-facing decision.
---

# Product Development

Route work to the smallest set of current owner files and references needed for
the live product decision. Do not load this package as a checklist. Product,
game-model, research, implementation, and review state remain with their repo
owners.

## Outcome, Players, And Surfaces

- Read `docs/product/PRIORITY_DECISION_LEDGER.md` when choosing or comparing
  project-level product work. Inspect its freshness and authority before using
  it as the current allocation; it is an allocation model, not a backlog.
- Read `docs/product/SUCCESS_MODEL.md` when defining or reviewing the quality
  dimensions a product artifact is intended to advance.
- Read `docs/product/PRODUCT_ARCHITECTURE_PORTFOLIO.md` when the use context or
  durable product shape is at issue.
- Read `docs/game-design/README.md` for current game-design premises, loop
  families, player experience, and unresolved product cruxes.

Name the player or facilitator, use context, player decision, intended felt
experience, and downstream product question. Prefer the smallest inspectable
artifact that can discriminate among live alternatives. Do not treat more code,
content, polish, or research as progress without a consumer or decision.

## Domain And Game-Model Boundaries

Read `docs/game-model/README.md` and the narrowest relevant model owner before a
product artifact depends on simulation semantics. Preserve source fact, Jörn
judgment, project inference, diagnostic fixture, playability transform, and
approved player-facing claim as distinct statuses.

Research is a dependency when a player-facing claim, market/use-context choice,
or model assumption actually needs evidence. Default product work should create
and test product ideas, interactions, implementations, and reviewable artifacts;
do not instantiate a broad scientific-research workflow merely because the
game touches economics, sociology, law, politics, or AI risk.

## Artifact Loop

1. State the product hypothesis and what observation would change the decision.
2. Compare materially different interaction or product alternatives before
   implementation makes one route feel inevitable.
3. Build the cheapest artifact that preserves the disputed experience and
   semantic boundary. Use code when behavior, state, responsiveness, or
   instrumentation matters; use a lighter artifact when it does not.
4. Inspect the artifact in its real context. For UI, render phone and desktop
   states and inspect interaction, clipping, hierarchy, and expected variants.
5. Route review through `docs/review/REVIEW_ROUTING.md`. Keep verdicts scoped;
   agent review cannot establish fun, comprehension, taste, demand, or virality.
6. Revise, stop, or prepare a human test from the observed result. Read
   `references/plan-from-playtest-readiness.md` before spending scarce player,
   facilitator, expert, or Jörn attention.

## Agent Workflow

- Read `references/coordinate-product-agents.md` before distributing substantial
  preparation, production, or review work.
- Read `references/delegate-product-slice-ownership.md` when a fresh autonomous
  session may own a whole product slice through design, implementation, review,
  and return.
- Use `$orchestrate-project` when several streams or project-level priorities
  interact. This skill owns product-local workflow, not the root portfolio.
- Use `$subagent-prompting` for substantial bounded fresh-subagent assignments.
- Read `references/adaptation-todos.md` only when reviewing or extending this
  skill. Its gaps are not ordinary task requirements.

Treat the first use of an unfamiliar workflow as a trial. Evaluate the returned
artifact, downstream usability, integration and review cost, and human-evidence
boundary. Update durable guidance from observed behavior, not agent confidence.
