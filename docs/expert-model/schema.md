# Atlas schema

The atlas uses readable prose first and structured claim cards when structure buys something. A page should not be converted into dozens of nodes merely to appear formal.

## Claim card

```yaml
id: CAP-RSI-03
title: A bounded self-improvement episode need not become runaway RSI
kind: mechanism                 # mechanism | constraint | forecast | observation | intervention | dispute
scope: technical takeoff
conditions:
  - an AI can identify and apply at least one improvement to its own cognition or research process
claim: >
  The episode may produce a capability jump and then stop because a different
  bottleneck becomes binding or because the improvement is not inheritable.
likelihood_status: live branch  # optional; use the vocabulary in README
confidence_basis: medium        # strength of reasons, not event probability
why:
  - improvements can be local to a context, scaffold, or bottleneck
  - recursive production requires inheritance and another reachable improvement
alternatives:
  - the first accessible improvement crosses several bottlenecks and initiates runaway reinvestment
observables:
  - repeatable gains under context reset
  - transfer of gains to successor systems
interventions:
  - restrict persistent memory and experimental access
downstream:
  - CAP-RSI-05
provenance:
  - JORN-REVIEW-2026-07-CAP
  - ATLAS-SYNTHESIS-01
review_state: draft              # draft | internally challenged | reviewed | disputed
cost_to_model: medium            # low | medium | high
game_relevance: critical         # peripheral | useful | critical
```

## Required distinctions

### Claim strength versus event likelihood

`confidence_basis` asks how well supported the causal claim is. `likelihood_status` asks how often the event or path occurs in the stated conditional world. A well-established mechanism can be rare; a weakly evidenced event can be the project's central forecast.

### Territory versus observation

Every important hidden process should have a separate observation pathway. For example:

- actual prohibited training;
- sensor evidence;
- inspector interpretation;
- recipient-specific report;
- political response.

Collapsing these into “detected violation” erases false positives, concealment, organizational filtering, and disagreement.

### Intervention versus implementation

A legal decision is not a physical outcome. When relevant, an intervention record should distinguish proposal, authority, approvals, implementation capacity, implementation, adaptation, and side effects.

### Model uncertainty versus stochastic uncertainty

- **stochastic uncertainty:** outcomes vary even within a specified causal model;
- **model uncertainty:** live models disagree about the variables, causal structure, or asymptotics;
- **deep uncertainty:** the project cannot yet enumerate an adequate set of models.

The atlas should not force deep uncertainty into a wider numeric prior.

## Relation types

Use only relations that a reader can interpret without consulting code:

- `enables`: makes a pathway possible;
- `amplifies` / `attenuates`: changes its intensity or speed;
- `substitutes_for`: provides another route to a similar result;
- `reveals` / `obscures`: changes observability;
- `legitimates` / `delegitimates`: changes willingness to sustain an institution or action;
- `requires`: a genuine bottleneck under the stated model;
- `competes_with`: draws on the same scarce resource or political priority;
- `updates`: evidence changes a belief distribution.

Avoid a generic “causes” edge when a more informative relation is known.

## Dense submodels

A graph node may point to a prose or mathematical object instead of expanding it. Good candidates include:

- item-response or scaling models for capability profiles;
- research task graphs and candidate portfolios;
- bargaining and repeated-cooperation models;
- organizational information-flow models;
- public-opinion and elite-cue dynamics;
- compute, memory, energy, and supply-chain accounting.

The node should still state the inputs, outputs, domain of validity, and known failure modes of that object.

## What not to encode

Do not encode a distinction if all three are true:

1. it does not change a policy ranking, observable warning sign, player decision, or interpretation of an outcome;
2. no expert reviewer is likely to locate an important disagreement there;
3. adding it would materially increase elicitation or implementation cost.

Record the omission in a pruning note if a reasonable reviewer might otherwise mistake it for ignorance.
