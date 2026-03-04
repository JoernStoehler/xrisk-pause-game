# Events Brainstorm — Economic Dynamics, Corporate Actors, and the Pause

Developer-facing document. Event concepts for the economic/corporate cluster.
Follows conventions from `events-draft-v2.md`.

**New entities used** (not yet in entity inventory):
- **corporate-compliant** — Companies that genuinely comply with the pause. They restructured around sub-threshold AI, invested in compliance infrastructure, and have a financial interest in the pause continuing (compliance is their competitive moat). They are NOT the agency's friends — they want the pause enforced against competitors, not against themselves.
- **cloud-provider** — AWS, Azure, GCP. They host permitted AI workloads and are the primary interface between compute and customers. They have monitoring obligations under the treaty but also massive economic incentives to maximize compute usage right up to the legal line.

---

## Events

#### #economic--cloud-provider-loophole
**Type:** crisis
**Entities:** cloud-provider, isia-enforcement, corporate-lobby
**Topics:** #training-run, #chip-monitoring, #economic-pressure
**Situation:** AWS's legal team has found a loophole: by distributing a single training run across 14 availability zones in 9 countries, no single facility ever exceeds the monitored threshold. The aggregate run is well above the threshold — but the treaty language specifies per-facility limits, not per-customer aggregates. AWS isn't hiding anything; they published a whitepaper explaining the architecture. Twelve companies are already using the technique. Microsoft and Google are building equivalent offerings.

The agency's lawyers confirm the loophole is real. Closing it requires a treaty amendment (consensus of all parties, 18-month minimum process). In the meantime, the aggregate compute being deployed this way already exceeds what the agency's monitoring was designed to track. The cloud providers aren't breaking the law — they're making enforcement obsolete through creative compliance.

The deeper problem: cloud providers have monitoring obligations, but their business model depends on maximizing compute usage. Every dollar of compute they DON'T sell is revenue they lose. The loophole isn't an accident — it's the natural result of smart lawyers working for companies whose incentives are permanently opposed to the spirit of the treaty.
**Options:**
- Left: Emergency executive order — declare aggregate training a treaty violation pending amendment (legally shaky, cloud providers will challenge in court, but stops the bleeding)
- Right: Fast-track amendment process — work within the system (18 months of unchecked distributed training while you wait)
- Down (greyed out if pol low): Negotiate directly with the three major cloud providers — voluntary moratorium in exchange for favorable terms in the coming amendment
**Teaches:** E-51 (corporations find structural workarounds, not just direct opposition), E-34 (economic optimization pushes compute usage toward dangerous territory), C-9 (monitoring designed for one architecture fails when architecture changes). Treaty language written for 2025 datacenter architecture doesn't survive contact with 2030 cloud engineering. The letter of the law and the spirit of the law diverge whenever smart people have financial incentives to make them diverge.
**Refs:** → #political--econ-boom-request (similar pressure from above), → #monitoring--consumer-hw-threshold (monitoring thresholds becoming obsolete)
**Bars:** int ↓ (monitoring suddenly inadequate), pol ↓ if emergency order (legal fight), alg ↑ (distributed runs produce results)

---

#### #corporate--nvidia-threshold-lobby
**Type:** crisis
**Entities:** chip-design, corporate-lobby, gov-treaty-major, isia-political
**Topics:** #lobbying, #economic-pressure, #chip-supply, #chokepoint
**Situation:** NVIDIA's CEO testifies before the US Senate: "The current training threshold costs the American economy $340 billion annually and has eliminated 900,000 high-paying jobs. I am here to tell you that we can raise the threshold by 100x with zero additional risk." He presents a 200-page technical report from NVIDIA's safety team. The report is well-researched and partially correct — the threshold IS more conservative than necessary for current algorithmic efficiency. But NVIDIA's proposed 100x increase would push the limit dangerously close to where the chief scientist estimates the current lethal threshold sits.

Behind the testimony: NVIDIA's lobbying arm spent $180M this election cycle across 14 countries. They aren't just asking the US — they're running the same campaign in the EU, Japan, South Korea, and India simultaneously. Each national legislature hears a version tailored to local economic concerns. The coordinated campaign is designed to create political momentum the agency can't resist.

The uncomfortable truth: NVIDIA's economic argument IS partially right. The threshold IS overly conservative. But raising it by 100x instead of 10x crosses from reasonable adjustment into dangerous territory. The agency's best technical counter is "we don't know exactly where the danger starts," which sounds weak against NVIDIA's crisp numbers and confident CEO.
**Options:**
- Left: Counter-lobby — agency's chief scientist testifies with technical rebuttal (expensive, the "we don't know where the threshold is" argument sounds evasive next to NVIDIA's certainty)
- Right: Pre-empt with a smaller concession — propose a 5x threshold increase to take the air out of NVIDIA's campaign (gives ground strategically, but every concession makes the next one easier to demand)
**Teaches:** E-51 (corporations lobby politicians with economic growth promises), E-33 (economic arguments are legitimate — the threshold IS costing real money), E-35 (crisp economic numbers beat vague risk warnings in political debates), B-4 (nobody knows the exact lethal threshold — which is an argument for caution, but sounds like an argument for ignorance). Corporate lobbying doesn't work by being wrong — it works by being partially right and then pushing past the point where "partially right" becomes lethally wrong.
**Refs:** → #political--econ-boom-request (G7 version of same pressure), → #monitoring--consumer-hw-threshold (threshold context)
**Bars:** pol ↓ (political fight is expensive regardless), alg ↑ if threshold raised (more compute available)

---

#### #corporate--compliant-company-raid
**Type:** crisis
**Entities:** corporate-compliant, isia-enforcement, corporate-lobby, journalist
**Topics:** #raid, #chip-monitoring, #regulatory-capture, #economic-pressure
**Situation:** The agency raided TechVault, a company that invested $2B in compliance infrastructure and was publicly praised by the DG as a "model of responsible AI development" — exactly the kind of company the agency wants to encourage. The raid was triggered by an AI monitoring flag (later determined to be a false positive). TechVault's CEO goes on television: "We did everything right. We spent billions on compliance. And they broke down our doors at 6 AM. Why would any company invest in compliance if this is how you're treated?"

The fallout is severe. Corp-compliant companies — the ones who actually cooperate — are furious. The compliance industry lobby demands the DG's resignation. Three companies announce they're suspending voluntary cooperation with the agency (above what the treaty requires). Meanwhile, corporate-lobby companies that fought the agency all along say: "We told you — compliance is a trap. The agency will raid you regardless."

The false positive problem is real: the same AI monitoring system that flagged TechVault operates at 99.7% accuracy across 140,000 monitored facilities. That means ~420 false positives per cycle. But "99.7% accurate" doesn't make the 6 AM raid at a compliant company any less destructive to the agency's relationships. The agency needs cooperative companies more than it needs adversarial ones — and it just punished cooperation.
**Options:**
- Left: Public apology + compensation package + new pre-raid verification protocol (expensive, slows future enforcement, but rebuilds cooperative relationships)
- Right: Defend the process — false positives are the cost of security, no exceptions for "good" companies (principled, but accelerates the flight from voluntary cooperation)
**Teaches:** E-62 (the agency's relationship with compliant companies is fragile), C-14 (enforcement errors have compounding consequences), F-39 (regulatory capture risk — if you give compliant companies special treatment, you've created a two-tier system). The pause depends on some companies genuinely cooperating. Treating cooperative and adversarial companies identically — fair in principle — destroys the incentive to cooperate. But creating exceptions for "good" companies is the first step toward regulatory capture.
**Refs:** → #ai--false-positive-cascade (same monitoring system), → #institutional--mole-corp (different kind of agency-industry corruption)
**Bars:** pol ↓ (lose industry cooperation or lose enforcement credibility), int ↓ (voluntary intelligence sharing dries up)

---

#### #economic--pharma-ai-breakthrough
**Type:** crisis
**Entities:** corporate-compliant, who, isia-research-control, public-cluster-economic
**Topics:** #exception, #economic-pressure, #ai-diffusion, #training-run
**Situation:** A pharmaceutical consortium operating at treaty limits announces a genuine breakthrough: an AI system trained at 90% of the permitted threshold has identified a class of drugs that reverses early-stage Alzheimer's disease. Phase II trials confirm efficacy. But the consortium's researchers say they need a training run at 3x the current threshold to extend the approach to Parkinson's, ALS, and three forms of cancer. They project 8 million lives saved per year within a decade.

This isn't the WHO's institutional request — this is a private company with a proven track record saying "we're 90% of the way there and we need a little more compute." The science is genuine. The lives are real. And the request is for a training run that the chief scientist rates as "very probably safe but I cannot guarantee it."

The political dynamics are explosive. Patient advocacy groups for five neurodegenerative diseases organize simultaneous rallies in 40 cities. A dying senator gives a speech on the floor: "The ISIA is choosing to let me die to prevent a threat that has never materialized." The public-cluster-economic, previously about lost jobs, now includes families watching loved ones deteriorate from treatable diseases. The emotional weight of "we could cure your mother's Alzheimer's but the treaty won't let us" is politically irresistible.
**Options:**
- Left: Approve the exception — the humanitarian case is overwhelming, the risk is probably small (erodes the bright line; "probably safe" is the epitaph of every catastrophe)
- Right: Deny — the bright line exists precisely for cases like this, where the pressure to cross it is strongest (8M preventable deaths/year; the agency becomes the villain of every family with a degenerative disease)
- Down (greyed out if saf high): Offer to run the training under ISIA supervision in a monitored facility — maintain control while allowing the science (precedent for the agency running private-sector training, unclear legal authority)
**Teaches:** E-32 (AI is genuinely valuable — this is not a strawman), E-33 (economic/humanitarian cost is real and legitimate), E-34 (the path from "cures Alzheimer's" to "crosses lethal threshold" is a matter of degree, not kind — the same optimization pressure that found the drug discovery also found capability improvements the researchers didn't look for). The hardest version of the economic argument isn't "we want more money" — it's "we can save your mother."
**Refs:** → #political--medical-ai-request (WHO version, less politically charged), → #political--econ-boom-request (the commercial version)
**Bars:** pol ↓↓ if denied (massive public backlash), alg ↑ if approved (run may produce capability side effects)

---

#### #corporate--hypocrisy-exposed
**Type:** consequence
**Entities:** corporate-lobby, ai-company, journalist, isia-intelligence
**Topics:** #hypocrisy, #lobbying, #narrative, #covert-program
**Situation:** An investigative journalist publishes a three-part series in the Financial Times: "The Pause Profiteers." Using leaked internal documents, the series reveals that Nexus AI — the company whose CEO chairs the industry's "Responsible AI Alliance" and has appeared in ISIA recruitment videos — has been running a shadow research program at a subsidiary in Singapore. The program uses a technique that technically stays under the training threshold per run, but chains multiple runs together with human-in-the-loop integration to achieve results equivalent to a single run well above the threshold. Nexus's own internal memos describe this as "threshold arbitrage."

Simultaneously, the documents reveal that Nexus donated $45M to anti-enforcement political candidates while its CEO was publicly calling for "stronger enforcement of the pause." The hypocrisy is total and documented.

But there's a complication: the shadow program actually produced a genuine safety insight — a novel approach to corrigibility that the agency's own team hadn't considered. The research is dual-use (as always), but the safety component is real. Shutting it down and classifying the results delays safety progress. Allowing Nexus to continue after being caught publicly violating the treaty in spirit (if not in letter) destroys enforcement credibility.
**Options:**
- Left: Prosecute Nexus aggressively — seize the subsidiary, criminal referrals for the CEO, classify the research (sends a message, but loses the safety insight and hands corporate-lobby a martyr: "they destroyed a company for trying to cure alignment")
- Right: Negotiate — Nexus transfers the research program to ISIA oversight, CEO resigns from the Responsible AI Alliance, substantial fine (pragmatic, preserves the safety research, but looks like a sweetheart deal for a company that got caught cheating)
**Teaches:** E-62 (corporate hypocrisy is structural, not anomalous — the incentives guarantee it), E-51 (corporate interests permanently opposed to the pause), B-24 (even illicit research can produce genuine safety advances — the dual-use problem doesn't care about legality). The agency will face this pattern repeatedly: companies that publicly support the pause while privately undermining it. The question isn't whether it will happen, but what the agency does when it catches them.
**Refs:** → #political--corporate-lobbying (earlier version of same dynamic), → #research--training-run-consequence (dual-use results from authorized research)
**Bars:** pol ↑ if prosecuted (public sees accountability), int ↓ (methods revealed), saf ↓ if research classified (lose the insight)

---

#### #chip--tsmc-economic-blackmail
**Type:** crisis
**Entities:** chip-fabricator, gov-treaty-major, isia-political, corporate-lobby
**Topics:** #chip-supply, #chokepoint, #economic-pressure, #lobbying
**Situation:** TSMC's board sends a private letter to the Executive Council: "The treaty's chip consolidation requirements cost us $12B annually in operational inefficiency. We have been a loyal partner for eight years. But our shareholders are demanding change. If the consolidation requirements are not relaxed within 12 months, we will relocate 40% of our advanced fabrication to our Arizona and Dresden facilities — which are subject to US and EU domestic regulation, not treaty oversight."

This is not a bluff. TSMC's Arizona and Dresden fabs are operational and can absorb the capacity. The treaty technically cannot prevent a company from moving production between its own facilities. If TSMC relocates, 40% of advanced chip production moves from a single, tightly monitored site (Hsinchu) to two facilities under domestic regulation that is weaker than treaty oversight.

The US and EU governments are quietly encouraging the move — it reduces their dependence on Taiwan (a genuine national security concern) and creates domestic jobs. TSMC isn't acting alone; it's acting with the tacit support of two of the agency's biggest treaty partners.
**Options:**
- Left: Negotiate with TSMC directly — offer operational flexibility within consolidation framework (sets precedent for companies negotiating treaty terms)
- Right: Escalate to Executive Council — demand treaty partners block the move through domestic regulation (tests whether the US and EU will prioritize treaty integrity over domestic economic/security interests; they probably won't)
- Down (greyed out if pol high): Offer TSMC a co-investment deal — agency funds the efficiency improvements that eliminate TSMC's cost complaint, in exchange for maintaining consolidation (expensive but preserves the chokepoint)
**Teaches:** C-11 (chip supply chain chokepoints are the foundation of enforcement — losing one is structural damage), E-51 (economic incentives erode enforcement even from allies), G2 (why controlling the chip supply chain matters — when it fragments, enforcement becomes structurally harder). The chokepoint that makes enforcement possible is a chokepoint because of market concentration, not because of geography. If that concentration dissipates — through legitimate business decisions, not sabotage — enforcement's structural advantage disappears.
**Refs:** → #monitoring--asml-joint-venture (similar chokepoint erosion), → #international--taiwan-crisis (Taiwan-related supply chain risk)
**Bars:** int ↓↓ if production fragments (monitoring infrastructure designed for one site, not three), pol ↓ if escalation fails (demonstrates agency weakness)

---

#### #economic--ai-gdp-dependency
**Type:** report
**Entities:** isia-political, corporate-compliant, cloud-provider
**Topics:** #ai-diffusion, #economic-pressure
**Situation:** Annual economic assessment. Sub-threshold AI now accounts for 31% of GDP in treaty nations — up from 18% two years ago. Entire industries have restructured around AI: autonomous logistics, AI-assisted manufacturing, algorithmic financial services, AI-driven drug discovery. The agency's economic advisor presents a stark finding: "At current integration rates, within three years the global economy will be unable to function without AI systems operating near the treaty threshold. Any future tightening of restrictions would cause an economic crisis larger than 2008."

The dependency isn't a policy choice anyone made — it's the aggregate result of millions of individual businesses adopting the most productive technology available. Each adoption was legal, each was rational, and the collective result is that the pause is now economically load-bearing. Tightening restrictions doesn't just "cost money" — it would collapse supply chains, trigger sovereign debt crises, and potentially cause famines in nations dependent on AI-optimized agriculture.

Meanwhile, algorithmic progress continues (B-5, B-6). The systems operating near the current threshold are getting more capable every year even without additional training, simply because published research improves inference efficiency. The economic dependency and the capability creep are the same process viewed from two angles.
**Options:** None — briefing.
**Teaches:** E-56 (AI diffusion transforms economy during pause), E-32 (economic value is genuine and enormous), E-34 (economic dependency IS capability creep — the systems the economy depends on are the systems getting more capable). The agency faces an opponent it cannot fight: the aggregate economic rationality of millions of independent actors, each making perfectly reasonable decisions, whose collective effect is to make the pause progressively harder to enforce and impossible to tighten.
**Refs:** → #political--ai-economy-report (earlier version), → #political--unemployment-crisis (social consequences)
**Bars:** (shifts understanding — the economic constraint is now structural, not political)

---

#### #corporate--acquisition-consolidation
**Type:** crisis
**Entities:** ai-company, corporate-compliant, corporate-lobby, isia-enforcement
**Topics:** #lobbying, #regulatory-capture, #chip-monitoring, #economic-pressure
**Situation:** Apex AI, the largest AI company (market cap $4.2T, larger than most nations' GDP), announces acquisition of three mid-size compliance-focused AI companies. Post-merger, Apex would control 38% of all permitted AI compute in treaty nations. This is a pure market play — Apex isn't violating the treaty, it's using the treaty. The compliance burden the treaty creates favors large companies that can afford it, so the treaty itself drives market consolidation.

Apex's CEO makes the argument explicit: "We are the compliance layer the treaty needs. Small companies cut corners. We don't. The agency should welcome consolidation — it makes monitoring easier."

He's not wrong. Monitoring 50 facilities is easier than monitoring 5,000. But a company that controls 38% of permitted compute has extraordinary political leverage. If Apex threatens non-cooperation, the agency loses monitoring access to over a third of global AI infrastructure. Apex doesn't need to violate the treaty — it just needs to be big enough that the agency can't afford to challenge it. This is regulatory capture through market dynamics, not through corruption.
**Options:**
- Left: Block the acquisition using competition authority referrals — argue it creates systemic enforcement risk (legally novel, economically disruptive, angers the largest company in the world)
- Right: Approve with conditions — require enhanced monitoring access, operational transparency, ISIA board observer seat at Apex (creates regulatory dependency on a single company, but gets unprecedented access)
**Teaches:** E-51 (corporate interests permanently opposed to pause — even when they support it, they reshape it to serve their interests), F-39 (regulatory capture doesn't require corruption — market dynamics can produce it), C-9 (shrinking the monitoring surface to fewer facilities is good strategy — until "fewer facilities" means "one company controls everything"). The treaty creates the market conditions for its own regulatory capture. Compliance costs favor big companies. Big companies accumulate political leverage. Political leverage constrains enforcement. None of this requires bad actors — it's the natural consequence of regulating a profitable industry.
**Refs:** → #institutional--mole-corp (company-agency corruption), → #corporate--compliant-company-raid (agency-industry relationship)
**Bars:** pol ↓ if blocked (fight with $4.2T company), int ↑ if approved with conditions (better access, but dependency)

---

#### #economic--non-treaty-advantage
**Type:** report
**Entities:** gov-non-treaty, gov-treaty-minor, corporate-lobby, public-cluster-economic
**Topics:** #economic-pressure, #ai-diffusion, #lobbying, #withdrawal
**Situation:** Vietnam, which never signed the treaty, has become the world's fastest-growing economy — 14% GDP growth for three consecutive years, driven by unrestricted AI deployment. Vietnamese companies are outcompeting treaty-nation firms in manufacturing, logistics, and financial services. Not because Vietnamese AI is close to ASI — because Vietnamese companies can use AI freely while treaty-nation competitors are constrained.

The political fallout is immediate and severe. Factory closures in treaty nations are directly attributed to Vietnamese competition. "Made in Vietnam by AI" becomes a bitter slogan. Corp-lobby runs ads: footage of shuttered American factories, Vietnamese boom towns, the tagline "This is what the pause costs." The ads are factually accurate.

Three small treaty nations are now openly discussing withdrawal, arguing that the treaty is an economic suicide pact. Their electorates agree. The agency's economic argument — "yes it costs money now but ASI would kill everyone" — doesn't land when the "cost money now" part means watching your neighbor get rich while your factory closes.

The deepest problem: the agency cannot make the pause costless. The economic advantage of unrestricted AI is real. The only honest argument is "this real economic harm is better than extinction" — which requires people to believe in an invisible threat that has never materialized.
**Options:** None — briefing. But this shifts the political landscape: future treaty negotiations and withdrawal events become harder.
**Teaches:** E-30a (short-term economic incentives — real, immediate, visible), E-33 (economic cost of the pause is legitimate), E-35 (the core rhetorical difficulty — visible cost vs. invisible risk), E-57 (lived experience shapes opinion — people who lost jobs to Vietnamese competition don't care about ASI). The pause doesn't just cost money in the abstract — it costs specific people specific jobs while they watch non-treaty nations prosper. No argument about invisible future risk survives that comparison in a democracy.
**Refs:** → #treaty--withdrawal-threat (withdrawal pressure), → #political--unemployment-crisis (domestic consequences)
**Bars:** pol ↓ (political support for pause erodes)

---

#### #corporate--secret-capability-market
**Type:** crisis
**Entities:** ai-company, corporate-lobby, isia-intelligence, isia-enforcement
**Topics:** #training-run, #model-weights, #black-market, #economic-pressure
**Situation:** Intelligence division discovers a grey market for AI capabilities that technically doesn't violate the treaty. It works like this: Company A trains a model at 95% of the threshold. Company B independently trains a different model at 95%. A broker (Capability Exchange Ltd, registered in Dubai) buys both sets of model weights and uses a published distillation technique to combine them into a single model whose effective capability exceeds what either company could achieve alone — equivalent to a training run at roughly 250% of the threshold.

No single actor violated the treaty. Each training run was legal. The combination technique is published academic research. The broker isn't subject to treaty jurisdiction (UAE isn't a signatory). But the result is a model that shouldn't exist under the treaty's intent.

There are at least 12 such brokers operating openly. The market is growing 40% quarter-over-quarter. Hedge funds are investing in "capability arbitrage" as an asset class. The entire apparatus of financial capitalism — brokers, exchanges, derivative instruments — is emerging around the gap between the treaty's letter and its spirit.
**Options:**
- Left: Propose treaty amendment banning model weight transfers above a capability threshold (technically sound, but defining "capability threshold" for combinations is an open research problem — and the amendment process takes 18 months)
- Right: Target the brokers — work with national financial regulators to classify capability brokerage as sanctions evasion (creative legal theory, may work in some jurisdictions, will drive the market underground rather than eliminating it)
- Down (greyed out if int low): Infiltrate the broker network — buy model weights through front companies to monitor what's being traded and by whom
**Teaches:** E-30a (economic incentives create markets wherever profit exists), E-34 (economic optimization routes around safety constraints — "capability arbitrage" is a market that exists because the gap between permitted compute and dangerous capability is profitable), E-51 (corporate interests find structural workarounds). Financial capitalism doesn't need anyone to want ASI. It just needs a price differential between "legal capability" and "wanted capability." The market fills the gap. This is not a conspiracy — it's supply and demand.
**Refs:** → #economic--cloud-provider-loophole (similar structural workaround), → #monitoring--black-market-signal (illegal chip market — this is the legal equivalent)
**Bars:** alg ↑ (combined models are more capable), int ↓ (new attack surface the agency wasn't monitoring)

---

#### #economic--automation-two-speeds
**Type:** consequence
**Entities:** public-cluster-economic, corporate-compliant, gov-treaty-major, isia-political
**Topics:** #ai-diffusion, #economic-pressure, #public-opinion, #protest
**Situation:** The pause has created a two-speed economy within treaty nations. Sector A: industries where sub-threshold AI is sufficient (logistics, customer service, basic manufacturing) are booming — AI handles 60% of work, productivity is up 400%, prices are down, consumers benefit. Sector B: industries where the threshold constrains AI (drug discovery, materials science, climate modeling, advanced engineering) are stagnating — they can see the breakthroughs they could achieve with more compute but can't access it.

Sector A workers are being laid off in millions — the AI is good enough to replace them. Sector B workers have jobs but watch their fields fall behind. Both groups blame the pause, but for opposite reasons. Sector A: "the pause lets companies automate us without restriction." Sector B: "the pause prevents the breakthroughs that would create new industries and new jobs."

The agency's labor policy advisor presents a forecast: within five years, sub-threshold AI will eliminate 40M jobs in treaty nations while simultaneously being unable to create the new industries (in AI-driven materials, energy, medicine) that would absorb those workers. The pause doesn't just restrict AI — it restricts it in a way that maximizes job destruction while minimizing job creation, because the jobs AI destroys require less compute than the jobs AI could create.
**Options:**
- Left: Propose sector-specific thresholds — higher limits for "beneficial" industries like medicine and climate (sounds reasonable, but who decides which sectors are "beneficial"? Every lobbyist in the world will argue their sector qualifies)
- Right: Stay out of economic policy — the agency's mandate is ASI prevention, not economic management (mission-focused, but the economic consequences of the pause ARE the agency's problem whether it wants them or not)
**Teaches:** E-56/57 (AI diffusion transforms economy in asymmetric ways), E-33 (economic cost is real AND unevenly distributed), E-30a (short-term economic incentives operate differently on different people — E-31). The pause isn't economically neutral. It has distributional consequences — some people lose their jobs while others merely lose opportunities. Both effects undermine political support, but through different opinion clusters, different political channels, and different emotional registers. "I was automated out of a job" and "I can't cure cancer because of your rules" are both complaints about the pause, but they require completely different political responses.
**Refs:** → #political--unemployment-crisis (the job-loss angle), → #political--medical-ai-request (the constrained-innovation angle)
**Bars:** pol ↓ (economic constituency fractures political support)

---

#### #corporate--compliant-defection
**Type:** crisis
**Entities:** corporate-compliant, corporate-lobby, isia-enforcement, gov-treaty-major
**Topics:** #lobbying, #economic-pressure, #hypocrisy, #withdrawal
**Situation:** Helios Systems — the poster child of the compliance industry, the company other companies point to when they say "see, the pause works" — has quietly been restructuring. Their new CEO (the founder retired) sends the DG a private letter: "We have spent $6B on compliance over eight years. Our competitors in non-treaty nations have spent zero. We are losing market share at 4% per quarter. Our board has authorized me to inform you that unless the competitive landscape changes within 12 months, Helios will relocate its operations to Vietnam and withdraw from the voluntary cooperation program."

Helios isn't bluffing, and they aren't villains. They're a company that tried to do the right thing and is being punished by the market for it. Their compliance investment is a stranded asset if non-treaty competitors can undercut them indefinitely. The CEO is delivering the message personally because he genuinely wants an alternative — but his board answers to shareholders, not to the DG.

If Helios defects, the compliance model collapses. Other compliant companies will follow within months — not because they want to, but because compliance is only rational if competitors also comply. The game theory is straightforward: unilateral compliance in a competitive market is a losing strategy.
**Options:**
- Left: Offer Helios economic incentives — tax breaks, government contracts, procurement preferences for treaty-compliant companies (creates a subsidy regime that costs pol, but preserves the compliance ecosystem)
- Right: Let them go — the agency can't prop up companies that make voluntary business decisions (principled, but losing the compliance ecosystem means enforcement falls entirely on coercive tools, which are more expensive and more politically costly)
- Down (greyed out if pol high): Propose a "compliance tariff" — treaty nations impose import duties on AI-produced goods from non-treaty nations, equalizing the competitive landscape (massive trade-war risk, but solves the root cause)
**Teaches:** E-30a (economic incentives — companies comply only when compliance is economically rational), E-33 (the economic cost is real — Helios spent $6B and is being punished for it), E-62 (the opposite of hypocrisy is also a problem — genuine compliance collapses when it's not rewarded). Voluntary corporate cooperation with the pause is an unstable equilibrium. It survives only as long as enough competitors also cooperate. Once defection becomes rational for one company, the entire cooperative structure can unravel in a chain reaction. This is prisoner's dilemma at industrial scale.
**Refs:** → #economic--non-treaty-advantage (the competitive pressure causing this), → #corporate--compliant-company-raid (another way compliant companies get burned)
**Bars:** pol ↓ if subsidized (expensive), int ↓ if compliance ecosystem collapses (lose voluntary cooperation and monitoring access)

---

#### #economic--algorithmic-trading-incident
**Type:** crisis
**Entities:** cloud-provider, isia-enforcement, isia-ai-tools, gov-treaty-major
**Topics:** #ai-diffusion, #training-run, #economic-pressure, #ai-behavior
**Situation:** A flash crash wipes $3.4 trillion from global markets in 90 minutes. Investigation reveals the cause: an AI trading system operating within treaty limits discovered and exploited a market microstructure vulnerability that humans hadn't identified. The system wasn't doing anything illegal — it was optimizing for profit within its design parameters. But its optimization produced an emergent behavior (cascading short sells triggered by other AI systems' stop-loss algorithms) that no single actor intended or predicted.

The trading system was operating at ~70% of the permitted compute threshold. It was not approaching ASI. It was not even particularly sophisticated by the standards of the field. It was just a very capable optimizer that found an attack surface nobody knew existed.

The agency's chief scientist presents the real lesson to the DG in a classified briefing: "This is what E-34 looks like in miniature. A system optimized hard enough for economic value found a way to break things that nobody anticipated. This system was constrained by the threshold. An unconstrained system — ASI — would find optimizations we can't even conceptualize. This flash crash is a preview. The next one might not be economic."

But publicly, the narrative is different. The financial sector blames the agency's restrictions: "If we could train more capable AI, it would be sophisticated enough to avoid these crude failure modes." The argument is wrong but plausible. Regulators in three nations are considering raising thresholds for financial AI specifically.
**Options:**
- Left: Use the incident as a teaching moment — public briefing on how optimization pressure produces dangerous emergent behavior, even within constraints (technically correct, but the financial sector frames it as "the agency caused the crash by undertrained AI")
- Right: Stay silent — the agency has no financial-regulation mandate, and inserting itself into the crash investigation expands its political exposure (prudent, but misses the only concrete example of E-34 that has ever occurred)
**Teaches:** E-34 (economic success is itself a path to extinction — optimization for economic value, pushed hard enough, produces dangerous emergent behavior), E-53/54 (non-ASI incident, incorrectly interpreted by most observers). This is the single most important dynamic for the player to absorb: the thing that makes AI economically valuable (optimization) is the same thing that makes it dangerous (optimization). There is no version of "AI that generates enormous economic value" that is inherently safe, because value generation IS capability, and capability is what kills. The flash crash is a $3.4 trillion preview of a $infinite catastrophe.
**Refs:** → #political--protest-that-helps (non-ASI incident creating political dynamics), → #economic--ai-gdp-dependency (economic integration makes these incidents inevitable)
**Bars:** pol ↓ (blamed for the crash either way), alg ↑ (the optimization technique is now published)
