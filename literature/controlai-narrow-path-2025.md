---
title: "A Narrow Path: How to Secure Our Future"
author: "Andrea Miotti, Tolga Bilge, Dave Kasten, James Newport (ControlAI)"
year: 2025
source_url: "https://www.narrowpath.co/"
source_format: pdf
downloaded: 2026-03-12
encrypted: false
notes: "The most detailed published ASI moratorium proposal to date. Proposes a 20-year ban on ASI development enforced through national licensing regimes, compute thresholds, and three international institutions (IASC, GUARD, IAT). Version 1.2.0, April 2025."
---

# A Narrow Path: How to Secure Our Future

**PDF:** https://pdf.narrowpath.co/A_Narrow_Path.pdf

## Executive Summary

The document argues that artificial superintelligence (ASI) poses extinction-level risk, that current AI companies are explicitly racing toward it, and that humanity has neither the scientific tools to measure intelligence in advance nor the control methods to contain a superintelligent system. The authors propose a three-phase plan: (0) a 20-year national moratorium on ASI development, (1) an international institutional framework to ensure the moratorium holds, and (2) a research program to develop controllable transformative AI under international governance.

---

## The Problem (Authors' Framing)

Four core arguments underpin the proposal:

1. ASI is plausibly achievable within 3–15 years at a cost of tens to hundreds of billions of dollars — affordable to major nations and some large companies.
2. Developers cannot predict what capabilities an AI will have before or after training, cannot control it, and cannot reliably shut it down. Therefore, ASI under current conditions would pose unacceptable extinction risk.
3. Risk originates from intelligence itself: an entity vastly smarter than humanity gains power over humanity by default, absent proven control mechanisms.
4. Humanity lacks a general science of intelligence measurement ("metrology of intelligence") — we are "like physicists who lack the tools to estimate what quantity of radioactive material could go supercritical."

The authors explicitly reject compute-only regulation as too blunt: restricting a single proxy requires prohibitively tight limits that stifle low-risk innovation. They advocate "defense in depth" — regulating multiple proxies simultaneously.

---

## Phase 0: Safety — The 20-Year Moratorium

### Goal
Prevent development of ASI for 20 years. The authors argue this is the minimum time needed to build adequate defenses, institutions, and scientific understanding.

### Four Safety Conditions
All Phase 0 interventions collectively must satisfy:

- **No AIs improving AIs** — runaway self-improvement loops invalidate all other red lines
- **No AIs capable of breaking out of their environment** — unauthorized access capabilities circumvent all containment
- **No unbounded AIs** — only deploy AI systems for which capabilities can be predicted and bounded before deployment
- **Limit general intelligence** — prevent any system from approaching superhuman general capability

### Six Phase 0 Interventions

**1. Prohibit ASI Development**
A normative prohibition — analogous to NPT and Biological Weapons Convention — making ASI development explicitly illegal nationally and internationally. Serves as both a criminal prohibition and a guiding principle for downstream regulations. Companies explicitly pursuing ASI face civil and criminal penalties, license revocation, and mandatory dismantlement. Prohibition lifts only when humanity has robust scientific understanding of intelligence, proven control mechanisms, and functioning international institutions.

**2. Prohibit AIs Capable of Breaking Out of Their Environment**
Clarify that existing unauthorized-access laws (e.g., US Computer Fraud and Abuse Act) apply to AI systems. Companies must test, monitor, and prevent inadvertent breakout capabilities. Penalties scale from fines for negligent inadvertent breakouts to criminal prosecution for intentional development of hacking-capable systems. Security researchers get safe-harbor exemptions to disclose vulnerabilities.

**3. Prohibit AIs That Improve Other AIs**
Introduces the concept of "found systems" (software produced by mathematical optimization rather than human programming) to precisely target the risk without banning routine software. Prohibits "direct use" of found systems to build or improve other found systems — i.e., fully automated AI research pipelines. This leaves ordinary AI-assisted work (search, office tools, email) unaffected. Monitored similarly to financial insider-trading surveillance: real-time and retrospective monitoring with swift enforcement.

**4. Require Valid Safety Cases for Deployment**
Before any advanced AI system is deployed, developers must justify why and how the system's capabilities are bounded — demonstrating it cannot perform prohibited capabilities. Analogous to aviation certification, nuclear safety cases, and drug approval requirements. No deployment without demonstrable bounds.

**5. Licensing Regime with Compute Thresholds**
A tiered licensing system with two main license types:
- **Training License (TL):** Required for models trained above a compute threshold. Applicants must demonstrate bounded capabilities, prohibited capabilities are absent, and safety infrastructure (shutdown mechanisms, stress-tested failure protocols) is in place.
- **Application License (AL):** Required for applications built on TL-licensed models. Must show the application won't exceed human-capability benchmarks or reach prohibited capabilities.

Licenses can be revoked as an enforcement mechanism. Regulators can immediately shut down R&D processes for risk assessment. Hardware providers must implement Hardware-Enabled Governance Mechanisms (HEMs) — GPS tracking on frontier chips, compute usage reporting dashboards above threshold.

**6. International Treaty Establishing Common Redlines**
Countries implement Phase 0 measures nationally and formalize them via international treaty, establishing a **Multi-Threshold System** for compute:

| Tier | Who Can Train |
|------|--------------|
| Below Lower Limit | Anyone (no license) |
| Lower–Medium | Licensed companies only |
| Medium–Upper | Licensed companies; only GUARD lab in practice |
| Above Upper | Prohibited for everyone except GUARD |

The Upper Limit is approximately the highest compute used to train any existing model (as of 2025). The compute cluster performance limits are calibrated so that a licensed actor running an illegal training run at maximum legal cluster speed would take 3.2 years to breach the Upper Limit — providing detection and response time. IASC (see Phase 1) adjusts thresholds downward over time to compensate for algorithmic efficiency gains.

Treaty also prohibits use of AI models developed in non-signatory states, creating an incentive structure for treaty participation.

---

## Phase 1: Stability — International Governance

### Goal
Build an international oversight system that does not collapse over time under geopolitical pressure, defection, or rogue actors.

### Four Stability Conditions
1. **Non-proliferation** — minimize the number of independent actors developing advanced AI (each additional actor multiplies aggregate catastrophic risk)
2. **International structure** — unilateral national development is unstable; only multilateral coalitions create stable equilibria
3. **Credible and verifiable mutual guarantees** — defections must be detectable; penalties must be credible; compliance must be verifiable
4. **Benefits from cooperation** — participation must be concretely valuable, not just risk-avoidance

### Three Phase 1 Institutions

**1. International AI Safety Commission (IASC)**
Modeled on the IAEA. Central rule-setting body for global AI development.

*Structure:*
- **Council:** One representative per signatory state, equal voting rights
- **Executive Board:** Permanent members (major powers + supranational bodies) with vetoes, plus non-permanent elected members — modeled on UN Security Council
- **General Secretary:** Appointed by 75% Executive Board supermajority; five-year term, maximum two terms. Powers include lowering compute thresholds, revoking AI organization registrations, ordering removal of GUARD senior officials, approving compute limit exemptions.
- **Advisory Committee:** AI scientists appointed by Council
- **AI Global Oversight Team:** Oversees GUARD; audits national regulators; maintains licensed model registry; investigates undeclared AI development
- **AI Scientific Measurement Team:** Maintains international standards for AI capabilities; reports on boundedness, corrigibility, alignment progress
- **AI Risk Analysis Team:** Provides overall extinction/catastrophic risk assessments

*Enforcement powers:*
- On-site inspections and audits of licensed facilities
- Analysis of intelligence from signatory nations' security services
- Supply-chain tracing and export control audits
- Providing "detection signatures" to member intelligence services (patterns of compute usage, network activity)
- Facilitating information-sharing between treaty parties
- Hardware-based reporting: compute cluster usage dashboards, chip location tracking via GPS

*Diplomatic status:* IASC employees have IAEA-equivalent diplomatic protections.

**2. Global Unit for AI Research and Development (GUARD)**
A centralized, internationally governed AI research lab — the only entity permitted to train models above the Medium Compute Limit.

*Rationale:* Without a multilateral research institution, AI is treated as an "all-or-nothing prize" that drives racing dynamics and safety corner-cutting. GUARD defuses this by pooling talent and providing benefits (model API access, research results) to all treaty members, reducing the incentive to break away with a national program.

*Structure:*
- Managing Director: 10-year term, appointed by IASC Council
- Executive Board: 5-year term, appointed by IASC Council; 75% majority for decisions
- Scientific Committee, Financial Committee, Risk Management Committee
- Operational directorates: Alignment, Boundedness, Capabilities Assessment, Fundamental Research, Internal Safety Audit, Finance, Information Security

*Key design features:*
- IASC can veto, appoint, remove, or reassign any GUARD senior official
- Research published/shared with treaty members unless disclosure poses hazard
- Models not released until safety science is advanced enough to verify safety
- Operates under SCIF-equivalent security standards where appropriate
- Explicitly designed to minimize risk of institutional capture by researchers willing to cut safety corners

*Access model:* Treaty members access GUARD outputs either as non-model deliverables (e.g., drug discovery datasets) or via verified-output API access through GUARD-operated compute clusters.

**3. International AI Tribunal (IAT)**
An independent judicial arm for IASC, resolving disputes and treaty violations rapidly.

*Design rationale:* Existing international dispute bodies (WTO: 10 months average; ICJ: 4 years; ECJ: 2 years) are too slow for AI risk scenarios where delayed judgment has catastrophic consequences.

*Structure:*
- **Court:** 31 judges on six-year renewable terms appointed by IASC Council. Default chambers of 5 judges; Grand Chamber of 15 for significant cases. Advocates General provide independent legal opinions.
- **Risk Assessment Panel:** 2 judges + 3 IASC AI Risk Analysis Team experts. First point of contact for submitted cases; determines whether Rapid Response escalation is required.
- **Rapid Response Panel:** 3 judges; maximum 30 days to take preliminary action (e.g., temporary restraining order). Cases revert to Risk Assessment Panel if no action within time limit.
- **Appellate Body:** 7 members on staggered four-year terms appointed by IASC Council.

*Enforcement:* Rulings are legally binding under the treaty framework. Non-compliance triggers treaty-authorized measures including economic sanctions (modeled on trade agreement enforcement).

---

## Phase 2: Flourishing — Controllable Transformative AI

### Goal
Once the moratorium is stable, develop AI under human control for human benefit — explicitly "not superintelligence, not AGI, but transformative AI." The target is automation of intellectual and physical labor as tools for humans, not AI as a successor species.

### Three Required Conditions
1. **Prediction of AI capabilities** — GUARD must be able to predict what an AI system can do before building it. Currently impossible with ML paradigms. Requires building a "science of intelligence" analogous to structural engineering, aerodynamics, or nuclear physics.
2. **Specification of AI guarantees** — Requires a formal specification language capturing controllability, legibility, and safety properties. Current ML research doesn't attempt this.
3. **Enforcement of AI guarantees** — Guarantees must be designed into AI architecture ("safe by design"), not patched after the fact. Analogous to nuclear safety's "inherently safe design" principle.

### Research Directions
- Science of intelligence: measurement science, mechanistic models of intelligence capable of predicting capabilities before construction
- Formal specification languages for AI properties including human interaction
- Safe-by-design AI engineering with safety factors analogous to structural engineering

Cited as directionally consistent: DARPA XAI, ARIA Safeguarded AI, Conjecture CoEm, Guaranteed Safe AI agendas (Tegmark, Omohundro, Dalrymple, Bengio, Russell).

---

## Political Feasibility Assessment

The document does not contain a dedicated political feasibility section, but makes several relevant observations:

**On US-China cooperation:** Identified as the critical axis. The document explicitly names negotiations "especially between the USA and China" as the core diplomatic challenge. GUARD and IASC are designed to defuse the zero-sum framing of AI development.

**On incentives for participation:** GUARD membership gives countries access to frontier AI capabilities they could not develop safely or quickly on their own. The treaty prohibits using AI from non-signatory states, creating carrots (access to GUARD) and sticks (exclusion from allies' AI systems) for joining.

**On defection risk:** Acknowledged explicitly. The system is designed for stability, not just initial compliance. The IAT provides rapid dispute resolution; IASC provides monitoring; GUARD reduces incentives to defect by providing benefits. But the authors admit "it is unrealistic to expect perfect adherence" and that "systems naturally decay without active maintenance."

**On racing dynamics:** GUARD specifically exists to neutralize the "all-or-nothing prize" dynamic. Countries that stand no real chance of winning the AI race might even threaten AI-developing nations with acts of war to deter their development — GUARD defuses this by making cooperation the route to AI access.

**On moratorium duration:** The 20-year figure is presented as a minimum, not an ideal. The authors state they would prefer more time but "the supplement should not be relied upon."

**ControlAI's campaign approach:** The document is the policy proposal; ControlAI separately ran a pilot political campaign focused on UK lawmakers. Within three months, over 20 cross-party UK parliamentarians publicly endorsed the campaign. This empirical result is cited externally (not in the document itself) as validation of political tractability.

---

## Interventions Considered and Rejected (Annex 3)

- **Regulating model size (parameter count):** Rejected because parameter count strongly correlates with training compute (via scaling laws), making it a redundant proxy; and hardware is easier to monitor than software.
- **Leaving advanced AI decentralized:** Rejected because competitive proliferation multiplies catastrophic risk opportunities.
- **Regulating training data breadth:** Under consideration for future iterations; not included in v1.2.0.
- **"Formula One" licensing based on safety track record:** Rejected because past safety record is not a reliable predictor of future safety practices in a young industry, and creates regulatory capture risk by entrenching existing frontier labs.

---

## Key Differences from Other Moratorium Proposals

Compared to Yudkowsky's "Shut It All Down" (TIME, 2023), which proposes an immediate total halt to all frontier AI training globally:
- Narrow Path explicitly permits continued development below compute thresholds without licensing
- Narrow Path builds an endgame (GUARD, Phase 2) rather than treating pause as indefinite
- Narrow Path engages seriously with enforcement architecture and political incentives
- Narrow Path focuses the prohibition narrowly on ASI-capable development, not all frontier AI

Compared to the MIRI/Yudkowsky draft treaty (iabied-treaty.md), which is similar in structure:
- Narrow Path places more emphasis on the international research institution (GUARD) as an active governance tool, not just a permit-issuing body
- Narrow Path's licensing regime is more elaborated, with two tiers (TL + AL)
- Narrow Path includes the IAT rapid-response judicial mechanism explicitly
- Narrow Path frames Phase 2 as a research program to earn the right to develop transformative AI, not just as indefinite prohibition
