# Literature Gap Assessment

Generated 2026-03-12, updated 2026-03-12 after downloading 6 additional papers (SL5/pause proposals, research management, deep uncertainty).

## Summary

The literature collection is now **strong across most dimensions**. Previous gaps in enforcement mechanics, institutional dynamics, and long-horizon opinion change have been substantially filled. The remaining true gaps are inherently novel (no one has written about running ISIA) and will be grounded by Jörn's domain expertise rather than literature searches.

---

## Coverage by Domain Model Dimension

### WELL-COVERED (marginal search value < marginal cost)

| Dimension | Files | Assessment |
|-----------|-------|------------|
| **D1: ISIA Mandate & Treaty** | ~12 | IABIED treaty draft, EU AI Act, SB1047, executive orders, RSPs, **+ ControlAI "A Narrow Path" (20-year moratorium with IASC/GUARD/IAT institutions), MIRI tech governance treaty (US-China executive council + CTB), moratorium failure modes (4 evasion vectors)**. Now the strongest dimension — multiple detailed treaty designs to draw from. |
| **D5: Safety Knowledge** | ~15 | Alignment faking, sleeper agents, reward hacking, corrigibility, MIRI agenda, scheming. Deep coverage of why alignment is hard. |
| **D9: AI Behavior** | ~8 | Apollo scheming, Anthropic alignment faking/reward hacking, METR evals. Good coverage of emergent misbehavior. |
| **D4: Public Sentiment (snapshots)** | ~10 | Pew, Gallup, Brookings, Carnegie, FLI, Public Citizen surveys. Excellent cross-section of current opinion. But see gap below for *dynamics*. |
| **Geopolitics (analogical)** | ~15 | IAEA Iraq, Khan network, sanctions evasion, chip smuggling, regulatory capture, lobbying. Strong analog base for enforcement scenarios. |
| **X-risk arguments** | ~10 | Yudkowsky, Cotra, Karnofsky, Gwern, IABIED book + resources. Comprehensive coverage of the core case. |

**Recommendation:** No further searches needed for these areas. Diminishing returns.

### ADEQUATELY COVERED → NOW WELL-COVERED

| Dimension | Files | Assessment |
|-----------|-------|------------|
| **D2: Enforcement Resources** | ~8 | Wasil verification methods, RAND model weights, CNAS chips, **+ IST SL5 Standard (5 security domains, nation-state defense requirements), ControlAI defense-in-depth (6 layers)**. Now covers both *what* and *how*. |
| **D3: Safety Resources** | ~5 | Safety knowledge papers **+ Azoulay ARPA model (program director discretion, right-tail funding, milestone management), Marchau deep uncertainty (DMDU frameworks, signposts/triggers, adaptation tipping points)**. Research management under Knightian uncertainty is now well-grounded. |
| **D8: Cat-and-Mouse** | ~6 | Sanctions evasion, Khan network, **+ moratorium failure modes (regulatory havens, distributed GPU swarms, covert state supercomputers, offshore proxies), RAND game theory**. Now has both analogs and formal adversarial analysis. |

### GAPS (high search value — new this session)

| Dimension | Gap | What we need | Papers found/downloaded |
|-----------|-----|-------------|----------------------|
| **D10: Compute Model** | Compute governance mechanics | How compute thresholds work, cloud provider monitoring, chip lifecycle tracking, detection gaps | **6 papers downloaded:** Sastry & Heim 2024, Heim cloud governance 2024, Heim thresholds 2024, CNAS secure chips 2024, Wasil verification 2024, RAND game theory 2025 |
| **D6: Adjacent Knowledge (scaling)** | Algorithmic progress rates | Quantitative data on efficiency gains, distributed training feasibility, threshold erosion timelines | **2 papers downloaded:** DiLoCo 2024, Epoch algorithmic progress 2024 (pending) |
| **D4: Public Sentiment (dynamics)** | Long-horizon opinion change | Issue-attention cycles, risk amplification/attenuation, psychic numbing, climate polarization as analog | **Downloads pending:** Downs 1972, Kasperson 1988, Slovic 2007, McCright & Dunlap 2011 |
| **Institutional dynamics** | IO authority/pathology | How international organizations gain/lose authority, bureaucratic pathologies, treaty effectiveness | **3 papers downloaded:** Hoffman treaty effectiveness 2022, Pollack PA delegation 2007 (pending), Barnett & Finnemore IO pathologies 1999 (pending) |

---

## What Each Gap Means for the Game

### 1. Compute Governance (D10) — NOW LARGELY FILLED

This was the most critical gap. ISIA's core function is monitoring compute — without grounding in how compute governance actually works, enforcement cards would be speculative. The 6 new papers provide:

- **Concrete mechanisms:** Cloud provider KYC, chip export controls, on-site inspections, hardware-based tracking (Sastry & Heim)
- **Threshold design:** Why 1e25 vs 1e26 FLOP, what thresholds can/can't detect (Heim & Koessler)
- **Evasion strategies:** Game-theoretic analysis of what adversaries can hide (RAND)
- **Verification toolkit:** 10 methods mapped to specific evasion techniques (Wasil et al.)
- **Cloud as chokepoint:** How cloud providers become enforcement intermediaries (Heim et al.)
- **Hardware security:** Physical chip tracking, secure enclaves, supply chain controls (CNAS)

**Status:** Well-grounded now. Specific card scenarios can reference these papers directly.

### 2. Algorithmic Progress / Scaling (D6) — PARTIALLY FILLED

The game needs quantitative anchors for "the clock is ticking" — how fast does the compute needed for ASI shrink? Key findings from new + existing literature:

- Algorithmic efficiency doubles every ~8 months (Epoch AI)
- Distributed training demonstrated across 3 continents (DiLoCo)
- Frontier training compute growing ~4-5x/year (AISI trends report, already had)
- EU threshold 1e25 FLOP, US 1e26 FLOP — but these erode (Heim thresholds)

**Remaining gap:** no formal model of threshold erosion rates combining algorithmic + hardware progress. INTELLECT-1 is already available in `literature/intellect1-decentralized-training-2024.md` and summarized in `literature/compute-requirements-trends.md`; future work may need to derive a combined erosion model from Epoch/compute-governance/distributed-training sources.

### 3. Public Opinion Dynamics (D4) — FILLED (prior session)

- **Social amplification of risk** (Kasperson 1988): 7 amplification stations, ripple effects — DONE
- **Psychic numbing** (Slovic 2007): "the more who die, the less we care" — DONE
- **Climate polarization** (McCright & Dunlap 2011): polarization increases despite scientific consensus — DONE
- **Issue-attention cycle** (Downs 1972): UNAVAILABLE (content filter blocks download; 1972 methodology likely superseded by Kasperson framework anyway)

### 4. Institutional Dynamics — FILLED

- **Treaty effectiveness** (Hoffman 2022): most treaties fail to achieve intended effects — DONE
- **IO pathologies** (Barnett & Finnemore 1999): 5 pathologies of international organizations — DONE
- **Principal-agent delegation** (Pollack 2007): how member states control IOs — DONE

### 5. ASI Moratorium Design (NEW) — FILLED

This gap wasn't identified in the original audit because no published moratorium proposals existed when we started. Now we have three:

- **"A Narrow Path"** (ControlAI 2025): 20-year moratorium, IASC/GUARD/IAT institutional design, 6-layer defense-in-depth, two-tier licensing, hardware tracking — the most detailed published proposal
- **MIRI Tech Governance treaty** (Scher et al. 2025): US-China executive council, Coalition Technical Body, 10^24/10^22 FLOP thresholds, chip cluster tracking, enforcement ladder
- **"Four Ways a Moratorium Could Fail"** (Curtis 2025): Red-team of the above — regulatory havens, GPU swarms, covert state programs, offshore proxies

These three papers together provide the strongest grounding for ISIA's institutional design and the specific failure modes the player must navigate.

### 6. Research Management Under Deep Uncertainty (NEW) — FILLED

- **Azoulay ARPA model** (2019): Program director discretion, right-tail funding, milestone management, failure modes of the DARPA approach
- **Marchau deep uncertainty** (2019): DMDU frameworks (RDM, DAP, DAPP), signposts and triggers, adaptation tipping points — the theoretical foundation for managing alignment research where timelines and costs are genuinely unknowable

### 7. Facility Security (NEW) — FILLED

- **IST SL5 Standard** (2025): 5 security domains (supply chain, network, machine, physical, personnel), specific requirements for defending against nation-state adversaries — what ISIA-supervised facilities would actually look like

---

## Remaining True Gaps (no good literature exists)

These are areas where expert literature is thin or nonexistent, and we'll rely on Jörn's domain expertise:

1. **ISIA-specific enforcement operations.** No one has written about how a hypothetical ASI pause agency would actually run day-to-day. We now have strong analogs (IAEA, "A Narrow Path" IASC, MIRI CTB) and detailed compute governance mechanics, but the specific ISIA synthesis is novel.

2. **AI-assisted enforcement paradox.** The agency must use AI tools that are themselves potentially dangerous. Discussed in IABIED but not formalized. "A Narrow Path" partially addresses this via GUARD (the only lab permitted to work at the frontier).

3. **30-year political economy of a technology ban.** No technology has been successfully banned at this scale for this duration. The closest analogs (nuclear nonproliferation, CFC ban) are imperfect. The moratorium failure modes paper identifies specific political failure vectors but doesn't model 30-year dynamics.

Note: "Alignment research management" was previously listed here but is now partially grounded by Azoulay (ARPA model) + Marchau (DMDU frameworks) + Jörn's domain expertise on cost uncertainty, positive/negative results, and containment.

---

## Download Status

| Paper | Slug | Status |
|-------|------|--------|
| Sastry & Heim, Computing Power and AI Governance | sastry-heim-compute-governance-2024 | DONE |
| Heim, Governing Through the Cloud | heim-governing-through-cloud-2024 | DONE |
| Heim & Koessler, Training Compute Thresholds | heim-training-compute-thresholds-2024 | DONE |
| CNAS, Secure Governable Chips | cnas-secure-governable-chips-2024 | DONE |
| Wasil et al., Verification Methods | wasil-verification-methods-ai-agreements-2024 | DONE |
| RAND, Compute Governance Game Theory | rand-compute-governance-game-theory-2025 | DONE |
| Hoffman et al., Treaties Failed Intended Effects | hoffman-treaties-failed-intended-effects-2022 | DONE |
| DiLoCo, Distributed Training | diloco-distributed-training-2024 | DONE |
| Epoch AI, Algorithmic Progress in LMs | epoch-algorithmic-progress-lm-2024 | DONE (existed already) |
| Kasperson et al., Social Amplification of Risk | kasperson-social-amplification-risk-1988 | DONE |
| Slovic, Psychic Numbing | slovic-psychic-numbing-2007 | DONE (encrypted) |
| McCright & Dunlap, Climate Polarization | mccright-dunlap-climate-polarization-2011 | DONE (encrypted) |
| Barnett & Finnemore, IO Pathologies | barnett-finnemore-io-pathologies-1999 | DONE (encrypted) |
| Pollack, PA and International Delegation | pollack-principal-agent-international-delegation-2007 | DONE |
| INTELLECT-1, Decentralized Training | intellect1-decentralized-training-2024 | DONE |
| ControlAI, A Narrow Path | controlai-narrow-path-2025 | DONE |
| Curtis, Four Ways a Moratorium Could Fail | controlai-moratorium-failure-modes-2025 | DONE |
| MIRI Tech Governance Treaty | miri-tech-governance-treaty-2025 | DONE |
| IST SL5 Standard | ist-sl5-standard-2025 | DONE |
| Marchau et al., Decision Making under Deep Uncertainty | marchau-deep-uncertainty-2019 | DONE |
| Azoulay et al., ARPA Model | azoulay-arpa-model-2019 | DONE |
| Downs, Issue-Attention Cycle | — | UNAVAILABLE (content filter) |
