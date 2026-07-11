# Expert disagreement elicitation interface

Status: a human-review protocol. It is optimized first for rapid error discovery,
then for quantification. It should be rendered as short cards or a form rather
than sent as one dense memo.

Reconstruction boundary: see `forecast-ontology-and-first-year-decomposition.md`.

## Separate the two review products

### Product A — “What the project believes, and why”

Goal: knowledge transfer. Each topic may use the format best suited to it:

- a sparse influence diagram for cross-domain causal structure;
- a process/timeline for monitoring, response and treaty failure;
- equations or pseudocode for a dense technical submodel;
- prose arguments for ontological uncertainty and model limits;
- source cards for empirical claims;
- paired trajectories where timing and interaction matter.

Every review card carries `S`, `I`, `J` or `F` provenance shorthand and a
confidence-in-model label distinct from event probability. The expert atlas uses
the more detailed provenance classes in `../expert-model/provenance.md`; the
crosswalk is `S` = externally sourced classes, `I` = `PROJECT-SYNTHESIS` or
`PROJECT-CONJECTURE`, `J` = `EXPERT-JUDGMENT`, and `F` = game fixture. This
product may be long.

### Product B — “Find our mistakes quickly”

Goal: disagreement elicitation. Show only claims with high decision/architecture
sensitivity or weak support. One card should take roughly 30–120 seconds on the
first pass. It must not require decoding simulator vocabulary.

Do not combine these products into an enormous graph. The atlas can link to a
graph; the review surface should expose one crux at a time.

## Review passes

### Pass 1 — red flags

For each card, reviewer selects:

- roughly right;
- wrong sign/order;
- missing major branch;
- incoherent distinction;
- too confident / should remain unknown;
- not worth representing in the game.

Optional one-sentence correction. No numbers requested.

### Pass 2 — causal repair

Only flagged or high-sensitivity cards return. Ask the reviewer to edit the
smallest causal chain, name a rival model, or give a counterexample. Show the
project's reason and best contrary argument.

### Pass 3 — comparative forecast

Ask pairwise conditional questions before absolute probabilities:

- Under the same sampled world, does policy A make event E more or less likely
  than B during the first year?
- Is the effect negligible, modest, large, or sign-uncertain?
- Which hypothesis reverses it?
- Is most of the effect in days/weeks, months, or later years?

### Pass 4 — bounds

Only for variables that survive pruning and materially affect play:

- plausible lower and upper assessment;
- central assessment if useful;
- story near each bound;
- confidence that the true personal belief lies inside the interval;
- what evidence would move the estimate most.

Do not ask for decimals when only order-of-magnitude or broad bands are stable.

### Pass 5 — reconciliation, not forced consensus

Show experts each other's arguments before revised private estimates. Preserve
named rival models when disagreement remains. Aggregation is appropriate only
after checking that experts answered the same operational question and that the
mixture is useful for the game's purpose.

## Standard claim card

```text
ID / topic:
Decision affected:
Time window and starting state:
Intervention A / intervention B:

Project claim:
Because (3–5 causal links):
Evidence and provenance:
Best rival explanation:
Current representation proposal:

Quick response:
[ ] roughly right
[ ] wrong direction
[ ] missing branch
[ ] distinction incoherent
[ ] should remain unknown
[ ] not game-worthy

Correction / missing mechanism (optional):
Would this change a policy ranking or only the frequency/flavor of events?
```

## Conditional forecast card

```text
Resolvable event:
Window: 2026-08-01 through 2027-07-31
Information date: 2026-07-11
Starting facts held fixed:

Policy A (operational definition):
Policy B (operational definition):

First: P(E|do(A)) compared with P(E|do(B)) is
[ ] much lower [ ] lower [ ] about same [ ] higher [ ] much higher [ ] unknown sign

Dominant causal path:
Sign-reversing hypothesis:
Timing: [ ] days/weeks [ ] months [ ] later [ ] mixed

Only if useful:
P(E|do(A)): lower __ central __ upper __
P(E|do(B)): lower __ central __ upper __
Interpret interval as: __% confidence / plausible-model range / other
```

Avoid presenting two independent sliders first: that encourages incoherent
answers and hides the causal contrast.

## Path card

```text
Outcome:
Proposed path: A -> B -> C
Possible bypasses:

1. Is A a coherent event? yes / repair / no
2. Given A, is B the next useful distinction? yes / missing mediator / no
3. Can C occur without A or B? how?
4. Which link dominates uncertainty?
5. Which link can policy affect before its deadline?
6. Which links are observable, and to whom?
7. What persistent world hypothesis correlates the links?
```

Request probabilities only after path repair. If elicited, use
`P(A)`, `P(B|A)`, `P(C|A,B)` plus bypass probabilities; do not multiply informal
marginals.

## Model-pruning card

```text
Candidate mechanism:
What it changes in reality:
Smallest proposed game representation:

Does varying it widely change:
- preferred policy? yes / no / unknown
- available warning or intervention? yes / no
- reachable win/loss path? yes / no
- important public misconception? yes / no
- only event frequency/flavor? yes / no

Would mechanizing it imply more knowledge than we have? low / medium / high
Recommendation: explicit / latent / composite / authored / atlas-only / omit
Reason:
```

## Proposed first-year review batch

This batch asks Jörn only for frontier or cross-domain judgment after standard
research has supplied operational definitions and candidate mechanisms.

1. **Opening inference contrast.** Pairwise effects of cold, restricted and broad
   inference on research acceleration, attack capability, workload ambiguity,
   concentrated opposition and durable political support. Ask timing and
   sign-reversing hypotheses before probabilities.
2. **Control establishment.** Given immediate monitors at known frontier sites,
   which remaining paths dominate the chance that a prohibited consequential
   workload completes in year one: inadequate authority, inference/post-training
   ambiguity, undeclared compute, military/intelligence scope, insider conduct,
   distributed resources or delayed response?
3. **Carrier transitions.** Rank the likelihood and detectability of
   context-local, communicated, scaffold-persistent and successor-inherited
   improvements under each inference policy. Do not ask for “RSI probability” as
   one event.
4. **Political-operational failure.** Under continued top-leader catastrophe
   belief, compare the year-one contribution of physical access loss, emergency
   authority, subordinate conduct, bargaining linkage, issue displacement and
   false higher-order beliefs.
5. **Safety-review false pass.** Which year-one institutional/evidence paths
   could generate a confident release recommendation without objective adequacy?
   This elicits an attack tree, not an alignment-success base rate.

Before sending these, ordinary research should provide a sourced menu of covert
compute paths, current infrastructure facts, domestic implementation pathways,
and relevant historical institutional mechanisms. Jörn should be asked to
correct/weight that menu, not recreate standard research from memory.

## Coherence and quality checks

- Parent probabilities bound children; mutually exclusive exhaustive outcomes
  sum to one.
- Event occurrence, detection, reporting and response are separate.
- Conditional forecasts share an identical starting state and information date.
- Policies are operationally specified; labels such as “strong treaty” are not
  accepted.
- Correlated uncertainty is assigned to named persistent hypotheses rather than
  independent event noise.
- Reviewer confidence in reasoning is not substituted for event probability.
- Fixture numbers are hidden from the judgment form or visibly marked `F` to
  avoid anchoring.
- Disagreement about definitions is resolved before disagreement about numbers.
- The interface records “unknown sign” and “not worth modeling” as first-class
  answers.
- A reviewer can see how their correction will alter atlas, game model or both.

## What standard methods can and cannot contribute

Structured expert-judgment protocols support private initial estimates,
discussion, revision and explicit aggregation. Proper scoring rules can
incentivize honest probabilistic reports for resolvable events. Calibration
questions may help evaluate ordinary geopolitical or implementation forecasting.

They cannot validate expertise on unprecedented RSI routes merely by using
generic seed questions, establish that historical-treaty frequencies transport
to an ASI pause, or resolve ontology disagreement by averaging. Those limits
should remain visible in the review record.
