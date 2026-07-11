# Trace semantics

Status: **required interface; reconstructed; implementation absent**.

A trace is the model's causal audit trail. It is not merely a list of cards the
player saw. Every consequential transition should be reconstructible without
revealing hidden truth during play.

## Four simultaneous histories

Each event may contribute to four views:

1. **World history:** latent conduct and objective technical facts.
2. **Information history:** what sensors, sources, and analysts produced, with
   provenance and dependencies.
3. **Decision history:** what each actor could know, believed, proposed, and
   attempted.
4. **Player history:** the information and choices shown in the interface.

These histories must not be collapsed. For example:

```text
World:       no prohibited workload occurred at Site 17
Sensor:      power anomaly, with a sampled false-positive failure
Analyst:     assigns covert training as one of two live hypotheses
Advisor:     recommends a challenge inspection
DG:          authorizes inspection
Implementer: access is delayed by a military commander
Public:      sees an allegation of treaty violation
```

Nothing in this sequence licenses changing `actual_workload` to “violation.”

## Conceptual event record

```yaml
event_id: evt_...
time: 2026-09-18T...
transition: T_CONTROL.detect_workload
parents: [evt_policy_..., evt_actor_conduct_...]
latent:
  references: [world.H_CONTROL.sensor_family_..., conduct_...]
draw:
  stream: sensing
  name: site_17_power_anomaly
  conditioned_on: [sensor_state, workload_state, tamper_state]
information_outputs:
  - object_id: report_...
    provenance: sensor_...
    recipients: [ISIA_inspectorate]
actor_updates:
  - actor: inspectorate
    rival_hypotheses: [covert_training, cooling_failure]
action_attempts: []
state_delta:
  world: {}
  information: {new_report: report_...}
scheduled_consequences: []
player_projection:
  visible_now: false
  later_card_if: advisor_escalates
```

This shape is explanatory, not a mandated serialization format.

## Randomness requirements

- Draws use named streams or stable event keys so a policy counterfactual does
  not arbitrarily reshuffle unrelated events.
- A draw records its conditioning parents. “Random political event” is
  insufficient.
- Persistent world hypotheses are referenced, not resampled.
- Path-dependent adaptation can add new conditions; paired runs need not remain
  identical after an intervention changes what actors observe or can do.
- Fine-grained stochasticity is allowed inside dense submodels, but the trace
  must expose the causal summary relevant to the decision.

## Counterfactual comparison

The primary diagnostic is a paired run:

```text
same world sample + same stable random streams + action X
same world sample + same stable random streams + action Y
```

The comparison should identify:

- first state divergence;
- downstream paths opened or closed;
- effects caused by different information and adaptation rather than by seed
  drift;
- whether the eventual terminal outcome depended on a narrow stochastic event;
- which hidden facts the DG could not have known at the time.

This is not a claim that the counterfactual is historically unique. It is a way
to debug the engine and teach conditional reasoning.

## Player-visible explanations

During play, explanations may report:

- known implementation results;
- advisor interpretations and their uncertainty;
- visible economic and political effects;
- coarse indicators of capability, safety work, and institutional condition.

They must not report:

- the true ASI threshold;
- the true adequacy of a safety candidate;
- a hidden universal probability of survival;
- exact compliance where the institution has only indirect evidence;
- “treaty cohesion fell by 12 points” as if that were a complete causal
  explanation.

After a run, the game may disclose selected hidden causes, route-specific failure
points, and paired counterfactuals. It should distinguish “what happened in this
sampled world” from “what the authors forecast in reality.”

## Conformance properties

A trace system passes only if it can represent all of these without semantic
contradiction:

- a violation with no alert;
- an alert with no violation;
- a true report that the DG never receives;
- two actors interpreting the same report differently;
- a policy accepted but not implemented;
- a prohibited run stopped by a monitor before central legal action;
- an objectively safe candidate rejected;
- an unsafe candidate approved after correlated evaluator error;
- leaders retaining the catastrophe belief while operational restraint fails;
- a technical improvement that is real but dies with one context;
- a pause that politically collapses while no unsafe system yet exists.
