# Symbolic game model

Status: **reconstructed design specification; not calibrated; not verified
against the lost simulator source**.

This directory describes the **architectural symbolic specification** for the
simplified model the game should eventually run. A first executable diagnostic
kernel now exists for the opening control/inference slice; see
[`opening-slice-v1.md`](opening-slice-v1.md). It is not yet the complete game
model: political operation, research carriers, safety exit, content and
calibration remain incomplete. It is deliberately
separate from the larger expert model. The expert model is a
messy body of claims, arguments, analogies, uncertainties, and omitted detail;
this model is a finite artifact whose state and transitions must be inspectable.

The specification has three audiences:

1. an expert checking whether the game preserves the important causal paths;
2. a developer comparing implementation behavior with intended behavior; and
3. a writer explaining a run without implying that the game is a forecast.

It is not a source of truth about AI or politics. In particular, labels such as
`plausible` and `included` are not probability estimates.

## Files

- [`model.yaml`](model.yaml) is the canonical architectural inventory: entities,
  state, actions, transitions, observations, hypothesis families, and terminal
  processes.
- [`causal-atlas.md`](causal-atlas.md) explains the modules and feedback loops in
  readable diagrams.
- [`trace-semantics.md`](trace-semantics.md) specifies what a run record must say
  and how hidden truth is kept separate from information available to the
  Director-General.
- [`pruning-ledger.md`](pruning-ledger.md) records what is compressed or omitted
  and why.
- [`implementation-map.md`](implementation-map.md) proposes code boundaries and
  conformance checks. Its references to prior code are reconstructed from the
  surviving project record, not verified against source.
- [`opening-slice-v1.md`](opening-slice-v1.md) documents the new executable
  kernel, its test coverage, diagnostic fixtures and remaining gate.
- [`vertical-slice-ui.md`](vertical-slice-ui.md) documents the first playable
  opening-day interface and its engine/content boundary.
- [`actor-authority-opening.md`](actor-authority-opening.md) maps the asymmetric
  US and PRC domestic chains behind treaty implementation.
- [`../SELECTIVE_CROSSWALK.md`](../SELECTIVE_CROSSWALK.md) links only the
  policy-sensitive expert claims to their game approximations and accepted
  distortions.

## Status vocabulary

| Label | Meaning |
|---|---|
| `required` | Needed for a causally honest release model. |
| `included` | Represented in this specification. |
| `compressed` | Represented by a knowingly lossy abstraction. |
| `deferred` | Worth representing later, but not required for the first release. |
| `omitted` | Deliberately outside the playable model. |
| `unresolved` | The representation itself needs expert review. |
| `uncalibrated` | The structure is specified, but no numerical distribution is endorsed. |

## Hard invariants

- A hidden world is sampled once per run. Later randomness is conditional on
  that world and run history, not a sequence of independent punishments.
- Latent conduct, declarations, sensor output, analyst interpretation, and the
  DG's belief are different objects.
- Legal rules, formal authority, implementation, physical control, and actual
  compliance are different objects.
- Capability, access, and unsafe outcome are different objects.
- Safety adequacy, evidence of adequacy, institutional approval, authorization,
  and deployment are different objects.
- Treaty failure is a process, not an instant loss screen. The game continues
  through the causal path to safe deployment or unsafe superintelligence.
- The only terminal outcomes are safe transformative intelligence with humanity
  surviving, or unsafe superintelligence followed by human extinction. An
  indefinite pause is a continuing state, not a third ending.
- No displayed meter is secretly the true probability of survival.

## Intended comparison workflow

For a proposed mechanic, identify its action or transition ID in `model.yaml`,
run paired worlds with the same seed and different action, inspect the trace,
and check both intended effects and forbidden shortcuts. If the implementation
cannot produce a required path, change the implementation or explicitly revise
this specification; do not silently let prose and code diverge.
