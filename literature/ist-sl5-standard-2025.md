---
title: "SL5 Novel Recommendations: A Blueprint for Achieving Security Level 5 in Frontier AI"
author: "Lisa Thiergart, Luis Cosio, Yoav Tzfati, Peter Wagstaff, Guy (surname not listed), Philip Reiner"
year: 2025
source_url: "https://sl5.org/pdfs/SL5_NOVEL-RECOMMENDATIONS.pdf"
source_format: pdf
downloaded: 2026-03-12
encrypted: false
notes: "Preliminary draft (November 2025) from the Institute for Security and Technology (IST) SL5 Task Force. Blueprint for achieving Security Level 5 (SL5) — security against the world's most capable nation-state adversaries — for frontier AI model weight protection. Covers supply chain, network, machine, physical, and personnel security. The SL1-SL5 framework was originally developed by RAND Corporation; this document provides specific implementation recommendations for reaching SL5. IST hosted at securityandtechnology.org; project site at sl5.org."
---

# SL5 Novel Recommendations: A Blueprint for Achieving Security Level 5 in Frontier AI

## About the SL5 Task Force

The SL5 Task Force is a project inside the Institute for Security and Technology (IST), a 501(c)(3), collaborating with over 50 participants — including AI lab decision-makers, national security leaders, data center operators, chip providers, security researchers, and engineers. Led by Lisa Thiergart and Philip Reiner.

**Mission:** "Create the optionality for U.S. AI Labs to reach Security Level 5 in the coming years, and to be able to activate SL5 within 3-6 months of choosing to do so."

**Core premise:** Current best practices for frontier AI organizations do not reach SL5. On the default path, SL5 will not be realized before automated AI R&D thresholds are reached. The task force runs a multistakeholder sprint to identify gaps, develop solutions, and facilitate implementation.

**Framing:** SL5 is about securing the critical span when models become increasingly capable of automated AI R&D while AI alignment has not yet been sufficiently solved. During this window, model theft or sabotage poses untenable safety, security, and national security risks. "SL5 is a powerful tool to buy time to find and build more long-time tenable solutions to the AI alignment and governance problem than currently exist."

---

## The Five Security Levels (SL1–SL5)

The SL1–SL5 framework was developed by RAND Corporation (see: "Securing AI Model Weights," RAND RRA2849-1, 2024). The framework maps 38 distinct attack vectors across five levels, each designed to defend against increasingly sophisticated adversaries.

| Level | Threat Model | Description |
|-------|-------------|-------------|
| **SL1** | Hobby hackers, script kiddies | Opportunistic, low-skill attackers. Basic security hygiene. |
| **SL2** | Moderately sophisticated actors | More determined attackers with some resources. Enhanced controls. Google's Gemini 2.5 model card states it has "been aligned with RAND SL2." |
| **SL3** | Well-resourced criminal organizations | Professional cybercriminals, organized groups. Advanced detection and defense. |
| **SL4** | Nation-state affiliated groups | Sophisticated state-sponsored attackers. Air-gapped systems, extensive insider threat programs, advanced cryptography. Can be "reached incrementally." |
| **SL5** | World's most elite attackers | Major nation-states at full capability. "SL5 can likely only or at least most quickly and cheaply be reached by a radical reduction in the hardware and software stack that is trusted." Extreme compartmentalization, custom hardware, continuous security validation. |

Key distinction: SL4 can plausibly be reached incrementally; SL5 requires qualitative architectural changes.

---

## Why SL5 Matters for AI Governance

- **Model weight theft** gives adversaries the ability to run frontier models without safeguards, bypass safety measures, gain strategic AI advantage, and accelerate their own capabilities
- **Stakes are high:** Frontier training runs cost ~$1B+ (per Anthropic CEO). Stolen model replacement cost is in hundreds of millions to >$1B including litigation, response, and follow-on harms
- **Timeline pressure:** AI capabilities are advancing at ~7-month doubling times. Automated AI R&D (projections: 200,000 AI agents running at 30x human speed by April 2027) creates both new attack vectors and new urgency
- **Policy context:** Several frontier AI RSPs (Responsible Scaling Policies) now reference the SL framework. Labs are expected to reach SL3 or SL4 at certain capability thresholds

---

## Technical Requirements for SL5

The document organizes SL5 requirements into five security domains. Each domain has top-5 recommendations, research reasoning, cost-benefit analysis, and alternatives.

### Supply Chain Security

**Executive summary:** Software supply chain attacks are the cheapest and most scalable attack vector. Hardware attacks are feasible for nation-state attackers at Offensive Capability Level 5 (OC5). SL5 requires a radical reduction in the trusted hardware and software stack.

**Top 5 Recommendations:**
1. **Architectural isolation and progressive access restriction** — Establish boundaries between systems based on their access to model weights. Weight-accessing systems must run minimal, highly trusted software. Access to sensitive resources only through narrow APIs. Implement "seat management" (progressive reduction and time-bounding of privileged access, as demonstrated by Cloudflare and Google)
2. **Review and harden all external security-critical software** — Apply risk-proportionate hardening: vulnerability scanning, feature pruning, security refactoring, language rewriting (e.g., C to Rust), formal verification. Classify all external dependencies by trust level, codebase size, test coverage, language safety characteristics
3. **Audit and minimize the hardware supply chain** — Invest in hardware root of trust (e.g., OpenTitan project), confidential computing, on-chip security interventions. Audit and procure from trusted vendor base
4. **Adversarially robust data integrity verification** — Develop and deploy detection systems to screen all text entering the data center (training data, inference inputs, code undergoing LLM-based hardening) for poisoning attempts, jailbreaks, and malicious content. Detection systems must themselves be hardened against adversarial attacks
5. **Continuously red team all supply chain processes** — Automated systems that continuously inject benign adversarial actions into supply chain processes. Use LLMs to generate diverse attack patterns. Design in consultation with nation-state-level whitehat attackers

**Key finding:** The full ML software stack attack surface is likely infeasible to secure for weight-accessing systems. Solution: architectural separation with aggressive dependency reduction.

### Network Security

**Executive summary:** Established solutions exist (from both industry and national security ecosystem) but require major adaptation for AI workloads. Key tension: frontier training may require >5 GW power by 2029 (almost half peak NYC demand), making geographically distributed infrastructure necessary, which complicates securing long-distance connections.

**Top 5 Recommendations:**
1. **Connect secure sites with inline network encryptors** — Encrypt all traffic exiting a secure site using inline network encryptors (equivalent to NSA-certified Type 1 encryptors, or enterprise alternatives complying with FIPS 140-3 Level 3). Current bandwidth: up to 100-400 Gbps per encryptor. Open question whether long-distance connections can ever be fully trusted at SL5
2. **Encrypt accelerator interconnect** — Encrypt communications over AI accelerator inter-chip interconnect at the chip level. NVIDIA Blackwell GPUs now include this; earlier generations (Hopper H100, Trainium, TPU) do not. Requires planning well in advance due to chip design lead times
3. **Isolate powerful models on an air-gapped network** — Train and host frontier models posing catastrophic risk exclusively on an air-gapped network. Serve customer inference with weaker models (or post-release models at SL4). Physical air gap enforces separation better than software separation. Consistent with SIPRNet, JWICS, nuclear plant isolation models
4. **Maintain separate enclaves for weight-related operations** — Restrict weight operations to a separate enclave where only human-reviewed, signed code can execute. Separate "weight enclave" from "broader SL5 network" where unsigned code (from AI R&D workflows) can run. Interface between the two introduces risks requiring careful design
5. **Develop AI-enhanced cross-domain solutions (CDS)** — Enable limited communication between weight enclaves and the broader SL5 network using cross-domain solutions enhanced with AI monitors. AI monitors check outputs for suspicious activity, involving human monitors in a targeted manner. Data diodes enforce one-way connections. Bandwidth limiting defends against weight exfiltration (GPT-4 believed to be ~3.4 TB; total egress can be capped below a safe fraction of model size)

### Machine Security

**Executive summary:** Capable adversaries exploit vulnerabilities in complex systems (Spectre/Meltdown, Bullrun precedents). Most security is not about outsmarting adversaries but minimizing attack vectors and simplifying systems.

**Top 5 Recommendations:**
1. **Push for stronger AI accelerator security features** — Request that chip designers include: integrated root-of-trust, interconnect encryption support, comprehensive tamper-proofing (meeting FIPS 140-3 Level 4 requirements). Must be requested well in advance due to long development cycles. Key vulnerability: model weights exist unencrypted inside processing units during computation, making compute cores attractive physical targets
2. **Employ verified/measured boot on all devices with privileged access** — Cryptographically verified boot on AI accelerators, authorization servers, and employee workstations. Tamper-proof attestation process that prevents spoofing. Creates immutable record of exactly what software is running
3. **Use simple devices to defer authorization away from complex systems** — Deploy dedicated simple-hardware devices (potentially single-die with basic display, signing, and input) that handle cryptographic signing and user confirmation for sensitive operations. These devices could potentially be physically inspected via infrared imaging or scanning electron microscopy to verify against original design — impossible for complex computers
4. **Support tamper-proof and tamper-evident enclosures** — Extend protection beyond individual components to entire operational contexts: from chips to server racks. Only 4 devices have achieved FIPS 140-2 Level 4 certification (all HSMs, 3 from IBM). When interconnects lack encryption, tamper-proof scope may need to extend to entire racks or floors — creating strong economic incentive to build security into hardware instead
5. **Design processes with planned adversarial injections** — Automated systems that regularly inject benign but realistic adversarial actions into processes. Leverage AI capabilities to craft adversarial content. Maintain constant vigilance; prevents security infrastructure from becoming worn down by disuse

### Physical Security

**Top 5 Recommendations:**
1. **Enforce two-person integrity (TPI) for all maintenance** — Two authorized, vetted persons present for any access to sensitive systems. Prevents unilateral insider action
2. **Mandate body-worn cameras with obstruction alarms** — Reduces blind spots, provides incident investigation evidence, creates deterrent. In SCIF-equivalent areas, body-worn cameras are prohibited per ICD/ICS 705 and TEMPEST principles; in non-SCIF vital areas, cameras operate untethered but must dock at defined intervals to upload footage
3. **Eliminate out-of-facility maintenance** — Prohibit all remote maintenance (including HVAC, power, cooling, servers, infrastructure). No remote access for external vendors — they must dispatch technicians or provide guidance to on-site staff. If monitoring visibility is required externally, permit one-way egress only via hardware data diode (telemetry only, no command channel). Rationale: remote control planes have been weaponized in practice (German steel mill cyber attack, Oldsmar water plant hack). RMM tools routinely weaponized. BMC/IPMI/Redfish vulnerabilities bypass host OS controls
4. **Harden side-channel defenses** — Defend against electromagnetic, acoustic, RF, optical, timing, and other side channels. Targets: attackers extracting confidential information AND an AI trying to exfiltrate itself or establish external communications. Techniques: LED masking (even taping over LEDs removes a high-bandwidth channel), noise generators, RF shielding, cable shielding, software masking/blinding. An AI may deliberately create leakage, requiring physical attenuation, not just software mitigations
5. **Perform pre-installation component X-ray verification** — Multi-modal inspection (X-ray, infrared thermography, computer vision) of all hardware components before installation. Detects unauthorized modifications including added chips, anomalous circuits, counterfeiting. X-ray now feasible at scale due to cost improvements. NSA's COTTONMOUTH and FIREWALK implants (from ANT catalog) demonstrate the threat. Small random percentage may undergo more thorough inspection including ptychographic laminography (single-digit nanometer features)

### Personnel Security

**Executive summary:** Insider threats make up 35% of all security incidents across tech sectors, likely higher for AI. Average breach cost $4.44M (IBM). For AI model theft the stakes are far greater. Two distinct threat classes require different solutions: human insiders (mostly known countermeasures) and AI agent insiders (novel and hard to predict).

**Top 5 Recommendations:**
1. **Implement Industry-Optimized Sensitivity Levels (Private Sector Clearance)** — Develop a standardized industry-adapted clearance process called "Sensitivity Levels" (SenLs). A subset of government S/TS/TS-SCI clearance adapted for private sector constraints: citizenship constraints (50%+ of frontier lab engineers may be non-US nationals), processing times (TS clearance takes ~249 days; SL5 timelines can't wait), eligibility constraints (clearances normally require government contracting). Tiered model based on: access to model weights, ability to modify critical systems, exposure to trade secrets, potential for catastrophic impact
2. **Develop and Enforce AI Agent Access Agreements and Boundaries** — AI agents need governance structures analogous to human personnel: what data they can access, what actions they can take, what outputs they can generate, when access is revoked. Resource requests include time limits, compute allocation, file/code access restrictions, minimal software dependencies. Access to an agent's own weights should ideally be prohibited entirely. Third-party AI services governed by same boundary-setting principles
3. **Continuous Behavioral Monitoring for Humans and AI** — Comprehensive monitoring tracking access patterns, data interactions, behavioral indicators across all personnel types. For humans: unusual access times, data downloads, privilege escalations, communication anomalies. For AI: token usage patterns, capability exploration attempts, unusual outputs, boundary violations. Monitoring strictness scales with privilege level. Infrastructure must function as active gate with graduated response capabilities: blocking actions, terminating processes, isolating hosts, powering down accelerators, disconnecting network segments, emergency shutdown
4. **Decorrelate and diversify review of AI-generated outputs** — Use multiple independent AI reviewers with decorrelated failure modes to check AI-generated code and outputs. Prevents a single compromise from dominating review decisions. Ideas from AI control research applicable: weaker, more trusted AI models checking outputs of more powerful AIs, with targeted human oversight
5. **Continuous Red Teaming** — Ongoing adversarial testing of all personnel security processes, including simulated social engineering, insider threat scenarios, and AI agent boundary violations

---

## Operational Requirements for Facilities and Organizations

**Network architecture:**
- Separate air-gapped internal network for frontier model training and storage
- Development network for unsigned code execution (R&D workflows)
- Cross-domain solutions to transfer verified code between networks
- Physically secured sites connected by inline network encryptors when multi-site is necessary
- One-way data diodes for external telemetry

**Physical facility:**
- SCIF-equivalent secure areas for most sensitive operations (weight storage and training)
- 24/7 on-site maintenance staff (no remote maintenance permitted)
- TPI requirements for all maintenance activities
- RF shielding, acoustic noise generation, LED masking
- Pre-installation X-ray verification for all hardware components

**Personnel:**
- Tiered sensitivity-level clearances for all staff based on access to model weights and critical systems
- Continuous behavioral monitoring for all staff and AI agents with active gating capability
- AI agent governance frameworks parallel to human personnel rules
- Background checks and vetting proportional to access level

**Hardware and supply chain:**
- Minimal software stack for weight-accessing systems (radical reduction from current state)
- AI chips with integrated root-of-trust and interconnect encryption (requires requesting from chip vendors now, before needed)
- Hardware security modules meeting FIPS 140-3 Level 4
- Component X-ray verification before installation
- Trusted, audited vendor base for security-critical components

---

## Key Tensions and Open Questions

- **Productivity vs. security:** Strict security measures impede researcher productivity and slow development velocity
- **Distributed compute vs. security:** Power requirements for frontier training (~5 GW by 2029) likely necessitate geographic distribution, which complicates air-gapping and long-distance connection security
- **Talent vs. clearances:** Most frontier labs employ 50%+ non-US-national engineers; government clearances require citizenship/permanent residency — private sector alternatives needed
- **Untrusted AI labor in security:** Reaching SL5 within 3 years without unrealistic staffing requires using LLM assistance that itself cannot be trusted (circular dependency)
- **Open question:** Whether long-distance connections can ever be fully trusted at SL5 — may require physical media transfers for most sensitive data
- **Open question:** At what point during AI R&D workflows do we need frontier model weights access, and how can those workflows be restructured?

---

## Relationship to AI Governance

- **Policy hook:** Labs' Responsible Scaling Policies increasingly reference the RAND SL framework. As capabilities advance, labs may be expected to achieve SL3 or SL4 before training more powerful models. SL5 is the eventual target for highest-capability models
- **International dimension:** SL5 standards could be incorporated into international AI treaties as a verification mechanism — inspectors verifying that a lab meets SL5 would confirm model weights cannot be easily exfiltrated (similar to IAEA safeguards verifying nuclear material isn't diverted)
- **Compute governance connection:** SL5 controls (especially on-chip security features) interact with compute governance proposals (governable chips, training thresholds)
- **Urgency:** The task force's explicit goal is to make SL5 activatable within 3-6 months of a lab choosing to pursue it — implying the architecture decisions and hardware requests must be made now, years before SL5 is needed

---

## Authors and Affiliation

Published by the SL5 Task Force, a project of the Institute for Security and Technology (IST), a 501(c)(3) nonprofit. Led by Lisa Thiergart and Philip Reiner. Document is a preliminary draft from November 2025 with input from AI labs, national security leaders, data center operators, hardware providers, and security experts.

The underlying SL1-SL5 security level framework was developed by RAND Corporation and published in "Securing AI Model Weights: Preventing Theft and Misuse of Frontier Models" (RAND RRA2849-1, May 2024). The IST SL5 Task Force translates that framework into specific implementation recommendations.

Additional domain-specific memos exist as separate PDFs at sl5.org:
- Machine Security Novel Recommendations
- Network Security Novel Recommendations
- Personnel Security Novel Recommendations
- Physical Security Novel Recommendations
- Supply Chain Security Novel Recommendations
