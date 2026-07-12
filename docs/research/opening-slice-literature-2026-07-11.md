# Opening-slice literature map

Date checked: 11 July 2026.

Purpose: source the ordinary mechanisms in the executable opening slice without
using public literature to overwrite Jörn's frontier judgments. The sources
support objects and causal directions unless an estimate is explicitly stated;
they do not calibrate the game distribution.

## Policy baseline and treaty structure

- Eliezer Yudkowsky, [Shut It All Down](https://time.com/6266923/ai-eliezer-yudkowsky-open-letter-not-enough/):
  normative support for an indefinite worldwide moratorium, no military
  exceptions, closure of large clusters, GPU tracking, a compute ceiling that
  falls with algorithmic efficiency, international coordination, and ultimate
  physical interdiction. This specifies a target policy, not feasibility or
  effect sizes.
- Miotti and Wasil, [An international treaty to implement a global compute cap
  for advanced AI](https://arxiv.org/abs/2311.10748): separate danger and
  moratorium thresholds, revisable thresholds, an international agency,
  detection/halt infrastructure, hotlines, whistleblower protection, review and
  withdrawal processes, and civilian/military coverage. The paper is primarily
  a legal design, not a complete custody or inspection system.

## Compute control, known sites and layered verification

- Sastry et al., [Computing Power and the Governance of Artificial
  Intelligence](https://arxiv.org/abs/2402.08797): supports compute as a
  comparatively detectable, excludable and quantifiable intervention point;
  developer/cloud reporting, chip registries, workload monitoring, interconnect
  limits, hardware enforcement and multiparty control; and residual failure
  through algorithms, low-compute danger and evasion.
- Heim et al., [Governing Through the Cloud](https://arxiv.org/abs/2403.08501):
  supports provider roles as securers, record keepers, verifiers and enforcers,
  and access to useful workload/compute records.
- Baker et al., [Verifying International Agreements on
  AI](https://arxiv.org/abs/2507.15916): separates known-site verification from
  hidden/decentralized search and proposes on-chip security, network taps,
  analog sensors, whistleblowers, personnel and national intelligence as
  partially independent layers. Personnel mechanisms are nearer-term than
  strong technical assurance; current technical proposals retain robustness,
  deployment and security limitations.
- IAEA, [Verification and other safeguards
  activities](https://www.iaea.org/topics/verification-and-other-safeguards-activities):
  supports the general accounting structure of declarations, independent field
  checks, physical inventory/design comparison, seals/cameras/detectors,
  continuity of knowledge, anomalies and follow-up. AI hardware differs enough
  that nuclear detection rates must not be imported.

### Safe engine consequences

- Known-site monitoring can begin before global inventory is complete and can
  provide meaningful partial visibility.
- Declarations, known-site accounting and hidden-site search are distinct.
- Verification is a vector of partially independent channels, not a perfect
  monitor scalar.
- Legal prohibition, monitoring, operational control, physical custody,
  relocation and destruction are distinct policy states.
- The literature supports the control logic of custody and consolidation but
  does not establish rapid global completeness or political feasibility.

## Distributed evasion and memory coverage

- Rahman, [Does Distributed Training Undermine Compute
  Governance?](https://arxiv.org/abs/2605.29359): dispersed training can evade
  rules keyed only to individually large clusters; suggested responses include
  chip tracking, whistleblowing, forensic accounting, and cluster compute and
  memory thresholds.
- Ma et al., [communication bottlenecks in distributed
  training](https://arxiv.org/abs/2204.10943): collective communication is a
  material bottleneck as training is distributed.

The engine should use a resource/topology interface involving compute, memory,
interconnect, coordination and algorithms. The literature does not establish a
timeless `compute × memory` formula or detection distribution.

## Deterrence and direct control

- US National Institute of Justice, [Five Things About
  Deterrence](https://nij.ojp.gov/topics/articles/five-things-about-deterrence):
  perceived certainty of apprehension often matters more than punishment
  severity, and deterrence differs from incapacitation.

This supports separate actor response to expected sanction and factual removal
of access. Effect sizes do not transport to states, militaries or catastrophic
gamblers.

## Algorithmic efficiency and AI-assisted research

- Ho et al., [Algorithmic progress in language
  models](https://arxiv.org/abs/2403.05812): retrospectively estimate a halving
  of pretraining compute needed for fixed perplexity every 8.4 months (95% CI
  4.5–14.3) over 2012–2023. This supports threshold ratcheting and compounding
  substitution, not extrapolation to RSI or attribution to inference access.
- [RE-Bench](https://arxiv.org/abs/2411.15114): agents performed strongly on
  short ML research-engineering budgets but humans led at longer budgets in the
  benchmark, supporting task/horizon-specific assistance rather than one
  research multiplier.
- [MLRC-Bench](https://arxiv.org/abs/2504.09702): best tested agent closed only a
  small fraction of the gap to top humans on the selected novel ML competition
  problems, again supporting heterogeneity.
- METR, [randomized trial of early-2025 coding
  tools](https://arxiv.org/abs/2507.09089): experienced open-source developers
  took longer with the tested tools despite predicting and perceiving speedups.
  The domain does not directly transfer to alignment research; the result
  supports separating perceived from realized assistance.
- Anthropic, [Tracing the thoughts of a large language
  model](https://www.anthropic.com/research/tracing-thoughts-language-model) and
  [methods](https://transformer-circuits.pub/2025/attribution-graphs/methods.html):
  interpretability can uncover unexpected causal mechanisms, while current
  coverage and human effort remain severe limitations. These results do not
  show a general 2× efficiency gain.

### Safe engine consequences

- Represent research at session/task/artifact/carrier level rather than as a
  scalar multiplier caused directly by inference access.
- A striking short-horizon benchmark does not reveal the latent long-horizon
  research regime.
- An interpretability result should create a specific dual-use artifact and
  secrecy/test/publication decision.
- Jörn's 25%/10% comparison and proposed 2×/year regime remain an elicited branch
  with unresolved event horizon, not empirical estimates from these sources.

## Hosted inference and released-weight residuals

- Anthropic's [ASL-3 deployment
  report](https://www.anthropic.com/news/activating-asl3-protections) provides an
  example of hosted identity/access controls, input/output classifiers, offline
  monitoring, threat intelligence, vetted-user exemptions, weight security and
  two-person controls. It covers a narrower threat model and is self-reported;
  it should not be treated as proof of robust AI-R&D control.
- [STACK](https://arxiv.org/abs/2506.24068) demonstrates adaptive attacks against
  one open-source classifier pipeline; it does not measure Anthropic's system
  but supports classifier adaptation and bypass risk.
- Carlini et al., [Stealing Part of a Production Language
  Model](https://arxiv.org/abs/2403.06634): API access can reveal exact nontrivial
  model components. Partial extraction, distillation, misuse and full weight
  theft must remain distinct.
- Meta's [Llama 3 report](https://arxiv.org/abs/2407.21783), the official [Llama
  3.1 70B card](https://huggingface.co/meta-llama/Llama-3.1-70B-Instruct), and
  [llama.cpp](https://github.com/ggml-org/llama.cpp) establish publicly
  distributed large weights and quantized CPU/hybrid runtimes. They establish a
  durable residual access floor, not that 70B models can produce the posited
  research breakthrough.
- Shavit et al., [Hardware-Enabled Mechanisms for Verifying Responsible AI
  Development](https://arxiv.org/abs/2505.03742): hardware reporting and
  attestation are promising design directions whose implementation, robustness
  and scale remain open. Treat them as pilots/requirements, not universal
  deployed assurance.

### Safe engine consequences

- Separate hosted frontier availability; identity/vetting/quotas/logging;
  classifier and review processes; weight/exfiltration security; and released-
  weight residual capability.
- Restricted access reduces opportunity and improves evidence; it does not set
  dangerous research probability to zero.
- Hardware attestation coverage must have rollout, vendor and bypass state.

## Calibration boundary

Public evidence does not currently resolve:

- six-month completeness of consolidation/custody;
- hidden national-security-site detection;
- distributed-training feasibility under specific bandwidth/topology controls;
- halt latency distributions;
- actor-class deterrence rates;
- political willingness for intrusive control;
- the probability or start horizon of a persistent efficiency regime; or
- whether consumer-runnable open models suffice for major capability research.

These belong in elicitation, broad sensitivity families or unweighted stress
worlds—not source-colored point estimates.
