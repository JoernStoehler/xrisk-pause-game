# Events Brainstorm — Safety Research Lead x Meta-Level Safety Decisions

Events focused on the institutional/strategic decisions the DG makes about ISIA's safety research program. NOT alignment technicalities — these are about preconditions, side-effects, resource allocation, internal monitoring, external meddling, and the long silences when nothing works.

Key constraint from Jörn: a sane DG will "fund any promising idea whatsoever" — so "which avenue to fund" is not a real dilemma. The real dilemmas are the six categories below.

---

#### #safety--airgap-large-experiment
**Type:** preparation
**Entities:** isia-safety-team, isia-research-control, isia-enforcement
**Topics:** #safety-research, #experiment, #dual-use
**Situation:** The Chief Scientist wants to run ISIA's largest safety experiment yet: training a model at 2x10^23 FLOP to test a corrigibility hypothesis. Before the DG can even consider the science, two preconditions must be met. First, the airgap: the experiment compute cluster must be physically and electronically isolated so that (a) the model can't reach the internet, and (b) algorithmic insights from the experiment can't leak into the broader ML community. ISIA's current airgap facility was built for experiments 10x smaller. Upgrading it costs $400M and takes 8 months. Second, intelligence: ISIA needs to be confident the experiment won't accidentally cross the lethal threshold. At current algorithmic progress (~3x 2022 efficiency), the safety team estimates the lethal threshold is somewhere above 10^25 FLOP — but that's a rough estimate with wide error bars. The experiment is 50x below the estimate, which sounds safe, but the estimate itself could be wrong by an order of magnitude. If int is high, ISIA has better models of the threshold. If int is low, the error bars are enormous. The DG must decide: invest in the preconditions first, or skip them and hope the current setup is good enough?
**Options:**
- Left: Delay experiment 8+ months to build proper airgap and gather more intelligence on current threshold — safer but the safety research clock is ticking, and the Chief Scientist warns her team will lose momentum
- Right: Run the experiment in the existing facility with enhanced but imperfect isolation — faster, but if the airgap fails or the threshold estimate is wrong, the consequences are irreversible
- Down (greyed out if int < 40): Run the experiment with a staged protocol — start at 1/10th scale, evaluate, then scale up if no anomalies (requires good enough intelligence to design meaningful checkpoints)
**Teaches:** Precondition 1 (Jörn's dilemma: ISIA must feel confident a large experiment won't kill everyone and won't leak). The airgap and the threshold estimate are prerequisites the player can't skip. D-22 (frontier AI trap), B-26 (even permitted training is dangerous), B-4 (lethal threshold is unknown)
**Refs:** → #research--approval-dilemma (the scientific decision this precondition gates), → #research--training-run-consequence (what happens if the experiment produces dual-use results)
**Bars:** saf ↓ if delayed (slower research), alg ↑ if airgap fails (leaked insights), saf ↑ if run successfully

---

#### #safety--internal-monitoring-expansion
**Type:** preparation
**Entities:** isia-safety-team, isia-internal-security, isia-research-control
**Topics:** #safety-research, #experiment, #research-approval
**Situation:** ISIA's safety department has grown from 40 researchers to 340 over three years. The Chief Scientist wants to expand further to 600 — she has identified genuinely promising research threads that need staffing. But internal security raises a red flag: at 340 people, the department already has monitoring gaps. Three incidents in the past year where junior researchers ran unauthorized small-scale experiments on their workstations (consumer GPUs, below any compute threshold, but each was an ML training run the department didn't sanction). None produced anything dangerous, but the pattern is clear: a fraction of researchers, immersed in the most fascinating technical problems of the century, will experiment without permission. At 340, internal security can investigate incidents after the fact. At 600, with the current monitoring budget, they can't even do that. The DG faces a question: is the safety department well-monitored enough to safely expand? If monitoring is strong and the department is well-positioned (high int), massive expansion is low-risk. If monitoring is weak (low int), every additional researcher is another potential source of unsanctioned capability progress.
**Options:**
- Left: Expand to 600 now — accept the monitoring gap, trust the researchers' good intentions (faster safety progress, but unsanctioned experiments may produce algorithmic advances that leak or compound)
- Right: Freeze hiring until internal monitoring is upgraded — double the internal security budget for the safety department before adding anyone (slower growth, but the department you build is one you can actually control)
- Down (greyed out if int < 50): Implement a tiered access system — new hires get theory-only workstations with no ML compute access until they've been individually vetted (requires intelligence infrastructure to run the vetting)
**Teaches:** Precondition 2 (Jörn's dilemma: expansion is risky if you can't monitor your own department). D-21 (agency must manage research directly because no one else can be trusted — but can the agency trust itself?), D-23 (safety doesn't scale, but for a different reason here: scaling creates internal control problems, not just diminishing returns)
**Refs:** → #research--stepping-on-toes (the diminishing-returns version of the growth problem), → #institutional--mole (internal integrity theme)
**Bars:** saf ↑ if expanded with good monitoring, alg ↑ if unsanctioned experiments leak, int ↓ if monitoring stretched thin

---

#### #safety--funding-deal-pentagon
**Type:** crisis
**Entities:** isia-safety-team, gov-treaty-major, isia-political
**Topics:** #safety-research, #dual-use, #lobbying
**Situation:** The US Department of Defense offers ISIA $2.8 billion in additional safety research funding — more than ISIA's entire current research budget. The catch: the Pentagon wants "co-development rights" on any safety research with military applications. Specifically, they want ISIA's interpretability tools to be adapted for military AI systems. The Chief Scientist says the money would fund three critical research threads currently bottlenecked by resources. The legal team says the co-development clause effectively gives the Pentagon access to dual-use knowledge that could accelerate military AI capabilities. The political advisor says refusing the largest funder in the treaty coalition will cost the agency dearly — the Pentagon's support was instrumental in getting Congress to approve ISIA's budget last year. The DG must decide what deals are acceptable for funding, knowing that the wrong deal could compromise ISIA's independence or feed capability progress.
**Options:**
- Left: Accept with modified terms — negotiate to limit co-development to non-dual-use outputs only, accept the risk that the Pentagon defines "non-dual-use" more broadly than ISIA does
- Right: Refuse — protect research independence completely, accept the political and financial cost (the Pentagon doesn't forget being told no)
- Down (greyed out if pol < 40): Counter-propose: the Pentagon funds the research with no co-development rights, in exchange for ISIA publicly crediting DoD as a "founding partner" of the safety program (pure prestige play — requires enough political capital that DoD cares about your endorsement)
**Teaches:** Precondition 3 (Jörn's dilemma: what deals is ISIA willing to make for additional funding?). F-39 (regulatory capture — the military-industrial complex buying influence over safety research), D-21 (who controls safety research matters as much as whether it happens)
**Refs:** → #research--agency-trains-ai (agency's own AI use creates similar tensions), → #treaty--five-year-review (funding negotiations shape treaty dynamics)
**Bars:** saf ↑↑ if funding accepted (massive budget increase), pol ↓ if Pentagon refused, int ↓ if co-development leaks dual-use knowledge, alg ↑ if military gets interpretability tools

---

#### #safety--funding-deal-techbro
**Type:** crisis
**Entities:** isia-safety-team, ai-company, isia-political
**Topics:** #safety-research, #lobbying, #dual-use
**Situation:** A former frontier lab CEO — now a billionaire philanthropist who vocally supports the pause — offers to fund a $500M endowment for ISIA's safety research. No strings attached, he says. But ISIA's intelligence division has flagged something: the billionaire's family office still holds $4B in AI-adjacent investments that would skyrocket in value if the pause were lifted. More concerning, three of the researchers he's recommending ISIA hire are his former employees who worked on capability research. The intelligence assessment: 60% chance this is genuine philanthropy from someone who believes in the mission. 40% chance this is a long-term play to embed sympathetic personnel in the safety department who will eventually argue that alignment is "close enough" to justify resuming AI development. The money is real and would make a real difference. The risk is slow, subtle, and might never materialize.
**Options:**
- Left: Accept the endowment but decline the personnel recommendations — take the money, keep control of hiring (offends the donor, who may withdraw)
- Right: Decline everything — the intelligence assessment makes the risk too high, find funding elsewhere (principled, but $500M doesn't grow on trees and the safety research needs it)
- Down (greyed out if int < 50): Accept both but place the recommended hires under enhanced monitoring for their first two years — requires intelligence resources to do properly
**Teaches:** Precondition 3 (what deals for funding, at risk of losing independence). F-39 (regulatory capture, this time by a private actor). The difference between overt strings and covert influence — the most dangerous funding conditions are the ones that aren't written down.
**Refs:** → #institutional--revolving-door (industry capture theme), → #safety--internal-monitoring-expansion (monitoring capacity determines whether you can manage risk)
**Bars:** saf ↑ if funding accepted, pol ↓ if donor offended, int ↓ if embedded personnel go unmonitored

---

#### #safety--senior-time-allocation
**Type:** report
**Entities:** isia-safety-team, isia-communications, isia-political
**Topics:** #safety-research, #public-opinion
**Situation:** ISIA has 12 senior alignment researchers — people capable of generating genuinely new ideas, not just executing known approaches. They are the bottleneck for everything. The Chief Scientist presents the quarterly allocation problem: (A) Each senior researcher mentoring 5 juniors produces ~0.3 additional senior-equivalents per year — slow, but the only way to grow the pipeline. Right now 4 seniors are mentoring. (B) Three seniors are on the public-communication circuit: congressional testimony, media interviews, science documentaries. This is why public support for safety research funding hasn't collapsed — people trust these specific scientists. Pull them off and the narrative vacuum fills with "ISIA wastes billions on nothing." (C) Five seniors are doing actual research — generating the novel ideas that juniors then develop. This is where breakthroughs come from. The Chief Scientist wants to pull all 3 communication seniors back to research — she says the window for a corrigibility breakthrough is narrow and she needs every mind. The comms director says support for the safety budget will evaporate within two quarters without senior scientists explaining the work to Congress and the public. Time pressure matters: at current algorithmic progress (~4x), the threshold is visibly shrinking.
**Options:**
- Left: Pull communication seniors back to research — accept the political hit, bet on faster safety progress mattering more than public support in the medium term
- Right: Maintain current allocation — the research pipeline and public communication are both load-bearing, don't sacrifice either for a speculative breakthrough
- Down (greyed out if pol > 60): Temporarily reassign mentoring seniors to research — if political support is high enough, you can afford to pause pipeline growth for one year
**Teaches:** Precondition 4 (Jörn's dilemma: how to allocate scarce senior researcher time between communication, mentoring, and research). D-23 (safety doesn't scale — you can't just hire more seniors, you have to grow them). D-17 (unknown difficulty — is the breakthrough close enough to justify the gamble?)
**Refs:** → #research--stepping-on-toes (the fundamental bottleneck this allocation problem reflects), → #era--safety-looks-solved (what happens when communication fails and partial results get misinterpreted)
**Bars:** saf ↑ if more seniors on research (but only if breakthrough happens), pol ↓ if communication cut, saf ↓↓ long-term if mentoring cut (pipeline dries up)

---

#### #safety--three-year-stall
**Type:** consequence
**Entities:** isia-safety-team, isia-political, media
**Topics:** #safety-research, #public-opinion
**Situation:** The annual safety progress review is devastating. For the third consecutive year, the Chief Scientist's report says: "No fundamental breakthroughs. Incremental refinements to existing approaches. The core open problems — corrigibility, goal stability, value loading — remain open." Three years of stagnation at a budget of $1.4B/year. The media has the report (leaked by a disgruntled junior researcher). The headline writes itself: "ISIA Burns $4.2 Billion on Nothing." Internally, the Chief Scientist insists this is expected — D-17, nobody said alignment would be fast. She compares it to the decades between the discovery of general relativity and practical applications. The political advisor says this comparison won't survive a news cycle. Three senators have already called for redirecting safety funding to "practical AI oversight" (meaning: weaker, cheaper, less ambitious research that produces reportable metrics). The deeper problem: the player can't tell whether the stall means alignment is genuinely too hard (D-17), or whether the current approach is wrong and a pivot is needed, or whether a breakthrough is imminent. Nobody can.
**Options:**
- Left: Defend the program publicly — the DG goes on record saying "this is what hard science looks like" and fights to maintain funding (costs political capital, but preserves the research program)
- Right: Restructure — new leadership for two of three research divisions, new methodology review, visible shake-up that gives politicians something to point to (may actually help if current approaches are wrong, may destroy momentum if they're close)
- Down (greyed out if saf > 50): Commission an external review panel of non-ISIA alignment researchers — if safety progress is high enough, the external community is large enough to provide meaningful peer review
**Teaches:** Precondition 5 (Jörn's dilemma: safety research stalls for years, and nobody knows if that's normal or a sign of failure). D-17 (unknown difficulty), D-19 (safety research doesn't look like normal science — no established metrics for "progress"). The irreducible uncertainty: you can't manage what you can't measure, and alignment progress can't be measured.
**Refs:** → #research--stepping-on-toes (the scaling problem that compounds the stall), → #era--safety-looks-solved (the opposite scenario — what happens when there IS apparent progress)
**Bars:** pol ↓↓ if stall becomes public narrative, saf ↓ if restructuring destroys momentum, saf ↑ if restructuring was actually needed

---

#### #safety--university-consortium-demand
**Type:** crisis
**Entities:** researcher-safety, isia-research-control, isia-political
**Topics:** #safety-research, #publication, #classification
**Situation:** A consortium of 14 major universities — MIT, Oxford, Tsinghua, ETH Zurich, and others — publishes an open letter demanding that ISIA return alignment research to the academic community. Their argument: ISIA's centralized control over safety research has created a bureaucratic bottleneck (B-25a) that is actively slowing progress. They cite three specific cases where ISIA's classification system prevented publication of results that the authors argue were purely theoretical and posed no dual-use risk. The letter has 2,200 academic signatories. The consortium proposes a "federated model" where universities run their own alignment research programs under ISIA guidelines but without ISIA's pre-publication review. The Chief Scientist is torn: she agrees that ISIA's review process is too slow, but she's also seen the classified intelligence on how theoretical papers have been used to accelerate capability research (B-6a). The academics haven't seen that intelligence and don't know what they're asking to be exposed to.
**Options:**
- Left: Compromise — create a two-tier system where theoretical work below a compute threshold is published freely, but anything involving experiments or architecture insights requires ISIA review (satisfies most academics, but the "below threshold" theoretical work is exactly what drives algorithmic progress via B-6a)
- Right: Refuse — maintain centralized control, accept the political cost and the possibility that you're genuinely slowing progress (universities may boycott ISIA collaborations entirely)
- Down (greyed out if int < 40): Share declassified case studies showing how "purely theoretical" papers were used for capability advances — convince the academics that the threat is real without revealing sources and methods
**Teaches:** Precondition 6 (Jörn's dilemma: universities wanting control back). D-21 (no external institution can be trusted with dual-use research — but centralizing it creates bureaucratic failure modes). B-6a (theoretical research drives algorithmic progress and cannot be controlled). B-25a (review bottleneck).
**Refs:** → #research--dual-use-publication (the specific dual-use publication problem), → #research--approval-dilemma (the review bottleneck these academics are protesting)
**Bars:** pol ↓ if universities boycott, saf ↑ if federated model accelerates research, alg ↑ if freed publications drive algorithmic progress

---

#### #safety--media-waste-story
**Type:** crisis
**Entities:** media, isia-safety-team, isia-political
**Topics:** #safety-research, #public-opinion
**Situation:** A major investigative outlet publishes "Inside the Black Hole: How ISIA Spends Your Billions." The story is well-researched and mostly accurate. It details: (1) a $180M experiment that produced "null results" (the Chief Scientist says null results ARE results in alignment research — knowing what doesn't work is progress); (2) a retreat in Switzerland for 40 senior researchers that cost $2.1M (the Chief Scientist says the informal environment produced two of the year's three most important insights); (3) the salary of ISIA's top alignment researcher: $4.2M/year (market rate to prevent her defection to industry, but the optics are terrible). The story doesn't mention any of ISIA's actual successes because those are classified for dual-use reasons. The agency is trapped: its failures are public and its successes are secret. Three separate congressional committees have requested hearings.
**Options:**
- Left: Declassify selected successes — show Congress and the public what the money actually bought (reveals dual-use information that may accelerate algorithmic progress, but saves the program politically)
- Right: Absorb the hit — refuse to declassify, accept the political damage, hope institutional support holds (protects classified research but may trigger funding cuts that actually end the program)
- Down (greyed out if pol > 60): Have the DG testify in closed session to the congressional committees — classified briefing that satisfies oversight without public disclosure (requires enough political capital that Congress grants a closed session)
**Teaches:** Precondition 6 (Jörn's dilemma: media selling "ISIA wastes money" stories). The classification trap: dual-use constraints mean your successes must be hidden while your failures are public. D-19 (safety research doesn't look like normal science — "null results" and expensive retreats look like waste to outsiders but may be essential).
**Refs:** → #safety--three-year-stall (the underlying stagnation that makes the story plausible), → #research--dual-use-publication (why successes can't be published)
**Bars:** pol ↓↓ if story drives narrative unchallenged, alg ↑ if declassification reveals capability-relevant findings, saf ↓ if funding cut in response

---

#### #safety--government-overpromise
**Type:** consequence
**Entities:** gov-treaty-major, isia-safety-team, isia-communications
**Topics:** #safety-research, #public-opinion, #safety-looks-solved
**Situation:** The German Chancellor, in a speech to the Bundestag, announces: "Thanks to ISIA's safety research program, we are now within five years of solving the alignment problem. The pause is working, and it will end in our lifetimes." The Chief Scientist is furious. Her actual assessment: the program has made real progress on sub-ASI alignment, but the core ASI problems are no closer to solution, and a five-year timeline is "somewhere between reckless optimism and outright fabrication." The Chancellor's office got the "five years" figure from an ISIA progress briefing that discussed a five-year timeline for ONE sub-problem, which got telephone-gamed into "five years to solve everything." The damage is immediate: six nations begin lobbying the treaty council to set a "sunset date" for the pause. Two AI companies announce "post-pause readiness programs." The public now has a countdown clock in their heads. When year five arrives and alignment is not solved, the credibility crash will be catastrophic. The DG must decide how aggressively to contradict a key political ally.
**Options:**
- Left: Public correction — the DG issues a statement directly contradicting the Chancellor's timeline, with the Chief Scientist explaining why no credible timeline exists (alienates Germany, the agency's third-largest funder, but prevents the five-year time bomb)
- Right: Quiet diplomacy — work with the Chancellor's office to walk back the statement gradually without a public confrontation (less damaging to the relationship, but the "five years" meme is already spreading and may be impossible to retract)
**Teaches:** Precondition 6 (Jörn's dilemma: government overpromising on research progress). D-17 (nobody knows the timeline — politicians who claim otherwise are creating a trap). The expectation management problem: once the public believes alignment is nearly solved, the pause becomes politically unsustainable.
**Refs:** → #era--safety-looks-solved (the endgame version of this dynamic), → #safety--three-year-stall (what happens when the overpromised timeline fails)
**Bars:** pol ↓ if Chancellor contradicted publicly, saf ↓ long-term if sunset date adopted (safety research rushed to meet artificial deadline), pol ↑ short-term from public optimism (but this is a trap)

---

#### #safety--rogue-internal-experiment
**Type:** crisis
**Entities:** isia-safety-team, isia-internal-security, isia-research-control
**Topics:** #experiment, #dual-use, #safety-research
**Situation:** Internal security discovers that a team of four junior researchers in ISIA's safety department ran an unauthorized ML experiment. They cobbled together 200 consumer GPUs from a university partnership (below any compute monitoring threshold), trained a small model overnight, and produced a result they believe is "the most important alignment finding in three years." The team leader, when confronted, is defiant: "The classification review process takes 9 months. We'd still be waiting for approval to run this experiment. The alignment problem doesn't wait for bureaucracy." The unauthorized experiment itself was small enough to be safe. But the precedent is not: if 4 junior researchers can run unsanctioned experiments using university hardware, so can 40. And not all of them will be as careful or as lucky. This is exactly the internal monitoring failure that makes safety department expansion dangerous. The finding they produced is, by initial assessment, genuinely significant.
**Options:**
- Left: Discipline the team — suspensions, loss of compute access, public example within the department (deters future unauthorized experiments but punishes initiative, and you lose the researchers most likely to produce breakthroughs)
- Right: Quietly incorporate the result and upgrade monitoring — thank them privately, tighten compute access controls, don't publicize the breach (preserves talent and the finding, but signals that unsanctioned experiments are tolerated if they work)
- Down (greyed out if int > 60): Use this incident to justify the expanded internal monitoring the security team has been requesting — turn the breach into a mandate for better oversight (only works if intelligence is high enough to credibly claim the current system caught it)
**Teaches:** Precondition 2 (Jörn's dilemma: ISIA's own bloated safety department doing unsanctioned experiments). The innovator's dilemma inside a bureaucracy: the same initiative that produces breakthroughs also produces uncontrolled risk. D-19 (safety research is desperate and weird — the best researchers may not follow rules).
**Refs:** → #safety--internal-monitoring-expansion (the systemic version of this problem), → #research--approval-dilemma (the review bottleneck that motivated the breach)
**Bars:** saf ↑ if finding is real, alg ↑ if experiment produced dual-use side-effects, int ↓ if breach signals monitoring weakness

---

#### #safety--mentoring-pipeline-crisis
**Type:** report
**Entities:** isia-safety-team, isia-political
**Topics:** #safety-research
**Situation:** The Chief Scientist delivers the annual workforce report. Five years into the program, ISIA has 12 senior alignment researchers. It started with 11. One was recruited, two were developed from the mentoring pipeline, and two originals retired (burnout, both — one now teaches kindergarten, calls it "more tractable than corrigibility"). At this rate, the pipeline produces 0.4 net new seniors per year. The Chief Scientist's estimate for solving alignment: >10,000 philosopher-years of serial senior-equivalent work (D-23). At 12 seniors working in parallel, that's 833 years — assuming no further attrition, no coordination overhead, and no wrong turns. Increasing the pipeline is the only way to change the math, but mentoring competes directly with research output: every senior who mentors does less research. And mentoring itself has diminishing returns — you can't train 50 juniors per senior, because the problems are too novel and idiosyncratic. The Chief Scientist says: "We need either a way to make mentoring more efficient, or a way to make the research itself easier. I don't have either." She pauses. "Or a way to make the pause last 800 years."
**Options:**
- Left: Double the mentoring allocation — pull 4 more seniors from research to mentoring, accept 3-5 years of slower progress for a larger future workforce (bet on the long game, but the algorithmic progress clock doesn't stop)
- Right: Maintain current allocation — 12 seniors is what you have, optimize their research output, hope for a breakthrough that changes the math (bet on the short game, but if the breakthrough doesn't come, the pipeline never grows)
- Down (greyed out if saf > 60): Invest in "research amplification" tools — purpose-built AI assistants that let each senior researcher effectively supervise more juniors (if safety progress is high enough, the agency's own alignment work may have produced tools that help here — but these tools are themselves dual-use per D-22)
**Teaches:** D-23 (safety doesn't scale by adding researchers), D-17 (unknown difficulty makes planning impossible), Precondition 4 (allocation of senior researcher time). The pipeline math: even optimistic scenarios require centuries unless something fundamental changes.
**Refs:** → #safety--senior-time-allocation (the tactical version of this strategic problem), → #research--biotech-proposal (the radical alternative when the math doesn't work)
**Bars:** saf ↓ short-term if mentoring increased (fewer seniors researching), saf ↑ long-term if pipeline grows, alg ↑ if AI tools for mentoring are dual-use
