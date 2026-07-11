---
title: "Perfect Implementation Isn't Enough: Four Ways an ASI Moratorium Could Fail"
author: "Damin Curtis"
year: 2025
source_url: "https://www.lesswrong.com/posts/efvrNLwwtJLrHDWDM/perfect-implementation-isn-t-enough-four-ways-an-asi"
source_format: html
downloaded: 2026-03-12
encrypted: false
notes: "Red-team analysis of ControlAI's 'A Narrow Path' Phase 0 moratorium proposal. Identifies four circumvention routes that persist even under perfect national implementation: regulatory havens, distributed GPU swarms, covert state supercomputers, offshore proxy data centers. Published LessWrong August 13, 2025; companion to Apart Research hackathon sprint."
---

# Perfect Implementation Isn't Enough: Four Ways an ASI Moratorium Could Fail

## Context and Background

This post is a red-team analysis of **Phase 0** of ControlAI's "A Narrow Path" — a policy proposal for a 20-year international moratorium on training Artificial Superintelligence (ASI). Phase 0 proposes compute-based thresholds, a licensing regime for advanced AI development, national institutions with computational and performance limits, and restrictions on dangerous capabilities (autonomous self-improvement, environmental escape). Phase 1 would internationalize these measures through treaty, with a central regulatory authority, research oversight body, and independent judicial body.

The author's core argument: even if every signatory nation implements Phase 0 flawlessly — every law passed, every inspector deployed, every threshold enforced — four structural vulnerabilities allow determined actors to circumvent the moratorium without open defiance. The question is not whether the rules are good, but whether the rules can be made to hold against optimization pressure.

The historical framing uses the fall of Constantinople (1453): Mehmed II defeated triple walls not by storming them directly but through four novel methods (tunnel mining, ships hauled over hills, massive cannons, prolonged blockade). Similarly, an ASI moratorium may fall not to frontal rejection but to circumvention at the margins.

The analysis was produced in connection with an Apart Research one-day red-teaming sprint on "A Narrow Path" (June 13, 2025), hosted in collaboration with ControlAI.

---

## The Four Failure Modes

### 1. Regulatory Havens (AI-Haven States)

**Mechanism:** A well-resourced actor — state or private — relocates ASI development to a jurisdiction that does not sign the treaty. Unlike physical weapons, AI models can be trained in one jurisdiction and instantly accessed or transmitted elsewhere. Small or middle-income nations could be incentivized to become "AI havens" by offering favorable regulatory environments in exchange for infrastructure investment, technical capacity, or political patronage.

**Historical analogues:** Cryptography moved to offshore servers when strong encryption was restricted; nuclear supplier-club loopholes let threshold states acquire dual-use equipment; financial havens persist despite global FATF pressure.

**Why it is hard to close:** The moratorium covers only signatories. Non-signatory states have no legal obligation. Even if major powers sign, a single non-signatory with sufficient compute access creates a viable exit route. Economic and strategic incentives make "AI haven" status attractive to states otherwise left out of the AI race.

**Enforcement implication:** A moratorium without near-universal participation, or without credible coercive pressure on non-signatories, is a sieve. The threshold for "sufficient participation" is likely higher than for traditional arms control, because AI development has a lower capital floor than nuclear weapons programs.

---

### 2. Distributed GPU Swarms (Below-Threshold Aggregation)

**Mechanism:** An actor trains at scale by aggregating consumer or mid-tier GPUs distributed across many nodes, each individually below any per-node licensing threshold. Distributed and federated training methods (e.g., DiLoCo, Intellect-style protocols) increasingly allow large-scale training across geographically dispersed hardware without a central data center. Within 6–18 months of deployment, such a swarm could reach GPT-4-scale training capacity while remaining nominally compliant.

**Why it is hard to close:** Licensing regimes targeting large clusters (e.g., requiring a license for clusters above X H100-equivalents) do not capture distributed runs across consumer hardware. Individual devices are not regulated. The technical distinction between a compliant single-node training run and a coordinated distributed run is observable only from inside the network.

**Historical analogues:** Financial monitoring targets large transactions; smurfing (distributing transactions across many small transfers) is a known evasion technique.

**Enforcement implication:** Compute governance that relies solely on data-center-scale thresholds will miss distributed aggregation. Effective monitoring requires either hardware-level reporting (on-chip telemetry) that flags coordinated use patterns, or network-level monitoring that detects training-scale bandwidth. Both require active cooperation from chip manufacturers and network operators.

---

### 3. Covert State Supercomputers (National-Security Carve-Outs)

**Mechanism:** State parties hide ASI development inside classified military or national-security programs, invoking sovereignty to resist or limit inspections. Large secret state-run AI facilities may not exist today, but as governments recognize the geopolitical implications of ASI, investment in classified compute infrastructure will follow. National-security carve-outs — standard features of arms control treaties — create structural blind spots.

**Historical analogues:** The Soviet bioweapons program (Biopreparat) persisted for decades inside the Biological Weapons Convention; Iraq's nuclear program was concealed from IAEA inspections through 1991. Intelligence-gathering failures are the norm, not the exception, in arms control.

**Why it is hard to close:** No treaty can mandate uninhibited access to classified state facilities. Challenge inspections under chemical-weapons precedent are possible in principle but slow, politically costly, and subject to obstruction. Intelligence gathering, whistleblower programs, and remote sensing (thermal/satellite signatures) are partial compensations, not substitutes for access.

**Enforcement implication:** An enforcement agency must plan for incomplete access. This means investing heavily in national technical means (remote sensing, financial intelligence, customs analysis, whistleblower incentives) and maintaining intelligence-sharing with partner states. Verification confidence will always be lower for state actors than for private ones.

---

### 4. Offshore Proxy Data Centers (Sovereignty Laundering)

**Mechanism:** A regulated actor partners with a middle-income or friendly nation to build modular, distributed data centers disguised as other services (5G edge computing nodes, academic research clusters, commercial cloud infrastructure). The host nation invokes sovereignty to block inspections, while the regulated actor retains operational control. The data centers are structured to stay below individual licensing thresholds while aggregating to dangerous capacity.

**Why it is hard to close:** "Infrastructure loans" and technical assistance are legitimate geopolitical tools. The line between a genuine commercial data center and a sovereignty-laundered compute facility is difficult to draw without intrusive on-site inspection. Diplomatic friction with host nations creates political costs for inspections even where legal authority exists.

**Enforcement implication:** Effective monitoring requires both chip-tracking at the hardware level (location reporting built into the chip) and independent intelligence on host-nation compute buildouts. Financial intelligence — monitoring large infrastructure investment flows — is an important supplementary signal.

---

## Likelihood Assessment

The author does not provide explicit probability estimates for each failure mode. Based on the framing:

- **Regulatory havens** are presented as the most structurally robust failure mode — they require only a single willing jurisdiction, and the incentive structure for AI-haven status is clear. This is analogous to the most persistent nonproliferation challenge (rogue-state programs).
- **Distributed GPU swarms** are presented as increasingly plausible given the rapid advancement of federated/distributed training. The 6–18 month timeline to GPT-4-scale capacity is the most specific quantitative claim in the analysis.
- **Covert state supercomputers** are lower probability in the near term (no large secret state AI facilities likely exist now) but higher risk over a 20-year moratorium horizon as geopolitical stakes rise.
- **Offshore proxy data centers** are presented as a sophisticated but resource-intensive technique, most plausible for state actors or large private actors with geopolitical connections.

All four are characterized as "credible, historically grounded routes" — not theoretical edge cases.

---

## Proposed Mitigations

The paper does not offer a detailed mitigation architecture, but identifies the following directions:

1. **Build technical verification into compute hardware.** On-chip telemetry and reporting (chip-based reporting as in Wasil et al. 2024 / CNAS secure-governable-chips work) could detect unauthorized training runs at the hardware level, closing the distributed swarm and proxy data center loopholes.

2. **Update oversight rules before they become obsolete.** Algorithmic progress reduces the compute threshold for dangerous capabilities over time. A moratorium pegged to a fixed FLOP threshold degrades as efficiency improvements make the same capability achievable on less compute. Governance rules need to track capability rather than raw compute.

3. **Back regulations with human intelligence and economic incentives.** Intelligence gathering, interviews with researchers, and whistleblower programs (with financial and legal protections) are necessary complements to technical verification. Economic incentives — making cheating costly through sanctions, exclusion from scientific cooperation, or asset freezes — reduce the attractiveness of non-compliance.

4. **Design governance systems that assume partial compliance.** The enforcement architecture should not assume universal good-faith participation. It should be designed for a world of fragmented enforcement, adaptive adversaries, and incomplete intelligence — building in redundant detection layers and escalating response options.

5. **Near-universal participation or credible pressure on non-signatories.** The regulatory-haven problem requires either near-universal treaty membership or a credible mechanism to impose costs on non-signatories (e.g., sanctions, technology denial, diplomatic isolation).

---

## Relation to Enforcement Agency Design

The paper's implications for an enforcement agency (such as the ISIA modeled in "The Pause"):

- **Intelligence capacity is foundational.** An agency that relies primarily on declared compliance will be blind to the three non-haven failure modes (distributed swarms, covert state facilities, proxy data centers). Active intelligence gathering — including human intelligence, financial surveillance, and technical monitoring — is not optional.

- **The agency needs authority over hardware, not just facilities.** Effective enforcement requires reaching down to the chip level (mandatory on-chip reporting) and up to the geopolitical level (engaging host nations of proxy data centers). Data-center inspections alone are insufficient.

- **Leverage over non-signatories matters as much as compliance from signatories.** An agency that can only act inside the treaty regime has limited reach. It needs tools to impose costs on AI-haven jurisdictions — which requires backing from major economic powers and control over critical technology supply chains (chips, cloud infrastructure).

- **Adaptive governance is required.** A static ruleset will be outrun by algorithmic progress. The agency needs authority to adjust thresholds and monitoring requirements in response to capability changes, with fast-track procedures for urgent threshold updates (as proposed in the Scher et al. 2024 framework: 30-day provisional adjustments pending council approval).

- **The distributed swarm problem implies monitoring the network, not just the data center.** Detection of coordinated distributed training runs requires either network-level monitoring (bandwidth, coordination patterns) or hardware-level telemetry. This is a technical capability the agency needs to develop before the moratorium is tested.

---

## Related Work

- **"A Narrow Path" (ControlAI / narrowpath.co):** The proposal being red-teamed. Phase 0 proposes compute thresholds, licensing, and domestic institution-building; Phase 1 proposes international treaty with three-body governance structure.
- **Scher et al. (2024) / arxiv:2511.10783:** MIRI technical governance team's parallel proposal for a U.S.-China coalition with FLOP-based restrictions, chip tracking, and a Director-General-led Coalition Technical Body.
- **Wasil et al. (2024) / wasil-verification-methods-ai-agreements-2024.md:** Systematic analysis of 10 verification methods; closely related to mitigations 1 and 3 above.
- **CNAS secure-governable-chips-2024.md:** Technical proposal for on-chip governance mechanisms; directly relevant to the distributed swarm and proxy data center failure modes.
- **Apart Research sprint outputs:** Multiple teams red-teamed "A Narrow Path" at the June 2025 sprint, including "Four Paths to Failure: Red Teaming ASI Governance" and "Red Teaming A Narrow Path: Treaty Enforcement in China."
