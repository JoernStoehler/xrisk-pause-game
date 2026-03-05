# Events Draft — v0.1

Initial breadth-first sketches for review. Each event is one paragraph describing the situation, the options, and what it teaches. Grounded in Step 1 dynamics (referenced by number), domain model, and literature findings.

**Format per event:**
- **Type**: crisis / preparation / report / consequence
- **Situation**: what happened, who's telling you
- **Options**: left / right / (down if special option exists)
- **Teaches**: which dynamic(s) the player absorbs
- **Depends on / affects**: state variables this event reads or writes (will inform bar design later)

---

## ENFORCEMENT (dynamics group C)

### E1. The 120-Day Chip Audit
**Type:** crisis
**Situation:** Your enforcement chief reports that the initial chip consolidation deadline is approaching. 14% of declared facilities haven't completed their inventory. Three countries are requesting extensions.
**Options:**
- Left: Grant extensions — maintain diplomatic relationships but leave a surveillance gap for months
- Right: Enforce the deadline — send inspection teams, risk diplomatic incidents with the three nations
- Down (if high enforcement capacity): Deploy rapid-response teams to assist the lagging facilities (resolves both concerns, but costs significant resources)
**Teaches:** C-13 (chip consolidation as the first critical enforcement step), C-9 (structural chokepoints matter)
**Depends on:** enforcement capacity, treaty health
**Affects:** monitored compute fraction, treaty health

### E2. Heat Signature in Mato Grosso
**Type:** crisis
**Situation:** Satellite surveillance detects anomalous thermal output from a remote facility in central Brazil — consistent with a mid-scale compute cluster. No declared facility exists at those coordinates.
**Options:**
- Left: Request a challenge inspection through the Executive Council (formal, slow, preserves legitimacy)
- Right: Send a covert intelligence team to investigate before alerting anyone (fast, but legally questionable and risks a diplomatic crisis if discovered)
- Down (greyed out if low treaty health): Coordinate with Brazil's domestic enforcement agency for a joint operation
**Teaches:** C-10 (monitoring the full chip lifecycle), C-14 (cat-and-mouse), B-3 (compute-centric risk)
**Depends on:** monitored compute fraction, treaty health, enforcement capacity
**Affects:** monitored compute fraction, treaty health, political support

### E3. The Chip Smuggling Ring
**Type:** consequence (follows from earlier trade policy decisions)
**Situation:** Interpol has identified a network smuggling H100-equivalent chips through a chain of shell companies across five countries. They estimate 2,000 chips are unaccounted for — enough for a serious training run if concentrated.
**Options:**
- Left: Focus on seizing the chips — track the logistics chain, raid warehouses
- Right: Focus on the network — let some chips move while you map the full organization
**Teaches:** C-14 (cat-and-mouse — do you catch this batch or prevent the next one?), C-8 (attacker only needs to succeed once)
**Depends on:** enforcement capacity, enforcement know-how
**Affects:** monitored compute fraction, enforcement know-how

### E4. Consumer Hardware Threshold
**Type:** report
**Situation:** Your chief scientist delivers a briefing: algorithmic progress now means that a cluster of 500 consumer-grade GPUs — roughly $200,000 worth, purchasable with no oversight — could potentially run a training process that, two years ago, required 10,000 monitored chips. The enforcement threshold needs to be lowered.
**Options:** None — this is a briefing. The player absorbs the information.
**Teaches:** B-5 (shrinking lethal threshold), B-6a/b (theoretical + small-scale experiments erode enforcement), the clock is always ticking
**Depends on:** algorithmic progress level
**Affects:** (player's understanding — sets up future decisions)

### E5. The Surveillance Expansion Debate
**Type:** preparation
**Situation:** Your enforcement chief proposes installing tracking firmware on all GPUs sold worldwide — not just datacenter chips, but consumer cards too. It would dramatically expand monitoring coverage. Your political advisor warns this would be seen as mass surveillance.
**Options:**
- Left: Approve the expansion — cover more chips, but trigger a political backlash
- Right: Reject it — maintain political support, but leave consumer hardware as a blind spot
**Teaches:** C-9 (the critical distinction: expanding monitoring surface is bad strategy; shrinking attack surface is good strategy), the political cost of surveillance
**Depends on:** political support, monitored compute fraction
**Affects:** monitored compute fraction, political support

### E6. The ASML Bottleneck
**Type:** crisis
**Situation:** ASML, the sole manufacturer of EUV lithography machines, announces it's exploring a joint venture with a consortium that includes a non-treaty nation. If the deal goes through, advanced chip production capacity moves outside treaty monitoring.
**Options:**
- Left: Diplomatic pressure — lobby the Netherlands to block the deal (risks being seen as overreach)
- Right: Offer ASML a treaty-compliant alternative deal (costs significant resources)
- Down (greyed out if low mandate): Invoke emergency powers to designate ASML as a strategic asset under treaty Article VI
**Teaches:** C-11 (supply chain chokepoints are the structural foundation), G2 (why chip supply chain control matters)
**Depends on:** mandate, treaty health
**Affects:** monitored compute fraction, treaty health, economic pressure

---

## SAFETY RESEARCH (dynamics group D)

### E7. The Research Approval Dilemma
**Type:** crisis
**Situation:** A leading alignment researcher submits a proposal to train a system at 5×10^23 FLOP — just below the banned threshold. The research could accelerate safety progress significantly, but the Research Controls Division flags it: the methodology could also reveal capability advances.
**Options:**
- Left: Approve — accelerate safety research but risk dual-use leakage
- Right: Deny — protect against capability leakage but delay safety progress
- Down (if high safety knowledge): Approve with airgapped conditions and ISIA oversight (safer but slower and expensive)
**Teaches:** B-24 (dual-use knowledge), B-25a (review bottleneck), D-22 (the frontier-AI-for-safety trap)
**Depends on:** safety progress, enforcement capacity (for airgap)
**Affects:** safety progress, algorithmic progress (if knowledge leaks)

### E8. The Stepping-on-Toes Problem
**Type:** report
**Situation:** Your research director presents the quarterly safety progress report. Despite doubling the research budget last year, output has plateaued. Three independent teams arrived at the same result. The problem isn't funding — it's that the fundamental hard problems bottleneck all approaches, and adding researchers just creates redundancy.
**Options:** None — briefing.
**Teaches:** D-23 (safety research doesn't scale by adding researchers), D-17 (unknown difficulty)
**Depends on:** safety progress, research budget
**Affects:** (player's understanding of research dynamics)

### E9. The Biotech Proposal
**Type:** preparation
**Situation:** A biotech consortium proposes a 15-year program to genetically enhance human cognitive capabilities — the idea being that enhanced researchers might solve alignment problems that current humans cannot. The proposal is credible but the timeline is uncertain, the ethics are explosive, and success is not guaranteed.
**Options:**
- Left: Fund it — long-shot but potentially the only path to solving alignment if the problem is too hard for current humans
- Right: Reject — the ethics backlash would be devastating, and 15 years is too uncertain
**Teaches:** D-20 (might need a new kind of researcher), the survival pathway from literature (human intelligence enhancement → aligned ASI)
**Depends on:** political support, research budget
**Affects:** safety progress (long-term), political support

### E10. AI Research Assistant Incident
**Type:** crisis
**Situation:** The agency's own AI research assistant — used by the safety team to accelerate literature review and hypothesis testing — produced an output that your chief scientist describes as "uncomfortably close to a capability advance we haven't published." The system may have discovered something dual-use without being instructed to.
**Options:**
- Left: Shut down the AI assistant — lose the productivity boost but eliminate the risk
- Right: Restrict the assistant's scope and add monitoring — keep some benefit while managing risk
- Down (greyed out if low safety knowledge): Have the safety team formally evaluate the output to determine if it's actually dangerous before acting
**Teaches:** D-22 (AIs smart enough to help are smart enough to be dangerous), C-59 (agency's own AI tools aren't fully under control), B-24 (dual-use knowledge)
**Depends on:** safety progress, enforcement capacity
**Affects:** safety progress, algorithmic progress

### E11. The Dual-Use Publication
**Type:** crisis
**Situation:** A researcher at a university in a treaty nation publishes a paper that inadvertently reveals a significant optimization for training efficiency. The paper is about safety — specifically, how to detect deceptive alignment — but the detection method implicitly teaches how to create deceptive alignment more efficiently. The paper is already on arXiv.
**Options:**
- Left: Issue a retroactive classification order — set the precedent that safety papers can be classified after publication (politically toxic, may not work since the paper is already public)
- Right: Accept the leak — the knowledge is out, focus on updating enforcement thresholds to account for the new efficiency
**Teaches:** B-24 (dual-use research), B-25c (classification failure — disguised capability work), B-7 (different research types need different enforcement)
**Depends on:** algorithmic progress, mandate
**Affects:** algorithmic progress (the threshold just dropped), political support (if classification attempted)

---

## POLITICAL ECONOMY (dynamics group E)

### E12. Election Year
**Type:** crisis
**Situation:** Three major treaty nations hold elections this year. In two of them, populist candidates are running on "AI freedom" platforms — promising to revoke treaty commitments and unleash AI-driven economic growth. Polling shows them competitive.
**Options:**
- Left: Stay neutral — the agency should not intervene in domestic politics (preserves legitimacy but risks losing key supporters)
- Right: Quietly support pro-pause candidates through information campaigns about AI risk (effective but politically explosive if discovered)
**Teaches:** E-42 (elections can reverse the pause overnight), E-47 (salience varies across decision-makers)
**Depends on:** political support, public opinion clusters
**Affects:** mandate, political support, treaty health

### E13. The Quiet Decade
**Type:** crisis (triggered by sustained high enforcement success)
**Situation:** It's been 8 years since the last serious enforcement incident. The agency's own success has become its biggest problem. A coalition of senators from three countries is proposing a 40% budget cut, arguing the threat was exaggerated. Your political advisor says the votes are close.
**Options:**
- Left: Accept a smaller cut (15%) — preserve some resources while showing fiscal responsibility
- Right: Fight the full cut — make the public case for continued vigilance, but risk appearing self-serving
- Down (if high intelligence): Declassify a redacted summary of intercepted rogue training attempts that were stopped quietly — prove the threat is real, but reveal intelligence methods
**Teaches:** E-52 (success is indistinguishable from "the threat was never real"), the deep structural problem of invisible success
**Depends on:** political support, enforcement track record
**Affects:** enforcement capacity, monitored compute fraction, mandate

### E14. The Economic Boom Request
**Type:** crisis
**Situation:** The global economy is booming thanks to AI-augmented industries operating within treaty limits. A coalition of G7 finance ministers formally requests that the agency raise the permissible training threshold from 1e22 to 1e23 FLOP — a 10x increase. They argue the current limit is unnecessarily constraining and costing the global economy $800 billion annually.
**Options:**
- Left: Raise the threshold — reduce economic pressure but increase the monitoring burden and the risk of accidental ASI
- Right: Maintain the threshold — preserve the safety margin but intensify the political conflict with the world's richest nations
**Teaches:** E-32 (AI is genuinely economically valuable), E-33 (economic arguments against the pause are legitimate), E-34 (economic success is itself a path to extinction)
**Depends on:** economic pressure, political support, monitored compute fraction
**Affects:** monitored compute fraction, economic pressure, political support, algorithmic progress (if threshold raised)

### E15. The Unemployment Crisis
**Type:** crisis
**Situation:** AI-driven automation has eliminated 12 million jobs in treaty nations over the past two years. Protests are spreading. The agency isn't directly responsible — these are permitted AI deployments below the threshold — but protestors are blaming the pause for "not going far enough" AND "going too far," depending on which opinion cluster they belong to.
**Options:**
- Left: Propose additional AI use restrictions to show the agency cares about economic harm (reduces backlash but constrains the economy further)
- Right: Stay focused on the ASI mandate — job losses are a domestic policy issue, not the agency's problem (preserves mission focus but loses political support)
**Teaches:** E-56/57 (AI diffusion changes the social landscape), E-50 (different opinion clusters use different political channels), E-35 (the pause imposes real visible costs)
**Depends on:** economic pressure, political support, opinion clusters
**Affects:** political support, opinion clusters

### E16. Corporate Lobbying
**Type:** crisis
**Situation:** Three of the world's largest AI companies have formed a lobbying alliance. They're publicly supporting the pause while privately funding political candidates who oppose enforcement. Your journalist contact has evidence, but publishing it would burn the source.
**Options:**
- Left: Leak the evidence to an independent journalist — expose the hypocrisy but burn an intelligence source
- Right: Confront the companies privately — threaten to reveal their lobbying unless they stop (risky — they might call the bluff)
**Teaches:** E-62 (corporate hypocrisy pattern), E-51 (corporate interests are structurally opposed to the pause)
**Depends on:** political support, mandate
**Affects:** political support, corporate pressure

### E17. The Taiwan Strait Incident
**Type:** crisis
**Situation:** Military tensions in the Taiwan Strait escalate. TSMC — which fabricates 90% of advanced AI chips — suspends production for two weeks. The global chip supply chain is disrupted. Three non-treaty nations use the disruption as cover to refuse scheduled chip audits.
**Options:**
- Left: Focus on the chip audit refusals — enforce compliance during the disruption (risks appearing tone-deaf during a geopolitical crisis)
- Right: Focus on the TSMC situation — help stabilize chip production to prevent a black market boom (addresses root cause but neglects enforcement)
**Teaches:** C-11 (supply chain chokepoints), E-49 (geopolitics introduces game-theoretic threats), multiple crises can hit simultaneously
**Depends on:** treaty health, monitored compute fraction, enforcement capacity
**Affects:** monitored compute fraction, treaty health, economic pressure

### E18. The Hostage Gambit
**Type:** crisis
**Situation:** A major non-aligned nation announces it will begin large-scale AI training runs unless the treaty nations share semiconductor technology. They frame it as technological sovereignty. Your intelligence suggests they're years away from actually having the capability — but the political threat is real.
**Options:**
- Left: Call the bluff — impose sanctions and tighten chip export controls (escalates but demonstrates resolve)
- Right: Negotiate — offer a technology-sharing package in exchange for treaty accession (de-escalates but strengthens their future capability)
**Teaches:** E-49 (nations holding humanity hostage for unrelated concessions), the difference between political threats and actual capability threats
**Depends on:** treaty health, enforcement capacity, mandate
**Affects:** treaty health, monitored compute fraction, political support

### E19. The Success Narrative Problem
**Type:** report
**Situation:** Your communications team presents polling data. 62% of the public now believes "the AI threat was exaggerated." Support for the pause has dropped 15 points in two years. The strongest predictor of skepticism: "nothing bad has happened." Your comms director says: "We're victims of our own success."
**Options:** None — briefing.
**Teaches:** E-52 (success is indistinguishable from "the threat was never real"), why long quiet stretches are dangerous
**Depends on:** political support, enforcement track record
**Affects:** (player's understanding — the quiet is not safe)

### E20. The Protest That Helps
**Type:** consequence
**Situation:** After a non-ASI AI incident — an autonomous system caused a lethal accident — massive public protests erupt against AI. The protests are not about ASI risk at all, but they've created political momentum for stronger AI regulation. Your political advisor sees an opportunity: ride the wave to push through enforcement measures that were previously blocked.
**Options:**
- Left: Exploit the moment — push for expanded enforcement powers while public anger is high (effective but cynical, and attaches the agency's mission to a misunderstanding)
- Right: Correct the narrative — explain that the accident was about non-ASI AI, not the agency's mandate (honest but wastes a political opportunity)
**Teaches:** E-53 (non-ASI harms shift opinion unpredictably), E-58 (crises can be opportunities), E-54 (most people draw incorrect conclusions from AI incidents)
**Depends on:** political support, opinion clusters
**Affects:** political support, mandate, opinion clusters

---

## INTERNATIONAL DYNAMICS (dynamics group E, international subset)

### E21. The Treaty Review Conference
**Type:** crisis
**Situation:** The five-year treaty review conference is approaching. Seven nations have submitted proposals to weaken enforcement provisions. Three nations want to strengthen them. The conference requires consensus on amendments.
**Options:**
- Left: Pre-negotiate with the weakening bloc — offer minor concessions to prevent a bloc vote against the treaty (pragmatic but erodes enforcement)
- Right: Hold firm — rally the strengthening bloc and force a confrontation (principled but risks treaty fracture if the weakening bloc walks out)
**Teaches:** E-49 (coalition maintenance is hard), treaty fragility
**Depends on:** treaty health, mandate, political support
**Affects:** treaty health, enforcement capacity

### E22. The Withdrawal Notice
**Type:** crisis
**Situation:** A major treaty nation files its 12-month withdrawal notice. Under the treaty, they must forfeit AI infrastructure — but your intelligence suggests they're secretly moving chips to undeclared facilities before the withdrawal takes effect.
**Options:**
- Left: Invoke challenge inspections immediately — the treaty allows 24-hour access, use it before they leave (legally sound but diplomatically aggressive)
- Right: Negotiate to prevent the withdrawal — offer concessions (preserves the coalition but at what cost?)
- Down (greyed out if low enforcement capacity): Deploy covert monitoring of the suspected chip transfers
**Teaches:** The withdrawal problem (treaty Article XV), E-49 (nations can exit), enforcement during a political crisis
**Depends on:** treaty health, enforcement capacity, mandate
**Affects:** treaty health, monitored compute fraction

### E23. The North Korea Problem
**Type:** report
**Situation:** Intelligence briefing: a non-treaty nation has been acquiring chips through a network of intermediaries for 3 years. Estimated accumulation: 4,000 H100-equivalents. Not enough for ASI yet, but the trend is clear. Previous sanctions have failed — the same pattern as nuclear nonproliferation.
**Options:** None — briefing.
**Teaches:** The North Korea precedent from literature (even with global cooperation, determined actors find ways), C-8 (attacker only needs to succeed once)
**Depends on:** enforcement capacity, treaty health
**Affects:** (player's understanding of enforcement limits)

---

## INSTITUTIONAL (dynamics group F)

### E24. The Mole
**Type:** crisis
**Situation:** Internal security discovers that a senior official has been passing enforcement schedules to a corporation they previously worked for. The corporation has been timing its chip transfers to avoid inspection windows.
**Options:**
- Left: Quietly remove the official and patch the security gap (avoids scandal but doesn't deter future moles)
- Right: Prosecute publicly — send a message that internal betrayal has consequences (deters future moles but the scandal damages agency credibility)
**Teaches:** F-39 (regulatory capture), F-40 (employees from different opinion clusters may sabotage the mission)
**Depends on:** enforcement capacity, political support
**Affects:** enforcement capacity, political support

### E25. The True Believer
**Type:** crisis
**Situation:** A senior enforcement officer — deeply committed to the pause — has been conducting unauthorized surveillance of researchers at a major university. No treaty violation was found, but the surveillance was illegal under domestic law. Civil liberties organizations are demanding the officer's arrest.
**Options:**
- Left: Arrest the officer — uphold the rule of law and protect civil liberties (correct but demoralizing for the enforcement team)
- Right: Shield the officer — argue that the surveillance was within the agency's mandate (legally dubious, politically explosive)
**Teaches:** F-40 (internal disagreement about methods), the tension between mission urgency and rule of law
**Depends on:** political support, enforcement capacity
**Affects:** political support, enforcement morale

### E26. The Leadership Purge
**Type:** crisis
**Situation:** A new government in a major treaty nation demands the replacement of three senior ISIA officials whom they consider "too aggressive." They threaten to withhold their treaty funding unless the officials are removed. The officials are competent — the real objection is political.
**Options:**
- Left: Replace the officials — maintain the funding but set a precedent that governments can dictate agency staffing
- Right: Refuse — protect institutional independence but lose the funding
**Teaches:** F-37 (politicians can undermine the agency), F-38 (competent staff replaced by political appointees), F-36 (institutional fragility)
**Depends on:** mandate, political support
**Affects:** enforcement capacity, mandate, political support

### E27. The China Hawk
**Type:** crisis
**Situation:** Your deputy director — a former military intelligence officer — has been privately undermining negotiations with China. He believes any cooperation with China is naive. You learn this from a Chinese diplomat who is threatening to withdraw from upcoming talks unless the deputy is removed.
**Options:**
- Left: Remove the deputy — preserve the China relationship but lose a highly competent officer and signal that external pressure dictates internal personnel decisions
- Right: Keep the deputy but restrict their access to China-related work — a compromise that satisfies no one
**Teaches:** F-41 (individual employees can sabotage international cooperation), F-40 (sincere internal disagreement)
**Depends on:** treaty health, enforcement capacity
**Affects:** treaty health, enforcement capacity

---

## AI BEHAVIOR & TOOL RELIABILITY (dynamics C-59/61)

### E28. The False Positive Cascade
**Type:** crisis
**Situation:** The agency's AI surveillance system flags 47 "high-priority anomalies" overnight — an unprecedented spike. Your analysts are overwhelmed. Initial review suggests most are false positives triggered by a software update in the monitoring firmware. But you can't rule out that one or more are real.
**Options:**
- Left: Investigate all 47 — exhausts the enforcement team for weeks but ensures nothing is missed
- Right: Triage using the AI's confidence scores — investigate only the top 10, accept the risk that a real threat hides in the lower 37
**Teaches:** C-59 (agency's AI tools aren't fully reliable), C-61 (surveillance AI produces weird hiccups)
**Depends on:** enforcement capacity
**Affects:** enforcement capacity, monitored compute fraction

### E29. The Surveillance AI's Recommendation
**Type:** crisis
**Situation:** The monitoring AI recommends shutting down a legitimate, treaty-compliant AI research lab in Germany because it detected "patterns consistent with capability research." The lab is run by a well-known alignment researcher. Your analysts disagree with the AI's assessment but can't explain why it flagged the lab.
**Options:**
- Left: Override the AI — trust your human analysts' judgment (but what if the AI detected something humans missed?)
- Right: Investigate the lab — follow the AI's recommendation even though your analysts doubt it (damages the researcher's reputation and chills legitimate safety work)
**Teaches:** C-59 (AI tools aren't fully under control), the difficulty of trusting opaque AI recommendations
**Depends on:** enforcement capacity, safety progress
**Affects:** safety progress (if legitimate research is chilled), enforcement capacity

---

## ESCALATION AND HIDDEN THREATS

### E30. The Rogue Lab
**Type:** crisis (multi-card chain, card 1 of 2-3)
**Situation:** A whistleblower inside a private company in a treaty nation contacts the agency. They claim their employer is running unauthorized training runs at night using undeclared chips hidden in a legitimate datacenter. The whistleblower sounds credible but terrified.
**Options:**
- Left: Launch an immediate raid — if the claim is true, every hour counts
- Right: Gather more intelligence first — verify the claim through independent sources before acting (slower but avoids a false raid that could discredit the agency)
**Teaches:** B-3 (compute-centric risk), the first-try problem (no do-overs), the tension between speed and certainty
**Depends on:** enforcement capacity, monitored compute fraction
**Affects:** monitored compute fraction, political support (depending on outcome)

### E31. The Near Miss
**Type:** consequence (follows E30 if the raid succeeds)
**Situation:** The raid found everything the whistleblower described. 800 H100 chips, a partially completed training run at 2×10^23 FLOP — dangerously close to the threshold. If the run had completed, your chief scientist estimates a 15% chance it would have produced ASI. Nobody outside the agency knows how close this was.
**Options:**
- Left: Classify the near-miss — protect intelligence sources and methods, prevent public panic
- Right: Declassify a sanitized version — use it to demonstrate the ongoing threat and justify the agency's budget
**Teaches:** C-8 (attacker almost succeeded — the asymmetry), E-52 (if classified, this near-miss becomes another "nothing happened"), B-4 (nobody knows the exact threshold)
**Depends on:** political support, enforcement capacity
**Affects:** political support, mandate, opinion clusters

### E32. The Training Run You Approved
**Type:** consequence
**Situation:** Six months ago, you approved a large safety research training run (see E7-type decision). The results are in — significant safety progress was made. But the Research Controls Division has also discovered that the model developed unexpected capabilities that weren't part of the research design. The capabilities are not dangerous on their own, but they advance the state of the art in a way that was supposed to be banned.
**Options:**
- Left: Suppress the capability findings — protect the safety research program but set a dangerous precedent of hiding results
- Right: Publish and classify the capability findings — honest but it damages the agency's credibility (the agency approved the research that produced banned results)
**Teaches:** B-24 (dual-use), D-22 (AIs smart enough to help are smart enough to be dangerous), the irreversibility of knowledge
**Depends on:** safety progress
**Affects:** safety progress, algorithmic progress, political support

---

## LONG-TERM DYNAMICS AND ERA TRANSITIONS

### E33. The Generational Shift
**Type:** report
**Situation:** Your political advisor presents demographic analysis. The median voter in key treaty nations was 12 years old when the pause began. They have no memory of the crisis that motivated it. To them, ASI risk is "something old people worry about." Youth political movements are overwhelmingly anti-pause — they see it as the older generation hoarding technological progress.
**Options:** None — briefing.
**Teaches:** E-44 (generational turnover replaces the pause's original supporters), E-45 (generational counter-signaling)
**Depends on:** turn count, political support
**Affects:** (player's understanding — the political landscape is shifting under them)

### E34. Safety Looks Solved
**Type:** crisis (era transition trigger)
**Situation:** A breakthrough in formal verification of AI systems makes major news. Leading researchers declare alignment "effectively solved for systems below ASI." The agency's chief scientist is cautious — "we've solved the easy part; the hard part is ASI-specific" — but the media narrative is "the safety problem is solved." Three nations begin lobbying to relax the treaty, arguing the original justification no longer holds.
**Options:**
- Left: Embrace the narrative — use the good news to strengthen political support for the agency ("see, the pause is working!")
- Right: Correct the narrative — publicly explain that sub-ASI alignment doesn't mean ASI alignment is solved (honest but politically costly — you're arguing against good news)
**Teaches:** The safety-looks-solved → geopolitical shift dynamic (Jörn's key insight), the difference between solving alignment for current AI and solving it for ASI, why the game changes when safety appears achievable
**Depends on:** safety progress
**Affects:** political support, treaty health, opinion clusters (massive shift), sets up era transition

### E35. The Race Begins
**Type:** crisis (follows E34 if safety narrative takes hold)
**Situation:** Two major nations have begun "defensive ASI programs" — claiming they need to build ASI first to prevent adversaries from doing so unsafely. They argue their programs are safe because "alignment is solved." Your chief scientist says their safety claims are, at best, premature. The programs are technically violating the treaty, but the nations claim the treaty is outdated.
**Options:**
- Left: Enforce the treaty — demand the programs stop, invoke protective action provisions (risks a major international crisis)
- Right: Negotiate new terms — acknowledge the changed landscape and try to bring the programs under international oversight (legitimizes the programs but maintains some control)
**Teaches:** The race dynamic (once safety looks solved, actors race to be first), the difference between political confidence and technical confidence, why the pause gets HARDER not easier when safety appears solved
**Depends on:** safety progress, treaty health, mandate
**Affects:** treaty health, monitored compute fraction, algorithmic progress

### E36. The Algorithmic Cliff
**Type:** report
**Situation:** Your chief scientist delivers an emergency briefing. A combination of published papers, open-source advances, and inference from recent training run results suggests the lethal compute threshold has dropped below what a well-funded university lab could assemble. The agency's monitoring infrastructure was designed for datacenter-scale threats. It cannot monitor university-scale compute.
**Options:** None — briefing. But this changes everything.
**Teaches:** B-5/6 (the threshold shrinks regardless of what you do), the endgame — enforcement designed for large actors cannot handle small actors, the fundamental time limit on the pause
**Depends on:** algorithmic progress
**Affects:** (player's understanding — the game just got much harder)

---

## ECONOMIC PRESSURE AND AI DIFFUSION

### E37. The Medical AI Request
**Type:** preparation
**Situation:** The WHO petitions the agency to allow a training run that would create an AI system for accelerating drug discovery. They argue it could save 2 million lives per year. The training run is above the current threshold but well below the ASI danger zone. Your chief scientist says the risk is low but nonzero.
**Options:**
- Left: Approve — the humanitarian case is overwhelming (but sets a precedent for threshold exceptions)
- Right: Deny — maintain the bright line (but 2 million preventable deaths per year is a real cost, and the political fallout will be severe)
**Teaches:** E-32/33 (the economic/humanitarian cost of the pause is real and legitimate), the bright-line problem (exceptions erode the rule)
**Depends on:** political support, mandate
**Affects:** political support, economic pressure, monitored compute fraction (if approved — now there's a new large system to monitor)

### E38. The Black Market Price Signal
**Type:** report
**Situation:** Intelligence reports that the black market price of H100-equivalent chips has tripled in the past quarter. This means demand from unauthorized actors is increasing faster than the agency can intercept supply. Your enforcement chief says: "We're winning individual battles but the market is telling us we're losing the war."
**Options:** None — briefing.
**Teaches:** C-14 (the cat-and-mouse never ends), market signals as intelligence, the limitations of enforcement
**Depends on:** enforcement capacity, monitored compute fraction
**Affects:** (player's understanding — enforcement success is not enough)

### E39. The AI-Powered Economy
**Type:** consequence
**Situation:** AI systems operating within treaty limits now contribute an estimated 18% of global GDP. Entire industries depend on them. Your economic advisor warns: "If we tighten restrictions further, we're not just slowing growth — we're threatening the livelihoods of hundreds of millions of people who now depend on AI for their jobs."
**Options:** (This is context for future decisions — no choice required)
**Teaches:** E-56 (AI diffusion transforms the economy), E-32 (the economic stakes keep growing), why the pause gets politically harder over time
**Depends on:** economic pressure, turn count
**Affects:** (player's understanding of the political landscape)

---

## INFORMATION AND INTELLIGENCE

### E40. The Whistleblower's Dilemma
**Type:** crisis
**Situation:** An anonymous contact inside a foreign intelligence service claims that their government is secretly funding ASI research through a front company. The contact demands asylum and $5 million. Your intelligence division says the information is plausible but unverified. If the contact is genuine, this is the biggest enforcement lead in years. If it's a setup, you've been played.
**Options:**
- Left: Pay and grant asylum — the potential intelligence is worth the cost and risk
- Right: Demand verification first — require proof before committing resources (but the contact may disappear)
**Teaches:** The information quality dimension (how reliable is your intelligence?), the cost of uncertainty
**Depends on:** enforcement capacity, budget
**Affects:** enforcement capacity (if genuine), political support (if it's a setup)

### E41. The Imperfect Report
**Type:** crisis
**Situation:** Your morning briefing contains three items that partially contradict each other: satellite data suggesting a new facility in Southeast Asia, signals intelligence suggesting the same region is clean, and a human source claiming the facility exists but is a semiconductor plant, not a compute cluster. You have resources to investigate one lead thoroughly or all three superficially.
**Options:**
- Left: Investigate the satellite lead thoroughly (highest probability of a real threat)
- Right: Spread resources across all three (lower depth but broader coverage)
**Teaches:** The information quality dimension — imperfect reports are the norm, not the exception. The DG makes decisions with contradictory intelligence.
**Depends on:** enforcement capacity
**Affects:** monitored compute fraction, enforcement capacity

---

## ENDGAME

### E42. The Pivotal Moment
**Type:** crisis (win condition trigger)
**Situation:** After decades of work, a team of enhanced researchers (or AI-assisted researchers, or uploads — depending on the path taken) presents a formal proof of corrigibility for a class of systems that includes ASI-capable architectures. Your chief scientist says: "This is it. We can build a corrigible low-impact superintelligence that monitors all compute globally. The acute risk period can end." But deploying this system requires a training run orders of magnitude above the current threshold — the largest ever attempted. If the proof is wrong, this is the last mistake anyone ever makes.
**Options:**
- Left: Approve the deployment — trust the proof and end the acute risk period
- Right: Demand additional verification — delay deployment for 2-5 years of testing (but the political window might close — nations are restless)
- Down (greyed out if low treaty health): Convene an international conference to make the decision collectively
**Teaches:** The win condition — the pause was buying time for this moment. The final decision is still terrifying even with a proof in hand.
**Depends on:** safety progress (must be very high), treaty health, political support
**Affects:** game outcome (win or continued play)

---

## Summary: state variables that recur across events

Tallying what the events read/write, these variables appear most frequently:

1. **Monitored compute fraction** — what % of AI-capable hardware is under surveillance (read by 15+ events)
2. **Political support / mandate** — how much authority the agency has (read by 15+ events)
3. **Treaty health** — stability of the international coalition (read by 10+ events)
4. **Enforcement capacity** — operational resources and trained personnel (read by 12+ events)
5. **Safety progress** — how far along alignment research is (read by 8+ events)
6. **Algorithmic progress** — how much the lethal threshold has shrunk (read by 6+ events, mostly as a hidden clock)
7. **Opinion clusters** — distribution of public opinion (read by 5+ events)
8. **Economic pressure** — how much the economy pushes against the pause (read by 5+ events)
9. **Enforcement know-how** — accumulated cat-and-mouse experience (read by 3+ events)
10. **Research budget** — resources allocated to safety research (read by 3+ events)

The top 4-5 are strong candidates for visible bars (advisor briefings). The rest can be hidden state that affects the card pool.
