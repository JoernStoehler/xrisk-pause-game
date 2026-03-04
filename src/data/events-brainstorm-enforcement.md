# Events Brainstorm — Enforcement & Compute Control

Events focused on the nuts-and-bolts of enforcing the compute ban: chip lifecycle, raid logistics, domestic enforcement friction, evolving evasion techniques, monitoring edge cases, decommissioning problems, and detection via power/network signatures.

These events are designed to teach the player that **enforcement is a permanent, evolving, structurally hard problem** — not a one-time setup. The agency can never declare victory and relax (C-14). The attack surface must be shrunk through chokepoints (C-9), not expanded through omniscient monitoring.

---

#### #enf--inference-chip-loophole
**Type:** report
**Entities:** chip-fab, isia-enforcement, isia-safety-team
**Topics:** #chip-monitoring, #chip-supply, #algorithmic-progress
**Situation:** Samsung's latest chip generation is optimized for inference, not training — different thermal profile, different interconnect architecture, different power draw patterns. ISIA's monitoring infrastructure was designed to detect training clusters: high inter-chip bandwidth, sustained FLOP bursts, specific power signatures. The chief scientist's team has been warning for months that algorithmic advances now allow training-equivalent workloads to be decomposed into inference-shaped operations. 800 of these new inference chips, running a distributed training protocol disguised as batch inference, could execute a training run the monitoring system would classify as a permitted commercial deployment. Samsung argues these chips serve a legitimate $40B inference market and shouldn't be controlled. The ISIA safety team says the distinction between "training chip" and "inference chip" is becoming meaningless — all that matters is FLOP throughput, and these chips have it.
**Options:**
- Left: Expand monitoring thresholds to cover inference chips — massively increases the number of tracked devices (from ~50,000 to ~2 million), stretching enforcement thin and triggering industry backlash
- Right: Maintain current training-focused monitoring — accept the emerging blind spot, rely on other detection layers (power draw, network traffic) to catch misuse
- Down (greyed out if int low): Mandate firmware-level reporting on all Samsung inference chips — technically elegant but requires Samsung's cooperation
**Teaches:** C-9 (shrinking attack surface vs. expanding monitoring surface — this is a case where the monitoring surface wants to expand), C-10 (chip lifecycle monitoring breaks when chip categories blur), B-6a/b (algorithmic progress erodes enforcement assumptions)
**Refs:** → #mon--consumer-hw-threshold (same underlying problem: monitoring designed for one compute form factor fails as hardware diversifies)
**Bars:** int ↓ if blind spot accepted, pol ↓ if industry fights expanded monitoring

---

#### #enf--billionaire-island-raid
**Type:** crisis
**Entities:** isia-enforcement, rogue-billionaire, interpol, natl-enforcement
**Topics:** #raid, #jurisdiction, #smuggling, #training-run
**Situation:** Intelligence points to a former tech CEO running an unauthorized compute cluster on a private island in international waters off the coast of Tonga. Satellite imagery shows a facility with heat output consistent with ~3,000 chips. The island was purchased through shell companies registered in the Cayman Islands. ISIA has no jurisdiction in international waters. Tonga's coast guard has three boats. The billionaire's legal team has already filed preemptive injunctions in five countries arguing that international waters are outside the treaty's scope. The enforcement team presents three options, each with a different legal, political, and operational profile. If ISIA waits for the legal process, the training run may complete before a ruling. If ISIA acts unilaterally, the precedent terrifies every nation that values sovereignty.
**Options:**
- Left: Unilateral raid — send ISIA's own team, seize the facility, face legal and political fallout later (demonstrates resolve but sets a dangerous sovereignty precedent)
- Right: Diplomatic and legal route — petition the International Court, coordinate with Tonga, build an airtight case (slower, by-the-book, but the training run may finish first)
- Down (greyed out if pol low): Convince a treaty-member navy to blockade the island while legal proceedings happen — buys time but requires calling in a favor
**Teaches:** C-8 (fundamental asymmetry: the agency must succeed every time, the attacker only once — time pressure favors the violator), C-14 (cat-and-mouse: creative evasion requires creative enforcement), the jurisdiction problem is not a bug — it's a permanent feature
**Refs:** → #mon--near-miss (if raid finds active training), → #treaty--diplo-incident (sovereignty fallout)
**Bars:** pol ↓↓ if unilateral action, int ↓ if reveals methods, pol ↑ if legal route succeeds (but only eventually)

---

#### #enf--cops-refuse-gpu-search
**Type:** crisis
**Entities:** natl-enforcement, isia-enforcement, public-cluster-liberty
**Topics:** #raid, #jurisdiction, #chip-monitoring, #surveillance
**Situation:** ISIA has identified 14 addresses in the American Midwest where anomalous power draw patterns suggest unauthorized compute clusters hidden in residential basements. The enforcement protocol requires coordination with local law enforcement to execute search warrants. Problem: the county sheriff's department has refused. The sheriff, elected on a civil-liberties platform, tells media: "I'm not sending my deputies to kick in doors over graphics cards. This is federal overreach." Three other rural sheriffs in the region publicly back him. Local opinion polls show 68% support for the sheriff's position. The FBI can override local enforcement, but that creates a Waco-style optics problem. Meanwhile, the 14 addresses represent enough compute — if networked — for a training run at ~1.5x the current enforcement threshold.
**Options:**
- Left: Escalate to FBI — federal agents execute the warrants over local objections (effective but creates a political firestorm, feeds the "surveillance state" narrative)
- Right: Negotiate with the sheriff — offer ISIA technical observers who accompany deputies, let locals lead (slower, gives addresses time to move equipment, but preserves relationship)
- Down (greyed out if pol low): Get a federal court order explicitly directing the sheriff to comply — legally airtight but takes weeks
**Teaches:** C-16 (different enforcement types have different political costs), E-29 (opinion cluster "this is really a surveillance state scheme" — the sheriff IS this opinion cluster, and he's not wrong that it looks bad), the gap between international treaty authority and domestic enforcement reality
**Refs:** → #inst--zealous-officer (parallel domestic enforcement friction), → #mon--surveillance-expand (surveillance expansion triggers exactly this backlash)
**Bars:** pol ↓ if FBI escalation, int ↓ if delay lets clusters relocate

---

#### #enf--decommission-graveyard
**Type:** report
**Entities:** isia-enforcement, gov-treaty-minor, chip-fab
**Topics:** #chip-monitoring, #chip-supply, #black-market
**Situation:** Annual chip lifecycle audit reveals a discrepancy: 23,000 H100-equivalent chips were declared "decommissioned and destroyed" over the past 18 months across twelve treaty nations. ISIA's verification protocol requires photographic evidence of physical destruction (crushed wafers, smelted casings). Internal review finds that 40% of the destruction certificates were filed by three contracted disposal firms — and one of those firms went bankrupt six months ago. Its warehouse in Romania contains no destroyed chips. Either 9,200 chips were destroyed before storage (no evidence), diverted to the black market, or are sitting in an unmonitored location. The chip graveyard problem: destroying advanced hardware feels wasteful, especially when nations are paying billions for new chips. Every chip scheduled for destruction is a temptation.
**Options:**
- Left: Emergency audit of all disposal contractors — recall and verify every destruction certificate from the past two years (massive enforcement effort, may find nothing, signals distrust to treaty allies)
- Right: Tighten future protocols — mandate ISIA-witnessed destruction, accept that the 9,200 missing chips are a sunk intelligence gap (forward-looking, practical, but those chips are somewhere)
- Down (greyed out if int low): Use black market price signals to determine if a new supply of chips has entered circulation — if prices dropped recently, the chips were diverted
**Teaches:** C-10 (monitoring the FULL lifecycle including retirement — the unglamorous but critical end of the chain), C-14 (cat-and-mouse extends to every phase of the chip lifecycle), the human factor: people tasked with destroying valuable things often don't
**Refs:** → #mon--black-market-signal (black market as detection layer), → #mon--smuggle-ring (where diverted chips might end up)
**Bars:** int ↓ if chips unaccounted for, pol ↓ if audit angers allies

---

#### #enf--power-grid-anomaly
**Type:** report
**Entities:** isia-intel, isia-enforcement, natl-enforcement
**Topics:** #chip-monitoring, #sigint, #training-run
**Situation:** ISIA's power-grid monitoring partnership with national utilities flags an anomaly: a decommissioned aluminum smelter in northern Norway has been drawing 12 MW of power continuously for the past six weeks. The facility was sold two years ago to a holding company. Local utility records show the buyer paid for a massive electrical upgrade but listed the purpose as "cryptocurrency mining." Crypto mining at this scale is legal and common in Norway. The heat signature is ambiguous — could be ASICs mining Bitcoin or GPUs running training. The inter-chip bandwidth signature, however, is unusual for mining: the facility's internet connection was recently upgraded to 400 Gbps symmetric, which is overkill for crypto but consistent with distributed training. The Norwegian government considers this a domestic energy matter and hasn't flagged it. Your power-grid analyst says she's 70% confident this is a training operation, 30% it's legitimate mining.
**Options:**
- Left: Request a challenge inspection under the treaty — burns the power-monitoring detection method (adversaries learn you watch power grids), but gets eyes inside the facility
- Right: Continue passive monitoring — collect more data on bandwidth patterns, power fluctuations, and personnel movements before tipping your hand (slower, risks the run completing)
- Down (greyed out if int low): Cross-reference the holding company's ownership with known chip procurement records — connect the power anomaly to the chip-tracking database
**Teaches:** C-10 (power draw as a detection layer alongside chip tracking), C-14 (cat-and-mouse: disguising training as mining is a natural evasion), B-3 (compute-centric enforcement — if you can't see the chips directly, you trace the energy they consume)
**Refs:** → #mon--heat-sig-foreign (similar detection-then-dilemma pattern), → #intel--contradictory-briefs (ambiguous intelligence requiring judgment)
**Bars:** int ↓ if method burned on inspection, int ↑ if passive monitoring yields intel

---

#### #enf--network-bandwidth-trap
**Type:** crisis
**Entities:** isia-intel, isia-ai-tools, rogue-lab
**Topics:** #chip-monitoring, #sigint, #false-positive, #training-run
**Situation:** ISIA's network monitoring AI flags a cluster of facilities across Southeast Asia with coordinated high-bandwidth traffic patterns consistent with a distributed training run spread across four countries. The AI assigns 94% confidence. Enforcement mobilizes raid teams in Thailand, Vietnam, Malaysia, and Indonesia — a massive coordinated operation requiring cooperation from four national enforcement agencies, costing roughly $2M and consuming the enforcement division's capacity for two weeks. Then the network analysis team raises a concern: the traffic pattern also matches a new distributed rendering farm for a Vietnamese film studio that just signed a deal with a Thai animation company. The AI's training data didn't include cross-border creative industry compute patterns. If the raids proceed and find a film studio, the agency looks incompetent. If the raids don't proceed and it IS a training run distributed across four jurisdictions specifically to avoid single-country detection thresholds, the agency missed a sophisticated evasion.
**Options:**
- Left: Proceed with raids — better to look overzealous than to miss a real violation (burns political capital with four governments if wrong)
- Right: Delay raids, investigate the film studio explanation — request business records, check the studio's public projects, verify bandwidth needs (buys time for a real violator to scatter)
- Down (greyed out if saf high): Query the ISIA's own AI monitoring system for a second-opinion analysis using updated commercial-compute baselines
**Teaches:** C-59/61 (AI tools produce false positives that cost real resources), C-8 (asymmetry: investigation is expensive, evasion is cheap), the difficulty of distinguishing legitimate high-compute commercial activity from unauthorized training
**Refs:** → #ai--false-positive-batch (AI monitoring going wrong), → #mon--smuggle-ring (distributed evasion pattern)
**Bars:** pol ↓↓ if raids find film studio, int ↓ if delay lets real violator escape

---

#### #enf--cat-mouse-adapt
**Type:** consequence
**Entities:** isia-enforcement, smuggler, rogue-lab
**Topics:** #smuggling, #chip-monitoring, #raid, #training-run
**Situation:** After ISIA's successful raid on the chip smuggling ring last quarter (seized 2,000 chips, six arrests), the enforcement team expected a deterrence effect. Instead, intelligence shows the opposite: smuggling networks adapted within weeks. The new techniques: chips are now physically modified — serial numbers ground off, firmware reflashed with fake identifiers — before crossing borders. Shipping routes shifted from commercial freight (where ISIA has inspection agreements) to private aviation and diplomatic pouches. One network is breaking chips into individual units, shipping them separately through consumer electronics channels (disguised as gaming GPUs), and reassembling clusters at the destination. The enforcement chief reports: "Every raid teaches them more about our methods than it teaches us about theirs. We disrupted one network and created three smaller, more resilient ones." The cat-and-mouse has escalated.
**Options:**
- Left: Invest in chip-level identification — fund development of physically unclonable functions (PUFs) that survive serial-number removal, making chips trackable even when modified (expensive, 18-month R&D timeline, but addresses root cause)
- Right: Shift to network intelligence — stop chasing individual chips and focus on mapping the financial and logistics networks that move them (accepts that chip-level tracking is breaking down, pivots to a different detection layer)
**Teaches:** C-14 (cat-and-mouse is permanent — each enforcement success creates a more sophisticated adversary), C-9 (the monitoring surface keeps expanding as adversaries find new channels), the Hydra problem: disrupting smuggling networks can make the problem worse
**Refs:** → #mon--smuggle-ring (the raid that triggered this adaptation), → #mon--black-market-signal (market intelligence as alternative to physical tracking)
**Bars:** int ↓ (current methods degraded), pol ↑ if public sees enforcement action

---

#### #enf--politically-inconvenient-true-positive
**Type:** crisis
**Entities:** isia-enforcement, isia-intel, gov-treaty-major
**Topics:** #chip-monitoring, #training-run, #challenge-inspection, #raid
**Situation:** ISIA's monitoring system detects an unauthorized training run inside a treaty nation — not a minor ally but the United States' largest military AI research facility. The run is at 4x the permitted threshold. The facility is operated by DARPA under a classified defense program. The American ambassador, when quietly informed, says: "This is a national security program. We will not permit inspection. If you go public, we will withdraw from the treaty." Intelligence confirms the run is real and the threat is real. The American program is likely training a military planning AI, not pursuing ASI — but the compute level could produce dangerous capabilities as a side effect. The ISIA's credibility depends on enforcing the rules against everyone, including its most powerful member. But losing the United States from the treaty would collapse enforcement globally.
**Options:**
- Left: Enforce the treaty — demand inspection, escalate to the ISIA Council, accept that the US may withdraw (principled, potentially suicidal for the agency)
- Right: Negotiate quietly — offer the US a classified exemption or reclassification of the program, keep it off the public record (pragmatic, but if it leaks, the agency is finished — every other violator will demand the same treatment)
- Down (greyed out if pol low): Propose a new treaty category for verified military AI programs below ASI risk — formalize the exemption so it applies to all nations equally
**Teaches:** C-8 (asymmetry applies even to allies — a powerful nation can simply refuse), E-37 (the agency exists at the discretion of politicians), the difference between de jure authority and de facto power — the treaty says ISIA can inspect anyone, but political reality says otherwise
**Refs:** → #natl-intel--jurisdiction-clash (jurisdiction friction with allies), → #treaty--five-year-review (exemptions weaken future enforcement)
**Bars:** pol ↓↓ if US withdraws, int ↓ if classified exemption hides compute from monitoring

---

#### #enf--old-chips-new-tricks
**Type:** report
**Entities:** isia-enforcement, isia-safety-team, researcher-capability
**Topics:** #chip-monitoring, #algorithmic-progress, #threshold-drop
**Situation:** The safety team presents a disturbing analysis. Five years of algorithmic progress (now at ~4x 2022 efficiency) means that older-generation chips — A100s, V100s, even some consumer RTX 4090s — which were below the monitoring threshold when the treaty was signed, can now collectively produce training runs that would have required monitored H100 clusters at the start of the pause. The problem: these older chips were explicitly excluded from consolidation in the original treaty because they weren't powerful enough to matter. There are an estimated 3.8 million of these chips in circulation — in universities, gaming PCs, small businesses, render farms. They were never tracked. They were never registered. Many have changed hands multiple times on the secondhand market. Bringing them under monitoring now would require retroactively expanding the treaty's scope to cover hardware that millions of ordinary people own. The enforcement chief calls it "trying to register every kitchen knife because a chef figured out how to perform surgery with one."
**Options:**
- Left: Propose treaty amendment to bring legacy chips under monitoring — technically necessary, politically explosive, practically impossible to enforce at this scale
- Right: Accept the gap — focus enforcement on preventing the networking of legacy chips into clusters (monitor for coordination signatures rather than individual chips)
- Down (greyed out if saf high): Fast-track the safety team's proposal for compute-agnostic monitoring — detect training runs by their mathematical properties rather than the hardware running them
**Teaches:** B-5/6 (the lethal threshold shrinks, making previously safe hardware dangerous), C-9 (attack surface expands despite best efforts — the monitoring surface problem is structural), C-10 (lifecycle monitoring fails when the definition of "controlled hardware" shifts underneath you)
**Refs:** → #mon--consumer-hw-threshold (the earlier warning about consumer hardware), → #era--threshold-crisis (the endgame version of this problem)
**Bars:** int ↓↓ (massive new blind spot), pol ↓ if treaty amendment attempted

---

#### #enf--datacenter-inside-datacenter
**Type:** crisis
**Entities:** rogue-lab, isia-enforcement, ai-company
**Topics:** #training-run, #chip-monitoring, #raid
**Situation:** A whistleblower at a major cloud provider reports that a customer has been renting "inference capacity" at a legitimate, ISIA-monitored datacenter — but the workloads are not inference. The customer's VMs are running a distributed training framework hidden inside what looks like thousands of independent inference requests. Each individual request is small and permitted. But the whistleblower discovered the requests are coordinated: they share gradients through an encrypted side channel routed through a separate network. In aggregate, they constitute a training run at roughly 2x the enforcement threshold. The datacenter operator had no idea — their monitoring only checks individual job sizes, not cross-job coordination. The violator is exploiting the gap between "chip-level monitoring" (which sees individual permitted jobs) and "cluster-level monitoring" (which would catch the coordination, but doesn't exist for multi-tenant cloud environments). The cloud provider's CEO asks for discretion: "If this becomes public, every customer will assume we're spying on their workloads. Our business is finished."
**Options:**
- Left: Raid the customer's infrastructure — seize the VMs, arrest the operators, make it public as a deterrent (effective, but destroys the cloud provider's business and chills legitimate cloud computing)
- Right: Work with the cloud provider quietly — shut down the violator's accounts, develop new cross-job monitoring protocols, keep it out of the press (protects the industry but denies the agency a public enforcement win)
- Down (greyed out if int low): Analyze the encrypted side channel — if you can crack the gradient-sharing protocol, you gain a detection method that works across all cloud providers
**Teaches:** C-9 (the attack surface includes legitimate infrastructure — adversaries hide inside the thing you're protecting), C-14 (evasion techniques exploit the gap between what monitoring checks and what monitoring misses), B-3 (the compute-centric model requires monitoring compute USE, not just compute EXISTENCE)
**Refs:** → #enf--inference-chip-loophole (similar theme: monitoring assumptions don't match reality), → #mon--near-miss (if the training run was close to producing something dangerous)
**Bars:** int ↑ if side channel analyzed, pol ↓ if public raid harms industry

---

#### #enf--custom-asic-foundry
**Type:** report
**Entities:** isia-intel, chip-fab, rogue-state
**Topics:** #chip-supply, #chokepoint, #chip-monitoring
**Situation:** Signals intelligence reveals that a non-treaty nation has been developing its own ASIC (application-specific integrated circuit) optimized for AI training — fabricated at a domestic foundry using older lithography equipment (not EUV, so outside ASML's chokepoint). The chips are individually much weaker than monitored H100s — roughly 1/50th the performance per chip. But the nation has been manufacturing them for two years. Estimated production: 200,000 units. At 4x algorithmic efficiency (current level), 50,000 of these chips networked together would match the compute of 1,000 H100s — well above the training threshold. The enforcement framework assumed that advanced AI chips require advanced fabrication (EUV lithography, TSMC-level precision). This assumption was correct when the treaty was signed. Algorithmic progress has made it wrong. The chokepoint the entire enforcement architecture relies on — the scarcity of advanced chip fabrication — is eroding from below.
**Options:**
- Left: Expand the treaty to cover any chip above a FLOP-throughput threshold regardless of fabrication method — requires renegotiating with all treaty nations and defining what counts (the toaster problem: at what point is a chip "AI-capable"?)
- Right: Focus on the specific nation — diplomatic pressure, sanctions, intelligence operations to disrupt their ASIC program (addresses the symptom, not the structural vulnerability)
- Down (greyed out if pol low): Propose a treaty amendment covering lithography equipment at ALL nodes, not just EUV — bring older fabs under the regime before more nations follow this path
**Teaches:** C-11 (supply chain chokepoints are the foundation of enforcement — but foundations can crack), C-9 (structural advantage erodes as adversaries route around chokepoints), B-5/6 (algorithmic progress doesn't just shrink the threshold — it undermines the physical basis of enforcement)
**Refs:** → #mon--asml-joint-venture (chokepoint erosion from the corporate side), → #intl--covert-program (the nation's broader strategy)
**Bars:** int ↓↓ (massive new threat vector), pol ↓ if treaty renegotiation fails

---

#### #enf--disposal-officer-bribery
**Type:** crisis
**Entities:** isia-enforcement, isia-internal-sec, smuggler
**Topics:** #chip-monitoring, #chip-supply, #black-market
**Situation:** Internal security flags a pattern: one of ISIA's own chip disposal officers — responsible for witnessing and certifying the destruction of decommissioned chips — has been living beyond his means. New car, renovated apartment, expensive vacations. His destruction certifications show nothing unusual, but a forensic review of his routes reveals that on 11 occasions over the past year, the GPS tracker on his vehicle was disabled for 2-4 hours during scheduled destruction runs. During those gaps, the chips he was supposed to witness being destroyed could have been diverted. Estimated volume if all gaps involved diversion: ~1,400 chips. The disposal officer has 14 years of service and a clean record. He processed the chips alone because ISIA's budget was cut and the two-person verification protocol was suspended to save money. The budget cut was your decision, six months ago, when funding was tight.
**Options:**
- Left: Arrest and prosecute — full internal investigation, public accountability, restore two-person protocol (sends a message, but exposing internal corruption damages the agency's credibility)
- Right: Quiet removal — reassign the officer, restore protocols, investigate the missing chips without making it public (protects the agency's image, but if it leaks later the cover-up is worse than the crime)
**Teaches:** C-10 (chip lifecycle monitoring requires human integrity at every link — the disposal phase is vulnerable because it's unglamorous and underfunded), F-39 (standard institutional pathologies: corruption inside the agency itself), the budget-security tradeoff: every cost-cutting measure creates a new vulnerability
**Refs:** → #enf--decommission-graveyard (the systemic version of this problem), → #inst--mole (internal corruption pattern)
**Bars:** pol ↓ if corruption goes public, int ↓ (1,400 chips unaccounted for)
