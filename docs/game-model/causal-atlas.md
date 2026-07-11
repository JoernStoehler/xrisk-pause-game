# Causal atlas

Status: **explanatory view of `model.yaml`; uncalibrated**.

The graph is intentionally modular. A single giant Bayesian network would
suggest a precision we do not possess and would conceal the dense submodels
inside nodes such as political interpretation and cognitive reinvestment.

## Whole-run structure

```text
                         sampled once per run
  ┌──────────────────────────────────────────────────────────────┐
  │ H_CAP   H_REINVEST   H_CONTROL   H_POL   H_SAFE             │
  └────┬────────┬───────────┬──────────┬─────────┬───────────────┘
       │        │           │          │         │
       v        v           v          v         v
 capability  improvement  evasion   institutions safety truth
 production    routes     & sensing  & politics  & evidence
       │        │           │          │         │
       └───┬────┴─────┬─────┴────┬─────┴────┬────┘
           v          v          v          v
     technical     actual     evidence   candidates
      projects     conduct    & beliefs   & reviews
           ^          ^          ^          ^
           └──────── player policy actions ┘
                         │
                         v
              authorization + implementation
                         │
                 ┌───────┴────────┐
                 v                v
          safe decisive     unsafe decisive
             system             system
                 │                │
                 v                v
          everyone lives   everyone dies
```

The hypothesis families condition many events. They are not UI meters and the
player never receives their sampled values directly.

## A decision is an intervention attempt

```text
advisor proposal → DG choice → legal authority / veto points
                                      │
                         implementation organizations
                                      │
               ┌──────────────────────┼─────────────────────┐
               v                      v                     v
          implemented            narrowed/delayed         blocked
               │                      │                     │
               └──────── costs, signals, adaptation ───────┘
                                      │
                             later causal effects
```

This prevents cards from functioning as magic state-setting buttons. The same
formal policy can produce different outcomes because implementers, operational
capacity, crisis conditions, and adversary adaptations differ.

## Compute-control chain

```text
resource coverage + threshold + workload definition
                         │
                         v
                    legal rule
                         │
        authority + implementer capacity + physical access
                         │
                         v
 hardware ownership/custody + model-weight custody
                         │
                         v
       credentials/power/serving control → actual workload or model use
                         ^                      │
                         │                      v
       substitution / reconstruction       latent conduct
                                                │
                     monitors + sensors + concealment
                                                │
                                                v
                reports → interpretation → response → stop/delay
```

Compute, memory, networking, power, facilities, weights, credentials, and human
expertise can substitute imperfectly. Coverage of one resource changes the
evasion problem rather than simply multiplying “enforcement strength.”

## Existing-model inference

```text
                    existing frontier inference policy
                   /                |                  \
                  v                 v                   v
       current economic use   research throughput   attack surface
                  │                 │                   │
                  v                 v                   v
       beneficiaries and      efficiency gains      cyber/leakage/
       political defense           │                covert preparation
                  │                 v                   │
                  └────── pause durability ────────────┘
```

The signs are not uniform. Cold storage removes useful services and dangerous
research assistance; broad use does the reverse. Restricted hosting attempts to
separate uses, but classification, cover traffic, monitoring capacity, and
political pressure may make it unstable. Its stability and dominant time-scale
remain unresolved frontier questions rather than calibrated engine facts.

Actual service and distributional effects are world state. Reports of those
effects, elite framing, public perception, and organized support are later
political/information states; the game must not make a policy create support by
directly assigning a public-opinion value.

## Treaty bargaining and support

```text
proposed accession / assurance / assistance / compensation / dispute rule
                              │
                    actor-specific authority
                              │
                implementation and domestic effects
                              │
        reciprocal evidence, coalitions, and adaptation
                              │
                 later commitments and bargaining
```

Positive cooperation is not merely the absence of enforcement. Supply-chain
assistance, compensation, reciprocal data access, security assurances, and
dispute procedures can alter both implementation capacity and the political
coalitions sustaining restraint; they can also create issue-linkage and moral-
hazard surfaces.

## Cognitive reinvestment

```text
model capability + research access + task graph + resources
                              │
                              v
                    candidate insight/project
                              │
              evaluation, false leads, implementation
                              │
       ┌──────────────────────┼────────────────────────┐
       v                      v                        v
 context-local          communicable artifact   implementation fails
       │                      │
       v                      v
 scaffold-persistent → trained successor / system improvement
                              │
                     new capability profile
                              │
                    new bottleneck or reinvestment
```

At every stage, ask four different questions:

1. Did a useful improvement actually exist?
2. Who or what retained it?
3. Could it acquire resources and access to implement it?
4. Could the lab or ISIA respond before the next relevant step?

If one authorized episode already permits access acquisition, review
manipulation, or persistent internal improvement, an external generation-time
race is no longer the right abstraction. The exact boundary is unresolved.

## Safety and exit

```text
 candidate + threat model ───────────────→ objective claim truth
           │                                      │
           v                                      │ hidden
 evidence generated/manipulated                    │
           │                                      │
 evaluator selection + school + information edges │
           │                                      │
           v                                      │
      evaluator dossiers → institutional approval │
                                │                  │
                      legal authorization          │
                                │                  │
                       actual implementation ──────┘
                                │
                   safe outcome or unsafe outcome
```

More safety labor may create candidates and evidence. It must not directly turn
up a hidden “adequacy” meter. A candidate can be safe but unrecognizable,
persuasive but unsafe, approved but unauthorized, or authorized but not built.

## Political restraint under crisis

```text
shared catastrophe belief does not imply operational continuity

war / emergency
     ├→ inspectors evacuated
     ├→ raw evidence channels closed
     ├→ military override authority activated
     ├→ sites seized, damaged, moved, or excluded
     ├→ civilian implementation capacity lost
     └→ subordinates gain opportunity
                         │
                         v
       restraint becomes unverifiable or physically ineffective
                         │
                         v
            prohibited project can become possible
```

This path is distinct from leaders changing their minds, deliberately ordering
a race, or falsely believing the other side has defected, though those paths may
interact with it.

## Feedback loops worth retaining

The graph is sparse at module boundaries but deliberately dense within modules.
The minimum feedback loops for discourse value are:

- useful inference → beneficiaries → defense of narrow training ban → continued
  inference, while inference also accelerates technical and attack processes;
- visible enforcement cost or error → legitimacy/opposition → weaker authority
  or implementation → more evasion opportunity → further enforcement incidents;
- credible reciprocal evidence → confidence and constituencies → continued
  cooperation → better evidence channels;
- exemptions → affected interests organize and normalize exceptions → broader
  exemptions, without assuming this always happens;
- crisis → evidence/implementation loss → suspicion and unilateral precautions
  → further loss of cooperation;
- AI-assisted research → improved research systems → faster research, subject to
  task-graph bottlenecks, evaluation, carrier persistence, and access;
- safety evidence → evaluator confidence → authorization, while evaluator
  selection and manipulation can create a correlated false pass.
