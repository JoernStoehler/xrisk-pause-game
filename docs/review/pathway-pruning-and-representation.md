# Which pathways belong in the game?

Status: decision protocol for model scope. It evaluates explanatory and public-
discourse value, not merely simulation accuracy.

Reconstruction boundary: see `forecast-ontology-and-first-year-decomposition.md`.
The current instance of the expert-atlas graph is
`symbolic-stochastic-expert-model.md`.

## Two independent presentation layers

The project should maintain two intentionally different objects.

### Expert atlas

The atlas is an auditable map of what the project currently believes and why.
It may contain prose arguments, sparse causal diagrams, dense submodel references,
contradictions, credal intervals, unquantified arrows and links to literature.
Natural mess is acceptable. Its job is knowledge transfer and locating errors.

### Game-model specification

The specification is the complete symbolic territory implemented by the game:
state, latent variables, event processes, policy actions, observations, update
rules, terminal conditions and fixture/calibration values. It must be explicit
enough that an interested expert can explain a run without reading source code.

Neither is the source of truth about reality. The expert atlas need not be
compiled into the engine. The engine must link each important simplification to
the richer atlas claim it approximates or omits.

A side-by-side comparison is useful only at selected interfaces:

| Expert-atlas claim | Engine approximation | Known distortion | Why retained |
| --- | --- | --- | --- |
| Named causal claim | State/event/rule IDs | What is collapsed | Decision or teaching value |

Do not force identical graph form merely to make every row align.

## A hybrid symbolic form for the expert atlas

A graph is useful at the sparse interfaces between domains, not as a demand that
every argument become a Bayesian network. Use a time-sliced influence diagram
with typed nodes and typed edges:

```text
[persistent hypothesis H] ──modulates──> [dense technical/political process]
          │                                      │
          └──modulates observability─────────────┤
                                                 v
[policy decision] ──causes──> [world state] ──emits──> [evidence]
       ^                                          │
       └──────── advisor/institution report <────┘
                           │
                           └──informs, not causes──> [next policy decision]
```

Node types:

- persistent world/model hypothesis;
- actual state or conduct;
- actor belief/preference/authority;
- policy decision or contingent rule;
- observation, report or public signal;
- dense submodel capsule;
- irreversible/terminal outcome.

Edge types:

- causal effect;
- information/observation;
- authority or permission;
- definitional/logical constraint;
- “modulates transition” rather than a direct event;
- literature or argument reference.

Every edge should expose direction confidence (`robust`, `model-dependent`, or
`unknown`) separately from magnitude. Put no number on an edge unless the
derivation and provenance are inspectable. Cycles such as policy -> constituency
formation -> later policy are represented across time slices rather than hidden
inside an acyclic static picture.

Dense capsules can contain prose, equations, code-level specifications or their
own diagrams. The outer graph needs only their input/output contract—for example:

```text
Inference-use capsule
inputs: policy permissions, access, model profile, demand, enforcement
outputs: useful-service benefit, research experiments, offensive assistance,
         cover traffic, observed incidents, concentrated interests
internal status: structural hypotheses + empirical submodels + unknown links
```

This lets experts review cross-domain arrows without pretending that sociology,
cognitive reinvestment and verification all share one convenient parametric
form.

## Representation tiers

Every candidate pathway receives one of six treatments:

1. **Explicit process.** Typed state and transitions; players can observe or
   influence part of the chain.
2. **Persistent latent hypothesis.** Sampled per run and exposed indirectly;
   appropriate for correlated model uncertainty.
3. **Composite process.** Several mechanisms share an interface but retain named
   subtypes in logs/explanations.
4. **Authored event sequence.** Sparse contingent events approximate a process
   whose full dynamics would add little decision value.
5. **Atlas-only caveat.** Explained as omitted uncertainty or model limit.
6. **Omitted.** No meaningful effect on the target experience.

The choice is about explanatory sufficiency, not ontological importance. A very
important real-world mechanism may be atlas-only if no playable representation
can teach it without implying knowledge we do not have.

## Inclusion gates

A pathway should normally be represented explicitly or as a persistent latent if
one or more of these gates is strong:

### G1 — policy-ranking sensitivity

Across plausible settings, it changes which available policy is preferable or
whether an action is robust. Example: inference-assisted research versus the
political durability benefit of retaining useful services.

### G2 — distinct preventable failure

It reaches a major outcome through a different intervention point, warning sign
or countermeasure. Example: physical loss of inspector access is not equivalent
to leaders ceasing to believe the catastrophe argument.

### G3 — public misconception coverage

Leaving it out would preserve a central target-audience misconception: that a
pause is only liability after harm, that “monitoring” guarantees knowledge, that
one cohesion meter describes a treaty, or that a safety committee observes true
safety directly.

### G4 — recurrent causal leverage

It affects many events or years, making a latent variable or reusable submodel
more economical than repeated authored exceptions.

### G5 — legible uncertainty

Correlated uncertainty itself creates replay value and an honest lesson. The
player can gather evidence or adapt policy without the result feeling like an
independent random punishment.

### G6 — outcome explanation

Without it, a win or extinction path would look arbitrary or convey a false
causal account.

No gate automatically implies a complicated implementation. It determines that
the mechanism must survive somewhere in the game-facing explanation.

## Costs and hazards of inclusion

Score these separately from importance:

- **Judgment burden:** how many unsupported priors or conditional effects are
  needed?
- **identifiability:** could very different mechanisms generate the same visible
  evidence?
- **interaction burden:** are there meaningful player actions, or only extra
  screens?
- **explanation burden:** can a player understand why the state changed?
- **content burden:** number of events/advisor interactions required for coverage.
- **runtime/testing burden:** state-space and regression complexity.
- **misleadingness:** does a crisp mechanic imply a known law where we have only
  a speculative analogy?
- **balance pressure:** will fun require silently distorting a central causal
  claim?
- **update volatility:** is the pathway tied to fast-changing facts rather than a
  durable mechanism?

Text/code rewrite cost is intentionally low in this project. The dominant cost
is not diff size; it is the chance that an opaque abstraction teaches the wrong
model, destabilizes architecture, or makes expert review intractable.

## A decision-focused value test

Do not invent a precise additive score. Record an ordinal profile:

```text
Pathway candidate:
Decision/public-discourse value:
  policy-ranking sensitivity: none / weak / strong
  distinct intervention or warning: none / weak / strong
  misconception coverage: none / weak / strong
  recurrent leverage: none / weak / strong
  outcome-explanation need: none / weak / strong

Representation cost/risk:
  unsupported-judgment burden: low / medium / high
  misleadingness if mechanized: low / medium / high
  player opacity: low / medium / high
  implementation coupling: low / medium / high

Proposed tier:
Smallest faithful representation:
What would change this decision:
```

High-value/high-cost mechanisms become explicit but coarse, or latent plus
authored manifestations. Low-value/high-cost mechanisms become atlas caveats.

## Sensitivity-based pruning procedure

For each candidate pathway:

1. State the causal distinction in one paragraph.
2. Identify available player policies that touch it before the outcome.
3. Set the mechanism to at least three deliberately wide plausible regimes—not
   a cosmetic ±10% perturbation.
4. Re-run matched worlds with the same other latent hypotheses and shocks.
5. Check whether it changes policy ranking, reachable outcomes, useful warning
   signals, or the explanation a player should learn.
6. If none changes, collapse or omit it.
7. If only flavor frequency changes, use authored event weighting rather than
   core state.
8. If behavior changes but no evidence could distinguish regimes, represent a
   persistent hidden hypothesis and explain retrospective uncertainty; do not
   grant the player a meter.
9. If the pathway matters only outside the playable horizon, keep the smallest
   interface needed for later years.
10. Record the deletion test so future research can reverse it.

This is closer to exploratory modeling than parameter fitting. Under deep
uncertainty, the useful question is often whether a policy conclusion survives a
family of plausible structures, not which one unvalidated point model optimizes.

## Collapse rules

Mechanisms may share a composite process when they have the same:

- player-observable precursors;
- available interventions and response deadline;
- effects on all displayed/decision-relevant state; and
- post-event explanation at the target audience's resolution.

Preserve the subtype in the run log if experts care about it even when gameplay
does not.

Never collapse mechanisms merely because they share the same eventual outcome.
Belief change, preference aggregation, subordinate evasion, loss of physical
control and false-positive escalation may all weaken compliance but imply
different policies.

## Candidate application to current pathways

These are provisional representation recommendations, not claims about their
likelihood.

| Pathway | Provisional tier | Reason |
| --- | --- | --- |
| Declared-site monitor access, authority and interruption latency | Explicit | Core correction to “make it illegal”; directly actionable and legible |
| Conduct -> trace -> collection -> interpretation -> authorized response | Explicit composite with visible failures | Central monitoring lesson; false positives and negatives differ |
| Cold/restricted/broad inference causal mediators | Explicit coarse process plus persistent hypotheses | Can reverse opening bargain and research rate |
| Compute/memory coverage and substitution | Explicit infrastructure interface; detailed engineering in dense submodel/atlas | Core treaty content, but component-level simulation can overwhelm play |
| US/PRC/ISIA actor asymmetry and task-specific authority | Explicit composite actors | A scalar cohesion meter would teach the wrong causal model |
| Leader belief change vs issue displacement vs subordinate conduct vs physical loss | Named subtypes, possibly authored sequences over shared state | Distinct warnings and countermeasures; full political microsimulation is unsupported |
| Context-local -> communicated -> scaffold -> inherited improvement carriers | Persistent technical hypotheses plus explicit traces | Correlated replay uncertainty and different response windows |
| Exact internal cognitive mechanism of self-improvement | Atlas-only or flavor subtype unless it changes observable intervention | High uncertainty and little direct player access |
| Candidate/threat/evidence/evaluator safety review | Explicit typed process | Prevents hidden “alignment progress” meter and supports exit decisions |
| Exact safe-objective solution | Atlas reference/fictionalized candidate-specific content | Unknown; a generic scalar would mislead |
| Background mass public opinion microdynamics | Coarse process with tested advisor events | Important but quantitatively weak; include only mediators tied to actions |
| Rare geopolitical events with no distinct intervention | Authored event or omit | Avoid gratuitous event-card randomness |

## Stopping rules

Stop decomposing when the next distinction:

- does not change an available decision, warning, outcome explanation or target
  misconception;
- cannot be reviewed more reliably than its parent;
- adds parameters whose uncertainty dominates the effect being represented; or
- would be better taught in an optional atlas note than through repeated play.

Resume decomposition when a new policy, empirical signal, or expert disagreement
makes the distinction decision-relevant.

## Evidence discipline

The public annotated treaty can define candidate mechanisms and legal/technical
interfaces (`S`). It cannot by itself give their success probabilities. Historical
treaties can establish recurring failure processes and possible countermeasures
(`S`), with transfer to this setting as a separate inference (`I`). Jörn's
frontier judgments should be attributed (`J`) and may define rival hypotheses
rather than a forced consensus. Runnable placeholders remain `F`.

Useful general references:

- Bankes, “Exploratory Modeling for Policy Analysis” (1993),
  <https://doi.org/10.1287/opre.41.3.435> — exploring families of plausible
  models rather than treating one fitted model as authoritative.
- Lempert, Popper and Bankes, *Shaping the Next One Hundred Years* (RAND, 2003),
  <https://www.rand.org/pubs/monograph_reports/MR1626.html> — robust decisions
  and scenario discovery under deep uncertainty.
- Saltelli et al., “Five ways to ensure that models serve society” (2020),
  <https://doi.org/10.1038/d41586-020-01812-9> — assumptions, uncertainty,
  sensitivity and humility in policy modeling.

These sources support the process, not any ASI-treaty parameter value.
