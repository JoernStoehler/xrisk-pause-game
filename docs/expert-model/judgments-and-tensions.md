# Dated judgments and tensions

## Status

This page preserves quantitative judgments attributed to Jörn during the 2026
project interview and July review. The July capability and inference-efficiency
records have dated response documents. The direct transcript is missing for the
no-pause horizon, MIRI-like-pause survival, 30%→15% inference comparison, and
“more likely than not” proposition; those four are recovered, unverified
attributions until Jörn reconfirms them. None is a game prior, consensus
estimate, or mutually calibrated forecast question.

## Judgment register

| ID | Date recorded | Judgment | Known conditioning | Ambiguity |
|---|---|---|---|---|
| `J-DOOM-HORIZON-01` | 2026 project interview, preserved 2026-07-11 | Without a pause, time until “we die” has roughly a 5th–95th percentile range of **0.5 to 10 years**. | Continued AI development; no effective pause. | Forecast origin date, exact event definition, treatment of partial unilateral controls, and whether the range is personal all-things-considered belief or a simplified summary were not separately elicited. |
| `J-LETHAL-COMPUTE-01` | 2026-07-11 review | Jörn's current personal 5th–95th-percentile betting interval for lethal effective compute is roughly **2× to 1,000×** the unknown compute used for the GPT-5.6 series before internal OpenAI use. | Informal comparison to a pre-internal-use GPT-5.6 training baseline; latest observed systems remain visibly bottlenecked on candidate prerequisites. | The baseline compute is unknown; “effective compute,” campaign boundary, likely-vs-possible training setup, and treatment of paradigm changes remain unspecified. Do not turn this directly into a threshold prior. |
| `J-MIRI-PAUSE-01` | 2026 project interview, preserved 2026-07-11 | A MIRI-proposed pause gives perhaps **25% survival**, informally decomposed as about **50% that the pause lasts × 50% that safety is not as difficult as feared**. | A pause “as MIRI proposed”; no complete policy packet or horizon fixed in the elicitation. | The two factors may not be independent; “lasts” lacks a duration and health criterion; the second factor may bundle existence, discovery, recognition, and implementation of a solution. |
| `J-INFERENCE-01` | 2026 project interview, preserved 2026-07-11 | Refusal to roll back existing AIs reduces survival from roughly **30% to 15%**. | Comparison to a counterfactual with models rolled back; training thresholds assumed otherwise unchanged; continued inference permits more below-threshold experiments and faster algorithmic efficiency gains. | The 30% baseline differs from the 25% MIRI-pause judgment; the policy package, frontier model, inference restrictions, and date are not aligned. This is best read first as an approximate halving comparison, not an absolute replacement estimate. |
| `J-INFERENCE-EFFICIENCY-01` | 2026-07-11 review | Roughly **25%** risk of a large interpretability-like efficiency breakthrough/regime under large-model inference and greatly intensified efficiency research, falling to roughly **10%** if GPT-5.0+ inference is banned/restricted. Residual risk comes from ~70B open-weight models on consumer hardware. | No capability-relevant research ban; companies may redirect approximately 10× human research labor toward efficiency; open-weight models remain available. | Provisional interpretation is a transition to roughly 2×/year efficiency progress, not a one-off 2× event. Exact event horizon, labor conditioning and model threshold require confirmation. |
| `J-SERIOUS-PAUSE-CLAIM-01` | initial game concept, preserved 2026-07-11 | The proposed teaching message included: if society wanted to, it could run a pause that makes survival **more likely than not**. | Described as a main message for a serious rather than half-enforced pause. | It is unclear whether this was Jörn's literal all-things-considered forecast, an existence claim over unusually strong policy packages/easy latent worlds, or a pedagogical target inherited from prior game discussion. It conflicts on its face with the 25% judgment if treated as the same conditional forecast. |

## Tensions not to smooth over

### Task-level predictability versus lethal-threshold uncertainty

A fixed increase in effective compute can support a rough forecast that a model
will remain bottlenecked on a visible task or capability. This does not imply a
narrow lethal threshold. The pullback is uncertain because the candidate
bottleneck may not be necessary for RSI, several alternate routes may exist, and
the mapping from resource scale to strategically relevant capability is broad.
The 2×–1,000× interval is therefore not a contradiction of local empirical
regularity; it is the result of composing weakly informative maps.

The review used “10× crosses a comparable sigmoid in 30% of cases” and a
2×–10,000× example illustratively. They are not currently registered forecasts.

### Twenty-five percent versus thirty percent

The MIRI-pause estimate and the rollback baseline may describe different pause packages, or may be ordinary rounding in an informal discussion. The atlas must not choose one silently. The useful invariant is that existing frontier inference was judged to approximately halve survival in the stated comparison because it expands below-threshold experimentation and algorithmic progress.

### Twenty-five percent versus more likely than not

At least four interpretations remain live:

1. the “more likely than not” statement is a pedagogical aspiration, not a belief;
2. it concerns an existence claim: some sufficiently serious pause packages exceed 50%, while the MIRI-like default does not;
3. it conditions on an easier latent technical world, whereas 25% averages over Jörn's full uncertainty;
4. the judgments changed or were stated with different meanings of survival and pause persistence.

Until reviewed, the game should neither advertise a greater-than-50% factual estimate nor calibrate its run distribution to 25%.

### Multiplying persistence and technical solvability

The 50% × 50% decomposition is useful causal shorthand. It is not yet a valid factorization. Pause duration affects available safety labor, institutions affect whether success is recognized, technical progress affects political willingness to continue, and inference policy affects both durability and danger. A fuller elicitation would separate:

- operational persistence long enough to matter;
- technical existence of a winning route;
- discovery within the available time and permitted research regime;
- justified recognition;
- authorization and faithful implementation;
- absence of covert or accidental loss before exit.

## Appropriate use

These judgments can guide sensitivity analysis and identify which comparisons deserve explicit treatment. They should not be sampled directly. Before numerical engine calibration, elicit consistent conditioning worlds, event definitions, horizons, dependence, and whether each number is a median expert belief, a rough conversational summary, or a game-design proposition.
