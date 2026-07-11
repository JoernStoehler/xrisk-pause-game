# Expert Model Chat Excerpts

Status: raw source excerpts from Jörn chat, copied to preserve context for the
expert-model extraction stream. This file is not polished prose, not
player-facing text, and not an approved final domain model. It is a source layer
for what Jörn said in chat; separate synthesis files are reasoning artifacts and
may contain compression errors.

Use this file to recover the original expert-model statements when a paraphrase
or game implication looks suspicious. Do not treat typos, shorthand, or casual
rhetoric as wording to copy into the game.

## 2026-05-11: Responses To Fake Public-Discourse Quotes

Context: Codex produced fake composite public-discourse quotes about AI pause,
AI risk, regulation, treaties, open source, near-term harms, lab safety, and
fatalism. Jörn replied with the following expert-model response, explicitly not
optimized for rhetoric.

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

## 2026-05-11: China / Treaty Feasibility Follow-Up

Context: Codex asked about fake China/treaty-feasibility discourse claims, then
listed "what I think I already know" bullets and candidate response components.
Jörn first requested globally unique labels for future points, then replied:

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

Context: Codex asked about fake discourse claims that research ideas cannot be
banned and that dual-use safety research creates a contradiction for pause.
Codex repeated several `CAP-K*` context points and proposed `CAP-R*` response
components. Jörn interrupted the format as too redundant and answered:

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

Context: Codex asked a shorter `CAP-Q02` prompt about whether research controls
are "banning science," with candidate crux components `CAP-C01` through
`CAP-C06`. Jörn replied:

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

Context: Codex asked about weaker governance measures such as audits, licensing,
voluntary safety thresholds, model evaluations, and emergency shutdown powers,
using candidate crux components `SUF-C01` through `SUF-C06`. Jörn replied:

> right: 1, 2, 3
>
> re 4 : good, but guarantee has to be carefully explained -- we don't talk about matehamtical proof but about "can we please not make assumptions that are wrong? no, asi will not let itself be controlled. no, people will not just stop being idiotic. no, we have no reason to think that such-and-such amounts of further progress are gonna be safe. etc"
> re 5: useful has to be carefully defined: these measures alone increase survival rate from "close to zero" to "close to zero btu higher". but they importantly enabvle other measures / make them more likely to happen, and then with those measures priced in we go from "zero" to "maybe we actually survive this". so yep! survival won't look like progress during preliminary measures, it will look like preliminary steps enabling later steps *and then those later steps happen* and those later steps look like progress.
>
> weird: 6 - i am not sure about frequencies. to me this is just one way that discourse fails / derails / moves too slowly, among many. it's also to abstract to know for sure whether you mean sth that's true or sth that's false or sth that's not-even-false
