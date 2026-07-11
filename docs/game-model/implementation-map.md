# Implementation map

Status: current executable opening slice plus named expansion boundaries. Source files and tests define implemented behavior; `model.yaml` defines symbolic intent beyond the slice.

## Current boundary

The executable slice currently separates authored choices, typed actions,
model execution, hidden truth, player-visible information, and retrospective
diagnosis:

```text
advisor prose -> typed GameAction -> diagnostic fixture -> model engine
                                                    |
hidden world -> causal trace -> DG information projection -> dossier UI
                         `-> retrospective projection (separate surface)
```

Cards currently emit typed actions, but those actions still configure diagnostic
fixture truth directly rather than passing through institutional authority and
implementation. A Director-General claim requires an `InformationObject`
delivered to `DG`; `playerVisible` trace metadata and omniscient transition
explanations are not sufficient.

## Implemented structural invariants

- Named draws remain stable when unrelated calls or policies change.
- Timestamp and structural priority, not insertion order, resolve races.
- Legal prohibition, deterrence, factual credentials, telemetry, analysis,
  reporting, local stop, and internal RSI are distinct. Takeover currently sets
  the terminal extinction state in the same transition.
- Compute and accelerator memory are alternative resource-coverage triggers in the diagnostic fixture. The same memory-heavy world differs under compute-only versus compute-or-memory rules.
- Capability artifacts are technical state, not automatic terminal outcomes.
- The DG view contains only delivered information; the retrospective trace may contain hidden truth but is explicitly separate.
- Fixture values and balanced branches are labeled diagnostic rather than forecast-calibrated.

See `opening-slice-v1.md` for the current model behavior and `vertical-slice-ui.md` for the playable path.

## Expansion boundaries

| Needed area | Required distinction before scaling content |
| --- | --- |
| Custody and interruption | Physical access, power, network, credentials, weights, restart, actor authority, and latency |
| Distributed training | Topology, slowdown, coordination, observability, concealment, and discovery |
| Capability research | Target-specific artifacts, carriers, applicability, evaluation, inheritance, and fizzle |
| Politics | Actor-local belief, preference, authority, evidence, agenda, implementation, and crisis continuity |
| Safety and exit | Candidate, threat model, claim, evidence, evaluator, approval, authorization, build, and actual adequacy |
| Persistence | Multiple sessions/cases, save/load schema, migration, and stable world identity |
| Player knowledge | Actor-local projections and retrospective/postmortem access rules |

Do not create these modules merely to complete a diagram. Add the smallest boundary that a reviewed game decision, causal counterfactual, or source-backed mechanism needs, and protect it with a focused test.
