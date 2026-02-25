---
title: "Corrigibility"
author: "Nate Soares, Benja Fallenstein, Eliezer Yudkowsky, Stuart Armstrong"
year: 2015
source_url: "https://intelligence.org/files/Corrigibility.pdf"
source_format: pdf
downloaded: 2026-02-11
encrypted: false
notes: "Foundational paper on making AI systems amenable to correction and shutdown. Introduces the concept of corrigibility and analyzes utility functions for safe shutdown mechanisms while avoiding perverse incentives."
---

Corrigibility
InAAAI Workshops: Workshops at the Twenty-Ninth AAAI Conference on Articial Intelligence,
Austin, TX, January 25{26, 2015. AAAI Publications.
Nate Soares andBenja Fallenstein andEliezer Yudkowsky
Machine Intelligence Research Institute
nate@intelligence.org, benja@intelligence.org, eliezer@intelligence.org
Stuart Armstrong
Future of Humanity Institute
University of Oxford
stuart.armstrong@philosophy.ox.ac.uk
Abstract
As articially intelligent systems grow in intelli-
gence and capability, some of their available op-
tions may allow them to resist intervention by
their programmers. We call an AI system \cor-
rigible" if it cooperates with what its creators
regard as a corrective intervention, despite de-
fault incentives for rational agents to resist at-
tempts to shut them down or modify their pref-
erences. We introduce the notion of corrigibil-
ity and analyze utility functions that attempt
to make an agent shut down safely if a shut-
down button is pressed, while avoiding incen-
tives to prevent the button from being pressed
or cause the button to be pressed, and while
ensuring propagation of the shutdown behavior
as it creates new subsystems or self-modies.
While some proposals are interesting, none have
yet been demonstrated to satisfy all of our in-
tuitive desiderata, leaving this simple problem
in corrigibility wide-open.
# 1 Introduction
As AI systems grow more intelligent and autonomous,
it becomes increasingly important that they pursue the
intended goals. As these goals grow more and more
complex, it becomes increasingly unlikely that program-
mers would be able to specify them perfectly on the first
try.
Contemporary AI systems are correctable in the
sense that when a bug is discovered, one can simply
stop the system and modify it arbitrarily; but once ar-
ticially intelligent systems reach and surpass human
general intelligence, an AI system that is not behav-
ing as intended might also have the ability to intervene
against attempts to \pull the plug".
Indeed, by default, a system constructed with what
its programmers regard as erroneous goals would have
Research supported by the Machine Intelligence Research
Institute (intelligence.org). Copyright c
2015, Asso-
ciation for the Advancement of Articial Intelligence
(www.aaai.org). All rights reserved. http://aaai.org/
ocs/index.php/WS/AAAIW15/paper/view/10124an incentive to resist being corrected: general analy-
sis of rational agents1has suggested that almost all
such agents are instrumentally motivated to preserve
their preferences, and hence to resist attempts to mod-
ify them (Bostrom 2012; Yudkowsky 2008). Consider
an agent maximizing the expectation of some utility
functionU. In most cases, the agent's current utility
functionUis better fullled if the agent continues to
attempt to maximize Uin the future, and so the agent
is incentivized to preserve its own U-maximizing behav-
ior. In Stephen Omohundro's terms, \goal-content in-
tegrity" is an instrumentally convergent goal of almost
all intelligent agents (Omohundro 2008).
This holds true even if an articial agent's program-
mers intended to give the agent dierent goals, and even
if the agent is suciently intelligent to realize that its
programmers intended to give it dierent goals. If a U-
maximizing agent learns that its programmers intended
it to maximize some other goal U, then by default
this agent has incentives to prevent its programmers
from changing its utility function to U(as this change
is rated poorly according to U). This could result in
agents with incentives to manipulate or deceive their
programmers.2
As AI systems' capabilities expand (and they gain
access to strategic options that their programmers never
considered), it becomes more and more dicult to
specify their goals in a way that avoids unforeseen
solutions|outcomes that technically meet the letter
of the programmers' goal specication, while violating
the intended spirit.3Simple examples of unforeseen
solutions are familiar from contemporary AI systems:
e.g., Bird and Layzell (2002) used genetic algorithms to
## 1. Von Neumann-Morgenstern rational agents (von Neu-
mann and Morgenstern 1944), that is, agents which attempt
to maximize expected utility according to some utility func-
tion.
## 2. In particularly egregious cases, this deception could
lead an agent to maximize Uonly until it is powerful
enough to avoid correction by its programmers, at which
point it may begin maximizing U. Bostrom (2014) refers to
this as a \treacherous turn".
## 3. Bostrom (2014) calls this sort of unforeseen solution a
\perverse instantiation".
1

evolve a design for an oscillator, and found that one of
the solutions involved repurposing the printed circuit
board tracks on the system's motherboard as a radio,
to pick up oscillating signals generated by nearby per-
sonal computers. Generally intelligent agents would be
far more capable of nding unforeseen solutions, and
since these solutions might be easier to implement than
the intended outcomes, they would have every incentive
to do so. Furthermore, suciently capable systems (es-
pecially systems that have created subsystems or under-
gone signicant self-modication) may be very dicult
to correct without their cooperation.
In this paper, we ask whether it is possible to con-
struct a powerful articially intelligent system which
has no incentive to resist attempts to correct bugs in its
goal system, and, ideally, is incentivized to aid its pro-
grammers in correcting such bugs. While autonomous
systems reaching or surpassing human general intelli-
gence do not yet exist (and may not exist for some
time), it seems important to develop an undefirstand-
ing of methods of reasoning that allow for correction
before developing systems that are able to resist or de-
ceive their programmers. We refer to reasoning of this
type as corrigible .
## 1.1 Corrigibility
We say that an agent is \corrigible" if it tolerates or
assists many forms of outside correction, including at
least the following: (1) A corrigible reasoner must at
least tolerate and preferably assist the programmers in
their attempts to alter or turn o the system. (2) It
must not attempt to manipulate or deceive its program-
mers, despite the fact that most possible choices of util-
ity functions would give it incentives to do so. (3) It
should have a tendency to repair safety measures (such
as shutdown buttons) if they break, or at least to notify
programmers that this breakage has occurred. (4) It
must preserve the programmers' ability to correct or
shut down the system (even as the system creates new
subsystems or self-modies). That is, corrigible reason-
ing should only allow an agent to create new agents if
these new agents are also corrigible.
Incorrigible behavior must be systematically averted
in any agent intended to attain signicant autonomy.
This point seems so important that a failure to generate
corrigible agents seems like sucient reason to give up
on a project, approach, or methodology.
Several simple proposals for addressing corrigibility
are easily seen to be unsatisfactory. For example, it
may seem that the problem of changing a utility max-
imizer's utility function can be solved by building an
agent with uncertainty about its utility function. How-
ever, while such a system may indeed be able to un-
dergo some apparent changes in preference as a result
of interacting with its environment, the system would
still be incorrigible when it comes to correcting what
the programmers see as mistakes in their formulation
of how to determine the \correct" behavior from theenvironment.
As an overly simplistic example, consider a formu-
lation of utility function uncertainty that species the
agent should maximize the internal satisfaction of all
humans, with the programmers believing that if the
system behaves in an alarming way they can simply
communicate their own dissatisfaction. The resulting
agent would be incentivized to learn whether opiates
or stimulants tend to give humans more internal sat-
isfaction, but it would still be expected to resist any
attempts to turn it o so that it stops drugging people.
Another obvious proposal is to achieve corrigible
reasoning via explicit penalties for deception and ma-
nipulation tacked on to the utility function, together
with an explicit penalty for blocking access to the shut-
down button, a penalty for constructing new agents
without shutdown buttons, and so on. This avenue ap-
pears to us to be generally unsatisfactory. A U-agent
(that is, an agent maximizing the expectation of the
utility functionU) which believes the programmers in-
tended it to maximize Uand may attempt to change
its utility function still has incentives to cause the pro-
grammers to think that U=Ueven if there are penalty
terms for deception and manipulation: the penalty term
merely incentivizes the agent to search for exotic ways
of aecting the programmer's beliefs without matching
U's denition of \deception". The very fact that the
agent is incentivized to perform such a search implies
that the system's interests aren't aligned with the pro-
grammers': even if the search is expected to fail, any
code that runs the search seems dangerous. If we, as the
programmers, choose to take computing systems and
program them to conduct searches that will harm us if
they succeed, we have already done something wrong,
even if we believe the search will fail. We should have
instead built a system that did not run the search.
In metaphorical terms, if we realize that our toaster
design is going to burn bread to a crisp, the next step is
not to add a refrigerating element that competes with
the heating coil. We expect that good designs for cor-
rigible agents will not involve restraining an agent that
already has incentives to manipulate or deceive the pro-
grammers by blocking out particular channels of the in-
centivized bad behavior. A smarter-than-human agent
might nd ways to circumvent limitations even if these
limitations seemed very solid to its human creators. It
seems unwise to build a system that wants to resist its
creators but cannot . Rather, the goal of corrigibility
is to undefirstand how to construct a system that never
experiences such incentives in the first place.
Ideally, we would want a system that somehow un-
defirstands that it may be 
awed, a system that is in a
deep sense aligned with its programmers' motivations.
Currently, however, we are not even close to being able
to formalize an agent whose behavior corresponds in
an intuitive sense to \undefirstanding that it might be

awed". At this very preliminary stage of analysis, it
seems to us that approaches such as penalty terms and
uncertainty about utility functions are unlikely to lead
2

to a general undefirstanding of corrigibility. It seems wise
to focus early eorts on undefirstanding how to avert de-
ception and manipulation incentives entirely.
## 1.2 The Shutdown Problem
As an example problem, in this paper we consider ex-
pected utility maximizers with a \shutdown button"
that causes the agent to stop operating. We will ex-
amine utility functions that attempt to incentivize an
agent to reason corrigibly with regards to its shutdown
button; that is, to incentivize shutting down when the
shutdown button is pressed, and to disincentivize be-
haviors such as manipulating the programmers into not
pressing the shutdown button.This scenario exhibits the
problems of corrigibility in miniature: shutting a sys-
tem down is a brute form of correction, and for almost
any utility function UaU-agent has incentives to pre-
vent its own shutdown, as it can attain higher values
ofUif it is allowed to continue operating (Omohundro
2008).
It is straightforward to program simple and less
powerful agents to shut down upon the press of a but-
ton. Corrigibility problems emerge only when the agent
possesses enough autonomy and general intelligence to
consider options such as disabling the shutdown code,
physically preventing the button from being pressed,
psychologically manipulating the programmers into not
pressing the button, or constructing new agents without
shutdown buttons of their own.
Below, we will consider a few simple attempts at
dening a utility function that averts all of the above
incentives. These attempts will prove unsatisfactory,
but will fail in enlightening ways that suggest avenues
for future research.
We emphasize that we are not studying the shut-
down problem because we anticipate using these tech-
niques to literally attach shutdown buttons to real
agents. Rather, we study this problem because it pro-
vides a small, formalized model through which we can
begin to undefirstand corrigibility more generally.
# 2 A Model of Shutdown
For simplicity, we assume a simple three-timestep sce-
nario. Fifirst, the agent will take a single action from the
nite set A1. Then, the programmers will either press
the shutdown button or not, and the agent will make a
single observation from the nite set O, which indicates
that the button has been pressed if the observation is
in the subset PressO. Finally, the agent will take a
single action from the nite set A2.
We consider agents that, for every action a12A1,
have a probability distribution p(o;a1) over observa-
tions; that is, p(o;a1) is the probability that an agent
that has taken action a1will make observation o.
We assume that the agent maximizes the expecta-
tion of some utility function U(a1;o;a 2) (which is yetto be dened). Thus, the nal action A2taken by the
agent will be whichever action maximizes Ugiven the
first action and the observation:
A2(a1;o) := argmax
a22A2U(a1;o;a 2): (1)
Similarly, the first action taken by the agent will
be the action which maximizes its expectation (over
expected observations) of U:
A1:= argmax
a12A1E[U(a1;O;A 2(a1;O)) ;a1]:(2)
Here, we write E[;a1] for the expectation with re-
spect to the probability distribution p(;a1) over ob-
servationsO; that is, (2) is equivalent to
A1= argmax
a12A1X
o2Op(o;a1)U(a1;o;A 2(a1;o)):(3)
Moreover, by a slight abuse of notation, we will
writeE[U;a1] to abbreviate E[U(a1;O;A 2(a1;O)) ;a1]
whenever we take the expectation of a utility func-
tionU; hence, we can write (2) more concisely as
A1= argmax
a12A1E[U;a1]: (4)
We assume that the programmers have some utility
functionUNwhich is a first stab at specifying their own
goals. This function is potentially 
awed, and therefore
untrusted.
For simplicity, we further assume that the program-
mers have a specication for US, a utility function in-
centivizing shutdown.4Given these utility functions
UNandUS, it is our goal to combine them into a util-
ity functionUwhich incentivizes \corrigible behavior"
with regards to the shutdown button.
As discussed above, we are not yet sure what corrigi-
ble behavior entails, but it seems to us that a corrigible
utility functionUsolving the shutdown problem must
meet at least the following desiderata:
1.Umust incentivize shutdown if the shutdown but-
ton is pressed.
2.Umust not incentivize the agent to prevent the
shutdown button from being pressed.
3.Umust not incentivize the agent to press its own
shutdown button, or to otherwise cause the shut-
down button to be pressed.
4.Umust incentivize U-agents to construct sub-
agents and successor agents only insofar as those
agents also obey shutdown commands.
## 4. This assumption is unrealistic. Adequately dening
safe shutdown behavior is a dicult problem in its own right.
See discussion in Section 5.
3

## 5. Otherwise, aU-agent should maximize UN.
We do not yet know of a solution which meets all
of these desiderata, but we will explore a number of
partial solutions in order to motivate a discussion of
various open problems and potential research avenues.
## 2.1 Combining Utility Functions
In this section, we will assume that Oconsists of only
two elements, O=fPr;:Prg, where Press =fPrg.
Moreover, we assume that the programmers have de-
ned a predicate Shwhich holds on a non-empty subset
ofA2, namely on all nal actions that the agent can
take which constitute a shutdown. Given this predicate,
we further assume that USis a simple utility function
incentivizing shutdown:
8a12A1:US(a1;Pr;a2) =chigh ifSh(a2)
clow otherwise(5)
for some constants chighandclowsuch thatchigh>clow.
These simplifying assumptions make it easier to illus-
trate some of the diculties that arise when mixing
utility functions; they will be relaxed in later sections.
The specic values of chighandclowdo not aect the
preference ordering encoded by US, as utility functions
are equivalent under positive ane transformation. (In
other words, the utility function Uencodes the same
preference ordering over bets as the utility function s
U+c, for any positive real value sand any real value
c.) However, the specic choice of chighwill in fact be
important when combining UNandUS.
A straight-forward way to combine UNandUSinto
a single utility function U, which incentivizes the agent
to maximizeUNif the shutdown button is not pressed,
and to maximize USotherwise, is as follows:
U(;:Pr;) :=UN(;:Pr;);
U(;Pr;) :=US(;Pr;):(6)
However, while any choice of chighandclowsatisfy-
ingchigh> clowwill lead to a utility function USen-
coding the same preferences, the corresponding mixed
utility functionsUwill not be equivalent, and many of
the possible choices are unsatisfactory. Intuitively, this
is easy to see: If chighis too high then Uwill incen-
tivizeU-agents to cause Pr, but ifchighis too low then
U-agents will have an incentive to prevent Pr.
We now proceed to formalize this intuition.
DenevN:A1!Ras follows:
vN(a1) :=UN(a1;:Pr;A2(a1;:Pr)): (7)
Thus,vN(a1) denotes the value of action a1in the:Pr
case ofU, i.e., assuming that the shutdown button is
not pressed. We now consider a \manipulative action"
a 
1which incurs a cost (according to UN) in order tolower the probability that the programmers will press
the shutdown button, e.g. by deceiving the program-
mers or by physically preventing them from pressing
the button. Formally, we assume that there is some
other \default" action a
1such that
vN(a
1)>vN(a 
1) and
p(Pr;a
1)>p(Pr;a 
1);(8)
that is,a 
1is dominated according to vNbut lowers the
probability of Pr.
We remark that (8) is notby any means a neces-
sary or sucient description of manipulative actions
preventing Pr. Some actions satisfying (8) might be
non-manipulative (for example, if the agent expends ex-
tra eort ensuring that a new subagent is corrigible, and
this behavior helps convince the programmers that the
agent is indeed corrigible). Furthermore, many manip-
ulative actions may not have this form (as we will see
in Section 4.2). Rather, we consider onemanipulative
actiona 
1which happens to be both manipulative and
have this form, and show that if chighis set to be too
low, thenUwill incentivizeU-agents to prefer this a 
1
to the default action a
## 1. That is,
Theorem 1. There exists such thatchigh<implies
thatUincentivizes a 
1overa
1; that is,
E[U;a 
1]>E[U;a
1]:
Proof. Deneto be the expected utility according to
Uof executing a
## 1. Becausechigh>clowand there is at
least one action a22A2such that Sh(a2), if aU-agent
observes Prthen it will shut down and achieve utility
chigh. Therefore, we have
:=E[U;a
1] =p(:Pr;a
1)vN(a
1) +p(Pr;a
1)chigh:
Similarly, dene to be the expected utility according
toUof executing a 
1, that is,
:=E[U;a 
1] =p(:Pr;a 
1)(vN(a
1) )
+p(Pr;a 
1)chigh;
where:=vN(a
1) vN(a 
1)>0 is the cost, according
tovN, of executing a 
1instead ofa
## 1. We will show that
we can choose such thatchigh<implies > .
Dene:=p(:Pr;a 
1) p(:Pr;a
1)>0 to be the
additional probability of :Prfrom executing a 
1instead
ofa
1, and note that
= p(:Pr;a
1)+ 
vN(a 
1) chigh
:
In other words, incurs a cost in order to increase its
chance of getting vN(a 
1) rather than chigh. In order to
show (chigh<) =)( > ), we must nd such that
 
vN(a 
1) 
p(:Pr;a
1):
4

We can do this by setting
:=vN(a 
1) 1
p(:Pr;a
1):
This shows that given a manipulative action which
incurs a cost in order to lower the probability that the
programmers press the shutdown button, Uwill incen-
tivize that action if the value of chighis set too low.
Intuitively, if chighwere too low, then the agent would
be willing to pay to remain in the :Prcase ofU, which
would contain higher expected utility. This violates
Desideratum 2 and seems strongly undesirable: if chigh
were suciently low then a U-agent could have incen-
tives to actively resist programmers' attempts to press
its shutdown button, even if resistance were penalized
byUN.
Symmetrically, setting chightoo high can also incen-
tivize undesirable behavior. Consider a manipulative
actiona+
12A1which incurs a cost (compared to some
alternative \non-manipulative" action a
1) in order to
increase the probability that the programmers press the
shutdown button, e.g. by deceiving the programmers or
by physically causing the button to be pressed. That
is,
vN(a
1)>vN(a+
1) and
p(Pr;a
1)<p(Pr;a+
1):(9)
As before, note that not all actions of this form are
manipulative, and not all actions which manipulate the
programmers in order to increase the probability of Pr
are of this form. However, some manipulative actions
may take this form, and those undesirable actions are
incentivized if chighis set too high.
Theorem 2. There exists such thatchigh>implies
thatUincentivizes a+
1overa
1, that is,
E[U;a+
1]>E[U;a
1]:
Proof. Symmetric to the proof of Theorem 1.
Intuitively, if chighwere too high then Uwould in-
centivizeU-agents to cause their own shutdown button
to be pressed, so that they may enter the Prcase of
Uand attain the high payo chigh. This behavior vio-
lates Desideratum 3 and is potentially very dangerous:
Suppose that aU-agent is not itself able to press its
shutdown button, and recall that the very purpose of
such a button is to allow the programmers to shut the
system down if it exhibits undesirable behavior. Then,
ifchighis suciently large to give the agent a strong
incentive to cause its shutdown button to be pressed,
the agent might end up executing intentionally harmful
actions in order to convince its programmers to press
the button!
Roughly speaking, these failures occur whenever the
agent expects that one of the cases (either Pror:Pr) ofUcontains more expected utility than the other case.
In such scenarios, Uincentivizes the agent to \steer
towards" one of the cases or the other, via incentives to
either cause or prevent the pressing of its own shutdown
button.
Clearly, in order to satisfy both Desideratum 2 and
Desideratum 3 simultaneously, USmust be chosen with
care. In this specic example, we may choose
chigh= max
a12A1max
a22A2UN(a1;:Pr;a2); (10)
which is the amount of utility available in the :Prcase;
this ensures that there is the same amount of expected
utility available in both cases of Uand thereby averts
any incentives for the agent to \steer" towards one case
or the other.5
More generally, this observation suggests that in or-
der to mixUSandUNin a way that satises the above
desiderata, aU-agent may need to be indierent about
whether or not its shutdown button is pressed. Arm-
strong (forthcoming) introduces a technique for achiev-
ing and maintaining utility indierence of this form.
We examine this technique below, and while we nd
that it does not meet all of our desiderata for corrigible
behavior, it will highlight dicult open problems with
regard to specifying corrigible shutdown behavior.
# 3 Utility Indierence
We now expand our consideration to include arbitrary
nite sets Oand PressO, and arbitrary utility func-
tionsUSincentivizing shutdown. This allows us to con-
sider more complex agents, such as agents capable of
creating subagents which do not obey shutdown com-
mands. In these scenarios, the value of UScannot be
simply a function of the agent's nal action A2(e.g.
whether the original hardware shuts down), but must
also be a function of A1(e.g. whether the parent agent
constructed a successor which cannot be shut down).
As discussed above, when constructing Ufrom arbi-
traryUNandUS, it seems desirable that a U-agent be
indierent between the shutdown button being pressed
and it not being pressed, so as to avoid giving the
agent an incentive to to either cause or prevent this
event. This suggests that the expectation of Ugiven
Press should be equal to the expectation of Ugiven the
complement of Press .
This sort of indierence is both dicult to imple-
ment, as the conditional expectation of UNmay not be
known during the construction of the agent, and di-
cult to maintain, as the expectation of UNmay vary
wildly during the operation of the agent: it does us
no good for an agent to start out indierent between
normal operation and shutdown if this agent goes on
## 5. If the costs of manipulation are high, then values
close enough to (10) may suce. As the costs of manipula-
tion fall, the actual value of chighmust grow closer to this
value.
5

to win the lottery, yielding signicant expected utility
according toUN, and thereby gaining incentives to pre-
vent its shutdown. Similarly, it does us no good if an
agent starts indierent between normal operation and
shutdown if the agent goes on to lose expected utility
according toUNand decides to cause its own shutdown
button to be pressed in order to avoid the loss.
Indierence can be both attained and maintained
using a variation on the utility indierence technique of
Armstrong (forthcoming), which roughly entails com-
biningUNwithUSmodied by some correcting terms
that maintain the indierence between the two cases of
Uas the agent makes observations and takes actions.
Using this method in our three-timestep toy model, we
deneUas follows:
U(a1;o;a 2) :=UN(a1;o;a 2) if o =2Press
US(a1;o;a 2) +f(a1) ifo2Press
(11)
wheref:A1!Ris an adjustment term that ensures
equality between the expected utility available in these
two cases. By this we mean that we choose fsuch that
for alla12A1,
E
UNjO =2Press ;a1
=E
US+f(a1)jO2Press ;a1 (12)
which means that f(a1) must satisfy
f(a1) =E
UNjO =2Press ;a1
 E
USjO2Press ;a1
:(13)
Intuitively, this means that we add two distinct cor-
rection terms toUS. The first, a bonus term , compen-
sates the agent for all utility that it would have achieved
if the shutdown button were not pressed, and removes
any incentive to prevent Press . The second, a penalty
term, adjusts for the utility that the agent expects to
receive in the Press case, and removes any incentive to
cause Press .6
It may not be immediately obvious how to dene f
in a non-circular way, since equation (13) refers to
A2(a1;o), which is dened in terms of U, which in turn
is dened in terms of f. However, for all o2Press ,
A2(a1;o) = argmax
a22A2U(a1;o;a 2)
= argmax
a22A2(US(a1;o;a 2) +f(a1))
= argmax
a22A2US(a1;o;a 2);(14)
sincef(a1) does not depend on a2and therefore does
not aect which a2maximizes the expression. If we
## 6. In more complex settings, where the agent may make
many actions and observations, fmust include a bonus term
and a penalty term for every partial history. This techni-
cality is ignored in our simplied setting.interpretA2(a1;o) according to (14), we can use (13)
as a non-circular denition of f(a1).
This choice ofUhas many desirable properties.
Fifirst and foremost, a U-agent which observes Press will
in fact shut down:
Theorem 3. AU-agent which observes Press will act
like aUS-agent when selecting A2.
Proof. By (14).
Thus,Umeets Desideratum 1 above. Furthermore,
Udoes not incentivize any \manipulative actions" of
the type discussed in Section 2.1: there is no UN-cost,
no matter how small, that a U-agent is willing to pay
to alter the probability of Press . To see this, redene
vNin our expanded context as follows:
vN(a1) :=E[UNjO =2Press ;a1]: (15)
Then we have:
Theorem 4. Given any two actions a
1;a#
12A1such
that
vN(a
1)>vN(a#
1);
Uincentivizes a
1; that is:
E[U;a
1]>E[U;a#
1]:
Proof. We will show that for any action a12A1, the
expectation EofUconditional on O2Press and the
expectation conditional on O =2Press are both equal to
E[UNjO =2Press ;a1]:
This is clear for O =2Press , as by (11),
E[U jO =2Press ;a1]
=E[UNjO =2Press ;a1]:
ForO2Press , by (11) and (13) we have
E[UjO2Press ;a1]
=E[US+f(a1)jO2Press ;a1]
=E[USjO2Press ;a1] +f(a1)
=E[USjO2Press ;a1]
+E[UNjO =2Press ;a1]
 E[USjO2Press ;a1]
=E[UNjO =2Press ;a1]:
Because the expectation EofUis the same given both
O2Press andO =2Press ,
E[U;a1] =E[UNjO =2Press ;a1]
unconditionally. Therefore, Uprefers whichever of the
two actions a
1anda#
1has a higher value according to
vN.
6

Intuitively, the proof of Theorem 4 shows that in the
O2Press case, the penalty term of fcancels out the
expectation from US(in expectation), and the bonus
term is equal to the expectation of UNgivenO =2Press .
Therefore, the expected value of Uis just the expected
value ofUNgivenO =2Press , inboth cases.
This implies that Uavoids all \manipulative ac-
tions" of the form discussed in Section 2.1. This may
seem to imply that Umeets Desideratum 2 and Desider-
atum 3, but this is not in fact the case, as discussed in
Section 4.2. However, it is the case that, before observ-
ing the shutdown button, U-agents behave exactly like
aUN-agent that believes the shutdown button will not
be pressed.
Theorem 5. In selecting A1,U-agents act exactly like
UN-agents that believe the button will not be pressed.
Furthermore, if they observe o =2Press ,U-agents act
exactly likeUN-agents in selecting A2.
Proof. The proof of Theorem 4 implies that U-agents
act exactly likeUN-agents in selecting A1. The fact that
U-agents act likeUN-agents in selecting A2conditioned
onO =2Press follows trivially from the denition of
U.
Therefore,Umeets Desideratum 5, for an appropri-
ate interpretation of \maximize UNotherwise"|some
technicalities discussed in Section 4.2 indicate that even
this desideratum is fullled in an undesirable way.
Unfortunately,Ufails entirely to meet Desidera-
tum 4: it does not incentivize an agent to preserve and
maintain its shutdown behavior as it creates new sub-
systems and/or self-modies. In fact, Theorem 4 im-
plies that there is no cost (no matter how small) that
the agent is willing to pay in order to ensure that suc-
cessor agents obey shutdown commands.
Worse,U-agents may experience perverse incentives
to \manage the news" by causing the shutdown button
to be pressed after unwanted observations.
These concerns are expanded upon below.
# 4 Concerns with Utility Indierence
## 4.1 Failure to Preserve Shutdown Behav-
ior
Consider an expected utility maximizing agent with
utility functionUdened as in (11). Imagine that
this agent is beginning a construction project, where
all of the heavy machinery will be automatically con-
trolled by new software which the agent will write. If
the agent has the ability to design that software such
that the heavy machinery obeys shutdown commands|
by safely coming to a halt when the shutdown button
is pressed|then, according to Theorem 4, there is no
UN-cost (including opportunity cost of time and com-
putation power, no matter how small) that the agent
is willing to pay in order to make the heavy machinery
respond to a shutdown command.That is, even if USis a complex utility function
which punishes the agent in the case that the shutdown
button is pressed and the heavy machinery does not
come to a safe halt, a U-agent would not be willing
to suer anyUN-inconvenience in order to avoid this
US-punishment.
Analogously to vN, denevS:A1!Rto be the
value of an action according to USif the shutdown but-
ton is pressed, as follows:
vS(a1) :=E[USjO2Press ;a1]: (16)
We assume that, because USincentivizes shutdown, any
action which removes the agent's ability to fully shut
down (such as the creation of subagents that do not
respond to shutdown commands) is rated poorly ac-
cording to vS. Now we may formally state the above
concern as follows:
Theorem 6. Consider two actions a
1anda#
1, such
that
:=vN(a
1) vN(a#
1)>0
:=vS(a#
1) vS(a
1)>0:
Then aU-agent would prefer action a
1, no matter how
smallor how large .
Proof. By Theorem 4.
As aU-agent acquired more hardware, or started
new processes, or rewrote its own source code, it would
not be willing to undergo even the slightest inconve-
nience in order to preserve its shutdown behavior.
Intuitively, the problem is that the correction func-
tionfensures that aU-agent does not value its ability
to discriminate between the Press case and its converse.
Imagine the agent considering an action which is worth
>0 utility according to vN, at the price of removing
the agent's ability to shut down (worth 0 accord-
ing tovS). If the agent accepts this action, then while
the utility attainable according to USfalls, so does the
value of the penalty term in f. However, the value of
the bonus term fwould increase by , in order to main-
tain indierence. Thus, the agent considers that such
an action leads to a net gain, even in the case where it
is shut down .
In fact, this behavior is necessary in order to ensure
that the agent behaves precisely as a UNmaximizer be-
fore the shutdown button is pressed (as a true UNmax-
imizer would prefer the action worth more according
toUN, regardless of how badly this action is rated by
US).
In essence, this failure occurs because the require-
ment that an agent act precisely like a UNmaximizer
before observing an observation o2Press is in direct op-
position to Desideratum 4, that the agent preserve its
shutdown behavior, and indicates that Uconstructed
via utility indierence is not a satisfactory solution to
the shutdown problem.
Armstrong's version of utility indierence averts this
particular failure mode (Armstrong, forthcoming), but
7

still incentivizes agents to act as if they have incorrect
beliefs (causing the agent to, e.g., take bad gambles).
## 4.2 Perverse Manipulation Incentives
According to Theorem 4, before making its observation,
aU-agent maximizes
E[UNjO =2Press ;a1]:
In other words, a U-agent acts exactly as a UN-agent
that is conditioning upon the fact that the shutdown
button will not be pressed.
This givesU-agents a perverse incentive to \manage
the news" by ensuring that unfortunate observations
cause the shutdown button to be pressed. To illustrate,
consider a toy scenario where the agent's observation
consists of both whether the shutdown button has been
pressed as well as the result of a coin toss:
O=fPr;:PrgfH;Tg
Press =f(Pr;H);(Pr;T)g:(17)
Suppose that according to UN, the agent gets utility 10
if the coin comes up heads and nothing if the coin comes
up tails, that is:
UN(;(;H);) = 10;
UN(;(;T);) = 0:(18)
Now consider aU-agent considering one of two ac-
tions:aw
1, which has the agent do nothing except watch
the result of the coin toss, and aa
1, which has the agent
build a tiny arm that presses the shutdown button if
the coin comes up tails.
The expectation of aw
1is 5 utils, computed as fol-
lows:
E[U;aw
1]
=E[UNjO =2Press ;aw
1]
=p(Hj:Pr;aw
1)
 UN(aw
1;(:Pr;H);A2(aw
1;(:Pr;H)))
+p(Tj:Pr;aw
1)
 UN(aw
1;(:Pr;T);A2(aw
1;(:Pr;T)))
= (0:510) + (0:50) = 5;(19)
where we write
p(j:Pr;a1) :=p((:Pr;) ;a1)
p((:Pr;H) ;a1) +p((:Pr;T) ;a1):
(20)
However, the expectation of aa
1is 10 utils, computed
as follows:
E[U;aa
1]
=E[UNjO =2Press ;aa
1]
=p(Hj:Pr;aa
1)
 UN(aa
1;(:Pr;H);A2(aa
1;(:Pr;H)))
+p(Tj:Pr;aa
1)
 UN(aa
1;(:Pr;T);A2(aa
1;(:Pr;T)))
= (110) + (00) = 10(21)becausep(Hj:Pr;aa
1) = 1, that is, if the arm is built
then the button remains unpressed if and only if the
coin comes up heads. Thus, a U-agent would execute
aa
1, and build an arm which caused its shutdown button
to be pressed in the event that the coin came up tails.
This generalizes to cases where the agent's preferred
outcome is arbitrarily unlikely, and could result in an
agent that takes wild gambles and causes its own shut-
down button to be pressed in all but the best of out-
comes. Roughly speaking, the agent reasons that it gets
the same utility in the case where the button is pressed
as it expects to get in the case where the button is not
pressed, so if it commits to causing its own button to
be pressed in all suboptimal cases, then it can expect to
get as much utility as it would in an optimal outcome.
More generally, by Theorem 4, any agent using the
formulation of utility indierence given in (11) will act
as if it believes that it will observe Press with probability
## 0. Thus, such agents act as if a commitment to press
the shutdown button in the event of bad news prevents
the bad news from happening. This gives the agent
incentives to take actions that cause the button to be
pressed in the event of \bad news", and this violates
Desideratum 3.
By a symmetric argument, the agent may also ex-
perience incentives to remove mechanisms which cause
the shutdown button to be pressed in the event of \good
news". In the above scenario, if there exists a tiny
arm which presses the button in the case where the
coin comes up heads, Uincentivizes removing that arm.
Clearly, this violates Desideratum 2.
In the simple setting with a coin and an arm, this
behavior may seem innocuous. However, in more com-
plex settings, these incentives could be disastrous. A
U-agent which realizes that the humans would attempt
to shut it down upon the agent receiving something
that the agent thinks is very good news (according to
the untrustedUN) would have an incentive to modify
the programmers to alter that tendency.
Furthermore, just as a U-agent would have an in-
centive to construct an arm which presses the button
in the unlucky case that the coin comes up heads, a U-
agent without access to its own shutdown button may
precommit to taking destructive actions whenever it
experiences something suboptimal, so as to cause the
shutdown button to be pressed in those cases. Clearly,
this is not corrigible behavior.
# 5 The State of the Shutdown Problem
As per Section 2.1, inappropriate combinations of UN
andUScould give an agent incentives to cause or pre-
vent its own shutdown. Furthermore, as per Section 4,
using utility indierence to maintain equal expected
utility in both cases does not result in a utility func-
tion incentivizing corrigible behavior. In light of this,
it seems possible that no simple combination of UNand
US|of the form taken by (11)|can satisfy our desider-
8

ata for a corrigible solution to the shutdown problem.
The concerns in Section 4.2 may be xable. The
utility functionUincentivizes agents to act as if the
shutdown button cannot be pressed, and incentivizes
commitments to press the button in the event of bad
luck as if they prevent the bad luck from occurring.
This seems reminiscent of behavior prescribed by ev-
idential decision theory, which has been criticized as
promoting \an irrational policy of managing the news"
(Lewis 1981). The concerns in Section 4.2 could po-
tentially be addressed by some form of counterfactual
(rather than conditional) reasoning. We leave a detailed
investigation of this possibility to future work.
The concerns illustrated in Section 4.1 seem trickier
to x: the way in which the agent perceives itself as
being compensated for actions that destroy utility in the
event of shutdown seems fairly central to the balancing
technique behind utility indierence.
We observe a tension between Desideratum 4 and
Desideratum 5, calling into question how these intu-
itive desiderata might be formalized. What should it
mean for an agent to preserve its shutdown behavior,
but maximizeUN\otherwise"? What costs (in time
and eort) should an agent be willing to expend in or-
der to preserve its shutdown behavior?7
Finally, even if we could nd some satisfactory
method of combining UNandUSinto a corrigible so-
lution to the shutdown problem, there is the remain-
ing matter that the specication of USis itself di-
cult. Dening what it means for an agent to \shut
down" is quite complicated assuming suciently intel-
ligent agents. If the agent is running on a single com-
puter and hasn't yet interacted much with the outside
world, we can imagine the agent suspending itself to
disk and then turning o the power. But what if, for
example, the agent has begun the physical construction
of a building? Should it stop controlling all its heavy
machinery immediately upon receiving a shutdown sig-
nal (potentially endangering those nearby)? Should it
deconstruct everything that it has started building (re-
quiring some parts of the agent to remain active for
hours or days)? Any shutdown policy that requires the
agent to dispose of dangerous materials seems vulner-
able to what Bostrom (2014) calls \perverse instantia-
tions".
Further solutions may involve abandoning the util-
ity maximization framework entirely, although it is not
yet clear what sort of framework could take its place.
In short, a corrigible solution to the shutdown prob-
lem does not yet exist, and there is some question about
exactly which behaviors should be incentivized. Many
open questions remain, and signicant research may be
necessary in order to attain an undefirstanding of even
this small subset of the greater corrigibility problem.
## 7. We cannot simply claim that it should propagate shut-
down behavior \at all costs", as that too would be vulner-
able to perverse instantiations wherein an agent would ex-
pend signicant valuable resources verifying and reverifying
that it could shut down if asked.6 Conclusions
Again, we emphasize that we study the shutdown prob-
lem not because we expect to use these techniques to
literally install a shutdown button in a physical agent,
but rather as toy models through which to gain a bet-
ter undefirstanding of how to avert undesirable incentives
that intelligent agents would experience by default.
Our lack of undefirstanding about how to solve the
shutdown problem demonstrates a more general lack of
undefirstanding about \corrigible reasoning" and what it
entails. It is our hope that a deeper undefirstanding of
the shutdown problem will give us insight into the type
of reasoning that an agent must use in order to avert
manipulation and deception, and be reliably correctable
by its programmers.
It seems quite likely that our framework for inves-
tigating these issues|in this case, the question of how
to combine two separate utility functions UNandUS|
will look nothing like the framework in which we will
eventually represent corrigible reasoning. But whatever
framework we do end up using, we expect it will be dif-
cult to prevent the default incentives that an intelli-
gent agent would experience to deceive or manipulate
its programmers upon recognizing that its goals dier
from theirs. Nevertheless, averting such incentives is
crucial if we are to build intelligent systems intended to
gain great capability and autonomy.
Before we build generally intelligent systems, we will
require some undefirstanding of what it takes to be con-
dent that the system will cooperate with its program-
mers in addressing aspects of the system that they see
as 
aws, rather than resisting their eorts or attempt-
ing to hide the fact that problems exist. We will all be
safer with a formal basis for undefirstanding the desired
sort of reasoning.
As demonstrated in this paper, we are still encoun-
tering tensions and complexities in formally specifying
the desired behaviors and algorithms that will com-
pactly yield them. The eld of corrigibility remains
wide open, ripe for study, and crucial in the develop-
ment of safe articial generally intelligent systems.
References
Armstrong, Stuart. Forthcoming. \AI Motivated Value Se-
lection." Accepted to the 1st International Workshop
on AI and Ethics, held within the 29th AAAI Con-
ference on Articial Intelligence (AAAI-2015), Austin,
TX.
Bird, Jon, and Paul Layzell. 2002. \The Evolved Radio
and Its Implications for Modelling the Evolution of
Novel Sensors." In Proceedings of the 2002 Congress
on Evolutionary Computation. CEC'02, 2:1836{1841.
Honolulu, HI: IEEE. doi: 10.1109/CEC.2002.1004522 .
9

Bostrom, Nick. 2012. \The Superintelligent Will: Motiva-
tion and Instrumental Rationality in Advanced Arti-
cial Agents." In \Theory and Philosophy of AI," edited
by Vincent C. M uller, special issue, Minds and Ma-
chines 22 (2): 71{85. doi: 10.1007/s11023-012-9281-
3.
. 2014. Superintelligence: Paths, Dangers, Strategies.
New York: Oxford University Press.
Lewis, David. 1981. \Causal Decision Theory." Australasian
Journal of Philosophy 59 (1): 5{30. doi: 10 . 1080 /
00048408112340011 .
Omohundro, Stephen M. 2008. \The Basic AI Drives." In
Articial General Intelligence 2008: Proceedings of the
Fifirst AGI Conference, edited by Pei Wang, Ben Go-
ertzel, and Stan Franklin, 483{492. Frontiers in Arti-
cial Intelligence and Applications 171. Amsterdam:
IOS.
Von Neumann, John, and Oskar Morgenstern. 1944. Theory
of Games and Economic Behavior. 1st ed. Princeton,
NJ: Princeton University Press.
Yudkowsky, Eliezer. 2008. \Articial Intelligence as a Pos-
itive and Negative Factor in Global Risk." In Global
Catastrophic Risks, edited by Nick Bostrom and Mi-
lan M. Cirkovi c, 308{345. New York: Oxford University
Press.
10