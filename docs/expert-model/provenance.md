# Provenance and evidence register

## Provenance labels

Every consequential atlas claim should eventually cite one or more entries from this register.

- **PRIMARY-TECH:** a primary technical paper, benchmark report, or official empirical result.
- **PRIMARY-POLICY:** treaty text, official record, inspection report, statute, or institutional documentation.
- **PROSPECTIVE:** a forecast or model recorded before the relevant evidence.
- **RETROSPECTIVE:** an explanation fitted after observing the outcome.
- **STRUCTURAL:** a theorem, economic framework, or causal argument that constrains possibilities without estimating empirical parameters.
- **CASE-PROCESS:** historical process tracing used to identify mechanisms, observables, and rival explanations.
- **EXPERT-JUDGMENT:** a named expert's judgment, with date and conditions.
- **RECOVERED-JUDGMENT:** a project record attributes a judgment to an expert,
  but the direct transcript or response is not present; reconfirm before relying
  on exact wording or calibration.
- **PROJECT-SYNTHESIS:** an inference assembled by this project from several inputs.
- **PROJECT-CONJECTURE:** a live hypothesis with insufficient external support.

## Source-selection policy

For empirical forecasting, prefer genuine prospective performance, then held-out or backtested models, then broad replicated regularities. Use structural theory to organize variables and rule out incoherent models, not to manufacture empirical calibration. In a preparadigmatic field, a complicated model selected because it happened to predict a few systems well receives a strong complexity and selection-bias discount.

For governance, use historical cases to learn mechanisms and warning signs. Do not transfer their event frequencies directly to an ASI treaty.

For technical takeoff and alignment, the project defaults to Yudkowsky where he makes a relevant claim, then uses other work to fill gaps. Agreement with that default must still be labeled; it is not neutral background knowledge.

## Initial source families

The detailed bibliography should live in the research archive. The atlas currently relies on these families:

- Yudkowsky on optimization, recursive improvement, alignment difficulty, and the inadequacy of ordinary capability tests for bounding a smarter system;
- MIRI's *If Anyone Builds It, Everyone Dies* and compute-governance/treaty proposals;
- MIRI discussions of memory and distributed-training detectability;
- scaling-law, benchmark, elicitation, and algorithmic-efficiency research from primary technical sources;
- economic models of recursive improvement, used structurally rather than as calibrated takeoff forecasts;
- arms-control, nonproliferation, international-institutions, organizational sociology, public-opinion, policy-feedback, normal-accident, and high-reliability-organization literatures;
- process evidence from the JCPOA, INF, Open Skies, DPRK negotiations, Montreal Protocol, and Paris Agreement;
- Jörn's dated reviews of capability forecasting, RSI routes, early compute control, treaty breakdown, evaluator failure, and the project's conditional survival model.

See [the initial source index](source-index.md) for stable links and scope notes.

## Initial records

These records are intentionally coarse while the research archive is being rebuilt. They make current provenance explicit without pretending that every sentence has already received a publication-quality citation.

| ID | Kind | Locator or description | Used for |
|---|---|---|---|
| `JORN-PROMPT-2026-07` | PROJECT-SYNTHESIS | [Frontier causal-edges review questions](../jorn/jorn-review-batch-1.md) | questions and synthesis presented for review; not Jörn's response |
| `JORN-REVIEW-2026-07-CAP` | EXPERT-JUDGMENT | [Capability review record](../jorn/jorn-review-2026-07-11-capability.md), a polished record rather than a raw transcript | lethal-resource uncertainty and capability/reinvestment distinctions |
| `JORN-REVIEW-2026-07-CONTROL` | EXPERT-JUDGMENT | [Control and inference review record](../jorn/jorn-review-2026-07-11-control-inference.md), a polished record rather than a raw transcript | deterrence/control complementarity, inference-policy comparison, breach and recovery transitions |
| `JORN-REVIEW-2026-07-SAFETY` | EXPERT-JUDGMENT | [Safety and exit review record](../jorn/jorn-review-2026-07-11-safety-exit.md), a polished and partly truncated record | candidate safety routes, uploads/intelligence augmentation, institutional evaluation, secrecy dilemma |
| `JORN-EXCERPTS-2026-05` | EXPERT-JUDGMENT | [Recovered direct excerpts](../jorn/jorn-review-2026-05-11-raw-excerpts.md) | treaty scope, duration, necessary controls, research restrictions, backlash/evasion, and governance boundaries |
| `YUDKOWSKY-DEFAULT-01` | EXPERT-JUDGMENT + STRUCTURAL | Yudkowsky's published takeoff and alignment arguments; exact-claim bibliography pending | default treatment of optimization, recursive improvement, and alignment difficulty |
| `MIRI-TREATY-01` | PRIMARY-POLICY + STRUCTURAL | MIRI treaty/compute-governance proposals and related posts; exact-claim bibliography pending | proactive compute control, monitoring, consolidation, memory coverage |
| `TECH-EMPIRICAL-01` | PRIMARY-TECH | scaling, algorithmic-efficiency, benchmark, and elicitation literature; paper-level map pending | within-paradigm capability production and measurement limits |
| `TREATY-PROCESS-01` | CASE-PROCESS | JCPOA, INF, Open Skies, DPRK, Montreal, and Paris process evidence | mechanism generation and warning signs, never direct ASI-pause base rates |
| `SOCIAL-MECHANISMS-01` | STRUCTURAL + CASE-PROCESS | international-institutions, organizational sociology, policy-feedback, public-opinion, normal-accident, and HRO literatures | institutional persistence and failure ontology |
| `ATLAS-SYNTHESIS-01` | PROJECT-SYNTHESIS | [Causal map](map.md) and the substantive atlas pages | cross-domain interfaces and conditional first-year ordering |
| `JORN-JUDGMENTS-2026-01` | RECOVERED-JUDGMENT | [Dated judgments and tensions](judgments-and-tensions.md), recovered from the project interview; the original transcript for four numbers is missing | no-pause horizon, pause-survival decomposition, inference comparison, and pedagogical-claim tension |

An exact citation map should replace each family record as claims approach publication. Until then, a family record means “this body of work motivated or constrains the synthesis,” not “every source in the family states the atlas claim.”

## Known evidence limitations

1. No public high-level RSI model has a clean, long prospective track record over the regime of interest.
2. Current benchmarks provide weak evidence about several qualitative prerequisites and can saturate or change with elicitation.
3. Historical treaty cases differ sharply from an ASI pause in speed, stakes, technology, and the common-interest component.
4. Sociology and organizational research often supplies qualitative mechanisms without transferable quantitative parameters.
5. Several important project claims are syntheses across domains rather than conclusions stated by any source.
6. The original interview transcript is missing for the 0.5–10 year no-pause horizon, ~25% MIRI-like-pause survival, ~30%→15% inference comparison, and “more likely than not” teaching proposition. Keep them labeled recovered judgments until a direct record is supplied.

## Review protocol

When an expert disagrees, record separately:

- the claim they reject;
- whether the disagreement concerns ontology, causal sign, magnitude, likelihood, or policy relevance;
- their conditioning assumptions;
- evidence or argument offered;
- whether the disagreement changes a game decision or only background explanation.

This is more valuable than forcing immediate consensus. The atlas should make the disagreement legible before the game engine decides how to sample it.
