# Forecast ontology and first-year decomposition

Status: review method, not a forecast and not a simulator specification.

Provenance boundary: this document was produced from the packet-era project
synthesis in `docs/jorn/jorn-review-batch-1.md` and the dated source check in
`docs/research/current-source-check-2026-07-11.md`. It is not itself a record of Jörn's
answers. Current executable coverage is mapped in
`docs/game-model/implementation-map.md`; claims still need claim-level source
links before public use.

Companion artifacts: `symbolic-stochastic-expert-model.md` supplies the current
high-level synthesis and provisional ordinal ledger;
`first-year-forecast-register.md` turns that structure into an elicitation
backlog. Ordinal labels in the synthesis are project inferences unless separately
tagged; they are not hidden numeric bins.

## Purpose

This artifact is for expressing statements such as “path X is more likely under
restricted inference than cold storage during August 2026–July 2027” without
pretending that we possess a validated frequency model of an unprecedented
treaty.

It keeps four things separate:

| Tag | Meaning | Permitted use |
| --- | --- | --- |
| `S` | A claim supported by a cited source | Constrain mechanisms or, only when transport is argued, a forecast |
| `I` | A project inference from sources and causal reasoning | A defeasible model claim with an explicit argument |
| `J` | A judgment elicited from Jörn or another named expert | An attributed prior/conditional judgment, not “the evidence” |
| `F` | A fixture chosen to exercise code or game balance | Never presented as a real-world forecast |

A value may carry more than one tag only as a visibly structured derivation—for
example, an `I` interval obtained by updating a named `J` prior on `S` evidence.
The tags must never be collapsed into “model probability.”

## The object being forecast

The minimal forecast object is:

```text
Forecast {
  proposition: operationally resolvable event or quantity
  window: [start, end]
  information_date: what the forecaster is allowed to know
  intervention: policy rule and implementation state, not merely its label
  conditioning_facts: facts held fixed but not caused by the intervention
  estimand: occurrence | first-occurrence time | count | maximum | end-state
  resolution_rule: sources, edge cases, and authority
  assessment: exact probability | interval | ordering | sign | unknown
  provenance: S | I | J | F, with derivation
  rival_models: hypotheses responsible for material disagreement
}
```

The intervention should be written as a policy trajectory `π`, not “the treaty.”
For example, restricted hosted inference means named users and tasks, rate and
tool limits, retained logs, no local weights, no successor-training use, plus a
specified enforcement response to ambiguity. Actual monitor access, credentials,
domestic authority, implementation delay, and exceptions are state variables.

The intended quantity is normally:

`P(E during t | do(π), information available on 11 July 2026, starting state s0)`

This is different from:

- the chance of `E` if no treaty forms;
- the chance of `E` among historical treaties;
- the chance of observing or publicly learning `E`;
- the chance that an advisor reports `E` to the Director-General; and
- the chance that the game draws an event card mentioning `E`.

## Persistent uncertainty and interventions

A run should be understood as drawing a persistent world hypothesis `H` and
slow-moving latent conditions `U`, after which actors respond to policy and new
observations. A useful explanatory factorization is:

```text
H: technical, political, organizational and enforcement hypotheses
U_t: shocks and slowly changing conditions
S_t: actual institutional/technical state
π_t: chosen policy and contingent response rule
A_t: actor beliefs, incentives, authority and conduct
O_t: noisy, selected and possibly manipulated observations

S_(t+1), A_(t+1), O_(t+1) ~ M(H, U_t, S_t, A_t, π_t)
```

This does not require the game to implement a single giant graph. Dense
submodels can sit behind typed interfaces. It does require matched counterfactual
runs to reuse the same `H` and exogenous shock stream when comparing policies;
otherwise intervention effects are confounded with newly sampled worlds.

## Assessment types, from strongest to weakest

Use the least committal statement that answers the decision or review question:

1. **Logical constraint.** A child event cannot exceed its parent, mutually
   exclusive outcomes sum to one, or a path is impossible by definition.
2. **Robust sign/order.** `P(E|π1) > P(E|π2)` across the live rival models.
3. **Conditional crux.** The order depends on a named hypothesis or threshold.
4. **Wide probability interval.** Bounds are meaningful and their provenance is
   stated; do not average away structural disagreement.
5. **Point probability.** Reserved for a reviewable aggregation or a deliberate
   game fixture. Display more digits only when calculation, not knowledge,
   warrants them.
6. **Unknown.** We cannot currently defend even a sign. This is a useful model
   state, not a failure to fill a spreadsheet.

If verbal likelihood bands are used in public material, bind each phrase to one
published numeric convention and show the numbers. Verbal terms alone are
interpreted inconsistently. This does not make the underlying assessment more
precise.

## Event, observation, report and response

Every covert or institutional event may require four separate nodes:

```text
conduct occurred
  -> detectable trace existed
    -> a sensor/source acquired it
      -> the institution interpreted and transmitted it
        -> an authorized actor responded in time
```

Collapsing this chain produces magical intelligence and makes monitoring policy
impossible to explain. False positives require the parallel path “no prohibited
conduct -> suspicious trace/report -> costly response.”

## First-year event lattice: August 2026–July 2027

This is an elicitation frame, not a claim that every row deserves game state.
Events should be defined at monthly or milestone resolution only where timing
changes an available response.

### 0. Starting-state facts to freeze before elicitation

- Exact founding date, signatories and legal form of ISIA.
- Which frontier sites, clusters, weights and services exist on the information
  date; mark rumor separately from verified fact.
- Opening policy package: cold, restricted or broad inference; training and
  post-training limits; memory/accelerator coverage; military/intelligence scope.
- Domestic emergency authority, court/legislative posture and treaty
  implementation in the US and China.
- Whether the elicitation assumes competent appointments and immediate staffing
  as a scenario premise.

Changing these facts defines a different forecast. Do not silently update them.

### 1. Opening operational control

Parent: `frontier_control_established_by(deadline)`.

Children or mediators:

- named frontier operators acknowledge the stop;
- monitors are physically present at each declared frontier site;
- monitors have telemetry/credential access sufficient for the named workload
  restrictions;
- an authorized party can interrupt a prohibited workload without waiting for
  ordinary litigation;
- weights, credentials, power and network control are placed in the intended
  custody arrangement;
- no prohibited run occurs before controls become effective;
- declared-site control is maintained through the end of year one.

Forecast actual control and verified control separately. Voluntary compliance,
legal prohibition, monitor stop authority, custody, relocation and destruction
are not points on one scalar ladder: they have different failure surfaces.

### 2. Coverage and consolidation

- inventory completed for declared covered accelerators;
- memory/accelerator and interconnect coverage rule operationalized;
- covered private clusters relocated, disabled, placed in custody, or licensed;
- relevant imports, fabrication, transfer and replacement flows monitored;
- a materially capable undeclared cluster exists;
- such a cluster is detected before a prohibited workload completes;
- distributed or low-bandwidth training remains below operational detectability;
- reconstruction/substitution shifts the binding resource away from the rule.

The public annotated MIRI treaty and the April 2026 accelerator-memory proposal
are distinct source objects; the latter is a proposed correction/variant, not
evidence that distributed evasion is solved (`S`, per the current source check).

### 3. Inference-policy consequences

For each cold/restricted/broad policy, forecast mediators rather than a single
“durability” effect:

- realized economic and government-service loss;
- concentrated industry/user mobilization;
- mass-public salience and elite cueing;
- pressure for named exceptions;
- AI-assisted capability-research experiment volume;
- cyber, persuasion, leakage, weight/credential attack and covert-run support;
- ambiguity between allowed inference and prohibited training/post-training;
- enforcement burden, false positives and evasion adaptation;
- negotiated relaxation or tightening of inference rules.

The Fable 5 episode described in the existing packet is at most a weak mechanism
anchor. Its selection, target, duration and rationale differ too much to set a
base rate for a durable general pause (`S -> I`, weak transport).

### 4. Domestic and international authority

Treat the US and PRC as asymmetric actor systems rather than two values of one
“cohesion” variable.

- domestic legal authority survives a named challenge;
- legislature/courts, top leadership, military/intelligence, regulators,
  provinces/state firms, labs/clouds and ISIA bodies grant or deny task-specific
  authority;
- a military or intelligence exemption is requested, concealed, denied or
  granted;
- challenge inspection is requested, admitted, delayed or refused;
- the other signatory updates toward noncompliance after a refusal or ambiguous
  report;
- dispute-resolution or protective-action procedures are used;
- either signatory suspends material cooperation or invokes withdrawal.

For each event, distinguish preference change, belief change, mistaken
interpretation, bargaining, issue displacement, subordinate conduct and physical
loss of implementation capacity.

### 5. Verification and institutional cognition

- sensor/source family produces a true warning;
- false positive triggers diplomatic or operational cost;
- collection is tampered with or a source is compromised;
- rival hypotheses are preserved versus prematurely collapsed;
- inspectorate/technical panel communicates raw evidence, a filtered summary, or
  nothing to each recipient;
- evaluator selection becomes correlated with the desired answer;
- whistleblower or intelligence reporting reveals a hidden program;
- an accurate warning reaches an actor with authority before the response window
  closes.

### 6. Capability and safety-relevant work

- allowed work yields a context-local cognitive procedure;
- an insight becomes communicated, scaffold-persistent, or successor-inherited;
- explicit theory/code materially improves algorithmic efficiency;
- a successor research model is proposed, authorized, attempted or completed;
- a capability insight leaks or is independently rediscovered;
- a safety candidate is proposed with a named threat model;
- evidence changes a competent evaluator's view of a required claim;
- institutional evaluation produces a false pass or false rejection;
- a prohibited process reaches an irreversible point before interruption.

Do not forecast “safety progress” as labor converted into a hidden scalar. The
unit is a candidate-specific claim/evidence/evaluator process, while objective
adequacy remains separate from institutional recognition and authorization.

### 7. Crisis paths

- Taiwan or another military crisis changes physical access;
- emergency authority removes civilian/ISIA control;
- evidence channels close while top-level catastrophe beliefs persist;
- sanctions, cyberattack or sabotage interrupt monitored and unmonitored work;
- bargaining linkage weakens one obligation without general belief change;
- identity/agenda displacement changes the decision frame;
- organizational continuity mechanisms preserve restraint despite conflict.

Do not use one “war damage” node. These pathways have different warning signs
and countermeasures.

## Coherent path assessments

For a path `A -> B -> C`, elicit:

`P(A | do(π))`, `P(B | A, do(π))`, and `P(C | A,B,do(π))`.

The product is useful only if the conditions exactly match the path definition.
Also assess bypasses: `C` may occur without `A` or `B`. For repeated monthly
hazards, do not assume independence; persistent latent hypotheses and actor
adaptation make hazards correlated.

Use competing-risk or multi-state descriptions for events such as control loss:
legal invalidation, deliberate withdrawal, covert subordinate conduct, physical
loss, false-positive escalation and technical evasion should not be forced into
one anonymous annual hazard.

## How to obtain first numbers without fake precision

1. Freeze the starting state and intervention cards.
2. Ask for pairwise ordering and sign of intervention effects.
3. Ask which rival hypothesis would reverse each ordering.
4. Elicit a broad interval for the parent event, then conditional allocations
   among mutually exclusive mechanisms.
5. Ask for lower/upper stories: what would have to be true near each bound?
6. Check arithmetic coherence, but never “repair” a substantive contradiction
   silently.
7. Record unresolved expert disagreement as a mixture over named models, not a
   prematurely averaged point.
8. Keep `F` values in a separate namespace when a runnable engine needs a number
   before the judgment exists.

Historical cases can support the existence of mechanisms, sequences, observable
warnings and countermeasures. Without a transport argument, they do not provide
an ASI-treaty base rate. Likewise, calibration performance on ordinary geopolitics
does not validate frontier technical judgments; useful seed questions must be
close enough to the target skill.

## Method references

- Gneiting and Raftery, “Strictly Proper Scoring Rules, Prediction, and
  Estimation” (2007), <https://doi.org/10.1198/016214506000001437> — why a
  scoring rule can elicit honest probabilistic reports; it does not make a novel
  domain forecast valid.
- Hanea et al., “Investigate Discuss Estimate Aggregate for structured expert
  judgement” (2017), <https://doi.org/10.1371/journal.pone.0177046> — a useful
  separation of individual estimates, discussion and aggregation.
- Hemming et al., “A practical guide to structured expert elicitation using the
  IDEA protocol” (2018), <https://doi.org/10.1111/2041-210X.12857> — practical
  elicitation discipline; applicability depends on target decomposition and
  expertise.
- Gneiting, Balabdaoui and Raftery, “Probabilistic forecasts, calibration and
  sharpness” (2007), <https://doi.org/10.1111/j.1467-9868.2007.00587.x> —
  calibration and informativeness are distinct properties.
- Saltelli et al., “Five ways to ensure that models serve society” (2020),
  <https://doi.org/10.1038/d41586-020-01812-9> — supports explicit assumptions,
  sensitivity and avoiding false precision in policy models.

These references constrain the assessment procedure (`S`). They do not supply
the missing AI/treaty probabilities.
