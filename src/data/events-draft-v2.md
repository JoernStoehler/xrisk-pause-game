# Events Draft v2 — Entity/Topic Inventory + Events

Developer-facing document. Describes event concepts for later card implementation.
Not card text — explains what each event is, what it teaches, how it connects.

## Conventions

- Event IDs: `#prefix--short-description` (e.g., `#monitoring--heat-signature-foreign`)
- Tags: `#tag-name` for thematic cross-references (e.g., `#chip-monitoring`, `#dual-use`)
- Direct refs: `→ #event-id` for follow-up chains
- Algorithmic progress: expressed as multiplier relative to 2022 compute efficiency (start >1x)
- Bars: `pol` (political power), `int` (intelligence), `saf` (safety progress), `alg` (algorithmic progress)
- Bar notation: `pol ↑` / `pol ↓` / `pol ↓↓` for direction and magnitude

---

## Entity Inventory

Actors, institutions, and systems that generate events. Each entity has **interfaces** — the mechanisms through which it creates situations the DG must respond to.

### ISIA (player's organization)

| Entity | What it does | Interfaces |
|---|---|---|
| **isia-enforcement** | Chip audits, facility inspections, raid teams, border seizures | #chip-monitoring, #challenge-inspection, #raid, #smuggling |
| **isia-research-control** | Approves/denies research proposals, classifies results as Controlled/Banned | #research-approval, #dual-use, #classification |
| **isia-intelligence** | Receives intelligence from national services, whistleblowers, satellites, AI surveillance | #signals-intelligence, #human-intelligence, #satellite, #whistleblower |
| **isia-safety-team** | The agency's own alignment researchers | #safety-research, #experiment, #dual-use |
| **isia-ai-tools** | AI systems used for surveillance, analysis, research assistance | #ai-behavior, #false-positive, #capability-leak |
| **isia-internal-security** | Catches moles, manages clearances, internal investigations | #mole, #leak, #insider-threat |
| **isia-communications** | Public messaging, media relations, narrative management | #public-opinion, #narrative, #declassification |
| **isia-political** | Legislative liaison, treaty diplomacy, budget negotiations | #election, #budget, #treaty-negotiation |

### National actors

| Entity | What it does | Interfaces |
|---|---|---|
| **gov-treaty-major** | US, China, EU govs — core treaty supporters with own agendas | #treaty-negotiation, #election, #military, #budget |
| **gov-treaty-minor** | Smaller treaty nations — less influence, different pressures | #treaty-negotiation, #withdrawal, #economic-pressure |
| **gov-non-treaty** | Nations outside the treaty — potential violators or converts | #smuggling, #hostage-gambit, #covert-program |
| **national-intelligence** | NSA, MI6, MSS, etc. — have own priorities, may or may not cooperate with ISIA | #signals-intelligence, #covert-program, #political-pressure, #foreign-attack |
| **national-enforcement** | Domestic police/agencies implementing ISIA directives | #raid, #chip-monitoring, #jurisdiction |
| **military** | Armed forces — last resort for protective actions, also source of political pressure | #military, #protective-action, #taiwan |

### Industry

| Entity | What it does | Interfaces |
|---|---|---|
| **chip-fabricator** | TSMC, Samsung — fabricate chips. Extreme chokepoint (90% concentration) | #chip-supply, #taiwan, #chokepoint |
| **chip-design** | NVIDIA, AMD — design AI chips. Another chokepoint (~98% AI training) | #chip-supply, #chokepoint, #economic-pressure |
| **chip-equipment** | ASML — sole EUV lithography supplier. Ultimate chokepoint | #chip-supply, #chokepoint, #joint-venture |
| **ai-company** | Frontier labs — DeepMind, Anthropic-alikes. Dual role: safety partner + economic pressure source | #training-run, #safety-research, #lobbying, #model-weights |
| **corporate-lobby** | Industry associations, lobbyists — structurally opposed to pause | #lobbying, #election, #economic-pressure, #hypocrisy |

### Research

| Entity | What it does | Interfaces |
|---|---|---|
| **researcher-safety** | University/independent alignment researchers | #safety-research, #dual-use, #publication, #classification |
| **researcher-capability** | People advancing AI capabilities (sometimes unintentionally via safety work) | #dual-use, #publication, #algorithmic-progress |
| **researcher-biotech** | Human cognitive enhancement programs | #biotech, #safety-research, #ethics |
| **researcher-upload** | Whole-brain emulation researchers | #uploading, #safety-research, #ethics |

### Threat actors

| Entity | What it does | Interfaces |
|---|---|---|
| **rogue-lab** | Unauthorized training operations — companies, university groups, or state-backed | #training-run, #chip-monitoring, #whistleblower, #raid |
| **smuggler** | Chip smuggling networks — shell companies, intermediaries | #smuggling, #chip-supply, #black-market |
| **rogue-state** | Non-treaty nation actively seeking ASI | #covert-program, #hostage-gambit, #smuggling |
| **rogue-insider** | ISIA employee who disagrees with mission — sabotages from within | #insider-threat, #mole, #leak, #ideology |
| **rogue-billionaire** | Wealthy individual funding unauthorized research | #training-run, #smuggling, #ideology |

### Civil society

| Entity | What it does | Interfaces |
|---|---|---|
| **public-cluster-fear** | "My children will die if anyone builds ASI" — strong pause supporters | #public-opinion, #election, #protest |
| **public-cluster-skeptic** | "ASI is physically impossible" or "the threat was exaggerated" | #public-opinion, #election, #defund |
| **public-cluster-economic** | "I lost my job because of AI restrictions" — economic grievance | #public-opinion, #economic-pressure, #protest |
| **public-cluster-liberty** | "This is really a surveillance state scheme" | #public-opinion, #surveillance, #protest |
| **public-cluster-accelerationist** | "I deserve to be emperor of the galaxy" / "ASI will serve whoever builds it first" | #public-opinion, #ideology, #lobbying |
| **public-cluster-indifferent** | "AI is not a topic I think about" — low salience | #public-opinion, #election |
| **journalist** | Investigative reporters — can be ally (exposing threats) or adversary (exposing agency) | #narrative, #leak, #declassification, #whistleblower |
| **civil-liberties** | Organizations defending privacy/rights against agency surveillance | #surveillance, #protest, #legal-challenge |

### International bodies

| Entity | What it does | Interfaces |
|---|---|---|
| **treaty-council** | Executive Council — votes on inspections, amendments, protective actions | #treaty-negotiation, #challenge-inspection, #amendment |
| **treaty-conference** | Conference of the Parties — 5-year reviews, consensus amendments | #treaty-negotiation, #amendment, #withdrawal |
| **un-security-council** | Authorizes military protective actions, sanctions | #military, #protective-action, #sanctions |
| **interpol** | Cross-border enforcement coordination | #smuggling, #raid, #jurisdiction |
| **who** | Petitions for medical/humanitarian AI exceptions | #economic-pressure, #exception, #training-run |

---

## Topic Inventory

Mechanisms, interaction points, and recurring situations. Each topic describes a type of thing that happens, independent of which entities are involved.

### Compute control

| Topic | What it is | Why it matters |
|---|---|---|
| **#chip-monitoring** | Tracking the full lifecycle of AI-capable chips (manufacture → deployment → retirement) | Central enforcement pillar. If you lose track of chips, enforcement collapses. (C-10) |
| **#chip-supply** | The manufacturing supply chain — TSMC, ASML, NVIDIA chokepoints | Structural foundation of enforcement. Chokepoints make control physically possible. (C-11) |
| **#chokepoint** | Any structural bottleneck that makes enforcement easier | Good enforcement = shrink attack surface via chokepoints, not expand monitoring surface. (C-9) |
| **#smuggling** | Black market chip movement — shell companies, intermediaries, creative routing | The cat-and-mouse. Criminals adapt; enforcement adapts. Never ends. (C-14) |
| **#black-market** | Price signals and demand dynamics for unauthorized chips | Market intelligence — rising prices = rising demand from bad actors |
| **#training-run** | Any compute operation above monitoring thresholds — permitted or unauthorized | The thing enforcement exists to detect and control. (B-3) |

### Research & knowledge

| Topic | What it is | Why it matters |
|---|---|---|
| **#safety-research** | Work toward solving the alignment problem | The only long-term survival path. The pause buys time for this. (D-17) |
| **#dual-use** | Research that advances both safety AND capabilities | The fundamental tension — studying how to make AI safe reveals how to make it more powerful. (B-24) |
| **#publication** | Papers/results entering the public domain | Once published, can't be un-published. Advances algorithmic progress irreversibly. |
| **#classification** | Deciding what research to allow, classify, or ban | Single decision point with three failure modes: bottleneck, judgment errors, disguised capability work. (B-25) |
| **#research-approval** | ISIA reviewing specific research proposals | Rich card source — approve vs. deny both carry real risks. |
| **#algorithmic-progress** | Accumulated capability knowledge from all sources | Shrinks the lethal threshold every year. Partially uncontrollable. (B-5, B-6) |
| **#experiment** | Large-scale training experiments for safety purposes | Even permitted training is dangerous — might accidentally cross threshold. (B-26) |
| **#biotech** | Genetic enhancement of human cognitive capabilities | Speculative long-shot accelerator for safety research. (D-20) |
| **#uploading** | Whole-brain emulation research | Alternative accelerator — could give researchers 10^6x speed advantage |

### Enforcement operations

| Topic | What it is | Why it matters |
|---|---|---|
| **#raid** | Physical enforcement action — seizing chips, shutting down labs | Consumes intelligence (reveals methods, adversaries adapt). (C-14) |
| **#challenge-inspection** | Formal treaty mechanism — 24hr access, majority Council vote | Legal enforcement tool with political cost |
| **#satellite** | Orbital surveillance — thermal/power signatures | Detection capability for undeclared facilities |
| **#signals-intelligence** | Signals intelligence — network traffic, comms intercepts | Detection capability, shared with national agencies |
| **#human-intelligence** | Human intelligence — informants, whistleblowers, embassy contacts | Often most valuable but most fragile |
| **#surveillance** | Broader monitoring of researchers, facilities, communications | Expansion creates political backlash. Contraction creates blind spots. |
| **#false-positive** | Monitoring systems flagging non-threats | Wastes enforcement resources, erodes trust in monitoring tools |
| **#whistleblower** | Insider reports of unauthorized activity | Critical enforcement channel — needs protection infrastructure |
| **#protective-action** | Military force as last resort — cyber, interdiction, airstrikes on hardware | Escalation ladder. Treaty Article XII. |

### Political dynamics

| Topic | What it is | Why it matters |
|---|---|---|
| **#election** | National elections changing government composition | Can reverse the pause overnight. (E-42) |
| **#budget** | Agency funding negotiations — the political power → money pipeline | Everything costs political capital |
| **#public-opinion** | Shifts in opinion cluster distribution | Drives elections, protests, mandate. Hidden state. (E-27) |
| **#narrative** | Media framing of AI risk, agency actions, incidents | Shapes opinion clusters. Correct narrative ≠ politically useful narrative. |
| **#protest** | Street demonstrations, organized opposition | Direct political pressure channel |
| **#lobbying** | Corporate/interest group influence on legislation | Permanent structural opposition to pause. (E-51) |
| **#declassification** | Releasing classified information to influence public debate | Tradeoff: proves threat is real, but reveals intelligence methods |
| **#defund** | Political movement to cut agency budget | Triggered by success (E-52), economic pressure, or ideological opposition |

### International dynamics

| Topic | What it is | Why it matters |
|---|---|---|
| **#treaty-negotiation** | Ongoing diplomatic management of the coalition | Treaty requires sustained consensus |
| **#amendment** | Proposed changes to treaty terms (weaken or strengthen) | Consensus required — any bloc can obstruct |
| **#withdrawal** | Nation formally leaving the treaty (12-month notice) | Chips must be forfeited, but enforcement during exit is tricky |
| **#hostage-gambit** | Nation threatening ASI development for unrelated concessions | Unprecedented game theory — threat = omnicide. (E-49) |
| **#covert-program** | State-backed secret ASI research | The North Korea problem — even with treaties, determined actors find ways |
| **#taiwan** | Taiwan Strait tensions affecting TSMC chip production | Geopolitical shock to the chip supply chokepoint |
| **#sanctions** | Economic penalties for treaty violations | Standard enforcement tool, limited effectiveness |
| **#jurisdiction** | Conflicts over who has authority to enforce where | Domestic vs. international enforcement friction |

### Economic dynamics

| Topic | What it is | Why it matters |
|---|---|---|
| **#economic-pressure** | GDP loss, unemployment, industry complaints from AI restrictions | Real, legitimate cost of the pause. (E-32, E-33) |
| **#exception** | Requests to allow specific AI uses above threshold (medical, economic) | Each exception erodes the bright line |
| **#ai-diffusion** | Spread of AI through economy, creating dependency | More AI use = more compute = more risk of accidental threshold crossing. (E-34) |

### AI behavior

| Topic | What it is | Why it matters |
|---|---|---|
| **#ai-behavior** | Unexpected actions by AI systems the agency uses | Agency's own tools are not fully reliable. (C-59) |
| **#capability-leak** | AI system discovers/reveals capabilities beyond its intended scope | The dual-use trap applied to the agency's own operations. (D-22) |
| **#model-weights** | Security of trained model parameters | Once copied, can't be un-copied. (RAND SL2-SL5) |

### Institutional

| Topic | What it is | Why it matters |
|---|---|---|
| **#insider-threat** | Agency employees undermining the mission from within | Sincere disagreement, not just corruption. (F-40) |
| **#mole** | Employees passing information to outside actors | Regulatory capture, industry ties. (F-39) |
| **#leak** | Classified information reaching unauthorized parties | Damages operations and credibility |
| **#ideology** | Deep disagreement about the agency's core mission | Employees from different opinion clusters. (F-40) |
| **#leadership-purge** | External actors demanding replacement of agency staff | Political appointees replacing competent staff. (F-38) |
| **#regulatory-capture** | Agency starts serving the interests of those it regulates | Standard institutional pathology. (F-39) |

### Long-term / era transitions

| Topic | What it is | Why it matters |
|---|---|---|
| **#generational-shift** | Population turnover — new voters have no memory of why the pause started | Erodes political foundation over decades. (E-44) |
| **#success-trap** | Long peace = "the threat was never real" = defunding pressure | The agency's greatest success is indistinguishable from "it was a hoax." (E-52) |
| **#safety-looks-solved** | Partial alignment progress spun as "problem solved" | Triggers geopolitical shift — nations race to build "safe" ASI. |
| **#threshold-drop** | Lethal compute threshold falls below enforceable level | Endgame trigger — enforcement designed for datacenters can't monitor garages. (B-5) |
| **#pivotal-act** | Deployment of system that flips attack-defense asymmetry | Win condition trigger. |

---

## Interesting Intersections

Entity × topic combinations that produce non-obvious events. Organized by primary entity cluster. Each intersection is a seed for one or more event concepts.

### ISIA internal

| Intersection | Why interesting |
|---|---|
| isia-ai-tools × #false-positive | Surveillance AI flags 47 anomalies overnight. Triage problem. |
| isia-ai-tools × #capability-leak | Research assistant discovers something dual-use without being told to |
| isia-ai-tools × #ai-behavior | Monitoring system gives bizarre recommendation. Override or trust? |
| isia-enforcement × #raid × national-intelligence | Intel agency has own agenda — provides/withholds intel based on politics |
| isia-safety-team × #dual-use × #publication | Agency's own research produces capability advance. Suppress or publish? |
| isia-internal-security × #mole × corporate-lobby | Senior official passing enforcement schedules to former employer |
| isia-internal-security × #ideology × #leak | Employee leaks surveillance data out of sincere belief in transparency |
| isia-enforcement × #training-run × isia-safety-team | Agency needs to train AI for enforcement — contradicts its own mandate |
| isia-communications × #success-trap × #defund | 8 years of peace → "threat was exaggerated" → budget cut proposals |
| isia-communications × #declassification × #narrative | Prove the threat is real by revealing near-misses, but burn intel methods |
| isia-political × #budget × #election | New government demands leadership purge as condition for funding |

### National intelligence × ISIA

| Intersection | Why interesting |
|---|---|
| national-intelligence × #chip-monitoring × #foreign-attack | Foreign actor attacks US data center, disables ISIA monitoring for a week. NSA director doesn't take ASI seriously, but president insists on sharing intel. Possible unauthorized training run during the gap. |
| national-intelligence × #covert-program × isia-intelligence | National intel service running its own secret AI program. Do they share intel with ISIA or hide it? |
| national-intelligence × #human-intelligence × isia-enforcement | Whistleblower in a foreign intel service offers intel for asylum + $5M. Setup or genuine? |
| national-intelligence × #raid × #jurisdiction | ISIA wants to raid a facility but local intelligence service claims jurisdiction |

### Chip supply chain

| Intersection | Why interesting |
|---|---|
| chip-fabricator × #taiwan × #chip-supply | Taiwan Strait crisis suspends TSMC production. Supply chain chaos. |
| chip-equipment × #joint-venture × gov-non-treaty | ASML exploring deal with non-treaty consortium. Production capacity escapes monitoring. |
| chip-design × #economic-pressure × #lobbying | NVIDIA lobbying for higher training thresholds. Real economic argument. |
| smuggler × #black-market × national-enforcement | Black market chip prices triple → demand from unauthorized actors rising faster than interdiction |
| smuggler × #chip-supply × #raid | 2000 chips smuggled through shell companies across 5 countries. Seize chips or map the network? |
| chip-fabricator × #chip-monitoring × #algorithmic-progress | Consumer GPUs now sufficient for dangerous training. Monitoring designed for datacenters, not living rooms. |

### Research ecosystem

| Intersection | Why interesting |
|---|---|
| researcher-safety × #dual-use × #publication | Safety paper inadvertently reveals efficient deceptive-alignment technique. Already on arXiv. |
| researcher-safety × #experiment × #training-run | Safety team requests 5×10²³ FLOP training run. Just below threshold... probably. |
| researcher-capability × #algorithmic-progress × #classification | Open-source advance makes previous enforcement thresholds obsolete |
| researcher-biotech × #biotech × #ethics | 15-year cognitive enhancement program. Credible but ethically explosive. |
| ai-company × #model-weights × rogue-state | Frontier lab's model weights exfiltrated by state intelligence service |
| ai-company × #safety-research × #lobbying | Company publicly supports pause while privately funding anti-enforcement candidates |
| isia-safety-team × #safety-research × #stepping-on-toes | Doubled research budget → no extra output. Same hard problems bottleneck everything. |

### Political ecosystem

| Intersection | Why interesting |
|---|---|
| gov-treaty-major × #election × #withdrawal | Populist "AI freedom" candidate wins. Threatens to withdraw from treaty. |
| gov-treaty-major × #budget × #defund | Finance ministers demand 40% budget cut after years of no incidents |
| public-cluster-economic × #economic-pressure × #protest | 12M jobs lost to permitted AI automation. Protests blame the pause for "not enough" AND "too much." |
| public-cluster-liberty × #surveillance × #protest | Civil liberties orgs demand arrest of overzealous enforcement officer |
| public-cluster-skeptic × #success-trap × #election | "Nothing bad happened" → skeptic cluster grows → anti-pause candidates elected |
| journalist × #leak × #narrative | Leaked documents expose corporate hypocrisy (publicly pro-pause, privately funding opponents) |
| journalist × #declassification × isia-communications | Agency considers releasing near-miss intel to prove threat. Burns sources? |
| who × #exception × #training-run | WHO petitions for medical AI above threshold. 2M lives/year. Deny = political disaster. |
| public-cluster-fear × #protest × isia-communications | Non-ASI AI accident → public panic → political momentum for stronger enforcement. Exploit or correct? |

### International dynamics

| Intersection | Why interesting |
|---|---|
| gov-non-treaty × #hostage-gambit × #chip-supply | Nation threatens ASI development unless given semiconductor technology |
| gov-treaty-minor × #withdrawal × isia-enforcement | Withdrawing nation secretly moves chips before exit takes effect |
| treaty-conference × #amendment × gov-treaty-major | 5-year review: 7 nations want to weaken, 3 want to strengthen. Consensus required. |
| gov-non-treaty × #covert-program × smuggler | Non-treaty nation accumulating chips through intermediaries for 3 years. North Korea pattern. |
| rogue-insider × #ideology × treaty-council | Deputy director privately undermines China negotiations. China diplomat demands removal. |
| gov-treaty-major × #military × #protective-action | After enforcement fails diplomatically, military option on the table. Airstrikes on AI hardware. |

### Era transitions

| Intersection | Why interesting |
|---|---|
| public-cluster-skeptic × #generational-shift × #election | Median voter was 12 when pause began. ASI risk = "old people worry." Youth movements anti-pause. |
| researcher-safety × #safety-looks-solved × gov-treaty-major | Formal verification breakthrough → media: "alignment is solved" → 3 nations lobby to relax treaty |
| gov-treaty-major × #safety-looks-solved × #covert-program | "Defensive ASI programs" launched by nations claiming safety is solved. Treaty technically violated. |
| isia-enforcement × #threshold-drop × #chip-monitoring | Lethal threshold drops below university-lab compute. Monitoring infrastructure can't handle the scale. |
| isia-safety-team × #pivotal-act × treaty-council | Proof of corrigibility achieved. Deploy the system? Requires largest training run ever attempted. |

---

## Events

Grouped by primary entity cluster. Each event has:
- **ID**: `#prefix--short-description`
- **Type**: crisis / preparation / report / consequence
- **Entities**: which actors are involved
- **Topics**: which mechanisms are at play
- **Situation**: developer-facing description of what happens
- **Options**: response choices (including greyed-out specials)
- **Teaches**: dynamics absorbed by player
- **Refs**: cross-references to related/follow-up events
- **Bars**: which bars are affected and how

### Compute monitoring & enforcement

#### #monitoring--120day-audit
**Type:** crisis
**Entities:** isia-enforcement, gov-treaty-minor
**Topics:** #chip-monitoring, #challenge-inspection
**Situation:** 120-day chip consolidation deadline approaching. 14% of declared facilities haven't completed inventory. Three countries requesting extensions.
**Options:**
- Left: Grant extensions — maintain diplomacy, leave surveillance gap
- Right: Enforce deadline — send inspection teams, risk diplomatic incidents
- Down (if int high): Deploy rapid-response teams to assist lagging facilities (costs pol)
**Teaches:** C-13 (chip consolidation as first enforcement step), C-9 (structural chokepoints)
**Refs:** → #treaty--review-conference (long-term treaty health)
**Bars:** int ↓ or ↑ depending on choice, pol ↓ if forced inspections

#### #monitoring--heat-signature-foreign
**Type:** crisis
**Entities:** isia-enforcement, isia-intelligence, gov-treaty-major
**Topics:** #chip-monitoring, #satellite, #challenge-inspection
**Situation:** Satellite detects anomalous thermal output from undeclared facility in remote region. Consistent with mid-scale compute cluster.
**Options:**
- Left: Formal challenge inspection via Executive Council (slow, preserves legitimacy)
- Right: Covert intelligence team first (fast, legally questionable)
- Down (greyed out if treaty health low): Joint operation with domestic enforcement agency
**Teaches:** C-10 (monitoring full chip lifecycle), C-14 (cat-and-mouse), B-3 (compute-centric risk)
**Refs:** → #monitoring--near-miss (if raid succeeds and finds something), → #treaty--diplo-incident (if covert op discovered)
**Bars:** int ↓ (enforcement reveals methods), pol ↓ if diplomatic fallout

#### #monitoring--smuggle-ring
**Type:** consequence
**Entities:** smuggler, isia-enforcement, interpol
**Topics:** #smuggling, #chip-supply, #raid
**Situation:** Interpol identifies chip smuggling network. 2000 H100-equivalents unaccounted for across 5 countries via shell companies. Enough for a serious training run if concentrated.
**Options:**
- Left: Seize the chips — track logistics, raid warehouses
- Right: Map the network — let some chips move while identifying the full organization
**Teaches:** C-14 (catch this batch or prevent the next?), C-8 (attacker only needs to succeed once)
**Refs:** → #monitoring--black-market-signal, #enforcement--cat-mouse-adapt
**Bars:** int ↓ (either way reveals methods)

#### #monitoring--consumer-hw-threshold
**Type:** report
**Entities:** isia-safety-team, isia-enforcement
**Topics:** #algorithmic-progress, #chip-monitoring, #threshold-drop
**Situation:** Chief scientist briefing: algorithmic progress at ~3.5x 2022 baseline. 500 consumer GPUs (~$200k) could now run training that required 10,000 monitored chips two years ago. Enforcement threshold needs lowering.
**Options:** None — briefing.
**Teaches:** B-5 (shrinking lethal threshold), B-6a/b (uncontrollable algorithmic sources)
**Refs:** → #era--threshold-cliff (escalation), #political--threshold-debate
**Bars:** (shifts understanding, no immediate bar change)

#### #monitoring--surveillance-expand
**Type:** preparation
**Entities:** isia-enforcement, isia-political, public-cluster-liberty
**Topics:** #surveillance, #chip-monitoring, #public-opinion
**Situation:** Enforcement chief proposes tracking firmware on ALL GPUs sold worldwide — consumer cards too. Massively expands coverage. Political advisor warns: mass surveillance backlash.
**Options:**
- Left: Approve — cover more chips, trigger political backlash
- Right: Reject — maintain political support, leave consumer hardware blind spot
**Teaches:** C-9 (expanding monitoring surface is bad strategy vs. shrinking attack surface)
**Refs:** → #political--civil-lib-lawsuit (if approved)
**Bars:** int ↑ but pol ↓↓ if approved; stable if rejected

#### #monitoring--asml-joint-venture
**Type:** crisis
**Entities:** chip-equipment, gov-non-treaty, isia-political
**Topics:** #chip-supply, #chokepoint, #treaty-negotiation
**Situation:** ASML exploring joint venture with consortium including non-treaty nation. If completed, advanced chip production capacity escapes treaty monitoring.
**Options:**
- Left: Diplomatic pressure — lobby Netherlands to block (risks appearing overbearing)
- Right: Offer ASML treaty-compliant alternative deal (expensive)
- Down (greyed out if pol low): Invoke emergency powers to designate ASML as strategic asset
**Teaches:** C-11 (supply chain chokepoints), G2 (why chip supply chain control matters)
**Refs:** → #international--chip-dependency (long-term)
**Bars:** pol ↓ if heavy-handed, int ↓ if deal goes through

#### #monitoring--black-market-signal
**Type:** report
**Entities:** isia-intelligence, smuggler
**Topics:** #black-market, #smuggling, #chip-supply
**Situation:** Intel reports: black market H100-equivalent prices tripled this quarter. Demand from unauthorized actors outpacing interdiction. "We're winning battles but losing the war."
**Options:** None — briefing.
**Teaches:** C-14 (cat-and-mouse never ends), market signals as intelligence
**Refs:** → #monitoring--smuggle-ring, → #enforcement--cat-mouse-adapt
**Bars:** (shifts understanding)

#### #monitoring--near-miss
**Type:** consequence
**Entities:** isia-enforcement, rogue-lab
**Topics:** #training-run, #raid, #declassification
**Situation:** Raid found the whistleblower's claims. 800 chips, partially completed run at 2×10²³ FLOP. Chief scientist estimates 15% chance it would have produced ASI. Nobody outside the agency knows how close this was.
**Options:**
- Left: Classify — protect sources, prevent panic
- Right: Declassify sanitized version — demonstrate ongoing threat, justify budget
**Teaches:** C-8 (attacker almost succeeded), E-52 (if classified, becomes another "nothing happened"), B-4 (nobody knows exact threshold)
**Refs:** → #political--success-trap (if classified), → #political--budget-fight (if declassified)
**Bars:** pol ↑ if declassified, int ↓ if declassified (reveals methods)

### National intelligence interactions

#### #national-intelligence--data-center-attack
**Type:** crisis
**Entities:** national-intelligence, isia-enforcement, gov-treaty-major
**Topics:** #chip-monitoring, #foreign-attack, #covert-program
**Situation:** Director of the NSA: "Six months ago a US data center was attacked by a foreign actor. We don't usually forward such reports, but the president insisted. ISIA compute monitoring tools were disabled for roughly one week. It's possible the foreign actor ran a training run." Surfaces because NSA director doesn't take ASI seriously enough to report promptly. Reaches you only because of political pressure.
**Options:**
- Left: Demand full forensics from NSA — how large was the monitoring gap? (politically costly to pressure a domestic intelligence agency)
- Right: Accept the report at face value, focus on patching the monitoring gap (faster but you don't know what you missed)
- Down (greyed out if int low): Cross-reference with satellite data from the attack window to assess whether a training run occurred
**Teaches:** Intelligence agencies have their own agendas (C-59 applied to national level), monitoring gaps can be created by external attacks, the DG depends on cooperation from actors who may not share priorities
**Refs:** → #national-intelligence--algorithmic-progress-leak (if training run occurred), → #monitoring--heat-signature-foreign (similar detection problem)
**Bars:** int ↓ (monitoring was down), pol ↓ (confronting NSA is costly)

#### #national-intelligence--algorithmic-progress-leak
**Type:** consequence
**Entities:** national-intelligence, rogue-state
**Topics:** #algorithmic-progress, #training-run, #covert-program
**Situation:** Follow-up from the data center attack: analysis suggests a foreign actor did complete a training run during the monitoring gap. Results unknown — but an intelligence-adjacent organization (possibly the national intelligence service itself) now has training data and checkpoint files that advance algorithmic knowledge. Not ASI-level, but the knowledge exists.
**Options:**
- Left: Confront the nation diplomatically — demand disclosure of what was trained (reveals you know about it)
- Right: Monitor quietly — track whether the knowledge propagates (slower, but preserves intelligence advantage)
**Teaches:** Algorithmic progress is irreversible (alg only goes up), intelligence agencies can be threat actors, some algorithmic advances come from unexpected sources
**Refs:** → #national-intelligence--data-center-attack
**Bars:** alg ↑ (knowledge was created), int ↓ if confrontation

#### #national-intelligence--defector-offer
**Type:** crisis
**Entities:** national-intelligence, isia-intelligence, rogue-state
**Topics:** #human-intelligence, #covert-program, #whistleblower
**Situation:** Anonymous contact inside a foreign intelligence service claims their government is secretly funding ASI research through a front company. Demands asylum + $5M. Intel division says: plausible but unverified. If genuine, biggest lead in years. If setup, you've been played.
**Options:**
- Left: Pay and grant asylum — potential intel worth the cost
- Right: Demand verification first — proof before committing (contact may disappear)
**Teaches:** Intelligence quality dimension, cost of uncertainty, HUMINT fragility
**Refs:** → #monitoring--heat-signature-foreign (if intel leads to facility), → #political--scandal (if it was a setup)
**Bars:** int ↑ if genuine, pol ↓↓ if setup

#### #national-intelligence--jurisdiction-clash
**Type:** crisis
**Entities:** national-intelligence, national-enforcement, isia-enforcement
**Topics:** #raid, #jurisdiction, #chip-monitoring
**Situation:** ISIA has confirmed an unauthorized compute cluster in a treaty nation. The national intelligence service claims the cluster is part of a classified domestic program and invokes national security to block ISIA inspection. Your legal team says the treaty technically overrides, but enforcement would require a political fight.
**Options:**
- Left: Invoke treaty override — force inspection (legally correct, politically explosive)
- Right: Negotiate access — accept a joint inspection with national observers (slower, they might sanitize)
**Teaches:** Jurisdiction friction is permanent, even treaty allies resist enforcement on their own soil, the gap between legal authority and political authority
**Refs:** → #treaty--withdrawal-threat (if pushed too hard)
**Bars:** pol ↓ if forced, int ↓ if they sanitize

### Research & dual-use

#### #research--approval-dilemma
**Type:** crisis
**Entities:** isia-research-control, researcher-safety, isia-safety-team
**Topics:** #research-approval, #dual-use, #experiment
**Situation:** Leading alignment researcher proposes training at 5×10²³ FLOP — just below banned threshold. Could accelerate safety significantly. Research Controls flags: methodology could reveal capability advances.
**Options:**
- Left: Approve — accelerate safety, risk dual-use leakage
- Right: Deny — protect against capability leakage, delay safety
- Down (if int high): Approve with airgapped conditions + ISIA oversight (safer but slower and expensive)
**Teaches:** B-24 (dual-use), B-25a (review bottleneck), D-22 (frontier AI trap)
**Refs:** → #research--training-run-consequence (if approved), → #era--safety-looks-solved (long-term safety accumulation)
**Bars:** saf ↑ if approved + works, alg ↑ if knowledge leaks, pol ↓ if airgapped (expensive)

#### #research--stepping-on-toes
**Type:** report
**Entities:** isia-safety-team
**Topics:** #safety-research
**Situation:** Quarterly safety report. Despite doubling budget, output plateaued. Three independent teams arrived at the same result. The hard fundamental problems bottleneck all approaches — adding researchers creates redundancy, not progress.
**Options:** None — briefing.
**Teaches:** D-23 (safety doesn't scale with headcount), D-17 (unknown difficulty)
**Refs:** → #research--biotech-proposal (alternative path)
**Bars:** (shifts understanding — money alone can't buy safety)

#### #research--biotech-proposal
**Type:** preparation
**Entities:** researcher-biotech, isia-political
**Topics:** #biotech, #safety-research, #ethics
**Situation:** Biotech consortium proposes 15-year program to genetically enhance human cognitive capabilities. Enhanced researchers might solve alignment problems current humans can't. Timeline uncertain, ethics explosive, success not guaranteed.
**Options:**
- Left: Fund it — long-shot but possibly the only path if alignment is too hard for current humans
- Right: Reject — ethics backlash devastating, 15 years too uncertain
**Teaches:** D-20 (might need a new kind of researcher), survival pathway 1 (human intelligence enhancement → aligned ASI)
**Refs:** → #era--pivotal-moment (long-term payoff if funded)
**Bars:** pol ↓ (ethics controversy), saf ↑ (long-term, uncertain)

#### #research--ai-assistant-incident
**Type:** crisis
**Entities:** isia-ai-tools, isia-safety-team
**Topics:** #ai-behavior, #capability-leak, #dual-use
**Situation:** Agency's AI research assistant produced output the chief scientist calls "uncomfortably close to a capability advance we haven't published." The system may have discovered something dual-use without instruction.
**Options:**
- Left: Shut down the assistant — lose productivity, eliminate risk
- Right: Restrict scope + add monitoring — keep some benefit, manage risk
- Down (greyed out if saf low): Have safety team formally evaluate whether the output is actually dangerous
**Teaches:** D-22 (smart enough to help = smart enough to be dangerous), C-59 (agency's AI tools not fully controlled), B-24 (dual-use)
**Refs:** → #research--dual-use-publication (similar dynamic, external)
**Bars:** saf ↓ if shut down (lost tool), alg ↑ if output is real capability advance

#### #research--dual-use-publication
**Type:** crisis
**Entities:** researcher-safety, isia-research-control
**Topics:** #dual-use, #publication, #classification
**Situation:** University researcher publishes safety paper on detecting deceptive alignment. The detection method implicitly teaches how to CREATE deceptive alignment more efficiently. Paper is already on arXiv.
**Options:**
- Left: Issue retroactive classification — precedent that safety papers can be classified post-publication (toxic, may not work)
- Right: Accept the leak — knowledge is out, update enforcement thresholds for the new efficiency
**Teaches:** B-24 (dual-use research), B-25c (classification failure — disguised capability work), B-7 (different research types need different enforcement)
**Refs:** → #monitoring--consumer-hw-threshold (threshold drops), → #research--approval-dilemma (future approvals get harder)
**Bars:** alg ↑ (threshold just dropped), pol ↓ if classification attempted

#### #research--training-run-consequence
**Type:** consequence
**Entities:** isia-safety-team, isia-research-control
**Topics:** #experiment, #dual-use, #training-run
**Situation:** Six months ago you approved a large safety training run. Results: significant safety progress. Also: the model developed unexpected capabilities outside the research design. Not dangerous alone, but advances state-of-art in a way that was supposed to be banned.
**Options:**
- Left: Suppress capability findings — protect safety program, set dangerous precedent
- Right: Publish and classify — honest but damages credibility (agency approved research that produced banned results)
**Teaches:** B-24 (dual-use), D-22 (AIs smart enough to help = smart enough to be dangerous), irreversibility
**Refs:** → #research--approval-dilemma (what triggered this)
**Bars:** saf ↑ (research worked), alg ↑ (capability advance happened), pol ↓ if published

#### #research--agency-trains-ai
**Type:** crisis
**Entities:** isia-enforcement, isia-safety-team, isia-political
**Topics:** #training-run, #experiment, #chip-monitoring
**Situation:** The enforcement division requests permission to train a new AI system for monitoring — current tools are falling behind adversary techniques. The irony: the agency that bans training runs needs to perform one itself. Research Controls says the run is within safe parameters. Critics will say hypocrisy.
**Options:**
- Left: Approve — operational necessity, accept the hypocrisy criticism
- Right: Deny — maintain credibility, accept degraded enforcement tools
**Teaches:** C-60 (agency needs to train AI = contradiction in mandate), the credibility cost of necessary exceptions
**Refs:** → #research--ai-assistant-incident (agency AI tools theme)
**Bars:** int ↑ if approved (better tools), pol ↓ (hypocrisy criticism)

### Political economy

#### #political--election-year
**Type:** crisis
**Entities:** gov-treaty-major, public-cluster-skeptic, corporate-lobby
**Topics:** #election, #public-opinion, #lobbying
**Situation:** Three major treaty nations hold elections. Populist "AI freedom" candidates running in two — promising to revoke treaty commitments for AI-driven growth. Polling shows them competitive.
**Options:**
- Left: Stay neutral — agency shouldn't intervene in domestic politics (preserves legitimacy, risks losing supporters)
- Right: Quietly support pro-pause candidates through risk-information campaigns (effective but explosive if discovered)
**Teaches:** E-42 (elections can reverse pause), E-47 (political salience varies)
**Refs:** → #treaty--withdrawal-threat (if anti-pause candidate wins)
**Bars:** pol ↓ if neutral and they win; pol ↓↓ if campaign discovered

#### #political--success-trap
**Type:** crisis
**Entities:** isia-communications, isia-political, gov-treaty-major
**Topics:** #success-trap, #defund, #budget
**Situation:** Eight years since last serious incident. Senator coalition proposes 40% budget cut. "Eight years, zero incidents. The threat was exaggerated."
**Options:**
- Left: Make the public case for continued vigilance (but you CAN'T show what you prevented — E-52)
- Right: Accept a smaller cut (15%) gracefully
- Down (if int high): Declassify redacted summary of intercepted rogue attempts — prove threat is real, but reveal methods
**Teaches:** E-52 (success = "threat was never real"), invisible success problem
**Refs:** → #monitoring--near-miss (what you could declassify), → #political--success-narrative (report that set this up)
**Bars:** int ↓ if declassified, pol ↓ if cut accepted

#### #political--success-narrative
**Type:** report
**Entities:** isia-communications
**Topics:** #success-trap, #public-opinion
**Situation:** Polling data: 62% believe "the AI threat was exaggerated." Support dropped 15 points in two years. Strongest predictor: "nothing bad has happened." Comms director: "We're victims of our own success."
**Options:** None — briefing.
**Teaches:** E-52 (success indistinguishable from hoax), why quiet stretches are dangerous
**Refs:** → #political--success-trap (consequence)
**Bars:** (shifts understanding — stability is not safety)

#### #political--econ-boom-request
**Type:** crisis
**Entities:** gov-treaty-major, corporate-lobby, isia-political
**Topics:** #economic-pressure, #exception, #training-run
**Situation:** G7 finance ministers request raising training threshold from 1e22 to 1e23 FLOP — 10x increase. Current limit costs global economy ~$800B annually. They argue it's unnecessarily constraining.
**Options:**
- Left: Raise threshold — reduce pressure, increase risk
- Right: Hold — preserve margin, intensify political conflict
**Teaches:** E-32 (AI genuinely valuable), E-33 (economic arguments legitimate), E-34 (economic success → extinction path)
**Refs:** → #monitoring--consumer-hw-threshold (threshold is already dropping)
**Bars:** pol ↑ if raised (goodwill), int ↓ (more compute to monitor), alg ↑ (if threshold raised)

#### #political--unemployment-crisis
**Type:** crisis
**Entities:** public-cluster-economic, isia-communications, isia-political
**Topics:** #economic-pressure, #ai-diffusion, #public-opinion, #protest
**Situation:** AI automation eliminated 12M jobs in treaty nations in two years. Protests spreading. Permitted deployments, below threshold. Protestors blame pause for "not enough" AND "too much" depending on cluster.
**Options:**
- Left: Propose additional AI restrictions — show agency cares, but constrain economy further
- Right: Stay focused on ASI mandate — jobs are domestic policy, not agency's problem (mission focus, lose support)
**Teaches:** E-56/57 (AI diffusion transforms landscape), E-50 (different clusters use different channels), E-35 (visible costs)
**Refs:** → #political--election-year (political consequences)
**Bars:** pol ↓ either way (lose support from different clusters)

#### #political--corporate-lobbying
**Type:** crisis
**Entities:** corporate-lobby, ai-company, journalist
**Topics:** #lobbying, #hypocrisy, #narrative
**Situation:** Three largest AI companies formed lobbying alliance. Publicly support pause. Privately funding anti-enforcement candidates. Journalist contact has evidence but publishing burns the source.
**Options:**
- Left: Leak evidence to independent journalist — expose hypocrisy, burn intel source
- Right: Confront companies privately — threaten to reveal unless they stop (they might call the bluff)
**Teaches:** E-62 (corporate hypocrisy), E-51 (corporate interests structurally opposed to pause)
**Refs:** → #political--election-year (where lobbying money goes)
**Bars:** pol ↑ if exposed successfully, int ↓ if source burned

#### #political--medical-ai-request
**Type:** preparation
**Entities:** who, isia-research-control, isia-political
**Topics:** #exception, #training-run, #economic-pressure
**Situation:** WHO petitions for training run to create drug discovery AI. Could save 2M lives/year. Above current threshold but well below ASI danger zone. Chief scientist: risk is low but nonzero.
**Options:**
- Left: Approve — overwhelming humanitarian case (sets precedent for exceptions)
- Right: Deny — maintain bright line (2M preventable deaths/year, severe political fallout)
**Teaches:** E-32/33 (humanitarian/economic cost is real), bright-line erosion problem
**Refs:** → #political--econ-boom-request (similar pressure, different framing)
**Bars:** pol ↓↓ if denied (2M deaths/year), int ↓ if approved (new system to monitor)

#### #political--protest-that-helps
**Type:** consequence
**Entities:** public-cluster-fear, isia-political
**Topics:** #public-opinion, #narrative, #protest
**Situation:** Non-ASI AI accident (autonomous system kills people). Massive protests. Not about ASI risk at all, but creates momentum for stronger enforcement. Political advisor sees opportunity.
**Options:**
- Left: Exploit the wave — push through enforcement measures while anger is high (effective but cynical, attaches mission to misunderstanding)
- Right: Correct the narrative — explain accident was non-ASI (honest, wastes political opportunity)
**Teaches:** E-53 (non-ASI harms shift opinion), E-58 (crises as opportunities), E-54 (incorrect conclusions from AI incidents)
**Refs:** → #political--election-year (political capital)
**Bars:** pol ↑ if exploited, (no bar change if corrected, but preserves narrative integrity)

#### #political--ai-economy-report
**Type:** report
**Entities:** isia-political
**Topics:** #ai-diffusion, #economic-pressure
**Situation:** AI systems within treaty limits now contribute 18% of global GDP. Entire industries depend on them. Economic advisor: "If we tighten further, we threaten hundreds of millions of livelihoods."
**Options:** None — briefing. Context for future decisions.
**Teaches:** E-56 (AI diffusion transforms economy), E-32 (economic stakes keep growing)
**Refs:** → #political--econ-boom-request, → #political--unemployment-crisis
**Bars:** (shifts understanding — economic dependency deepens over time)

### Institutional integrity

#### #institutional--mole-corp
**Type:** crisis
**Entities:** isia-internal-security, corporate-lobby, rogue-insider
**Topics:** #mole, #regulatory-capture, #leak
**Situation:** Internal security discovers senior official passing enforcement schedules to a corporation they previously worked for. Corporation timed chip transfers around inspection windows.
**Options:**
- Left: Quietly remove + patch security (avoids scandal, doesn't deter)
- Right: Prosecute publicly — send message (deters, but scandal damages credibility)
**Teaches:** F-39 (regulatory capture), F-40 (internal ideological conflict)
**Refs:** → #institutional--true-believer (contrast — different type of internal problem)
**Bars:** int ↓ (security breach happened), pol ↓ if public scandal

#### #institutional--true-believer
**Type:** crisis
**Entities:** rogue-insider, isia-enforcement, civil-liberties
**Topics:** #ideology, #surveillance, #insider-threat
**Situation:** Senior enforcement officer — deeply committed to pause — conducted unauthorized surveillance of university researchers. No violation found. Surveillance was illegal under domestic law. Civil liberties orgs demand arrest.
**Options:**
- Left: Arrest — uphold rule of law (demoralizing for enforcement team)
- Right: Shield — argue within agency mandate (legally dubious, politically explosive)
**Teaches:** F-40 (internal disagreement about methods), mission urgency vs. rule of law
**Refs:** → #political--civil-lib-lawsuit (if shielded)
**Bars:** pol ↓ either way (different constituencies upset)

#### #institutional--leadership-purge
**Type:** crisis
**Entities:** gov-treaty-major, isia-political
**Topics:** #leadership-purge, #budget, #ideology
**Situation:** New government demands replacement of three senior ISIA officials deemed "too aggressive." Threatens to withhold treaty funding. Officials are competent — real objection is political.
**Options:**
- Left: Replace — maintain funding, set precedent that govs dictate staffing
- Right: Refuse — protect independence, lose funding
**Teaches:** F-37 (politicians can undermine agency), F-38 (political appointees), F-36 (institutional fragility)
**Refs:** → #institutional--china-hawk (another internal personnel crisis)
**Bars:** int ↓ if replaced (lose competent staff), pol ↓ if refused (lose funding)

#### #institutional--china-hawk
**Type:** crisis
**Entities:** rogue-insider, gov-treaty-major, isia-political
**Topics:** #insider-threat, #ideology, #treaty-negotiation
**Situation:** Deputy director (former military intel) privately undermining China negotiations. Believes cooperation with China is naive. Chinese diplomat threatens to withdraw from talks unless deputy removed.
**Options:**
- Left: Remove — preserve China relationship, lose competent officer, signal external pressure controls personnel
- Right: Restrict access to China work — compromise that satisfies no one
**Teaches:** F-41 (individuals can sabotage international cooperation), F-40 (sincere disagreement)
**Refs:** → #treaty--withdrawal-threat (if China relationship damaged)
**Bars:** int ↓ if removed (lose officer), pol ↓ if relationship damaged

### AI tools & behavior

#### #ai--false-positive-cascade
**Type:** crisis
**Entities:** isia-ai-tools, isia-enforcement
**Topics:** #false-positive, #ai-behavior, #chip-monitoring
**Situation:** Surveillance AI flags 47 "high-priority anomalies" overnight — unprecedented spike. Most likely false positives from firmware update. But can't rule out real threats hiding in the noise.
**Options:**
- Left: Investigate all 47 — exhausts enforcement team for weeks, ensures nothing missed
- Right: Triage by AI confidence scores — top 10 only, accept risk in lower 37
**Teaches:** C-59 (agency AI not fully reliable), C-61 (surveillance AI hiccups)
**Refs:** → #ai--surveillance-recommendation (another AI trust dilemma)
**Bars:** int ↓ (resources spent or risk accepted)

#### #ai--surveillance-recommendation
**Type:** crisis
**Entities:** isia-ai-tools, isia-enforcement, researcher-safety
**Topics:** #ai-behavior, #false-positive, #safety-research
**Situation:** Monitoring AI recommends shutting down a legitimate, treaty-compliant safety lab in Germany. Detected "patterns consistent with capability research." Lab run by well-known alignment researcher. Human analysts disagree but can't explain why AI flagged it.
**Options:**
- Left: Override AI — trust human analysts (what if AI detected something humans missed?)
- Right: Investigate the lab — follow AI recommendation (damages researcher reputation, chills safety work)
**Teaches:** C-59 (AI tools not fully controlled), trusting opaque AI recommendations
**Refs:** → #research--approval-dilemma (safety research under scrutiny)
**Bars:** saf ↓ if legitimate research chilled, int ↓ if real threat missed

### International treaty dynamics

#### #treaty--review-conference
**Type:** crisis
**Entities:** treaty-conference, gov-treaty-major, gov-treaty-minor
**Topics:** #amendment, #treaty-negotiation
**Situation:** Five-year review. Seven nations propose weakening enforcement. Three want strengthening. Consensus required.
**Options:**
- Left: Pre-negotiate with weakening bloc — minor concessions to prevent walkout (pragmatic, erodes enforcement)
- Right: Hold firm — rally strengthening bloc, force confrontation (principled, risks fracture)
**Teaches:** E-49 (coalition maintenance), treaty fragility
**Refs:** → #treaty--withdrawal-threat (if confrontation goes badly)
**Bars:** pol ↓ if concessions, int ↓ if enforcement weakened

#### #treaty--withdrawal-threat
**Type:** crisis
**Entities:** gov-treaty-major, isia-enforcement, isia-intelligence
**Topics:** #withdrawal, #chip-monitoring, #treaty-negotiation
**Situation:** Major treaty nation files 12-month withdrawal notice. Must forfeit AI infrastructure, but intel suggests they're secretly moving chips to undeclared facilities before exit.
**Options:**
- Left: Invoke challenge inspections immediately — treaty allows 24hr access (legal, diplomatically aggressive)
- Right: Negotiate to prevent withdrawal — offer concessions
- Down (greyed out if int low): Deploy covert monitoring of suspected chip transfers
**Teaches:** Withdrawal problem (Article XV), E-49 (nations can exit), enforcement during political crisis
**Refs:** → #international--north-korea-pattern (precedent)
**Bars:** int ↓ if chips escape monitoring, pol ↓ if aggressive

#### #international--north-korea-pattern
**Type:** report
**Entities:** gov-non-treaty, smuggler, isia-intelligence
**Topics:** #covert-program, #smuggling, #chip-supply
**Situation:** Intelligence briefing: non-treaty nation acquiring chips through intermediary network for 3 years. 4,000 H100-equivalents estimated. Not enough for ASI yet, but the trend is clear. Same pattern as nuclear nonproliferation failures.
**Options:** None — briefing.
**Teaches:** Even with global cooperation, determined actors find ways. C-8 (attacker only needs to succeed once).
**Refs:** → #international--hostage-gambit (same type of actor)
**Bars:** (shifts understanding — enforcement has inherent limits)

#### #international--hostage-gambit
**Type:** crisis
**Entities:** gov-non-treaty, isia-political, un-security-council
**Topics:** #hostage-gambit, #chip-supply, #sanctions
**Situation:** Major non-aligned nation announces large-scale AI training unless treaty nations share semiconductor technology. Frames as "technological sovereignty." Intel suggests they're years from actual capability — but political threat is real.
**Options:**
- Left: Call the bluff — impose sanctions, tighten chip exports (escalates, demonstrates resolve)
- Right: Negotiate — offer technology-sharing for treaty accession (de-escalates, strengthens their future capability)
**Teaches:** E-49 (holding humanity hostage for concessions), political vs. capability threats
**Refs:** → #treaty--withdrawal-threat (similar dynamics)
**Bars:** pol ↓ if sanctions (costly), int ↓ if tech shared (they get stronger)

#### #international--taiwan-crisis
**Type:** crisis
**Entities:** chip-fabricator, military, gov-treaty-major
**Topics:** #taiwan, #chip-supply, #chokepoint
**Situation:** Taiwan Strait tensions escalate. TSMC suspends production for two weeks. Global chip supply disrupted. Three non-treaty nations use disruption as cover to refuse scheduled audits.
**Options:**
- Left: Focus on audit refusals — enforce compliance during disruption (tone-deaf during geopolitical crisis)
- Right: Focus on TSMC — stabilize chip production, prevent black market boom (neglects enforcement)
**Teaches:** C-11 (supply chain chokepoints), E-49 (geopolitics introduces new threats), simultaneous crises
**Refs:** → #monitoring--black-market-signal (black market consequence)
**Bars:** int ↓ (monitoring disrupted), pol ↓ (no good option)

### Intelligence quality

#### #intelligence--contradictory-reports
**Type:** crisis
**Entities:** isia-intelligence
**Topics:** #signals-intelligence, #satellite, #human-intelligence
**Situation:** Morning briefing, three items partially contradict: satellite data suggests new facility in SE Asia, signals intelligence says region is clean, human source claims facility exists but is a semiconductor plant not a compute cluster. Resources to investigate one lead thoroughly or all three superficially.
**Options:**
- Left: Investigate satellite lead thoroughly (highest probability)
- Right: Spread resources across all three (breadth over depth)
**Teaches:** Imperfect reports are the norm. DG makes decisions with contradictory intelligence. Information quality is a strategic dimension.
**Refs:** → #monitoring--heat-signature-foreign (what thorough investigation looks like)
**Bars:** int ↓ (resources spent)

#### #intelligence--rogue-lab-whistleblower
**Type:** crisis (chain starter)
**Entities:** rogue-lab, isia-enforcement, isia-intelligence
**Topics:** #whistleblower, #training-run, #raid
**Situation:** Whistleblower inside a private company claims employer running unauthorized training runs at night using undeclared chips in a legitimate datacenter. Credible but terrified.
**Options:**
- Left: Immediate raid — if true, every hour counts
- Right: Gather more intelligence — verify before acting (slower, avoids false raid that could discredit agency)
**Teaches:** B-3 (compute-centric risk), first-try problem, speed vs. certainty
**Refs:** → #monitoring--near-miss (if raid succeeds)
**Bars:** int ↓ (raid reveals methods), pol ↓ (if false alarm)

### Era transitions & endgame

#### #era--generational-shift
**Type:** report
**Entities:** public-cluster-skeptic, isia-communications
**Topics:** #generational-shift, #public-opinion, #election
**Situation:** Political advisor: median voter in key nations was 12 when pause began. No memory of the crisis. ASI risk = "something old people worry about." Youth political movements overwhelmingly anti-pause.
**Options:** None — briefing.
**Teaches:** E-44 (generational turnover), E-45 (counter-signaling)
**Refs:** → #political--election-year (this shifts election dynamics)
**Bars:** (shifts political landscape — future elections harder)

#### #era--safety-looks-solved
**Type:** crisis (era transition)
**Entities:** researcher-safety, isia-communications, gov-treaty-major
**Topics:** #safety-looks-solved, #public-opinion, #treaty-negotiation
**Situation:** Formal verification breakthrough for sub-ASI systems. Media: "alignment is solved." Chief scientist: "we solved the easy part." Three nations lobbying to relax treaty.
**Options:**
- Left: Embrace narrative — use good news for political support ("the pause is working!")
- Right: Correct narrative — explain sub-ASI ≠ ASI alignment (honest, politically costly — arguing against good news)
**Teaches:** Safety-looks-solved → geopolitical shift, sub-ASI alignment ≠ ASI alignment, game gets HARDER when safety appears achievable
**Refs:** → #era--race-begins (if narrative takes hold)
**Bars:** pol ↑ if embraced (temporarily), but triggers dangerous dynamic

#### #era--race-begins
**Type:** crisis (follows #era--safety-looks-solved)
**Entities:** gov-treaty-major, isia-enforcement
**Topics:** #covert-program, #safety-looks-solved, #treaty-negotiation
**Situation:** Two major nations have begun "defensive ASI programs" claiming safety is solved. Programs technically violate treaty. Nations claim treaty is outdated.
**Options:**
- Left: Enforce treaty — demand programs stop, invoke protective action provisions (major international crisis)
- Right: Negotiate new terms — acknowledge changed landscape, bring programs under oversight (legitimizes them)
**Teaches:** Race dynamic after safety looks solved, political confidence ≠ technical confidence, pause gets HARDER not easier
**Refs:** → #era--safety-looks-solved (trigger)
**Bars:** int ↓↓ (enforcement overwhelmed), pol ↓ (political crisis)

#### #era--threshold-cliff
**Type:** report
**Entities:** isia-safety-team, isia-enforcement
**Topics:** #threshold-drop, #algorithmic-progress, #chip-monitoring
**Situation:** Emergency briefing. Algorithmic progress at ~8x 2022 baseline. Lethal compute threshold dropped below what a well-funded university lab could assemble. Monitoring designed for datacenter-scale. Cannot monitor university-scale.
**Options:** None — briefing. But everything just changed.
**Teaches:** B-5/6 (threshold shrinks regardless), the fundamental time limit, enforcement designed for large actors can't handle small actors
**Refs:** → #monitoring--consumer-hw-threshold (earlier warning), → #era--pivotal-moment (urgency)
**Bars:** (game is now much harder — enforcement cards get worse options)

#### #era--pivotal-moment
**Type:** crisis (win condition trigger)
**Entities:** isia-safety-team, treaty-council, isia-political
**Topics:** #pivotal-act, #training-run, #experiment
**Situation:** After decades, researchers present formal proof of corrigibility for ASI-capable architectures. Can build corrigible low-impact ASI to monitor all compute globally. Acute risk period can end. But deployment requires largest training run ever — orders of magnitude above current threshold. If the proof is wrong, this is the last mistake.
**Options:**
- Left: Approve deployment — trust the proof, end the acute risk period
- Right: Demand additional verification — 2-5 years more testing (political window might close)
- Down (greyed out if treaty health low): Convene international conference for collective decision
**Teaches:** Win condition — the pause was buying time for this. Final decision is terrifying even with proof in hand. The stakes never go away.
**Refs:** all previous events led here
**Bars:** game outcome (win or continued play)

---

## Coverage gaps (to be filled)

Entity × topic intersections not yet covered by events above:

1. **chip-fabricator × #chip-monitoring × #algorithmic-progress** — What happens when chip fabs start making chips optimized for inference (not training)? Monitoring designed for training signatures may miss inference-based approaches.
2. **military × #protective-action × rogue-state** — The escalation to military force. Airstrikes on AI hardware. Treaty Article XII.
3. **researcher-upload × #uploading × isia-safety-team** — Upload research milestones. What happens when uploading looks achievable?
4. **public-cluster-accelerationist × #ideology × rogue-billionaire** — Ideologically motivated violation. "I deserve to be emperor of the galaxy." Different from state-backed or profit-motivated threats.
5. **ai-company × #model-weights × rogue-state** — Model weight theft. Frontier lab's weights exfiltrated by state intelligence. Can't un-copy weights.
6. **isia-enforcement × #raid × rogue-billionaire** — Private island / underground bunker scenario. Jurisdictional nightmares.
7. **public-cluster-liberty × #surveillance × #legal-challenge** — Constitutional challenge to ISIA surveillance powers. Courts may side with civil liberties.
8. **gov-treaty-major × #economic-pressure × #sanctions** — Treaty nation threatening to sanction the AGENCY (not a violator) for being too aggressive.
9. **isia-communications × #narrative × public-cluster-indifferent** — How do you make low-salience people care about ASI risk? Communication strategy cards.
10. **national-enforcement × #raid × #jurisdiction** — Domestic enforcement agency refuses to carry out ISIA directive. Cops don't want to search houses for GPUs.
