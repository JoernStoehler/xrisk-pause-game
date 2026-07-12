# Model and effort routing

Status: provisional routing prior, 12 July 2026. This records Jörn's working
observations and evidence from the 11 July game session; it is not a benchmark,
provider guarantee, or permanent ranking. Update it only when repeated work or
a clear counterexample changes a routing decision.

## Governing idea

Choose the cheapest model-effort combination likely to produce a trustworthy
artifact for the task. Model family should match the kind of work; reasoning
effort should match its difficulty and consequence. Higher effort does not
repair missing context, a bad success criterion, or the wrong decomposition.

The lead remains responsible for integration. A specialist may derive a hard
result, but must return enough evidence and decision breadcrumbs for the lead
to understand, challenge, and use it without independently repeating all work.

## Current family priors

| Family | Best current uses | Current weaknesses or quirks | Confidence |
| --- | --- | --- | --- |
| **Luna** | Broad web or repository investigation, extraction, inventories, source mapping, citation collection, mechanical audits, and other high-churn exploration. | Can over-collect, flatten source quality, or turn purposive samples into broad conclusions unless the prompt requires source status, limits, and a decision use. Not the default for high-taste synthesis or expert-model judgment. | Medium; supported by useful audience/history exploration and the need for stronger synthesis above it. |
| **Terra** | Frontend and engine implementation, tests, migrations, refactors, ordinary debugging, and rapid UI iteration from an explicit design target. | Can optimize measurable constraints—tests, viewport fit, requested mechanics—while missing omitted product-quality dimensions. Visual taste, semantics, and product approval need separately framed review or human evidence. | Medium-high for implementation; the rejected mobile UI is direct evidence about framing limits, not proof that Terra cannot design. |
| **Sol** | Research taste, architecture and product comparison, strategic planning, cross-stream synthesis, expert/game-model reasoning, threat-model sensitivity, and adversarial review. | More expensive and often slower. Can produce fluent, lengthy frameworks or causal explanations that outrun evidence, especially during reactive chat. High effort does not substitute for an external priority model or scoped review criteria. | Medium-high for abstract work; the 11 July session supports both the capability and failure-mode claims. |

These are task priors, not identities. Prefer observed performance on a closely
matching task over the table.

## Effort priors

| Effort | Use when | Avoid when |
| --- | --- | --- |
| **Low / light** | The task is bounded, familiar, reversible, and has explicit inputs and acceptance criteria; examples include mechanical edits, narrow comparisons, implementation plans, specs, or user stories. | The crux is ambiguous, evidence is noisy, or an unnoticed conceptual error would redirect substantial work. |
| **Medium** | Default for substantive work in the model's strong domain: ordinary implementation, focused research, synthesis, review, or orchestration with a usable project model. | A failed medium attempt identifies a genuine reasoning bottleneck rather than missing context or bad task framing. |
| **High** | The task contains a real hard crux, difficult debugging, noisy evidence reconciliation, expert-model reasoning, or high-consequence cross-domain synthesis. | Used merely to signal importance, compensate for an underspecified prompt, or make several agents independently solve the same problem. |
| **xHigh / max** | A demonstrated hard problem remains after lower-effort work, or a costly one-shot decision justifies unusually deep adversarial reasoning. | Routine implementation, broad exploration, ordinary planning, or as the root default throughout mixed phases. Expect diminishing returns and potentially larger outputs. |

## Useful starting combinations

| Task | Start with | Escalate when |
| --- | --- | --- |
| File/repository inventory, extraction, broad web scan | Luna medium | Luna high when source reconciliation or adversarial filtering is the actual bottleneck. |
| Dated web investigation with a clear synthesis consumer | Luna medium for source work; Sol low or medium for synthesis if needed | Sol high only when the synthesis has a difficult strategic or expert crux. |
| Frontend, game-engine, tests, migration, known architecture implementation | Terra medium | Terra high for difficult unfamiliar debugging or a failed medium implementation with a clear technical bottleneck. |
| Bounded architecture comparison, implementation plan, spec, user stories | Sol low | Sol medium when alternatives interact across several systems or product outcomes. |
| Ordinary root integration, prioritization, review routing | Sol medium | Sol high for a direction-changing strategic synthesis; lower the root again when the phase becomes mostly implementation. |
| Expert model, treaty scenario reasoning, game-model approximation of expert structure | Sol high | xHigh/max only after identifying the unresolved crux and why high is insufficient. |
| Visual implementation from an accepted art/interaction brief | Terra medium | Terra high for difficult implementation; use a distinct visual-craft reviewer and Jörn/human taste rather than only raising coding effort. |
| Independent factual or citation audit | Luna medium or Terra medium for mechanical checks; Sol low/medium for claim reasoning | Higher effort when disagreement turns on subtle source interpretation rather than coverage. |

## Routing procedure

1. Name the artifact, decision it serves, error cost, and validation method.
2. Select the family whose strengths match the work; start at the lowest effort
   likely to be reliable.
3. Request bounded output with sources, assumptions, alternatives, conclusion,
   and reversal conditions when the result will guide another agent.
4. Review the result before spawning another agent. Escalate because of an
   identified failure or crux, not because more budget is available.
5. Use parallel independent agents only when their work separates cleanly or
   disagreement itself supplies information.
6. Reuse durable investigations and prior artifacts instead of paying to
   rediscover them.

## Root-session choice

The root needs enough capability to select targets, integrate specialist work,
and notice when a locally good artifact does not advance the project. It need
not personally perform every deep derivation.

Current default for a fresh mixed-phase root: **Sol medium**. Delegate expert or
strategic cruxes to Sol high with evidence-rich handoffs; use Terra medium for
implementation and Luna medium for exploration. Recommend that Jörn change the
root model or effort at a clear phase boundary when expected savings or quality
gain materially exceed interruption cost. Do not interrupt him for marginal
per-turn tuning.

## Known cross-model failure modes

- Agents optimize the supplied frame. Missing success dimensions are not
  reliably recovered by intelligence or higher effort.
- Passing tests or a narrow reviewer verdict can be overgeneralized by the
  coordinator. State the exact verdict scope.
- Cheap parallelism can be expensive in aggregate through duplicated context,
  polling, integration, and artifact proliferation.
- Long output can look like deep reasoning. Ask for the smallest artifact that
  preserves the decision-relevant reasoning breadcrumbs.
- A lower-cost specialist is not a source of truth. Validate according to the
  claim and consequence, not the model label.

## Updating this prior

When an observation would change future routing, record:

- date, model family, effort, and task type;
- prompt/context quality and requested artifact;
- what succeeded or failed;
- whether the bottleneck was capability, effort, missing context, framing,
  tooling, integration, or human-only evidence;
- the routing change, if any.

Do not infer a general capability limit from one bad prompt or one favorable
artifact. Preserve counterevidence and revisit this matrix when model versions,
prices, or observed behavior change.
