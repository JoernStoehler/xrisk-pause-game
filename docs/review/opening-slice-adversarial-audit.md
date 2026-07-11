# Opening-slice adversarial audit

Date: 11 July 2026.

Target: the executable diagnostic kernel under `src/model/`, not the retired
monthly hazard/card engine and not a calibrated game distribution.

## Verdict

**Ready to support a playable opening vertical slice. Not ready for forecast
calibration or full-game content scaling.**

The kernel protects the architecture decisions most likely to force a restart:
timestamped races, stable named randomness, truth/information/view separation,
policy/implementation/control separation, typed workloads and sessions,
nonterminal breaches, separate artifact carriers, and fixture provenance.

## Adversarial checks

| Failure mode | Result | Evidence |
| --- | --- | --- |
| Legal rule directly sets compliance | Pass | A prohibited workload can be attempted and started while the ban remains active. |
| Punishment declared useless | Pass | Ordinary diagnostic actor can abandon; residual gambler proceeds to factual-control check. |
| Factual control ignored | Pass | Intact multiparty credentials can block startup; a named bypass latent is required at declared sites. |
| Turn order resolves a fast run | Pass | Stable timestamp queue; insertion-order reversal test; RSI/stop/completion scheduled independently. |
| RSI and death collapsed | Pass | Start, internal RSI boundary and takeover are separate; every terminal trace includes the chain. |
| Treaty breach becomes game over | Pass in slice | Artifacts, leakage, denied/allowed sessions and interrupted runs remain nonterminal. Treaty withdrawal/re-entry is still outside this slice. |
| Sensor equals truth | Pass | Violation without alert and alert without violation both occur. |
| Report equals DG knowledge | Pass | True reports can be filtered; DG projection requires a sourced information object delivered to the DG. |
| Stopped run reveals hidden threshold | Pass | DG trace reports interruption without sampled counterfactual distance. |
| Counterfactual comparison suffers RNG drift | Pass | Stable keyed draw test and matched policy monitor draw. |
| Compute-only control silently handles memory | Pass | Memory is an explicit alternative trigger; compute-only sensitivity misses the memory-heavy pool. |
| Distributed pieces avoid aggregation | Partial pass | Resource parts aggregate before classification; physical/topological feasibility and detection remain absent. |
| Hosted restriction erases open models | Pass | Open-weight residual session can run under a cold hosted-frontier rule. |
| Restricted inference is perfect | Pass | False-negative classification can admit disguised capability research; ambiguity stops under restricted policy. |
| Inference access directly adds capability points | Pass | Request, classification, authorization, session completion, artifact creation and carrier transition are separate. |
| Local discovery instantly becomes global efficiency | Pass | Context-local artifact leaves global usable efficiency unchanged; communication/leakage changes it later. |
| Benefits directly relax policy | Pass | Service benefit creates a relaxation request while implemented policy remains unchanged. |
| Accepted action equals implementation | Pass | Declared cold policy can be blocked while broad permissions continue. |
| Diagnostic numbers look like forecasts | Pass with caveat | Parameters and hidden sampler label themselves diagnostic; docs quarantine 25%/10%. UI must preserve this warning outside gameplay. |
| Narrative cards mutate arbitrary state | Pass for vertical slice | Declarative cards emit a closed action union; the UI reducer configures typed fixtures; four UI-state tests cover the boundary. |

## Golden trace review

1. **Ordinary actor deterred:** no workload object is created.
2. **Restricted service and pressure:** service completes, benefit is realized,
   beneficiaries request wider access, policy does not change automatically.
3. **Misclassified research leaks an artifact:** declared safety use is accepted,
   a context-local artifact is created, leakage occurs separately, global usable
   efficiency changes, and humanity is not declared dead.
4. **Narrow interruption:** a gambler bypasses custody, telemetry is detected,
   the report reaches the DG, local interruption wins, and the player is not
   shown the hidden near-miss interval.

All four are diagnostic examples selected to exercise structure. Their relative
frequency is meaningless.

## Remaining restart risks before full content scaling

1. The vertical card layer must not contain model-side-effect callbacks.
2. Custody remains compressed to training credentials instead of physical,
   power, network, weight, credential and restart edges.
3. Only one inference session and one attempted run are supported per diagnostic
   invocation; IDs and queue semantics can scale, but multi-case interaction is
   untested.
4. Actor-local belief updates are not implemented beyond DG projection.
5. The artifact portfolio still uses one global efficiency multiplier after
   communication; target-specific applicability must precede calibration.
6. Distributed training has resource aggregation but not the actual feasibility,
   coordination, slowdown, concealment and discovery interfaces.
7. Political pressure stops at a request; authority, coalitions, bargaining and
   implementation belong to the next process slice.
8. Save/load round-trip and schema migration are not yet tested.

These are additive if the existing boundaries are preserved. Items 1 and 5
would become restart risks if ignored during content authoring or calibration.
