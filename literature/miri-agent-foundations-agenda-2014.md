---
title: "Agent Foundations for Aligning Machine Intelligence with Human Interests: A Technical Research Agenda"
author: "Nate Soares, Benya Fallenstein"
year: 2014
source_url: "https://intelligence.org/files/TechnicalAgenda.pdf"
source_format: pdf
downloaded: 2026-02-11
encrypted: false
notes: "MIRI's foundational technical research agenda on AI alignment. Outlines key challenges: creating agents that reliably pursue given goals, specifying beneficial goals formally, and ensuring cooperation during iterative improvement. Covers highly reliable agent designs, error-tolerant designs, and value specification."
---

Agent Foundations for Aligning Machine Intelligence with Human Interests:
A Technical Research Agenda
InThe Technological Singularity: Managing the Journey. Springer. 2017
Nate Soares andBenya Fallenstein
Machine Intelligence Research Institute
nate@intelligence.org, benya@intelligence.org
Contents
1 Introduction 1
1.1 Why These Problems? . . . . . . . . . . . . . . . . . . . . . . . . . . 2
2 Highly Reliable Agent Designs 3
2.1 Realistic World-Models . . . . . . . . . . . . . . . . . . . . . . . . . . 4
2.2 Decision Theory . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5
2.3 Logical Uncertainty . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6
2.4 Vingean Re
ection . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7
3 Error-Tolerant Agent Designs 8
4 Value Specication 9
5 Discussion 11
5.1 Toward a Formal Undefirstafinding of the Problem . . . . . . . . . . . 11
5.2 Why Start Now? . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 11
1 Introduction
The property that has given humans a dominant ad-
vantage over other species is not strength or speed, but
intelligence. If progress in articial intelligence continues
unabated, AI systems will eventually exceed humans in
general reasoning ability. A system that is \superintelli-
gent" in the sense of being \smarter than the best human
brains in practically every eld" could have an enormous
impact upon humanity (Bostrom 2014). Just as human
intelligence has allowed us to develop tools and strate-
gies for controlling our environment, a superintelligent
system would likely be capable of developing its own
tools and strategies for exerting control (Muehlhauser
and Salamon 2012). In light of this potential, it is es-
sential to use caution when developing AI systems that
can exceed human levels of general intelligence, or that
can facilitate the creation of such systems.
Research supported by the Machine Intelligence Research
Institute (intelligence.org). The nal publication is avail-
able at Springer via http://www.springer.com/us/book/
9783662540312Since articial agents would not share our evolution-
ary history, there is no reason to expect them to be
driven by human motivations such as lust for power.
However, nearly all goals can be better met with more
resources (Omohundro 2008). This suggests that, by
default, superintelligent agents would have incentives
to acquire resources currently being used by humanity.
(Just as articial agents would not automatically acquire
a lust for power, they would not automatically acquire a
human sense of fairness, compassion, or conservatism.)
Thus, most goals would put the agent at odds with
human interests, giving it incentives to deceive or ma-
nipulate its human operators and resist interventions
designed to change or debug its behavior (Bostrom 2014,
chap. 8).
Care must be taken to avoid constructing systems
that exhibit this default behavior. In order to ensure
that the development of smarter-than-human intelli-
gence has a positive impact on the world, we must meet
three formidable challenges: How can we create an agent
that will reliably pursue the goals it is given? How can
we formally specify benecial goals? And how can we
1

ensure that this agent will assist and cooperate with
its programmers as they improve its design, given that
mistakes in early AI systems are inevitable?
This agenda discusses technical research that is
tractable today, which the authors think will make it
easier to confront these three challenges in the future.
Sections 2 through 4 motivate and discuss six research
topics that we think are relevant to these challenges.
We call a smarter-than-human system that reliably
pursues benecial goals \aligned with human interests"
or simply \aligned."1To become condent that an agent
is aligned in this way, a practical implementation that
merely seems to meet the challenges outlined above
will not suce. It is also important to gain a solid
formal undefirstafinding of why that condence is justied.
This technical agenda argues that there is foundational
research we can make progress on today that will make
it easier to develop aligned systems in the future, and
describes ongoing work on some of these problems.
Of the three challenges, the one giving rise to the
largest number of currently tractable research questions
is the challenge of finding an agent architecture that will
reliably and autonomously pursue a set of objectives|
that is, an architecture that can at least be aligned
with some end goal. This requires theoretical knowledge
of how to design agents which reason well and behave
as intended even in situations never envisioned by the
programmers. The problem of highly reliable agent
designs is discussed in Section 2.
The challenge of developing agent designs which are
tolerant of human error also gives rise to a number
of tractable problems. We expect that smarter-than-
human systems would by default have incentives to
manipulate and deceive human operators, and that spe-
cial care must be taken to develop agent architectures
which avert these incentives and are otherwise tolerant
of programmer error. This problem and some related
open questions are discussed in Section 3.
Reliable and error-tolerant agent designs are only
benecial if the resulting agent actually pursues desirable
outcomes. The diculty of concretely specifying what is
meant by \benecial behavior" implies a need for some
way to construct agents that reliably learn what to value
(Bostrom 2014, chap. 12). A solution to this \value
learning" problem is vital; attempts to start making
progress are reviewed in Section 4.
Why work on these problems now, if smarter-than-
human AI is likely to be decades away? This question is
touched upon brie
y below, and is discussed further in
Section 5. In short, the authors believe that there are
theoretical prerequisites for designing aligned smarter-
than-human systems over and above what is required
to design misaligned systems. We believe that research
can be done today that will make it easier to address
1.A more careful wording might be \aligned with the
interests of sentient beings." We would not want to benet
humans at the expense of sentient non-human animals|or
(if we build them) at the expense of sentient machines.alignment concerns in the future.
1.1 Why These Problems?
This technical agenda primarily covers topics that the
authors believe are tractable ,uncrowded ,focused , and
unable to be outsourced to forerunners of the target AI
system.
Bytractable problems, we mean open problems that
are concrete and admit immediate progress. Signicant
eort will ultimately be required to align real smarter-
than-human systems with benecial values, but in the
absence of working designs for smarter-than-human sys-
tems, it is dicult if not impossible to begin most of that
work in advance. This agenda focuses on research that
can help us gain a better undefirstafinding today of the
problems faced by almost any suciently advanced AI
system. Whether practical smarter-than-human systems
arise in ten years or in one hundred years, we expect to
be better able to design safe systems if we undefirstand
solutions to these problems.
This agenda further limits attention to uncrowded
domains, where there is not already an abundance of
research being done, and where the problems may not
be solved over the course of \normal" AI research. For
example, program verication techniques are absolutely
crucial in the design of extremely reliable programs
(Sotala and Yampolskiy 2017), but program verication
is not covered in this agenda primarily because a vibrant
community is already actively studying the topic.
This agenda also restricts consideration to focused
tools, ones that would be useful for designing aligned
systems in particular (as opposed to intelligent systems
in general). It might be possible to design generally in-
telligent AI systems before developing an undefirstafinding
of highly reliable reasoning sucient for constructing
an aligned system. This could lead to a risky situation
where powerful AI systems are built long before the tools
needed to safely utilize them. Currently, signicant re-
search eort is focused on improving the capabilities of
articially intelligent systems, and comparatively little
eort is focused on superintelligence alignment (Bostrom
2014, chap. 14). For that reason, this agenda focuses
on research that improves our ability to design aligned
systems in particular.
Lastly, we focus on research that cannot be safely
delegated to machines . As AI algorithms come to rival
humans in scientic inference and planning, new pos-
sibilities will emerge for outsourcing computer science
labor to AI algorithms themselves. This is a consequence
of the fact that intelligence is the technology we are
designing: on the path to great intelligence, much of the
work may be done by smarter-than-human systems.2
2.Since the Dartmouth Proposal (McCarthy et al. 1955),
it has been a standard idea in AI that a suciently smart
machine intelligence could be intelligent enough to improve
itself. In 1965, I. J. Good observed that this might create a
positive feedback loop leading to an \intelligence explosion"
(Good 1965). Sotala and Yampolskiy (2017) and Bostrom
2

As a result, the topics discussed in this agenda are
ones that we believe are dicult to safely delegate to AI
systems. Error-tolerant agent design is a good example:
no AI problem (including the problem of error-tolerant
agent design itself) can be safely delegated to a highly
intelligent articial agent that has incentives to ma-
nipulate or deceive its programmers. By contrast, a
suciently capable automated engineer would be able
to make robust contributions to computer vision or
natural language processing even if its own visual or
linguistic abilities were initially lacking. Most intelligent
agents optimizing for some goal would also have incen-
tives to improve their visual and linguistic abilities so
as to enhance their ability to model and interact with
the world.
It would be risky to delegate a crucial task before
attaining a solid theoretical undefirstafinding of exactly
what task is being delegated. It may be possible to use
our undefirstafinding of ideal Bayesian inference to task a
highly intelligent system with developing increasingly
eective approximations of a Bayesian reasoner, but
it would be far more dicult to delegate the task of
\finding good ways to revise how condent you are about
claims" to an intelligent system before gaining a solid
undefirstafinding of probability theory. The theoretical
undefirstafinding is useful to ensure that the right questions
are being asked.
2 Highly Reliable Agent Designs
Bird and Layzell (2002) describe a genetic algorithm
which, tasked with making an oscillator, re-purposed
the printed circuit board tracks on the motherboard as a
makeshift radio to amplify oscillating signals from nearby
computers. This is not the kind of solution the algorithm
would have found if it had been simulated on a virtual
circuit board possessing only the features that seemed
relevant to the problem. Intelligent search processes
in the real world have the ability to use resources in
unexpected ways, e.g., by finding \shortcuts" or \cheats"
not accounted for in a simplied model.
When constructing intelligent systems which learn
and interact with all the complexities of reality, it is not
sucient to verify that the algorithm behaves well in test
settings. Additional work is necessary to verify that the
system will continue working as intended in application.
This is especially true of systems possessing general
intelligence at or above the human level: superintelligent
machines might nd strategies and execute plans beyond
both the experience and imagination of the programmers,
making the clever oscillator of Bird and Layzell look
trite. At the same time, unpredictable behavior from
smarter-than-human systems could cause catastrophic
damage, if they are not aligned with human interests
(Yudkowsky 2008).
(2014, chap. 4) have observed that an intelligence explosion
is especially likely if the agent has the ability to acquire more
hardware, improve its software, or design new hardware.Because the stakes are so high, testing combined
with a gut-level intuition that the system will continue
to work outside the test environment is insucient, even
if the testing is extensive. It is important to also have
aformal undefirstafinding of precisely why the system is
expected to behave well in application.
What constitutes a formal undefirstafinding? It seems
essential to us to have both (1) an undefirstafinding of
precisely what problem the system is intended to solve;
and (2) an undefirstafinding of precisely why thispractical
system is expected to solve that abstract problem. The
latter must wait for the development of practical smarter-
than-human systems, but the former is a theoretical
research problem that we can already examine.
A full description of the problem would reveal the
conceptual tools needed to undefirstand why practical
heuristics are expected to work. By analogy, consider
the game of chess. Before designing practical chess al-
gorithms, it is necessary to possess not only a predicate
describing checkmate, but also a description of the prob-
lem in term of trees and backtracking algorithms: Trees
and backtracking do not immediately yield a practical
solution|building a full game tree is infeasible|but
they are the conceptual tools of computer chess. It
would be quite dicult to justify condence in a chess
heuristic before undefirstafinding trees and backtracking.
While these conceptual tools may seem obvious in
hindsight, they were not clear to foresight. Consider
the famous essay by Edgar Allen Poe about Maelzel's
Mechanical Turk (Poe 1836). It is in many ways re-
markably sophisticated: Poe compares the Turk to \the
calculating machine of Mr. Babbage" and then remarks
on how the two systems cannot be of the same kind,
since in Babbage's algebraical problems each step follows
of necessity, and so can be represented by mechanical
gears making deterministic motions; while in a chess
game, no move follows with necessity from the position
of the board, and even if our own move followed with
necessity, the opponent's would not. And so (argues
Poe) we can see that chess cannot possibly be played by
mere mechanisms, only by thinking beings. From Poe's
state of knowledge, Shannon's (1950) description of an
idealized solution in terms of backtracking and trees con-
stitutes a great insight. Our task it to put theoretical
foundations under the eld of general intelligence, in the
same sense that Shannon put theoretical foundations
under the eld of computer chess.
It is possible that these foundations will be developed
over time, during the normal course of AI research: in
the past, theory has often preceded application. But
the converse is also true: in many cases, application has
preceded theory. The claim of this technical agenda is
that, in safety-critical applications where mistakes can
put lives at risk, it is crucial that certain theoretical
insights come first.
A smarter-than-human agent would be embedded
within and computed by a complex universe, learning
about its environment and bringing about desirable
states of aairs. How is this formalized? What met-
3

ric captures the question of how well an agent would
perform in the real world?3
Not all parts of the problem must be solved in ad-
vance: the task of designing smarter, safer, more reliable
systems could be delegated to early smarter-than-human
systems, if the research done by those early systems can
be suciently trusted. It is important, then, to focus
research eorts particularly on parts of the problem
where an increased undefirstafinding is necessary to con-
struct a minimal reliable generally intelligent system.
Moreover, it is important to focus on aspects which are
currently tractable, so that progress can in fact be made
today, and on issues relevant to alignment in particular,
which would not otherwise be studied over the course
of \normal" AI research.
In this section, we discuss four candidate topics meet-
ing these criteria: (1) realistic world-models , the study
of agents learning and pursuing goals while embedded
within a physical world; (2) decision theory , the study
of idealized decision-making procedures; (3) logical un-
certainty , the study of reliable reasoning with bounded
deductive capabilities; and (4) Vingean re
ection , the
study of reliable methods for reasoning about agents
that are more intelligent than the reasoner. We will now
discuss each of these topics in turn.
2.1 Realistic World-Models
Formalizing the problem of computer intelligence may
seem easy in theory: encode some set of preferences
as a utility function, and evaluate the expected utility
that would be obtained if the agent were implemented.
However, this is not a full specication: What is the set
of \possible realities" used to model the world? Against
what distribution over world models is the agent eval-
uated? How is a given world model used to score an
agent? To ensure that an agent would work well in real-
ity, it is first useful to formalize the problem faced by
agents learning (and acting in) arbitrary environments.
Solomono (1964) made an early attempt to tackle
these questions by specifying an \induction problem"
in which an agent must construct world models and
promote correct hypotheses based on the observation
of an arbitrarily complex environment, in a manner
reminiscent of scientic induction. In this problem, the
agent and environment are separate. The agent gets to
see one bit from the environment in each turn, and must
predict the bits which follow.
Solomono's induction problem answers all three
of the above questions in a simplied setting: The set
3.Legg and Hutter (2007) provide a preliminary answer to
this question, by dening a \universal measure of intelligence"
which scores how well an agent can learn the features of an
external environment and maximize a reward function. This
is the type of formalization we are looking for: a scoring
metric which describes how well an agent would achieve
some set of goals. However, while the Legg-Hutter metric
is insightful, it makes a number of simplifying assumptions,
and many dicult open questions remain (Soares 2015).of world models is any computable environment (e.g.,
any Turing machine). In reality, the simplest hypothesis
that predicts the data is generally correct, so agents
are evaluated against a simplicity distribution. Agents
are scored according to their ability to predict their
next observation. These answers were insightful, and
led to the development of many useful tools, including
algorithmic probability and Kolmogorov complexity.
However, Solomono's induction problem does not
fully capture the problem faced by an agent learning
about an environment while embedded within it, as a
subprocess. It assumes that the agent and environment
are separated, save only for the observation channel.
What is the analog of Solomono induction for agents
that are embedded within their environment?
This is the question of naturalized induction
(Bensinger 2013). Unfortunately, the insights of
Solomono do not apply in the naturalized setting. In
Solomono's setting, where the agent and environment
are separated, one can consider arbitrary Turing ma-
chines to be \possible environments." But when the
agent is embedded in the environment, consideration
must be restricted to environments which embed the
agent. Given an algorithm, what is the set of environ-
ments which embed that algorithm? Given that set,
what is the analogue of a simplicity prior which captures
the fact that simpler hypotheses are more often correct?
Technical problem (Naturalized Induction) .What,
formally, is the induction problem faced by an intelligent
agent embedded within and computed by its environment?
What is the set of environments which embed the agent?
What constitutes a simplicity prior over that set? How
is the agent scored? For discussion, see Soares (2015).
Just as a formal description of Solomono induction
answered the above three questions in the context of
an agent learning an external environment, a formal
description of naturalized induction may well yield an-
swers to those questions in the context where agents are
embedded in and computed by their environment.
Of course, the problem of computer intelligence is
not simply an induction problem: the agent must also
interact with the environment. Hutter (2000) extends
Solomono's induction problem to an \interaction prob-
lem," in which an agent must both learn and act upon
its environment. In each turn, the agent both observes
one input and writes one output, and the output aects
the behavior of the environment. In this problem, the
agent is evaluated in terms of its ability to maximize a
reward function specied in terms of inputs. While this
model does not capture the diculties faced by agents
which are embedded within their environment, it does
capture a large portion of the problem faced by agents
interacting with arbitrarily complex environments. In-
deed, the interaction problem (and AIXI [Hutter 2000],
its solution) are the basis for the \universal measure of
intelligence" developed by Legg and Hutter (2007).
However, even barring problems arising from the
agent/environment separation, the Legg-Hutter metric
4

does not fully characterize the problem of computer
intelligence. It scores agents according to their ability
to maximize a reward function specied in terms of
observation. Agents scoring well by the Legg-Hutter
metric are extremely eective at ensuring their observa-
tions optimize a reward function, but these high-scoring
agents are likely to be the type that nd clever ways to
seize control of their observation channel rather than the
type that identify and manipulate the features in the
world that the reward function was intended to proxy
for (Soares 2015). Reinforcement learning techniques
which punish the agent for attempting to take control
would only incentivize the agent to deceive and mollify
the programmers until it found a way to gain a decisive
advantage (Bostrom 2014, chap. 8).
The Legg-Hutter metric does not characterize the
question of how well an algorithm would perform if
implemented in reality: to formalize that question, a
scoring metric must evaluate the resulting environment
histories, not just the agent's observations (Soares 2015).
But human goals are not specied in terms of en-
vironment histories, either: they are specied in terms
of high-level notions such as \money" or \
ourishing
humans." Leaving aside problems of philosophy, imag-
ine rating a system according to how well it achieves a
straightforward, concrete goal, such as by rating how
much diamond is in an environment after the agent has
acted on it, where \diamond" is specied concretely
in terms of an atomic structure. Now the goals are
specied in terms of atoms, and the environment his-
tories are specied in terms of Turing machines paired
with an interaction history. How is the environment his-
tory evaluated in terms of atoms? This is the ontology
identication problem.
Technical problem (Ontology Identication) .Given
goals specied in some ontology and a world model, how
can the ontology of the goals be identied in the world
model? What types of world models are amenable to
ontology identication? For a discussion, see Soares
(2015).
To evaluate world models, the world models must be
evaluated in terms of the ontology of the goals. This
may be dicult in cases where the ontology of the goals
does not match reality: it is one thing to locate atoms in
a Turing machine using an atomic model of physics, but
it is another thing altogether to locate atoms in a Turing
machine modeling quantum physics. De Blanc (2011)
further motivates the idea that explicit mechanisms
are needed to deal with changes in the ontology of the
system's world model.
Agents built to solve the wrong problem|such as
optimizing their observations|may well be capable of
attaining superintelligence, but it is unlikely that those
agents could be aligned with human interests (Bostrom
2014, chap. 12). A better undefirstafinding of naturalized
induction and ontology identication is needed to fully
specify the problem that intelligent agents would face
when pursuing human goals while embedded withinreality, and this increased undefirstafinding could be a
crucial tool when it comes to designing highly reliable
agents.
2.2 Decision Theory
Smarter-than-human systems must be trusted to make
good decisions, but what does it mean for a decision to
be \good"? Formally, given a description of an environ-
ment and an agent embedded within, how is the \best
available action" identied, with respect to some set of
preferences? This is the question of decision theory.
The answer may seem trivial, at least in theory:
simply iterate over the agent's available actions, evaluate
what would happen if the agent took that action, and
then return whichever action leads to the most expected
utility. But this is not a full specication: How are
the \available actions" identied? How is what \would
happen" dened?
The diculty is easiest to illustrate in a deterministic
setting. Consider a deterministic agent embedded in a
deterministic environment. There is exactly one action
that the agent will take. Given a set of actions that it
\could take," it is necessary to evaluate, for each action,
what would happen if the agent took that action. But
the agent will not take most of those actions. How is
the counterfactual environment constructed, in which
a deterministic algorithm \does something" that, in
the real environment, it doesn't do? Answering this
question requires a theory of counterfactual reasoning,
and counterfactual reasoning is not well undefirstood.
Technical problem (Theory of Counterfactuals) .
What theory of counterfactual reasoning can be used
to specify a procedure which always identies the best
action available to a given agent in a given environment,
with respect to a given set of preferences? For discussion,
see Soares and Fallenstein (2015b).
Decision theory has been studied extensively by philoso-
phers. The study goes back to Pascal, and has been
picked up in modern times by Lehmann (1950), Wald
(1939), Jerey (1983), Joyce (1999), Lewis (1981), Pearl
(2000), and many others. However, no satisfactory
method of counterfactual reasoning yet answers this
particular question. To give an example of why coun-
terfactual reasoning can be dicult, consider a deter-
ministic agent playing against a perfect copy of itself in
the classic prisoner's dilemma (Rapoport and Chammah
1965). The opponent is guaranteed to do the same thing
as the agent, but the agents are \causally separated,"
in that the action of one cannot physically aect the
action of the other.
What is the counterfactual world in which the agent
on the left cooperates? It is not sucient to consider
changing the action of the agent on the left while hold-
ing the action of the agent on the right constant, be-
cause while the two are causally disconnected, they are
logically constrained to behave identically. Standard
causal reasoning, which neglects these logical constraints,
5

misidenties \defection" as the best strategy available
to each agent even when they know they have identical
source codes (Lewis 1979).4Satisfactory counterfactual
reasoning must respect these logical constraints, but
how are logical constraints formalized and identied?
It is ne to say that, in the counterfactual where the
agent on the left cooperates, all identical copies of it
also cooperate; but what counts as an identical copy?
What if the right agent runs the same algorithm written
in a dierent programming language? What if it only
does the same thing 98% of the time?
These questions are pertinent in reality: practical
agents must be able to identify good actions in settings
where other actors base their actions on imperfect (but
well-informed) predictions of what the agent will do.
Identifying the best action available to an agent requires
taking the non-causal logical constraints into account.
A satisfactory formalization of counterfactual reasoning
requires the ability to answer questions about how other
deterministic algorithms behave in the counterfactual
world where the agent's deterministic algorithm does
something it doesn't. However, the evaluation of \logical
counterfactuals" is not yet well undefirstood.
Technical problem (Logical Counterfactuals) .Con-
sider a counterfactual in which a given deterministic
decision procedure selects a dierent action from the
one it selects in reality. What are the implications of
this counterfactual on other algorithms? Can logical
counterfactuals be formalized in a satisfactory way? A
method for reasoning about logical counterfactuals seems
necessary in order to formalize a more general theory
of counterfactuals. For a discussion, see Soares and
Fallenstein (2015b).
Unsatisfactory methods of counterfactual reasoning
(such as the causal reasoning of Pearl [2000]) seem pow-
erful enough to support smarter-than-human intelligent
systems, but systems using those reasoning methods
could systematically act in undesirable ways (even if
otherwise aligned with human interests).
To construct practical heuristics that are known to
make good decisions, even when acting beyond the over-
sight and control of humans, it is essential to undefirstand
what is meant by \good decisions." This requires a for-
mulation which, given a description of an environment,
an agent embedded in that environment, and some set
of preferences, identies the best action available to the
agent. While modern methods of counterfactual rea-
soning do not yet allow for the specication of such a
4.As this is a multi-agent scenario, the problem of coun-
terfactuals can also be thought of as game-theoretic. The
goal is to dene a procedure which reliably identies the best
available action; the label of \decision theory" is secondary.
This goal subsumes both game theory and decision theory:
the desired procedure must identify the best action in all
settings, even when there is no clear demarcation between
\agent" and \environment." Game theory informs, but does
not dene, this area of research.formula, recent research has pointed the way towards
some promising paths for future research.
For example, Wei Dai's \updateless decision theory"
(UDT) is a new take on decision theory that systemati-
cally outperforms causal decision theory (Hintze 2014),
and two of the insights behind UDT highlight a num-
ber of tractable open problems (Soares and Fallenstein
2015b).
Recently, B ar asz et al. (2014) developed a concrete
model, together with a Haskell implementation, of multi-
agent games where agents have access to each others'
source code and base their decisions on what they can
prove about their opponent. They have found that it
is possible for some agents to achieve robust coopera-
tion in the one-shot prisoner's dilemma while remaining
unexploitable (B ar asz et al. 2014).
These results suggest a number of new ways to ap-
proach the problem of counterfactual reasoning, and we
are optimistic that continued study will prove fruitful.
2.3 Logical Uncertainty
Consider a reasoner encountering a black box with one
input chute and two output chutes. Inside the box
is a complex Rube Goldberg machine that takes an
input ball and deposits it in one of the two output
chutes. A probabilistic reasoner may have uncertainty
about where the ball will exit, due to uncertainty about
which Rube Goldberg machine is in the box. However,
standard probability theory assumes that if the reasoner
didknow which machine the box implemented, they
would know where the ball would exit: the reasoner
is assumed to be logically omniscient , i.e., to know all
logical consequences of any hypothesis they entertain.
By contrast, a practical bounded reasoner may be
able to know exactly which Rube Goldberg machine
the box implements without knowing where the ball
will come out, due to the complexity of the machine.
This reasoner is logically uncertain . Almost all practical
reasoning is done under some form of logical uncertainty
(Gaifman 2004), and almost all reasoning done by a
smarter-than-human agent must be some form of logi-
cally uncertain reasoning. Any time an agent reasons
about the consequences of a plan, the eects of running
a piece of software, or the implications of an observa-
tion, it must do some sort of reasoning under logical
uncertainty. Indeed, the problem of an agent reasoning
about an environment in which it is embedded as a
subprocess is inherently a problem of reasoning under
logical uncertainty.
Thus, to construct a highly reliable smarter-than-
human system, it is vitally important to ensure that
the agent's logically uncertain reasoning is reliable and
trustworthy. This requires a better undefirstafinding of the
theoretical underpinnings of logical uncertainty, to more
fully characterize what it means for logically uncertain
reasoning to be \reliable and trustworthy" (Soares and
Fallenstein 2015a).
6

It is natural to consider extefinding standard prob-
ability theory to include the consideration of worlds
which are \logically impossible" (e.g., where a determin-
istic Rube Goldberg machine behaves in a way that it
doesn't). This gives rise to two questions: What, pre-
cisely, are logically impossible possibilities? And, given
some means of reasoning about impossible possibilities,
what is a reasonable prior probability distribution over
impossible possibilities?
The problem is dicult to approach in full general-
ity, but a study of logical uncertainty in the restricted
context of assigning probabilities to logical sentences
goes back at least to  Lo s (1955) and Gaifman (1964),
and has been investigated by many, including Halpern
(2003), Hutter et al. (2013), Demski (2012), Russell
(2014), and others. Though it isn't clear to what degree
this formalism captures the kind of logically uncertain
reasoning a realistic agent would use, logical sentences
in, for example, the language of Peano Arithmetic are
quite expressive: for example, given the Rube Goldberg
machine discussed above, it is possible to form a sen-
tence which is true if and only if the machine deposits
the ball into the top chute. Thus, considering reasoners
which are uncertain about logical sentences is a useful
starting point. The problem of assigning probabilities to
sentences of logic naturally divides itself into two parts.
Fifirst, how can probabilities consistently be assigned
to sentences? An agent assigning probability 1 to short
contradictions is hardly reasoning about the sentences
as if they are logical sentences: some of the logical
structure must be preserved. But which aspects of the
logical structure? Preserving all logical implications
requires that the reasoner be deductively omnipotent,
as some implications ! may be very involved. The
standard answer in the literature is that a coherent as-
signment of probabilities to sentences corresponds to a
probability distribution over complete, consistent logical
theories (Gaifman 1964; Christiano 2014a); that is, an
\impossible possibility" is any consistent assignment of
truth values to all sentences. Deductively limited rea-
soners cannot have fully coherent distributions, but they
can approximate these distributions: for a deductively
limited reasoner, \impossible possibilities" can be any
assignment of truth values to sentences that looks con-
sistent so far, so long as the assignment is discarded as
soon as a contradiction is introduced.
Technical problem (Impossible Possibilities) .How
can deductively limited reasoners approximate reasoning
according to a probability distribution over complete the-
ories of logic? For a discussion, see Christiano (2014a).
Second, what is a satisfactory prior probability distri-
bution over logical sentences? If the system is intended
to reason according to a theory at least as powerful as
Peano Arithmetic ( PA), then that theory will be incom-
plete (G odel, Kleene, and Rosser 1934). What prior
distribution places nonzero probability on the set of
complete extensions of PA? Deductively limited agents
would not be able to literally use such a prior, but if itwere computably approximable, then they could start
with a rough approximation of the prior and rene it
over time. Indeed, the process of rening a logical prior|
getting better and better probability estimates for given
logical sentences|captures the whole problem of rea-
soning under logical uncertainty in miniature. Hutter
et al. (2013) have dened a desirable prior, but Sawin
and Demski (2013) have shown that it cannot be com-
putably approximated. Demski (2012) and Christiano
(2014a) have also proposed logical priors, but neither
seems fully satisfactory. The specication of satisfactory
logical priors is dicult in part because it is not yet
clear which properties are desirable in a logical prior,
nor which properties are possible.
Technical problem (Logical Priors) .What is a satis-
factory set of priors over logical sentences that a bounded
reasoner can approximate? For a discussion, see Soares
and Fallenstein (2015a).
Many existing tools for studying reasoning, such as
game theory, standard probability theory, and Bayesian
networks, all assume that reasoners are logically omni-
scient. A theory of reasoning under logical uncertainty
seems necessary to formalize the problem of naturalized
induction, and to generate a satisfactory theory of coun-
terfactual reasoning. If these tools are to be developed,
extended, or improved, then a better undefirstafinding of
logically uncertain reasoning is required.
2.4 Vingean Re
ection
Instead of specifying superintelligent systems directly, it
seems likely that humans may instead specify generally
intelligent systems that go on to create or attain super-
intelligence. In this case, the reliability of the resulting
superintelligent system depends upon the reasoning of
the initial system which created it (either anew or via
self-modication).
If the agent reasons reliably under logical uncertainty,
then it may have a generic ability to evaluate various
plans and strategies, only selecting those which seem
benecial. However, some scenarios put that logically un-
certain reasoning to the test more than others. There is
a qualitative dierence between reasoning about simple
programs and reasoning about human-level intelligent
systems. For example, modern program verication tech-
niques could be used to ensure that a \smart" military
drone obeys certain rules of engagement, but it would
be a dierent problem altogether to verify the behavior
of an articial military general which must run an entire
war. A general has far more autonomy, ability to come
up with clever unexpected strategies, and opportunities
to impact the future than a drone.
A self-modifying agent (or any that constructs new
agents more intelligent than itself) must reason about
the behavior of a system that is more intelligent than the
reasoner. This type of reasoning is critically important
to the design of self-improving agents: if a system will
attain superintelligence through self-modication, then
7

the impact of the system depends entirely upon the
correctness of the original agent's reasoning about its
self-modications (Fallenstein and Soares 2015).
Before trusting a system to attain superintelligence,
it seems prudent to ensure that the agent uses appro-
priate caution when reasoning about successor agents.5
That is, it seems necessary to undefirstand the mecha-
nisms by which agents reason about smarter systems.
Naive tools for reasoning about plans including
smarter agents, such as backwards induction (Ben-
Porath 1997), would have the reasoner evaluate the
smarter agent by simply checking what the smarter
agent would do. This does not capture the diculty
of the problem: a parent agent cannot simply check
what its successor agent would do in all scenarios, for
if it could, then it would already know what actions its
successor will take, and the successor would not in any
way be smarter.
Yudkowsky and Herresho (2013) call this observa-
tion the \Vingean principle," after Vernor Vinge (1993),
who emphasized how dicult it is for humans to predict
the behavior of smarter-than-human agents. Any agent
reasoning about more intelligent successor agents must
do so abstractly , without pre-computing all actions that
the successor would take in every scenario. We refer to
this kind of reasoning as Vingean re
ection .
Technical problem (Vingean Re
ection) .How can
agents reliably reason about agents which are smarter
than themselves, without violating the Vingean principle?
For discussion, see Fallenstein and Soares (2015).
It may seem premature to worry about how agents rea-
son about self-improvements before developing a theoret-
ical undefirstafinding of reasoning under logical uncertainty
in general. However, it seems to us that work in this area
can inform undefirstafinding of what sort of logically uncer-
tain reasoning is necessary to reliably handle Vingean
re
ection.
Given the high stakes when constructing systems
smarter than themselves, articial agents might use some
form of extremely high-condence reasoning to verify
the safety of potentially dangerous self-modications.
When humans desire extremely high reliability, as is the
case for (e.g.) autopilot software, we often use formal
logical systems (US DoD 1985; UK MoD 1991). High-
condence reasoning in critical situations may require
something akin to formal verication (even if most rea-
soning is done using more generic logically uncertain
reasoning), and so studying Vingean re
ection in the
domain of formal logic seems like a good starting point.
Logical models of agents reasoning about agents that
are \more intelligent," however, run into a number of
5.Of course, if an agent reasons perfectly under logical
uncertainty, it would also reason well about the construction
of successor agents. However, given the fallibility of human
reasoning and the fact that this path is critically important,
it seems prudent to verify the agent's reasoning methods in
this scenario specically.obstacles. By G odel's second incompleteness theorem
(1934), suciently powerful formal systems cannot rule
out the possibility that they may be inconsistent. This
makes it dicult for agents using formal logical reasoning
to verify the reasoning of similar agents which also use
formal logic for high-condence reasoning; the first agent
cannot verify that the latter agent is consistent. Roughly,
it seems desirable to be able to develop agents which
reason as follows:
This smarter successor agent uses reasoning
similar to mine, and my own reasoning is
sound, so its reasoning is sound as well.
However, G odel, Kleene, and Rosser (1934) showed that
this sort of reasoning leads to inconsistency, and these
problems do in fact make Vingean re
ection dicult in a
logical setting (Fallenstein and Soares 2015; Yudkowsky
2013).
Technical problem (L obian Obstacle) .How can
agents gain very high condence in agents that use sim-
ilar reasoning systems, while avoiding paradoxes of self-
reference? For discussion, see Fallenstein and Soares
(2015).
These results may seem like artifacts of models rooted in
formal logic, and may seem irrelevant given that practi-
cal agents must eventually use logical uncertainty rather
than formal logic to reason about smarter successors.
However, it has been shown that many of the G odelian
obstacles carry over into early probabilistic logics in a
straightforward way, and some results have already been
shown to apply in the domain of logical uncertainty
(Fallenstein 2014).
Studying toy models in this formal logical setting
has led to partial solutions (Fallenstein and Soares 2014).
Recent work has pushed these models towards proba-
bilistic settings (Fallenstein and Soares 2014; Yudkowsky
2014; Soares 2014). Further research may continue driv-
ing the development of methods for reasoning under
logical uncertainty which can handle Vingean re
ection
in a reliable way (Fallenstein and Soares 2015).
3 Error-Tolerant Agent Designs
Incorrectly specied superintelligent agents could be
dangerous (Yudkowsky 2008). Correcting a modern
AI system involves simply shutting the system down
and modifying its source code. Modifying a smarter-
than-human system may prove more dicult: a system
attaining superintelligence could acquire new hardware,
alter its software, create subagents, and take other ac-
tions that would leave the original programmers with
only dubious control over the agent. This is especially
true if the agent has incentives to resist modication or
shutdown. If intelligent systems are to be safe, they must
be constructed in such a way that they are amenable to
correction, even if they have the ability to prevent or
avoid correction.
8

This does not come for free: by default, agents have
incentives to preserve their own preferences, even if those
con
ict with the intentions of the programmers (Omo-
hundro 2008; Soares and Fallenstein 2015a). Special
care is needed to specify agents that avoid the default
incentives to manipulate and deceive (Bostrom 2014,
chap. 8).
Restricting the actions available to a superintelligent
agent may be quite dicult (Bostrom 2014, chap. 9).
Intelligent optimization processes often nd unexpected
ways to fulll their optimization criterion using what-
ever resources are at their disposal; recall the evolved
oscillator of Bird and Layzell (2002). Superintelligent
optimization processes may well use hardware, software,
and other resources in unanticipated ways, making them
dicult to contain if they have incentives to escape.
We must learn how to design agents which do not
have incentives to escape, manipulate, or deceive in the
first place: agents which reason as if they are incomplete
and potentially 
awed in dangerous ways, and which
are therefore amenable to online correction. Reasoning
of this form is known as \corrigible reasoning."
Technical problem (Corrigibility) .What sort of rea-
soning can re
ect the fact that an agent is incomplete
and potentially 
awed in dangerous ways? For discus-
sion, see Soares and Fallenstein (2015a).
Na ve attempts at specifying corrigible behavior are
unsatisfactory. For example, \moral uncertainty" frame-
works could allow agents to learn values through observa-
tion and interaction, but would still incentivize agents to
resist changes to the underlying moral uncertainty frame-
work if it happened to be 
awed. Simple \penalty terms"
for manipulation and deception also seem doomed to
failure: agents subject to such penalties would have
incentives to resist modication while cleverly avoiding
the technical denitions of \manipulation" and \decep-
tion." The goal is not to design systems that fail in their
attempts to deceive the programmers; the goal is to
construct reasoning methods that do not give rise to
deception incentives in the first place.
A formalization of the intuitive notion of corrigi-
bility remains elusive. Active research is currently fo-
cused on small toy problems, in the hopes that insight
gained there will generalize. One such toy problem is
the \shutdown problem," which involves designing a set
of preferences that incentivize an agent to shut down
upon the press of a button without also incentivizing the
agent to either cause or prevent the pressing of that but-
ton (Soares and Fallenstein 2015a). Stuart Armstrong's
utility indierence technique (2015) provides a partial
solution, but not a fully satisfactory one.
Technical problem (Utility Indierence) .Can a util-
ity function be specied such that agents maximizing that
utility function switch their preferences on demand, with-
out having incentives to cause or prevent the switching?
For discussion, see Armstrong (2015).A better undefirstafinding of corrigible reasoning is essen-
tial to design agent architectures that are tolerant of
human error. Other research could also prove fruitful,
including research into reliable containment mechanisms.
Alternatively, agent designs could somehow incentivize
the agent to have a \low impact" on the world. Specify-
ing \low impact" is trickier than it may seem: How do
you tell an agent that it can't aect the physical world,
given that its RAM is physical? How do you tell it that
it can only use its own hardware, without allowing it
to use its motherboard as a makeshift radio? How do
you tell it not to cause big changes in the world when
its behavior in
uences the actions of the programmers,
who in
uence the world in chaotic ways?
Technical problem (Domesticity) .How can an intel-
ligent agent be safely incentivized to have a low impact?
Specifying such a thing is not as easy as it seems. For
a discussion, see Armstrong, Sandberg, and Bostrom
(2012).
Regardless of the methodology used, it is crucial to
undefirstand designs for agents that could be updated
and modied during the development process, so as to
ensure that the inevitable human errors do not lead to
catastrophe.
4 Value Specication
A highly-reliable, error-tolerant agent design does not
guarantee a positive impact; the eects of the system
still depend upon whether it is pursuing appropriate
goals.
A superintelligent system may nd clever, unin-
tended ways to achieve the specic goals that it is given.
Imagine a superintelligent system designed to cure can-
cer which does so by stealing resources, proliferating
robotic laboratories at the expense of the biosphere, and
kidnapping test subjects: the intended goal may have
been \cure cancer without doing anything bad," but
such a goal is rooted in cultural context and shared
human knowledge.
It is not sucient to construct systems that are smart
enough to gure out the intended goals. Human beings,
upon learning that natural selection \intended" sex to
be pleasurable only for purposes of reproduction, do
not suddenly decide that contraceptives are abhorrent.
While one should not anthropomorphize natural selec-
tion, humans are capable of undefirstafinding the process
which created them while being completely unmotivated
to alter their preferences. For similar reasons, when
developing AI systems, it is not sucient to develop
a system intelligent enough to gure out the intended
goals; the system must also somehow be deliberately
constructed to pursue them (Bostrom 2014, chap. 8).
However, the \intentions" of the operators are a
complex, vague, fuzzy, context-dependent notion (Yud-
kowsky 2011; cf. Sotala and Yampolskiy 2017). Con-
cretely writing out the full intentions of the operators in
9

a machine-readable format is implausible if not impossi-
ble, even for simple tasks. An intelligent agent must be
designed to learn and act according to the preferences
of its operators.6This is the value learning problem .
Directly programming a rule which identies cats in
images is implausibly dicult, but specifying a system
that inductively learns how to identify cats in images
is possible. Similarly, while directly programming a
rule capturing complex human intentions is implausi-
bly dicult, intelligent agents could be constructed to
inductively learn values from training data.
Inductive value learning presents unique diculties.
The goal is to develop a system which can classify po-
tential outcomes according to their value, but what sort
of training data allows this classication? The labeled
data could be given in terms of the agent's world-model,
but this is a brittle solution if the ontology of the world-
model is liable to change. Alternatively, the labeled
data could come in terms of observations, in which case
the agent would have to first learn how the labels in
the observations map onto objects in the world-model,
and then learn how to classify outcomes. Designing
algorithms which can do this likely requires a better
undefirstafinding of methods for constructing multi-level
world-models from sense data.
Technical problem (Multi-Level World-Models) .How
can multi-level world-models be constructed from sense
data in a manner amenable to ontology identication?
For a discussion, see Soares (2016).
Standard problems of inductive learning arise, as well:
how could a training set be constructed which allows
the agent to fully learn the complexities of value? It
is easy to imagine a training set which labels many
observations of happy humans as \good" and many
observations of needlessly suering humans as \bad," but
the simplest generalization from this data set may well
be that humans value human-shaped things mimicking
happy emotions: after training on this data, an agent
may be inclined to construct many simple animatronics
mimicking happiness. Creating a training set that covers
all relevant dimensions of human value is dicult for
the same reason that specifying human value directly is
dicult. In order for inductive value learning to succeed,
it is necessary to construct a system which identies
ambiguities in the training set|dimensions along which
the training set gives no information|and queries the
operators accordingly.
Technical problem (Ambiguity Identication) .Given
a training data set and a world model, how can di-
mensions which are neglected by the training data be
identied? For discussion, see Soares (2016).
6.Or of all humans, or of all sapient creatures, etc. There
are many philosophical concerns surroufinding what sort of
goals are ethical when aligning a superintelligent system, but
a solution to the value learning problem will be a practical
necessity regardless of which philosophical view is the correct
one.This problem is not unique to value learning, but it is
especially important for it. Research into the program-
matic identication of ambiguities, and the generation
of \queries" which are similar to previous training data
but dier along the ambiguous axis, would assist in
the development of systems which can safely perform
inductive value learning.
Intuitively, an intelligent agent should be able to use
some of its intelligence to assist in this process: it does
not take a detailed undefirstafinding of the human psyche
to deduce that humans care more about some ambigu-
ities (are the human-shaped things actually humans?)
than others (does it matter if there is a breeze?). To
build a system that acts as intended, the system must
model the intentions of the operators and act accord-
ingly. This adds another layer of indirection: the system
must model the operators in some way, and must ex-
tract \preferences" from the operator-model and update
its preferences accordingly (in a manner robust against
improvements to the model of the operator). Techniques
such as inverse reinforcement learning (Ng and Russell
2000), in which the agent assumes that the operator
is maximizing some reward function specied in terms
of observations, are a good start, but many questions
remain unanswered.
Technical problem (Operator Modeling) .By what
methods can an operator be modeled in such a way that
(1) a model of the operator's preferences can be extracted;
and (2) the model may eventually become arbitrarily
accurate and represent the operator as a subsystem em-
bedded within the larger world? For a discussion, see
Soares (2016).
A system which acts as the operators intend may still
have signicant diculty answering questions that the
operators themselves cannot answer: imagine humans
trying to design an articial agent to do what they would
want, if they were better people. How can normative un-
certainty (uncertainty about moral claims) be resolved?
Bostrom (2014, chap. 13) suggests an additional level
of indirection: task the system with reasoning about
what sorts of conclusions the operators would come to
if they had more information and more time to think.
Formalizing this is dicult, and the problems are largely
still in the realm of philosophy rather than technical
research. However, Christiano (2014b) has sketched
one possible method by which the volition of a human
could be extrapolated, and Soares (2016) discusses some
potential pitfalls.
Philosophical problem (Normative Uncertainty) .
What ought one do when one is uncertain about what one
ought to do? What norms govern uncertainty about nor-
mative claims? For a discussion, see MacAskill (2014).
Human operators with total control over a superintel-
ligent system could give rise to a moral hazard of extraor-
dinary proportions by putting unprecedented power into
the hands of a small few (Bostrom 2014, chap. 6). The
10

extraordinary potential of superintelligence gives rise to
many ethical questions. When constructing autonomous
agents that will have a dominant ability to determine
the future, it is important to design the agents to not
only act according to the wishes of the operators, but
also in others' common interest. Here we largely leave
the philosophical questions aside, and remark only that
those who design systems intended to surpass human in-
telligence will take on a responsibility of unprecedented
scale.
5 Discussion
Sections 2 through 4 discussed six research topics where
the authors think that further research could make it
easier to develop aligned systems in the future. This
section discusses reasons why we think useful progress
can be made today.
5.1 Toward a Formal Undefirstafinding of the
Problem
Are the problems discussed above tractable, uncrowded,
focused, and unlikely to be solved automatically in the
course of developing increasingly intelligent articial
systems?
They are certainly not very crowded. They also
appear amenable to progress in the near future, though
it is less clear whether they can be fully solved.
When it comes to focus, some think that problems of
decision theory and logical uncertainty sound more like
generic theoretical AI research than alignment-specic
research. A more intuitive set of alignment problems
might put greater emphasis on AI constraint (Sotala
and Yampolskiy 2017) or value learning.
Progress on the topics outlined in this agenda might
indeed make it easier to design intelligent systems in
general. Just as the intelligence metric of Legg and
Hutter (2007) lent insight into the ideal priors for agents
facing Hutter's interaction problem, a full description
of the naturalized induction problem could lend insight
into the ideal priors for agents embedded within their
universe. A satisfactory theory of logical uncertainty
could lend insight into general intelligence more broadly.
An ideal decision theory could reveal an ideal decision-
making procedure for real agents to approximate.
But while these advancements may provide tools
useful for designing intelligent systems in general, they
would make it markedly easier to design aligned systems
in particular. Developing a general theory of highly
reliable decision-making, even if it is too idealized to
be directly implemented, gives us the conceptual tools
needed to design and evaluate safe heuristic approaches.
Conversely, if we must evaluate real systems composed
of practical heuristics before formalizing the theoretical
problems that those heuristics are supposed to solve,
then we will be forced to rely on our intuitions.This theoretical undefirstafinding might not be devel-
oped by default. Causal counterfactual reasoning, de-
spite being suboptimal, might be good enough to enable
the construction of a smarter-than-human system. Sys-
tems built from poorly undefirstood heuristics might be
capable of creating or attaining superintelligence for
reasons we don't quite undefirstand|but it is unlikely
that such systems could then be aligned with human
interests.
Sometimes theory precedes application, but some-
times it does not. The goal of much of the research
outlined in this agenda is to ensure, in the domain of
superintelligence alignment|where the stakes are in-
credibly high|that theoretical undefirstafinding comes
first.
5.2 Why Start Now?
It may seem premature to tackle the problem of AI goal
alignment now, with superintelligent systems still rmly
in the domain of futurism. However, the authors think
it is important to develop a formal undefirstafinding of AI
alignment well in advance of making design decisions
about smarter-than-human systems. By beginning our
work early, we inevitably face the risk that it may turn
out to be irrelevant; yet failing to make preparations at
all poses substantially larger risks.
We have identied a number of unanswered founda-
tional questions relating to the development of general
intelligence, and at present it seems possible to make
some promising inroads. We think that the most respon-
sible course, then, is to begin as soon as possible.
Weld and Etzioni (1994) directed a \call to arms"
to computer scientists, noting that \society will reject
autonomous agents unless we have some credible means
of making them safe." We are concerned with the oppo-
site problem: what if society fails to reject systems that
are unsafe? What will be the consequences if someone
believes a smarter-than-human system is aligned with
human interests when it is not?
This is our call to arms: regardless of whether re-
search eorts follow the path laid out in this document,
signicant eort must be focused on the study of super-
intelligence alignment as soon as possible.
References
Armstrong, Stuart. 2015. \Motivated Value Selection for
Articial Agents." In 1st International Workshop on
AI and Ethics at AAAI-2015. Austin, TX.
Armstrong, Stuart, Anders Sandberg, and Nick Bostrom.
2012. \Thinking Inside the Box: Controlling and Using
an Oracle AI." Minds and Machines 22 (4): 299{324.
B ar asz, Mih aly, Patrick LaVictoire, Paul F. Christiano,
Benja Fallenstein, Marcello Herresho, and Eliezer Yud-
kowsky. 2014. \Robust Cooperation in the Prisoner's
Dilemma: Program Equilibrium via Provability Logic."
arXiv: 1401.5577 [cs.GT] .
11

Ben-Porath, Elchanan. 1997. \Rationality, Nash Equilib-
rium, and Backwards Induction in Perfect-Information
Games." Review of Economic Studies 64 (1): 23{46.
Bensinger, Rob. 2013. \Building Phenomenological Bridges."
Less Wrong (blog), December 23. http://lesswrong.
com/lw/jd9/building_phenomenological_bridges/ .
Bird, Jon, and Paul Layzell. 2002. \The Evolved Radio and
Its Implications for Modelling the Evolution of Novel
Sensors." In Congress on Evolutionary Computation.
CEC-'02, 2:1836{1841. Honolulu, HI: IEEE.
Bostrom, Nick. 2014. Superintelligence: Paths, Dangers,
Strategies. New York: Oxford University Press.
Christiano, Paul. 2014a. Non-Omniscience, Probabilistic In-
ference, and Metamathematics. Technical report 2014{3.
Berkeley, CA: Machine Intelligence Research Institute.
http://intelligence.org/files/Non-Omniscience.
pdf.
. 2014b. \Specifying `enlightened judgment' precisely
(reprise)." Ordinary Ideas (blog). http://ordinaryide
as.wordpress.com/2014/08/27/specifying-enlight
ened-judgment-precisely-reprise/ .
de Blanc, Peter. 2011. \Ontological Crises in Articial Agents'
Value Systems" (May 19). arXiv: 1105.3821 [cs.AI] .
Demski, Abram. 2012. \Logical Prior Probability." In Arti-
cial General Intelligence: 5th International Conference,
AGI 2012, 50{59. Lecture Notes in Articial Intelli-
gence 7716. New York: Springer.
Fallenstein, Benja. 2014. Procrastination in Probabilistic
Logic. Working Paper. Berkeley, CA: Machine Intel-
ligence Research Institute. http://intelligence.org/
files/ProbabilisticLogicProcrastinates.pdf .
Fallenstein, Benja, and Nate Soares. 2014. \Problems of
Self-Reference in Self-Improving Space-Time Embed-
ded Intelligence." In Articial General Intelligence: 7th
International Conference, AGI 2014, edited by Ben
Goertzel, Laurent Orseau, and Javier Snaider, 21{32.
Lecture Notes in Articial Intelligence 8598. New York:
Springer.
. 2015. Vingean Re
ection: Reliable Reasoning for Self-
Improving Agents. Technical report 2015{2. Berkeley,
CA: Machine Intelligence Research Institute. https://
intelligence.org/files/VingeanReflection.pdf .
Gaifman, Haim. 1964. \Concerning Measures in Fifirst Order
Calculi." Israel Journal of Mathematics 2 (1): 1{18.
. 2004. \Reasoning with Limited Resources and As-
signing Probabilities to Arithmetical Statements." Syn-
these 140 (1{2): 97{119.
G odel, Kurt, Stephen Cole Kleene, and John Barkley Rosser.
1934. On Undecidable Propositions of Formal Mathe-
matical Systems. Princeton, NJ: Institute for Advanced
Study.
Good, Irving John. 1965. \Speculations Concerning the Fifirst
Ultraintelligent Machine." In Advances in Computers,
edited by Franz L. Alt and Morris Rubino, 6:31{88.
New York: Academic Press.Halpern, Joseph Y. 2003. Reasoning about Uncertainty. Cam-
bridge, MA: MIT Press.
Hintze, Daniel. 2014. \Problem Class Dominance in Predic-
tive Dilemmas." PhD diss., Arizona State University.
http://hdl.handle.net/2286/R.I.23257 .
Hutter, Marcus. 2000. \A Theory of Universal Articial
Intelligence based on Algorithmic Complexity." arXiv:
0004001 [cs.AI] .
Hutter, Marcus, John W. Lloyd, Kee Siong Ng, and William
T. B. Uther. 2013. \Probabilities on Sentences in an
Expressive Logic." Journal of Applied Logic 11 (4): 386{
420.
Jerey, Richard C. 1983. The Logic of Decision. 2nd ed.
Chicago: Chicago University Press.
Joyce, James M. 1999. The Foundations of Causal Decision
Theory. Cambridge Studies in Probability, Induction
and Decision Theory. New York: Cambridge University
Press.
Legg, Shane, and Marcus Hutter. 2007. \Universal Intelli-
gence: A Denition of Machine Intelligence." Minds and
Machines 17 (4): 391{444.
Lehmann, E. L. 1950. \Some Principles of the Theory of
Testing Hypotheses." Annals of Mathematical Statistics
21 (1): 1{26.
Lewis, David. 1979. \Prisoners' Dilemma is a Newcomb
Problem." Philosophy & Public Aairs 8 (3): 235{240.
. 1981. \Causal Decision Theory." Australasian Jour-
nal of Philosophy 59 (1): 5{30.
 Lo s, Jerzy. 1955. \On the Axiomatic Treatment of Probabil-
ity." Colloquium Mathematicae 3 (2): 125{137.
MacAskill, William. 2014. \Normative Uncertainty." PhD
diss., St Anne's College, University of Oxford. http:
/ / ora . ox . ac . uk / objects / uuid : 8a8b60af - 47cd -
4abc-9d29-400136c89c0f .
McCarthy, John, Marvin Minsky, Nathan Rochester, and
Claude Shannon. 1955. A Proposal for the Dartmouth
Summer Research Project on Articial Intelligence.
Stanford, CA: Formal Reasoning Group, Stanford Uni-
versity, August 31.
Muehlhauser, Luke, and Anna Salamon. 2012. \Intelligence
Explosion: Evidence and Import." In Singularity Hy-
potheses: A Scientic and Philosophical Assessment,
edited by Amnon Eden, Johnny Sraker, James H. Moor,
and Eric Steinhart. The Frontiers Collection. Berlin:
Springer.
Ng, Andrew Y., and Stuart J. Russell. 2000. \Algorithms
for Inverse Reinforcement Learning." In 17th Interna-
tional Conference on Machine Learning (ICML-'00),
edited by Pat Langley, 663{670. San Francisco: Morgan
Kaufmann.
Omohundro, Stephen M. 2008. \The Basic AI Drives." In Ar-
ticial General Intelligence 2008: 1st AGI Conference,
edited by Pei Wang, Ben Goertzel, and Stan Franklin,
483{492. Frontiers in Articial Intelligence and Appli-
cations 171. Amsterdam: IOS.
12

Pearl, Judea. 2000. Causality: Models, Reasoning, and Infer-
ence. 1st ed. New York: Cambridge University Press.
Poe, Edgar Allan. 1836. \Maelzel's Chess-Player." Southern
Literary Messenger 2 (5): 318{326.
Rapoport, Anatol, and Albert M. Chammah. 1965. Pris-
oner's Dilemma: A Study in Con
ict and Cooperation.
Vol. 165. Ann Arbor Paperbacks. Ann Arbor: University
of Michigan Press.
Russell, Stuart J. 2014. \Unifying Logic and Probability:
A New Dawn for AI?" In Information Processing and
Management of Uncertainty in Knowledge-Based Sys-
tems: 15th International Conference IPMU 2014, Part
I,442:10{14. Communications in Computer and Infor-
mation Science, Part 1. Springer.
Sawin, Will, and Abram Demski. 2013. Computable Probabil-
ity Distributions Which Converge on 1Will Disbelieve
True 2Sentences 2013{10. Berkeley, CA: Machine In-
telligence Research Institute. http://intelligence.
org/files/Pi1Pi2Problem.pdf .
Shannon, Claude E. 1950. \XXII. Programming a Computer
for Playing Chess." The London, Edinburgh, and Dublin
Philosophical Magazine and Journal of Science, Series
7, 41 (314): 256{275.
Soares, Nate. 2014. Tiling Agents in Causal Graphs. Tech-
nical report 2014{5. Berkeley, CA: Machine Intelli-
gence Research Institute. https://intelligence.org/
files/TilingAgentsCausalGraphs.pdf .
. 2015. Formalizing Two Problems of Realistic World-
Models. Technical report 2015{3. Berkeley, CA: Machine
Intelligence Research Institute. https://intelligence.
org/files/RealisticWorldModels.pdf .
. 2016. \The Value Learning Problem." In Ethics for
Articial Intelligence Workshop at IJCAI-16. New York,
NY.
Soares, Nate, and Benja Fallenstein. 2015a. Questions of
Reasoning Under Logical Uncertainty. Technical re-
port 2015{1. Berkeley, CA: Machine Intelligence Re-
search Institute. https://intelligence.org/files/
QuestionsLogicalUncertainty.pdf .
. 2015b. \Toward Idealized Decision Theory." arXiv:
1507.01986 [cs.AI] .
Solomono, Ray J. 1964. \A Formal Theory of Inductive
Inference. Part I." Information and Control 7 (1): 1{22.
Sotala, Kaj, and Roman Yampolskiy. 2017. \Responses to
the Journey to the Singularity." Chap. 3 in The Tech-
nological Singularity: Managing the Journey, edited by
Victor Callaghan, Jim Miller, Roman Yampolskiy, and
Stuart Armstrong. The Frontiers Collection. Springer.
United Kingdom Ministry of Defense. 1991. Requirements for
the Procurement of Safety Critical Software in Defence
Equipment. Interim Defence Standard 00-55. United
Kingdom Ministry of Defense, April 5.United States Department of Defense. 1985. Department of
Defense Trusted Computer System Evaluation Criteria.
Department of Defense Standard DOD 5200.28-STD.
United States Department of Defense, December 26.
http://csrc.nist.gov/publications/history/dod
85.pdf .
Vinge, Vernor. 1993. \The Coming Technological Singularity:
How to Survive in the Post-Human Era." In Vision-21:
Interdisciplinary Science and Engineering in the Era of
Cyberspace, 11{22. NASA Conference Publication 10129.
NASA Lewis Research Center. http://ntrs.nasa.gov/
archive/nasa/casi.ntrs.nasa.gov/19940022856.
pdf.
Wald, Abraham. 1939. \Contributions to the Theory of
Statistical Estimation and Testing Hypotheses." Annals
of Mathematical Statistics 10 (4): 299{326.
Weld, Daniel, and Oren Etzioni. 1994. \The Fifirst Law of
Robotics (A Call to Arms)." In 12th National Confer-
ence on Articial Intelligence (AAAI-1994), edited by
Barbara Hayes-Roth and Richard E. Korf, 1042{1047.
Menlo Park, CA: AAAI Press.
Yudkowsky, Eliezer. 2008. \Articial Intelligence as a Pos-
itive and Negative Factor in Global Risk." In Global
Catastrophic Risks, edited by Nick Bostrom and Mi-
lan M. Cirkovi c, 308{345. New York: Oxford University
Press.
. 2011. Complex Value Systems are Required to Re-
alize Valuable Futures. The Singularity Institute, San
Francisco, CA. http : / / intelligence . org / files /
ComplexValues.pdf .
. 2013. The Procrastination Paradox. Brief Tech-
nical Note. Berkeley, CA: Machine Intelligence Re-
search Institute. http://intelligence.org/files/
ProcrastinationParadox.pdf .
. 2014. Distributions Allowing Tiling of Staged Subjec-
tive EU Maximizers. Technical report 2014{1. Berkeley,
CA: Machine Intelligence Research Institute, May 11.
Revised May 31, 2014. http://intelligence.org/
files/DistributionsAllowingTiling.pdf .
Yudkowsky, Eliezer, and Marcello Herresho. 2013. Tiling
Agents for Self-Modifying AI, and the L obian Obsta-
cle.Early Draft. Berkeley, CA: Machine Intelligence
Research Institute. http://intelligence.org/files/
TilingAgents.pdf .
13