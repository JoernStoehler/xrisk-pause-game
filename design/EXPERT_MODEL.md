# Expert Model

Status: recovered source file. This is the single retained repo file for what
could be recovered about Jörn's expert model from the deleted extraction
session and its obsolete worktree.

Main source:

1. Restored Codex session log:
   `/home/vscode/.codex/sessions/2026/05/11/rollout-2026-05-11T10-30-40-019e1696-c6d9-74e1-9f5a-6fbcc90b75e8.jsonl`
2. Related restored Codex session log:
   `/home/vscode/.codex/sessions/2026/05/11/rollout-2026-05-11T10-02-46-019e167d-3c6d-7130-8787-60de3e4f4859.jsonl`
3. Recovered worktree branch:
   `stream/expert-model-extraction-recovered`

This file is intentionally low-loss:

1. It keeps exact recovered prompts when available.
2. It keeps raw Jörn answers first.
3. It keeps agent extraction short and labelled as draft.
4. It does not treat agent summaries as authoritative.
5. It is incomplete and should expand as new expert questions come up during
   game development.

## How To Use This File

1. Treat `Raw Jörn answer` blocks as source material.
2. Treat `Agent extraction` blocks as draft notes to check against the raw
   transcript.
3. Do not use this as approved player-facing wording.
4. Preserve uncertainty, explicit quantities, and casual caveats.
5. Add future expert answers with exact prompts where possible.

## Agent Extraction Index

Status: draft. This section is a reading aid only. The raw prompt and answer
sections below are the source.

1. `SUF-01`: Most AI-risk actions are not sufficient. Some are harmful. A
   measure matters only if it actually blocks the route to everyone dying
   before a point of no return.
2. `SUF-02`: Weak measures can be useful if they make strong measures more
   likely. They are fake progress if they replace strong measures or create
   comfort while the route to ASI stays open.
3. `TRT-01`: Unilateral U.S. slowdown is not the proposal. The proposal is a
   global treaty or everyone dies.
4. `TRT-02`: China and the U.S. share the core interest of not going extinct.
   Mistrust and cheating risk are treaty-design problems, not proof that a
   treaty cannot work.
5. `TRT-03`: Verification, monitoring, chip controls, inspections, intelligence
   sharing, and concrete enforcement mechanisms are basically all necessary.
   Missing one should cause a realistic delayed failure mode, not instant
   collapse or no visible effect.
6. `TRT-04`: Enforcement can include public discussion of public intelligence,
   positive and negative financial incentives, sanctions, hacking, and
   traditional military intervention on an escalation ladder.
7. `CAP-01`: "Modern frontier models aid capability research" should be split:
   labor aid, test-subject aid, and non-human-purchasable labor such as
   synthetic data or internal/inference use at huge scale.
8. `CAP-02`: Safety-labeled research is not automatically safe or useful.
   Some research called safety research can advance capabilities or reveal
   capability bottlenecks.
9. `CAP-03`: The treaty does not restrict private thought. It restricts speech
   and sharing of results, and it restricts use of resources such as compute.
10. `CAP-04`: Small-group research is uncertain. It may be harmless in some
   possible worlds and enough to kill everyone in others. Waiting for evidence
   can leave too little time; restricting early can hide whether the restriction
   was necessary.
11. `CAP-05`: Backlash should be distinguished from evasive remnants. Backlash
   grows when restrictions get harder. Evasive action changes shape but shrinks
   under stronger enforcement.
12. `CMP-01`: Tracking chips only tells you who can do dangerous work. It does
   not itself restrict what the chips are used for.
13. `DUR-01`: Jörn guesses the treaty needs at least 20 years, maybe less if
   lucky, maybe more if unlucky. Six-month pauses or doing nothing useful for
   20 years are not the proposal.

## 2026-05-11: Broad Public-Discourse Response

Source status: restored session log. The prompt and answer below are recovered.

### Prompt

Codex gave fake composite quotes, not real quotes and not attributed to anyone:

1. **Generic Regulation**
   "AI is obviously risky, so the government should pass some rules. Maybe
   require labels, audits, and fines when companies mess up."

2. **Pause Means Ban Everything**
   "These pause people want to shut down all AI research and make ChatGPT
   illegal because they watched too many sci-fi movies."

3. **China Wins**
   "If the U.S. slows down, China won't. Then we've just handed
   superintelligence to an authoritarian rival."

4. **Existing Governance Is Enough**
   "We already have AI safety institutes, the EU AI Act, voluntary lab
   commitments, and international summits. Why are people acting like nothing
   is being done?"

5. **Compute Controls Are Magic / Impossible**
   "Just track the GPUs. You can't build frontier AI without massive data
   centers, so this is easy."

   Or:

   "You can't control compute. Chips get smuggled, algorithms get better, and
   people can train models anywhere."

6. **Open Source**
   "Open source is safer because everyone can inspect it. The real danger is a
   few corporations and governments hoarding AI."

   Or:

   "Open weights are insane. Once a dangerous model is released, no treaty can
   unreleased it."

7. **Near-Term Harms Crowd Out X-Risk**
   "People are already losing jobs, getting scammed, and seeing deepfakes ruin
   lives. Talking about robot apocalypse is a distraction from actual harms."

8. **Labs Will Handle Safety**
   "The big labs have safety teams, evals, red-teamers, and responsible scaling
   policies. They know the tech best, so let them manage the risk."

9. **Treaties Are Fake**
   "Countries violate treaties whenever it matters. A global AI treaty would
   just create paperwork while secret military labs keep racing."

10. **Tribal Labels Replace Mechanisms**
    "Doomers want to freeze progress forever. E/acc people want to kill
    everyone for vibes. Decels hate technology. This is just culture war."

11. **Positive But Underspecified Pause Support**
    "I basically agree we should pause before superintelligence, but I don't
    understand what exactly gets paused, who enforces it, or how long it lasts."

12. **Misplaced Comfort From Slowness**
    "AI progress looks incremental. We'll see problems coming, patch them, and
    adapt like we always do with new technologies."

13. **Misplaced Comfort From Human Usefulness**
    "Even if AI gets very smart, it will need humans around. We're its users,
    trainers, customers, and maybe its moral reference point."

14. **Surveillance-State Suspicion**
    "A global AI agency monitoring chips and researchers sounds like a
    permanent surveillance regime with existential-risk branding."

15. **Fatalism**
    "If superintelligence is really possible, someone will build it eventually.
    A pause just delays the inevitable."

Codex asked which quotes felt like real discourse targets, which felt like
strawmen, and what quote was missing.

### Raw Jörn Answer

> I can quickly state my expert model's response, not optimized for rhetorics tbc.
> 1. risk=>do anything all is insufficient, most actions have no effect, many are harmful few are helpful even fewer are sufficient (it's easier to break guarantees on safety than add them when a threat exists). concretely for this proposal: after an extinction event, fines and audits and labels are insufficient. technically, this already is relevant after a point-of-no-return (e.g.: if we assume no strong action is taken, then there's a ponr where no non-strong actions suffice anymore; e.g. eventually the ponr is passed where only pulling the plug on the seed superintelligence suffices and mere attempts to add more safety measures do not, eventually there's a ponr where standard economic incentives do not suffice bc actors who are motivated more strongly exist and have the option to take actions that (unknowingly) kill everyone
> 2. the expert model isn't downstream of movies; the movies were written based on expert considerations and from a lucky guess about human-machine interfaces (e.g. that AIs learned to talk almost-english before they learned to design their own custom languages); not all AI furthers progress to superintelligence, but modern frontier models are genuienly useful for capability research which accumulates over a long pause so it's worth restricting access by use-case, by user, etc until risk has been reduced and no more accumulation / no more rising of the danger level happens even over 20 years. chatgpt isn't dangerous in most applications, but it may genuienly be too difficult for a treaty to carve out exceptions without causing extinction. i am unsure about where the competence level lies here, and where to put the shelling point / slippery slope / how much to invest into discriminating against dangerous research rather than all research.
> 3. china has repeatedly asked about a treaty, sometimes even with focus on existential risks rather than a more vague class of risks. china has no different interests than the US when it comes to extinction. unilateral slowdown is not the treaty proposal at hand, it's global treaty or (literally) die.
> 4. progress towards superintelligence continues to be made despite these measures. the planned measures are not much stronger than past measures i.e. there's no case to be made that soon measures will somehow change the race to ASI despite not having done so yet. the theory also says that these measures don't matter, sicne they do not affect say internal model training where existing capital is converted into unreleased superintelligence (that then releases itself and kills everyone)
> 5. tracking merely means you know who builds superintelligence, in addition you need to restrict what gpus are used for. tracking the bottleneck resource of ai-ready chips (mainly gpus) is indeed a cornerstone of restricting use of said compute resources. tracking implies say consolidation, surveillance, changed design, chip supply chain control/regulation etc. smugglilng can be reduced and so on, this is merely an argument that the pause needs to be executed well, not that the execution is unrealistic and most certainly not an argument that other proposals are better / that a pause is not worth trying in addition to other proposals.
> 6. there are no tools to inspect open source AI for whether it will aide research into how to build superintelligence. that's a property of how researchers use open source AI, and predicting whether research ideas work or won't work is notorusly hard. so a blanket ban on machine learning research, and especially on classes of research that in the past have contained insights, seems useful. for example, training alrger models has brought insights, as have interpretability expeirments on large models (which requires access to weights and to inference-level compute). the treaty concerns itself with extinction, so "once released, no unrelease" is true but has nothign to do with open source - the superintelligence does not care whether its weights are downloadable by citizens or whether it runs inside a company-owned data center
> 7. i don't think we are bottlenecked on attention summed over those two fields, so mostly snyergy (talk about strong regulation at all) wins and promotes measures for both risk classes. most plan that address non-existential risks but not existential ones are severaly bounded in impact, bc people only get to keep their jobs for example until they die in a handful years. imo most people who say this do not believe that existential risks are real so their argument isn't that a tradeoff should be made between loosing your job and being killed, but that this is just some ploy to reduce attention or discredit their field. i have seen few but non-zero peopel who believe in x-risk claim that non-x-risk concerns are false, and the counterargument here is that again some of the non-xrisk risks are simply already manifested/likely-to-appear once certain tresholds are met (assuming we are not dead by then), and so if we anyway talk about non-xrisk risks we can also just have a good discourse (though, as said, tradeoffs seem fake and synergy seems more useful). unsurprisingly the discourse rn sucks and both x-risk and non-x-risk talking points are often just plain non-sense (personally i have seen several great x-risk think tanks and sadly not much on the non-x-risk side (unsurprisingly, since very competent people would notice the urgenxy of x-risk instead and switch to x-risk think tanks => selection effects).
> 8. they do not know the tech best, they know how to build more capable models, and how to control them to a limited degree, and the technical argument is that controling something smarter than you, where failure means death and not that you get to try a second or tenth time, is a different beast; there's predictable failur emodes the companies will run into, and besides vaguely talking about competence we can just look at their plans and notice that they are repeeatedly wrong in the past, and ignore the threat model, and mostly say they'll solve problems later while having made basically zero progress in the last 20 years)
> 9. not true for past treaties such as nuclear weapons, bioweapons; military leaders have an interest in not dying personally, and so far luckily were not selected for being interested in AI. AI CEOS otoh were selected for wanting AI / believing in AI being controllable / believing no better path exists that to race to ASI, so that's what tehy'll predictably do. the fact that the cold war only through luck didn't turn hot doesn't mean we cannot be lucky about the ai treaty as well. I'd like better chances than "if we're lucky" but that's what we get. enforcement of a treaty through mutual monitoring etc is possible as well, like, the us government *can in principle* moinitor the US military wrt compute use - similary to how it could monitor the us military wrt use of nuclear material
> 10. there are arguments beyond cultural group identiy so let's evalluate them
> 11. IABIED provides example treaty and explanations. my guess is we need at least 20 years of a treaty, if we're lucky less, if we're unlucky more. that's not something that's easy to predict in advance, and the actions we need to take are mostly the same whether it's 5y or 20y or 50y, so we can err towards conservative timelilnes until we get to end the ban on superintelligence safely. this game illustrates what this would look like and makes it easier to talk about where the difficulties arise - and what difficulties people disagree on.
> 12. METR graph isn't incremental but even if taken at face-value, which one shouldn't for unpredictable technologies, accelerates rapidly. lots of incident reports are about the companies not anticipating in advance or even detecting problems shortly after public release, there often are no reliable patches e.g. prompt hacking is unsolved and some argue unsolveable even without vastly different methods, similarly training capabilities selectively is unsolved due to generlization capabilities being instrumental for most domains (which was predicted from a framework of General Intelligence).
> 13. this isn't imagining superintelligence / denies the possibility of it. so the standard arguments for why superintelligence is possible, and why we cannot rule out that it happens soon if we do not ban its development, can be given here in response
> 14. it's not clear that this is more restrictive than current regimes arleady are, and while long-term power balance / preservation of democracy is an issue to target, it's one that one cannot easily entangle with a treaty right now since then say China would refuse to sign a treaty that infringes upon its style of governance. there's nobody who'll believe your bluff that you'd rather cause extinction than accept a treaty that leaves china's political model out of the treaty. whether this means democracy fails long-term, freedoms are restricted, etc is open. research bans have existed in the past and have not escalated, and its at highly likely nobody can turn a ban on ai capability research into more than that. compute monitoring for ai-ready chips is also different from minotiring all private compute use, although latter would be useful to prevent research that accumulates over 50y into sth dangerous
> 15. the trick is that in that time (20y) you can figure out how to not die from superintelligence. i'm not enthusiastic about 6mo pauses or about doing nothing useful for 20y and then ending the ban while being in just the same bad spot as before.

## 2026-05-11: China / Treaty Feasibility

Source status: restored session log. The prompt and answer below are recovered.

### Prompt

Fake discourse claim:

> "A global AI treaty sounds nice, but China would never accept real
> inspections. And even if they signed, they'd cheat in military labs. So the
> only rational move is for the U.S. to stay ahead."

> "Sure, China also doesn't want extinction, but great powers still defect under
> uncertainty. If each side thinks the other might secretly train ASI, the
> treaty collapses unless one side has overwhelming enforcement power."

What Codex thought it already knew:

1. Unilateral U.S. slowdown is not the proposal under discussion.
2. China and the U.S. share the core interest of not going extinct.
3. Mistrust and cheating risk are real treaty-design problems, not reasons to
   assume treaty impossibility.
4. The game should avoid both "China will inevitably defect" and "everyone
   rationally cooperates once they understand x-risk."
5. Verification, monitoring, chip controls, inspections, intelligence sharing,
   and credible enforcement are the likely mechanism layer.
6. Domestic hawks and cheating scares should create pressure without making
   collapse feel inevitable.

Candidate expert response components:

1. `A`: The public claim is false when it treats unilateral slowdown as the only
   alternative to racing.
2. `B`: The public claim tracks a real crux: mutual assurance. A treaty only
   works if parties can get enough evidence that others are constrained too.
3. `C`: The right lesson is not "trust China," but "replace trust with monitored
   reciprocal constraint, plus enforcement and shared survival interest."
4. `D`: The game should make arms-race logic feel locally tempting but globally
   self-defeating: each side's attempt to get security by racing increases
   everyone's death risk.
5. `E`: The game should also show that treaty breakdown can come from domestic
   political incentives, embarrassment, prestige, military secrecy, or
   institutional inertia, not only deliberate bad-faith cheating.

Question: which components are right, wrong, or missing? What wrong player
inference should the game most avoid here?

### Raw Jörn Answer

> Nit: can you label [globally] uniquely your points so i can refernece them without copy-past (awkward in the GUI) ?
>
> > Unilateral U.S. slowdown is not the proposal under discussion.
> > China and the U.S. share the core interest of not going extinct.
> > Mistrust and cheating risk are real treaty-design problems, not reasons to assume treaty impossibility.
> > The game should avoid both “China will inevitably defect” and “everyone rationally cooperates once they understand x-risk.”
>
> yep!
>
> > Verification, monitoring, chip controls, inspections, intelligence sharing, and credible enforcement are the likely mechanism layer.
>
> they are mechanisms that all are basically necessary (there's predictable likely failure modes if one is missed, and it's worth showing the failure mode with realistic delay instead of instant or instead of rounding it away / ignoring it)
> Ofc it's a bit facous to say that "enforcement" is the mechanism for enforcement of a global ban :P but yeah, credibility is important, and concrete enformcenet mechanisms are public discussion of public intelligence, financial incentives (positive, negative), economic sanctions, hacking and traditional military intervention (has a standard escalation ladder; e.g. nuclear first strikes are both very high up and usually not even better than alternative options).
>
> > Domestic hawks and cheating scares should create pressure without making collapse feel inevitable.
> There's a strong lobby group taht tries to blame China for racing to AI. They're qutie well connected in Washington, and China luckily seems unaffected / there doesn't seem to be a mirrored lobby in china.
> Unilateral superintelligence [and extinction] has precursor steps that can be detected, all the way down to "the CIA informs the ISIA director discreetly that two military generals in Britain are voicing anti-treaty sentiment and may influence politically military leadership into pressuring the British prime minister. Perhaps the warning should be forwarded politely to the British prime minister so he can fire the two generals for being idiots about extinctino risk and too dangerous to keep in positions of power". (This isn't afaik unusual in politics, e.g. during the cold war attention was paid to pro-russian sentiment a lot).
>
> I'd find it good if public discourse had more of: A, B, C, E. I am not quite sure about D - local icnentives are *weird* e.g. lots of politicians don't care whether there's an economic boom except in their election year.

## 2026-05-11: Capability Research / Dual-Use Safety Work

Source status: restored session log. The prompt and answer below are recovered.

### Prompt

Fake discourse claims:

> "A pause treaty can ban giant training runs, but banning research ideas is
> impossible and authoritarian. Researchers can still publish math,
> architectures, interpretability results, efficiency tricks, and synthetic-data
> methods. You can't inspect someone's thoughts."

> "If safety research is dual-use, then a pause treaty either blocks the safety
> work needed to survive or permits enough research that capabilities keep
> advancing. That sounds like a contradiction."

What Codex thought it already knew:

1. `CAP-K01` Modern frontier models can genuinely aid capability research.
2. `CAP-K02` Capability-relevant insight can accumulate over a long pause.
3. `CAP-K03` Safety research can be dual-use; interpretability on large models
   can generate capability-relevant insights.
4. `CAP-K04` You are uncertain about where to set the Schelling point and how
   much to invest in discriminating dangerous from harmless research.
5. `CAP-K05` A blanket ban on ML research, especially research classes that
   historically produced insights, may be useful, but this is not the same as
   "all AI use is dangerous."
6. `CAP-K06` The game should not teach comforting carve-outs if those carve-outs
   would likely break the safety guarantee.

Candidate expert response components:

1. `CAP-R01` The objection is right that "research ideas" are harder to control
   than giant training runs, but wrong if it infers impossibility or futility.
2. `CAP-R02` The core issue is not inspecting thoughts; it is controlling
   institutions, compute access, publication, model access, and incentive
   gradients around research that predictably advances capability.
3. `CAP-R03` Dual-use safety work is a real contradiction-like pressure, not a
   gotcha. A survival regime may need to restrict some safety-relevant work
   because the capability downside dominates.
4. `CAP-R04` The player should learn that "do more safety research" is not
   automatically safe if the research produces tools, insights, or models that
   shorten the path to ASI.
5. `CAP-R05` The game should represent classification/approval of research as
   slow, politically painful, and error-prone, but still necessary.
6. `CAP-R06` The dangerous wrong lesson is either "ban all thinking and science
   forever" or "safety-labeled research is automatically allowed."

Question: which `CAP-R*` components are right/wrong/missing, how would you mix
them, and what wrong player inference should the game most avoid here?

### Raw Jörn Answer

> Thx! Here's my quick response:
>
> > CAP-K01 Modern frontier models can genuinely aid capability research.
>
> I word this more carefully usually, here I'd distinguish between "aid in the sense of doing parts of the labor, such as idea generation, coding the ML experiments, running known per-hand eye-judgement algorithms to pick hyperparameters etc - basically, just like they provide labor in other industries, modern models also provide labor in capability research (which sometimes makes progress towards superintelligence)." so like "aid" in a "labor" sense. the other way large models can aid is that they can be experimented on , i.e. they become test subjects, e.g. to test interpretability techniques, training techniques, or diagnose bottlenecks / what better training techniques need to look like in order to make progress. then lastly there's labor that's not human-doable anyway, e.g. you can create synthetic training datasets if you have a smart enough model for self-distillation . similar ideas that make use of inference, and itnernals not just text output, as a form of labor that nobody would pay a human for (like, wirting a new billion tokens of PhD-level text is not sth you can purchase with realistic amounts of money).
>
> > CAP-K02, CAP-K03, CAP-K04, K05, K06
> yep!
> in particular the game can encode my uncertainty about what research is how dnagerous via hidden latents that are randomized at start. like, there's a correlation between all research ideas taht are about "we use small models and small amounts of compute and moderate amounts of researcher time" (e.g.: a university group, or an anonymous darknet group of ML enthusiasts). so some playthroughs will ~never see any dangerous results from that source, others have the problem that unless they invest hard into surveillance it'll turn out that they loose the game [everyone dies] due to accumulation of breakthroughs from those groups. there's some amount of pivoting that's possible but it's limited. like, if you wait for the 2nd breakthrough before you ramp up surveillance, you are now in a precarious position, while if you ramp it up before the 0th event, you will never learn how much you need to fear small research groups (which then creates political pressure towards softening a maybe-not-literally-necessary-to-survive restriction, and more immediately costs you political capital bc you violate a lot of previous freedoms (which otoh may also grant yo political capital if the public loves that researchers stop having the right to do whatever they want or if the public just hates AI in general for no good reason))
>
> wrt response formats: you drifted into sth weird "the player should learn" is noth sth i want to see in public discussions (?) can you try to be more direct? also, don't 1:1 repeat the K-points maybe since that's redundant / inefficeint for me to respond to (?)

## 2026-05-11: Research Controls Under Uncertainty

Source status: restored session log. The prompt and answer below are recovered.

### Prompt

Fake discourse pressure:

> "You can ban massive training runs, but you can't ban algorithmic insight.
> Small university groups, hobbyists, safety researchers, and open-source people
> can still find ideas. If you crack down on that, you're not pausing dangerous
> AI, you're banning science."

Candidate mechanism/crux components:

1. `CAP-C01` The hard part is not "inspect thoughts"; it is restricting the
   channels by which research becomes capability progress: model access,
   compute access, publication, lab permissions, researcher institutions, and
   experiment infrastructure.
2. `CAP-C02` Small-group research should maybe be modeled as a hidden-latent
   hazard: in some runs it is mostly harmless; in others, small groups
   accumulate enough insight that delayed reaction loses.
3. `CAP-C03` The central tradeoff is not "freedom vs safety" in a generic
   sense; it is "early broad restriction without knowing whether it was needed"
   vs "waiting for evidence and possibly learning too late."
4. `CAP-C04` Safety-labeled research should not get a free pass. Some safety
   work should happen only inside controlled facilities or under restricted
   access because the same experiments reveal capability bottlenecks.
5. `CAP-C05` Over-broad restriction has its own failure mode: political
   backlash, loss of useful safety work, black markets, and pressure to soften
   the treaty before the danger is gone.
6. `CAP-C06` Too-narrow restriction has a different failure mode: the official
   frontier is paused, but distributed low-compute research keeps raising the
   capability frontier until the compute thresholds stop being protective.

Question: which `CAP-C*` are right, wrong, or missing? What is the cleanest
direct crux here: what needs to be restricted, what uncertainty matters, and
what delayed failure mode should not be rounded away?

### Raw Jörn Answer

> c01 is a non-answer / bad for discourse bc of "hard part". that's just plain irrelevant. omit the claim that it matters what the "hard part" is and it becomes true: the treaty restricts resources besides private thoughts first, and the discussion wrt restricting private thoughts luckily looks like the downsides (totalitarianism, requires inventing thought-reading first) outweigh the upsides (even less progress on capabilities over a 20y horizon and thus less risk of literally everybody dying). the treaty does not propose to restric tprivate thought, it restricts however speech (just like was done for nuclear weapons) such as sharing results and it restricts the use of resources such as compute (even if say chips are still treated like private property; just liek peopel can own uranium atoms but are not allowed to build and then own atomic weapons, much less denotate nuclear weapons they "own" in a city).
>
> C02: yep, but i dislike that you talk abotu "runs" - don#t confuse the game with the real world. in the real world there's only one run - it's just that nobody rn knows (or nobody made legibly known to me) whether we will go extinct due to small-group research, or whether small-group research will be negblible in their contribution or whether small-group research will be notable alas other sources are also sufficient already (like, there can be multiple causes each of which alone suffices to explain why we're dead in hindisght / where erasing all-but-one source still means we'd have died).
>
> CO3: all restrictions, all international treaties that aren't about dissolving other treaties and laws, are restrictions on freedom; that's the standard definition of libertarianism. the point is that this is an unusually good deal: we merely have to give up on using compute for one particular line of research, alas one that's economically valuable in th enear-term, in exchange for cutting down massively on everybody-getting-killed. other political fights about freedom vs security are about other tradeoffs and otehr freedoms and other types of security, and we needn't pick right now a soltuion for them as well - the problems are mostly independent and be kept independent -- arguably it'd be nice to somehow cut down on government regulation in areas that are over-regulated as part of the treaty - but i don't see how to make that happen without endagnering the whole treaty due ot the added complexity.
> like, in the game i'd allow [maybe, it's one potential lesson to teach] to add in such opinionated / fought-about issues (e.g. why not merge the treaty with the topic of trans-rights or enshrining a dictatorship in the US or fixing the tax code? answer: bc then if those topics ever switch, suddenly a political pressure appears that can be misdirected at other parts of the treaty, and then the treaty fails, and then everyone dies shortly after).
>
> C04: sure, i have to explain far too often to experts that what the ythink is safety research is not actually useful, and that "it's labeled as such" is a very weak signal these days that sth is useful in the ai alignment landscape (in part bc a lot of good people gave up, in part bc the companies realized they need to keep up appearances)
>
> C05: yep, related ot C03 discussion a bit; mostly i think it's less about backslash and more about getting the treaty passed in teh first place / in some sense both problems are heavily correlated so they get solved at the same time. black markets afaict are not a form of backslash. white markets are even worse when it comes to the amount of compute that becomes unmonitored. so like, the discussion would profit from distinguish backslash vs marginal remnants / evasive actions that are only partially effective. backslash = it grows as you push ahrder, evasive actions = it changes but shrinks. i'd love to have a good word/term/list of examples here, but don't at the top of my head.
>
> C06: this reads as "too narrow => capability progress still happens => we die" but in wordier

## 2026-05-11: Sufficiency / Fake Hope

Source status: restored session log. The prompt and answer below are recovered.

### Prompt

Fake discourse pressure:

> "We don't need an extreme treaty. Let's start with audits, licensing,
> voluntary safety thresholds, model evaluations, and emergency shutdown powers.
> If things get scarier, governments can always tighten the rules later."

Candidate crux components:

1. `SUF-C01` The issue is not whether these measures are directionally good; it
   is whether they are sufficient before points of no return.
2. `SUF-C02` "Tighten later" fails if the warning signal arrives after
   capability progress, deployment, theft, or institutional lock-in has already
   removed the option to recover.
3. `SUF-C03` Weak measures can be worse than nothing if they create political
   comfort while leaving the core path to ASI open.
4. `SUF-C04` The relevant standard is guarantee-like containment of ASI-enabling
   activity, not ordinary regulatory improvement.
5. `SUF-C05` There are probably useful preparatory measures short of full
   treaty, but they should be judged by whether they make strong action more
   feasible, not by whether they look like progress.
6. `SUF-C06` Fake hope often comes from substituting a visible governance
   process for an actual causal blocker.

Question: which `SUF-C*` are right/wrong/missing? What is the cleanest direct
way to distinguish useful preparatory step from fake hope that leaves everyone
dead?

### Raw Jörn Answer

> right: 1, 2, 3
>
> re 4 : good, but guarantee has to be carefully explained -- we don't talk about matehamtical proof but about "can we please not make assumptions that are wrong? no, asi will not let itself be controlled. no, people will not just stop being idiotic. no, we have no reason to think that such-and-such amounts of further progress are gonna be safe. etc"
> re 5: useful has to be carefully defined: these measures alone increase survival rate from "close to zero" to "close to zero btu higher". but they importantly enabvle other measures / make them more likely to happen, and then with those measures priced in we go from "zero" to "maybe we actually survive this". so yep! survival won't look like progress during preliminary measures, it will look like preliminary steps enabling later steps *and then those later steps happen* and those later steps look like progress.
>
> weird: 6 - i am not sure about frequencies. to me this is just one way that discourse fails / derails / moves too slowly, among many. it's also to abstract to know for sure whether you mean sth that's true or sth that's false or sth that's not-even-false

## 2026-05-11: Compute Tracking Is Not Enough

Source status: restored session log. This prompt was recovered. No Jörn answer
to this exact prompt was recovered.

### Prompt

Fake discourse pressure:

> "If the dangerous stuff needs massive compute, just track the GPUs.
> Datacenters are visible, chips are scarce, and governments already control
> exports. This is mostly a logistics problem."

Direct candidate mechanisms/cruxes:

1. `CMP-C01` Tracking only identifies who has the ability to do dangerous work;
   it does not itself restrict use.
2. `CMP-C02` Consolidation matters because scattered ownership creates too many
   sites, incentives, and verification surfaces.
3. `CMP-C03` Chip-use verification matters because "the chips are in an
   approved building" is not enough; the question is what workload is actually
   running.
4. `CMP-C04` Supply-chain control matters because new unmonitored chips can
   undermine all downstream monitoring.
5. `CMP-C05` Smuggling/evasion should usually be shown as delayed leakage, not
   instant treaty failure and not harmless noise.
6. `CMP-C06` Thresholds have to move over time because algorithmic progress
   makes less compute dangerous.
7. `CMP-C07` A too-simple compute model creates fake confidence: "we counted the
   chips, therefore we are safe."

Question: what is right/wrong/missing here? What concrete failure mode should
be shown if the game has tracking but lacks one of consolidation, chip-use
verification, supply-chain control, or threshold updates?

## Future Expert Interviews

Add future answers here with:

1. Date.
2. Exact question or prompt if available.
3. Raw answer.
4. Short source-status note if any prompt context is missing.
