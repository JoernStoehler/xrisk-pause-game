# Adversarial audit of the symbolic game model

Date: 2026-07-11
Scope: `docs/game-model/`, checked against the dated records in `source/`,
`docs/expert-model/`, and `docs/review/`.
Review target: readiness for high-level expert review, not numerical calibration
or production implementation.

## Verdict

**Ready for a high-level review of causal scope, distinctions, and pruning. Not
ready to serve as a complete symbolic engine or as a behavioral conformance
oracle for future code.**

An expert can now see the intended major pathways, identify omitted mechanisms,
and challenge the distinctions among truth, evidence, authority, implementation,
access, technical improvement, safety recognition, and outcomes. The documents
also preserve the project's main prohibitions against magical compliance,
scalar treaty health, scalar alignment progress, and a one-number RSI trigger.

The remaining limitation is not primarily missing prose. `model.yaml` is an
architectural inventory with broad module contracts. It does not yet define the
typed state space, event schemas, transition kernels, latent dependency
structure, or calibrated/fixture parameter set needed to reproduce behavior.
Consequently, a developer could build two materially different simulators that
both claim conformance to the present file.

## Findings that block implementation-level conformance

### 1. The canonical artifact is not yet a complete transition system — high

The README calls `model.yaml` the canonical symbolic inventory and describes a
finite inspectable model. The companion review method says the game-model layer
should eventually include complete state, events, update rules, terminals, and
fixture/calibration values. The current artifact contains inventories and prose
semantics, but not:

- field types, units, cardinalities, allowed values, mutability, and visibility;
- operational event definitions and resolution conditions;
- conditional distributions or fixture namespaces;
- explicit dependencies among persistent hypothesis components;
- transition preconditions, ordering conflicts, and failure outputs;
- initialization values for a dated world snapshot; or
- a complete rule for generating actor opportunities, proposals, and conduct.

This is appropriate for the present review stage, but the artifact should be
called an **architectural symbolic specification**, not the complete model the
game runs, until those layers exist.

### 2. Read/write references are descriptive rather than resolvable — high

Transition `reads` and `writes` mix hypothesis IDs, entity collection names,
state-section names, action IDs, field-like strings, and undefined derived
objects. For example, an action such as `A_INFERENCE` is listed as a read beside
world state, while outputs such as `project_opportunities` do not have canonical
state paths. Several references use a short name where the inventory uses a
longer path.

Before code comparison, every reference needs a stable namespace, such as
`state.technology.capability_profiles`, `entity.model_asset.actual_uses`,
`event.action.A_INFERENCE`, or `derived.response_window`. A schema checker should
reject unknown references. Otherwise the proposed mutable-field inventory in
`implementation-map.md` cannot be performed reliably.

### 3. There is no claim-to-mechanic crosswalk — high

The game layer correctly remains independent of the expert atlas, but it does
not yet link actions, latent families, transitions, and pruning decisions to
specific atlas claim IDs or source/provenance entries. An expert can compare the
documents conceptually, but cannot answer:

- which expert claim a transition approximates;
- which rival hypotheses a latent family preserves;
- which distortion was accepted for playability;
- whether a later code change silently changes the expert-facing claim; or
- which review result should invalidate a mechanic.

Add a sparse crosswalk only at decision-relevant interfaces. It need not force
the atlas and engine into the same graph form. Each row should give engine IDs,
atlas claim IDs, known distortion, representation tier, and a deletion or
sensitivity test.

### 4. The stochastic semantics are principled but incomplete — high

The documents correctly require a persistent sampled world, named conditional
draws, and matched-policy counterfactuals. They do not yet say what is sampled
inside each hypothesis family, which dependencies are structural, which shocks
remain stochastic after the initial sample, or how actor adaptation changes the
conditioning graph. Merely sampling one opaque `H_POL` or `H_REINVEST` object
could reintroduce an uninterpretable master latent.

The next specification layer should expose named subhypotheses and their
conditional interfaces without pretending to have final weights. Unweighted
stress worlds and calibrated playable worlds should use visibly separate
namespaces.

### 5. The global event order is insufficient for races and simultaneous action
— medium/high

The listed event order is a useful checklist, but not a scheduling semantics.
It does not resolve events with overlapping implementation windows, local stop
authority, information arriving during a project, multiple actor decisions, or
an improvement occurring inside one authorized inference episode. Those cases
are central to the policy argument.

Use an event queue with explicit start, observation, interruption, irreversible,
and completion times. Define precedence only where causal, rather than giving
every event the same turn-wide sequence. Actor conduct after a new policy or
report must be generated as a response, not only in a generic conduct-sampling
phase before the player's decision.

### 6. Dense submodels are named but do not yet have reviewable contracts — medium

The capability, reinvestment, political, economic, control, and safety modules
list broad inputs and outputs. They do not state domains of validity, internal
alternatives, invariants, or known failure modes at the granularity requested by
the expert-atlas schema. This is most consequential for:

- capability-profile production and benchmark observation;
- carrier transition and inheritance in reinvestment;
- workload/resource feasibility and distributed substitution;
- public response and constituency formation;
- evaluator evidence dependence and threat-model coverage; and
- takeover/access after a decisive unsafe process exists.

These capsules may remain prose, equations, or small symbolic models. They need
not all become expanded graph nodes.

## Symbolic completeness and pruning

### Major paths retained correctly

- Immediate known-site control can precede universal registration and
  consolidation.
- Hardware rights, physical custody, credentials, power, workload permission,
  actual use, sensing, interpretation, and response remain distinct.
- False positive, false negative, filtered report, and recipient-specific
  interpretation paths are representable.
- Existing-model inference has both political/economic benefits and technical,
  security, ambiguity, and evasion costs.
- Reinvestment distinguishes context-local, communicated, scaffold-persistent,
  and successor-inherited improvements, with fizzle and access paths.
- Institutional passage does not reveal objective safety; evaluator selection,
  correlated error, and dissent filtering remain live.
- Crisis can destroy operational restraint without changing top-leader
  catastrophe beliefs.
- Treaty degradation is not an instant loss. Unsafe technical activity still
  has to obtain resources, access, and a decisive outcome.

### Remaining pruning risks

1. **Third-country activation rules.** Third countries exist as a generic actor
   class, but the specification does not say when a state becomes explicit
   because it hosts compute, oil, fabrication, supply-chain leverage, sanctions,
   or a breakout project. Without such a rule, Saudi-datacenter and allied export
   paths can disappear into authored flavor.
2. **Actual technical work versus administrative classification.** The model
   contains authorized and actual workloads, but it still needs a typed workload
   ontology covering pretraining, post-training, distillation, fine-tuning,
   evaluation, inference-time search, safety experiments, and successor use.
   Otherwise classification ambiguity cannot be simulated rather than narrated.
3. **Safety threat completeness.** The recent correction separates the
   institution's proposed threat model from hidden world-relevant threats. The
   concrete derivation of objective adequacy must remain a conjunction of
   candidate-specific claims and route-specific hazards, not become a renamed
   hidden safety score.
4. **Unsafe decisive processes outside formal review.** The recent correction
   allows authorized, covert, ambiguously authorized, and within-inference
   decisive processes. The next layer must give each a real transition path;
   merely broadening `T_BUILD` prose is not sufficient.
5. **Long-run political economy.** Sectoral economic effects are now separated
   from reports and public beliefs, but their evolution remains a compressed
   interface. This is acceptable for release only if wide-regime sensitivity
   tests show that omitted macro feedback does not reverse the important policy
   rankings.

Treaty formation itself is intentionally conditioned away and is not a defect
for this game. Detailed warfare, exact scientific content, present-day weapon
mechanics, exhaustive alignment proposals, and ordinary country detail are also
defensible omissions under the stated scope.

## Scalarization audit

No explicit prohibited master scalar is required by the documents. In
particular:

- there is no survival-probability meter;
- treaty persistence is not caused by one cohesion value;
- safety labor does not increment objective adequacy;
- benchmark or effective-compute level does not directly trigger RSI; and
- intelligence collection is not one universal detection-skill number.

There are nevertheless implementation hazards. Terms such as operating
capacity, legitimacy, support, skill, latency, and control must compile to maps
or process-specific fields, not merely several renamed scalar meters. The audit
therefore changed the most ambiguous state entries to actor/task/site/channel-
specific forms. Objective safety may be summarized as a terminal Boolean only
after the required world-relevant claims and successor process have been
evaluated; that Boolean must not drive evidence or evaluator beliefs backward.

## YAML and reference-semantics audit

The file parsed successfully with PyYAML during the 11 July 2026 migration.
Schema-level validation remains absent; syntactically valid YAML is not by
itself a valid model contract.

Clear semantic repairs applied during this audit:

- compound status strings were replaced with lists using the documented status
  vocabulary;
- `latent_fact` was removed as a type of information object and replaced by an
  omniscient-trace reference;
- model weights and serving access became `model_assets`, separate from hardware;
- threshold policy now accepts a resource/workload/time accounting rule rather
  than implying one scalar compute cutoff;
- actual economic/distributional state was separated from public reports and
  perceptions, with a coarse economic transition module;
- a treaty bargaining/assistance/compensation action family was added, because
  positive cooperation is not the absence of enforcement;
- external events and crises became explicit objects;
- the mainline founding premises became a scenario initialization layer that is
  sampled before the hidden world and requires a dated starting-state card;
- safety candidates now separate their proposed threat model from hidden
  world-relevant threat coverage;
- decisive outcomes can arise through covert, ambiguously authorized, or
  within-inference processes rather than only a formal safety release; and
- several apparent organizational scalars were made actor-, task-, site-, case-,
  issue-, or channel-specific.

Still required for schema safety:

1. define a machine-checkable schema version;
2. give every state and event field a canonical path and type;
3. distinguish state inputs from action-event inputs in transition contracts;
4. declare derived values rather than leaving them as undeclared writes;
5. validate all references and status labels automatically; and
6. version fixture/calibration values separately from structural rules.

## Contradiction check

No substantive contradiction with Jörn's visible corrections was found after
the repairs above. In particular, the model does not treat benchmark variation
as independent capability redraws; it allows high effective compute without an
RSI prerequisite; it permits bounded self-improvement and fizzle; it separates
several forms of early compute control; and it retains operational treaty
failure without leader belief change.

There is one documentation-level tension to resolve: the current game-model
README can be read as if `model.yaml` were already the complete inspectable
territory, while its own status and the review methodology correctly say that
it is reconstructed, uncalibrated, and missing implementation. Rename the
current milestone or add an explicit future `executable-spec` layer; do not let
developers treat broad prose transitions as normative numerical behavior.

## Readiness decision and next gate

The packet is ready to show Jörn or another expert for a **high-level pass** on:

- missing causal families;
- incorrect distinctions or unsafe collapses;
- which mechanisms should be explicit, latent, authored, or atlas-only;
- which paths can reverse an opening policy ranking; and
- whether the win/loss route ontology is materially wrong.

It is not ready to ask an expert to validate probabilities, game balance, or
agreement between specification and code. The next internal gate should produce:

1. a sparse atlas-to-engine crosswalk;
2. typed schemas for the opening control, inference, political-operation,
   reinvestment, and safety-exit slices;
3. two or three end-to-end symbolic traces, including a paired intervention;
4. explicit unweighted stress worlds; and
5. only then a fixture/calibration ledger for first-year events that survive the
   pruning tests.
