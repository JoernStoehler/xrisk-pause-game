# Domain Model: How a Pause Plays Out

This is Jörn's expert model of the principal component axes of a global AI pause — step 1 of game design. No game mapping yet (resource bars, death conditions, etc. are separate steps).

## Core message

"A pause is hard to get right and relies on a lot of luck and crisis management."
"The pause is not relaxed waiting but frantic effort to finish the safety homework before the deadline approaches."
"The pause is markedly about keeping at bay a superexponential process that is aligned with lots of short-horizon incentives and utterly against any long-term incentive any human ever had (i.e. extinction is pretty much not what anybody wants)."

(Note: The CLAUDE.md "core thesis" about "enforcement is structurally hard" was agent-written, not Jörn's. The above is Jörn's actual framing.)

## Dimensions of the model

### 1. Mandate

How much control governments grant the pause agency over what is traditionally their domain.

- High: "you hand them a draft law, and they pass it within a day per emergency vote"
- Medium: "they let you fight and struggle even for your important laws" — player must prioritize where to invest capital, wait a long time for votes
- Low: "the government forwards your proposals to the spam folder. they talk about what other people say"

Mandate abstracts over the carefully accumulated social interconnectedness and social learning done among policy makers, company heads, celebrities, and news owners. ("How many ISIA members do you know, senator? How much do you agree with their mission? How much do you consider yourself to owe these members/the organization?")

Mandate also predicts well how the government enforces the pause and with how many resources. A competent director will not set enforcement below the maximum the government will agree with. (Open question: does the player learn how to be competent here, or is this automated?)

Adversaries try to steer mandate: people who don't get the danger but get the benefits (AI CEOs), people who don't get the danger and don't get the benefits (some leftists who think AI will vanish again), other special groups.

### 2. Resources directed toward maintaining the pause

<!-- REVIEW: This section conflates two distinct things:
     (a) mandate-dependent budget (what government agrees to fund — fluctuates with mandate)
     (b) accumulated enforcement infrastructure (slow to build, doesn't vanish instantly when mandate drops)
     Are these one dimension or two? Does infrastructure decay when mandate/funding drops? -->
<!-- AGENT: I think this review is valid. Jörn's text itself distinguishes "predicted by mandate"
     from "accumulated infrastructure that is not instantaneous to produce" — those ARE two things
     with different dynamics (one tracks mandate, one has inertia). Whether they're one dimension
     or two is a real question for Jörn. -->

How many policemen search for GPUs, how many satellites look for heat signatures of small compute clusters with inadequate cooling, etc. Predicted by mandate, but also includes accumulated enforcement infrastructure that is not instantaneous to produce:

- How much police has been trained in searching for GPUs in a house
- How much infrastructure has been redesigned to detect unexplained power draw or heat signatures
- How much the inspectors are tied into chip factories (including: do they know whom to talk to in order to learn how many kg silicon were entering the factory and how much waste was exiting it)

<!-- REVIEW: What causes infrastructure to accumulate? Time + funding? Mandate alone?
     And what happens to accumulated infrastructure under political pressure — does it degrade? -->
<!-- AGENT: This is a step-2 question (game mechanics), not step-1 (domain model). In reality,
     trained police don't forget skills when mandate drops — but they get reassigned. The subagent
     is pushing toward game design prematurely. Still, Jörn may want to clarify the real-world
     dynamics before we get to step 2. -->

### 3. Resources directed toward safety progress

<!-- REVIEW: This is the thinnest section. It's one sentence.
     Is this intentionally brief, or did the agent fail to capture more detail?
     §5 (safety knowledge stock) has the properties of this research (sigmoid, stepping-on-toes, etc.)
     but §3 is supposed to be about the *resources* directed at it (people, money, institutions).
     Unclear: is §3 a separate dimension from §5, or just the input side of §5? -->
<!-- AGENT: Checked memory and conversation summary — both show §3 as one sentence with two
     examples. However, these sources are agent-written summaries, not verbatim transcripts,
     so it's possible Jörn said more and I failed to capture it. Cannot verify without the
     original conversation (jsonl logs are off-limits per convention).
     The §3-vs-§5 relationship matters though: §2 (enforcement resources) is clearly separate
     from §8 (enforcement know-how), so by analogy §3 (safety research resources = people, money)
     should be separate from §5 (safety knowledge stock = accumulated results). But as written,
     §3 doesn't say anything §5 doesn't already cover. Either §3 needs expansion (what determines
     how many researchers? is it mandate-driven like enforcement? does the player allocate between
     enforcement and research?) or it should be folded into §5. -->

How many researchers do philosophy of what an agent is mathematically, how many startups try to find a way to do gene editing in human adults, etc.

### 4. Public sentiment and social learning

"Weird, not 1-dimensional necessarily." Main dimensions:

- **Salience**: how much have people socially learned the importance of preventing extinction from AI. Similar to a poll: "do you believe that acting against superintelligent AI is only doable right now, or can it be procrastinated, or is it irrelevant anyway because godlike AI isn't a real concept?" (Note: many current polls don't properly define godlike AI — they measure whether people know what A, S, I stand for.)
<!-- REVIEW: The poll question bundles awareness ("is godlike AI real?") with strategic timing
     ("is acting only doable right now?"). These seem like different things a person could
     disagree on independently. Is salience meant to capture both, or just awareness? -->
<!-- AGENT: I think this review misunderstands the concept. Jörn is defining salience as a
     *compound* variable on purpose — it's not just "have you heard of AI risk" but "have you
     socially learned that this is urgent and real." The poll question gives three levels of
     increasing salience: (1) "godlike AI isn't real" = zero salience, (2) "it can be
     procrastinated" = medium salience (aware but not urgent), (3) "only doable right now" =
     high salience (aware AND urgent). So the bundling is intentional — salience IS the
     combination of awareness + urgency belief, not just awareness alone. The subagent was
     splitting what Jörn intentionally combined. -->

- **Valence**: coarse "AI pause good" or "AI pause bad" primitive attitudes. Not something that directly spreads self-sustainingly, but something is going on with social learning theory that makes this a good abstraction. There's a weak tie between valence and whether an AI pause actually will prevent extinction. Maybe the weak tie comes from low salience of x-risk.

- **Categorical data**: e.g., whether AI x-risk has become a bipartisan or a polarized political issue in the US.

Salience and valence influence mandate, and mandate influences salience and valence.
<!-- REVIEW: The feedback loop is declared but not specified. How does mandate influence
     salience/valence? (Enforcement success → "see, it works" → salience up? Or enforcement
     visibility → "surveillance state" → valence down?) Direction matters for game mechanics. -->
<!-- AGENT: Valid but again pushing toward step 2. The domain model says the feedback exists
     and gives its direction (bidirectional). The specific mechanisms (what actions trigger what
     sentiment shifts) are game design, not domain model. Still, knowing whether the real-world
     feedback is mostly positive (mandate → legitimacy → more support) or ambiguous (mandate →
     both legitimacy AND resentment) would help step 2. Jörn's §1 examples suggest both
     directions are real: high mandate lets you pass laws fast (reinforcing), but also creates
     adversary pressure from AI CEOs and skeptics (undermining). -->

### 5. Safety knowledge stock

<!-- REVIEW: §5 is "safety knowledge" (alignment progress). §7 uses "accumulated knowledge" in the
     ASI creation formula. Are these the SAME variable? They seem opposite — §5 is knowledge that
     helps humanity, §7's knowledge is capability knowledge that helps rogue actors build ASI.
     If they're different, the naming collision is confusing. -->
<!-- AGENT: Good catch. These are clearly different variables: §5 = alignment/safety knowledge
     (helps humanity survive), §7 = capability knowledge (helps build ASI). The document should
     use distinct names to prevent confusion. Suggest: "safety knowledge stock" for §5 stays,
     §7 should consistently say "capability knowledge" not just "accumulated knowledge." -->

A monotone sigmoid. Currently at the low end. As results of cognitive labor accumulate, progress goes through the unknown tech tree until hitting some unknown end goal (or one of the speculative known end goals: value alignment and corrigibility).

<!-- REVIEW: "unknown end goal" — is the pause meant to eventually solve alignment (reach end of
     sigmoid), or is the win condition just "buy enough time"? This affects whether there's a
     reachable win state in the game or if it's infinite survival. -->
<!-- AGENT: This connects to Jörn's core message from an earlier conversation: "with a pause we
     can survive superintelligence... if nothing goes wrong and a lot goes right." That implies
     the sigmoid DOES have an end — alignment gets solved — but reaching it requires luck and
     crisis management. So the win condition is probably "reach sufficient safety knowledge before
     the loss condition triggers," not infinite survival. But this is a Jörn question. -->

Key properties:
- Only after significant progress can one estimate how big the remaining gaps actually are
- Research in new fields is very hard to predict (even PhD theses in old fields are hard to get right in amount)
- Estimated >10k philosopher-years needed based on past progress rates
- Stepping-on-toes is notable: parallelization is hard (redundancy when working in isolation is big since the same hard fundamental problems appear in many places)
- So only after some amount of progress is revealed how "difficult" the world actually is

### 6. Adjacent knowledge stocks (also monotone)

Genetic engineering of humans to accelerate research, uploading humans to accelerate research, using unsafe AI for research without being sabotaged (known as AI control), building powerful AI with limited resources.

Can be realized as "progression" of different safety events — random whether genetic engineering or uploading has more events and what path happens. Maybe the state tracks which "research ideas" from every path have been tried, and some cards are gated behind other cards having spawned + total safety knowledge having crossed some threshold.

<!-- REVIEW: "Can be realized" and "Maybe" — is this Jörn's proposal or agent speculation?
     Also: what's the relationship to §5? Are these accelerators for safety knowledge (making
     researchers smarter/faster), or substitutes (alternative paths to surviving ASI)?
     And: are these legal under the pause treaty, or are they themselves risky/controversial? -->
<!-- AGENT: The hedging language ("Can be realized", "Maybe") is problematic — I can't determine
     from the conversation summary whether these were Jörn's words (him thinking aloud about
     game possibilities) or my own speculation injected during transcription. The subagent's
     treaty-legality question is off-base though: this is a domain model of real-world dynamics,
     not a model of what's legal. Gene editing to make humans smarter is a real research
     direction regardless of treaty status, and in Jörn's model it's an accelerator for safety
     knowledge — one of several possible ways to speed up the "finish the safety homework"
     effort from the core message. The gating mechanic (cards gated behind other cards +
     knowledge threshold) sounds like it could be either Jörn's game design thinking or my
     interpolation — needs confirmation. -->

### 7. ASI creation threshold (the loss condition)

General model: ASI is created once `<resources spent on the attempt> × <accumulated knowledge>` exceeds some unknown threshold.

There is accumulation in the knowledge component: earlier models can produce synthetic data or serve as early checkpoints. Stepping-on-toes/not-useful-anymore effect applies.

For the game (pause regime), approximate as: `GPUs × time × knowledge` — but these belong to different actors:
- GPUs and time: what a specific rogue actor has (determined by enforcement gaps)
- Knowledge: accumulated capability knowledge, which is mostly public (public knowledge predicts private knowledge well, except for very long-running somehow-airgapped research groups)

Example: a group that has 8 H100 GPUs, can work for 5 years, while a lot of researchers have openly published insights into how to make more capable AI over 10 years — may be enough to trigger the ending.

### 8. Best practice cat-and-mouse

Criminals become better at smuggling GPUs in banal ways (they sit in an armchair and think up heist schemes). Enforcement becomes better at reactively catching them or proactively preventing smuggling (they sit in an armchair and think up anti-heist schemes). Both sides accumulate know-how over time.

<!-- REVIEW: "Both sides accumulate" suggests symmetry, but enforcement is structurally harder:
     attacker needs ONE working exploit, defender must cover ALL routes. Is the asymmetry
     intentional to omit here, or was it not discussed? Also: does enforcement know-how degrade
     if resources (§2) or mandate (§1) drop? -->
<!-- AGENT: I disagree with the subagent here. Jörn's framing of §8 is deliberately symmetric
     ("both sides sit in an armchair and think up schemes"). The attacker/defender asymmetry the
     subagent wants to inject is a general security principle, but Jörn may have a more nuanced
     view — e.g., the "banal ways" phrasing suggests criminals don't need sophisticated exploits,
     just mundane workarounds, and enforcement can similarly use mundane countermeasures. The
     asymmetry may already be captured elsewhere: §7 (loss condition) shows that enforcement
     failure has catastrophic consequences while criminal failure just means trying again. So the
     asymmetry is in STAKES, not in the cat-and-mouse know-how accumulation itself. But this is
     my interpretation — Jörn should confirm whether the know-how race is intentionally symmetric
     or whether I'm missing the asymmetry he intended. -->

### 9. AI behavioral properties

<!-- REVIEW: The subagents flagged this as the weakest section. The examples given (tiredness,
     news bias, sycophancy) are surface behaviors. The x-risk literature emphasizes deeper
     concerns: instrumental convergence (any goal → acquire resources/resist shutdown),
     deceptive alignment (concealing true goals during training), orthogonality (intelligence
     doesn't imply human-aligned values).
     Question for Jörn: Was this section intentionally about surface-level behavioral quirks
     (flavor for narrative events), or should it also cover the deeper alignment-relevant
     properties? The "facsimile of concern for human survival" example could go either way. -->
<!-- AGENT: I think the subagent is wrong to call this "weak." It's misreading the purpose of §9.
     The section heading is "AI behavioral properties" — deviations from a generic agent. Jörn
     is describing how ACTUAL AIs differ from a default rational-agent model, which matters for
     predicting what happens during a pause (e.g., will AIs help or hinder enforcement? will
     they have consistent vs. erratic behavior?). The subagent wants §9 to cover instrumental
     convergence and deceptive alignment, but those are properties of SUPERINTELLIGENT AI — the
     thing the pause is trying to prevent. §9 is about the AIs that EXIST DURING the pause
     (current-era AI, not ASI). Sycophancy, tiredness differences, and news bias heuristics are
     exactly the right level for "what behavioral properties do deployed AIs have that affect
     the pause dynamics?" The "facsimile of concern" example is about whether current AIs
     support or undermine the pause effort — a practical question, not an alignment-theory one.
     That said, Jörn should confirm this reading, because if §9 IS meant to also cover
     "properties of the ASI that might be created" then the subagent has a point. -->

Deviations from a "generic/random" boundedly rational agent to the AIs we actually have. E.g.:
- Humans have tiredness; AIs may not
- Humans have negative news bias; AIs may use more accurate heuristics

Can be part of narrative events in a mutually exclusive manner (basic narrative consistency, but a lot is random/chaotic). E.g., whether unregulated AIs are sycophantic vs whether they all push consistently for an AI pause because they acquired some facsimile of concern for human survival.

### 10. Compute-centric model of AI capabilities

"More training compute and more inference compute leads to more labor output." AI has a ragged capability frontier wrt how much labor of different specialized professions it produces, but there's a big correlated principal component axis known as "general intelligence." Basic optimization theory/economics tells us that most labor is a mixture of specialized labor — i.e., an AI that codes super well is perhaps limited by producing creative novel ideas at far lower rate than a human.

<!-- REVIEW: This reads as background context about AI scaling, not as a pause-specific dimension.
     How does the ragged frontier interact with §7 (loss condition) or §2 (enforcement)?
     e.g., Does the frontier mean rogue actors need less total compute if they target a narrow
     capability? Does it affect what enforcement should monitor? Without a connection to the
     pause dynamics, this section is informational but not yet actionable for game design. -->
<!-- AGENT: The subagent is making the step-conflation error again — demanding §10 be "actionable
     for game design" when this is the domain model (step 1), not the game mechanics (step 2).
     §10 is here because it's a real-world dimension of how AI works. Its connection to the pause
     is through §7: the loss condition formula (GPUs × time × knowledge) depends on what "enough
     compute" means, and §10 explains why that threshold is hard to pin down (ragged frontier =
     different capability profiles at different compute levels). It also connects to §3: safety
     research that uses AI tools is bounded by the ragged frontier (AI that codes well may not
     generate novel safety insights). Whether this becomes a game mechanic is step 2. -->

## Key causal links

- Salience + valence → mandate
- Mandate → salience and valence (feedback loop)
- Mandate → predicts enforcement level and resources
- Resources can be reinvested into salience, valence, mandate, and research directly
- Enforcement infrastructure is slow to build (not instantaneous)
- Safety research reveals its own difficulty as it progresses
- The loss condition depends on enforcement gaps (rogue actor's compute × time) combined with accumulated knowledge

<!-- REVIEW: Missing causal links flagged by subagents:
     - Failed/stalled safety research → public doubt → mandate collapse (vicious cycle)
     - Visible enforcement failure (rogue actor nearly succeeds) → mandate spike or crash?
     - Cat-and-mouse (§8) outcome → enforcement gap size → loss condition (§7)
     - §9 and §10 have no causal links at all — are they background context only?
     Also: all links are unidirectional or simple feedback. No link captures the core tension
     from the core message: "keeping at bay a superexponential process aligned with short-horizon
     incentives." Where does the superexponential pressure enter? -->
<!-- AGENT: The missing-links critique is the strongest point the subagents made across all three
     reviews. The causal links section was my summary, not a direct transcription, so it likely
     lost connections Jörn implied. Specifically:
     1. The "superexponential pressure" from the core message has NO representation in the causal
        links. This is a major gap. The core message says the pause is about "keeping at bay"
        something that grows superexponentially — but none of the listed links show what's growing
        or what drives the exponential. Probably: capability knowledge (§7) grows as researchers
        publish + AI tools improve, AND short-horizon incentives (profit motive, competitive
        pressure) push actors to break the pause. Neither is captured.
     2. The "visible enforcement failure → mandate" link is genuinely ambiguous: a near-miss could
        INCREASE mandate ("see how dangerous this is!") or DECREASE it ("your agency failed us").
        Both are realistic. This tension would make great card content.
     3. §9 and §10 are probably background context that shapes HOW other links work (e.g., AI
        behavioral properties determine whether AI tools help or hinder safety research in §3/§5)
        rather than having their own causal arrows. But this is my inference, not confirmed.
     4. The "failed safety research → doubt → mandate collapse" link is important but NOT
        obviously correct — Jörn's model might say the public doesn't track safety research
        progress at all (low salience of technical details). Needs confirmation. -->

## Open questions (not yet discussed)

- Which of these dimensions become visible resource bars? (step 2)
- What does 0 and 100 mean for each bar? (step 3)
- What is the win condition mechanically?
- How many of these dimensions are hidden state vs. visible to player?
- Does the player learn competence (optimal enforcement given mandate) or is it automated?

---

## Appendix: Jörn's verbatim messages

Recovered from the session transcript (jsonl log). These are Jörn's exact words, unedited. The main sections above are agent-paraphrased from these messages — compare to check for transcription errors.

### Core message + dynamics

> "a pause is hard to get right and relies on a lot of luck and crisis management" "the pause is not relaxed waiting but frantic effort to finish the safety homework before the deadline approaches" "the pause is markedly about keeping at bay a superexponential process that is aligned with lots of short-horizon incentives and utterly against any long-term incentive any human ever had (i.e. extinction is pretty much not what anybody wants)" "concrete dynamics inform how to carry out a pause:"
> "how decentral vs central is capability progress? do we have to go around and search for 8 unregistered H100 gpus stuffed into a private garage? or do we have to just monitor all data centers and chip factories and keep the black market trades capped?"
> "how fast is safety progress - what do we do if super speculative research ideas turn out to take not 1y but 10y or just fail and require other ideas"
> "how does public support evolve - do people act strategically about an extinction event htat is e.g. a only very imprecisely known amount of time away (e.g.e xperts that say things like 1-10 years or within our lifetime) ; does expert consens/disagreement affect the public? does the public care too much about short-term incentives e.g. economic gains from current or from better ai?"
> "how does decision maker support evolve - what if somebdoy does not understand the long-term/unusual danger but sees the short-term incentives - how does their propaganda and sabotage affect a pause?"
> "how do Ai diffusion processes continue as the pause progresses ? e.g. current automation progress with GPT-5.-level modesl and social learning about x-risk / non-x risks / utility from AI? diffusion into e.g. ai-assisted crime or medical research?"
> "what are research lines that are promising to pursue? On a meta level: Genetic engineering of humans to accelerate research, uploading humans to accelerate research, ais to accelerate research, better governance to control whether good/bad research is carried out. On a object level: agent foundation theory, mathematical learning theory, prosaic alignment schemes, brand safety training, capability research. On a guard level: control research, chip monitoring research, political and social and economic science for changes in world governance."
> "what actions are promising to take? E.g. what political change to realize? What hardware to produce/not to produce? What surveillance software to legalize? Whether to send the police? Air-gapped research institutes? Volunteers for lethal gene-editing research? What tax proposal will exploit biases in policy maker & interest groups to get passed with a low expenditure in own capital?"

### Full expert model

> Mandate is sth that's visible somewhat in what events happen and who-talks-to-whom and predicts what government actions occur, and, indirectly via planning, how adversaries (e.g. people who don't get the danger but get the benefits (ai ceos rn are a good example), people who don't get the danger and do not get the benefits (a lot of leftists say since 5 years ai is gonna vanish again), other special groups), try to steer the whole system.
> Resources directed on this planet towards maintainaing a pause and towards making safety progress are two other axes. E.g. how many policemen search for gpus, how many satellites look for heat signatures of small compute clusters with inadequate cooling, how many researchers do philosophy of what an agent is mathematically, how many startups try to find a way to do gene editing in human adults, ...
> Public sentiment and social learning is... weird, not 1-dim necessarily, but another "thing one can aggregate very well". There's some categorical data in here such as whether Ai x-risk has become a bipartisan or a polarized political issue in the social population of the US.
> There's two also monotone knowledge stocks:
> - knowledge about safety, i.e. how to ensure tha a superintelligence is safey ; this is a sigmoid, we are rn at the low end, and as ~results of cognitive labor accumulates we go through the unknown tech tree until we hit some unknown end goal (or one of the ~speculative known end goals: value alignment and corrigibility).
> - similarly: genetic engineering, uploading, using unsafe ai for research without being sabotaged (known as ai control), building powerful ai with limited resources
> Compute centric model of ai capabilities has been moderately successful, and says basically
> "more training compute, and more inference compute, leads to more labor output"
> "ai has a ragged capability frontier wrt how much labor of different specialized professions it produces, but there's a big correlated principal component axis known as "general intelligence""
> "basic optimization theory / economics tells us that most labor is a mixture of specialized labor i.e. an ai that codes super well is perhaps then limited by producing creative novel ideas at far lower rate than a human"
> Then there's the "weird" axes about ai behavior i.e the deviation from a "generic/random" boundedly rational agent to the ais we have -- e.g. humans have a concept such as tiredness, while ais may not have tiredness. humans have a negative news bias, while ais may consider information weighted using more accurate heuristics instead of the lizard-brain humans cannot turn off without much effort

### First guess at game state mapping

> My first guess (low effort) for the main components of the state would be
>
> - mandate [abstracts over the carefully accumulated social interconnectedness and the social learning done among policy makers and company heads and celebrities and news owners (sort of a "how many IASA members do you know, senator? how much do you agree with their mission? how much do you consider yourself to owe these members/the organization in-as-so-far as you have honor at all?"]
> - mandate also predicts well how the government enforces the pause, and with how many resources ; a competent director will not set the level of enforcemnet below the maximum that he can get the governments to agree with -- unsure whether we will let the player learn how to be competent in this regard, and/or how much we automate this
>
> - safety research stock - sort of a timer that ticks up with an initially imprecise/unknown end goal ; only if one has a lot of progress can one guess at how big the gaps actually are -- research in new fields is very hard to predict, even PhD theses in old fields are hard to get right in amount!, while established engineering topics have good base rates basically ; so only after some amount of progress is made is revealed how "difficult" the world actually is - I rn expect one needs >10k philosopher-years based on past progress rates, and I expect that stepping-on-toes is notable so parallelization is hard (redundancy when working in isolation is big since the same hard fundamental problems appear in many places). But that end target is highly uncertain, just as I don't even know rn how much progress is made each year - i can loosely judge when somebody wrote sth interesting that deconfuses some philosophical questions and turns them into math, or when sth tackles some math successfully.
> - capability knowledge stock - the second timer to the creation of superintelligence ; this is not just "ASI is being built step by step" but more like a latent potential -- basically ASI is created once
> \<resources spent on the attempt\> times \<accumualted knowledge\> exceeds some unknown threshold.
> There is some accumulation i.e. earlier models can produce synthetic data or serve as early check points. So it's a stepping-on-toes/not-usefull-anymore effect . Since this game only deals with a pause regime, we can approximate however as
> "gpus x time x knowledge" of the largest attempt at ASI that slipped between the pause agency's surveillance/enforcement gaps. So a group that has 8 H100 gpus, but can work for 5 years, while a lot of researchers have openly published insights into how to make more capable AI over 10 years, may be enough to trigger the ending.
>
> The Ai behavior can be (mutually exclusive in some basic narrative consistency manenr, but a lot is just random / chaotic) part of narrative events. E.g. whether unregulated AIs are sycophantic vs whether they all push consistently for an AI pause because they acquired some facsimile of concern for human survival.
>
> Safety knowledge + adjacent knowledge stocks can be realized as just some "progression" of different safety events - it is random whether genetic engeineering or uploading has more events and what path happens. Maybe the state tracks which "research ideas" from every path has been tried - and some cards are gated behind other cards having spawned + total safety knowledge having crossed some threshold.
>
> unsure how to do public sentiment: main dimensions imo are
> - salience: how much have people socially learned the importance of preventing extinction from Ai ; this is similar to a poll "do you believe that acting against superintelligent Ai is only doable right now or can it be procrastinated or is it irrelvant anyway bc godlike AI isn't a real concept" (note that many polls rn do not properly define godlike AI and instead measure whether people know what the letters A, S, I stand for and what their imagination allows them to think the S stands for -.-)
> - valence: heavily coarse grained sentiment: "AI pause good" or "AI pause bad" style primitive attitudes ; this is not sth that directly spreads self-sustainingly, but something is going on with social learning theory that makes this a good abstraction that behaves as if there was only a weak tie between valence and whether an AI pause actually will prevent extinction or not. ; maybe the "weak tie" comes from low salience of x-risk?
> - salience and valence influence mandate, and mandate influences salience and valence
> - as said mandate kinda predicts resources, and resources can be reinvested into salience and valence and mandate and research directly
> - there's also accumulated enforcement resources that are not instantaneous to produce - think how much police has been trained in searching for GPUs in a house, how much infrastructure has been redesigned to allow the search for unexplained power draw or heat signatures, how much the inspectors are tied into the chip factories (including things like: do they know whom to talk to in order to e.g. even learn how many kg silicon were entering the factory and how much waste was exiting it).
> - another axis not mentioned are banal best practice learnings: criminals become better at smuggling gpus in banale ways (e.g. they sit in an armchair and think up heist schemes) and enfrocement becomes better at reactively catching them or proactively preventing smuggling (e.g. they sit in an armchair and think up anti-heist schemes).

### Mandate levels

> Yeah, there's some sort of "how much control do governments grant you over what is traditionally their domain" ; highest level of control would be "you hand them a draft law, and they pass it within a day per emergency vote"

> Medium level is "they let you fight and struggle even for your important laws => player should prioritize where to invest capital and has to wait a long time for the resulting vote to happen/go through"
> Low level is "the government forwards your proposals to the spam folder. they talk about what other people say"

### Methodological correction (step conflation)

> Tbc you are now doing several things at once:
> - you identify prinicipal component axes of the expert model of how a pause would happen and be carried out
> - you immediately claim it as a game resource bar
> - you immediately design endings for 0 and 100

> I suggest we do not conflate those three things!

### Corrections on ASI creation formula

> \> Approximated as GPUs x time x knowledge of the largest attempt that slipped through enforcement.
> That is not what I said. Was I grammatically unclear?

> you even fucked up more than that? You claimed there was some accumulation of gpu x time x knowledge into some variable you called knowledge again

> knowledge can be private

> but like, public knowledge predicts private knowledge well, except for very long-running somehow-airgapped research groups

### Reigns mechanic observation

> The Reigns mechanic is low-friction for "try out a huge binary decision tree" with card pool offering "sparse interactions between decisions" and "randomness"

