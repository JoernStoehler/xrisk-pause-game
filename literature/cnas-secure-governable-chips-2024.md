---
author: "Onni Aarne, Tim Fist, Caleb Withers"
year: 2024
source_url: "https://s3.us-east-1.amazonaws.com/files.cnas.org/documents/CNAS-Report-Tech-Secure-Chips-Jan-24-finalb.pdf"
source_format: pdf
downloaded: 2026-03-12
encrypted: false
notes: "Proposes on-chip mechanisms for monitoring, restricting, and enforcing compute limits on AI chips. Covers export control enforcement, technical implementations, and policy applications."
---


# Executive Summary

Broadly capable AI systems, built and deployed
using specialized chips, are becoming an engine
of economic growth and scientific progress. At the
same time, these systems also could be used by irre-
sponsible actors to enable mass surveillance, conduct
cyberattacks, and design novel biological weapons. This
makes securing and governing the supply chain for AI
chips important for mitigating risks to U.S. national
security. But today’s semiconductor export controls
are lackluster as a stand-alone solution. To be effective,
they need to be far-reaching, which harms the competi-
tiveness of U.S. firms, risks the “de-Americanization” of
chip supply chains, and risks alienating commercial AI
developers and partner nations. Far-reaching controls
are also hard to enforce: AI chip smuggling is already
happening today and could significantly grow in volume
over the coming years.1
The unique challenges of AI governance and the
On-chip governance       opportunities afforded by modern security technologies
mechanisms can           suggest alternative approaches are both necessary and
safeguard the            possible. What if policies concerning AI chips could be
development and          implemented directly on the chips themselves? What if
updates to export regulations could be deployed through
deployment of broadly    a simple software update, backed by secure hardware?
capable AI and           This report introduces the concept of “on-chip gover-
supercomputing systems   nance mechanisms”: secure physical mechanisms built
directly into chips or associated hardware that could
in a way that is         provide a platform for adaptive governance. Its key
complementary            findings are as follows.
to American technology
leadership.              On-chip governance mechanisms could help
safeguard the development and deployment
of broadly capable AI and supercomputing
systems in a way that is complementary to
American technology leadership.
One especially promising near-term application is export
control enforcement, where on-chip mechanisms could
prevent or place boundaries around unauthorized actors’
use of export-controlled AI chips. Implemented well,
this would greatly aid enforcement, and reduce the need
for top-down export controls that harm the competi-
tiveness of the U.S. chip industry, instead enabling more
surgical end-use/end-user–focused controls if desired.
Later applications include enforcing the terms of
future international agreements or other regulations
that govern the large-scale training and deployment
of AI models. Here, on-chip mechanisms could widen
the space of possible agreements and policies by pro-
viding a trustworthy verification platform. For example,
on-chip governance mechanisms could allow AI devel-           from the manufacturer (or a regulator), not unlike the
opers to credibly report “training runs” that exceed          product licenses required to unlock proprietary software.
certain computation thresholds, as called for by a            Hardware operating licenses of this kind are already used
recent White House Executive Order.2 The existence            in some commercial contexts.
of these mechanisms could allow for flexible and effi-           These mechanisms should primarily be used on the
cient international governance regimes for AI, allowing       specialized data center AI chips that are targeted by the
policymakers to think beyond the limitations of slow and      current AI chip export controls. However, some limited
complex structures such as the International Atomic           mechanisms on consumer GPUs may be useful if, in the
Energy Agency (IAEA).3                                        future, these devices are export-controlled.7
Much of the required functionality for on-chip                Existing technologies need to be hardened
governance is already widely deployed on                      before they can be relied upon in adversarial
various chips, including cutting-edge AI chips.               settings such as export control enforcement.
Chips sold by leading firms AMD, Apple, Intel, and            On-chip governance mechanisms are only useful insofar
NVIDIA have many of the features needed to enable the         as they reliably work even when adversaries are actively
policies described above. These features are used today       attempting to circumvent them.8 Commercial versions of
in a wide variety of applications. On the iPhone, on-chip     these technologies are not typically designed to defend
mechanisms ensure that unauthorized applications              against a well-resourced attacker with physical access
can’t be installed. Google uses on-chip mechanisms to         to the hardware. Investments in hardware and software
remotely verify that chips running in their data centers      security will be required for on-chip governance mecha-
have not been compromised. Many multiplayer video             nisms to function reliably in these kinds of environments.
games now work with a hardware device called a                   The specific defenses required to adequately secure
“Trusted Platform Module” to prevent in-game cheating.        on-chip governance mechanisms depend on the context
In the AI space, these features are increasingly used to      in which they are deployed. This report explores three
distribute training across different devices and users        contexts: minimally, covertly, and openly adversarial.
while preserving privacy of code and data.4
A staged approach to the development and
On-chip governance does not require secret                    rollout of on-chip governance for data center
monitoring of users or insecure “back doors”                  AI chips is possible.
on hardware. On-chip governance is better                     Intermediate stages of R&D could still be useful in pro-
implemented through privacy-preserving                        duction contexts. In the short term, firmware updates
“verification” and “operating licenses” for AI                could be deployed to exported AI chips implementing
chips used in data centers.                                   early versions of a hardware operating license linked to
“Verification” involves the user of a chip making claims      the terms of an export license. This would be useful as
that are verifiable by another party about what they are      an additional cautionary measure for already-planned AI
doing with the chip. For example, verifying the quantity      chip exports to high-diversion-risk geographies.
of computation or the dataset used in a particular               A promising and relatively feasible next step would be
training run.5 Secure on-chip verification of this kind is    to make devices “tamper-evident” (attempts to tamper
made possible by a “Trusted Execution Environment”            with the chips would leave indelible evidence). This
(TEE). Because of the TEE’s security properties, the          could be a sufficient level of security in cases where occa-
verifier can trust that information received from the TEE     sional physical inspections of the hardware are possible.
has not been “spoofed,” without the chip’s user needing          For subsequent generations of AI chips, hardware
to divulge sensitive data.6                                   security features could be further hardened, working
   “Operating licenses” provide an enforcement mech-          toward full “tamper-proofing” to make physical inspec-
anism. This is useful in cases where, for example, the        tions less necessary.
chip’s owner is found to have acquired the chip in
violation of an export control agreement, or if the chip’s
user refuses to participate in a legally required verifica-
tion process. Operating licenses would be best enabled
using a dedicated “security module” that links the func-
tioning of the chip to a periodically renewed license key
To motivate further investigation of on-chip gover-           Establish government coordination
nance, this report sketches an example architecture for
data center AI chips that could provide a flexible platform      Recommendation: The White House should issue an
for dynamically implementing different governance                executive order establishing a NIST-led interagency
mechanisms. The core of this proposal is a hardened              working group, focused on getting on-chip gover-
security module, included on all high-performance data           nance mechanisms built into all export-controlled data
center AI chips, that can ensure that the chip has valid,        center AI chips.
up-to-date firmware and software and, where applicable,
an up-to-date operating license. If these conditions are         Background: For on-chip governance to reach commer-
not met, it would block the chip from operating.                 cial scale, long-term collaboration between government
This valid, up-to-date firmware and software then             and industry will be required. For progress to be made
could help enforce limits on the uses of these chips and         quickly, an executive order could be an appropriate
offer sophisticated “remote attestation” capabilities            forcing function. The National Institute of Standards
    (remote authentication to securely verify desired prop-          and Technology (NIST) would make a suitable lead
erties of the chip and the software it is running). The          for this effort. Expertise and staff also should be drawn
security module could ensure that if firmware/software           from the Department of Energy, the Department of
vulnerabilities are found, users would have no choice but        Defense, the Department of Homeland Security, the
to update to patched versions where the vulnerability has        National Science Foundation, and the U.S. intelligence
been fixed. The security module also could be configured         community. The working group should also be informed
to require an up-to-date, chip-specific operating license.       by a technical panel drawn from industry and academia
Current AI chips already have some components of              to help direct technical standards and research.
this architecture, but not all. These gaps likely could
be closed with moderate development effort as exten-             Create commercial incentives
sions of functionality already in place. The primary
technical challenge will be implementing adequate                Recommendation: The Department of Commerce
hardware security, particularly for tamper-evidence and          (DoC) should incentivize U.S. chip designers to
tamper-proofing. This report estimates this could be             conduct necessary R&D using “advance export
achieved with as little as 18 months of involved technical       market commitments.”9
effort (and up to 4 years) from leading firms.
Because a small number of allied countries encompass          Background: Given that on-chip governance mecha-
the supply chain for the most advanced AI chips, only a          nisms need to be implemented on commercial chips,
small number of countries would need to coordinate to            much of the necessary R&D will need to happen in
ensure that all cutting-edge AI chips have these mech-           an industry setting. To incentivize this work, the DoC
anisms built in. On-chip mechanisms would need to be             should consider making commitments related to future
supported by a way to track the ownership of data center         access to export markets to U.S. chip firms, conditional
AI chips, and some form of inspections to ensure these           on firms implementing a specific set of security features
chips are not tampered with, where required.                     on controlled products. Such commitments would be
On-chip governance mechanisms present a prom-                 an effective way of incentivizing the necessary R&D
ising area for further research for computer engineers,          without spending public money, given the large amount
computer scientists, and policy researchers. This report         of lost revenue to chip firms caused by export restric-
offers the following recommendations to U.S. policy-             tions.10 Export market commitments could include
makers to move toward a world where all leading AI               not extending export controls to new jurisdictions,
chips are secure and governable.                                 relaxing the “presumption of denial” licensing policy
for chip exports to lower-risk customers in China, or
moving toward more surgical end-use or end-user-
based controls. The DoC should develop the required
feature sets by analyzing specific attacker threat
models in different export contexts, in coordination
with the U.S. Intelligence Community and Department
of Homeland Security.
Accelerate security R&D                                       Coordinate with allies
Recommendation: NIST should coordinate with                   Recommendation: The State and Commerce
industry and relevant government funding bodies to            Departments should coordinate with allies on policies
scope, fund, and support R&D that can be conducted            and standards for on-chip governance.
outside leading chip companies and integrated later.
Background: As with many other forms of technology
Background: While the large majority of R&D will need         governance, on-chip governance will be of limited
to be conducted by the firms building and selling AI          effectiveness without international buy-in. The State and
chips at scale, some work may be usefully conducted           Commerce Departments should include the potential
outside of these firms, especially technologies that would    role of on-chip governance mechanisms in diplomatic
benefit from being standardized across the industry.          discussions with countries that occupy important
NIST should coordinate with the Semiconductor                 positions in the supply chain for cutting-edge AI chips
Research Corporation, relevant Defense Advanced               (especially Taiwan, the Netherlands, South Korea, and
Research Projects Agency (DARPA) program managers,            Japan), including potential new multilateral control
and other relevant government funding bodies to scope         regimes.11 Looking beyond export control coordination,
and fund useful R&D to be performed by academic and/          using on-chip governance mechanisms to facilitate AI
or commercial partners. For example, work on special-         governance cooperation (e.g., international agreements
ized tamper-proof enclosures (physical housings for           on compute usage reporting) would benefit from close
chips that prevent the chip from being modified without       coordination with like-minded allies, such as the United
compromising its operation) for high-end chips could          Kingdom and the European Union.
be potentially outsourced to academic and commercial
hardware security labs. To support these projects, NIST       Encourage AI chip firms to move early
should create technical standards and reference imple-
mentations for on-chip governance mechanisms that are         Recommendation: Chip firms should be encouraged
designed for wide adoption by industry.                       to move early to build and harden the security features
required for on-chip governance.
Plan for a staged rollout
and fund extensive red-teaming                                Background: The United States has signaled interest
in on-chip governance in a recent request for comment
Recommendation: To ensure that on-chip governance             issued by the Department of Commerce.12 Chip suppliers
mechanisms are properly designed and safely intro-            that are more able to apply and build on existing tech-
duced, the DoC and Department of Homeland Security            nical efforts will have a head start on demonstrating and
(DHS) should establish flexible export licensing and red-     realizing compliance, with potential benefits in terms of
teaming programs.                                             access to markets that are the subject of export controls
or other relevant regulation.
Background: On-chip mechanisms will require substan-
tial testing before being relied upon in more adversarial     Developing and deploying the mechanisms described in
environments (e.g., exports of controlled chips to China).    this report will take time (months in the most optimistic
To facilitate a staged rollout approach where mechanisms      case, years in the most likely case). If the capabilities and
can be depended upon in successively more challenging         national security risks of AI systems continue to grow at
operating contexts, the DoC should create export licensing    the pace observed in 2022 and 2023, the need for highly
arrangements where licenses can be flexibly granted for       effective controls could become acute in several years.
different geographies based on the security features on the   This suggests that policymakers concerned about this
device to be exported. In tandem, the Cybersecurity and       issue should begin formulating policies and incentivizing
Infrastructure Security Agency within DHS should estab-       the development of appropriate technologies now. Once
lish red-teaming and bug bounty programs to help find and     the relevant security features have been mandated in the
patch any software and hardware security vulnerabilities.     most powerful AI chips, they need not be used imme-
A promising near-term starting point is setting up a public   diately: The mechanisms outlined in this report would
prize for finding vulnerabilities in hardware security        allow for rapid and flexible responses to new develop-
features on today’s AI chips.                                 ments and threats once installed.
Introduction                                                             tested a new high-yield thermonuclear weapon design
at Bikini Atoll in the Pacific Ocean. It remains the most
O
n February 25, 2022, Russian forces attacked                  powerful nuclear weapon ever detonated by the United
the Ukrainian town Melitopol and, after a week                States, around one thousand times more powerful than
of heavy fighting, it eventually was captured.                those used on Hiroshima and Nagasaki. The test (named
Thanks to its rich soil, the region has been an agricultural             “Castle Bravo”) caused nuclear fallout to spread over
hub for over 200 years, a fact that was not lost on the                  four thousand square miles, resulting in sometimes lethal
invaders. In the weeks that followed the invasion, locals                doses of radiation for people on neighboring islands and
noticed that grain was disappearing from their silos.                    nearby fishing vessels, and inciting a strong interna-
But it wasn’t just grain being stolen from the occupied                  tional reaction, including calls for a comprehensive test
town. Over the course of several weeks, combine har-                     ban.15 In March of 1960, the United Kingdom, the United
vesters (farm equipment used to harvest grain) began                     States, and the Soviet Union were negotiating the terms
to go missing. A review of security footage later would                  of such an agreement. These discussions led to the 1963
reveal the machinery being loaded onto military trucks,                  Partial Nuclear Test Ban Treaty, which 123 countries
conspicuously marked with white “Z”s.13 In all, around                   have since ratified. It was a partial ban rather than a com-
    $5 million worth of farm equipment was stolen. GPS                       prehensive one in part due to a key problem for verifying
tracking features on the harvesters painted a startling                  compliance: it was, at the time, impossible to reliably
picture: These stolen assets had embarked on a 700-mile                  remotely detect underground tests. Consequently, the
odyssey to Zakhan Yurt, a remote village in Chechnya.                    ban was limited to tests conducted in the atmosphere,
But when the invaders tried to use the stolen harvesters,                underwater, and in outer space. Two years later, signifi-
they realized they couldn’t turn them on. The harvesters                 cant progress had already been made towards solving the
had been disabled by the U.S. manufacturer, John Deere,                  problem of reliably detecting underground tests, using
who has revealed that though they rarely use it, they have               the idea of a network of seismometers (devices used to
the ability to remotely shut down any of their machines.14               measure seismic activity) combined with a new efficient
Tools built into sensitive technologies can enable                    algorithm for differentiating between nuclear tests and
policies not only for restriction, as in the previous story,             other seismic activity. But a treaty had already been
but also for verification. In 1954, the United States                    signed, and it wasn’t until many years later, in 1990, that
the United States and Soviet Union
ratified a treaty involving under-
ground tests: the “Threshold Test
Ban Treaty”, which prohibited all
nuclear tests exceeding 150 kilotons.
This treaty was enabled by mutual
agreement between the two coun-
tries on a specific technical protocol
for the verification of underground
tests based on the approach
described above. Of course, verifica-
tion is only one part of the rationale
behind arms control treaties, but
this story shows the role that ver-
ification technologies can play in
enabling international agreements
and governance structures that may
not otherwise be able to exist.
Both these stories highlight
some of the challenges with tech-
John Deere is one of the world’s largest exporters of farm equipment and spends around          nology-based solutions to policy
    $2 billion annually on research and development. This has led to a complex hardware and
software stack for their equipment, allowing remote control of newer vehicles. Here, Ukrainian  problems. The first is achieving
farmer Mykhailo Palahniuk points toward a John Deere harvester under repair, on his 6-hectare   sufficient reliability. Although the
farm where he grows crops of wheat, barley, and soy. (Scott Peterson/Getty Images)
combine harvesters were remotely
disabled, it’s likely that Russian troops eventually were
able to bypass the protection, provided it was worth the
time and money to do so. The second is timing. Though it
turned out to be possible to verify underground nuclear
tests, this development came too late to be truly useful
for nuclear nonproliferation.
This report considers the applicability of these kinds
of technological solutions to AI policy. What if policies
concerning AI chips, a crucial input for dual-use AI
systems, could be implemented directly on the chips
themselves? What if updates to export regulations could
be deployed through a simple software update? Such
“on-chip governance mechanisms” could help flexibly
address many of the national security issues posed by
future AI systems in a way that does not presuppose any
specific risks. However, this approach raises difficult
questions about how dangerous technologies should
be governed. This report lays out the policy objec-
tives that could be achieved with on-chip governance
mechanisms. It then examines the technical and social            The U.S. nuclear weapon test Castle Bravo had a yield 2.5 times
greater than predicted due to unforeseen reactions involving
challenges to their implementation. Finally, the report          lithium-7. (United States Department of Energy)
provides a set of recommendations for U.S. policymakers
to move toward a world where all leading AI chips are            capabilities of today’s most powerful systems suggest
secure and governable.                                           that their successors could be highly proficient within a
range of weaponizable domains, and could pose serious
The National Security Risks                                      risks if they fall into the hands of adversaries. GPT-4 has
Posed by Artificial Intelligence                                 nascent capabilities useful for designing, planning, and
The 2021 Final Report of the National Security                   executing complex scientific experiments, including
Commission on AI characterized AI as “the quint-                 synthesizing chemical weapons.22 Defense contractors
essential ‘dual-use’ technology.”17 In late 2023, this           have started offering decision-making systems powered
characterization appears increasingly apt. China has             by the current generation of broadly capable models,
been rolling out a nationwide AI-based system of mass            models whose foreign and open-source counterparts
surveillance, driven by advances in facial and voice rec-        are increasingly becoming available to the United States’
ognition technology.18 These tools also have been key to         adversaries.23 A broader set of worrying capabilities are
Beijing’s mass oppression and incarceration of Uyghurs           also being discovered. In early 2023, Anthropic, another
in Xinjiang.19 AI also plays a key role in China’s military      leading U.S. lab, contracted top biosecurity experts to
ambitions, with the goal of progressively integrating AI         red-team and evaluate its model’s ability to help with the
into its joint forces over the coming years.20                   design and acquisition of biological weapons. They found
Looking closer to home, earlier this year, OpenAI, a          that “a straightforward extrapolation of today’s systems
top U.S. AI lab, released “GPT-4,” marking the birth of          to those we expect to see in 2-3 years suggests a substan-
a new generation of broadly capable AI models that are           tial risk that AI systems . . . will greatly widen the range
increasingly unlocking groundbreaking applications in            of actors with the technical capability to conduct a large-
both civilian and defense contexts.21 The demonstrated           scale biological attack.”24 Other domains where evidence
APPLICATIONS BEYOND AI
This report uses the term “AI chips,” and primarily highlights the benefits of on-chip mechanisms for addressing
AI-related national security concerns (specifically compute-intensive broadly capable systems). But the advanced
chips referenced also play an important role in non-AI applications, such as design and testing for aerospace systems
and nuclear weapons.16 The measures discussed in this report are highly relevant for these cases, and in general, for
wherever advanced chips are used in national security–relevant applications.
of national security risks are emerging include cyber            set of controls, exports of leading AI chips are pro-
offensive operations, large-scale deception or persua-           hibited to any customer in China. The ban applies not
sion operations, and “agentized” AI systems evading              just to U.S.-made chips, but also to any chip produced
human control.25                                                 using U.S.-origin technology, software, or equipment.
Broadly capable models at the frontier of R&D also            Understandably, this has prompted calls for restraint
have properties that will pose a thorny challenge for            from the U.S. semiconductor industry, which fears
governance: These models develop new capabilities in             not just loss of market access to China, but also the
an unpredictable way, are hard to make reliably safe, and        “de-Americanization” of supply chains more broadly.33
are likely to proliferate rapidly to illicit actors.26 Systems   Lastly, these rules have workarounds. Cloud computing
based on these models could have destabilizing effects           makes it possible for cloud service providers in other
on international relations and lower the barrier for non-        countries to provide export-controlled AI chips remotely
state actors to cause harm.27                                    to any customer.34 Countries and other actors can also
stockpile chips today to guard against the possibility of
Compute Governance:                                              new or expanded export controls in the future, pushing
Opportunities and Challenges                                     some of the effectiveness of export controls to the point
In October 2022, prior to many of the AI advances pre-           at which stockpiled chips are less relevant for training
viously described, the U.S. Department of Commerce               leading AI models.
imposed aggressive export controls to limit China’s
access to high-end AI chips. The new regulations cited           On-Chip Governance Mechanisms:
concerns that China could use these chips to produce             A Quick Introduction
advanced military systems, including weapons of mass             The challenges inherent to the current approach for
destruction, and to enhance the speed and accuracy of            governing compute obscure the potential harmony that
its military operations.28 This move is an example of            exists between the interests of U.S. policymakers and
    “compute governance”: placing guardrails on how and              U.S. chipmakers. Both seek to promote U.S. technological
by whom the resources necessary to produce AI compu-             competitiveness, and neither wants to see dangerous
tation (i.e., specialized computer chips) are used. Such         and destabilizing technologies in the hands of unlawful
measures can be effective in the context of AI because of        actors or rogue states. The problems described in the
the close relationship between the amount of compute/            previous section arise in large part due to the limited
chips used to train a particular AI model and the capabil-       policy solution space allowed by the technology deployed
ities the model possesses.29 Compared to other inputs to         on today’s generation of AI chips, rather than the
AI, such as data and algorithms, chips have a unique set         inherent differences in goals between these two groups.
of governance-relevant properties. AI chips are physical         For example, blanket export restrictions on AI chips
goods that are more quantifiable, more difficult to copy,        going to China were seen as necessary in part because
and have a highly concentrated supply chain; all attri-          there does not exist a widely deployed technical solution
butes that make it easier to define and enforce policies         for preventing an AI chip from being used by an unau-
that control access and govern their usage.30                    thorized actor once it has been shipped overseas. If such
But in some crucial ways, compute governance                  technology was deployed and made sufficiently reliable,
measures that resemble unilaterally imposed rules on             the need for sweeping, top-down export restrictions
who can export chips to whom are a blunt and ineffective         would be reduced.
tool. First, enforcement of these rules is hard. China’s            This report introduces the concept of “on-chip gover-
extensive civil-military fusion and use of shell entities        nance mechanisms”: physical mechanisms implemented
to evade export controls have historically compromised           on AI chips and related hardware to allow for control
the effectiveness of export controls, particularly given         of how and by whom these devices can be used. These
the limited resources and outdated technology avail-             actions will be appropriate only in certain contexts, such
able to the Bureau of Industry and Security (the office          as export control enforcement for advanced AI chips
tasked with export control enforcement for AI chips).31          used in data centers.35 Implementing on-chip gover-
AI chip smuggling is already happening on a small                nance on such chips could be valuable by virtue of the
scale today and is likely to be an increasing concern.32         fact that the most broadly capable dual-use AI systems
Second, to have a chance of being effective, such rules          also require the most specialized chips to develop within
need to be far-reaching, which has consequences for              a reasonable time frame and budget.36 These mecha-
the competitiveness of U.S. firms. Under the current             nisms provide a uniquely flexible governance tool. If a
basic “security module” is introduced as a standard for    to be regulated while helping protect the intellectual
powerful new AI chips, new policies could be quickly       property of developers.40 For example, a recent White
and securely deployed as software and firmware updates.    House executive order calls for AI developers and
This possibility is discussed in Section 2.                cloud service providers to report on compute usage and
On-chip mechanisms for commercial uses already          training data above certain thresholds.41 On-chip mech-
are common on consumer devices. For example, the           anisms could allow these firms to quickly and securely
iPhone has hardware restrictions that enable Apple to      report this information, without needing to directly
exercise editorial control over which specific apps can be reveal sensitive code or data. While these use cases are
installed. Google uses a technique called “remote attes-   interesting, the more promising governance application
tation” to ensure the security and integrity of devices in for on-chip mechanisms is international governance,
their data centers.37 Some video game companies use a      where regulations are otherwise difficult to monitor and
similar method                                                                                      enforce. In the
to interface              Realizing the potential of on-chip governance near term, this
with a dedicated          will require substantial investments in better means export
secure processor                                                                                    control enforce-
on users’ com-
hardware security and a strong partnership                                ment, but in the
puters to ensure          between the U.S. government and leading                                   longer term, this
they are not              AI chipmakers.                                                            could include
using cheating                                                                                      international
software in multiplayer video games. IBM and Intel use
agreements. This report focuses on export controls as
an approach known as “hardware licensing” to remotely      a promising early application in Section 3 and associated
restrict/unlock the performance of data center chips       challenges in Section 5.
based on a subscription model. Using similar technology       This may sound like an ambitious proposal, and it
to these examples, on-chip mechanisms could be imple-      is. However, new governance tools almost certainly
mented on data center AI chips to directly govern the      will be needed to meet the national security challenges
training and deployment of broadly capable AI systems      presented by current and future rapid advances in AI.
that pose meaningful national security risks.39 Section 2  As AI systems grow more powerful, the need to effec-
provides an overview of what this might concretely look    tively govern them will grow more urgent. A flexible
like, and Section 4 dives further into the required tech-  governance framework built on a platform of on-chip
nical underpinnings.                                       mechanisms would allow regulations to adapt to changes
In the domestic context, on-chip governance mech-       in the technology that cannot yet be foreseen. Because
anisms could enable the development of AI systems          developing these mechanisms will take time, work to
DEFINITIONS
This report defines on-chip governance mechanisms as technical mechanisms that rely on hardware-level security
features to:
   ¡ Enable a controller to restrict what can be done with a hardware device; and/or
   ¡ Enable a verifier to verify claims about the state or use of the hardware, based on having a high level of trust about
the integrity of the security mechanisms.
The proximate controller almost always would be the hardware vendor, but the de facto controller could be, for example,
a regulator who mandates that particularly powerful hardware should not be made available to unlawful actors.44 In a
future, more comprehensive AI governance regime, a regulator could be both a verifier and a controller: For example,
they could require AI developers to verifiably report that they are going about their development safely, and impose
restrictions on developers who cannot prove this.45
This report also uses the terms “compute user” and “compute operator.” The user is the entity that uses chips in an
operational capacity (e.g., a company that trains AI models). The operator is the entity that owns, physically controls,
and manages the computing hardware (e.g., a cloud service provider). In some cases, the same entity will be both the
compute user and the compute operator. In other cases, these entities will be distinct.46 For specific definitions of other
AI compute-related terms used in this report, see Appendix A.
design and implement them needs to commence well                 What Would Effective On-Chip
before they are needed. Due to the concentration of              Governance Look Like?
the semiconductor supply chain, a coalition of only
a few partner countries, or perhaps even the United              This section briefly lays out a sketch of a concrete
States alone, could be enough to ensure that on-chip             vision for the set of on-chip mechanisms and associated
governance mechanisms were introduced on almost all              measures that would allow for flexible compute gover-
leading AI chips.43                                              nance. The core of this proposal is a hardened “security
The goal of this report is to introduce the concept of        module,” included on all high-performance data center
on-chip mechanisms as a tool for governance and review           AI chips, that can ensure that the chip has valid, up-to-
the underlying hardware security features that could             date firmware and software and, where applicable, an
make them possible. It does not attempt to analyze the           up-to-date operating license. If these conditions were
implementation of these mechanisms in any specific use           not met, the security module would prevent the chip
cases with rigorous technical detail, nor try to exhaus-         from operating.
tively map possible use cases. Detailed analysis of the             This valid, up-to-date firmware and software then
broader impacts of specific mechanisms used for specific         could help enforce limits on the uses of these chips, and
purposes also is left for future work.                           offer sophisticated “remote attestation” capabilities, or,
in less technical terms, the ability for the chip to send
Realizing the potential of on-                               trusted information about the chip and its usage to a
third-party verifier. The security module also would
chip governance will require                                 ensure that if vulnerabilities are found in firmware and
substantial investments in                                   software, users would have no choice but to update
better hardware security and a                               to patched versions where the vulnerability has been
strong partnership between the                               fixed. Chip-specific operating licenses would allow
export-controlled chips to be configured such that they
U.S. government and leading                                  could be remotely disabled by the manufacturer by
AI chipmakers.                                               ceasing to issue licenses for that chip. This would allow
export controls to be enforced remotely if the terms of an
Realizing the potential of on-chip governance will            export license had been violated. Chips also would have
require substantial investments in better hardware               support for “trusted execution environments” that could,
security and a strong partnership between the U.S. gov-          together with remote attestation capabilities, allow
ernment and leading AI chipmakers. It also will require          the chips to be used to make a wide range of “verifiable
a thoughtful development approach that acknowledges              claims,” such as the amount of compute used to train an
the privacy and free speech implications of making AI            AI model or other properties of the training process.
chips more controllable by regulators. Effective on-chip            Implementing these features on AI chips provides
governance is best implemented through enabling priva-           a platform for adaptive governance. These features
cy-preserving “verifiable claims” and operating licenses         would allow for a wide range of policies (for example, a
for chips that are used almost exclusively in large data         training compute reporting requirement above a certain
centers, and will not require secret monitoring of users         threshold, as called for by the recent White House
or insecure “back doors.” In fact, related mechanisms are        executive order) to be implemented and updated directly
widely deployed already on various chips, including cut-         on the chip by simply deploying a firmware or software
ting-edge AI chips, without compromising users’ privacy          update.47 Many of the required security features are
or security.                                                     already common on CPUs and are being increasingly
While the future evolution of risks from AI and               introduced on GPUs, such as NVIDIA’s new H100.48
advanced computing cannot be predicted with certainty,           These likely could be implemented at an acceptable cost
given the potential stakes, and the lead times involved, it      as an extension of existing standards for secure boot and
is time to lay the groundwork to expand the range of AI          remote attestation features.
governance options available to the United States over              These technical features ideally would be supported by
the coming years.                                                robust supply chain tracking and “Know Your Customer”
policies for AI chip exports/sales, which would allow the
controller to know which chips are being used by which
actors. This system of supply chain tracking also could
include periodic monitoring and inspections to ensure                 In practice, restriction and verification could be used
that any novel attempts to physically tamper with chips            to enable the following policy measures:
can be caught.
With this overall sketch as a framework, the next                ¡ Operating licenses: Using hardware-enforced
section describes in more detail the specific policies that          licenses to deny access to unauthorized users, (e.g.,
these technical features could unlock.                               for export control enforcement).
¡ Location verification: Verifying the location of chips,
Policies that On-Chip Governance                                     (e.g., to assist with export control enforcement).
Mechanisms Could Enable
¡ Usage verification: Verifying how chips are being
At a high level, on-chip governance mechanisms could                 used, (e.g., to enforce an international agreement on
allow a regulator to take the following actions:                     tracking and reporting compute usage).52
1. Restriction: Restricting access to, or “throttling”            ¡ Usage limitations: Limiting certain chip use cases,
    (reducing) the performance of a chip. Such measures              (e.g., to restrict exported chips from being used to
also could include preventing the chip from being                build large AI clusters capable of training frontier
used as part of a large cluster/supercomputer.                   models).53
2. Verification: Requiring the chip user to securely
The rest of this section will discuss each of these
verify how they are using the chip (e.g., which
in more detail.
specific code or data is being used in an AI
training run).
Operating Licenses
Details on the technical underpinnings of these capabil-           to Prevent Unauthorized Use
ities are included in Section 5, and Section 6 discusses           On-chip mechanisms could be used to implement a
their viability in adversarial contexts.                           chip-specific operating license that requires periodic
These actions will be appropriate only in certain               renewal, similar to a software subscription model.
contexts. Restriction mechanisms are appropriate in the            Operating licenses could control whether the chip
adversarial context of export control enforcement, on              works at all, limit specific features, or specify more
the specialized data center AI chips that are targeted by          complex restrictions. Importantly, on-chip mechanisms
current AI chip export controls. In the future, as chips           could implement a time-based license, where a chip
grow more powerful, it may become necessary to place               disables itself if it does not receive a renewed license.
some export restrictions on consumer-grade GPUs.51                 This approach prevents reliance on the chip needing
These chips could then potentially be equipped with                to receive an active shutdown command, which likely
some limited mechanisms to deter smuggling and misuse.             could be blocked by an uncooperative compute operator.
VERIFICATION VS. MONITORING
This report uses the term “verification” to distinguish it from the idea of activity monitoring. “Monitoring” implies that
some third party is able to track how a chip is being used (e.g., specific code or data loaded on the chip) through some
process of unilateral surveillance. Such monitoring is likely neither technically feasible nor desirable from a user privacy
and chip security standpoint. Building “back doors” into AI hardware is technically possible but would not result in chips
that consumers will want to buy, and would introduce serious security vulnerabilities.49
   “Verification” refers to a process where the user of a chip instead can remotely attest to a third-party verifier what
they are doing with a processor (e.g., how much training compute is being used, or whether a particular dataset was
used), using a “Trusted Execution Environment” (TEE). Because of the TEE’s security properties, the verifier can trust
that information received from the TEE has not been spoofed, so long as they have confidence that hardware security
features on the chip have not been compromised. Instead of unilateral surveillance, this should be thought of as a
collaboration between a verifier and the chip owner. This collaboration also could be made fully privacy-preserving
   (i.e., not revealing sensitive code or data) using techniques from multi-party and confidential computing.50 If a chip
owner refuses to engage in such a collaboration, restriction mechanisms could allow the verifier (e.g., a regulator or
device manufacturer with particular terms of use) to prevent them from continuing to use the chip.
Hardware-based operating licenses already are used           control enforcement. How would this work? Due to the
in commercial contexts; two U.S. companies, Intel and            hard limit of the speed of light and the lower bound on
IBM, run hardware licensing programs under the names             latency from existing communications infrastructure,
Intel On Demand and Capacity on Demand respectively.54           how quickly a device responds can be used to establish an
In these cases, operating licenses are used to restrict or       upper bound on the distance between the device and the
unlock existing features on chips, depending on whether          source of the query. With secure on-chip mechanisms
a customer has paid for them.                                    and multiple trusted “landmark” servers, it becomes
This capability would be particularly useful for export      possible to determine the approximate location of a chip
control enforcement—for example, if a chip were sold             by comparing these upper bounds, as depicted in the
to an entity that subsequently was found to have previ-          diagram below.
ously unknown ties to the People’s Liberation Army.55 In            Due to the substantial difference between the speed of
practice, this might take the form of a Bureau of Industry       light and the latency of ordinary internet infrastructure,
and Security statement that export licenses will be              the chips would need to be within hundreds of kilo-
granted for controlled chips if the chips have a security        meters of the landmarks, and less than 100 km in areas
module that could be used to disable the chips remotely          that are near the borders of areas where chips are not
if there is ever a reason to believe the chips have been         allowed to operate. This likely would require hundreds
utilized by end users and/or for end uses that constitute a      of trusted landmarks globally, but these servers would
breach of the export license. This could include:                be quite cheap to set up. Queries would take the form
of cryptographic challenges issued against the chip’s
1. Cases where there is a reason to believe that chips          private key, to ensure that the responder is indeed the
have been, or are at risk of being, re-exported or           chip in question.
transferred in violation of their original export               This kind of location verification mechanism would
license.                                                     be particularly valuable for deterring chip smuggling.
Of course, the response from a device always could be
2. Cases where there is reason to believe that remote
delayed to reduce the precision of the location estimate.
access to the chips has been given to sanctioned
Collaboration on the part of the compute operator could
entities, such as those connected to the Chinese
be incentivized by enacting a policy of revoking operating
military (if controls on AI chips offered as cloud
licenses if the measurement is so imprecise that it cannot
services are implemented).
3. Cases where the owner of the chips is not collabo-
rating with authorities to prove that neither of the
two violations mentioned above is occurring.
While an operating license mechanism could require
some communication between the chip and the man-
ufacturer, the core functionality would not require an
open internet connection. The license could be conveyed
to and from the chips by whatever means are most
appropriate, whether that be an internet connection, or
carefully controlled physical media going in and out of an
air-gapped data center.
More speculatively, it may be possible to use operating
licenses to make consumer GPUs less useful for AI appli-
cations, by using a license to unlock some of the most
AI-relevant features and capabilities of the GPU. Such           This diagram shows how a trusted server in Paris, France, could
mechanisms are not currently needed, but may become              verify that a chip is within the blue circle, and thus not in any country
to which chip exports are restricted, by verifying that the chip can
useful in the future.                                            respond in less than 9 ms (using the upper bound of the speed of
light). The smaller red circle shows an approximate range from which
chips could attain a 9 ms latency to the server, using ordinary internet
Location Verification                                            infrastructure. 56 This shows how landmark servers placed every few
Combining trusted location verification with oper-               hundred kilometers could be used to establish sufficient coverage to
ating licenses could allow for rapid and effective export        verify that chips have not been re-exported illegally. 57
verify that the chip is not in a country in which it should    train an AI system or other properties of the training
not be. Alternatively, the chip itself could query a set of    process. For example, one recent proposal describes how
trusted servers, and the operating license could specify       “hashed” (i.e., privacy-preserving) parts of an AI system
that the chip should lock down if it cannot establish that     could be stored, and later used to prove how much
it is in an allowed region. This approach also could allow     compute was used to train it.62
a chip to establish its own location without the landmark         Many of the security features necessary for verifiable
servers being able to determine the chip’s location, which     claims are already available on high-end server CPUs,
could be desirable in some cases, to protect user privacy.     as well as NVIDIA’s flagship H100 GPU. In recent years,
This kind of “region-lock” mechanism could potentially         this has been marketed as “confidential computing” and
also be useful on consumer GPUs in the future, if the          promoted by the Confidential Computing Consortium, of
smuggling of such chips becomes a serious concern.             which NVIDIA is a member.63
Usage Verification                                           Usage Limitations
Continued progress in AI may create and exacerbate sce-      On-chip mechanisms could be used to limit the possible
narios that resemble a “security dilemma.”58 For example,    uses of chips in various ways. The most relevant to this
if one country were unsure about a rival’s intentions or     report are limiting AI chip usage in large clusters/super-
activities related to developing AI-powered military         computers, limiting sensitive data access to support
capabilities, it may be rational for that country to develop privacy and information security, and limiting chips to
or accelerate the development of its own capabilities.       only running approved code or models. Each of these
Uncertainty about the specific capabilities of rivals, how   applications is discussed below.
AI might change the shape of warfare, and exactly how
powerful future AI systems might be could all exacerbate     LIMITING AI CHIP USAGE IN LARGE CLUSTERS/
this dynamic. This could lead to incentives to prioritize    SUPERCOMPUTERS
dangerous capabilities research at the expense of safety     In the October 2023 revisions to AI chip export controls,
research, increasing the chance of accidents that could      BIS requested public proposals for “technical solutions
cause harm to all actors.59 Recent trends in military        that limit [AI chips] from being used in conjunction with
adoption of AI technology suggest these dynamics are at      large numbers of other such items in ways that enable
risk of emerging between Washington and Beijing.      60
training large dual-use AI foundation models with
As with most security dilemmas, a promising move is      capabilities of concern.”64 If this kind of usage were pre-
to reduce mutual uncertainty about how and whether           vented, chips could be safely exported for end uses that
potentially dangerous systems are being developed by         only require a smaller number of chips.
any actor. Just as monitoring and verification technolo-        As part of the request, BIS mentions an example mech-
gies have been used to support international agreements      anism, where the various chips that make up a single
and mutual trust in the nuclear domain, on-chip mech-        system, such as a server or a “pod” of servers, are limited
anisms could support similar moves in the AI domain.61       to only operating with the original set of chips, and the
Two key points of                                                                                whole system is limited
difference between           Continued progress in AI may create                                 to only communicate
these domains are            and exacerbate scenarios that resemble at less than 1 GB/s with
that the number              a ‘security dilemma.’                                               the outside world. This
of different actors                                                                              kind of restriction could
involved in developing new technologies is likely to be      be based on “roots of trust” in each of the chips in the
greater in the AI domain, and those actors are much          system, that allow all of the chips to attest to each other’s
more likely to be commercial actors.                         identity. Chips would then refuse to work with any chip
On-chip mechanisms could allow compute users             they do not recognize, which would prevent the end
(commercial or otherwise) to make verifiable claims          user from introducing additional network connections
(information that is trustworthy through hardware-level      that would allow the system to be integrated as part of
integrity guarantees) about the state of a chip and how      a larger cluster.
it is being used. These features could be extended to the       A mechanism like this would require a very high
level of an entire cluster and enable compute users to       degree of interoperability between all of the chips in the
verify key information relevant to AI capabilities and       system, including, for example, the CPU and the network
risks, such as the amount of training compute used to        interface controller. Existing chips could not do this, but
fortunately, the data center industry already is working          Technical Underpinnings
to develop standards and protocols to allow heteroge-
neous devices found in data centers to attest their identity      This section begins by explaining the basic operating
and integrity to each other using such mechanisms.65              principles of the core hardware security features—secure
However, this level of interoperability could be at least 2       boot and remote attestation—that most restriction and
years away, based on an interview with an industry expert.        verification mechanisms are based on. It then explains
Sophisticated on-chip attestation mechanisms                   how these features could be applied in security modules
should be complemented by lower-tech physical pro-                and trusted execution environments to enable on-chip
tections to make it more difficult to modify the system           governance. Each of these key components is shown in
without damaging it, and leaving evidence of modifica-            Diagram A on the following page.
tion. This could involve techniques such as “potting”:
covering the circuit board in difficult-to-remove
material. See Appendix B for a dedicated discussion of               CRYPTOGRAPHIC SIGNATURES
anti-tampering technologies.                                         On-chip mechanisms rely heavily on cryptographic
In the future, this kind of attestation mechanism could           signatures (also known as digital signatures), a way
be extended to implement more flexible restrictions                  of verifying the authenticity of a file or message using
public key cryptography.
on the use and configuration of computing clusters. In
addition to identifying each other, AI chips could share             Public key cryptography is a system that uses two
different mathematically related codes, called keys, to
relevant information to detect if they are part of a very
encrypt and decrypt data. One key is public, while the
large computing workload (e.g., large-scale AI training).            other key is private and must be kept protected.
For example, each AI chip in a server could track how                A cryptographic signature is a sequence of bits that
much data is moving in and out of itself. This information           can be used to verify the authenticity of a file or
then could be used to estimate the total amount of data              message. It is created using the file and a private code
being moved to and from the whole server, and therefore              (referred to as a “private key”). Recipients of the file
then can use a corresponding “public key” to verify
detect whether the chips are being used within a large,              that the signature is valid and that the file comes
tightly connected cluster of multiple servers. However,              from the owner of the private key and has not been
this kind of system could potentially be broken by com-              modified in transit.
promising a small number of the least secure devices
involved, making it relatively fragile.
Secure Boot
LIMITING SENSITIVE DATA ACCESS                                    “Secure boot” is a hardware feature that aims to prevent
On-chip mechanisms could support information security             unauthorized firmware, operating systems, or other
and privacy practices. For example, when an AI system is          software from running on a device.67 When a chip is
deployed, on-chip mechanisms could be used to ensure a            turned on (booted), the part of the chip that is respon-
user’s data is processed without either the AI developer or       sible for loading the initial firmware code onto the chip
the user being able to access the other party’s intellectual      checks whether the code has been cryptographically
property (data or model weights). Beyond their com-               signed by the chip’s manufacturer, and refuses to boot if
mercial utility, such features may become increasingly            not. This ensures that the chip will run only manufactur-
important as AI systems develop further capabilities in           er-approved firmware. This typically works as follows:
domains with high potential for misuse, such as biology.66
1. The manufacturer generates a pair of keys: a public
LIMITING AI CHIPS TO ONLY RUNNING                                     key and a private key
APPROVED CODE OR MODELS
2. The manufacturer stores the public key in read-only
On-chip mechanisms could be used to ensure that only
memory on the device
approved code and/or AI models can be run on the pro-
cessor. This could allow a subset of chips intended for            3. The manufacturer signs the firmware with the
specific uses (e.g., those for use in self-driving cars), to be       private key, creating a signature for it
configured to only run specific, trusted models. This could
allow some kinds of misuse to be prevented without much            4. The manufacturer sends the firmware and the signa-
active oversight of the chips.                                        ture to the device. The device uses the public key to
verify that the signature matches the firmware.
DIAGRAM A: AN EXAMPLE ARCHITECTURE FOR ON-CHIP GOVERNANCE
SECURITY FEATURE          GOVERNANCE MECHANISM      POLICY ENABLED BY
ENABLED BY MODULE           ENABLED BY SECURITY   GOVERNANCE MECHANISMS
Device                                                                                             FEATURES
Private key handling          Hardware operating     Reliable end-use/
Security                                                               license with remote    end-user focused
module                                   Secure boot
authorization          chip export control
Remote attestation                                   enforcement
Secure firmware updates
Secure verification    Regulation or
of how the chip is     agreements
Trusted                 Data/code privacy             being used             requiring the
execution               protection                                           reporting of
environment                                                                  large AI training runs
Data/code attestation
Other novel AI
policies requiring
trust and assurance
Physical
hardware                                                    Application
module                                                      processor
Logical diagram
    (components not to scale)
A logical diagram of the governance mechanisms proposed in this report, and the physical hardware modules and security features that could
enable them.
DIAGRAM B: HOW DOES REMOTE ATTESTATION WORK?
Attester                                                     Verifier
A device-specific public and                    Device                                                       04 Evidence
01     private key pair are created on the
device, ideally using a dedicated
security module. The public key is                             Security
shared externally.                                             module            01
Public key                              Public key
Private key                                                    Used to
Measurements (e.g. the specific
02     firmware loaded onto the device)
validate
Signature of                              Signature of          signature
are collected, ideally using a TEE.                                 03 measurements                                measurements
Using a TEE means measurements
are only observable and shareable
by the attester.
Used to
The security module uses the                                                                                                             authenticate
03     private key to create a “signature”                                                                                                      measurements
Application
of measurements taken from the                           processor
device. This will be used to prove
that the measurements came from                                TEE             02                                  Measurements
the device.                                                          Measurements
Using the evidence provided by
04     the attester, the verifier can now
validate that the measurements
are genuine.
A simple diagram of an example remote attestation process, showing the flow of keys, information, and signatures. The “measurements” here
could be, for example, information about what code has been loaded onto the chip.
Secure boot does not require the device to have any              ¡ General oversight of the behavior of the chip
secret information, such as a private key. It only needs to
protect the public key from being overwritten. Remote            ¡ Attesting to device identity.
attestation, on the other hand, requires that chips be able
to sign outputs so that they can be verified to have come        To implement an operating license (see Section 3), a
from that chip. This means that the chip itself needs            security module would need to have the ability to limit
to hold its own private key and prevent anyone from              or disable a chip’s operations if the chip does not receive
reading it; otherwise, whoever reads the key can forge           a renewed license within a particular time window. The
attestations. Remote attestation is discussed in more            format of the license could be a short piece of text, cryp-
detail next.                                                     tographically signed by the compute vendor. The text
should include the identifier of the chip in question and
Remote Attestation                                               information about the ways in which it is authorized
The same functionality that is used to check the                 to operate, and for how long. The firmware running
integrity of the configuration and firmware of a chip            on the security module would interpret and enforce
as part of secure boot can be extended to allow the              this license. To support this functionality, the security
hardware to securely remotely attest to (i.e., make              module would need to have access to an immutable ID
claims about - the state of the system.68 This is known          corresponding to the chip it is responsible for.
as “remote attestation.” In a remote attestation proce-             With a timed license expiry period (e.g., weekly or
dure, the chip generates a signature for the currently           monthly), chip vendors could disable chips without
loaded firmware (and other measurements about the                any active intervention being required. The authors
chip’s state) using its own private key, and sends that          expect that a timed license is the only way to implement
signature to a verifier (e.g., the manufacturer). The            a robust mechanism for remotely disabling chips: if
verifier can then use the signature to ensure that the chip      the mechanism relied on a shutdown command being
is running approved firmware or has a valid “operating           actively delivered to the chip, the command almost
license”. This overall process is depicted in Diagram B          always could be blocked from reaching the chip by the
on the previous page. Remote attestation capabilities            compute operator.
make it possible for a remote party to have some degree             Another technical requirement for properly imple-
of control over how a chip is being used, particularly           menting a hardware operating license is a secure timer.
in combination with “trusted execution environ-                  Accurate, hack-proof, and tamper-proof tracking
ments” (page 14). Such features could be especially              of time generally is considered very difficult.69 The
useful in the export control context, where an exporter          main reason for this is that, currently, it is within the
could retain the ability to remotely restrict access to a        capabilities of many actors to compromise timers by
chip if an export control violation has been detected            manipulating the power supply to the chip, and thus
via remote attestation.                                          manipulating the execution speed of instructions.70
However, for the purposes of controlling access to or
Security Modules                                                 usage of AI compute, the primary concern is with the
To implement techniques such as secure boot, many                amount of computation done since authorization was
chips today have dedicated security modules, including           received, rather than the exact amount of time.71 This
a dedicated processor, that are responsible for handling         can be tracked much more robustly by simply counting
private keys and performing other security-related               clock cycles.72
functions. For the purposes of on-chip governance mech-             It also could be possible to achieve a usable approx-
anisms such as operating licenses, a security module             imation of time if the relevant parts of the chip were
would need to perform responsibilities such as:                  continuously powered. This could be achieved with an
added battery that could continue to power the relevant
     ¡ Secure boot, including measuring, enforcing, and               part of the chip even when the rest of the system is
attesting to firmware integrity                                powered off.73 It also might be possible to require the
surrounding system to provide continuous low levels of
     ¡ Enabling secure remote firmware updates
power to the chip by designing the timer to “max out”
     ¡ Handling private keys and cryptographic operations to          if power is lost, thus requiring re-authorization in the
support verifiable claims                                      event of a loss of power.
Trusted Execution Environments                              example, the amount of compute, data, or training
Trusted Execution Environments (TEEs) are isolated          process used.75 In this proposal, weights on a chip would
environments created within a processor that protect        be hashed and signed at random times during training,
the code and data running inside them from being            and these hashes would be logged.76 The logged hashes
accessed or modified by other parts of the system. The      could be used later to prove which chips were used to
key difference between security modules and TEEs is         train a given model, and to verify the provenance of a
that TEEs create a protected environment on the main        model through the provision and replication77 of training
processor cores, whereas a security module is a separate    transcripts from the organization that did the training.78
lower-performance processor specialized for security-re-
lated tasks. While security modules can be sufficient for   When Should a Security Module vs. a Trusted
protecting highly sensitive information, TEEs provide an    Execution Environment Be Used?
additional layer of protection around the primary com-      Security modules use separate dedicated processors for
putational work performed by the chip.                      handling security-critical operations like cryptography
TEEs are typically used to protect data inside the envi- and enforcing policies. TEEs are isolated environ-
ronment from spying or interference by other parts of       ments created within the main processor(s) of a chip
the system, such as malware, other users, or the platform   to protect code and data from being accessed by other
software provided by a cloud provider. In the case of       software on the system.
on-chip governance mechanisms, TEEs can be used to             A security module could be much simpler than its
enable a chip to remotely attest to the state of the TEE    associated AI chip, and thus much more secure. If the
and the code running inside the TEE, with these claims      interface between the security module and the user-ac-
being verifiable by third parties.                          cessible parts of the system can be kept very simple, it
This can enable certain types of privacy-preserving      is much more feasible to ensure it does not have major
collaboration using a technique known as multi-party        vulnerabilities that could be exploited to gain access to
computing. For example, one party could set up a TEE        the security module from the main processor.
on a chip and attest to another party about the specific       Trusted execution environments, on the other hand,
code that is loaded in the TEE. The other party could       run on the main processor(s) themselves. This com-
then send encrypted                                                                       plexity has often led to
data to the TEE, which                                                                    TEEs being vulnerable to
is processed by the code,          Many chips today have dedicated side-channel attacks that
and the results shared,            security modules, including a                          exploit shared resources
without the original               dedicated processor, that are                          like caches.79 A separate
party ever having access                                                                  security module reduces
to the unencrypted
responsible for handling private                       this risk given that user
data.74 This approach              keys and performing other                              code is not allowed to run
conceivably could be               security-related functions.                            on it. However, TEEs are
used by a third-party                                                                     necessary to enable remote
evaluator to run tests on an AI model without ever having   attestation of code (and data) running on chips. As
direct access to the unencrypted weights.                   such, this report suggests that security modules should
TEEs also might be useful for implementing priva-        be used in on-chip governance mechanisms where
cy-preserving logging of information during training.       possible, such as for requiring a valid operating license,
This would allow for retrospective inspections of the       and TEEs should be used otherwise only where neces-
training process. A recent paper proposes a protocol for    sary, such as for enabling verifiable claims about training
verifying adherence to rules related to AI training—for     compute usage.
Challenges for Implementation                                     to implement on AI chips.84 Given that NVIDIA chips
are by far the most capable and popular for training
Many of the required features for on-chip governance              cutting-edge models, it would be valuable to build on
mechanisms already are present on commercial devices.             or refine their existing security features into an initial
Apple’s iPhone is one of the most well-realized imple-            implementation of on-chip governance mechanisms.85
mentations. The secure boot functionality of an iPhone               More challenging will be ensuring the integrity of
aims to ensure that only legitimate firmware and legiti-          these mechanisms in the face of efforts by determined
mate versions of the iOS operating system can be booted.          and well-resourced adversaries. In real-world applica-
Because only legitimate versions of iOS can be booted,            tions, the security features and mechanisms described
Apple can tightly control the apps that can be run. This          in the previous section would be exposed to adversarial
functionality is enabled in part by the Apple Secure              parties attempting to compromise them in various
Enclave Processor, a security module also found on other          ways. The risks of these mechanisms being misused by
Apple devices such as MacBooks.80                                 third-party hackers or for unlawful surveillance also
Many of these features also are present on the world’s          must be considered.
leading AI GPU, the NVIDIA H100. It and most other                   This section analyzes these challenges in detail. It first
NVIDIA GPUs include a dedicated security module.81                describes the privacy and cybersecurity implications of
The H100 also includes a TEE known as “NVIDIA                     on-chip governance mechanisms and offers thoughts
Confidential Computing.”82 The H100 is relatively                 on how mechanisms should be designed to avoid these
uncommon among GPUs for having a TEE, but TEEs are                issues. It then turns to the principal challenge for imple-
relatively common on CPUs, as are dedicated security              mentation: making on-chip governance mechanisms
modules.83 Despite its advanced features, the H100 still          sufficiently secure to defend against an adversary with
may not support all of the mechanisms required for                physical access to the chip. The section presents three
an ideal implementation of the governance measures                prospective operating contexts and threat models and
described in this report, even with appropriate firmware          analyzes how far away current technologies are from
updates. However, this example, together with the                 being mature enough to deploy in each of these contexts.
commercial hardware licensing schemes already imple-              A more detailed discussion of the nature and feasibility
mented by Intel and IBM, shows that the features                  of the required security technologies can be found
discussed thus far are likely feasible and economical             in Appendix B.
THE TRACK RECORD OF SIMILAR TECHNOLOGY
The Apple Secure Enclave Processor is a security module found on many Apple devices, including iPhones and
MacBooks.86 Its primary purpose is to protect sensitive information such as cryptographic keys. It also plays a role in
Secure Boot.87 Over the years that various iterations have been in use, the Apple Secure Enclave Processor has proven
to be quite secure since it was first deployed in 2013.88 Only one major publicly known vulnerability has been discovered,
in 2020.89
This is despite the Processor being subject to substantial amounts of security research90—and strong interest in
circumventing these safeguards from much of Apple’s customer base. Circumventing secure boot on iPhones is
popularly known as “jailbreaking” iPhones. While jailbreaks were common in the early- to mid-2010s, publicly known
ways to jailbreak the most recent iPhones have become much rarer since the late 2010s as Apple has improved its
security. Today jailbreaking is only possible if the phone’s operating system hasn’t been updated in several years.91
Other relevant efforts to secure hardware against attacks have not necessarily achieved this level of success. In 2021,
NVIDIA introduced “Lite Hash Rate” (LHR) limitations on some of its GeForce gaming GPUs.92 The purpose of the LHR
feature was to limit the cryptocurrency mining performance (“hash rate”) of these GPUs to ensure the availability of
gaming GPUs for gamers, with cryptocurrency miners instead purchasing NVIDIA’s dedicated line of cryptocurrency
mining GPUs.93 The hash rate limiter appears to have been based on secure boot features verifying that the code
controlling the GPU was legitimate.94 That code then looked for a certain pattern of memory accesses to detect
cryptocurrency mining, and then throttled the performance of the GPU.95 However, methods for partial circumvention
were developed in a few months, and full circumvention was achieved a little more than a year after the release of the
restricted GPUs.96 Full circumvention reportedly became possible after a hack of NVIDIA’s code base revealed that the
code used to detect memory access patterns could be fooled into constantly resetting its internal counter.97
Privacy, Surveillance, and                                     and privileged access, such that if an attacker can compro-
Cybersecurity Implications                                     mise such a component, they can bypass other forms of
One of the most immediate concerns for on-chip gover-          security.101 However, practically all CPUs and GPUs have
nance mechanisms is their potential to be misused, either      system processors that are at least as concerning from
by the owner of the mechanism to conduct unlawful              this perspective as a security module would be, given the
surveillance or by third party hackers taking advantage of     inherent advantages in the security module’s security due
insecure “back doors.”98                                       to its simplicity. Security modules also should be designed
First, on-chip governance mechanisms should be              to have limited access to the rest of the chip, such that
designed to minimize the danger of such misuse. In par-        compromising the module would not allow sensitive data
ticular, mechanisms for remotely disabling chips should        to be exfiltrated.102
be designed to respond to the absence of authorization,           On-chip governance mechanisms should not be used
rather than an active shut-down signal. This means that        to share any kind of personal data. The verification-based
if someone stole the keys to this system, the only misuse      approach proposed in this report allows the compute
that would be possible would be to stop the chips from         owner to choose what kind of information is shared and
being disabled. This, of course, would be very damaging        removes the ability of a verifier or controller to directly
for the intended goal of the mechanisms but would not          acquire sensitive data. These mechanisms will be appro-
enable directly harmful misuse, such as an unexpected          priate only for chips used in particular contexts, such as
shutdown signal during a period of crucial operation.          where export control violations are likely, or to support
The previous section emphasizes robust secure boot             domestic regulation lawfully governing the usage of AI
functionality in part because it increases the security        chips. This kind of limited application appears well-sup-
of devices, by making it more difficult for malware to         ported by current norms and laws: a report from the
compromise low levels of the software stack, rather than       Center for Strategic and International Studies analyzes
making any type of attack or misuse more feasible.             the privacy implications of collecting or requiring the col-
Relatedly, verification systems could and should be         lection of commercial data in an export controls context
designed such that the compute operator is responsible         and finds that to date, foreign countries’ domestic digital
for communicating the verified claims to the verifier.         privacy frameworks explicitly focus on personal data
There is no need for verifiers to be able to read informa-     while leaving commercial data more open.103
tion from the system unilaterally, and if the verifier does
not have that capability, no third parties can exploit the     Overview of Threat Models and Defenses
capability. Instead of unilateral surveillance, this should    The threat models considered here assume that the
attacker has physical access to the AI hardware.104
On-chip governance                                         Different types of attackers will have different levels of
willingness to spend resources to circumvent a mecha-
mechanisms should be
nism, and different degrees of “covertness”—the desire
designed to minimize the                                   to avoid being discovered to have attempted to circum-
danger of misuse.                                          vent a mechanism.105 Based on these considerations, this
report loosely groups attackers into three threat models of
be thought of as a collaboration between a verifier and        increasing difficulty:
the chip owner. This collaboration also could be made
fully privacy-preserving (i.e., not revealing sensitive code   ¡ Minimally adversarial contexts, where attackers do
or data) using techniques from multi-party and confi-            not spend much on attacks, and are very averse to being
dential computing.99 If a chip owner refuses to engage           discovered attempting to compromise mechanisms
in such a collaboration, restriction mechanisms could
¡ Covertly adversarial contexts, where attackers are
allow the verifier (e.g., a regulator or device manufac-
more willing to spend substantial resources to compro-
turer with particular terms of use or enforcing the terms
mise mechanisms, but still want to avoid being caught
of an export license) to prevent them from continuing to
doing so
use the chip.
There have been some concerns that security modules         ¡ Openly adversarial contexts, where attackers are
similar to the type proposed here can provide “back              willing to spend very significant resources to com-
doors” to computers.100 Traditionally, security modules          promise mechanisms and are indifferent to this being
and system processors have had an extreme level of trust         discovered.
OVERVIEW OF THREAT MODELS AND REQUIRED PROTECTIONS
Threat        Key          Protections      Example                Feasibility           Time to             Time to implement
model         attacker     required         applications                                 implement           ideal solution
properties                                                                 minimal solution
Minimally     Low          Basic security   Domestic               High: Current level   Months: Some        2–5 years:
adversarial   resources,   measures         regulation,            of security likely    mechanisms could    There are likely
highly                        export control         sufficient.           be implemented      software- and
covert                        enforcement on                               as changes to       hardware-level
cloud services                               firmware and chip   vulnerabilities in
configuration.      current security
features.
Covertly      Moderate     Exceptionally    Export control         Moderate:             Months: Firmware    2–5 years:
adversarial   to high      secure           enforcement            Significant           changes and         There are likely
resources,   software,        against large          additional            ad hoc tamper-      hardware-level
covert       tamper-          companies, treaty      investment in         evidence            vulnerabilities in
evidence         verification           software security     likely could be     current hardware
and tamper-           implemented in      security features.
evidence required.    months, and may     Improved tamper-
be sufficient in    evident features
some cases.         also could take
years to reach
large-scale
production.
Openly        High         Provably         More challenging       Uncertain:            2–3 years:          4–8 years: Truly
adversarial   resources,   secure           cases of               Significant           Hardware-level      robust tamper-
non-covert   software,        export control         investments in        vulnerabilities     proof packaging
tamper-          enforcement and        software and          would need to       could take years
proofing         treaty verification,   hardware security     be resolved, and    to develop and
where other            may be sufficient.    rudimentary         test, due to
deterrence fails.                            tamper-proofing     the need for
measures would      slow physical
need to be          production and
developed.          testing processes.
Each of these categories requires a distinct approach                  of security already present on existing hardware security
to defense. The table below summarizes these different                 features and software and firmware likely would be suffi-
approaches. In all three contexts, physical, firmware, and             cient for such actors.
software security are important. A detailed discussion of                 As an illustrative case study, NVIDIA’s software license
the nature and feasibility of the required security features           agreement currently bans the use of its gaming GPUs in
in each of these areas can be found in Appendix B.                     data centers.106 Even though gaming GPUs can be viable
sometimes as more affordable alternatives to data center
MINIMALLY ADVERSARIAL CONTEXTS                                         chips, and NVIDIA has limited ability to directly enforce
In these contexts, would-be attackers do not spend                     this license agreement, no major U.S. cloud provider offers
much on attacks and are very averse to being discov-                   cloud AI computing services based on gaming GPUs.107
ered attempting to compromise mechanisms. Would-be                        Some other examples of minimally adversarial
attackers of this type would be, for example, technology               contexts include:
companies based in the United States or friendly nations
that are subject to regulations related to training computa-           ¡ Compute vendors enforcing license agreements
tion usage or other development practices. Such companies
¡ Enforcement and monitoring of domestic regulation
would be very likely to comply with inspections and have
limited motivation to circumvent the restrictions. The level           ¡ Treaty verification between countries with high
mutual trust
¡ Auditing and agreements between AI companies with
high trust in each other.                                      THINKING IN TERMS OF COST IMPOSITION
When considering whether a given set of defenses
In characterizing a situation as minimally adversarial,          would be sufficient, it is important to consider
policymakers and counterparties will need to consider            that the most dangerous forms of export control
how much these actors would have to gain from cir-               circumvention likely would require an attacker to
cumventing a mechanism. In many cases, an actor may              overcome mechanisms on large numbers of chips
(many thousands), either to train powerful AI models
not have much to gain. But in some cases, skirting a             or to deploy them at scale.
regulation might allow, for example, a company to gain
This is both advantageous and disadvantageous
billions of dollars’ worth of market share via developing        for the defender. On the one hand, evidence of
a better AI system. In such a case, a company may be             tampering with large numbers of chips would be
willing to spend substantial resources circumventing a           easier to discover, and labor-intensive tampering
restriction or monitoring system. One analogous example          would be very expensive. On the other hand, the
need to tamper with large numbers of chips means
would be the Volkswagen emissions scandal.108 In such            that up-front costs of developing an attack can be
cases, it is especially important to ensure on-chip gov-         spread across many chips, which can make some
ernance mechanisms can resist sophisticated attacks,             types of attacks look cheap relative to their payoff.
and characterizing them as covertly adversarial may be           For example, if, at some point in the future, a foreign
military illegally acquires $500 million worth of
more appropriate.                                                AI chips (around 10,000 leading-edge AI chips at
today’s prices), it could be worth it for them to spend
COVERTLY ADVERSARIAL CONTEXTS                                    another $500 million to develop a way of defeating
In these contexts, attackers are more willing to spend           the remote disabling mechanism on the chips. On
the other hand, costs that need to be paid for each
substantial resources to compromise mechanisms but still         chip will become very large. This is important for
want to avoid being caught. Companies in some coun-              physical attacks that would require the use of very
tries, such as China, historically have shown less respect       sophisticated equipment and skilled labor.
for license agreements or intellectual property and              It thus becomes important to design security
may be relatively willing to attempt attacks on on-chip          measures that impose high per-chip costs on
attackers. It also is important that any single points
governance mechanisms. However, given threats, for
of failure that would allow scalable attacks, such
example, of being cut off from the supply of further chips,      as firmware vulnerabilities, need to be designed to
or broader U.S. sanctions, these companies would face            withstand very well-resourced attackers.
incentives against attempting these attacks openly. Many
potential applications of on-chip mechanisms for export
control enforcement and international agreements there-          International treaty verification and enforcement also
fore can be characterized as covertly adversarial contexts.   could sometimes be appropriate to treat as openly adver-
In covertly adversarial contexts, if a high degree of      sarial. For example, if a country with strong incentives to
software security has been achieved, the key to defense       “cheat” the terms of a treaty has been allowed to amass
becomes tamper-evidence: ensuring that any physical           powerful chips under the conditions of that treaty, it would
tampering would leave physical evidence that could be         be ideal if the chips were secure enough that the country
discovered by inspectors. If inspections (either in person    could not violate their treaty commitments, even if they
or remote, if the technology exists) are feasible, and        were willing to openly renege on those commitments.
violators can and would be effectively punished, tam-            All of this means that on-chip governance mecha-
per-evidence should be sufficient to achieve deterrence.      nisms operating in such contexts should be tamper-proof.
Tamper-evidence appears reatively easily achievable from      Tamper-proofing refers to defenses that detect tampering
a technical implementation perspective. See Appendix B        efforts and respond by destroying whatever the attacker
for further details.                                          was attempting to access. Tamper-proofing like this is
currently used on some dedicated hardware security
OPENLY ADVERSARIAL CONTEXTS                                   modules, but no existing solutions on the market appear
In openly adversarial contexts, tampering efforts cannot      to be applicable to AI chips. It seems likely, but not
be deterred by threats of punishment or penalties. This       certain, that effective tamper-proofing for AI chips could
likely would be the case if export-controlled chips have      be developed, but this likely would require investment
ended up in the hands of an uncooperative foreign             and time to develop and deploy at scale. See Appendix B
military or other powerful state-linked actors.109            for further details.
Implementation Timelines                                             more effective and close key loopholes (and will likely
continue to be updated). This gives additional reason
If the capabilities and national security risks of broadly           to begin any similarly technically complex rulemaking
capable AI systems continue to grow at the pace seen                 process early.
in 2022 and 2023, the need for highly effective controls                It likely will take 18 months to 4 years to robustly
will become acute in several years’ time. Crucially,                 harden the technologies required for on-chip gover-
developing and deploying the governance mechanisms                   nance mechanisms, and a further 4 years for chips with
described in this report will take time (months in the               these mechanisms to become sufficiently widespread
most optimistic case, years in the most likely case). This           for these mechanisms to be broadly effective. However,
suggests that policymakers concerned about this issue                intermediate stages of technological development still
should begin formulating policies and preparing appro-               will be useful in production contexts. In the short term,
priate technologies now. Once the relevant security                  firmware updates could be deployed to any AI chips
features have been mandated in the most powerful AI                  with the necessary security features. This would initiate
chips, they also need not be used immediately: The                   a “testing phase” for on-chip governance mechanisms,
mechanisms described in the previous section would                   where their usage would be limited to minimally
allow for rapid and flexible responses to new develop-               adversarial environments and/or environments where
ments and threats once installed.                                    in-person inspections are possible.
The 2022 U.S. export controls targeting AI chips are                The impact of the additional lag introduced by “suffi-
an excellent example of the importance of acting early               cient uptake” could be mitigated by tracking the sale of
when governing computing hardware. To simplify, the                  AI chips before the introduction of on-chip governance
export of any chip equal to or better than the NVIDIA                mechanisms and restricting their sale to specific actors.
A100 to China was restricted. At the time of imposi-                 For example, the broad ban on the export of high-end
tion, these controls had likely minimal effect China’s               AI chips to China and Russia could be kept in place until
AI industry, because thousands of affected AI chips                  effective on-chip governance mechanisms have been
already were present in China, and chips of similar                  implemented, at which point licenses could be granted
performance to the A100 were still uncontrolled.110 But              under certain conditions.112 Recently, the Bureau of
if these controls are kept in place for years, the differ-           Industry and Security suggested that they could make
ence between the best chips on the market and the best               exceptions to export controls for chips equipped with
chips that Chinese AI developers can legally obtain in               technical mechanisms that would prevent the chips
2027 will be likely substantial.111 Another key lesson is            from being used for powerful AI training, and requested
these export controls were updated a year later to be                proposals for such mechanisms.113
IMPLEMENTATION STAGES FOR ON-CHIP GOVERNANCE
Stage                          Required steps and dependencies                     Expected duration
Establish policies that require or incentivize chip firms’
implementation of on-chip governance mechanisms.
Policy formulation           Draft requirements should be communicated to chip                 ~1 year
companies as early as possible to ensure that technical
work can commence.
Develop secure versions of on-chip governance
mechanisms based on hardened security modules and
18 months
Technical development        other defenses (See Appendix B).
to 4 years
Can begin once requirements from the previous stage
are sufficiently clear.
To ensure that all or most cutting-edge AI development
can be governed by on-chip mechanisms, these chips
first will have to see uptake by the large commercial
Sufficient uptake            entities developing the most powerful AI systems. As              4 years
a rule of thumb, it is assumed that chips that are four
years old (approximately two GPU generations) are no
longer cost-competitive.
Timelines for Technical Development of                        many mechanisms could be implemented as firmware
Security Features                                             updates. This would take a few months. Some mech-
This report defines the goal of technical development         anisms may not be possible to implement this way on
as a hardened security module included on all high-per-       current hardware, in which case silicon-level changes
formance data center AI chips that can ensure that the        would be required, and the time to implement them would
chip has valid, up-to-date firmware and software and,         increase to between 18 months and 4 years.115
where applicable, an up-to-date license. The security            For covertly adversarial contexts, a minimal solution
module would block the chip from operating if these           likely could be deployed in a few months, using a combi-
conditions were not met. This valid, up-to-date firmware      nation of firmware changes and post hoc tamper-evident
and software then could help enforce limits on the uses       measures, such as adding tamper-evident seals to server
of these chips and offer sophisticated remote attestation     cases. However, given the mixed track record of similar
capabilities. The security module could ensure that if vul-   existing efforts, it is likely that the implementations of
nerabilities are found in this firmware and software, users   security features such as secure boot found on existing AI
would have no choice but to update to patched versions        chips include “unpatchable” vulnerabilities that a well-re-
where the vulnerability has been fixed. Technical R&D to      sourced adversary could find. Therefore, a solution like
support such an implementation would involve:                 this should not be considered fully trustworthy but may
be acceptable to deploy in cases where there is sufficient
¡ Implementations of security modules and trusted             monitoring, and sufficient capability and willingness to
execution environments applicable to cutting-edge           deter evasion attempts through legal means.
AI chips, including license requirements and remote            Designing and thoroughly testing a highly secure basic
attestation                                                 security module likely would take at least a year, and it
would need to be finished at least a year before the chip
¡ Development of tamper-evident and tamper-proof tech-
enters the market. Thorough external testing of the
nologies specific to high-performance data center chips
finished product could add at least a year to this. Ideally,
¡ Potential additional features, such as communication        this would be combined with custom tamper-evident
between chips to ascertain and report use in large          packaging and protections against side channel and fault
clusters, latency-based geolocation, or logging in secure   injection attacks. Developing and scaling up the produc-
non-volatile memory                                         tion of novel physical protections could take years but
could be done concurrently with the development of
¡ Red-teaming, verifying, or otherwise enhancing the          the security module.
security of the above features.                                For openly adversarial contexts, an extremely well-se-
cured security module would be a necessity, due to having
The rest of this section offers more detailed estimates       little ability to deter hacking. Additionally, some kind of
of the time required to design and implement suffi-           tamper-proof envelope would be required. Developing
cient defenses for different operating contexts and           and producing such tamper-proofing features likely would
threat models, drawing on conversations with chip             take several years, due to the unsuitability of existing solu-
industry experts.114                                          tions, and the need to prototype and physically test novel
For minimally adversarial contexts the current level       physical mechanisms, and then scale up their production.
of hardware security likely would be sufficient, and thus
Recommendations                                                  distinct policy and technical efforts, central over-
sight and steering will help:
On-chip governance mechanisms present a prom-
ising area for further research for computer engineers,          ¡ Ground policy development and implementation in
computer scientists, and policy researchers. This report           technical findings and efforts, and conversely, target
offers the following recommendations to move toward                technical efforts toward addressing policy issues seen
a world where all leading AI chips are both secure                 as most compelling
and governable:
¡ Account for synergies and dependencies within dif-
ferent areas of effort (for example, ensuring tampering
Establish government coordination
countermeasures are applicable to the most promising
security module implementations)
The White House should issue an executive order
establishing a NIST-led interagency working group,               ¡ Provide a single point of contact for industry.
focused on getting on-chip governance mechanisms
built into all export-controlled data center AI chips.           This program should be informed by a technical panel
drawn from industry, academia, and government to
For on-chip governance to reach commercial scale, long-          evaluate feasibility and challenges (including those
term collaboration between government and industry               around cost and time frames) for technical work toward
will be required. For progress to be made on the time            the implementation of on-chip governance mechanisms.
scale required, an executive order is an appropriate             This panel likely will need to draw on both unclassi-
forcing function. An executive order also could include          fied and classified information (for example, through
other important initiatives to secure the AI supply chain,       classified meetings and reporting annexes) to benefit
such as cross-agency coordination to tackle AI chip              fully from both nongovernment academic and industry
smuggling and better track other critical inputs to AI.116       expertise and knowledge around the state-of-the-art
The National Institute of Standards and Technology            for secure computing hardware, and relevant offensive
     (NIST) would make a suitable lead for this effort.               capabilities, as held by national laboratories and the
Relevant existing NIST initiatives include the CHIPS             intelligence community.
Program Office, and the Cryptographic Module
Validation and Hardware-Based Confidential Computing             Create commercial incentives
programs.117 Expertise and staff also should be drawn
from the following agencies and offices:                         The Department of Commerce (DoC) should incen-
tivize U.S. chip designers to conduct necessary R&D
     ¡ The Department of Energy (Sandia National Lab)                 using advance export market commitments.

     ¡ The Department of Commerce (Bureau of Industry                 Given that on-chip governance mechanisms need to be
and Security and the Office for Policy and Strategic           implemented on commercial chips, much of the nec-
Planning)                                                      essary R&D will need to happen in an industry setting.
Advance market commitments are contracts offered by
     ¡ The Department of Defense (DARPA and microelec-
a government to guarantee a viable market for a product
tronics-focused groups)
once it has been successfully developed.118 BIS has
     ¡ The Department of Homeland Security (Cybersecurity             already suggested they could except certain chips from
       & Infrastructure Security Agency)                              export controls if they meet a set of (yet to be defined)
technical requirements.119 They should now make this
     ¡ The U.S. intelligence community (National Security             explicit by using advance market commitments that
Agency)                                                        guarantee export market access, conditional on firms
provably implementing a specific set of security features
     ¡ The National Science Foundation (Center for                    on their data center AI chips.
Hardware and Embedded System Security and Trust).                 Export market commitments could include not
extending export controls to new jurisdictions, relaxing
While the implementation of on-chip governance                   the presumption of denial licensing policy for chip
mechanisms efforts can be broken down further into               exports to lower-risk customers in China, or moving
toward more surgical end-use or end-user–based                 governance mechanisms that are designed for wide
controls. These commitments could be an effective way          adoption by industry.125
of incentivizing development without spending public
money: NVIDIA has estimated lost revenue of up to $400         Plan for a staged rollout
million in Q4 2022 as a result of existing controls.120 This   and fund extensive red-teaming
figure is likely much higher today, given NVIDIA’s data
center revenue has more than doubled.121                       To ensure that on-chip governance mechanisms
A key challenge is ensuring that technical require-         are properly designed and safely introduced, the
ments are adequately defined. Different tiers of               Department of Commerce and Department of
requirements could be appropriate for different export         Homeland Security (DHS) should establish flexible
geographies. The DoC should develop these require-             export licensing and red-teaming programs.
ments by analyzing specific attacker threat models in
different export contexts, drawing on expertise from           On-chip mechanisms will require substantial testing
the National Security Agency and Cybersecurity &               before being relied on in more adversarial environ-
Infrastructure Security Agency.                                ments, such as exports of controlled chips to the PRC. To
facilitate a staged rollout approach where mechanisms
Accelerate security R&D                                        can be depended upon in successively more challenging
operating contexts, BIS should create export licensing
NIST should coordinate with industry and relevant              arrangements where licenses can be flexibly granted for
government funding bodies to fund and support                  different geographies based on the security features on
hardware security R&D that can be conducted outside            the device to be exported. This would allow BIS to test
leading chip companies and integrated later.                   the utility of different hardware-based mechanisms for
export control enforcement and develop robust technical
While the bulk of R&D for on-chip governance will need         standards, and it also would allow chip firms to receive
to be conducted by the firms building and selling AI chips     feedback from their customers to improve their designs.
at scale, some work may be conducted usefully outside          Theoretically, this process could begin immediately with
of these firms, especially technologies that would benefit     firmware updates to currently controlled chips.
from being standardized across the industry. NIST (and            In tandem, the Cybersecurity and Infrastructure
the CHIPS Program Office within NIST) should coor-             Security Agency (CISA, within the Department of
dinate with the Semiconductor Research Corporation,            Homeland Security) should establish red-teaming and
DARPA, and other relevant government funding bodies            bug bounty programs to help find and patch any software
to fund useful R&D performed by academic and/or com-           and hardware security vulnerabilities in AI hardware.
mercial partners.122                                           These programs could fit within CISA’s “Secure by
For example, R&D on specialized tamper-proof                Design” program. They also would benefit from technical
enclosures (physical housings for chips that prevent           expertise and input from DARPA, which has run similar
the chip from being modified without compromising              exercises as part of the System Security Integration
its operation) for high-end chips could be potentially         Through Hardware and Firmware (SSITH) program.126 A
(partly) outsourced to academic and commercial                 promising near-term starting point is setting up a public
hardware security labs. There are many precedents              prize for finding vulnerabilities in hardware security
for this: The DARPA-supported Morello program and              features on today’s AI chips.
NIST-led Supply Chain Assurance project are examples
of programs in the hardware security space that include        Coordinate with allies
academic and/or commercial partners.123 One promising
set of commercial partners are firms that develop “rugge-      The State and Commerce Departments should coordi-
dized” AI servers for national security or other sensitive     nate with allies on policies and standards for on-chip
applications. Such firms typically offer products that         governance.
incorporate leading AI chips in form factors optimized
for challenging environments.124                               U.S. chip suppliers such as NVIDIA currently dominate
To support these projects, NIST could expand on its         the supply of the most powerful logic chips, meaning
work on Hardware-Enabled Security to create technical          that, conditional on successful implementation, the
standards and reference implementations for on-chip            United States could realize many of the policy benefits
from on-chip governance mechanisms through unilateral            Limitations and Conclusion
action. However, to mitigate risks to the potential effec-
tiveness of an on-chip mechanism policy from advances            Much of this report focuses on security, as it is the prin-
in foreign chip design and production, the United States         cipal challenge for effectively implementing on-chip
should seek buy-in and harmonization with countries              governance mechanisms. However, security is a difficult
occupying key chokepoints—particularly Taiwan, the               topic to assess. Ultimately, the applicability of on-chip
Netherlands, South Korea, and Japan.127 Looking beyond           governance mechanisms for many use cases depends
export control coordination, using on-chip governance            on hard-to-assess factors such as well-resourced adver-
mechanisms to facilitate AI governance cooperation               saries’ capabilities for fully invasive physical attacks, or
     (e.g., international agreements on compute usage                 the ability of current AI chips to resist types of attacks to
reporting) would benefit from close coordination with            which they have never been subjected.
like-minded allies such as the United Kingdom and                   This report’s optimism about the feasibility of secure
the European Union.128                                           on-chip mechanisms is influenced significantly by the
relative success of Apple’s Secure Enclave Processor.
Encourage AI chip firms to move early                            The Processor is a relevant point of comparison since
Apple devices are among the rare devices that frequently
Chip firms should move early to build and harden the             are “attacked” by their own users to circumvent built-in
security features required for on-chip governance.               restrictions. However, this comparison is still far from
perfect: These attackers are typically relatively poorly
If the U.S. government looks to realize the national             resourced, without very significant financial motive to
security and governance benefits of on-chip governance           succeed, and without budgets to buy expensive equip-
mechanisms, chip suppliers that are more able to apply           ment for sophisticated tampering.
and build on existing technical efforts will have a head            Though adequate security will represent a novel chal-
start on demonstrating and realizing compliance, with            lenge, developing on-chip governance remains an urgent
potential benefits in terms of access to markets that are        and important mission for addressing national security
the subject of export controls or other relevant regula-         risks from AI and maintaining American technological
tion. Leading chip suppliers (as well as other industry          leadership. Developing and deploying the mechanisms
players with relevant capabilities), should build on             described in this report will take time (months in the
and harden existing security features toward enabling            most optimistic case, and years in the most likely case). If
on-chip governance mechanisms.                                   the capabilities and national security risks of AI systems
continue to grow at the pace observed in 2022 and 2023,
the need for highly effective controls will become acute
in several years. This suggests that policymakers con-
cerned about this issue should begin formulating policies
and incentivizing the development of appropriate tech-
nologies now. Once the relevant security features have
been mandated in the most powerful AI chips, they need
not be used immediately: The mechanisms outlined in
this report would allow for rapid and flexible responses
to new developments and threats once installed. With
ambition and coordination with industry and key allies,
the United States can create a secure foundation for a
more flexible and targeted form of AI governance to meet
the challenges of the 21st century.

# Appendix A: Glossary for AI Compute

What follows is a brief overview of different tech-            applications of on-chip governance mechanisms, such
nical concepts related to AI computing that are used           as export control enforcement, no longer applicable.
in this report.
Distinguishing Between AI Chips
Different Types of AI Chips                                  and Non-AI Chips
“AI chip” refers to any chip that is designed for AI         All the above assumes that there is a distinct set of “AI
applications.129 This report primarily uses this term, but   chips” that one might wish to regulate. Currently, AI
several related terms are used frequently:                   chips are fairly specialized, but the most popular AI chips
still have major non-AI uses, and some non-AI chips still
¡ AI accelerator: In computing, accelerator generally        provide decent performance for AI. In general, GPUs
refers to a processor or component that is specialized     can be divided into data center GPUs, which are used
for some type of task, and thus accelerates perfor-        typically for commercial purposes, and gaming GPUS,
mance on that task relative to only using a CPU. Thus      which are used typically by individual consumers for
  “AI accelerator” is an umbrella term for chips, or         entertainment purposes.
modules on a chip, that are designed to improve perfor-       The most commonly used chips for training large
mance in AI applications. The only difference between      AI models are NVIDIA’s data center GPUs.133 These
  “AI chip” and “AI accelerator” is that an accelerator      GPUs also are used for many other applications: some-
can be a module on a larger chip.                          where between 10 percent and 50 percent of the uses of
NVIDIA data center chips are still non-AI.134 Including
¡ GPU, graphics processing unit: As the name suggests,
all of these chips in a regulatory regime would likely have
GPUs originally were designed for generating graphics,
substantial costs.
but they were discovered to be well-suited for deep
At the time of writing, the most powerful gaming GPU
learning, and have since evolved to be even better
is the NVIDIA RTX 4090, which is not as powerful as the
suited for AI applications. The most important pro-
last two generations of NVIDIA’s AI-focused data center
ducers of GPUs are currently NVIDIA and AMD, with
GPUs: the A100 and the H100. However, consumer
NVIDIA having a much greater market share for AI
gaming GPUs generally have better price-performance
applications.130
(cost per unit of performance) than top-of-the-line data
¡ TPU, tensor processing unit: TPUs are a type of            center GPUs, due to their much lower price.135 This does
AI accelerator developed by Google, likely the most        not translate into better price-performance in large-scale
popular non-GPU AI chip, and notable for being used        training workloads, however, due to relative limitations
for many landmark AI results achieved by Google-           in memory bandwidth and chip-to-chip interconnect
affiliated organizations such as DeepMind.                 bandwidth. Based on conversations with engineers at AI
companies training large AI models, the authors expect
¡ Other terms: Many smaller chip companies have              that using gaming GPUs for large-scale AI training today
coined new terms for their AI chips. For example,          would result in a significant, but not crippling, overall
the British company Graphcore calls its chips “IPUs”       price-performance penalty, perhaps 2x.
  (intelligence processing unit).131                            Regulations related to AI chips would be more
straightforward if the market were segmented more
This report focuses especially on NVIDIA GPUs, as:           clearly into AI chips and non-AI chips. It likely would be
valuable if compute vendors made more specific product
¡ Large-scale AI training is performed overwhelm-            differentiations. For example, NVIDIA removed support
ingly with NVIDIA GPUs or Google TPUs, with few            for its NVLink chip-to-chip interconnect protocol from
exceptions.132                                             its leading gaming GPUs. This reduced the usefulness
of gaming GPUs for training powerful AI models, while
¡ Because TPUs are operated only in Google’s own
having no effect on the vast majority of gamers who
data centers, Google could implement governance
never would likely have used the feature. It might be
mechanisms to verify and restrict the use of compute
possible to use on-chip mechanisms to strengthen this
at the cloud service layer. This would make many
distinction. For example, GPUs intended primarily for
CENTER FOR A NEW AMERICAN SECURITY | DECEMBER 2023
actual graphics applications could be required to be             NVIDIA’s NVLink. NVIDIA also is developing a special-
equipped with mechanisms that limit their usefulness             ized switch, called the NVSwitch, that connects GPUs in
for AI in order to create this kind of market segmentation       different nodes to each other more directly, bypassing the
and allow these chips to be sold with fewer restrictions.136     conventional NIC.138
However, an imperfect regime that regulates only a               The above describes the most typical structure, but
somewhat arbitrary set of the most powerful chips still          different compute vendors offer different alternatives. At
could be useful. It would make the lives of those wishing        one extreme, Cerebras designs massive chips that inte-
to circumvent regulations at least somewhat more                 grate all of the above into a single piece of silicon.139
difficult and would allow suspicion to be targeted partic-
ularly at actors who go out of their way to use chips not        An Example of a Hardware, Firmware, and
included in the set of regulated chips.                          Software Stack for an AI Compute Cluster
The following “stack” of components make up a compute
Compute Clusters                                                 cluster. The most important concepts to understand for
AI chips are combined into compute clusters. Compute             this report are the firmware and the driver.
clusters are interconnected computers that work collec-
tively to perform complex tasks. They consist of diverse         ¡ Hardware: This includes the physical components of
hardware components and a software stack. A software               the cluster, such as CPUs, AI chips (GPUs or TPUs),
stack is a collection of software programs organized in            memory, network switches, and network interface
multiple levels, where each level abstracts away technical         cards.
detail from the layer below.
¡ Firmware: Firmware is the low-level software
A compute cluster may be built and operated directly
running on the hardware components, such as AI
by an organization that wants to utilize the compute,
chips, switches, and network interfaces, managing
such as a university or a corporation, on their own
their basic operations. Firmware typically is provided
premises. This configuration is often called “on-prem-
by the chip vendor and offers an interface between
ises,” or on-prem for short. Alternatively, a compute
the hardware and higher-level software, including
cluster can reside in a data center, which is a facility
user-provided software.
dedicated to hosting computer hardware. Large data
centers, especially those operated by cloud providers, can       ¡ Operating system (OS): The OS manages resources
host multiple compute clusters.                                    and provides a platform for other software to run on.
Computing clusters contain several nodes, which                 Examples include Linux distributions and Windows
effectively are individual computers. These are also               Server.
known as servers. AI compute nodes have CPUs for
basic functions, and specialized AI chips, like NVIDIA           ¡ Drivers: Drivers enable communication between the
GPUs or Google TPUs, for AI-specific computations.                 OS and hardware components, such as AI chips and
These chips are supported by ample memory to store                 network interfaces.
model weights. A relevant example of a very powerful
¡ AI framework: These frameworks simplify AI model
single node would be NVIDIA’s DGX137 systems, each of
development, training, and deployment. The most
which has eight NVIDIA A100 GPUs. A node also will
popular frameworks for deep learning are PyTorch and
have other components, such as drives for data storage.
TensorFlow.
Training large AI models requires distributing the
model across multiple AI chips and nodes, necessitating          ¡ Model distribution software: Libraries and tools that
frequent synchronization of parameters. Traditionally,             help distribute the AI model across multiple nodes and
each node will have one or more network interface                  chips, such as NVIDIA’s NCCL (NVIDIA Collective
cards (NICs) that connect it to the cluster’s network.             Communications Library).
These NICs will be connected to specialized compo-
nents, known as switches, that route traffic between             ¡ Applications: This is where the custom AI models,
nodes. AI compute clusters typically use very high-end             training scripts, and data processing pipelines reside,
NICs and switches to enable extremely high band-                   developed by researchers or engineers to solve specific
width communication across AI chips in different                   problems.
nodes. Typically, AI chips within a node also are directly
connected together with specialized hardware, such as
Appendix B:                                                   underlying compilers and hardware. This complex stack
Additional Security Considerations                            gives rise to interactions that are almost impossible to
fully account for during the development process.144
What follows is a detailed discussion of the securing            The saving grace of software (and firmware) is that
software, firmware, hardware, and the supporting eco-         it can be updated, and thus vulnerabilities can be fixed
system for on-chip governance. This appendix focuses          once found. However, this poses some difficulties in
primarily on physical hardware security, given that           the case of on-chip governance mechanisms, as the
aspect differs the most for on-chip governance compared       user may not want to update their system. This can
to other security contexts.                                   be addressed either by having the hardware enforce
updates via expiring licenses, or by requiring users to
Securing Firmware and Software                                regularly remotely attest to what firmware and software
Most on-chip governance mechanisms would rely on              they are running, and imposing legal consequences
at least some firmware, and possibly software. Even if a      on users whose systems are too far out of date. Thus,
secure boot mechanism has verified the “integrity” of         the most valuable measure to secure the software on a
firmware and software in the sense that it is the legit-      chip would be to implement extremely well-hardened
imate version, this does not mean that the legitimate         hardware features for securely enforced updates and/or
version is free of vulnerabilities, and securing any sub-     remote attestation.
stantial code against adversaries is notoriously difficult.      Future advances in the capabilities of vulnerabili-
Because attacks based on exploiting firmware and           ty-finding AI systems could impact the interplay between
software vulnerabilities are relatively cheap, difficult to   offense and defense significantly. On the one hand, if new
detect after the fact, and do not require physical access     systems provide significant new capabilities to attackers,
to the device, they should be considered in any threat        this could reduce the time and expertise needed to
model. For these reasons, they also also be assumed to        undermine the software underlying on-chip governance
be the first type of attack an adversary would attempt.       mechanisms. On the other hand, these systems also could
Investing in other types of protections is only worth-        be used by defenders to more thoroughly identify and
while if the firmware and software on a device are            remediate vulnerabilities before (and after) products
exceptionally secure.                                         are deployed; in the long run, this could trend toward a
It appears likely that a security module would be          significant defensive advantage and make effective cyber
simple enough that it would be feasible to formally           defense much more feasible than before, especially if the
verify the correctness of all code running on the             defender has differential access to the most advanced
module. For example, most of the kernel code running          AI systems.145
on NVIDIA’s “Peregrine” security module is formally
verified,140 Apple’s Secure Enclave Processor runs an         Securing Hardware
Apple-customized version of the L4 microkernel,141 and a      The central obstacle to deploying on-chip governance
version of L4 has been formally verified.142                  mechanisms today is achieving adequate hardware
However, fully formally verified code does not mean        security: making chips either tamper-evident or tam-
unhackable code. To date, developing complex software         per-proof. This section provides an overview of the
stacks that are fully secure against well-resourced           technical considerations for achieving either goal.
adversaries has proved prohibitively difficult. Serious
efforts have been made to secure software by means            TAMPER-EVIDENCE
of testing and more advanced methods such as formal           Physical attacks, by definition, involve physically manip-
verification, but they have failed to produce bug-free        ulating the system. This makes them much easier to
its. For example, internal NVIDIA investigations into         detect. Methods as simple as keeping the devices under
operating system-like software running on their GPUs          video monitoring could be sufficient.146 It is also possible
(the kind of software where on-chip governance mecha-         to use various tamper-evident technologies to allow
nisms would be implemented) found that, while formally        inspectors to detect physical manipulation after the fact.
verified code had significantly fewer bugs, several bugs      For example, a server housing AI chips could be held
still could be found per week of investigation, including     together by screws that are painted over with glitter
some that were exploitable.143 In addition to the incred-     nail polish and photographed. Later, inspectors could
ible complexity of modern software, the intractability of     compare the nail polish on the screws to the photos,
bug-free software is exacerbated by the complexity of the     and check whether the flecks of glitter are in the same
CENTER FOR A NEW AMERICAN SECURITY | DECEMBER 2023
positions.147 Tamper-evident metal seals also have been          chip itself has been physically tampered with, as the
used heavily by the International Atomic Energy Agency           attacker also could compromise the remote attestation
to detect whether nuclear materials have been accessed           mechanism. There is ongoing research into devel-
inappropriately.148 Publicly available evidence for the          oping protective enclosures for chips that could act as
effectiveness of high-end tamper-evident techniques is           a physical unclonable function (PUF), and thus allow a
limited. One report assessed 289 tamper-evident seals,           chip to attest remotely to the integrity of the enclosure.155
including some used for safeguarding nuclear mate-               Techniques such as “probe signal injection” also could be
rials, and found that all could be defeated cheaply.149 On       used, where a physical device profile first is defined by
the other hand, the authors blamed this largely on the           injecting an electromagnetic signal to elicit a “signature,”
limited resources spent on developing better seals, and          and then the device is tested periodically to check if its
expressed optimism about the feasibility of developing           physical signature has changed.156 For each of these tech-
much more effective seals, if reasonable resources were          nologies, it might be possible to extend this technology to
devoted to that goal. Many tamper-evident techniques             remotely attest to the integrity of an entire server.
already have been developed for dedicated hardware
security chips in order for those chips to meet security         TAMPER-PROOFING
level 2 and above as defined in the FIPS 140 standard.150        To prevent physical attacks on a chip, the chip needs to
More challenging would be providing evidence of               have tamper-proof packaging.157 This means packaging
fault injection attacks—semi-invasive attacks wherein            with (a) some means of detecting that it has been dis-
a chip is induced to misbehave, for example by manipu-           turbed, and (b) the ability to take a destructive response
lating its power supply or exposing it to electromagnetic        when a disturbance is detected. Different types of
pulses.151 But because this would involve exposing the           responses are required in different cases. When the goal
chip to unusual stimuli and inducing unusual states, it          is to protect a private key, the response is simple and
may be feasible to design chips to be tamper-evident             easy to implement: wipe the private key. This is typically
against such attacks through techniques like having              called “zeroization”. When protecting the core function-
a specific on-chip fuse blow if the power supply is              ality of the chip, the response would be ideally to trigger
manipulated. Additionally, fault injection attacks can           some self-destruct mechanism, to destroy the core func-
be potentially mitigated and detected through specific           tionality that the attacker is trying to access.158
software measures.152                                                The detection problem is similar to the “tamper-evi-
Certain tamper-evident measures also could require            dence” problem. Tamper-detecting envelopes often are
occasional inspections. In the export control context,           used in high-grade hardware security modules; they are
these could be on-site or involve short-notice mail-in           a requirement for the highest level of security defined in
requirements. While inspecting all chips presumably              the FIPS 140-2 standard for cryptographic modules.159
would involve unacceptable overhead, inspections of a            Tamper-detection usually is implemented using an
small number of random and/or risk-based inspections             envelope with current running through it, designed in
should be sufficient to achieve statistical confidence           such a way that its electrical properties would change
that large-scale tampering of chips is not occurring.153         if the envelope were broken. This change in electrical
Such a program could be implemented at a fairly low              properties can be detected from inside the envelope, and
cost compared to the existing budget of the Bureau of            a tamper response can be initiated. Such solutions appear
Industry and Security, but likely would require additional       to be technically feasible, but existing solutions are too
funding beyond the Bureau’s current budget to scale to           bulky to be used for AI chips, as the enclosure would
global stocks of tens of millions of controlled AI chips.154     interfere with cooling.160 However, this problem is likely
solvable. Several mature technologies then could be used
REMOTE TAMPER-EVIDENCE                                           to implement simple self-destruct mechanisms cheaply,
Some hardware security features even could provide               which the envelope could trigger upon detection of a
remote tamper-evidence: compute operators could                  tampering attempt.
be required to regularly remotely attest to the integ-               The most sophisticated hardware security modules
rity of their chips. Secure boot and remote attestation          appear to be very difficult to attack,161 and there are no
provide some degree of remote tamper-evidence, in that           publicly known cases in which they have been physically
these tools can reveal if a chip is not running legitimate       compromised.162 However, this evidence is unfortunately
firmware, or if the configuration is not as expected.            weak. These are niche products, almost always stored
However, this method may not be sufficient if the                such that many other layers of defense would have had to
fail for an attacker even to attempt tampering. Due to the    regulators will need confidence that these mechanisms
contexts in which these devices are used, it also is likely   have not been compromised by untrusted firms or insider
that, even if a successful attack had occurred, the infor-    attacks during fabrication and packaging. While this
mation would be classified or otherwise non-public.           area is outside the scope of this report, the Department
Turning to self-destruct mechanisms, these are rare       of Defense’s “Trusted & Assured Microelectronics”
on commercially available chips, but such mechanisms          program could provide a useful starting point
should be relatively feasible to develop. Mature tech-        for best practices.167
nologies exist, such as eFuses, that irreversibly modify
the behavior of chips if triggered. Beyond fuses, other
possible approaches include using excess voltage
to deliberately damage the chip, or even extremely
low-yield explosives.
To ensure that these protective measures cannot be
disabled by cutting off power to the chip or removing
it from the circuit board, the chip additionally needs to
have a battery. The battery should be included in the
tamper-proof packaging and should be able to provide
sufficient power to keep the tamper-detection system
active and power the zeroization or self-destruct mech-
anism for the duration of the life of the chip.163 The
chip must be programmed correspondingly to trigger
the zeroization or self-destruct if that battery is about
to run out.
Securing the Supporting Ecosystem
In addition to targeting on-chip governance mecha-
nisms themselves, attackers could target the systems of
relevant controllers and verifiers. This may seem like
a significant issue in that major companies and other
organizations are quite frequently successfully attacked.
For example, NVIDIA was compromised by a group of
hackers in 2022, and some source code and design doc-
uments were stolen.164 However, to truly compromise a
well-designed on-chip governance mechanism, attackers
would need to steal specific private keys. Such keys are
more feasible to protect effectively than, for example,
design documents that need to be accessible to large
numbers of employees. As an example, the public key
infrastructure upon which the security of internet traffic
largely relies is rarely compromised, despite substantial
incentives to do so. Indeed, the authors are not aware of
any cases in which the root private key of a root certif-
icate authority has been stolen.165 Nonetheless, given
their sensitivity, securing keys for on-chip governance
mechanisms likely would merit particularly strong infor-
mation security measures—for example, using threshold
cryptography to split the storage of keys across multiple
independent systems.166
Another angle of attack on the supporting ecosystem
is in manufacturing supply chains. To rely on on-chip
governance mechanisms in sensitive operating contexts,
1.   Tim Fist and Erich Grunewald, “Preventing AI Chip                     notification requirement for exports of consumer chips
Smuggling to China,” Center for a New American Security,              with AI-relevant capabilities, suggesting that some
October 27, 2023, https://www.cnas.org/publications/re-               consumer GPUs may be export-controlled in the future.
ports/preventing-ai-chip-smuggling-to-china.                          “Implementation of Additional Export Controls: Cer-
tain Advanced Computing Items; Supercomputer and
2.   A “training run” is a computational workload, often                   Semiconductor End Use; Updates and Corrections.”,
distributed across multiple chips, where large quantities             Supplementary information section C.2, 88 Fed. Reg.
of data are used to “train” an AI model to perform some               73458, October 25, 2023, https://www.federalregister.
task. The recent Executive Order requires U.S. AI devel-              gov/d/2023-23055/p-204.
opers to report any training run that exceeds a certain
threshold of computation, measured in “operations.” It           8.   Following cybersecurity conventions, this report uses
also requires U.S. cloud computing providers to report                the term “adversary” to refer to anyone attempting to
training runs conducted by their non-U.S. customers,                  circumvent or compromise an on-chip mechanism. Thus,
using the same threshold. “Executive Order on the Safe,               the adversary need not be an adversary in a broader sense
Secure, and Trustworthy Development and Use of Arti-                  and can instead be, e.g., a company attempting to evade
ficial Intelligence,” the White House, October 30, 2023,              regulations.
https://www.whitehouse.gov/briefing-room/presiden-
tial-actions/2023/10/30/executive-order-on-the-safe-se-          9.   “Advance market commitments” (AMCs), a relatively new
cure-and-trustworthy-development-and-use-of-artifi-                   idea, describe binding contracts offered by a government
cial-intelligence/.                                                   to guarantee a viable market for a product once it has been
successfully developed. AMCs have seen success in incen-
3.   Some have called for an “IAEA for AI” model to meet the               tivizing the development of new vaccines: Federation of
challenges of global AI governance: John Mecklin, “Why                American Scientists, “Creating Advanced Market Com-
the IAEA Model May Not Be Best for Regulating Artifi-                 mitments and Prizes for Pandemic Preparedness,” https://
cial Intelligence,” Bulletin of the Atomic Scientists, June 9,        fas.org/publication/creating-advanced-market-commit-
2023, https://thebulletin.org/2023/06/why-the-iaea-mod-               ments-and-prizes-for-pandemic-preparedness/.
el-may-not-be-best-for-regulating-artificial-intelligence/.
10. Stephen Nellis and Jane Lee, “U.S. Officials Order Nvidia
4.   Fan Mo, Zahra Tarkhani, and Hamed Haddadi, “Machine                  to Halt Sales of Top AI Chips to China,” Reuters, Septem-
Learning with Confidential Computing: A Systemati-                   ber 1, 2022, https://www.reuters.com/technology/nvidia-
zation of Knowledge,” arXiv, April 2, 2023, http://arxiv.            says-us-has-imposed-new-license-requirement-future-
org/abs/2208.10134; Fan Mo et al., “PPFL: Privacy-Pre-               exports-china-2022-08-31/.
serving Federated Learning with Trusted Execution
Environments,” arXiv, June 28, 2021, http://arxiv.org/           11. Emily Benson and Catharine Mouradian, “Establishing
abs/2104.14380; and Xiaoguo Li et al., “A Survey of Secure           a New Multilateral Export Control Regime,” Center for
Computation Using Trusted Execution Environments,”                   Strategic and International Studies, November 2, 2023,
arXiv, February 23, 2021, http://arxiv.org/abs/2302.12150.           https://www.csis.org/analysis/establishing-new-multilat-
eral-export-control-regime.
5.   For example, a recent White House executive order
requires AI developers to report the development of              12. “Implementation of Additional Export Controls: Cer-
models trained with “biological sequence data” above a               tain Advanced Computing Items; Supercomputer and
certain computation threshold. Such regulations could                Semiconductor End Use; Updates and Corrections.”,
evolve to require more formal verification of which                  Supplementary information section D.2, 88 Fed. Reg.
dataset was used in training, especially if such regulation          73458, October 25, 2023, https://www.federalregister.
applied to foreign AI developers accessing U.S. compute              gov/d/2023-23055/p-350.
via the cloud or U.S.-produced chips. The hardware
13. Olexsandr Fylyppov and Tim Lister, “Russians Plun-
security features described in this report could enable
der $5M Farm Vehicles from Ukraine—to Find They’ve
this, perhaps using a “Proof of Training Data” protocol
Been Remotely Disabled,” CNN, May 1, 2022, https://
of the kind described here: Dami Choi, Yonadav Shavit,
www.cnn.com/2022/05/01/europe/russia-farm-vehi-
and David Duvenaud. “Tools for Verifying Neural Models’
cles-ukraine-disabled-melitopol-intl/index.html.
Training Data,” July 2, 2023, https://doi.org/10.48550/
arXiv.2307.00682.                                                14. “Farmers Fight John Deere Over Who Gets to Fix an
$800,000 Tractor,” Bloomberg, March 5, 2020, https://
6.   In the information security context, “spoofing” refers
www.bloomberg.com/news/features/2020-03-05/farm-
to the falsification of data by an attacker. See “Spoofing
ers-fight-john-deere-over-who-gets-to-fix-an-800-000-
Attack,” Wikipedia, https://en.wikipedia.org/w/index.
tractor.
php?title=Spoofing_attack&oldid=1166570796.
15. Brookings, “Castle Bravo: The Largest U.S. Nuclear Ex-
7.   Ideally, this would be avoided by chip firms further
plosion,” https://www.brookings.edu/articles/castle-bra-
differentiating consumer and data center GPU designs.
vo-the-largest-u-s-nuclear-explosion.
However, the Commerce Department recently added a
16. Bureau of Industry and Security, “Implementation of               gy, and the Law, 117th Cong. 8 (2023), statement of Dario
Additional Export Controls: Certain Advanced Computing            Amodei, Co-Founder and CEO, Anthropic, https://www.
and Semiconductor Manufacturing Items; Supercomputer              judiciary.senate.gov/imo/media/doc/2023-07-26_-_testi-
and Semiconductor End Use; Entity List Modification,”             mony_-_amodei.pdf.
October 13, 2022, https://www.federalregister.gov/doc-
uments/2022/10/13/2022-21658/implementation-of-ad-            25. See the following proof of concept for an overview of the
ditional-export-controls-certain-advanced-comput-                 cyber offensive capabilities of today’s frontier models:
ing-and-semiconductor; Gregory C. Allen, “Blocking                HYAS, “EyeSpy: Cognitive Threat Agent,” August 2, 2023,
China’s Access to AI Chips Matters to U.S. National               https://www.hyas.com/hubfs/HYAS_EyeSpy_Proof_of_
Security,” July 31, 2023, https://www.csis.org/analysis/          Concept.pdf; OpenAI, “GPT-4 System Card,” March 23,
blocking-chinas-access-ai-chips-matters-us-nation-                2023, 14, https://cdn.openai.com/papers/gpt-4-system-
al-security; Liza Lin and Dan Strumpf, “China’s Top               card.pdf. For an example of how today’s frontier models
Nuclear-Weapons Lab Used American Computer Chips                  have started to be turned into autonomous agents that
Decades After Ban,” Wall Street Journal, January 29, 2023,        can explore independently, learn new skills, and make
https://www.wsj.com/articles/chinas-top-nuclear-weap-             novel discoveries, see Guanzhi Wang et al., “Voyager: An
ons-lab-used-american-computer-chips-decades-after-               Open-Ended Embodied Agent with Large Language Mod-
ban-11674990320.                                                  els,” arXiv, May 25, 2023, http://arxiv.org/abs/2305.16291.
For an overview of the risks such systems could pose
17.   National Security Commission on Artificial Intelligence,        in the near term see ; Alan Chan et al., “Harms from
      “Final Report,” March 1, 2021, 7, https://www.nscai.gov/        Increasingly Agentic Algorithmic Systems,” in 2023 ACM
wp-content/uploads/2021/03/Full-Report-Digital-1.pdf.           Conference on Fairness, Accountability, and Transparen-
cy, 2023, 651–66, https://doi.org/10.1145/3593013.3594033;
18. Eduardo Baptista, “Insight: China Uses AI Software to             and Richard Ngo, Lawrence Chan, and Sören Minder-
Improve Its Surveillance Capabilities,” Reuters, April            mann, “The Alignment Problem from a Deep Learning
8, 2022, https://www.reuters.com/world/china/chi-                 Perspective,” arXiv, February 22, 2023, http://arxiv.org/
na-uses-ai-software-improve-its-surveillance-capabili-            abs/2209.00626.
ties-2022-04-08/.
26. Markus Anderljung et al., “Frontier AI Regulation: Man-
19. Sara Goudarzi, “China’s High-Tech Surveillance Drives             aging Emerging Risks to Public Safety,” arXiv, July 11,
Oppression of Uyghurs,” Bulletin of the Atomic Scientists,        2023, http://arxiv.org/abs/2307.03718.
October 27, 2022, https://thebulletin.org/2022/10/chinas-
high-tech-surveillance-drives-oppression-of-uyghurs/.         27. Ben Garfinkel and Allan Dafoe, “Artificial Intelligence,
Foresight, and the Offense-Defense Balance,” War on
20. Jacob Stokes, Alexander Sullivan and Noah Greene,                 the Rocks, December 19, 2019, https://warontherocks.
    “U.S.-China Competition and Military AI,” Center for a            com/2019/12/artificial-intelligence-foresight-and-the-of-
New American Security, July 25, 2023, https://www.cnas.           fense-defense-balance/; Sarah Kreps, “Democratizing
org/publications/reports/u-s-china-competition-and-mil-           Harm: Artificial Intelligence in the Hands of Nonstate
itary-ai.                                                         Actors,” Brookings Institution, November 2021, https://
www.brookings.edu/articles/democratizing-harm-artifi-
21. As an illustration of the capabilities at today’s frontier,       cial-intelligence-in-the-hands-of-non-state-actors/.
GPT-4 has the ability to process both visual and text data,
and achieves high human-level performance (top 20 per-        28. Bureau of Industry and Security, “Commerce Implements
cent of human test takers) in the majority of professional        New Export Controls on Advanced Computing and Semi-
and academic exams it has been tested on, including col-          conductor Manufacturing Items to the People’s Republic
lege-level exams in mathematics, verbal reasoning, chem-          of China (PRC),” October 7, 2022, https://www.bis.doc.
istry, and biology. OpenAI, “GPT-4 Technical Report,”             gov/index.php/documents/about-bis/newsroom/press-
March 14, 2023, https://cdn.openai.com/papers/gpt-4.pdf.          releases/3158-2022-10-07-bis-press-release-advanced-
computing-and-semiconductor-manufacturing-controls-
22. Daniil A. Boiko, Robert MacKnight, and Gabe Gomes,                final/file.
    “Emergent Autonomous Scientific Research Capabilities
of Large Language Models,” arXiv, April 11, 2023, http://     29. Empirically derived “scaling laws” show that models
arxiv.org/abs/2304.05332.                                         steadily improve as they are made larger and trained using
more computation. Pablo Villalobos, “Scaling Laws Liter-
23. See, for example, “Donovan: AI-Powered Decision-Mak-              ature Review,” Epoch, January 26, 2023, https://epochai.
ing for Defense,” Scale AI, https://scale.com/donovan.            org/blog/scaling-laws-literature-review.
24. “Frontier Threats Red Teaming for AI Safety,” Anthrop-        30. Jess Whittlestone et al., “Future of Compute Review—
ic, July 26, 2023, https://www.anthropic.com/index/               Submission of Evidence,” Centre for Long-Term Resil-
frontier-threats-red-teaming-for-ai-safety; Oversight of          ience, August 8, 2022, https://www.longtermresilience.
A.I.: Principles for Regulation: Hearing Before the Senate        org/post/future-of-compute-review-submission-of-evi-
Judiciary Committee Subcommittee on Privacy, Technolo-            dence; Miles Brundage, Girish Sastry, et al., “Computing
Power and the Governance of Artificial Intelligence,”               google.com/docs/security/remote-attestation.
Forthcoming, n.d.; Saif M. Khan and Alexander Mann, “AI
Chips: What They Are and Why They Matter,” Center for           38. Andrew Cunningham, “Riot Games’ Anti-Cheat Software
Security and Emerging Technology, April 2020, https://              Will Require TPM, Secure Boot on Windows 11,” Ars
doi.org/10.51593/20190014; Saif M. Khan, Alexander                  Technica, September 8, 2021, https://arstechnica.com/
Mann, and Dahlia Peterson, “The Semiconductor Supply                gaming/2021/09/riot-games-anti-cheat-software-will-re-
Chain: Assessing National Competitiveness,” Center for              quire-tpm-secure-boot-on-windows-11/.
Security and Emerging Technology, January 2021, https://
doi.org/10.51593/20190016; and Ben Buchanan, “The AI            39. By “data center chips” this report means chips intended
Triad and What It Means for National Security Strategy,”            for the enterprise data center market, which are usually
Center for Security and Emerging Technology, August                 more powerful than chips intended for consumers.
2020, https://doi.org/10.51593/20200021.
40. Jess Whittlestone et al., “Future of Compute Review—
31. Ryan Fedasiuk, Karson Elmgren, and Ellen Lu, “Silicon               Submission of Evidence.”
Twist: Managing the Chinese Military’s Access to AI
41. “Executive Order on the Safe, Secure, and Trustworthy
Chips,” Center for Security and Emerging Technology,
Development and Use of Artificial Intelligence,” the
June 2022, https://doi.org/10.51593/20210068.
White House, October 30, 2023, https://www.whitehouse.
32. Erich Grunewald, “AI Chip Smuggling into China: Poten-              gov/briefing-room/presidential-actions/2023/10/30/ex-
tial Paths, Quantities, and Countermeasures.” Institute for         ecutive-order-on-the-safe-secure-and-trustworthy-devel-
AI Poliicy & Strategy, October 2023, https://www.iaps.ai/           opment-and-use-of-artificial-intelligence/.
research/ai-chip-smuggling-into-china.
42. Reinsch and Benson, “Digitizing Export Controls”; Sarah
33. Semiconductor Industry Association, “Statement on Po-               O’Hare O’Neal and Jack Clark, “Microsoft and Open AI
tential Additional Government Restrictions on Semicon-              [Sic] Comment on Advance Notice of Proposed Rulemak-
ductors,” July 17, 2023, https://www.semiconductors.org/            ing (ANPRM) for the Identification and Review of Con-
sia-statement-on-potential-additional-government-re-                trols for Certain Foundational Technologies,” November 9,
strictions-on-semiconductors.                                       2020, https://downloads.regulations.gov/BIS-2020-0029-
0056/attachment_1.pdf; Yonadav Shavit, “What Does It
34. Hanna Dohmen, Jacob Feldgoise, Emily S. Weinstein                   Take to Catch a Chinchilla? Verifying Rules on Large-
Timothy Fist, “Controlling Access to Compute via the                Scale Neural Network Training via Compute Monitoring,”
Cloud: Options for U.S. Policymakers, Part II,” Center for          arXiv, March 20, 2023, https://doi.org/10.48550/arX-
Security and Emerging Technology, June 1, 2023, https://            iv.2303.11341; and Matthew Mittelsteadt, “AI Verification:
cset.georgetown.edu/article/controlling-access-to-com-              Mechanisms to Ensure AI Arms Control Compliance,”
pute-via-the-cloud-options-for-u-s-policymakers-part-ii/.           Center for Security and Emerging Technology, February
2021, https://doi.org/10.51593/20190020.
35. This idea has been discussed in “Artificial Intelligence:
Challenges and Opportunities for the Department of              43. For an overview of relevant supply chain chokepoints, see
Defense: Hearing Before the Senate Committee on Armed               Khan, Mann, and Peterson, “The Semiconductor Supply
Services, Subcommittee on Cybersecurity,” 117th Cong.               Chain.” The United States unilaterally blocked the export
4 (2023), statement of Jason Matheny, President and                 of cutting-edge AI chips to China by leveraging a foreign
CEO, RAND, https://www.rand.org/pubs/testimonies/                   direct product rule as part of the October 2022 wave of
CTA2723-1.html. See also William Alan Reinsch and Emily             export controls. Gregory C. Allen, “Choking off China’s
Benson, “Digitizing Export Controls: A Trade Compliance             Access to the Future of AI," Center for Strategic & Inter-
Technology Stack?,” Center for Strategic & International            national Studies, October 11, 2022, https://www.csis.org/
Studies, December 1, 2021, https://www.csis.org/analysis/           analysis/choking-chinas-access-future-ai.
digitizing-export-controls-trade-compliance-technolo-
gy-stack.                                                       44. It also may be possible for the hardware vendor to hand
direct control over the mechanism to another entity, such
36. Application-specific AI systems (“narrow AI”) also can              as a government agency.
pose serious national security risks. Given their narrow
set of use cases, these systems may be somewhat more            45. This report uses the term “AI developer” to refer to orga-
tractable to regulate than highly capable general-purpose           nizations or teams developing AI systems, not to individu-
models, which are highly dual use. On a practical level,            als.
given that narrow AI systems typically require far less
46. For example, if a company runs its own servers on its own
compute than general-purpose AI systems, the gover-
premises, they are both operator and user. If a company is
nance mechanisms described in this document will be
using a cloud provider, the cloud provider is the operator,
unlikely to be effective for controlling their proliferation.
and the company is the user.
37. “Remote Attestation of Disaggregated Machines | Docu-
47. “Executive Order on the Safe, Secure, and Trustworthy
mentation,” Google Cloud, December 2022, https://cloud.
Development and Use of Artificial Intelligence,” the
White House, October 30, 2023, https://www.whitehouse.              fectly confident that any chip responding to a query from
gov/briefing-room/presidential-actions/2023/10/30/ex-               that server in less than 9 ms cannot be in Russia (Russia’s
ecutive-order-on-the-safe-secure-and-trustworthy-devel-             Kaliningrad enclave is 9*15 = 1350 km from Paris.) Using
opment-and-use-of-artificial-intelligence/.                         ordinary internet infrastructure, which is substantially
slower than the speed of light, chips as distant as London
48. “NVIDIA H100 Tensor Core GPU Architecture Over-                     and Brussels can achieve round-trip latencies below 9 ms
view,” NVIDIA, https://resources.nvidia.com/en-us-ten-              to Paris. This means that, in Western Europe, landmark
sor-core/gtc22-whitepaper-hopper.                                   servers spaced a few hundred kilometers apart would
be sufficient to allow chips to verify that they are not in
49. Jeff Goldman, "Chip Backdoors: Assessing the Threat,"               Russia.
Semiconductor Engineering, August 4, 2022, https://
semiengineering.com/chip-backdoors-assessing-the-               57. Using speed-of-light communication via e.g., radio, the
threat/.                                                            red circle could be expanded to be essentially equivalent
to the blue circle. In many cases, it also may be possible to
50. For example, an auditor could run tests on model weights            place the trusted server in the same datacenter as the AI
without having direct access to the encrypted weights               chips in question, allowing much greater precision.
or having obtained proof about which training data was
used to produce a set of model weights. See Confidential        58. The term “security dilemma” was introduced by John
Computing Consortium, “Confidential Computing”; Dami                Herz, “Idealist Internationalism and the Security Dilem-
Choi, Yonadav Shavit, and David Duvenaud, “Tools for                ma,” World Politics vol. 2, no. 2 (1950): 171–201, at p. 157.
Verifying Neural Models’ Training Data,” arXiv, July 2,             For an overview of how this concept is relevant to AI, see:
2023, https://doi.org/10.48550/arXiv.2307.00682.                    Brookings. “Artificial Intelligence and the Security Dilem-
ma,” ..
51. In the most recent update to its semiconductor export
controls, BIS has added a notification requirement for          59. Center for Security and Emerging Technology. “AI Ac-
exports of consumer chips with AI-relevant capabili-                cidents: An Emerging Threat.” https://cset.georgetown.
ties. “Implementation of Additional Export Controls:                edu/publication/ai-accidents-an-emerging-threat/; Dan
Certain Advanced Computing Items; Supercomputer                     Hendrycks, Mantas Mazeika, and Thomas Woodsidek,
and Semiconductor End Use; Updates and Corrections,”                “An Overview of Catastrophic AI Risks,” arXiv, October 9,
Supplementary information section C.2, 88 Fed. Reg.                 2023, http://arxiv.org/abs/2306.12001.
73458, October 25, 2023, https://www.federalregister.
gov/d/2023-23055/p-204.                                         60. Stokes, Sullivan and Greene, “U.S.-China Competition and
Military AI.”
52. See Megan Lamberth and Paul Scharre, “Arms Control
for Artificial Intelligence,” Texas National Security Review    61. For an overview of nuclear monitoring and verification
6, no. 2 (Spring 2023): 95–110, https://doi.org/10.26153/           technologies, see “Assessment of Nuclear Monitoring
TSW/46142; Mauricio Baker, “Nuclear Arms Control Ver-               and Verification Technologies,” Department of Defense
ification and Lessons for AI Treaties,” arXiv, April 8, 2023,       (Defense Science Board), January, 2014, https://media.nti.
https://doi.org/10.48550/arXiv.2304.04123; Mittelsteadt,            org/pdfs/Assessment_of_Nuclear_Monitoring_and_Veri-
    “AI Verification.”                                                  fication_Technologies.pdf. For an overview of analogous
ideas in the AI space, see Matthew Mittelsteadt, “AI Veri-
53. This specific-use case is highlighted in a recent request           fication: Mechanisms to Ensure AI Arms Control Com-
for public comment from the Bureau of Industry and Se-              pliance,” Center for Security and Emerging Technology,
curity: “Public Information on Export Controls Imposed              February 2021, https://doi.org/10.51593/20190020.
on Advanced Computing and Semiconductor Manufac-
turing Items to the People’s Republic of China (PRC),”          62. Shavit, “What Does It Take to Catch a Chinchilla?”
https://www.bis.doc.gov/index.php/about-bis/news-
room/2082.                                                      63. “Members,” Confidential Computing Consortium,”
https://confidentialcomputing.io/about/members/.
54. “Intel On Demand,” Intel, https://www.intel.com/con-
tent/www/us/en/products/docs/ondemand/overview.                 64. “Implementation of Additional Export Controls: Cer-
html; “Capacity on Demand - IBM Documentation,” IBM,                tain Advanced Computing Items; Supercomputer and
February 8, 2022, https://www.ibm.com/docs/en/pow-                  Semiconductor End Use; Updates and Corrections.”,
er9?topic=environment-capacity-demand.                              Supplementary information section D.2, 88 Fed. Reg.
73458, October 25, 2023, https://www.federalregister.
55. Reinsch and Benson, “Digitizing Export Controls.”                   gov/d/2023-23055/p-350.
56. The speed of light is just under 300 km/ms. This means          65. See, for example, the Caliptra root of trust being devel-
that if a chip/server responds in y ms, it is, at most y×150        oped by the CHIPS Alliance: CHIPS Alliance. “Caliptra:
km away. In the case depicted in the diagram, by operating          A Datacenter System on a Chip (SoC) Root of Trust
a trusted landmark server in Paris, France, we can be per-          (RoT),” GitHub, https://www.opencompute.org/docu-
ments/caliptra-silicon-rot-services-09012022-pdf. Other          72. It might be possible to break this using some kind of fault
related efforts are discussed in this recent NIST report:            injection attack to prevent the clock cycle counter from
Bartock, Michael, Murugiah Souppaya, Ryan Savino, Tim                incrementing. However, it would likely be extremely
Knoll, Uttam Shetty, Mourad Cherfaoui, Raghu Yeluri,                 difficult and costly to repeatedly carry out such an attack
et al., “Hardware-Enabled Security: Enabling a Layered               without interfering with the normal functions of the chip,
Approach to Platform Security for Cloud and Edge Com-                on dozens of chips in operation. See “AON Timer Techni-
puting Use Cases,” National Institute of Standards and               cal Specification,” OpenTitan Documentation, February
Technology (U.S.), May 4, 2022, https://doi.org/10.6028/             23, 2023, https://docs.opentitan.org/hw/ip/aon_timer/
NIST.IR.8320.                                                        doc/index.html for an example of this approach. The
attacker may be able to slow this down, but they would
66. Jonas B. Sandbrink, “Artificial Intelligence and Biological          also be slowing down the useful computations done by the
Misuse: Differentiating Risks of Language Models and                 chip by the same amount.
Biological Design Tools,” arXiv, August 12, 2023, http://
arxiv.org/abs/2306.13952.                                        73. See “Top Earlgrey,” https://opentitan.org/book/hw/top_
earlgrey/index.html for an example of this approach.
67. “Secure Boot,” Microsoft, February 8, 2023, https://learn.
microsoft.com/en-us/windows-hardware/design/de-                  74. Confidential Computing Consortium, “Confidential Com-
vice-experiences/oem-secure-boot; OCP Security work-                 puting,” 10.
group, “Hardware Secure Boot,” Open Compute Project,
2021, 7, https://www.opencompute.org/documents/                  75. Shavit, “What Does It Take to Catch a Chinchilla?”
secure-boot-2-pdf. This report is specifically interested in
enforced secure boot. Often, secure boot without enforce-        76. Hashing refers to transforming data into a short alpha-
ment is provided as an option that the hardware user can             numeric sequence of a standardized length. Hashes
enable or disable, particularly on PCs. This can provide             are generated using algorithms such that the same data
valuable protection against malware but obviously does               always will produce the same hash, but without the hash
not restrict the user’s behavior.                                    revealing the original data. This allows the owner of
hashed data to prove that their data generated that hash,
68. OCP security workgroup, “Attestation of System Com-                  without revealing the original data itself.
ponents v1.0 Requirements and Recommendations,”
November 4, 2020, https://www.opencompute.org/doc-               77. As part of verifying a model’s provenance, the proposed
uments/attestation-v1-0-20201104-pdf; Henk Birkholz et               scheme involves retraining parts of the model using the
al., “Remote ATtestation procedureS (RATS) Architec-                 provided transcripts on trusted third-party hardware,
ture,” Request for Comments (RFC Editor, January 2023),              to check that the resulting weights match the originally
https://www.rfc-editor.org/info/rfc9334.                             logged hashes. This retraining step verifies that the tran-
scripts accurately reflect the original training process.
69. Ross Anderson, Security Engineering: A Guide to Building
Dependable Distributed Systems, 3rd ed. (Hoboken, NJ:            78. In most cases the compute operator could be trusted to
John Wiley & Sons, 2020), 250–51.                                    store the logs, because logging would either be a voluntary
action taken by the operator or required by some type of
70. Wei Huang et al., “Aion Attacks: Manipulating Software               regulatory regime with the capacity to take enforcement
Timers in Trusted Execution Environment,” Lecture                    action against anyone found to not have kept the required
Notes in Computer Science (Detection of Intrusions and               logs. However, it would be a useful additional security
Malware, and Vulnerability Assessment, Springer, 2021),              feature for the chip to have secure non-volatile storage in
173–93, https://doi.org/10.1007/978-3-030-80825-9_9.                 which to keep (cryptographic hashes of ) some recent logs.
This would allow an inspector to detect that something
71. However, if one only tracks computations, rather than                is wrong if the operator has succeeded in stealing the
time, in theory it would be possible for an actor intending          private key on the chip (e.g., through side channels) and
to circumvent restrictions to collect a number of powered            forged logs but has not succeeded in otherwise tampering
off, authorized chips. These chips then could be used                with the chip. Inspecting these logs in person would be
for whatever number of operations they are authorized                costly but likely worth it in high stakes situations.
for, even long after the overseer has stopped authorizing
that actor’s chips. E.g., if an actor’s chips were authorized    79. Stephan van Schaik et al., “SoK: SGX.Fail: How Stuff Get
every 24 hours, and their authorization was revoked at the           eXposed,” 2022, https://sgx.fail; Huang et al., “Aion At-
start of a 7-day training run, the training run could still be       tacks.”
completed if they had 7 times more chips in reserve than
were being used for the training run. However, due to how        80. Apple, “Apple Platform Security,” May 2022, 9–17, https://
expensive it would be to keep such reserve compute, this             help.apple.com/pdf/security/en_US/apple-platform-secu-
is unlikely to be a major problem. This problem also could           rity-guide.pdf.
be addressed simply by shortening the license reauthori-
81. AleksandarK, “NVIDIA Unlocks GPU System Processor
zation period.
(GSP) for Improved System Performance,” TechPowerUp,
March 12, 2023, https://www.techpowerup.com/291088/              sor,” August 2016, http://mista.nu/research/sep-paper.
nvidia-unlocks-gpu-system-processor-gsp-for-im-                  pdf; Jeremy Erickson and Misha Davidov, “Deciphering
proved-system-performance; NVIDIA, “NVIDIA Accel-                the Messages of Apple’s T2 Coprocessor,” Duo Security,
erated Linux Graphics Driver README and Installation             February 14, 2019, https://duo.com/labs/research/apple-
Guide,” February 2023, chap. 43, https://download.nvidia.        t2-xpc.
com/XFree86/Linux-x86_64/530.30.02/README/gsp.
html. The current version is code-named “Peregrine.”         91. As of 2023, publicly available jailbreaks only work on
Marko Mitic, “Systematically Securing the RISC-V -               iPhones released several years ago, and only if the user
Secure Foundation for Embedded Functionality,” https://          has not updated the software for over two years. It is
www.youtube.com/watch?v=l7i1kfHvWNI; Mike Heskin,                worth noting that not all methods to install unapproved
    “Ok so, Considering That: A) Nvidia Has Moved Away               apps require fully jailbreaking a device. For crowdsourced
from Falcon for Good, Replacing It with a RISC-V Based           collations of jailbreaks, see “iOS Jailbreaking,” Wikipedia,
Solution (‘Peregrine’); b) Nintendo No Longer Uses the           https://en.wikipedia.org/w/index.php?title=IOS_jail-
TSEC for Secure Boot on New Switch Units;,” Tweet,               breaking#By_device_and_OS; “Can I Jailbreak,” https://
Twitter, January 29, 2021, https://twitter.com/hexkyz/           canijailbreak.com/.
status/1355168275856982019.
92. NVIDIA retired the LHR feature in October 2022 by
82. “NVIDIA Confidential Computing,” NVIDIA, July 25,                disabling it in new driver versions (Michael Kan, “Nvidia
2023, https://www.nvidia.com/en-us/data-center/solu-             Confirms ‘LHR’ Mining Limiter for GPUs Has Been Elim-
tions/confidential-computing/.                                   inated,” PCMag, October 14, 2022, https://www.pcmag.
com/news/nvidia-confirms-lhr-mining-limiter-has-been-
83. For example, Intel’s CPUs rely on the Intel Management           eliminated-from-gpus). The feature became obsolete after
Engine (Rivka Gehler et al., “Intel® Converged Security          Ethereum moved to proof-of-stake and demand for GPUs
and Management Engine (Intel® CSME) Security Techni-             for mining purposes fell.
cal White Paper,” October 2022, https://www.intel.com/
content/dam/www/public/us/en/security-advisory/doc-          93. Matt Wuebbling, “GeForce Is Made for Gaming, CMP Is
uments/intel-csme-security-white-paper.pdf, and AMD’s            Made to Mine,” NVIDIA Blog, February 18, 2021, https://
Epyc server CPUs are equipped with the AMD Secure                blogs.nvidia.com/blog/2021/02/18/geforce-cmp/.
Processor (“AMD Secure Encrypted Virtualization (SEV),”
AMD, https://www.amd.com/en/developer/sev.html).             94. This claim is based on the following statement from
NVIDIA: “End users cannot remove the hash limiter from
84. “Capacity on Demand - IBM Documentation”; “Intel On              the driver. There is a secure handshake between the driv-
Demand.”                                                         er, the RTX 3060 silicon, and the BIOS (firmware) that
prevents removal of the hash rate limiter.” Jacob Ridley,
85. Among the most compute-intensive training runs, the vast         “Nvidia Says Its Cryptocurrency Mining Limiter ‘Cannot
majority of non-Google entries used NVIDIA chips. The            Be Hacked,’” PC Gamer, February 19, 2021, https://www.
Google entries use Google-designed TPU chips. Imple-             pcgamer.com/nvidia-ethereum-mining-limiter-can-
menting on-chip governance mechanisms on TPUs is less            not-be-hacked/.
urgent because Google only offers access to TPUs via their
own cloud services, and thus can implement governance        95. More precisely, it seems only the offending process was
mechanisms at the cloud service layer. Epoch, “Parameter,        throttled. Lolliedieb, How the 100% LHR unlocker works
Compute and Data Trends in Machine Learning,” https://           (lolMiner interview), interview by Seb Hezlo, May 12,
docs.google.com/spreadsheets/d/1AAIebjNsnJj_uKALH-               2022, https://www.youtube.com/watch?v=LgAr4Erm_4o.
bXNfn3_YsT6sHXtCU0q7OIPuc4/.
96. Michael Crider, “Nvidia’s Crypto-Crippling ‘Lite Hash
86. Apple, “Apple Platform Security,” 10–17.                         Rate’ GPU Tech Has Been Defeated,” PCWorld, May 9,
2022, https://www.pcworld.com/article/698962/nvidia-
87. Apple, “Apple Platform Security,” 29.                            rtx-cards-fully-unlocked-for-crypto-miners.html.
88. Apple, “Apple Announces iPhone 5s—The Most For-              97. Lolliedieb, How the 100% LHR unlocker works (lolMiner
ward-Thinking Smartphone in the World,” September 10,            interview).
2013, https://www.apple.com/newsroom/2013/09/10Ap-
ple-Announces-iPhone-5s-The-Most-Forward-Thinking-           98. For examples of some relevant questions to consider in
Smartphone-in-the-World/.                                        the context of state control, see Richard Danzig, “Tech-
nology Roulette: Managing Loss of Control as Many
89. ironPeak, “Crouching T2, Hidden Danger,” ironPeak, Oc-           Militaries Pursue Technological Superiority,” Center for a
tober 5, 2020, https://ironpeak.be/blog/crouching-t2-hid-        New American Security, 2018, app. 1.
den-danger/.
99. For example, an auditor could run tests on model weights
90. See, for example, Tarjei Mandt, Mathew Solnik, and               without having direct access to the encrypted weights, or
David Wang, “Demystifying the Secure Enclave Proces-             obtain proof about which training data was used to pro-
duce a set of model weights. See Confidential Computing            Aren’t Happy,” CNBC, December 27, 2017, https://www.
Consortium, “Confidential Computing”; Choi, Shavit, and            cnbc.com/2017/12/27/nvidia-limits-data-center-uses-for-
Duvenaud, “Tools for Verifying Neural Models’ Training             geforce-titan-gpus.html.
Data.”
108. “Learn About Volkswagen Violations,” EPA, September
100. Ms. Smith, “Now You, Too, Can Disable Intel ME ‘back-              27, 2022, https://www.epa.gov/vw/learn-about-volkswa-
door’ Thanks to the NSA,” CSO Online, August 29, 2017,             gen-violations.
https://www.csoonline.com/article/3220476/researchers-
say-now-you-too-can-disable-intel-me-backdoor-thanks-         109. Criminal organizations, although ostensibly openly
to-the-nsa.html.                                                   adversarial, are less likely to pose a significant threat in
this category. Only the most well-resourced and sophisti-
101. For example, a vulnerability in the Apple T2 security chip         cated actors, who often may be state-backed, would have
          (an earlier iteration of the Secure Enclave Processor)             the means and the motivation to engage in large-scale AI
allowed attackers with physical access to gain privileged          training or deployment that requires cutting-edge chips,
access to the device (ironPeak, “Crouching T2, Hidden              or to overcome sophisticated on-chip security mecha-
Danger”). The reference implementation of the widely               nisms.
used Trusted Platform Module 2.0 standard for security
modules also recently was found to have (patchable, likely    110. Since the 2022 export controls, technical thresholds for
unexploitable) firmware vulnerabilities (Francisco Falcon,         controlled chips have been updated to include a wider
          “Vulnerabilities in the TPM 2.0 Reference Implemen-                range of AI chips. “Implementation of Additional Export
tation Code,” Quarkslab’s blog, March 14, 2023, https://           Controls: Certain Advanced Computing Items; Supercom-
blog.quarkslab.com/vulnerabilities-in-the-tpm-20-refer-            puter and Semiconductor End Use; Updates and Correc-
ence-implementation-code.html). Many vulnerabilities               tions.” 88 Fed. Reg. 73458, October 25, 2023, https://www.
also have been discovered in the Intel Management En-              federalregister.gov/documents/2023/10/25/2023-23055/
gine (“Search Results - ‘Intel Management Engine,’” CVE,           implementation-of-additional-export-controls-cer-
https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=In-               tain-advanced-computing-items-supercomputer-and.
tel+Management+Engine).
111. This claim is contingent on the bandwidth threshold
102. Note that restricted access to information on the rest of          in the 2022 export controls being sufficient to severely
the chip would trade off against the module’s ability to           hamper large-scale supercomputing and AI training.
attest to that information.                                        Currently, chip performance in TOP/s can be scaled up in-
definitely, so long as inter-chip bandwidth remains below
103. Reinsch and Benson, “Digitizing Export Controls.”                  a threshold.
104. The assumption of physical access is made because on-         112. This report is focused on governing cutting-edge chips.
chip governance mechanisms are useful primarily in cases           However, chips lagging behind cutting edge may still have
where an untrusted actor will or may have physical access          significant misuse potential in the future, as they could
to the device. In other contexts, such as when a trusted           be used to run inference on near-frontier models, or train
cloud provider wants to enforce restrictions on their              smaller—but still dangerous—models. Indeed, the misuse
customers, the restrictions can be imposed at the software         potential of a given AI chip should be expected to grow
level. Hardware-level implementations of restrictions still        over time as algorithmic efficiency improves (Danny
can be somewhat useful due to being particularly difficult         Hernandez and Tom B. Brown, “Measuring the Algorith-
to circumvent, but they are not qualitatively superior to          mic Efficiency of Neural Networks,” arXiv, May 8, 2020,
software-level implementations.                                    https://doi.org/10.48550/arXiv.2005.04305; Ege Erdil
and Tamay Besiroglu, “Algorithmic Progress in Computer
105. This report borrows the terminology of covert adversar-            Vision” [arXiv, August 24, 2023], https://doi.org/10.48550/
ies from Yonatan Aumann and Yehuda Lindell, “Security              arXiv.2212.05153) and more powerful models become
Against Covert Adversaries: Efficient Protocols for Real-          widely available. Therefore, to continue to prevent misuse
istic Adversaries,” in Theory of Cryptography, vol. 4392,          effectively, it may be desirable to lower, rather than raise,
Lecture Notes in Computer Science (Springer, 2007),                the performance thresholds used to determine what kind
137–56, https://doi.org/10.1007/978-3-540-70936-7_8.               of regulations a given chip is subject to.
106. “License for Customer Use of NVIDIA GeForce Software,”        113. “Implementation of Additional Export Controls: Cer-
NVIDIA, https://www.nvidia.com/en-us/drivers/ge-                    tain Advanced Computing Items; Supercomputer and
force-license/.                                                     Semiconductor End Use; Updates and Corrections,”
Supplementary information section D.2, 88 Fed. Reg.
107. Katyanna Quach, “Nvidia: Using Cheap GeForce, Titan                 73458, October 25, 2023, https://www.federalregister.
GPUs in Servers? Haha, Nope!,” The Register, January                gov/d/2023-23055/p-350.
3, 2018, https://www.theregister.com/2018/01/03/nvid-
ia_server_gpus/; Jordan Novet, “Nvidia Made a Change          114. Discussions with chip industry experts (including at
to How It Lets Developers Use Its Chips, and Some Folks            NVIDIA), 2023.
115. These numbers are based on estimates from current and            tems,” https://www.mrcy.com/products/rugged-serv-
former employees at major chip companies.                        ers-and-subsystems.
116. Fist and Grunewald, “Preventing AI Chip Smuggling to         125. Michael Bartock, Murugiah Souppaya, Jerry Wheeler,
China.”                                                           Timothy Knoll, Muthukkumaran Ramalingam, and Stefa-
no Righi, “Hardware-Enabled Security: Hardware-Based
117. Computer Security Division, Information Technology                Confidential Computing,” National Institute of Stan-
Laboratory, “Cryptographic Module Validation Program              dards and Technology, February 23, 2023, https://doi.
     | CSRC | CSRC.” CSRC | NIST, October 11, 2016, https://           org/10.6028/NIST.IR.8320D.ipd.
csrc.nist.gov/Projects/Cryptographic-Module-Valida-
tion-Program; Michael Bartock, Murugiah Souppaya,            126. “DARPA Finding Exploits to Thwart Tampering (FETT)
Jerry Wheeler, Timothy Knoll, Muthukkumaran Ramal-                Bug Bounty Capture-the-Flag Qualifier (Archived),”
ingam, and Stefano Righi, “Hardware-Enabled Security:             https://www.darpa.mil/news-events/darpa-finding-ex-
Hardware-Based Confidential Computing,” National                  ploits-to-thwart-tampering.
Institute of Standards and Technology, February 23, 2023,
https://doi.org/10.6028/NIST.IR.8320D.ipd.                   127. Saif M. Khan, “Securing Semiconductor Supply Chains,”
Center for Security and Emerging Technology, January
118. Willy Chertmanm, “Creating Advanced Market Commit-                2021, https://doi.org/10.51593/20190017; Gregory C. Allen,
ments and Prizes for Pandemic Preparedness,” Federation           “Choking off China’s Access to the Future of AI,” Center
of American Scientists, https://fas.org/publication/creat-        for Strategic & International Studies, October 11, 2022,
ing-advanced-market-commitments-and-prizes-for-pan-               https://www.csis.org/analysis/choking-chinas-access-fu-
demic-preparedness/.                                              ture-ai.
119. “Implementation of Additional Export Controls: Cer-          128. For an overview of how such cooperation could fit into
tain Advanced Computing Items; Supercomputer and                  a broader transatlantic technology strategy, see: Carisa
Semiconductor End Use; Updates and Corrections,”                  Nietsche, Emily Jin, Hannah Kelley, Emily Kilcrease,
Supplementary information section D.2, 88 Fed. Reg.               Megan Lamberth, Martijn Rasser and Alexandra Seymour,
73458, October 25, 2023, https://www.federalregister.             “Lighting the Path,” Center for a New American Security,
gov/d/2023-23055/p-350.                                           August 30, 2022, https://www.cnas.org/publications/re-
ports/lighting-the-path.
120. Stephen Nellis, Jane Lee, and Jane Lee, “U.S. Officials
Order Nvidia to Halt Sales of Top AI Chips to China,”        129. Khan and Mann, “AI Chips.”
Reuters, September 1, 2022, sec. Technology, https://
www.reuters.com/technology/nvidia-says-us-has-im-            130. Nathan Benaich and Nathan Hogarth, “Compute Index,”
posed-new-license-requirement-future-exports-chi-                 State of AI Report, June 2, 2023, https://www.stateof.ai/
na-2022-08-31/.                                                   compute; Dylan Patel, “How Nvidia’s CUDA Monopoly In
Machine Learning Is Breaking - OpenAI Triton And Py-
121. NVIDIA Newsroom. “NVIDIA Announces Financial                      Torch 2.0,” SemiAnalysis, January 16, 2023, https://www.
Results for Second Quarter Fiscal 2024,” http://nvidian-          semianalysis.com/p/nvidiaopenaitritonpytorch.
ews.nvidia.com/news/nvidia-announces-financial-re-
sults-for-second-quarter-fiscal-2024.                        131. “IPU Processors,” Graphcore, https://www.graphcore.ai/
products/ipu.
122. The Semiconductor Research Corporation funds academ-
ic and public-private research, and lists several hardware   132. Epoch, “Parameter, Compute and Data Trends in Machine
security-related projects in its 2023 call for research.          Learning,” https://docs.google.com/spreadsheets/d/1AA-
     “Semiconductor Research Corporation—SRC,” https://                IebjNsnJj_uKALHbXNfn3_YsT6sHXtCU0q7OIPuc4/.
www.src.org/. The DARPA Microsystems Technology
Office also supports a range of projects related to hard-    133. Epoch, “Parameter, Compute and Data Trends in Machine
ware security: “Microsystems Technology Office (MTO),”            Learning.”
https://www.darpa.mil/about-us/offices/mto.
134. Discussion with former NVIDIA employee, 2023.
123. “Department of Computer Science and Technology –
135. Tim Dettmers, “Which GPU(s) to Get for Deep Learn-
CHERI: The Arm Morello Board,” https://www.cl.cam.
ing: My Experience and Advice for Using GPUs in
ac.uk/research/security/ctsrd/cheri/cheri-morello.html;
Deep Learning,” January 30, 2023, https://timdettmers.
     “Supply Chain Assurance | NCCoE,” National Institute of
com/2023/01/30/which-gpu-for-deep-learning/.
Standards and Technology, https://www.nccoe.nist.gov/
supply-chain-assurance.                                      136. More specifically, a rule like this might look like “any
chips above a particular theoretical FLOP/s performance
124. See, for example: “GPU Cards | Curtiss-Wright De-
limit needs to either have an acceptable mechanism for
fense Solutions,” https://www.curtisswrightds.com/
limiting usefulness for AI training be registered and regu-
products/computing/gpu; “Rugged Servers and Subsys-
lated as an AI chip.”
137. “NVIDIA DGX A100,” NVIDIA, https://www.nvidia.com/                  146. Given the chips in question would be in data centers, very
en-us/data-center/dgx-a100/.                                             little useful information (besides evidence of physical
attacks) would be leaked by a video feed of a server rack,
138. “NVLink & NVSwitch,” NVIDIA, https://www.nvidia.                         so this seems unlikely to create privacy and intellectual
com/en-us/data-center/nvlink/.                                           property issues.
139. “Product - System,” Cerebras, https://www.cerebras.net/             147. Kyle Rankin, “Anti-Interdiction on The Librem 5 USA,”
product-system/.                                                         Purism, July 20, 2022, https://puri.sm/posts/anti-inter-
diction-on-the-librem-5-usa/.
140. Marko Mitic, “Systematically Securing the RISC-V -
Secure Foundation for Embedded Functionality,” https://             148. Alexander Enders, “Safeguarding the Future: IAEA Looks
www.youtube.com/watch?v=l7i1kfHvWNI.                                     for Improved Solutions for Passive Loop Seals for Nuclear
Verification,” IAEA, July 1, 2020, https://www.iaea.org/
141. “Secure Enclave,” Apple Support, May 17, 2021,                           newscenter/news/safeguarding-the-future-iaea-looks-
https://support.apple.com/guide/security/secure-en-                      for-improved-solutions-for-passive-loop-seals-for-nucle-
clave-sec59b0b31ff/web.                                                  ar-verification.
142. Gerwin Klein et al., “seL4: Formal Verification of an OS            149. Roger G. Johnston, Anthony RE Garcia, and Adam N.
Kernel,” in Proceedings of the ACM SIGOPS 22nd Sym-                      Pacheco, “Efficacy of Tamper-Indicating Devices,” Journal
posium on Operating Systems Principles (ACM 22nd Sym-                    of Homeland Security, April 16 (2002). Unfortunately for
posium on Operating Systems Principles, ACM, 2009),                      the purposes of this report, Johnston et al. did not disclose
207–20, https://doi.org/10.1145/1629575.1629596.                         exactly which seals they tested or how their attacks
worked. It therefore is difficult to say how concerning
143. Adam Zabrocki and Alex Tereshkin, “Exploitation in the
their findings truly are.
Era of Formal Verification,” https://www.youtube.com/
watch?v=TcIaZ9LW1WE.                                                150. “Security Requirements for Cryptographic Modules,” Na-
tional Institute for Standards and Technology, May 2001,
144. Formally verified software can have exploitable vulnera-
tbl. 2, https://doi.org/10.6028/NIST.FIPS.140-2.
bilities if: There are flaws, e.g., logical errors in the defini-
tion of intended behavior; Vulnerabilities are introduced           151. Jakub Breier and Xiaolu Hou, “How Practical Are Fault
in the process of compiling the formally verified source                 Injection Attacks, Really?,” IEEE Access 10 (2022):
into a binary; The model of the hardware that the verifi-                113122–30, https://doi.org/10.1109/ACCESS.2022.3217212.
cation system is working with is incomplete. See Zabroc-
ki and Tereshkin, “Exploitation in the Era of Formal                152. Spensky et al., “Glitching Demystified.” Even detection of
Verification.” at 15:12. Ideally, code for on-chip governance            fault injection attacks with moderate probability per chip
mechanisms also would account for risks from fault-in-                   would be sufficient to achieve statistical confidence that
jection attacks (where a chip is induced to misbehave                    large-scale efforts will be caught if sufficient numbers of
by, for example, manipulation of its power supply, or                    chips are inspected.
electromagnetic pulses) (Chad Spensky et al., “Glitching
Demystified: Analyzing Control-Flow-Based Glitching                 153. Shavit, “What Does It Take to Catch a Chinchilla?”
Attacks and Defenses,” in 2021 51st Annual IEEE/IFIP
International Conference on Dependable Systems and                  154. Fist and Grunewald, “Preventing AI Chip Smuggling to
Networks (DSN), 2021, 400–412, https://doi.org/10.1109/                  China.”
DSN48987.2021.00051). Formally verified languages such
as SPARK can be extended to have relatively deep aware-             155. Vincent Immler et al., “Secure Physical Enclosures from
ness of the hardware, and this can allow them to be used                 Covers with Tamper-Resistance,” IACR Transactions on
to avoid hardware-level bugs. But this requires substantial              Cryptographic Hardware and Embedded Systems, 2019,
additional work, especially on custom hardware (Zabroc-                  51–96, https://doi.org/10.13154/tches.v2019.i1.51-96. PUFs
ki and Tereshkin, “Exploitation in the Era of Formal                     are objects that rely on their unique physical charac-
Verification.” at 13:48). On the other hand, exploiting such             teristics to produce particular responses for particular
hardware-level bugs also requires the attacker to have a                 inputs. These characteristics can be designed to degrade
deep understanding of the hardware, so they are relatively               if tampered with. In this case, having tested a range of
difficult to exploit.                                                    input-output pairs before a PUF is sold, a verifier can then
confirm whether a PUF has been tampered with by seeing
145. Ben Garfinkel and Allan Dafoe, “How Does the Of-                         if a PUF still is generating the appropriate output for a
fense-Defense Balance Scale?” Journal of Strategic                       given input.
Studies 42, no. 6 (September 19, 2019): 736–63, https://doi.
org/10.1080/01402390.2019.1631810; Andrew Lohn and                  156. Carlos Moreno, Sebastian Fischmeister, and Philippe Vibi-
Krystal Jackson, “Will AI Make Cyber Swords or Shields?”                 en, “A method and apparatus for detection of counterfeit
Center for Security and Emerging Technology, August                      parts, compromised or tampered components or devices,
2022, https://doi.org/10.51593/2022CA002.                                tampered systems such as local communication networks,
and for secure identification of components,” World
Intellectual Property Organization WO2021056101A1,                   compromises of lower level certificate authorities are not
filed September 23, 2020, and issued April 1, 2021, https://         unheard of (Dan Goodin, “Stuxnet-Style Code Signing Is
patents.google.com/patent/WO2021056101A1/en.                         More Widespread than Anyone Thought,” Ars Technica,
November 3, 2017, https://arstechnica.com/informa-
157. Some security experts may object to the term “tam-                  tion-technology/2017/11/evasive-code-signed-malware-
per-proof,” preferring “tamper-resistant” as a more                 flourished-before-stuxnet-and-still-does/).
realistically achievable term. While it is true that “tam-
per-proof” is used usually in misleading ways, its usage in     166. Tom Simonite, “To Keep Passwords Safe from Hack-
this report is intended to convey a higher standard than             ers, Just Break Them into Bits,” MIT Technology Re-
what “tamper-resistant” usually evokes.                              view, October 9, 2012, https://www.technologyreview.
com/2012/10/09/183378/to-keep-passwords-safe-from-
158. Destroying the core functionality is ideal for two reasons:          hackers-just-break-them-into-bits/; “Multi-Party Thresh-
Firstly, once the chip knows it is in the hands of an adver-         old Cryptography | CSRC,” National Institute for Stan-
sary that is actively attempting to tamper with the chip, it         dards and Technology, August 18, 2023, https://csrc.nist.
is safest to simply destroy the chip rather than allow the           gov/projects/threshold-cryptography.
attacker more opportunities to circumvent or disable the
anti-tampering functionality. Secondly and more gener-          167. “Trusted & Assured Microelectronics – DoD Research &
ally: The strongest response to tampering efforts creates            Engineering, OUSD(R&E),” https://www.cto.mil/tam/.
the strongest deterrent. However, if the tamper-detection
mechanism in use is very sensitive and produces false
positives at non-trivial rates, it likely would be preferable
for the chip to lock itself until it receives some unusual-
ly strong form of re-authorization. The overseer could
make this re-authorization conditional on, e.g., a physical
inspection of the facility to ensure no foul play.
159. “Security Requirements for Cryptographic Modules,” Na-
tional Institute for Standards and Technology, May 2001,
tbl. 2, https://doi.org/10.6028/NIST.FIPS.140-2.
160. Johannes Obermaier and Vincent Immler, “The Past,
Present, and Future of Physical Security Enclosures:
From Battery-Backed Monitoring to PUF-Based Inherent
Security and Beyond,” Journal of Hardware and Sys-
tems Security 2, no. 4 (December 2018): 2–4, https://doi.
org/10.1007/s41635-018-0045-2.
161. Obermaier and Immler, “The Past, Present, and Future of
Physical Security Enclosures.”
162. More specifically, no publicly known cases where a FIPS
140-2 level 4 device has been compromised. Vincent
Immler (Assistant Professor of Electrical and Computer
Engineering, Oregon State University), in discussion with
the author, April 19, 2023.
163. For an overview of battery-backed solutions, see Obermai-
er and Immler, “The Past, Present, and Future of Physical
Security Enclosures.”
164. Lily Hay Newman, “The Lapsus$ Hacking Group Is Off
to a Chaotic Start,” Wired, March 15, 2022, https://www.
wired.com/story/lapsus-hacking-group-extortion-nvid-
ia-samsung/.
165. The DigiNotar case is a possible example, but it appears
that the root keys were never actually extracted. Rather,
attackers were able to temporarily access DigiNotar’s sys-
tems to generate unauthorized certificates (Fox-IT, “Black
Tulip: Report of the Investigation into the DigiNotar
Certificate Authority Breach,” August 13, 2012.). However,
About the Center for a New
American Security                                                           CNAS Editorial
DIRECTOR OF STUDIES
The mission of the Center for a New American Security (CNAS) is             Paul Scharre
to develop strong, pragmatic and principled national security and
defense policies. Building on the expertise and experience of its           PUBLICATIONS & EDITORIAL DIRECTOR
staff and advisors, CNAS engages policymakers, experts and the              Maura McCarthy
public with innovative, fact-based research, ideas and analysis to
CREATIVE DIRECTOR
shape and elevate the national security debate. A key part of our
Melody Cook
mission is to inform and prepare the national security leaders of
today and tomorrow.                                                         DESIGNER
Rin Rothback
CNAS is located in Washington, DC, and was established in February
2007 by co-founders Kurt M. Campbell and Michèle A. Flournoy.
CNAS is a 501(c)3 tax-exempt nonprofit organization. Its research is
Cover Art & Production Notes
independent and non-partisan.
COVER ILLUSTRATION
©2024 Center for a New American Security                                    Melody Cook
All rights reserved.
COVER PHOTOS
National Archives; Getty Images.
PRINTER
CSI Printing & Graphics
Printed on an HP Indigo Digital Press
Center for a New American Security   CEO                                    Contact Us
1152 15th Street, NW                 Richard Fontaine                       202.457.9400
Suite 950
Washington, DC 20005                 Executive Vice President & Director    info@cnas.org
of Studies
CNAS.org                             Paul Scharre
@CNASdc                              Senior Vice President of Development
Anna Saito Carson
