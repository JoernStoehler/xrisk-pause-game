# Implementation map

Status: current executable opening slice plus named expansion boundaries. Source files and tests define implemented behavior; `model.yaml` defines symbolic intent beyond the slice.

## Executable slice

| Path | Current responsibility |
| --- | --- |
| `src/model/types.ts` | Canonical state, trace, information, fixture-role, action, and result types |
| `src/model/random.ts`, `world.ts` | Stable named diagnostic draws and one persistent hidden world per run |
| `src/model/scheduler.ts` | Timestamped event queue with structural tie-breaking |
| `src/model/control.ts`, `conduct.ts`, `authority.ts` | Resource coverage, deterrence versus residual action, and US/PRC authority gates |
| `src/model/fixtures.ts` | Explicit diagnostic premises and values; not forecasts |
| `src/model/engine.ts` | Opening policy, inference, workload, sensing, reporting, interruption, RSI, takeover, and extinction transitions |
| `src/model/projection.ts` | Director-General information projection and separate retrospective trace |
| `src/ui/content.ts`, `game.ts` | Declarative advisor content and closed typed action reducer |
| `src/ui/outcome.ts`, `main.ts`, `style.css` | DG-only dossier, browser rendering, swipe/buttons, focus, and responsive presentation |
| `src/diagnostic.ts` | Human-readable paired cold/broad diagnostic output |
| `test/` | Deterministic architecture and counterfactual checks |
| `e2e/` | All opening decision paths, desktop/mobile reflow, pointer, keyboard, focus, disclosure, and automated accessibility checks |

The current boundary is:

```text
advisor prose -> typed GameAction -> diagnostic fixture -> model engine
                                                    |
hidden world -> causal trace -> DG information projection -> dossier UI
                         `-> retrospective projection (separate surface)
```

Cards do not mutate model state directly. A Director-General claim requires an `InformationObject` delivered to `DG`; `playerVisible` trace metadata and omniscient transition explanations are not sufficient.

## Implemented structural invariants

- Named draws remain stable when unrelated calls or policies change.
- Timestamp and structural priority, not insertion order, resolve races.
- Legal prohibition, deterrence, factual credentials, telemetry, analysis, reporting, local stop, internal RSI, takeover, and extinction are distinct.
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
