---
title: "If Anyone Builds It, Everyone Dies - Online Resources: Chapter 10 - A Cursed Problem"
author: "Eliezer Yudkowsky, Nate Soares"
year: 2025
source_url: "https://ifanyonebuildsit.com/resources"
source_format: html
downloaded: 2026-02-11
encrypted: false
notes: "Supplementary Q&A and extended discussions for Chapter 10 - A Cursed Problem from the companion website"
---

# Online Resources: Chapter 10 - A Cursed Problem

## /10/a-closer-look-at-before-and-after

A Closer Look at Before and After | If Anyone Builds It, Everyone Dies | If Anyone Builds It, Everyone Dies[](/)[](/)[](/resources)[](/10)[](/10#extended-discussion)[](/resources)[](/act)[](/march)[](/media-kit)[](/order)
## A Closer Look at Before and After

As mentioned in the chapter, the fundamental difficulty researchers face in AI is this:

You need to align an AI **Before** it is powerful enough and capable enough to kill you (or, separately, to resist being aligned). That alignment must then *carry over to different conditions,* the conditions **After** a superintelligence or set of superintelligences[*](#ftnt250) could kill you if they preferred to.

In other words: If you’re building a superintelligence, you need to align it without ever being able to thoroughly test your alignment techniques in the real conditions that matter, regardless of how “empirical” your work feels when working with systems that are not powerful enough to kill you.

This is not a standard that AI researchers, or engineers in almost any field, are used to.

We often hear complaints that we are asking for something unscientific, unmoored from empirical observation. In reply, we might suggest talking to the designers of the space probes we talked about in Chapter 10.

Nature is unfair, and sometimes it gives us a case where the environment that counts is not the environment in which we can test. Still, occasionally, engineers rise to the occasion and get it right on the first try, *when armed with a solid understanding of what they’re doing *— robust tools, strong predictive theories — something very clearly lacking in the field of AI.

The whole problem is that *the AI you can safely test, without any failed tests ever killing you*, is operating under a different regime than the AI (or the AI ecosystem) that *needs to have already been tested, because if it’s misaligned, then everyone dies.* The former AI, or system of AIs, does not correctly perceive itself as having a realistic option of killing everyone if it wants to. The latter AI, or system of AIs, does see that option.[†](#ftnt251)

Suppose that you were considering making your co-worker Bob the dictator of your country. You could try making him the mock dictator of your town first, to see if he abuses his power. But this, unfortunately, isn’t a very good test. “Order the army to intimidate the parliament and ‘oversee’ the next election” is a very different option from “abuse my mock power while being observed by townspeople (who can still beat me up and deny me the job).”

Given a sufficiently well-developed theory of cognition, you could try to read the AI’s mind and predict what cognitive state it would enter if it really did think it had the opportunity to take over.

And you could set up simulations (and try to spoof the AI’s internal sensations, and so on) in a way that your theory of cognition predicts would be very similar to the cognitive state the AI would enter once it really had the option to betray you.[‡](#ftnt252)

But the link between these states that you induce and observe in the lab, and the state where the AI actually has the option to betray you, *depends fundamentally on your untested theory of cognition. *An AI’s mind is liable to change quite a bit as it develops into a superintelligence!

If the AI creates new successor AIs that are smarter than it, *those *AIs’ internals are likely to differ from the internals of the AI you studied before. When you learn only from a mind Before, any application of that knowledge to the minds that come After routes through an *untested theory *of how minds change between the Before and the After.

Running the AI until it has the opportunity to betray you *for real, *in a way that’s hard to fake, is an empirical test of those theories in an environment that differs fundamentally from any lab setting.

Many a scientist (and many a programmer) knows that their theories of how a complicated system is going to work in a fundamentally new operating environment *often don’t go well on the first try*.[§](#ftnt253) This is a research problem that calls for an “unfair” level of predictability, control, and theoretical insight, in a domain with unusually low**levels of understanding — with all of our lives on the line if the experiment’s result disconfirms the engineers’ hopes.

This is why it seems *overdetermined,* from our perspective, that researchers should not rush ahead to push the frontier of AI as far as it can be pushed. This is a legitimately insane thing to attempt, and a legitimately insane thing for any government to let happen.

[*](#ftnt250_ref) We sometimes hear people say that there’s no cause for worry, because we can set up *multiple *superintelligences to all collectively police each other. There are many reasons these proposals strike us as wildly implausible, but it’s worth emphasizing here that ideas like this face the same core problem we’ve mentioned a few times before: *We only get one shot at the clever scheme working.*

You can do some testing and observation, Before, of setups that *don’t* actually stake the life of everyone on the planet*, *but the case that matters will not be quite the same. (And such a scheme would need to be *very *clever, because we have no idea how to get *[any ](/10/what-if-there-are-lots-of-different-ais)*[of the AIs in the set](/10/what-if-there-are-lots-of-different-ais) to care about us.)

[†](#ftnt251_ref) You could try to make a weaker AI mistakenly *believe* that it’s in a position to gain a decisive advantage, and try to train it not to act that way even when it sees that option. But you would be training an AI system that was [dumb enough to be fooled](/3/smart-ais-spot-lies-and-opportunities), and that was seeing fake weapons instead of real weapons. So the potentially-lethal distribution would still be noticeably different from the training distribution; there’s a noticeable difference between being *told *you have a weapon that could kill your operators, and actually building a weapon or escape route yourself and understanding it in detail. The AI that is fooled by fake options is not the same as the AI that sees real options.

An alignment mechanism that works on the AIs dumb enough to be fooled is an alignment mechanism that has only ever been tested Before but that nevertheless needs to work After.

[‡](#ftnt252_ref) For more on why this isn’t a very hopeful idea, see our answer to the question “[What if we make it think it’s in a simulation?](/5/what-if-we-make-it-think-its-in-a-simulation)”

[§](#ftnt253_ref) For instance: Newtonian mechanics made all sorts of shockingly good empirical predictions. It was a simple, concise mathematical theory with huge explanatory power that blew every previous theory out of the water. But if you tried to use it to send payloads to distant planets at relativistic speeds, you’d still be screwed, because Newtonian mechanics does not account for relativistic effects.

The only advance warnings you would get would be little hints about light seeming to move at the same speed in all directions at all times of year, and light bending around the sun during eclipses, and the perihelion of Mercury being a little off from what Newtonian mechanics predicted. Small anomalies, weighed against an enormous body of predictive success in a thousand empirical domains.

Imagine that, before Newtonian mechanics was discovered, strange aliens offered Earth a bargain, where we’d be given great wealth if we could complete an interstellar delivery, but if we failed then we’d be destroyed. Imagine scientists discovered Newtonian mechanics, arguing that surely *now *they should be allowed to send the delivery now. They’d have heaps and heaps of empirical evidence on their side, in accordance with new scientific knowledge that was in the middle of unlocking powerful new technologies.

Imagine the amount of *spine* that a regulator would need in order to say, “And yet, you can’t explain the advancement of the perihelion of Mercury, so the answer is ‘no.’”

It would feel so unfair, to the scientists! They’d have so much evidence to bring to bear!

(Indeed, a realistic regulator probably *couldn’t tell* that the answer would still have to be “no,” which is part of why we are [not hopeful about an international coalition](/12/why-not-use-international-cooperation-to-build-ai-safely-rather-than-to-shut-it-all-down) and think that Earth just needs to back off from the problem entirely.)

Nature doesn’t care about all the mountains of evidence and predictions accumulated by Newtonian physics. The theory still falls apart when we move to energies and scales far outside what we’d previously been able to observe. It just doesn’t work at high energies and long distances.

Getting scientific theories to work on the first critical try is hard.

[The Tale of Chicago Pile-1→](/10/the-tale-of-chicago-pile-1)[Resources](/resources) › [Chapter 10](/10)[
### Won’t AI differ from all the historical precedents?Yes.3 min read](/10/wont-ai-differ-from-all-the-historical-precedents)[
### How long would it take to solve the ASI alignment problem?The difficulty isn’t just the lack of time; it’s the lethality of mistakes.2 min read](/10/how-long-would-it-take-to-solve-the-asi-alignment-problem)[
### What if there are lots of different AIs?It doesn’t much help if we can’t make any of them care about good things.2 min read](/10/what-if-there-are-lots-of-different-ais)[
### What if AI is developed only slowly, and it slowly integrates with society?That scenario still ends in catastrophe.3 min read](/10/what-if-ai-is-developed-only-slowly-and-it-slowly-integrates-with-society)

Your question not answered here?[Submit a Question.](/submit-question)
## [Extended Discussion](#extended-discussion)[
### A Closer Look at Before and After](/10/a-closer-look-at-before-and-after)[
### The Tale of Chicago Pile-1](/10/the-tale-of-chicago-pile-1)[](/)[](/resources)[](/act)[](/march)[](/order)[](/human-intelligence-enhancement)[](/errata)





## /10/how-long-would-it-take-to-solve-the-asi-alignment-problem

How long would it take to solve the ASI alignment problem? | If Anyone Builds It, Everyone Dies | If Anyone Builds It, Everyone Dies[](/)[](/)[](/resources)[](/10)[](/resources)[](/act)[](/march)[](/media-kit)[](/order)
## How long would it take to solve the ASI alignment problem?
#### The difficulty isn’t just the lack of time; it’s the lethality of mistakes.

“How long would it take?” is a [hard call](/2/obvious-insights-take-time), in part because it’s somewhat missing the point. If researchers are tackling a problem in an unproductive way, they can potentially stay “stuck” indefinitely, even if the problem could in principle be solved quickly. It’s hard to say today what it would look like to get “un-stuck” and make reliable progress on the problem, but it looks like it would require a pretty radical change in how science and engineering is usually done.

How *is *science and engineering usually done?

Consider the theory that the Sun went around the Earth, a view that ancient thinkers converged on by 500 CE. Copernicus proposed a competing theory; the theory was considered, and largely rejected. It wasn’t until Galileo built a telescope and saw Jupiter’s moons — celestial bodies that go around Jupiter instead of Earth — that the budding scientific community was spurred to the conclusion that the Earth goes around the Sun.

Humanity came to the correct theory of orbital mechanics in time. But before that, it came to a false consensus. And it confidently held to that false consensus until reality started beating Galileo over the head with the fact that the Earth is not at the center of everything.

The usual process by which the scientific community converges on the truth involves steps where the scientific community is wrong, and reality beats us over the head with evidence until we update our models.

The trouble with ASI alignment isn’t just that it’s a tricky research program. It’s that “reality beats humanity over the head with the fact that their first favorite theory was flawed” in this case looks like an ASI consuming the planet. There would be no survivors to converge on a better theory of ASI alignment.

If humanity had a hundred years *and unlimited retries, *we probably wouldn’t have much trouble sorting out the ASI alignment problem.

But even if we had three hundred years to develop a theory of intelligence, a theory of how AIs change as they get smarter, and a theory of how to stably and robustly aim them at specific goals…well, in lieu of the ability to actually *try and see *what happens when the AI gets radically smarter a few times, we would very likely converge on the wrong answer.

Humanity has a tendency to converge on that wrong sort of answer, even in far simpler domains, when we haven’t yet had a chance to run a decisive test.[What if there are lots of different AIs?→](/10/what-if-there-are-lots-of-different-ais)[Resources](/resources) › [Chapter 10](/10)[
### Won’t AI differ from all the historical precedents?Yes.3 min read](/10/wont-ai-differ-from-all-the-historical-precedents)[
### How long would it take to solve the ASI alignment problem?The difficulty isn’t just the lack of time; it’s the lethality of mistakes.2 min read](/10/how-long-would-it-take-to-solve-the-asi-alignment-problem)[
### What if there are lots of different AIs?It doesn’t much help if we can’t make any of them care about good things.2 min read](/10/what-if-there-are-lots-of-different-ais)[
### What if AI is developed only slowly, and it slowly integrates with society?That scenario still ends in catastrophe.3 min read](/10/what-if-ai-is-developed-only-slowly-and-it-slowly-integrates-with-society)

Your question not answered here?[Submit a Question.](/submit-question)
## [Extended Discussion](#extended-discussion)[
### A Closer Look at Before and After](/10/a-closer-look-at-before-and-after)[
### The Tale of Chicago Pile-1](/10/the-tale-of-chicago-pile-1)[](/)[](/resources)[](/act)[](/march)[](/order)[](/human-intelligence-enhancement)[](/errata)





## /10/the-tale-of-chicago-pile-1

The Tale of Chicago Pile-1 | If Anyone Builds It, Everyone Dies | If Anyone Builds It, Everyone Dies[](/)[](/)[](/resources)[](/10)[](/10#extended-discussion)[](/resources)[](/act)[](/march)[](/media-kit)[](/order)
## The Tale of Chicago Pile-1

In 1942, Chicago Pile-1 was built under the direction of Enrico Fermi. It comprised 45,000 graphite blocks weighing 330 tonnes, 4.9 tonnes of uranium metal, and 41 tonnes of uranium dioxide, placed underneath the stands at the Stagg Field rackets court at the University of Chicago. Depending on how you define terms, you could call it the first nuclear reactor; it wasn’t meant to produce power for industrial use, but it was the first engine for a sustained critical reaction.

By modern standards, some safety corners were cut. For example, the part where it was built underneath the stands in a rackets court at a university inside a major city.

General Groves, director of the overall Manhattan Project, had tried to have the experiment happen *near* rather than *directly in* Chicago, and had ordered a building constructed for that purpose, but construction had fallen behind. Arthur Compton, the Nobel laureate physics professor at the University of Chicago who hosted CP-1, had avoided asking the university president for permission since, Compton later explained, the president would have had to say no, and that would have been the wrong answer.

The labor of stacking up the bricks was done by high school dropouts looking to earn some extra money while awaiting their military draft.

The uranium was enclosed in a seven-meter rubber cube, rather than a metal reactor vessel. There was, of course, no giant concrete containment building.

Upon later learning these facts, James Conant, chair of the National Defense Research Committee, is said to have turned white. Even for the 1940s, this wasn’t considered totally normal scientific behavior.

If you were reading about all this in a history book without knowing where it was heading, you might expect that you were reading the prelude to some great safety failure. So much is missing that the culture of 2025 thinks of as standard safety measures. Where are the inspectors and clipboards? The huge, weighty rulebooks of operating regulations? The soberly debating committees? The impact statements? The regulations saying that only Very Credentialed People are allowed to stack up the uranium bricks? Where’s the *paperwork?*

But the pile of uranium bricks and graphite bricks did not melt down.

And the reason is that Fermi knew what he was doing; he had predicted the rules in advance.

Fermi was not just stacking up mysterious bricks that generated more heat when they were brought into close proximity. He knew that some uranium atoms would spontaneously decay and fission. He knew that when this happened, the fission would generate neutrons. He knew those neutrons would sometimes knock into other uranium atoms, and that this would sometimes trigger another fission.

Fermi understood *in advance*; he did not have to find out the hard way, that he was dealing with an exponential process. Not in the sense that today’s media overuses the word “exponential” to just mean “large” or “fast,” but a process whose rate of increase is proportional to its current level: *mathematical* exponentiation.

Fermi knew that by stacking up more uranium bricks and graphite bricks, he was *increasing the factor multiplied* within an exponential process. As discussed in the book, there is a world of difference between a neutron multiplication factor below 100 percent and a neutron multiplication factor above 100 percent.[*](#ftnt254) Below 100 percent, you just have a warm pile of bricks. But past 100 percent, the radioactivity level of the pile goes up. And up. And up.

It does not behave like all of the previous, smaller heaps of uranium bricks that you may have tested. If you didn’t understand what you were doing well enough to under-moderate the reactor (so that the chain reaction would slow down if the reactor started overheating), then the reactor would not have stabilized itself like the smaller piles did. If you let it keep running overnight, you wouldn’t get a new, industrially useful level of power output the next day.

The heap would just get more and more radioactive until the graphite caught fire or the uranium melted into slag.

The firefighters would come then, and they would find a confusing fire that did not stop putting out heat when they poured water on it.

1942 would not have been a great year to attend the University of Chicago.

But Fermi already knew about all of that! So it was fine. When Fermi ordered a control rod (a wood plank with a cadmium sheet nailed to it) to be pulled out twelve more inches on December 2, 1942, he called in advance that this would be the withdrawal that made the measured radioactivity levels “climb and continue to climb…it will not level off.”

Then the radioactivity doubled over the next two minutes, and doubled again, until they’d let the reaction run and double every two minutes for a total of twenty-eight minutes, going up by a factor of around 16,000.

A 16,000-fold increase of radioactivity was the pile’s expected behavior, predicted correctly, understood in detail in advance. It wasn’t a surprise gotcha, run into by somebody ordered to pile up ten times as many uranium bricks as last time to see if anything interesting and profitable happened.

As discussed in the book, there is a very narrow margin between a nuclear reactor and a nuclear explosion. A margin of slightly more than half a percent, to be exact. That is the difference between a reactor that puts out an industrially useful amount of power and a reactor that explodes.

Which is to say: You have to make a nuclear reaction more and more powerful, before it really starts working at *all.* And then, a bare moment after it gets that powerful, if it gets a *hair *more powerful than that, if you go 0.65 percent further, it explodes.

That is a kind of problem that reality is allowed to hand you. It happens.

But Fermi and [Szilard](/intro/when-leo-szilard-saw-the-future) and their team had predicted all of these rules in advance of finding out the hard way. They knew about delayed neutrons and prompt neutrons. (See Chapter 10 for more about this part of the story.) So once Fermi got the neutron multiplication factor up to 100.06 percent, Fermi *didn’t *order the control rod pulled out further, to see what happened with an even more powerful heap. He went only up to criticality, not 0.65 percent further to prompt criticality. Fermi got the result he had predicted, and he *knew *what would happen if he went any further. So he went no further.

Twenty-eight minutes later, with radioactivity doubling every two minutes to a 16,000-fold increase, Fermi shut down the world’s first nuclear reactor — the piled uranium bricks under the stands of a university stadium inside a major city.

To be clear, we wouldn’t claim that Fermi was being completely responsible just because he had an apparently self-consistent model of low-energy reactor physics. Fermi could have been wrong. Humanity has run into some surprises over the course of nuclear engineering.

The Castle Bravo test of the first thermonuclear weapon had three times its anticipated yield because it contained mixed lithium-6 and lithium-7 as nuclear fuel for a fusion reaction. The people making the weapon knew about some potent nuclear products from fusing lithium-6 but none from fusing lithium-7, and it turned out that lithium-7 was *not *actually inert.

Fermi, in running his reaction at a low intensity and not at a level where it was putting out industrially useful levels of power, avoided *many *complications that appear in nuclear reactors powerful enough to be profitable. If there had been any reaction-rate-dependent neutron-factor-increasers that Fermi did not anticipate — any previously unknown phenomena, of the sort that showed up in the Castle Bravo test — any surprises that manifested once the neutron flux went up by a factor of 16,000 and bumped up the multiplication factor from 1.0006 to 1.02 faster than the reaction time for a human to dump in emergency cadmium — then today, America would have a Chicago Exclusion Zone.

Even so, we’re not saying that Fermi was necessarily wrong to run that experiment. It wasn’t the sort of experiment that could have destroyed *the human species*. There were arguably stakes worth wagering a Chicago Exclusion Zone as the non-default outcome of encountering a hidden new phenomenon that upset a hopefully precise understanding. In reality, Nazi Germany wouldn’t end up close to obtaining nuclear weapons by 1945, but nobody in 1942 knew that would be true. Predictions like that are hard calls. Piling up the uranium bricks *outside* a major city would have been inconvenient, and inconveniences have real costs in war.

Our goal in recounting this event isn’t to pass a moral judgment one way or the other. To start with, we would need to spend more time looking at the historical details of what happened to understand how those exact people’s exact options looked and whether they passed up a better option.

The lesson we’d draw is more about the difference between stereotypical “safety” and what it actually takes to have reality not kill you.

Chicago Pile-1 had a great absence of *stereotypical, visible, ostentatious safety measures* of the kind that bureaucrats know how to demand. Disaster was avoided by *understanding,* not by safety theater. Fermi’s understanding proved sufficient; it imaginably might not have, but in reality it was. And that level of understanding was what reality demanded, not any amount of pretense.

If nobody had understood at a deep level what was going on inside a pile of weird metal bricks…then it would not have helped much for lots of inspectors in sober-looking suits to peer at the bricks of inscrutable metal, or print a well-bound official-looking Safety Handbook saying that only Certified Operators are allowed to stack the weird metal bricks.

We can imagine a world where Chicago Pile-1 was built *without* an Enrico Fermi. Without anyone, indeed, who understood the true laws governing the mysterious self-warming bricks.

In such a world, perhaps another scientist still could have seen the lethal danger coming before it was too late. We can imagine an exchange like the following:

**Salviati**: The way that the bricks jump in power when brought together is an obvious signature of a self-reinforcing process, the sort of process that can make itself stronger. If you look for mathematical models that can describe a process like that at all, they tend to have a mode where, if you push them far enough, they explode.

**Simplicio: **What nonsense! In real life, it’s scientific to believe that every kind of process like that eventually runs into a limit. They can’t go on forever to infinity! So stacking up bricks of uranium and graphite ought to be perfectly safe, because it’ll hit a limit, see, and be harmless.

**Salviati: **That’s like arguing that a supernova can’t be dangerous because it can’t get *infinitely *hot, or arguing that an artificial superintelligence would be harmless because it wouldn’t be infinitely intelligent. Or like arguing that a bullet must have *some* limit to its speed and therefore won’t pierce skin. Just because there’s a limit somewhere doesn’t mean the limit is *low.* All the mathematical models we have of *why *the bricks are self-warming suggest that there’s a critical threshold somewhere, such that going past that threshold will make the pile explode and kill everyone nearby.

**Simplicio: **But scientists can’t even agree on where that threshold is! If there were a scientific consensus that adding a few more bricks was dangerous, I’d stop. But when scientists can’t even agree where exactly the danger lies, why worry?

**Salviati: **When manyof the [leading](https://youtu.be/KcbTbTxPMLc?feature=shared&t=1580)[scientists](https://www.youtube.com/watch?v=PTF5Up1hMhw&t=2283s)[warn](https://aistatement.com/) that there’s a serious possibility of a lethal explosion, the fact that they can’t calculate exactly when the explosion starts should make you *more *worried, not less. Maybe if we knew precisely how the bricks worked, we’d see that there was some narrow band where we can safely extract energy, below which the bricks are useless and above which the bricks are lethal. But the fact that the scientists are still bickering means that we *don’t *know what we’re doing yet! Which means that it’s not the time to be playing around with whatever chain reaction is making those bricks warm today, lest it make them explode and kill us tomorrow! *Figure out the science first.*

We are very, very far from being able to model AI even a fraction as well as Fermi understood nuclear chain reactions.

At some unknown point, if we continue down this path, we will run at breakneck speed into an outcome far more serious than irradiating Chicago.

[*](#ftnt254_ref) As we observe in the book’s Chapter 10 endnote 6, physicists do not actually give neutron multiplication factors in percentages. We give them that way for clarity, for reasons discussed in the aforementioned endnote.
#### Notes

[1] *first thermonuclear weapon: *Castle Bravo was not the first detonation of a thermonuclear (hydrogen) *device;* that distinction belongs to the building-sized “Mike” of the [Ivy Mike test](https://en.wikipedia.org/wiki/Ivy_Mike), which did not rely on lithium.[An Alchemy, Not a Science→](/11)[Resources](/resources) › [Chapter 10](/10)[
### Won’t AI differ from all the historical precedents?Yes.3 min read](/10/wont-ai-differ-from-all-the-historical-precedents)[
### How long would it take to solve the ASI alignment problem?The difficulty isn’t just the lack of time; it’s the lethality of mistakes.2 min read](/10/how-long-would-it-take-to-solve-the-asi-alignment-problem)[
### What if there are lots of different AIs?It doesn’t much help if we can’t make any of them care about good things.2 min read](/10/what-if-there-are-lots-of-different-ais)[
### What if AI is developed only slowly, and it slowly integrates with society?That scenario still ends in catastrophe.3 min read](/10/what-if-ai-is-developed-only-slowly-and-it-slowly-integrates-with-society)

Your question not answered here?[Submit a Question.](/submit-question)
## [Extended Discussion](#extended-discussion)[
### A Closer Look at Before and After](/10/a-closer-look-at-before-and-after)[
### The Tale of Chicago Pile-1](/10/the-tale-of-chicago-pile-1)[](/)[](/resources)[](/act)[](/march)[](/order)[](/human-intelligence-enhancement)[](/errata)





## /10/what-if-ai-is-developed-only-slowly-and-it-slowly-integrates-with-society

What if AI is developed only slowly, and it slowly integrates with society? | If Anyone Builds It, Everyone Dies | If Anyone Builds It, Everyone Dies[](/)[](/)[](/resources)[](/10)[](/resources)[](/act)[](/march)[](/media-kit)[](/order)
## What if AI is developed only slowly, and it slowly integrates with society?
#### That scenario still ends in catastrophe.

If AI passes some unknown [critical threshold](/1/will-ai-cross-critical-thresholds-and-take-off) and shoots up in intelligence very quickly, that makes alignment especially hard. But speed is not where the central difficulty comes from. The central difficulty lies in the difference between [Before and After](/10/a-closer-look-at-before-and-after).

Suppose that humanity gets several years to “integrate” with AIs that are [roughly as general as a human](/1/is-human-level-intelligence-a-meaningful-concept).

(Researchers discussing “[slow](https://sideways-view.com/2018/02/24/takeoff-speeds/)” progress past this point are generally imagining that we would have [at most](https://www.lesswrong.com/posts/AfGmsjGPXN97kNp57/arguments-about-fast-takeoff?commentId=RupmYHg4idj6g6i6h) a few years before AIs become vastly more intelligent and powerful than any human — not decades. But even if a serious contingent of researchers expected decades, it’s not obvious that decades would suffice.)

In those several years, researchers would learn more about how AIs work. Researchers would see various issues arise, and they would find various work-arounds, or ways to mitigate the damage. AI progress would continue; and at some point, the AIs would become collectively capable enough to take power. This follows from the fact that *the AIs just keep getting smarter in this scenario*.

At that point, researchers will have some pool of tricks and hacks they came up with to make AIs that *can’t *take over more reliable and profitable. They would need this set of existing tricks and hacks to generalize to AIs that *can *take over. And they would need this to work on the first try.

At the end of the day, sufficiently capable AIs will be lethally dangerous; and we can only learn from experimental failures that aren’t lethal. This looks like a more**hopeless problem if AI progress exhibits threshold effects, as seems likely. But that doesn’t mean that there’s a realistic chance that everything turns out great if we grow enormous numbers of opaque smarter-than-human AIs, but we do it *slowly*.

One way to tell that there must be a difficult transition point *somewhere *is to consider a world full of billions of superintelligent AIs that are serving humans despite not actually caring about the humans’ interests. In reality, the world would never get to such a state, assuming we’re using anything like modern machine learning to build the AIs; things would go off the rails far sooner than that. But predicting exactly when and how is a hard call. Considering the extreme case makes it clear that at *some *point, things would go off the rails.

By analogy: If your city plans to enslave dragons to plow their fields and roast their coffee, some problems get *worse* if the dragons grow up very quickly. But the core problem is not, "What if the huge fire-breathing monsters that could wipe out our city with one terrible breath grow up* quickly*?"

If you imagine finding yourself in a city full of unfriendly mature dragons, that situation will go poorly very quickly. It will go poorly even if you thought you had some clever scheme for controlling those dragons, like giving them a legal system which said that the humans own most of the property, such that surely no dragon coalition would dare to suggest [an alternate legal system](/5/wont-ais-need-the-rule-of-law) for fear of their own rights being invalidated. It will go poorly even if you plan to cleverly [play the dragons off against each other](/11/what-if-we-made-ais-debate-compete-with-or-oversee-each-other), so that no dragon would dare to breathe fire for fear of the other dragons. When the dragons are fully mature, they will all look at each other and nod and then roast you.

If AIs develop fairly slowly, then that future might get interesting and weird for a time, but it would still end up in a basin where the power and resources go to AIs. Humans are not going to [keep pace](/6/can-we-enhance-humans-so-they-keep-pace-with-ai), realistically. Once any collection of those AIs gets into a position where they *could *take the planet’s resources for themselves, that’s the point of no return. Either that collection of AIs contains a component that deeply cares about happy, healthy, free people, or the future goes poorly for us.[A Closer Look at Before and After→](/10/a-closer-look-at-before-and-after)[Resources](/resources) › [Chapter 10](/10)[
### Won’t AI differ from all the historical precedents?Yes.3 min read](/10/wont-ai-differ-from-all-the-historical-precedents)[
### How long would it take to solve the ASI alignment problem?The difficulty isn’t just the lack of time; it’s the lethality of mistakes.2 min read](/10/how-long-would-it-take-to-solve-the-asi-alignment-problem)[
### What if there are lots of different AIs?It doesn’t much help if we can’t make any of them care about good things.2 min read](/10/what-if-there-are-lots-of-different-ais)[
### What if AI is developed only slowly, and it slowly integrates with society?That scenario still ends in catastrophe.3 min read](/10/what-if-ai-is-developed-only-slowly-and-it-slowly-integrates-with-society)

Your question not answered here?[Submit a Question.](/submit-question)
## [Extended Discussion](#extended-discussion)[
### A Closer Look at Before and After](/10/a-closer-look-at-before-and-after)[
### The Tale of Chicago Pile-1](/10/the-tale-of-chicago-pile-1)[](/)[](/resources)[](/act)[](/march)[](/order)[](/human-intelligence-enhancement)[](/errata)





## /10/what-if-there-are-lots-of-different-ais

What if there are lots of different AIs? | If Anyone Builds It, Everyone Dies | If Anyone Builds It, Everyone Dies[](/)[](/)[](/resources)[](/10)[](/resources)[](/act)[](/march)[](/media-kit)[](/order)
## What if there are lots of different AIs?
#### It doesn’t much help if we can’t make any of them care about good things.

As we noted in Chapter 4, there are numerous ways for AIs to wind up caring about strange ends that are not what anyone actually wanted. It doesn’t matter if humanity makes a thousand AIs, if those thousand AIs all care about slightly different weird ends.

For a world of diverse AIs to permanently harbor happy, healthy, free people, we need at least some of those AIs to *specifically *want**flourishing people to stick around. Not just in the sense that they assure us that they care about that when they’re young, but in the sense that this is *actually *the most efficient answer to whatever questions their actions (or the actions of their descendants) are an answer to, as discussed in Chapter 5.

For more background on this problem, see:
- Chapter 4: [Why would an AI steer toward anything other than what it was trained to steer toward?](/4/why-would-an-ai-steer-toward-anything-other-than-what-it-was-trained-to-steer-toward) and [Reflection and Self-Modification Make It All Harder](/4/reflection-and-self-modification-make-it-all-harder)
- Chapter 5: [Will AI find us useful to keep around?](/5/will-ai-find-us-useful-to-keep-around), [Won’t AIs need the rule of law?](https://ifanyonebuildsit.com/5/wont-ais-need-the-rule-of-law), [Won’t AIs care at least a little about humans?](https://ifanyonebuildsit.com/5/wont-ais-care-at-least-a-little-about-humans), and [Humans Are Almost Never the Most Efficient Solution](/5/humans-are-almost-never-the-most-efficient-solution)
- Part II: [Why did you tell a story with only one AI as smart as Sable?](/ii/why-did-you-tell-a-story-with-only-one-ai-as-smart-as-sable)

If we knew how to make one in ten AIs good, then perhaps we could get a tenth of the universe by making a great many different AIs and hoping that the good ones strike a deal for us.

But, as we argued in Chapters 2 through 4, getting an AI that cares about people in just the right way is exceedingly unlikely, in the modern regime where AIs are “grown.” Humanity is *nowhere near* the level of being able to hit such an exceptionally narrow target 10 percent of the time. Adding more AIs doesn’t help, when the problem is that there is a complicated structure that we aren’t even close to being able to hook into the AI’s drives.[What if AI is developed only slowly, and it slowly integrates with society?→](/10/what-if-ai-is-developed-only-slowly-and-it-slowly-integrates-with-society)[Resources](/resources) › [Chapter 10](/10)[
### Won’t AI differ from all the historical precedents?Yes.3 min read](/10/wont-ai-differ-from-all-the-historical-precedents)[
### How long would it take to solve the ASI alignment problem?The difficulty isn’t just the lack of time; it’s the lethality of mistakes.2 min read](/10/how-long-would-it-take-to-solve-the-asi-alignment-problem)[
### What if there are lots of different AIs?It doesn’t much help if we can’t make any of them care about good things.2 min read](/10/what-if-there-are-lots-of-different-ais)[
### What if AI is developed only slowly, and it slowly integrates with society?That scenario still ends in catastrophe.3 min read](/10/what-if-ai-is-developed-only-slowly-and-it-slowly-integrates-with-society)

Your question not answered here?[Submit a Question.](/submit-question)
## [Extended Discussion](#extended-discussion)[
### A Closer Look at Before and After](/10/a-closer-look-at-before-and-after)[
### The Tale of Chicago Pile-1](/10/the-tale-of-chicago-pile-1)[](/)[](/resources)[](/act)[](/march)[](/order)[](/human-intelligence-enhancement)[](/errata)





## /10/wont-ai-differ-from-all-the-historical-precedents

Won’t AI differ from all the historical precedents? | If Anyone Builds It, Everyone Dies | If Anyone Builds It, Everyone Dies[](/)[](/)[](/resources)[](/10)[](/resources)[](/act)[](/march)[](/media-kit)[](/order)
## Won’t AI differ from all the historical precedents?
#### Yes.

Some of the unique features of the AI alignment challenge will make it easier than, say, engineering a nuclear power plant. Other features will make it harder. On the whole, nuclear weapons and nuclear power plants seem dramatically simpler to manage than smarter-than-human AI.

People in the industry are quick to point out that AI itself can be asked to help with the challenge of aligning AI. We don’t think this will matter too much, because aligning a superintelligence is an extremely difficult problem, and we don’t have a good way to evaluate solutions or measure progress. This means that AI would need to already be very capable, and very aligned, in order to help with this problem. We’ll discuss this proposal more in Chapter 11.

Another way AI alignment could be easier than engineering nuclear power plants is that humans could have quite a high degree of control over how the AIs they build function. You can’t choose the physics that governs a nuclear reactor, but if humans were crafting AIs and they knew exactly what they were doing, then they *could *make a lot of choices about the AI’s cognitive dynamics. Though, of course, nobody is anywhere near that level of understanding in real life, as discussed in Chapter 2.

As for ways that AI is likely to be a *harder *challenge than past problems humanity has faced, let’s compare superintelligence to nuclear weapons. We think that this comparison suggests that superintelligent AI is a far thornier problem, for a number of reasons:
- Nuclear weapons are not smarter than humanity.
- Nuclear weapons are not self-replicating.
- Nuclear weapons are not self-improving.
- Most realistic nuclear war scenarios do not involve humanity getting wiped out entirely; in all likelihood, there would be people left among the ruins to rebuild.
- Venture-backed companies aren’t out there scaling up global nuclear weapon stockpiles by a factor of ten every year.
- The science of nuclear weapons is pretty well understood. Engineers can calculate roughly how powerful a nuclear weapon will be before they build it, and they know exactly what concentration of fissile material is needed to set off the chain reaction that leads to a cataclysmic detonation.
- Nuclear weapons don’t make their own plans. If a country builds a nuclear weapon, then it owns the nuke. Its scientists don’t have to worry about the nuke getting vastly smarter than them and deciding it would rather not be owned.
- The world generally agrees that if nuclear weapons go off, they kill people. The physicist community is not fractured into philosophical camps with strange stances such as, “If every individual has their own nuke, they won’t be at the mercy of bad people with nukes,” or, “Don’t worry, humans will just merge with the nuclear weapons,” or, “Nuclear war is inevitable, and therefore it is childish and silly to try to stop it.”
- Nuclear weapons are hard to replicate. There is no huge technological effort underway to build rentable technology that anyone can use to make nukes, and making one nuclear weapon in a lab doesn’t let you deploy 100,000 copies of that nuclear weapon a week later.
- Major world powers treat nuclear war as a real possibility and an unacceptable outcome. World leaders put real work into avoiding it; even the most selfish among them knows that a nuclear war could kill them and their family and ruin the places and possessions dearest to them. Citizens and voters don’t want a nuclear war. Humanity is as united against nuclear war as we have ever been united about anything.

Worse yet — as discussed in the book and in the[](/10/a-closer-look-at-before-and-after)[extended discussion section below](/10/a-closer-look-at-before-and-after) — humanity only gets one shot at getting superintelligence right. If a nuclear power plant explodes, other people in the world can learn from what happened and do better next time.

All of these features suggest that superintelligence poses an extraordinary challenge, and an extraordinarily novel one. There are analogies, but they only apply in narrow ways. There is no established playbook for ASI.[How long would it take to solve the ASI alignment problem?→](/10/how-long-would-it-take-to-solve-the-asi-alignment-problem)[Resources](/resources) › [Chapter 10](/10)[
### Won’t AI differ from all the historical precedents?Yes.3 min read](/10/wont-ai-differ-from-all-the-historical-precedents)[
### How long would it take to solve the ASI alignment problem?The difficulty isn’t just the lack of time; it’s the lethality of mistakes.2 min read](/10/how-long-would-it-take-to-solve-the-asi-alignment-problem)[
### What if there are lots of different AIs?It doesn’t much help if we can’t make any of them care about good things.2 min read](/10/what-if-there-are-lots-of-different-ais)[
### What if AI is developed only slowly, and it slowly integrates with society?That scenario still ends in catastrophe.3 min read](/10/what-if-ai-is-developed-only-slowly-and-it-slowly-integrates-with-society)

Your question not answered here?[Submit a Question.](/submit-question)
## [Extended Discussion](#extended-discussion)[
### A Closer Look at Before and After](/10/a-closer-look-at-before-and-after)[
### The Tale of Chicago Pile-1](/10/the-tale-of-chicago-pile-1)[](/)[](/resources)[](/act)[](/march)[](/order)[](/human-intelligence-enhancement)[](/errata)
