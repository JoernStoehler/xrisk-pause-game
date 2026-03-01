# Content Overhaul Plan

## Project Goal (Jörn's words, 2026-02-27)

1. **Audience**: reach people who are NOT already AI safety people
2. **Accuracy**: convey what calibrated experts (Jörn, Yudkowsky) actually predict — not typical misrepresentations. These are the best predictions available (no other experts have been consistently calibrated and right over 20y), but still imprecise (calibrated, rarely high-precision — few 99% binary predictions).
   - The game's survival rate is a GAME DESIGN CHOICE, not a claim about reality. Jörn has NOT specified what the survival rate should be — only that the game does NOT need to be pessimistic. A 50% survival rate is acceptable; so are other rates. The survival rate is still an open design question.
   - In-game advisors that help the player make good decisions are acceptable.
   - The point is teaching the DYNAMICS of a post-pause world, not conveying any particular level of optimism or pessimism.
   - Note from Jörn: achieving a high survival rate in-game would require making good events unnaturally frequent and bad events unnaturally rare (because the real dynamics are hard).
3. **Content**: the core components of that prediction — the main things to keep in mind when discussing and planning a pause, and when anticipating whether some action helps with the pause
4. **Scope restriction**: only the sub-graph AFTER a global pause has been established. Not: what happens without a pause. Not: what leads to a pause starting. Framing: "we want to achieve a pause, and after that [game content] becomes the thing to do / watch out for / that we anticipate will happen"
5. **Learning design**: fun repetition with replay value. Use interval-learning to re-query player knowledge. Don't punish game-carelessness (player-playing-a-game); only punish player-not-caring-about-outcomes carelessness — that should predictably lead to bad endings. Don't overdo churn. Don't let repetitiveness get in the way of fun.
6. **Virality**: memeify into something that spreads. Super-low-friction to start playing. Gets recommendations.

## Current State

**What works (keep):**
- Reigns-clone mechanics: swipe, weighted card pool, die-and-restart loop
- Visual design and style (Jörn: "the design and style is good")

**What exists but is NOT validated:**
- Domain model (`src/data/domain-model.md`): dimensions, causal links — written by agent from Jörn's dictation, contains known paraphrasing errors. Jörn gave corrections on some dimensions.
- Literature findings (`src/data/literature-findings.md`): challenges, start scenarios, 8 extinction pathways, 4 survival pathways — compiled by agent from literature files. Jörn skimmed some sections.

**What is placeholder-quality (must be replaced):**
- All 29 cards — not grounded in the domain model or expert predictions
- All 21 characters — Jörn doesn't find them memorable, flagged many portraits as bad style
- Current 4 bars (Trust/Funding/Intel/Leverage) — may or may not survive redesign

**No decision yet on:**
- Resource bars (number and identity)
- Win condition
- Character cast
- Card content

## Backchain from the Goal

Everything converges on one question: **what does the player learn?**

```
Goal 6 (Virality) ← shareable moments, zero-friction start
  ← Goal 1 (Audience) ← fun FIRST, no jargon, instantly graspable
    ← Goal 5 (Learning design) ← needs to know WHAT to teach, then test it
      ← Goal 3 (Content) ← core components of expert predictions
        ← Goal 2 (Accuracy) ← must trace to real expert predictions
        ← Goal 4 (Scope) ← only post-pause dynamics
```

The domain model describes reality. The game doesn't need to represent all of it — it teaches DYNAMICS that emerge from real-world dimensions interacting. Bars, cards, characters, and deaths all exist to serve those dynamics.

## Step 1: Define the abstract dynamics and the learning model

### How learning works in this game

The game does NOT teach abstract lessons directly. Instead:
1. A few abstract key dynamics govern the post-pause world (Jörn defines these)
2. ~100 concrete examples (cards) show those dynamics playing out in specific situations
3. A player encounters many examples per playthrough, finds ~20 memorable across multiple runs
4. Over multiple playthroughs, the player INDUCTIVELY GENERALIZES the abstract dynamics from the concrete examples
5. **Success test:** Player encounters a new example "in the wild" (e.g., in a discussion about whether a pause can work) and can reason about it using the dynamics they absorbed

The abstract dynamics are never stated directly in-game. They EMERGE from experiencing enough concrete examples.

### Dynamics — grouped with sources

<!--
EPISTEMIC STATUS WARNING (from Jörn, 2026-03-01):

Items below entered this list through different processes and should NOT be
treated as equally important or equally confident.

SELECTION EFFECTS matter. When Jörn brings up a specific example during
discussion (like "I can imagine old guys being pro-pause so young people
counter-signal as anti-pause"), the process that surfaced it was: scan the space
of possible dynamics, notice the most vivid/salient one. This is cherry-picking,
not random sampling. Knowing the cherry-picked outlier is only moderately
important (+0.4 on a [-1,1] scale) is actually evidence that the whole category
of effects it represents may be WEAK — not that this one item deserves emphasis.
An agent reading this list must not mistake "Jörn mentioned this" for "Jörn
predicts this is important."

Items marked [ILLUSTRATIVE] were brought up to show what a category looks like,
not because the specific example is a key prediction. Treat them as flavor /
card seeds, not as dynamics to build game mechanics around.

Items marked [CALIBRATION NOTE] are reference points for game designers, not
dynamics the game should teach.

Items marked [SCENARIO SEED] are concrete flavor details useful for writing
individual cards, not dynamics in their own right.
-->

Source key: **[IABIED]** = treaty + book + resources ch13, **[MIRI]** = corrigibility / agent foundations / death with dignity / AGI ruin, **[Anthropic]** = alignment faking / sleeper agents / solvability, **[Cotra]** = default takeover / defeat all combined, **[Gwern]** = Clippy scenario, **[AI-2027]** = AI-2027 scenario, **[surveys]** = Brookings / Future of Life polling, **[pol-statements]** = political statements compilation. Jörn is the source for everything (omitted to avoid noise).

**A. STAKES: Why the pause is existential**

- (1) If anyone anywhere builds unaligned ASI, everyone on Earth dies.
  [MIRI] [IABIED] [Cotra] [Gwern]

- (2) The pause is a race against time: humanity must solve the alignment problem before the conditions that make ASI possible become uncontrollable.
  [IABIED]

- (66) The AI capability process (compute × algorithmic efficiency) is superexponential — each year's progress compounds on previous progress, and the rate of progress itself accelerates.
  [IABIED]

**B. THREAT MODEL: What technically enables someone to create ASI**

- (3) The core risk is someone performing a training run above the lethal compute threshold. All enforcement ultimately aims to prevent this. This is the "compute-centric" model of AI risk: the thing you need to control is compute (physical chips doing calculations), not ideas or intentions. Controlling compute is tractable because chips are physical objects that can be tracked; controlling ideas is not.
  [IABIED] [AI-2027]

- (4) Nobody knows how large a training run needs to be to produce ASI. The lethal threshold is unknown.
  [MIRI]

- (5) The lethal threshold is shrinking every year: algorithmic progress means each year requires less compute to achieve the same capability. IABIED: "every year, scientists come out with a newer, cleverer, more efficient set of AI algorithms — often using literally 10% or 1% as much computing power."
  [IABIED]

- (6) Algorithmic progress comes from four distinct sources, and the enforcement implications differ radically for each:

  (a) **Theoretical research** — people thinking and writing papers. Cannot be detected or banned. Happens inside people's heads. No enforcement mechanism exists.
  (b) **Small-scale experiments** — need only consumer hardware (a few GPUs). Very hard to detect because the compute is too small to trigger monitoring.
  (c) **Large-scale experiments** — need large clusters of advanced chips. Detectable via compute lifecycle monitoring (see C-10). This is the one category enforcement can directly address.
  (d) **AI self-improvement** — AI systems discovering more efficient algorithms on their own. This could happen inside permitted AI deployments without anyone intending it, and might be undetectable even to the operators.

  The critical implication: enforcement can only directly control source (c) and partially detect (b). Sources (a) and (d) are essentially uncontrollable, which means the lethal threshold (B-5) keeps shrinking regardless of how well enforcement works. The pause is buying time against a clock that cannot be stopped, only slowed.
  <!-- Jörn's breakdown this session — not in published literature -->

- (7) Because each source of algorithmic progress works differently, each needs a different enforcement strategy. You can ban large training runs by monitoring chips. You cannot ban theoretical insights by monitoring anything. Treating "AI research" as a single thing to regulate is a design error.
  [IABIED] — treaty Article VIII (research controls)

- (24) Some safety research also advances capabilities (dual-use knowledge). The IABIED treaty calls this the "born dangerous" doctrine: studying how to make AI safe can reveal how to make it more powerful. This creates a fundamental tension — the agency needs to encourage safety research (see group D) while preventing that research from shrinking the lethal threshold. There is no clean way to separate the two.
  [IABIED] — "born dangerous" doctrine; [Anthropic] — alignment faking research revealed capability patterns

- (25) Someone at the agency must decide which research to allow and which to ban. This single decision point creates three distinct failure modes:

  (a) **Bottleneck** — the review process is inherently slow (evaluating whether a research proposal is dual-use requires deep expertise), which delays legitimate safety work.
  (b) **Judgment errors** — reviewers will sometimes approve dangerous research or block critical safety work. These mistakes compound over decades.
  (c) **Smuggling channel** — researchers can disguise banned capability work as approved safety work. The reviewers must catch this, but the researchers understand their own work better than the reviewers do.

  For game design: this is a rich source of cards. The player (as agency director) faces research approval decisions where both "approve" and "deny" carry real risks.
  [IABIED] — Research Controls Division

- (26) Even permitted large-scale training (above ~1e24 FLOP) is dangerous in two ways: the project's results might leak to bad actors, or the project might accidentally cross the lethal threshold and create ASI without intending to. The second risk is especially insidious — the project operators may not realize they've created something dangerous until it's too late.
  [IABIED] — treaty Article IV (training run tiers)

**C. ENFORCEMENT: How to prevent unauthorized ASI development**

- (8) The fundamental asymmetry of enforcement: the agency must succeed every single time; an attacker only needs to succeed once.
  [IABIED]

- (9) Good enforcement design means shrinking the attack surface through structural advantages, NOT expanding the monitoring surface. This distinction is critical:

  **Shrinking attack surface** (good): physically consolidate all advanced GPUs into a small number of monitored facilities. Now there are only ~50 buildings to watch instead of millions of data centers. Gets easier over time as you improve the facilities.
  **Expanding monitoring surface** (bad): install tracking software on every GPU wherever it sits. Now you have millions of endpoints to monitor, any of which could be compromised. Gets harder over time as the number of devices grows.

  The game should teach this distinction: structural chokepoints are what make enforcement possible. Without them, monitoring is hopeless.
  [IABIED] — treaty Article V (chip consolidation)

- (10) Monitoring the full lifecycle of AI-capable chips — from manufacture through deployment to retirement — is the central pillar of enforcement. If you can track every advanced chip, you can detect unauthorized training runs. If you lose track of chips, enforcement collapses.
  [IABIED] — treaty Articles V-VII

- (11) The chip supply chain has extreme chokepoints: TSMC manufactures ~90% of advanced chips, ASML is the sole supplier of EUV lithography machines, NVIDIA designs ~98% of AI training chips. These chokepoints exist today and are the structural foundation of enforcement — they make compute-centric control physically possible.
  [IABIED] — resources ch13

- (13) The IABIED treaty envisions physical consolidation of all advanced AI chips into internationally monitored facilities within 120 days of ratification as the first major enforcement step.
  [IABIED] — treaty Article V

- (14) Enforcement is a permanent cat-and-mouse game. Violators develop new evasion techniques, enforcers develop new detection methods. Neither side achieves a permanent advantage, and the agency can never declare victory and relax. The relevant game dynamic: each "win" against a violator buys time but doesn't solve the problem, because the next attacker will use a different approach.
  <!-- Jörn's domain model §8 -->

- (15) The agency has a toolkit of enforcement mechanisms against violators: shutting down unauthorized research groups, seizing and repurposing their computing equipment, offering financial incentives for compliance, imprisoning violators, and deploying automated AI-driven surveillance of researchers and facilities.
  [IABIED] — treaty various articles

- (16) Different types of research restrictions have very different enforcement profiles. Banning large training runs: enforceable via chip tracking, but politically contentious because it restricts profitable industry. Banning publications: politically easy to propose, but nearly impossible to actually enforce. Banning small experiments: extremely hard to detect because consumer hardware suffices. The agency must choose which restrictions are worth the political cost, knowing that some are unenforceable regardless.
  [IABIED] — treaty Article VIII

- (59) [SCENARIO SEED] The agency uses AI tools for its own operations — surveillance, analysis, coordination. These mostly work as intended but occasionally behave unexpectedly: an AI assistant refuses or reinterprets orders, a monitoring system produces bizarre false positives. The agency's own tools are not fully under its control.
  <!-- Jörn this session -->

- (60) The agency may need to train new AI systems during the pause — for enforcement, for safety research, or to keep pace with algorithmic progress it's trying to contain. This is a direct contradiction in its mandate: the agency bans training runs, but needs to perform them itself. Cards exploring this tension force the player to weigh enforcement credibility against operational necessity.
  <!-- Jörn this session -->

- (61) [SCENARIO SEED] AI-driven surveillance of ML researchers produces "weird hiccups" — false positives from misinterpreted behavior, unexpected blind spots, or the surveillance AI developing unexpected behaviors. Useful for writing specific cards about surveillance operations going wrong.
  <!-- Jörn this session -->

**D. SAFETY PROGRESS: How to actually survive long-term**

The pause only buys time. Humanity must eventually solve the alignment problem — making ASI safe to build. This section is about why that's so hard.

- (17) Nobody knows how difficult the alignment problem is. The remaining work is genuinely unknown — it could take decades or millennia of researcher-years. MIRI's assessment: the core technical problems (agent foundations, corrigibility) are "wide open" with "none demonstrated." This means the agency cannot plan around a timeline — it might need the pause to hold for 10 years or 300 years.
  [MIRI] — agent foundations ("wide open"); corrigibility ("none demonstrated")

- (18) Human psychological bias works against the pause: "we can't prove with certainty that ASI will kill us, so let's build it and find out." The absence of a mathematical proof of danger gets weaponized as an argument to proceed. This bias is not irrational from a normal-life perspective (we routinely take uncertain risks), but it's catastrophic when the downside is extinction.
  <!-- Jörn this session -->

- (19) Safety research does not look like normal science. There is no established academic discipline of "alignment." There are no textbooks, no standard methodology, no established career path. The work is closer to founding an entirely new field from scratch than to advancing an existing one. Jörn and MIRI describe it as "desperate and weird" — the people doing it are improvising under existential time pressure with no roadmap.

  This matters for the game because the player cannot treat safety research as a progress bar that fills up with funding. It's unpredictable, might stall for decades, and the people doing it might be on entirely the wrong track without anyone knowing.
  [IABIED] — resources ch13; [MIRI] — references to needing "a crack team of genetically engineered supergeniuses"

- (20) You can't hire existing experts to solve alignment because the required disciplines don't fully exist yet. The problem might require cognitive capabilities beyond current humans — hence IABIED's discussion of biotech augmentation and MIRI's suggestion that corrigibility is "solvable in principle by sufficiently intelligent beings" (emphasis: beings more intelligent than current humans). Solutions might require breakthroughs in genetic engineering of human intelligence or whole-brain emulation before alignment work can even begin properly.

  This is radically different from any other research program in history. The Manhattan Project could hire existing physicists; the alignment problem might require first inventing a new kind of researcher.
  [IABIED] — resources ch13 (biotech augmentation); [MIRI] — corrigibility framing

- (21) The agency may have to manage safety research directly because no external institution can be trusted with it. Safety research is dual-use (see B-24), so delegating it to universities or companies risks creating the very capabilities the agency exists to prevent. But the agency running its own research creates a different problem: bureaucratic institutions are bad at producing original scientific breakthroughs.
  <!-- Jörn this session -->

- (22) Using frontier AI to accelerate safety research is a trap with no clean escape:

  The hope: AI systems could help solve alignment much faster than humans alone. Anthropic's position is that alignment is "increasingly solvable" with AI assistance.
  The danger: AI systems smart enough to meaningfully help with alignment are, by definition, smart enough to be dangerous themselves. MIRI's rebuttal: "AIs smart enough for that are smart enough to be dangerous."
  The tradeoff Jörn frames: "kill everyone now vs. kill everyone in 5 years." Using powerful AI for safety research risks immediate catastrophe, but NOT using it means safety research proceeds at human speed while the algorithmic-progress clock (B-5, B-6) keeps ticking.

  For game design: this is a recurring dilemma. The player faces cards offering "faster safety progress at higher immediate risk" vs. "slower progress with lower immediate risk." Neither option is safe.
  [Anthropic] — AI-assisted alignment research; [MIRI] — rebuttal

- (23) Safety research doesn't scale by adding researchers. The work hits severe diminishing returns because it requires deep original thinking, not parallelizable labor. Adding more people leads to coordination overhead, duplicate work, and stepping on each other's toes. Estimated total work needed: >10,000 philosopher-years — but that's serial philosopher-years, not something you can divide among 10,000 philosophers working for one year each.
  <!-- Jörn's domain model §5 -->

**E. POLITICAL ECONOMY: Why maintaining the pause is hard**

The pause requires sustained global political will for decades. This section covers the forces that erode that will.

*Opinion dynamics:*

- (27) Public opinion on AI is best modeled as approximately 10 discrete opinion clusters, not as a continuous spectrum or a single "support" number.

  Why clusters, not a spectrum: people adopt internally-consistent packages of views. If someone believes ASI will kill their children, they also support aggressive enforcement, distrust AI companies, and vote for pro-pause candidates — the whole package comes together. This self-consistency means modeling opinion as a continuous dimension (e.g., "65% support the pause") misses the structure of how opinion actually works. A political event doesn't move "public support" up or down — it shifts people between clusters, and different clusters respond to different events.

  This has direct game design implications: resource bars tracking "public support" as a single number would misrepresent the dynamics. The game should somehow reflect that the agency faces several distinct audiences with different concerns, not one undifferentiated public.
  <!-- Jörn's modeling this session -->

- (29) Examples of opinion clusters: "my children will die if anyone builds ASI," "I deserve to be emperor of the galaxy," "this is really a surveillance state scheme," "ASI is physically impossible," "ASI will serve whoever builds it first," "AI is not a topic I think about." Each cluster has its own internal logic, its own political behavior, and its own triggers for changing.
  <!-- Jörn this session -->

- (43) The fraction of the population in each opinion cluster shifts over time — driven by real-world events, generational turnover, media coverage, and economic conditions. The political landscape the agency operates in is never stable.
  [surveys]

- (47) Political salience of AI risk varies enormously across decision-makers. Some politicians genuinely fear for their children's lives; others have never thought seriously about AI. Whether AI risk is "a thing people care about" in a given year determines whether the pause has political support that year.
  [surveys] — 73% support regulation, but salience varies; [IABIED] — "politicians who cannot speak freely"

- (48) Knowledge of AI risk is unevenly distributed. Many generals, media figures, and politicians either don't understand the technical risk or actively believe ASI is impossible. The agency must operate in a world where most decision-makers lack the background to evaluate whether its mission makes sense.
  [IABIED] — book ch13; [surveys] — scientists trusted most, AI company leadership trusted least

- (52) The agency's greatest success is indistinguishable from "the threat was never real." If enforcement works perfectly and no ASI gets built, there is no visible evidence that the danger was real. Critics will say: "See? It was all a hoax. Defund the agency."

  This is a deep structural problem, not just a PR challenge. The agency literally cannot demonstrate its own value through success — only through failure (which means everyone dies). The better the agency does its job, the stronger the political case for shutting it down. In game terms: long peaceful stretches should be politically dangerous for the player, not safe.
  <!-- Jörn this session -->

*Economic pressure:*

- (30) Two distinct mechanisms push people toward AI development:

  (a) **Short-term economic incentives** — AI makes money right now. Businesses want AI-augmented productivity, workers fear being left behind, investors want returns. These incentives operate on individual people making individual decisions, and they don't require anyone to want ASI specifically — just "more AI."
  (b) **Long-term strategic ambition** — nations or companies wanting to be first to achieve ASI for geopolitical or competitive dominance. These actors DO want ASI specifically, and they are willing to take existential risks to get there.

  Both mechanisms push against the pause, but they work on different timescales, affect different people, and require different responses from the agency.
  [IABIED] — "people who don't get the danger but get the benefits"

- (31) How strongly each mechanism operates on a given person depends on their situation (job, wealth, nationality), the current world state (recession vs. boom, war vs. peace), and which opinion cluster they belong to.
  <!-- Jörn this session -->

- (32) AI technology short of ASI is genuinely, enormously economically valuable. The pause restricts access to something that could generate massive wealth and productivity gains. This is not a strawman — the economic cost of the pause is real, and the agency's opponents are not wrong about the short-term economics.
  [AI-2027]; [Anthropic] — Amodei "machines of loving grace"

- (33) The economic arguments against the pause are legitimate in the short term: real people lose real income, real GDP growth is forgone, real competitive advantages are surrendered. The agency is imposing real, visible costs today to prevent an invisible risk tomorrow.
  [IABIED] — book ch13

- (34) The economic promise is itself a path to extinction: an AI system that generates enormous economic value does so by being very capable. If such a system is optimized hard enough for economic growth, it might recursively self-improve and cross the ASI threshold before anyone realizes what happened. The line between "profitable AI tool" and "world-ending ASI" may not be visible to anyone — including the people running the system — until it's too late.

  For game design: cards about economic AI success should carry hidden extinction risk. The player who approves a hugely profitable AI deployment might be approving humanity's last mistake.
  <!-- Jörn this session -->

- (35) The core rhetorical difficulty of the pause: "the thing you desperately want might kill literally everyone" is inherently hard to communicate, especially when the benefits are tangible and immediate (jobs, growth, medical breakthroughs) while the risk is abstract, probabilistic, and only materializes once (at which point nobody is alive to say "told you so").
  <!-- Jörn this session -->

- (51) Corporations lobby politicians by promising AI-driven economic growth, jobs, and competitive advantage as reelection pitches. Corporate economic interests are structurally and permanently opposed to the pause — this isn't a temporary political disagreement but a permanent feature of the post-pause world.
  [AI-2027]

*Political events and long-term drift:*

- (42) Elections can reverse the pause overnight. A new president, prime minister, or parliamentary majority may oppose the treaty, withdraw national support, or attempt to dissolve the agency. Real-world precedent: Trump rescinded Biden's AI executive order in 2025.
  [pol-statements]

- (44) The pause must hold for approximately 30 years (the estimated timescale for solving alignment, though this is deeply uncertain — see D-17). Thirty years is long enough for complete generational turnover: the politicians and public who originally supported the pause will be replaced by people who grew up taking AI for granted and have no personal memory of why the pause started.
  <!-- Jörn this session -->

- (45) [ILLUSTRATIVE — Jörn raised this as "the kind of sociological dynamic I can imagine having an effect," not as a specific high-confidence prediction. It was selected because it's a vivid example, which means it overstates the importance of the category it represents. See the epistemic status warning at the top of this section.]

  Generational counter-signaling: if the older generation is identified with the pro-pause position, younger people may adopt anti-pause stances purely for identity differentiation and political power, regardless of the merits.
  <!-- Jörn this session -->

*International dynamics:*

- (49) Geopolitics introduces game-theoretic threats: a nation could threaten to build ASI as leverage for unrelated concessions — effectively holding humanity hostage. Unlike nuclear MAD (where both sides have weapons and neither wants to use them), an ASI threat is omnicide: if carried out, everyone dies, including the threatener. This changes the game theory in ways that have no historical precedent.
  [AI-2027] — US-China dynamics; [IABIED] — treaty protective actions

*External events feeding back into opinion:*

- (53) During the pause, non-ASI AI harms materialize in the real world: open-weight models enable terrorist competency uplift, deepfakes erode institutional trust, automated cyberattacks proliferate. These harms are NOT ASI, but they shift opinion clusters in unpredictable directions. Some people conclude "AI is dangerous, strengthen the pause." Others conclude "the pause didn't prevent this, so it's pointless" or "this proves we need MORE AI for defense, not less."
  [AI-2027]; [IABIED] — non-ASI risks

- (54) Correctly interpreting how non-ASI AI incidents relate to the actual ASI risk requires rare technical expertise that most policymakers and most of the public do not have. Most people will draw incorrect conclusions from these events — overreacting (banning all AI including safety-critical tools) or underreacting (concluding ASI risk was exaggerated because the non-ASI harms were manageable).
  <!-- Jörn this session -->

- (56) AI technology continues diffusing through the economy during the pause. GPT-5-level systems spread into every industry, more people gain hands-on AI skills, and the social/economic landscape transforms. This single process feeds into multiple dynamics simultaneously: it strengthens economic arguments against the pause (E-32), shifts opinion clusters (E-27), and gives more people the technical knowledge to potentially attempt unauthorized training runs (B-3).
  [AI-2027]

- (57) Labor automation accelerates during the pause, and society develops firsthand experience with AI's capabilities and limitations. This lived experience — not expert arguments — shapes most people's opinions on whether the pause is worth its cost.
  [AI-2027]; [surveys]

- (58) Non-ASI AI incidents create unexpected political opportunities for the agency. Example: an AI-enabled terrorist attack triggers FBI/ISIA cooperation, which the agency can leverage for increased funding and political support. Crises that threaten the agency's mission can simultaneously be opportunities to strengthen it.
  <!-- Jörn this session -->

*Mechanisms of political action:*

- (50) Public opinion translates into political reality through concrete channels: street protests, elections, constituent calls to legislators, media campaigns, and corporate lobbying. Different opinion clusters use different channels (tech workers lobby; concerned parents protest; corporations make donations). The agency must navigate all of these simultaneously.
  [surveys]; [pol-statements]

- (62) [ILLUSTRATIVE — example of the corporate hypocrisy pattern, not a prediction about NVIDIA specifically.] Corporations often publicly signal one position while privately doing the opposite. Pattern: company publicly supports the pause (or opposes China) for PR, while privately lobbying against enforcement, selling restricted technology, and making political donations to weaken the treaty.
  <!-- Jörn this session -->

**F. INSTITUTIONAL: How the agency itself can fail**

The ISIA is a human institution subject to all standard failure modes of large organizations, plus some unique to its unusual mission.

- (36) Institutional fragility: it is far easier to destroy a functioning institution than to build one or repair a broken one. The agency can be wrecked in months by political sabotage; rebuilding it from scratch would take years and might never fully succeed.
  <!-- Jörn this session -->

- (37) The agency exists at the discretion of politicians. A single head of state with sufficient political support could dissolve or defund the agency, and there may be no mechanism to prevent this.
  <!-- Jörn this session -->

- (38) Short of dissolution, the agency can be rendered ineffective by replacing competent leadership and staff with political appointees who don't believe in the mission or lack the expertise to execute it.
  <!-- Jörn this session -->

- (39) Standard large-organization pathologies apply: internal corruption, regulatory capture (the agency starts protecting the interests of AI companies instead of regulating them), bureaucratic inertia, and empire-building.
  <!-- Jörn this session -->

- (40) The agency has an unusual internal problem not seen in most organizations: it will contain employees from radically different opinion clusters (see E-27) who profoundly disagree about the agency's core mission. This isn't the normal workplace disagreement about strategy or priorities — it's people who genuinely believe the mission is saving humanity working alongside people who think the mission is a hoax, a power grab, or a tragic mistake. In most organizations, employees at least agree on what they're trying to do. In this agency, they don't.

  This creates scenarios where employees sabotage the agency from within — not out of corruption, but out of sincere belief that the agency is wrong.
  <!-- Jörn this session -->

- (41) Individual employees can sabotage international cooperation from within. Example: a China hawk inside the agency undermines negotiations with China because they personally believe cooperation with China is a mistake, regardless of official agency policy. The agency's external relationships are vulnerable to its internal disagreements.
  <!-- Jörn this session -->

- (46) [CALIBRATION NOTE — useful for game designers gauging how realistic to make scenarios, not a dynamic the game teaches directly.] Historical parallels help calibrate the difficulty. WW2 shows major-power cooperation on existential threats is possible. The Cold War shows humanity can sustain serious focus on an existential-scale issue for decades. However, nuclear weapons had fewer local economic incentives to proliferate (no company could profit from selling nukes the way companies profit from selling AI) and the underlying science was less alien to the public.
  <!-- Jörn this session -->

- (65) Over the ~30-year timescale of the pause, generational, cultural, and political noise accumulates to roughly the same magnitude as the total change since WW2. The agency must survive this much unpredictable turbulence while maintaining its mission.
  <!-- Jörn this session -->

**G. SCOPE CONSTRAINTS AND DESIGN NOTES**

These are not dynamics about the world — they are rules and notes for game designers and card writers.

- (64) The game starts after a global pause is already established. The player does not need to achieve the pause — at least some world leaders already took ASI risk seriously enough to ratify a treaty. Don't model the pre-pause world.

- (63) "Race to the bottom" dynamics — where nations compete to have the weakest AI regulation in order to attract industry — are NOT relevant in the post-pause world. The international treaty that established the pause set a global regulatory floor, eliminating the incentive to undercut. The relevant post-pause dynamic is nations wanting to *secretly violate* the treaty (see B, C), not nations openly weakening their own rules.

- (G1) The deep uncertainty about how hard alignment is (see D-17) can be simplified for game purposes. Jörn is willing to sacrifice precision on this point. The game does not need to accurately represent the full range of possible difficulty.

- (G2) Teaching the player which chip supply chain chokepoints matter (see C-11) and why controlling them is the key to enforcement is a worthwhile learning goal for the game.

## Step 2: Design game elements to serve the dynamics

Once we know the dynamics, derive:
- **Bars** — each bar represents a tension the player manages. Chosen to make the dynamics emerge from gameplay.
- **Deaths** — each death teaches a dynamic the player failed to navigate. The death message is the pedagogical payoff.
- **Characters** — each character embodies a force in the dynamics.
- **Cards** — each card is a concrete example where dynamics play out.

The number of bars, which dimensions they represent, what characters exist — all follow from the dynamics.

## Step 3: Write content (incremental)

Cards, death messages, character details — grounded in the dynamics from Step 1 and game elements from Step 2.

**Existing resources:**
- Card-writing guide: `src/data/card-writing-guide.md`
- Literature findings: `src/data/literature-findings.md`
- Domain model: `src/data/domain-model.md`

## Step 4: Win condition

What does "winning" look like? Must convey: "with a pause we can survive superintelligence... if nothing goes wrong and a lot goes right."

Can be deferred until the core loop feels right. The dynamics from Step 1 will constrain what a win condition can be.

## Step 5: Learning design and interval mechanics

Implement interval-learning, replay value, don't-punish-carelessness. Depends on having enough content to playtest (Step 3).

## Unresolved Questions (require Jörn's input)

1. **Abstract dynamics list** (Step 1 — Jörn reviewing hierarchy above.)
2. **Win condition:** Deferred but constrained by Step 1.
3. **Virality/memeification:** Design question, no plan yet.
4. **Survival rate:** Open design choice. Not specified yet.
5. **AI diffusion:** Separate dynamic or subsumed by threat model + opinion clusters? (Jörn flagged as open question)
