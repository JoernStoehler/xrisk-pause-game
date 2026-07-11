---
title: "Strategies and Detection Gaps in a Game-Theoretic Model of Compute Governance"
author: "Alvin Moon, Padmaja Vedula, Jesse Geneson, Simon Bar-on"
year: 2025
source_url: "https://www.rand.org/pubs/research_reports/RRA3686-1.html"
source_format: html
downloaded: 2026-03-12
encrypted: false
notes: "Game-theoretic analysis of compute governance, focusing on cloud provider detection capabilities, evasion strategies, and detection gaps. Directly relevant to pause mechanisms and international treaty enforcement monitoring."
---

# Strategies and Detection Gaps in a Game-Theoretic Model of Compute Governance

## Executive Summary

This RAND Corporation research report examines the ability of cloud service providers to detect and report large artificial intelligence (AI) training runs within a compute-governed system. The study employs game-theoretic analysis to explore detection mechanisms, evasion strategies, and the fundamental gaps in monitoring approaches.

### Key Findings

1. **Detection Threshold Limitations**: Cloud service providers may struggle to effectively detect and report AI training runs if monitoring is based solely on floating-point operation (FLOP) thresholds. Actors with sufficient resources and knowledge can circumvent such threshold-based detection mechanisms.

2. **Evasion Strategies**: The game-theoretic analysis identifies multiple strategies that actors could employ to avoid detection:
   - Distributed training across multiple accounts or providers
   - Using lower-precision computations to reduce apparent FLOP counts
   - Temporal spreading of training workloads
   - Exploiting gaps between the monitoring obligation thresholds and actual training requirements

3. **Future Capabilities**: Many types of capable AI models will likely exist in the future whose training will be difficult or impossible to detect through conventional monitoring approaches, regardless of the detection threshold chosen.

4. **Detection Gaps**: The report identifies structural gaps in monitoring systems that create spaces where training runs can be conducted while evading detection obligations.

### Implications for Pause Mechanisms

This research directly informs international pause mechanisms and treaty enforcement:

- **Monitoring Challenges**: A global pause on ASI development cannot rely solely on compute thresholds as an enforcement mechanism. Multiple complementary approaches are necessary.

- **Game-Theoretic Vulnerabilities**: Rational actors facing compute governance will develop strategies to evade detection. Effective monitoring requires anticipating and designing against these strategies.

- **Resource Requirements**: Effective detection requires sophisticated monitoring beyond simple threshold-based systems, with implications for the resources and cooperation required from cloud providers.

- **International Coordination**: Single-provider monitoring is insufficient; effective pause enforcement requires coordination across multiple cloud providers and jurisdictions.

### Recommendations for Policymakers

The report outlines strategies that cloud service providers could employ to improve AI training detection:

1. **Behavioral Monitoring**: Beyond FLOP counting, monitor unusual patterns in resource allocation, account behavior, and data transfer patterns

2. **Multi-Factor Approaches**: Combine compute monitoring with other signals (memory patterns, specialized hardware usage, training dataset characteristics)

3. **Coordination Mechanisms**: Establish information-sharing protocols between cloud providers to prevent actors from using provider-switching to evade detection

4. **Dynamic Thresholds**: Adjust monitoring thresholds and approaches as AI capabilities evolve and new evasion techniques emerge

5. **Transparency Requirements**: Require cloud providers to maintain detailed logs of large computational workloads, subject to audit and verification

## Relevance to The Pause

This research is highly relevant to the game design and mechanics of The Pause:

- **Intel vs. Leverage Tension**: The difficulty of detecting advanced training runs mirrors the game mechanics where high Intel comes at the cost of Leverage (surveillance state backlash)

- **Treaty Enforcement Crisis**: A core failure mode in The Pause is the discovery that monitoring mechanisms have fundamental gaps—this report provides the theoretical basis for that failure mode

- **Detection Gaps as Difficulty**: The game can represent the impossibility of perfect detection through resource allocation decisions (Intel bars don't reach 100) and hidden cards that represent undetected developments

- **International Coordination Challenges**: The requirement for multi-provider coordination reflects the geopolitical complexity of maintaining a pause across competing economic interests

## Document Status

**Note**: The full text of this RAND report is available at the source URL but requires navigation of the RAND website interface. The RAND PDF CDN employs access controls that prevent automated downloading. The information above is compiled from the RAND publication summary and research literature descriptions.
