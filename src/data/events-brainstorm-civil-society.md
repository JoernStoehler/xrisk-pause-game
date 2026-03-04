# Events Brainstorm — Civil Society, Public Opinion, and Communication

Developer-facing document. Event concepts for the civil society / public opinion cluster.
Follows conventions from `events-draft-v2.md`.

---

## Events

#### #civil--supreme-court-challenge
**Type:** crisis
**Entities:** civil-liberties, isia-enforcement, isia-political
**Topics:** #surveillance, #legal-challenge, #public-opinion
**Situation:** The American Civil Liberties Union brings a landmark case to the Supreme Court arguing that ISIA chip-tracking firmware on consumer devices violates the Fourth Amendment. They have strong precedent — the case is legally serious, not frivolous. Two former ISIA attorneys filed amicus briefs supporting the challenge. If the court rules against the agency, the entire consumer-hardware monitoring program collapses in the US. If the agency fights and wins, it validates the surveillance — but the liberty cluster grows by 8 points in polling and three European courts announce similar reviews.

The deeper problem: the court challenge is legitimate. The agency IS conducting mass surveillance. The legal question is whether existential risk justifies it. The judge doesn't understand ASI risk and has no framework to evaluate it.
**Options:**
- Left: Fight the case — agency's best lawyers, public defense of surveillance as existential necessity (wins the battle, loses public opinion; liberty cluster grows)
- Right: Pre-emptively narrow the program before ruling — voluntarily restrict consumer monitoring to declared facilities only (preserves legitimacy, reopens consumer hardware blind spot)
- Down (greyed out if pol low): Offer the court a classified national-security briefing on intercepted threats — unprecedented, may sway the judges, but sets precedent for judicial oversight of operations
**Teaches:** The agency operates within legal systems that don't have a category for existential risk. Courts apply normal constitutional standards to abnormal situations. Civil liberties arguments against the agency are often legally correct — the question is whether legal correctness should yield to survival. (E-50, public-cluster-liberty)
**Refs:** → #mon--surveillance-expand (what triggered this), coverage gap #7
**Bars:** pol ↓ if fought aggressively, int ↓ if program narrowed

---

#### #civil--deepfake-isia-director
**Type:** crisis
**Entities:** journalist, isia-comms, public-cluster-skeptic
**Topics:** #narrative, #public-opinion, #ai-diffusion
**Situation:** A deepfake video of the DG surfaces on social media — convincing footage of the player character saying "I know ASI isn't real but we need the funding." Tens of millions of views before takedown. The agency's AI detection tools confirm it's synthetic, but the damage is done: skeptic cluster sees it as confirmation, fear cluster worries the agency's been lying, indifferent cluster now pays attention for the wrong reasons.

The meta-problem: this is a non-ASI AI harm (E-53) that directly undermines the agency tasked with preventing ASI. The very technology the pause allows (sub-threshold AI) is being used to destroy the political support the pause depends on. And the agency can't easily prove anything anymore — if AI can fabricate video of the DG, it can fabricate anything, including the agency's evidence of threats.
**Options:**
- Left: Aggressive public response — press conference, technical proof of deepfake, demand platform takedowns (looks defensive; "they would say it's fake")
- Right: Ignore it — responding amplifies it, trust the public to be skeptical of video in a deepfake era (principled, but the video keeps spreading)
- Down (greyed out if int high): Trace the deepfake to its creator — if linked to a state actor or rogue lab, turn it into evidence of hostile intent
**Teaches:** E-53 (non-ASI harms shift opinion), E-54 (incorrect conclusions from AI incidents). Deepfakes corrode the epistemic commons — they don't just create false beliefs, they destroy the ability to establish true ones. The agency's warnings about real threats become unfalsifiable in a world where all video is suspect.
**Refs:** → #pol--success-narrative (eroding trust), → #pol--corp-lobbying (who benefits?)
**Bars:** pol ↓↓ (trust damaged regardless of response)

---

#### #civil--labor-union-split
**Type:** crisis
**Entities:** public-cluster-econ, isia-political, corp-lobby
**Topics:** #economic-pressure, #public-opinion, #lobbying, #protest
**Situation:** The International Federation of Metalworkers (28M members across treaty nations) is fracturing over the pause. The manufacturing wing wants the pause lifted — AI automation restrictions cost them bargaining leverage because non-treaty nations automate freely. The logistics wing wants the pause strengthened — autonomous systems already eliminated 4M of their jobs using sub-threshold AI, and they want tighter restrictions. Both wings are organizing politically, but in opposite directions.

The agency faces a union movement that simultaneously demands MORE and LESS regulation. Both sides have legitimate grievances. The manufacturing wing is being courted by corporate lobbyists ("we're on the same side — lift the pause"). The logistics wing is being courted by fear-cluster activists ("AI is destroying your lives"). Neither side understands ASI risk — they're fighting about jobs.
**Options:**
- Left: Side with logistics wing — propose tighter sub-threshold restrictions (gains one labor faction, loses the other AND corporate political allies, constrains economy)
- Right: Stay out of labor politics — reaffirm ASI-only mandate (both wings conclude the agency doesn't care about workers, econ cluster grows)
**Teaches:** E-50 (different clusters use different channels — unions lobby AND protest), E-57 (lived experience shapes opinion more than expert arguments), E-31 (economic mechanisms operate differently on different people). Labor unions are political actors whose position on the pause depends entirely on how AI affects their specific industry.
**Refs:** → #pol--unemployment-crisis (broader context), → #pol--election-year (unions influence elections)
**Bars:** pol ↓ either way (lose support from one constituency)

---

#### #civil--megachurch-sermon
**Type:** consequence
**Entities:** public-cluster-fear, public-cluster-skeptic, isia-comms
**Topics:** #public-opinion, #narrative
**Situation:** Pastor Elijah Morrow of a 40,000-member megachurch in Houston delivers a viral sermon: "Building a mind greater than God's is the sin of Babel." The sermon gets 90M views. Within weeks, evangelical organizations across the US, Brazil, and Nigeria adopt anti-ASI positions — but framed entirely in religious terms. "AI is hubris." "Only God creates intelligence."

This is a massive opinion-cluster event: millions of people who were in the indifferent cluster (E-29: "AI is not a topic I think about") suddenly become strong pause supporters — but for theological reasons, not risk-assessment reasons. They support the pause but oppose the agency's scientific mission (safety research, cognitive enhancement, uploading). They want the pause to be permanent — not a bridge to safe ASI, but a moral prohibition.

The agency's comms team sees opportunity and danger simultaneously. These new allies could triple political support for the pause. But they'd also block safety research and demand the agency justify itself in religious rather than scientific terms.
**Options:**
- Left: Embrace the coalition — the pause needs allies regardless of their reasoning (massive pol boost, but safety research becomes politically harder to defend)
- Right: Maintain scientific framing — politely distance from religious arguments (honest, but alienates millions of new supporters who were just activated from indifference)
**Teaches:** E-27/29 (opinion clusters), E-43 (cluster fractions shift in response to events). People can support the right policy for the wrong reasons, and the wrong reasons constrain what you can do next. The agency can't control WHY people support the pause — only whether it has enough support to survive.
**Refs:** → #era--generational-shift (religious demographics shift too), → #research--biotech-proposal (religious opposition to enhancement)
**Bars:** pol ↑↑ if embraced (massive new coalition), saf ↓ if embraced (research constrained by religious allies)

---

#### #civil--ai-winter-narrative
**Type:** report
**Entities:** public-cluster-skeptic, journalist, isia-comms
**Topics:** #narrative, #public-opinion, #success-trap
**Situation:** A best-selling book by a former Stanford CS professor — "The Great Overreaction: How AI Hysteria Cost the World a Decade" — argues that ASI was always physically impossible and the pause was an expensive hoax driven by paranoid effective altruists and power-hungry bureaucrats. The book is well-written, persuasive to non-technical readers, and factually wrong in ways that require deep technical knowledge to rebut.

The book is burning through the skeptic and indifferent clusters. Six talk-show appearances this month. A documentary in pre-production. The author isn't malicious — they're a legitimate computer scientist who genuinely believes ASI is impossible. They have credentials the agency's spokespeople lack. The agency's chief scientist can rebut the technical arguments, but only in ways the audience won't understand.

Polling shift: "ASI threat was exaggerated" up 11 points in key demographics since publication.
**Options:** None — briefing. But this shifts the political landscape: future budget fights and elections become harder.
**Teaches:** E-48 (knowledge of AI risk unevenly distributed), E-52 (success indistinguishable from "threat was never real"), E-35 (abstract risk vs. visible cost). The agency's opponents aren't all corporate shills or ideologues — some are sincere, credentialed experts who are simply wrong about the technical question. Rebutting them requires communicating concepts that most people cannot evaluate.
**Refs:** → #pol--success-trap (the book weaponizes the success problem), → #pol--success-narrative (shifting polls)
**Bars:** pol ↓ (political landscape shifts against agency)

---

#### #civil--celebrity-endorsement-backfire
**Type:** consequence
**Entities:** public-cluster-indiff, public-cluster-liberty, isia-comms
**Topics:** #public-opinion, #narrative
**Situation:** A globally popular musician (300M social followers) makes the pause their personal cause — announces a "Pause World Tour," donates $50M to pro-pause advocacy, and records a music video depicting ASI apocalypse. The indifferent cluster is suddenly paying attention. Support for the pause jumps 9 points overnight.

Three weeks later, the musician is arrested for tax evasion and domestic violence. The press narrative pivots instantly: "the celebrity who supported the AI pause is a fraud." Anti-pause commentators connect the two: "the same people who believed the ASI hoax believed this celebrity was a saint." The skeptic cluster uses it as proof that pause supporters are gullible. Support drops 14 points — 5 points BELOW where it started.

The agency had no involvement with the celebrity. It neither sought nor endorsed the support. But in the public mind, the association is permanent.
**Options:**
- Left: Proactive distancing — issue statement that the agency's mission is independent of any individual (looks reactive, draws more attention to the link)
- Right: Say nothing — let the news cycle move on (the association lingers)
**Teaches:** E-43 (opinion clusters shift in response to events — including events totally unrelated to AI), E-50 (public opinion channels are unpredictable). The agency's political support depends on factors it cannot control and often cannot even anticipate. Celebrity association is a two-edged sword with no handle.
**Refs:** → #pol--success-narrative (opinion tracking), → #pol--election-year (shifted support affects elections)
**Bars:** pol ↓ (net negative after the scandal, despite the initial boost)

---

#### #civil--protest-to-legislator-pipeline
**Type:** crisis
**Entities:** public-cluster-liberty, public-cluster-econ, gov-treaty-major
**Topics:** #protest, #public-opinion, #budget, #election
**Situation:** Street protests against ISIA surveillance in Berlin, London, and Washington have been growing for months — mostly the liberty cluster, some econ cluster joining. Now the protests have crossed a threshold: three parliamentary caucuses in Europe and a bipartisan group in the US Senate have introduced coordinated legislation to strip the agency of domestic surveillance authority. The bills have real support — 40%+ approval in polls. Media framing: "the people vs. the surveillance state."

This is the mechanism E-50 describes: opinion cluster → protest → media → legislator → vote. The agency is watching its mandate get dismantled through legitimate democratic processes. The surveillance powers being challenged are genuinely important for enforcement. The people challenging them have genuinely legitimate civil liberties concerns. Democracy is functioning correctly — and it might kill everyone.
**Options:**
- Left: Lobby against the bills — spend political capital fighting legislation (preserves surveillance, confirms "surveillance state" narrative, costs pol)
- Right: Propose compromise — agency offers independent oversight board with civil-liberties mandate (loses some operational freedom, gains legitimacy)
- Down (greyed out if int high): Declassify a recent surveillance-enabled interception to demonstrate operational necessity (burns methods, but shows concrete value)
**Teaches:** E-50 (concrete channels from opinion to policy: protest → media → legislator → vote), public-cluster-liberty. Democratic accountability and existential risk management are genuinely in tension — this isn't a PR problem, it's a structural problem. The agency cannot survive without democratic legitimacy, and it cannot do its job within the constraints democracy imposes.
**Refs:** → #civil--supreme-court-challenge (legal track of same conflict), → #mon--surveillance-expand (what triggered the backlash)
**Bars:** int ↓ if surveillance stripped, pol ↓ if fought aggressively

---

#### #civil--autonomous-vehicle-massacre
**Type:** crisis
**Entities:** public-cluster-fear, public-cluster-skeptic, isia-comms, journalist
**Topics:** #public-opinion, #narrative, #ai-diffusion
**Situation:** An autonomous vehicle fleet in Seoul malfunctions catastrophically — 23 dead, 140 injured over 45 minutes before manual override is achieved. The AI system was operating well within treaty limits. Investigation shows a conventional software bug, not an AI capability issue. But the public doesn't parse this distinction.

Three contradictory opinion-cluster reactions happen simultaneously:
1. Fear cluster: "AI IS dangerous — strengthen the pause, ban autonomous vehicles too!"
2. Skeptic cluster: "The pause didn't prevent this, so what's the point? 23 people died DESPITE ISIA oversight."
3. Econ cluster: "If the pause can't even keep cars safe, it's all theater."

All three reactions are based on the same incorrect inference: that this non-ASI incident says something about ASI risk. It doesn't. But explaining that requires technical distinctions most people can't make and most journalists won't communicate accurately. The fear cluster's reaction is politically useful but factually wrong. The skeptic cluster's reaction is politically dangerous but logically understandable.
**Options:**
- Left: Correct the record — press conference explaining this was a software bug, not an AI capability issue (honest, costs political opportunity, skeptics say "they're deflecting")
- Right: Lean into the fear — "this shows why AI oversight matters" without specifying that this is unrelated to ASI (dishonest but politically useful, attaches mission to misunderstanding)
**Teaches:** E-53 (non-ASI harms shift opinion in unpredictable directions), E-54 (incorrect conclusions from AI incidents require rare technical expertise to correct), E-35 (visible harm vs. invisible risk). The public forms opinions about AI based on what happens to them — not on risk assessments they can't evaluate. The agency must either accept being associated with all AI outcomes or risk irrelevance by insisting on distinctions nobody understands.
**Refs:** → #pol--protest-that-helps (similar dynamic, different incident), → #pol--unemployment-crisis (AI harm creates political pressure)
**Bars:** pol ↑ if fear exploited (temporarily), pol ↓ if corrected (lose the moment)

---

#### #civil--academic-freedom-revolt
**Type:** crisis
**Entities:** researcher-safety, researcher-capability, civil-liberties, isia-research-ctrl
**Topics:** #research-approval, #publication, #public-opinion, #narrative
**Situation:** 1,200 university researchers across 40 countries sign an open letter: "The Right to Think: Against the Criminalization of Knowledge." They argue ISIA research restrictions violate academic freedom, that classification of safety research is counterproductive, and that the review process delays critical work by 6-18 months. Signatories include three Nobel laureates and the heads of six national science academies.

The letter is legally and ethically serious — academic freedom IS a fundamental value, and the agency IS restricting it. Many signatories are safety researchers who support the pause but oppose the agency's implementation. Others are capability researchers who want restrictions lifted for self-interested reasons. The letter conflates both groups, and the media can't tell them apart.

A prominent signatory goes on television: "The agency has made it illegal to understand the very technology we need to make safe. This is like banning oncology research because cancer is dangerous."
**Options:**
- Left: Defend restrictions — publish detailed response explaining why classification is necessary (bureaucratic, loses the narrative to a punchier opponent)
- Right: Reform the process — accelerate review timelines and narrow classification scope (operationally costly, but defuses legitimate criticism)
- Down (greyed out if saf high): Invite letter organizers to co-design new review process (slow, but converts opponents into stakeholders)
**Teaches:** B-25a (review bottleneck), B-7 (different research types need different enforcement). Academic freedom arguments against research restrictions are strong because they're partly right — the agency's restrictions DO slow safety research. The tension isn't "freedom vs. security" but "how much safety delay is worth how much security?"
**Refs:** → #research--born-dangerous-pub (what happens when research is unrestricted), → #research--approval-dilemma (the review process being criticized)
**Bars:** saf ↓ if restrictions maintained (research slowed by controversy), pol ↓ if restrictions maintained (lose academic community), alg ↑ if restrictions loosened (more gets published)

---

#### #civil--low-salience-campaign
**Type:** preparation
**Entities:** isia-comms, public-cluster-indiff
**Topics:** #public-opinion, #narrative
**Situation:** Internal strategy meeting. Comms director presents data: 38% of the population in treaty nations is in the indifferent cluster — "AI is not a topic I think about." These people don't oppose the pause; they don't think about it at all. They vote on other issues. They're invisible in polls about AI because they skip those questions. But they VOTE, and politicians know their AI-indifferent constituents won't punish them for cutting the agency's budget.

The comms team proposes three strategies to reach the indifferent cluster:
1. **Scare campaign:** Graphic visualization of ASI extinction scenarios. Gets attention fast but risks being dismissed as fearmongering, and fear-based messaging has diminishing returns (the public habituates).
2. **Personal relevance:** Frame ASI risk through things people already care about — their children's survival, their retirement savings, their community's future. Slower but more durable.
3. **Do nothing:** The indifferent cluster has no reason to oppose the agency. Let sleeping dogs lie — activation risks creating opinions the agency can't control.

The third option is genuinely reasonable: activating the indifferent cluster might produce MORE skeptics than supporters, because the agency can't control what conclusions newly-attentive people reach.
**Options:**
- Left: Launch personal-relevance campaign — $200M, 18-month rollout (expensive, uncertain, could backfire)
- Right: Accept indifference — redirect comms budget to lobbying legislators directly (cheaper, faster, but the democratic foundation erodes quietly)
**Teaches:** E-47 (political salience varies enormously), E-48 (knowledge of AI risk unevenly distributed), E-35 (communicating invisible risk is structurally hard). The indifferent cluster is the biggest reservoir of potential support AND potential opposition. Activating them is a gamble because the agency can't control what they'll conclude once they start paying attention.
**Refs:** → #pol--success-narrative (the indifferent cluster grows when nothing happens), → #era--generational-shift (younger cohorts more likely to be indifferent)
**Bars:** pol ↑ if campaign works (uncertain), pol ↓ if campaign backfires or budget spent with no return

---

#### #civil--deepfake-election-interference
**Type:** crisis
**Entities:** journalist, gov-treaty-major, public-cluster-skeptic, isia-comms
**Topics:** #ai-diffusion, #election, #narrative, #public-opinion
**Situation:** Three weeks before a critical election in a major treaty nation, AI-generated deepfakes flood social media: fabricated recordings of the pro-pause candidate saying contradictory things, fake news articles from real outlet mastheads, synthetic phone calls to voters from "campaign volunteers" who don't exist. All produced by sub-threshold AI systems — perfectly legal under the treaty.

The pro-pause candidate's polling drops 6 points. The anti-pause candidate's campaign denies involvement but benefits. The ISIA's AI forensics team can identify the deepfakes as synthetic — but there are thousands, and debunking at scale is impossible.

The devastating irony: the technology the treaty permits is being used to destroy the political support the treaty requires. And if the agency intervenes in a domestic election — even to defend truth — it confirms the "surveillance state" narrative.
**Options:**
- Left: Deploy ISIA forensics team to assist the national election commission — provide deepfake detection tools (unprecedented intervention in domestic politics, but defends democratic integrity)
- Right: Stay out of the election — the agency has no mandate to police domestic political speech (principled, but the election outcome determines whether the treaty survives)
**Teaches:** E-53 (non-ASI AI harms), E-56 (AI diffusion creates new attack surfaces), E-42 (elections can reverse the pause). Sub-threshold AI is powerful enough to subvert democracy, and democracy is the mechanism that sustains the pause. The treaty's own permission structure creates the tools of its destruction.
**Refs:** → #civil--deepfake-isia-director (similar technology, different target), → #pol--election-year (election stakes)
**Bars:** pol ↓↓ if anti-pause candidate wins, pol ↓ if agency intervention discovered

---

#### #civil--upload-milestone-panic
**Type:** consequence
**Entities:** researcher-safety, public-cluster-fear, public-cluster-skeptic, isia-comms
**Topics:** #uploading, #public-opinion, #narrative, #ethics
**Situation:** A university team in Zurich successfully uploads and runs a functional neural simulation of a mouse brain at 1:1 fidelity for 48 hours. The paper is on the cover of Nature. This is a genuine scientific milestone — and politically explosive.

Three reactions hit simultaneously:
1. The safety community is cautiously optimistic: whole-brain emulation could eventually let researchers work 10^6x faster, which might be the only way to solve alignment in time.
2. Religious organizations are horrified: "They're copying souls." The megachurch coalition threatens to withdraw political support for the pause if uploading research continues.
3. The general public is scared: "If they can copy a mouse brain, how long until they copy mine?" Privacy concerns spike. People who never thought about AI suddenly care — but about uploading, not ASI.

The agency must decide whether to regulate uploading research (not technically within its ASI mandate) or let it proceed as a potential path to solving alignment.
**Options:**
- Left: Bring uploading under ISIA oversight — new mandate expansion (gains control, but political cost of mandate creep, loses religious allies)
- Right: Keep focus on ASI mandate — uploading is not the agency's problem (preserves mandate clarity, but loses influence over a technology that could either save or doom the project)
**Teaches:** D-20 (alternative paths to solving alignment), E-27/29 (opinion clusters react differently to the same event). Upload research creates an opinion-cluster earthquake — it activates the indifferent cluster, fractures the fear cluster (some see it as hope, others as horror), and gives the skeptic cluster new ammunition ("the agency can't even control what its own researchers are doing").
**Refs:** → #research--biotech-proposal (parallel alternative pathway), → #civil--megachurch-sermon (religious coalition threatened)
**Bars:** pol ↓ if mandate expanded (overreach perception), saf ↑ if uploading proceeds (long-term research path)

