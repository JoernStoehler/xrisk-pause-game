---
title: "Training Compute Thresholds: Features and Functions in AI Regulation"
author: "Lennart Heim, Leonie Koessler"
year: 2024
source_url: "https://arxiv.org/abs/2405.10799"
source_format: arxiv-html
downloaded: 2026-03-12
encrypted: false
notes: "Analyzes training compute as a regulatory metric for identifying high-risk general-purpose AI systems. Compares EU AI Act (10^25 FLOP) and US AI Executive Order (10^26 FLOP) thresholds. Evaluates advantages, limitations, and implementation challenges of compute-based regulation."
---

# Training Compute Thresholds: Features and Functions in AI Regulation

## Executive Summary

This paper examines how regulators use training compute thresholds to identify general-purpose AI (GPAI) models posing risks of large-scale societal harm. The authors argue that training compute—the total computational operations needed to train an AI model—currently represents "the most suitable metric to identify GPAI models that deserve regulatory oversight."

Training compute correlates with model capabilities through empirical scaling laws, is quantifiable, measurable before deployment, and difficult to circumvent. However, it serves only as a crude proxy for actual risk. The paper recommends using compute thresholds as an initial filter triggering regulatory scrutiny, complemented by more precise capability-based evaluations to determine specific mitigation requirements.

## Key Features of Training Compute for Regulation

### Risk-Tracking

Training compute correlates with model loss and capabilities through scaling laws. As models become more capable, they may pose greater risks through misuse or if objectives become misaligned, plus they receive wider deployment and reliance.

### Easily Measurable

Computing requirements can be calculated directly from model specifications with minimal effort and represent a unidimensional, durable metric.

### Difficulty of Circumvention

Reducing training compute inherently decreases model capabilities and risks. While algorithmic efficiency improvements gradually reduce compute requirements, this represents natural progress rather than active circumvention.

### Early Measurability

Training compute can be estimated before development begins and calculated before deployment, enabling proactive governance during the training process.

### External Verifiability

Compute providers can verify usage without accessing proprietary model details, supporting compliance monitoring while protecting confidentiality.

### Cost-Tracking

Training compute directly corresponds to financial resources required, focusing regulatory burden on well-resourced actors rather than smaller entities.

## Limitations and Crude Risk Correlation

The authors acknowledge training compute functions as "a very crude proxy for risk." Multiple imperfect correlations exist: compute → loss → capabilities → risk. Furthermore:

- Not all high-compute models pose significant concerns
- Some low-compute models could present substantial risks
- Inverse scaling occurs for certain tasks
- Risk remains highly contextual, depending on threat landscapes, defense-offense balance, and societal adaptation capacity

The fundamental dependency on scaling laws means training compute may become an inferior risk proxy if AI paradigms shift away from deep learning or pre-training's importance diminishes.

## Functions in Regulatory Frameworks

### Initial Filter Approach

Compute thresholds should serve as initial filters triggering regulatory oversight and further scrutiny rather than determining final mitigation measures. This approach:

- Identifies models warranting heightened attention
- Filters out models unlikely to pose societal risks
- Reduces compliance burdens and enforcement costs
- Should be complemented by capability-based thresholds for targeted mitigation decisions

### US AI Executive Order

The US AI EO establishes a 10^26 operations threshold (and 10^23 for biological sequence models), requiring companies to:

- Notify government about affected models
- Report cybersecurity measures for model weights
- Share red-teaming results and mitigation approaches

As of mid-2024, no publicly reported model exceeds the primary threshold, suggesting it targets future capabilities.

### EU AI Act

The EU AI Act presumes GPAI models crossing 10^25 floating-point operations pose systemic risk, requiring:

- Notification to European Commission
- Model evaluations and systemic risk assessments
- Serious incident reporting
- Cybersecurity and infrastructure protections

Crucially, providers can demonstrate that models exceeding the threshold pose no systemic risk, avoiding additional requirements—a provision aligning compute thresholds with their proper role as initial filters.

## Setting Threshold Levels

Regulators face choices about positioning thresholds:

1. **Above frontier** (currently 10^26-10^27): Captures unprecedented models most likely risky; risks being underinclusive
2. **At frontier** (currently 10^25-10^26): Includes current state-of-the-art models showing warning signs; the EU's apparent approach
3. **Below frontier** (currently 10^24-10^25): Creates safety margins; highly inclusive but burdensome

Considerations include post-training enhancements (which can increase capabilities 5-20×) and whether thresholds should include fine-tuning compute (the paper recommends focusing on pre-training only, as fine-tuning typically represents ~1% of pre-training compute).

## Challenges for Implementation

### Where to Set Thresholds

Uncertainty about which compute levels correspond to dangerous capabilities creates tension: low thresholds risk overinclusivity; high thresholds risk underinclusivity. Different jurisdictions have chosen different values—a significant regulatory coordination challenge.

### Domain-Specific Thresholds

The US AI EO includes biology-specific thresholds, but appropriateness varies by domain. AI-enabled biological tools require different considerations than language models trained on biological sequences, with unclear scaling law applicability and potentially far larger regulatory scope.

### Updating Over Time

Thresholds require regular updates based on:

- **Improving understanding** of which models pose genuine risks (likely pushing thresholds upward initially)
- **Algorithmic efficiency improvements** (pushing thresholds downward to maintain capability correspondence)
- **Computational price-performance gains** (expanding regulatory scope unless thresholds rise)
- **Threat landscape changes** and societal adaptation capacity

Both regulatory frameworks mandate regular threshold updates. The EU AI Act explicitly requires updates for technological developments; the US AI EO directs the Commerce Secretary to update thresholds regularly.

### Alternative Metrics

The paper considers complementary or alternative metrics:

**Risk Estimates**: Better proxies for actual risk but difficult to measure reliably and early in development.

**Model Capability Evaluations**: More precise risk indicators than compute but challenging to conduct before deployment and subject to manipulation.

**Effective Compute**: Accounts for algorithmic efficiency but harder to measure and verify than standard compute calculations.

**Parameters, Data, and User Numbers**: Some (like parameters) correlate poorly with capabilities; others (like user numbers) only emerge post-deployment.

The paper concludes that initial filters based on easily measurable metrics should precede application of harder-to-evaluate, more precise thresholds.

## Broader Regulatory Framework

Compute thresholds should not serve as the sole regulatory basis across AI governance. The paper emphasizes that most AI requirements should not hinge on training compute, including:

- Application-layer risks (bias, discrimination, fairness)
- Risks independent of compute (copyright, privacy infringement)
- Ex post regulation (tort, criminal law)

Instead, compute thresholds should be embedded within comprehensive frameworks addressing diverse risks through multiple mechanisms.

## Conclusion

The authors conclude that while imperfect, compute thresholds remain "currently the best tool available for identifying potentially risky GPAI models and triggering regulatory oversight and further scrutiny." They enable proactive governance of an emerging, poorly understood technology while acknowledging their limitations as crude risk proxies.

The frameworks in both the US and EU largely align with the paper's recommended approach: using compute thresholds as initial filters triggering enhanced oversight, capability evaluations, and risk assessments—with provisions allowing companies to demonstrate acceptable risk despite crossing compute thresholds.
