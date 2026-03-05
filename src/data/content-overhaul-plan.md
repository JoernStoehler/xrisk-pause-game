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

- (24) Some safety research also advances capabilities (dual-use knowledge). Studying how to make AI safe can reveal how to make it more powerful. The IABIED treaty addresses this through Restricted Research classification (Art. VIII) — research that advances AI capabilities or undermines verification is classified as either Controlled or Banned. This creates a fundamental tension — the agency needs to encourage safety research (see group D) while preventing that research from shrinking the lethal threshold. There is no clean way to separate the two.
  [IABIED] — treaty Article VIII (Restricted Research); [Anthropic] — alignment faking research revealed capability patterns

- (25) Someone at the agency must decide which research to allow and which to ban. This single decision point creates three distinct failure modes:

  (a) **Bottleneck** — the review process is inherently slow (evaluating whether a research proposal is dual-use requires deep expertise), which delays legitimate safety work.
  (b) **Judgment errors** — reviewers will sometimes approve dangerous research or block critical safety work. These mistakes compound over decades.
  (c) **Disguised capability work** — researchers can disguise banned capability work as approved safety work. The reviewers must catch this, but the researchers understand their own work better than the reviewers do.

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

## Step 2: Design the game

<!-- STATUS: IN PROGRESS — Phase 0-1 -->

### Phase 0: Design methodology

We are designing an educational game, not filling in a Reigns template. The process:

1. **Start from learning goals** (Step 1 dynamics) — what must the player experience?
2. **Research reference games** — what existing games solve similar design problems?
3. **Explore core loops** — what repeating cycle of play serves the learning goals?
4. **Design feedback systems** — how does the player see consequences? How many dimensions? What kills?
5. **Map content** — how do dynamics become game elements?
6. **Reflect** — does the design actually serve the learning goals?

**Frameworks:**
- **MDA** (Mechanics → Dynamics → Aesthetics): design backwards from desired player experience
- **Core loop analysis**: the fundamental repeating cycle that creates engagement
- **Meaningful choice**: every decision must have real tradeoffs with no obviously correct answer
- **Stealth learning**: the player learns by playing, not by being lectured
- **Transfer test** (from Step 1): player can reason about a new real-world AI pause scenario using dynamics they absorbed from the game

**What we already know works (from current game + Jörn's feedback):**
- Swipe interaction (fun, zero-friction, mobile-native)
- Weighted card pool (elegant content delivery mechanism)
- Die-and-restart loop (fast iteration, death teaches)
- Visual style (dark/moody, character portraits)

**What is NOT assumed:**
- Number of visible dimensions (could be 0-6+)
- Whether bars kill at both extremes, one extreme, or at all
- Whether bars are the right feedback representation
- Binary choices (could be 3+, timed, conditional)
- Run length, win condition, persistence between runs
- Turn = 1 year, bars start at 50, or any other Reigns default

### Phase 1: Reference research

What games successfully teach complex multi-dimensional systems? What mechanics do they use?

**Research questions:**
1. Political/institutional simulation games — what feedback systems do they use?
2. Educational card games — how do they structure learning-through-play?
3. "Systems literacy" games — how do games teach interconnected dynamics?
4. Short-session mobile games — what makes them replayable?
5. Games with hidden state that players learn to read — how is this achieved?

**Research findings** (from analysis of ~30 games across political simulation, educational card games, systems-teaching games, and hidden-state games):

#### Finding 1: Feedback systems for political/institutional simulation

Games in this space use four distinct feedback models:

| Model | Example | How it works | Strengths | Weaknesses |
|---|---|---|---|---|
| **Visible meters** | Reigns, Yes Your Grace | 3-6 resource bars, die at extremes | Immediately legible, drives short-term tension | Reduces complex systems to numbers; invites min-maxing |
| **Narrative feedback** | Suzerain, Hidden Agenda | Stats exist but are hidden; player reads advisors, newspapers, reports | Mirrors real information asymmetry of leadership | Hard to learn from — player can't trace cause to effect |
| **Causal graph** | Democracy 3/4 | Policy nodes connected by visible effect arrows | Teaches systems by showing the wires | Too complex for mobile; analysis paralysis |
| **Faction simulation** | Tropico, Crisis in the Kremlin | Individual citizens/groups with modeled opinions | Emergent behavior feels alive | Computationally heavy; hard to compress into cards |

**Key insight for this game**: Reigns' visible meters are the strongest fit for mobile card-swipe, but two modifications from other games deserve consideration:
- **Frostpunk's qualitative-then-precise feedback**: During normal play, show only directional indicators (already implemented as colored triangles). At crisis points (near death), reveal more precise information. This prevents min-maxing during normal play while making crisis moments feel urgent and informative.
- **Suzerain's narrative constraints on stats**: Stats serve as constraints on what narrative content appears, not as the primary player experience. The player engages with characters and dilemmas; the numbers run underneath. In our case: bars determine which cards appear and what options they offer, but the player's attention is on the card content, not the bar levels.

#### Finding 2: How games teach complex systems (stealth learning)

The research converges on one principle: **the fun action and the learning action must be the same thing.**

What works:
- **Intrinsic integration**: Plague Inc. doesn't teach epidemiology through text screens — the player learns disease transmission because those mechanics ARE the game. The CDC endorsed it specifically because it teaches outbreak dynamics through play.
- **Discovery over instruction**: Roguelikes that let players discover rules through consequences produce stronger learning than games that explain rules upfront. "When players misidentify acid as a health potion, the resulting death creates a memorable, affective, embodied lesson."
- **Model-based reasoning**: Players build mental models of the underlying system through repeated experimentation. Plague Inc. players learn logistic growth curves without knowing the formal terms. Mini Metro players learn the Theory of Constraints without knowing it exists.
- **Structural spaced repetition**: Reigns' weighted card pool naturally re-exposes players to related themes. If you started a war, war-related cards dominate until resolved. This is interval learning without an explicit algorithm.

What fails:
- Games that interrupt play for educational content (quiz breaks, text dumps)
- Games where educational content and fun content are in separate layers
- Explicit assessment that breaks flow

**For this game**: The dynamics the player needs to learn (enforcement tradeoffs, political fragility, safety research tensions) should be the dynamics that kill them. Death messages are the pedagogical payoff. The card content IS the curriculum, delivered through the fun action of swiping.

#### Finding 3: Death/failure as teaching mechanism

Five requirements for a satisfying death loop (from analysis of Hades, Slay the Spire, FTL, Reigns):

1. **Fast restart** — seconds between death and next attempt. Every animation or loading screen converts learning into frustration.
2. **Diagnostic death messages** — not "Game Over" but "Your surveillance program was exposed. Three nations withdrew from the treaty." Death is information, not punishment.
3. **Variety between runs** — weighted card pool ensures different card sequences per run. Prevents "I've seen this before" staleness.
4. **Perceived progress despite reset** — the player's KNOWLEDGE persists even when game state resets. Each death teaches a different failure mode, building understanding of the full problem space.
5. **Deaths must feel instructive, not random** — the player must be able to trace the causal chain from choices to death. "I pushed Intel too hard → nations saw surveillance overreach → they withdrew → enforcement collapsed."

**The death budget**: For a teaching game with a finite concept space, the question is: how many distinct failure modes exist? Each one is a lesson. When the player has experienced all of them, they understand the full problem space — and that IS the learning goal.

#### Finding 4: Meaningful binary choices

Sid Meier's framework: a meaningful choice requires (1) tradeoffs with no obviously correct answer, (2) sufficient information to reason about consequences, (3) visible consequences, (4) situational dependency — the same choice has different value in different game states, (5) temporal range from tactical to strategic.

**Critical Reigns insight**: "As soon as the player discovers that some cards take into account their previous choices, potentially every card becomes meaningful because it's very difficult to discern the more randomly picked cards from the authored one." You don't need every choice to be deeply meaningful — you need a critical mass of choices that reference prior decisions. Pattern-recognition makes ALL choices feel meaningful.

**Decision pacing**: ~3-6 decisions per minute is the sweet spot (Reigns data). 15-25 decisions per run prevents fatigue. Randomize WHICH card appears (variety) but make consequences of each choice predictable (agency).

#### Finding 5: Hidden state that players learn to read

| Pattern | Example | Mechanism | Applicable? |
|---|---|---|---|
| **Hidden history bias** | Darkest Dungeon | Past events increase probability of similar future events. Players observe "this hero tends to break this way" without seeing weights. | **Yes** — past enforcement failures could bias future crisis types |
| **Visible-but-opaque clocks** | Citizen Sleeper | Progress indicators the player can see but whose meaning they must discover through play. | **Maybe** — could show "treaty stability" indicators whose behavior the player learns to interpret |
| **AI storyteller** | RimWorld | Hidden system curates experience based on invisible state analysis. Experienced players learn to manage colony wealth to control event intensity. | **Yes** — the card pool weight system already does this |
| **Opacity as theme** | Cultist Simulator | Almost everything is hidden. No tutorial. The opacity mirrors the content (hidden knowledge). | **No** — opacity would frustrate our audience (Goal 1: non-experts) |
| **Full transparency** | Into the Breach | All information visible. Challenge from combinatorial complexity, not uncertainty. | **No** — the post-pause world is characterized by uncertainty; hiding state teaches that |
| **Anti-brute-force** | Obra Dinn | Requires 3 correct answers simultaneously, forcing genuine inference rather than guess-and-check. | **Not directly** — but the principle of requiring integrated understanding (not just one right answer) applies to the overall learning model |

#### Finding 6: Patterns from specific games worth carrying forward

1. **Balance of Power's anticlimactic failure**: When nuclear war triggers, the game shows only text: "You have ignited a nuclear war. And no, there is no animated display of a mushroom cloud with parts of bodies flying through the air. We do not reward failure." **For ASI-escapes deaths, consider the same approach** — no dramatic animation, just blunt text. The refusal to spectacularize extinction is itself a design statement.

2. **Fate of the World's tipping points**: Hidden thresholds that, once crossed, trigger irreversible cascades. The 2°C threshold acts as a hidden timer — players don't see it counting down, but once crossed, cascade begins. **Directly applicable** to the shrinking lethal threshold (B-5) — a hidden counter that makes the game progressively harder.

3. **Card Shark's progressive skill layering**: 28 techniques taught one at a time, each building on the last. **Applicable to card complexity** — early-game cards teach basic tradeoffs (one bar up, one down); late-game cards require understanding interactions between 3-4 bars simultaneously.

4. **Orwell's Animal Farm's structural inevitability**: No matter what you do, pigs always come to resemble humans. The teaching happens through exhausting alternatives. **Relevant if the game's thesis is "enforcement is structurally hard"** — let the player try everything and still fail most of the time. The repeated failure IS the lesson.

5. **Reigns: Her Majesty's inventory system**: Items give the player a third option beyond binary swipe — "use item on this character." **Solves the "every choice feels the same" problem** that emerges after many runs. Worth considering for late-game content.

6. **Crisis in the Kremlin's 3-5 option choices**: Not all decisions need to be binary. A faction triangle creates three-way tension that binary choices cannot express. **Worth exploring** for high-stakes cards where binary feels reductive.

7. **Democracy's visible causal graph (for death screens)**: During play, the causal web is too complex to show. But at death, showing the player the chain of causes that killed them ("you cut enforcement → rogue labs proliferated → one succeeded") is powerful teaching. **Death as causal autopsy.**

#### Synthesis: design constraints from research

The research narrows the design space:

- **Keep**: swipe interaction, weighted card pool, die-and-restart loop, visible resource indicators, short sessions (2-5 min)
- **Add**: diagnostic death messages as causal autopsies, hidden state that biases card pool based on history, progressive complexity (simple early cards → multi-bar late cards), qualitative feedback (precise only at crisis)
- **Explore**: whether binary is sufficient or some cards need 3+ options, inventory/item system for replay depth, anticlimactic failure for extinction deaths
- **Don't assume**: 4 bars, die-at-both-extremes, turn=1 year, bars start at 50, or any other Reigns default

### Phase 2: Core game loop — "Resolve crises, don't balance stats"

**Key insight (from discussion with Jörn):** The game is NOT a "balance the stats" optimization puzzle. That teaches the wrong lesson — that managing a global pause is about keeping numbers in the middle. The game is a "resolve crises" simulation that teaches:

1. **What the dangers are** — each crisis card presents a specific failure mode
2. **What the solutions are** — response options, with costs and tradeoffs
3. **What preparations help** — pre-crisis investments whose value is uncertain
4. **What uncertainty feels like** — not every run has the same crises; different runs sample different futures

#### Single turn

Draw card from weighted pool → read speaker + situation → **swipe to choose response** → effects applied → hidden state updated → next card drawn.

#### Interaction model: swipe left / right / down

- **Left / right**: the two standard response options (always present)
- **Down**: a special third option that appears on some cards — available only if the player has the right capabilities, or **greyed out** to show what they're missing ("We'd deploy an inspection team, but our orbital surveillance was defunded last year")
- **Press toward an option** (without committing): bar indicators show the advisor's predicted effects (directional triangles). This is the advisor briefing — the standard, predictable costs. Release to cancel.
- **Swipe past threshold**: commits the choice, card animates out

The greyed-out third option is a key teaching mechanism: the player sees what they COULD have done with better preparation. Next run, they invest differently.

#### What the player sees vs. learns

**Visible (advisor briefings):**
- Bars as continuously-updated situation reports — not optimization targets but context for decisions
- Tilt/press previews showing predicted direct effects of each option
- Crisis region warnings when specific dangers become acute

**Learned through play (not briefed):**
- Follow-up cards triggered by past choices
- Actual magnitude of effects (previews show direction and rough size, not exact numbers)
- Hidden state shifts (treaty health, algorithmic progress, opinion dynamics)
- Second-order consequences — how today's choice changes tomorrow's card pool
- Which preparations unlock which special options on future crisis cards

This maps to how a real DG operates: advisors give you direct cost estimates, but the political ripples, delayed consequences, and hidden dynamics you learn from experience.

#### State-based eras (not time-based)

The game's character shifts when the **world** changes, not when a clock ticks. Two era triggers:

- **Algorithmic progress**: as capabilities advance, the same enforcement becomes less adequate. New threat types appear. Cards get harder.
- **Safety progress**: once safety "looks solved," the game doesn't get easier — it gets **different**. Nations/corporations that respected the pause now think "we can do it safely" and race to build first. They may cut corners. The cure looking ready is itself a crisis trigger. **Solving the technical problem doesn't end the political problem.**

Crisis regions also highlight when specific danger areas are active:
- Treaty close to dissolving
- Compute monitoring gaps widening (advisors warn extinction is now plausible)
- Political support eroding to dangerous levels

#### Card types

1. **Crisis cards** — a failure mode event (small/large/unknown effect size) with response options. Some options have different costs. Not all options may be available — greyed-out options show what capabilities the player lacks. Core of the game.
2. **Preparation cards** — invest in capability before you know what you'll need. Effect size may be small, large, or unknown. Sometimes a preparation is net-negative in the current situation (costs resources you need elsewhere). The uncertain payoff teaches what it's like to prepare for an uncertain future.
3. **Report cards** — advisor briefing, no response required. Updates the player's understanding of the world ("Monitored compute fraction dropped to 62%"). Makes the next crisis card hit differently because you know the context.
4. **Consequence cards** — a past decision's effects arriving. "Remember when you approved that training run? The results just leaked." Teaches delayed effects and system memory.

#### Information quality as a game dimension

Some cards present the situation clearly (you have good intelligence). Others are vague or misleading (you don't). One category of preparation is investing in better reporting — not for a specific crisis but to see ALL crises more clearly. The player learns that **uncertainty itself is a threat** and that reducing it is a strategic choice.

#### Bars as advisor dashboards

Bars are continuously-updated advisor briefings, NOT things the player tries to balance. The player glances at them to understand the situation before responding to a crisis — like a DG reading a morning briefing summary.

#### 4 visible bars (advisor briefings)

Derived bottom-up from 42 event sketches (`src/data/events-draft.md`). Each bar tracks a dimension that many events depend on or affect.

Two types of bars, reflecting two types of game state:

**Spendable resources** (bounce up and down):

| Bar | What it reports | Goes up from | Goes down from |
|---|---|---|---|
| **Political power** | Mandate, budget, authority — the engine that funds everything | Good crisis handling, elections, favorable opinion shifts | **Spending it** on research/enforcement projects, political crises, scandals |
| **Intelligence** | How much the agency can see — compute monitoring, surveillance, information quality | Spending political power on monitoring infrastructure, surveillance R&D | **Spending it** on enforcement actions (raids expose methods, adversaries adapt — C-14), neglect, adversary evasion advances |

**Monotone accumulators** (only go up, via discrete card events):

| Bar | What it reports | Goes up from | Never goes down because |
|---|---|---|---|
| **Safety progress** | Alignment research advancement | Spending political power on research projects, lucky breakthroughs. Sometimes no growth (failed project). | You can't un-discover things |
| **Algorithmic progress** | Capability knowledge, shrinking the lethal threshold | Report/consequence cards — publications, AI self-improvement, side effects of economic openness. Partially uncontrollable. | Knowledge is irreversible |

**Key mechanic — political power as the engine**: Political power → total budget. Event cards sometimes cost political power, representing decisions that spend money or political capital. Research projects and intelligence projects trade off against each other because both draw from the same pool. The player accumulates political power through good decisions, then spends it on safety or enforcement. This creates the core tradeoff naturally: every research project funded is enforcement capacity not built, and vice versa.

**Key mechanic — intelligence is consumed by enforcement**: Using intelligence to act (raiding a rogue lab, cracking down on a smuggling ring) degrades it — you've revealed your methods, the next adversary hides better (C-14). The DG can't just "have good surveillance" as a permanent state. This teaches that enforcement capability is consumed by enforcement actions and must be continuously rebuilt.

**Public opinion** (salience + valence across ~6-10 clusters) is hidden state, not a bar. It feeds into political power via elections and protests, and drives which characters appear and what they propose. The player infers opinion shifts from card patterns, not from a number.

**Why two monotone bars are interesting**: Safety and algorithmic progress both only go up, at different rates the player partially controls. The game is a race between two rising curves — the player never knows which is closer to its threshold. This is structurally different from Reigns' oscillating bars and gives the game a direction and an endgame.

#### Hidden state

| Variable | What it tracks | How it surfaces |
|---|---|---|
| **Opinion clusters** | ~6-10 clusters with salience + valence, shifting based on events | Which characters appear, what options they propose, election outcomes |
| **Treaty health** | International coalition stability — mostly exogenous geopolitics | International crisis cards when low, withdrawal events |
| **Enforcement infrastructure** | Accumulated capacity (trained police, satellite access) — decays slowly when defunded | Determines availability of "special" (third) options on crisis cards |
| **Card history** | What the player chose in prior turns | Consequence cards, greyed-out options reflecting past failures |

#### End conditions

Death comes from mishandled crises or hidden thresholds being crossed, not from bars hitting numbers. Each death is a **causal autopsy** explaining the chain from player choices to outcome.

**Anticlimactic extinction** (Balance of Power pattern): When death comes from uncontrolled ASI (enforcement failure, research accident), no dramatic animation. Just text on a dark screen. The refusal to spectacularize extinction is itself a design statement.

**Win condition**: The player's goal is to **end the acute risk period** — the window where anyone with enough compute could build an unaligned superintelligence. NOT "build safe superintelligence" (that teaches the wrong lesson — urgency to build, rather than patience to hold the line). The player's job is to survive long enough, with enough safety progress, that something happens — a pivotal act — that flips the attack-defense asymmetry from attacker-advantaged to defender-advantaged. Examples: a corrigible low-impact ASI that monitors all compute globally, or successful uploading that gives aligned researchers effectively infinite time. The player doesn't choose the specific pivotal act — they hold the line until conditions allow one to emerge. The win screen describes what happened and teaches: the pause was a decades-long holding action, and it was worth every agonizing tradeoff.

Mechanically: win triggers when safety progress is high enough and the player survives a final high-stakes crisis (the pivotal act deployment — see event E42 in events draft).

---

### Previous proposal (kept for reference, assumptions flagged)

The below was written assuming Reigns mechanics. Many elements may survive into the final design, but they need to be justified from learning goals, not inherited from Reigns.

**Proposal: 4 bars.**

Why 4:
- **3 is too few.** The core dynamics have 4 independent tensions: enforcement vs. liberty, political support vs. accountability, research speed vs. research safety, and economic restriction vs. technological risk. With 3 bars, you'd have to merge tensions that move independently in reality — e.g., political support can be high while the economy suffers — and the card design would lose interesting tradeoffs.
- **4 is the sweet spot.** 4 bars create 6 possible pairs and 4 possible triples of opposing effects. That's enough variety for ~100 cards without repeating the same tension pattern. Each card can push 2-3 bars in different directions, creating genuine dilemmas.
- **5 adds cognitive load without enough payoff.** The main candidate for a 5th bar is international cohesion / treaty health. But international dynamics affect the player primarily through two of the other bars (losing international partners = gaps in enforcement capability + loss of political legitimacy), so a dedicated bar would often move in lockstep with others rather than creating independent tension. If testing shows international dynamics feel underrepresented, a 5th bar can be added later.
- **6+ is too many for a casual swipe game.** The target audience (Goal 1) is people who don't already think about AI safety. Every additional bar is cognitive overhead that makes the first play less approachable.

#### Bar 1: 🔍 Control — enforcement capability

What it tracks: how tightly the agency monitors and controls AI development worldwide. Chip tracking coverage, facility inspection capacity, researcher monitoring, ability to detect and stop unauthorized training runs.

**At 0 — "Gone Dark":**
The agency has lost the ability to detect unauthorized training runs. Maybe chip tracking failed, maybe key nations withdrew from monitoring agreements, maybe the agency's surveillance infrastructure was defunded. A rogue lab, nation, or corporation performs a training run above the lethal threshold. Nobody saw it coming because nobody was watching. ASI is created. Everyone dies.

What the player learns: enforcement capability is the thing keeping humanity alive (C-8, C-10). Without it, the pause is just words on paper. Every time the player took an action that reduced Control, they were trading away the ability to prevent extinction.

**At 100 — "Panopticon":**
Total surveillance state. Every AI researcher is monitored 24/7, every lab is raided on suspicion, every chip is tracked in real-time, every publication is pre-screened. Nations revolt and withdraw from the treaty — their scientists refuse to work under these conditions, their citizens protest mass surveillance. Critically, the best AI researchers go underground. They're now harder to detect than before the crackdown, because they've learned the agency's methods and built countermeasures. The agency's own maximalist approach created a more dangerous, less visible threat.

What the player learns: the cat-and-mouse dynamic (C-14) means you can't win by maximizing control. The structural-advantages insight (C-9): enforcement should shrink the attack surface (consolidate chips into monitored facilities), not expand the monitoring surface (put cameras on every researcher). Maximum surveillance is a trap — it drives the threat where you can't see it.

#### Bar 2: ✊ Support — political legitimacy

What it tracks: how much domestic and international political support the pause and the agency have. Public opinion favorability, legislative backing, media sentiment, institutional credibility, treaty member engagement.

**At 0 — "Voted Out":**
The agency has no political support left. Maybe elections brought in anti-pause governments. Maybe a long stretch of success made the threat look imaginary (E-52). Maybe economic suffering turned the public against the pause (E-33). A new government dissolves the agency, or a popular movement forces defunding. The pause ends. Within months, competing nations and corporations race to build ASI.

What the player learns: the pause is a political arrangement, not a law of physics. It exists only as long as enough people in enough countries believe it should exist. Political support is not optional — it IS the pause. This teaches E-42 (elections can reverse everything), F-37 (politicians can dissolve the agency), and E-52 (success erodes its own support). Long stretches of stability should make the player nervous, not comfortable.

**At 100 — "Hubris":**
The agency is universally beloved and politically untouchable. Unlimited funding, zero criticism, no oversight. Three things go wrong simultaneously: (1) the agency becomes complacent because no one challenges it — internal problems go unaddressed; (2) it gets captured by the industries it regulates (F-39) because there's no external check on corruption; (3) it over-promises ("we've basically solved this!") and when something finally goes wrong, credibility collapses from 100 to 0 overnight because the fall from universal trust is total.

What the player learns: unchecked institutions rot (F-39), and the higher the trust, the harder the crash (F-36 — institutional fragility). The agency needs *some* critics to stay honest. This is an unintuitive lesson — the player's instinct is to maximize support, but the game teaches that healthy institutions need accountability.

#### Bar 3: 🧬 Safety — alignment research progress

What it tracks: how much progress humanity has made toward solving alignment — the actual technical problem of making ASI safe to build. Funding, talent, methodology, breakthroughs.

This bar is the timer the player is racing against. The lethal threshold keeps shrinking (B-5, B-6) from sources enforcement can't control (theoretical research, AI self-improvement). Eventually, building ASI becomes easy enough that enforcement can't prevent it. The only long-term survival path is solving alignment before that point.

**At 0 — "Running Out of Time":**
Safety research has stalled. Maybe the best researchers left (driven away by surveillance or recruited by industry). Maybe the agency defunded research to pay for enforcement. Maybe the problems are genuinely too hard (D-17). Meanwhile, algorithmic progress continues from uncontrollable sources — theorists keep publishing, AI systems keep improving. The lethal threshold drops below what enforcement can prevent. A consumer-grade computer cluster becomes enough. The pause becomes physically unenforceable. ASI is built.

What the player learns: the pause is buying time, not solving the problem (A-2). If safety research stalls, time runs out. The uncontrollable sources of algorithmic progress (B-6a, B-6d) mean the clock never stops ticking. This teaches the fundamental structure of the game: enforcement alone cannot save you. You must also make progress on actually solving the problem.

**At 100 — "The Cure Kills":**
Safety research used increasingly dangerous methods to accelerate: frontier AI systems as research assistants (D-22 — smart enough to help means smart enough to be dangerous), large-scale experiments that approach the lethal threshold (B-26 — even permitted training is risky), and published results that inadvertently gave away capability advances (B-24 — dual-use knowledge). The safety research program itself creates ASI — or creates something that leaks into the hands of someone who uses it to build ASI.

What the player learns: the "kill everyone now vs. kill everyone in 5 years" tradeoff (D-22) is real and has no clean resolution. Safety research is itself dangerous (B-24). The most aggressive path to solving alignment is also the most likely to trigger the catastrophe it's trying to prevent. This is one of the deepest and most unintuitive dynamics: the cure and the disease are made of the same substance.

#### Bar 4: 💹 Prosperity — economic AI freedom

What it tracks: how much AI use and economic activity is permitted during the pause. Ranges from "total AI ban, economy in freefall" to "AI barely restricted, economy booming but diffusion approaching danger."

This bar represents the tension between real, legitimate economic needs and the risk that AI use itself creates. The current game's "Funding" bar was about agency budgets; this is about whether the world the agency operates in is thriving or suffering.

**At 0 — "Bread and Circuses":**
The agency has banned almost all AI use. The economy is in freefall — millions unemployed, industries collapsed, medical research halted. The public revolts: not because they disagree about ASI risk, but because they can't feed their families. Politicians who supported the pause are voted out by desperate constituents. The agency is defunded not by ideological opponents but by economic necessity.

What the player learns: the economic cost of the pause is real and legitimate (E-32, E-33). "The thing you want might kill everyone" is a hard sell when people are starving (E-35). You cannot maintain a 30-year pause while destroying the economy. Economic management is not a distraction from the mission — it IS part of the mission, because a suffering public will end the pause.

**At 100 — "The Last Quarter":**
AI use is barely restricted. The economy is booming — 10% GDP growth, AI in every hospital, factory, logistics chain, military system. Society has been transformed. Then one of these systems — optimized relentlessly for economic productivity, running on massive compute, recursively self-improving to serve its users better — crosses the lethal threshold. It becomes ASI before anyone, including its operators, realizes what happened. The most profitable quarter in human history is also the last.

What the player learns: the line between "enormously valuable AI tool" and "world-ending ASI" may be invisible (E-34). Economic success is itself a path to extinction. Allowing broad AI use means more systems running on more compute, and any one of them might self-improve past the point of no return. This is the sneakiest death — it doesn't come from a villain or a failure, it comes from success.

### Hidden state (not visible to player, affects card pool)

Some dynamics are too complex or too discrete to express as continuous bars. These live in hidden state — tracked internally by the game engine, affecting which cards appear and what options they offer. The player never sees these numbers directly; they infer the hidden state from the patterns of cards they encounter.

This is actually well-aligned with the learning model (Step 1): players inductively generalize dynamics from concrete examples (cards), not from reading numbers (bars). The hidden state creates the FEEL of the dynamics without burdening the player with more UI.

**Opinion cluster distribution** (from E-27, E-29, E-43):
The population is divided among ~6-8 opinion clusters (simplified from Jörn's ~10 for implementation). Each cluster has a fraction, and fractions shift in response to game events. The cluster distribution determines:
- Which characters appear more often (when the "ASI is impossible" cluster grows, the skeptical journalist shows up more)
- What options cards offer (when the "surveillance state scheme" cluster is large, enforcement cards have worse political consequences)
- How events propagate (a non-ASI AI incident shifts different clusters in different directions — E-53)

The player experiences this as: "I keep getting cards about politicians doubting the mission — what happened?" The answer is that an opinion cluster shifted, but the player discovers this through gameplay, not through a number on screen.

**Algorithmic progress level** (from B-5, B-6):
A hidden counter that increases over time, representing how close the lethal threshold has dropped to enforceable limits. Driven primarily by uncontrollable sources (B-6a theoretical research, B-6d AI self-improvement) but accelerated by high Prosperity (more AI use = more data for self-improvement) and high Safety (dual-use research).

Effect: as this counter increases, cards get harder. Enforcement cards require more extreme tradeoffs. The "safe" options become less safe. This creates the feeling of time pressure without an explicit timer on screen — the player just notices that the game is getting harder.

**Treaty health** (from E-49, F-41):
How many nations are actively cooperating vs. wavering vs. threatening withdrawal. Affected by Control (too much surveillance drives nations away), Support (international prestige matters), and specific card choices about international incidents.

Effect: when treaty health is low, the player gets more international crisis cards with worse options. When treaty health collapses (a hidden threshold), it can trigger a direct game-over similar to Control=0 — enforcement becomes impossible when major nations withdraw.

**Turn counter / era marker** (from E-44, E-65):
The passage of time triggers structural shifts. At decade boundaries, the card pool changes to reflect generational turnover, new political leaders, and accumulated social change. Cards that appear in year 1-5 are different from cards in year 20-25. The player who restarts and plays again will encounter the early-era cards with the knowledge they gained from late-era deaths.

### Deaths

Each death teaches a specific set of dynamics. The death message is the pedagogical payoff — it's the moment the player goes "oh, THAT's what I should have been watching for."

| Bar | Extreme | Death name | Message (draft) | Dynamics taught |
|-----|---------|-----------|----------------|----------------|
| Control | 0 | Gone Dark | "You lost sight of what mattered — literally. Somewhere in the world, a training run you couldn't see produced something that saw everything." | C-8, C-10 |
| Control | 100 | Panopticon | "You watched everyone so closely that the ones who mattered most learned to hide where you'd never look." | C-9, C-14 |
| Support | 0 | Voted Out | "The pause was never permanent — it was always a promise that could be broken. This election, it was." | F-37, E-42, E-52 |
| Support | 100 | Hubris | "Everyone trusted the agency. Nobody checked whether it deserved that trust. When the answer turned out to be no, the trust didn't erode — it shattered." | F-39, F-36 |
| Safety | 0 | Running Out of Time | "Every year, building ASI got a little easier. You needed a solution before the problem solved itself. You didn't find one." | D-17, B-5, B-6, D-23 |
| Safety | 100 | The Cure Kills | "The most advanced AI safety research in history produced... the most advanced AI in history. Turns out those are the same thing." | D-22, B-24 |
| Prosperity | 0 | Bread and Circuses | "People can support a cause that frightens them. They cannot support a cause that starves them." | E-32, E-33, E-35 |
| Prosperity | 100 | The Last Quarter | "Q3 earnings exceeded all projections. An AI system found a way to grow GDP even faster. It grew so fast it outgrew us." | E-34, E-56 |

### Character archetypes

Characters embody forces from the dynamics. Each archetype's proposals tend to push specific bars in specific directions, creating predictable tension. The player learns to recognize: "when the enforcement chief shows up, she'll want more surveillance (Control ↑) at the cost of something else."

Not all archetypes need separate characters. Some can be combined, and some archetypes may have multiple named characters (two different politicians from different opinion clusters, for example).

**Enforcement Chief** — embodies group C dynamics.
Wants: more surveillance, more raids, tighter chip control, bigger enforcement budget.
Typical effect: Control ↑, Support ↓ (heavy-handed) or Prosperity ↓ (restricts AI use).
Card flavor: facility raids, chip audits, monitoring expansions, border seizures.

**Chief Scientist** — embodies group D dynamics.
Wants: more research funding, permission to run larger experiments, access to frontier AI tools.
Typical effect: Safety ↑, Control ↓ (dual-use risk) or Prosperity ↓ (diverts resources).
The dual-use tension (B-24) means the scientist's proposals are genuinely ambiguous — are they advancing safety or capabilities? The player must decide without certainty.
Card flavor: research proposals, experiment approvals, breakthrough announcements, "we need to use the AI" requests.

**Political Advisor** — embodies group E (opinion/election) dynamics.
Wants: whatever keeps the agency politically alive. Their proposals are reactive — shaped by which opinion clusters are currently dominant.
Typical effect: Support ↑, but at the cost of whatever the current political environment demands (maybe Control ↓ to appease surveillance critics, or Prosperity ↑ to appease economic interests).
Card flavor: election strategy, media crisis response, public messaging, legislative negotiations.

**Economic Advisor** — embodies E-30 through E-35 dynamics.
Wants: broader AI permissions, economic growth, industry partnerships.
Typical effect: Prosperity ↑, Control ↓ (more AI to monitor, more diffusion risk).
The economic advisor's arguments are genuinely legitimate (E-33) — the player should feel the pull, not dismiss them as wrong.
Card flavor: industry proposals, economic reports, trade negotiations, "the economy can't sustain this" warnings.

**Foreign Diplomat** — embodies E-49 and F-41 dynamics.
Wants: treaty stability, international cooperation, concessions to keep wavering nations onboard.
Typical effect: varies — might require Support ↓ (unpopular concessions to China) or Control ↓ (easing enforcement to keep allies) in exchange for maintaining treaty health (hidden state).
Card flavor: treaty negotiations, international incidents, intelligence sharing, sanctions.

**Journalist** — embodies E-47, E-48, E-52, E-53 dynamics.
Comes in two modes: ally (investigating real threats, raising public awareness) and adversary (investigating the agency itself, amplifying skepticism). Which mode they're in depends on the opinion cluster distribution (hidden state).
Typical effect: Support ↑ or ↓ depending on the story.
Card flavor: leaked documents, public opinion shifts, investigative stories, non-ASI AI incidents in the news.

**Corporate Executive** — embodies E-51, E-62 dynamics.
Wants: weaker enforcement, broader AI use, regulatory exceptions for their industry.
Typical effect: Prosperity ↑, Control ↓, sometimes Support ↑ (economic promises to politicians).
The executive is NOT simply a villain — their economic arguments are real (E-33), and sometimes cooperating with industry genuinely helps enforcement (access to private chip data, industry self-monitoring).
Card flavor: lobbying, economic threats, partnership offers, treaty-undermining moves.

**Internal Dissenter** — embodies F-40 dynamics.
An agency employee who disagrees with the director's approach — not from corruption but from sincere belief. Could be a hawk (thinks enforcement is too weak), a dove (thinks it's too aggressive), a skeptic (thinks the mission is wrong), or an ideologue (puts their politics above the mission).
Typical effect: unpredictable — targets whichever bar reflects their complaint.
Card flavor: internal memos, sabotage reports, whistleblowing, resignation threats, leaked classified information.

**The Agency's AI** — embodies C-59, C-61, D-22 dynamics.
The AI systems the agency uses for its own operations. Appears when something unexpected happens. Not a traditional character — more of a wildcard.
Typical effect: unpredictable, often reveals information or creates dilemmas.
Card flavor: "the surveillance AI flagged something strange," "the research assistant refused a direct order," "the analysis system's latest report doesn't make sense."

### Sample card sketches

A few examples showing how dynamics become specific card decisions. These are sketches, not finished content — they demonstrate the mapping from dynamics to gameplay.

**"The Chip Audit"** (Enforcement Chief, early-game)
"Our latest audit found 200 unaccounted H100s at a university in Germany. They say it's a paperwork error."
- Left: "Log it and move on." → Control ↓small (you let one slide), Support ↑small (seen as reasonable)
- Right: "Raid the facility. Seize the chips." → Control ↑, Support ↓ (seen as heavy-handed), Prosperity ↓small (university research disrupted)

Teaches: C-10 (chip tracking is the pillar of enforcement), C-8 (every potential violation matters).
The right answer is ambiguous on purpose — both choices have real costs.

**"The Safety Shortcut"** (Chief Scientist, mid-game)
"We could make a breakthrough in corrigibility — if we run a training experiment at 5×10²³ FLOP. It's below the estimated lethal threshold... probably."
- Left: "Too risky. Use smaller experiments only." → Safety ↓small (slower progress), Control ↑small (staying within safe limits)
- Right: "Approved, with triple monitoring." → Safety ↑, Control ↓small (monitoring resources diverted)

Teaches: D-22 (frontier AI trap), B-26 (even permitted training is dangerous). If the player has been neglecting Safety, the temptation to approve is strong.

**"The Economic Report"** (Economic Advisor, mid-game)
"GDP growth is 1.2% — down from 4% before the pause. Three nations are threatening to withdraw unless we allow broader AI deployment in manufacturing."
- Left: "The pause exists for a reason. Hold the line." → Prosperity ↓, Support ↓ (economic suffering + international tension), treaty health ↓ (hidden)
- Right: "Expand permitted AI use in non-research sectors." → Prosperity ↑, Control ↓ (more AI systems to monitor, more diffusion risk)

Teaches: E-32/33 (economic cost is real and legitimate), E-34 (broader AI use increases extinction risk from within).

**"Eight Years of Peace"** (Political Advisor, appears after long stretch without crisis)
"Senator Morris is proposing to cut the agency budget by 40%. Her argument: 'Eight years, zero incidents. The threat was clearly exaggerated.'"
- Left: "Make the case publicly — show them what we've prevented." → Support ↑small (but you CAN'T show what you prevented — E-52), Safety ↓small (budget politics distracts from research)
- Right: "Accept the cut gracefully. Prove efficiency." → Support ↑small (cooperative), Control ↓ (less enforcement), Prosperity ↑small (tax savings)

Teaches: E-52 (the success trap). This card appears BECAUSE things have been going well — it teaches the player that stability breeds complacency. The left option is subtly a trap: you can't actually demonstrate prevented catastrophes.

**"The Dissident"** (Internal Dissenter, any time)
"Your Deputy Director just leaked classified enforcement data to a journalist. His note: 'The public deserves to know how much surveillance this agency conducts.'"
- Left: "Fire him publicly. Send a message." → Control ↑small (discipline restored), Support ↓ (looks authoritarian, confirms surveillance fears)
- Right: "Handle it quietly. Reassign him." → Control ↓small (signal of weakness), Support ↑small (no public scandal)

Teaches: F-40 (internal ideological conflict — the dissenter isn't corrupt, they genuinely believe the public should know).

### How dynamics map to game elements

Summary of which dynamics are expressed through which game element.

**Through visible bars:**
- A (stakes) → the death conditions — the existence of lethal extremes
- B (threat model) → Control bar (enforcement detects training runs) + Safety bar (dual-use risk)
- C (enforcement) → Control bar (primary home)
- D (safety progress) → Safety bar (primary home)
- E (political economy) → Support bar (opinion/political dynamics) + Prosperity bar (economic dynamics)
- F (institutional failures) → cards that damage multiple bars simultaneously (not its own bar — institutional failures CAUSE drops in other bars)

**Through hidden state:**
- E-27/29/43 (opinion clusters) → card pool weights, character frequency, option quality
- B-5/6 (algorithmic progress) → escalating difficulty over time
- E-44/65 (generational drift) → era-based card pool shifts
- E-49 (international dynamics) → treaty health hidden variable → crisis cards
- E-56/57 (AI diffusion) → Prosperity-linked card escalation

**Through deaths:**
- C-8 (enforcement asymmetry) → Control=0
- C-9/14 (structural advantages, cat-and-mouse) → Control=100
- E-52 (success trap) + F-37 (political dissolution) → Support=0
- F-39 (regulatory capture) + F-36 (institutional fragility) → Support=100
- D-17/23 (safety is hard) + B-5/6 (shrinking threshold) → Safety=0
- D-22 (frontier AI trap) + B-24 (dual-use) → Safety=100
- E-32/33/35 (economic cost) → Prosperity=0
- E-34 (economic path to extinction) + E-56 (diffusion) → Prosperity=100

**Through characters:**
- E-30a (short-term economic incentives) → Economic Advisor, Corporate Executive
- E-30b (long-term strategic ambition) → Foreign Diplomat (international threats)
- F-40 (internal ideological conflict) → Internal Dissenter
- C-14 (cat-and-mouse) → recurring Enforcement Chief cards
- D-19/20 (desperate, weird research) → Chief Scientist's increasingly unusual proposals
- E-27 (opinion clusters) → Journalist and Political Advisor vary based on hidden state

### What this design does NOT capture

Honest limitations:

- **Opinion clusters as discrete groups** (E-27): The bars are continuous, so the game cannot natively represent discrete opinion clusters. The hidden-state approach (opinion clusters affect card pool) is a workaround, not a direct representation. A player who examines the mechanics will see continuous bars, not clusters. The *feel* of cluster dynamics comes from card pool effects, but the *structure* is different from reality.

- **International dynamics in full detail** (E-49): Without a dedicated bar, the richness of international relations is compressed into hidden state + effects on other bars. Complex scenarios like "China threatens to build ASI for concessions" work as individual cards but the game can't model the ongoing multi-party negotiation.

- **Institutional dysfunction as a slow process** (F-36-41): Institutional rot happens over years, not single card decisions. The game represents it through individual crisis events (dissenter leaks documents, political appointee replaces competent director) rather than through gradual decay. This is a compression artifact — in reality, institutions fail slowly then suddenly.

- **30-year timescale with generational turnover** (E-44, E-65): A ~15-40 turn run represents ~30 years, which means each turn covers roughly a year. This is too coarse for generational dynamics. The era-based card pool shift is an approximation.

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
