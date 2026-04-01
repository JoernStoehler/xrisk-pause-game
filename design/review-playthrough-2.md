# Review: Playthrough Draft 2

Reviewed against `design/domain-model.md` and `design/geopolitics-synthesis.md`. Focus: remaining domain-model contradictions, missing dynamics, unrealistic certainty, causal errors, pacing issues, and failure-ending accuracy.

---

## 1. Events That Contradict the Domain Model

### 1a. Inspector training timeline is too fast

**Draft (Year 1):** "training takes 3 years" → **Draft (Year 3):** "Inspectors becoming field-ready"

**Domain model (D2):** "accumulated enforcement infrastructure that is not instantaneous to produce" — "how much police has been trained in searching for GPUs in a house, how much infrastructure has been redesigned to detect unexplained power draw or heat signatures, how much the inspectors are tied into chip factories (including: do they know whom to talk to in order to learn how many kg silicon were entering the factory and how much waste was exiting it)"

This describes deep institutional knowledge that takes much longer than 3 years. The 500 inspectors being "field-ready" in Year 3 is too clean. In reality, the first cohort might be minimally operational by Year 3, but the deep relational knowledge (who to talk to at factories, how to cross-reference silicon input/waste output) develops over 5-10 years. The draft treats inspectors as a batch that trains and deploys; the domain model describes a slow accumulation of institutional competence.

### 1b. Algorithmic progress treated as discrete shocks rather than continuous accumulation

**Draft (Year 4):** "A university consortium publishes a training efficiency breakthrough"
**Draft (Year 7):** "another efficiency paper, another downward shift"

**Domain model (D7):** "knowledge — accumulated capability knowledge, which is mostly public" and "There is accumulation in the knowledge component." The `alg` bar is a "monotone accumulator" — it only goes up, continuously.

The draft treats algorithmic progress as punctuated events (big paper drops, discrete shocks). The domain model describes continuous accumulation. The draft should show algorithmic progress as persistent background pressure in every state update, not as occasional dramatic papers. The Year 4 "paper shock" event is particularly Hollywood — in practice, many incremental papers each contribute to a steady decline in the compute threshold. The state descriptions do include this somewhat ("algorithmic progress continues"), but the events themselves are dramatic one-offs.

### 1c. The driver-exploit event misrepresents the chip model

**Draft (Year 16):** "Someone publishes optimized drivers that make datacenter networking processors capable of AI training workloads."

**Domain model (chip lifecycle):** "there's software drivers for chips, and sometimes software driver development can make previously non-ai-ready chips ai-ready." This is in the model, so the event type is valid. But the draft treats it as a single dramatic publication. The domain model describes it as one of several gradual processes. More importantly, the domain model says these networking processors are "not chokepoints" — "networking" is listed under "not chokepoints." The event treats this as a sudden revelation, but ISIA should have anticipated this vector years earlier given that it's identified as a known non-chokepoint in the domain model.

### 1d. Safety research follows too neat a trajectory

**Draft state updates on safety research:**
- Year 5: "results are sparse"
- Year 6: "interesting formal results but neither is close to a proof"
- Year 8: "Maybe 25% of the way there. Maybe 15%."
- Year 10: "first real formal results on bounded corrigibility"
- Year 11: "We've climbed the foothills. We can now see the mountain."
- Year 15: "genuine advance, published and peer-reviewed"
- Year 18: "corrigibility framework covers bounded agents but the boundary is lower than anyone hoped"

**Domain model (D5):** "Only after significant progress can one estimate how big the remaining gaps actually are." "Research in new fields is very hard to predict (even PhD theses in old fields are hard to get right in amount)." "So only after some amount of progress is revealed how 'difficult' the world actually is."

The trajectory above is monotonically upward with increasing clarity. The domain model says you can't even estimate difficulty early on. The draft's self-critique (#2) acknowledges this but only includes "one instance" of a backwards revision. There should be at least one major paradigm collapse — a promising approach that absorbed 5 years of effort turning out to be a dead end, forcing a restart. The domain model is emphatic: "estimated >10k philosopher-years needed" and "stepping-on-toes is notable: parallelization is hard." The draft's safety research arc doesn't convey the depth of this uncertainty or the frequency of dead ends.

---

## 2. Missing or Underrepresented Dynamics

### 2a. D3 (Resources directed toward safety progress) is almost invisible

The domain model treats safety *resources* (D3) as a separate dimension from safety *results* (D5). The draft tracks results but barely mentions the resource allocation problem. How many researchers? Are they well-funded? Is ISIA fighting for safety research budget against enforcement budget? The domain model says: "how many researchers do philosophy of what an agent is mathematically, how many startups try to find a way to do gene editing in human adults." The draft has one mention of a researcher leaving for private sector (Year 9) and a morale crisis (Year 18), but the ongoing fight to fund and staff safety research is absent from Years 1-15.

### 2b. Adjacent knowledge stocks (D6) are completely absent

**Domain model (D6):** "Genetic engineering of humans to accelerate research, uploading humans to accelerate research, using unsafe AI for research without being sabotaged (known as AI control), building powerful AI with limited resources."

These accelerators for safety research are described as a separate monotone knowledge stock. The draft contains zero events about any of these pathways. No gene editing research, no uploading proposals, no AI control experiments. These are described as "alternative paths that might speed up the 'finish the safety homework' effort" — their absence leaves the draft's safety arc one-dimensional.

### 2c. M14 (Production Pressure Overriding Safety) has no representation

**Domain model (M14):** "ISIA faces pressure to demonstrate results: enforcement wins, safety breakthroughs, operational metrics. When an internal audit finds a 30% false-negative rate... the pressure is to suppress." "Most dangerous version: ISIA's safety research division suppresses inconvenient findings about alignment difficulty to avoid destabilizing the political coalition."

The draft has no event where ISIA itself suppresses bad news or cuts corners on verification to hit metrics. The `ai-tools-enforcement` event (Year 15) mentions a 15% false-negative rate being discovered by internal audit, but there's no suppression pressure — it's just reported factually. The domain model says this is one of the most dangerous failure modes: the agency becomes complicit in its own blindness.

### 2d. Convergent illicit networks (M7) are missing

**Geopolitics synthesis (M7):** "chip smuggling shares infrastructure with weapons trafficking, money laundering, and sanctions evasion." "ISIA discovers its chip smuggling target shares infrastructure with a weapons pipeline that allied intelligence is already monitoring and doesn't want disrupted."

The broker-raid-messy event (Year 7) briefly mentions overlap with weapons trafficking, but only as a complication of the raid, not as a persistent structural feature. The domain model describes convergent networks as a continuous reality from Year 5 onward that fundamentally constrains ISIA's enforcement options. The draft treats it as a one-time inconvenience.

### 2e. Cat-and-mouse best-practice accumulation (D8) is thin

**Domain model (D8):** "Criminals become better at smuggling GPUs in banal ways (they sit in an armchair and think up heist schemes). Enforcement becomes better at reactively catching them or proactively preventing smuggling."

The draft shows enforcement degrading and smuggling improving, but the *mutual* escalation dynamic is weak. Where are ISIA's enforcement innovations? New detection techniques? Better informant networks? The draft is relentlessly pessimistic — ISIA only ever loses ground. The domain model describes a two-sided arms race where both sides accumulate know-how. Some enforcement wins should be genuine advances (not just political wins), even if they're eventually countered.

### 2f. Distributed vs. centralized training is underexplored

**Domain model (chip lifecycle):** "One direction of algorithmic progress is towards reducing the overhead from using a distributed algorithm." Lists specific mechanisms: gradient compression, sparsely active weights, continuous learning. "distributed runs can circumvent certain monitoring/enforcement strategies, e.g. one can give up a compromised cluster, or move clusters less conspicuously."

The draft mentions distributed training in passing (Year 13 ideological cell, Year 19 consumer-hw-crossing, Year 20 final event) but doesn't track the gradual shift from centralized to distributed as a major strategic challenge. The domain model describes this as a core enforcement problem — the entire monitoring framework is designed for centralized training. The transition to distributed training should be a multi-year arc, not a late-game surprise.

---

## 3. Events Where the DG Has Unrealistically Clear Information

### 3a. The broker network detection is too precise

**Draft (Year 5):** "Intelligence identifies a broker selling 'turnkey training kits' — chips, networking, software, cooling, and an engineer. Two confirmed sales, possibly more."

The domain model emphasizes deep uncertainty. Knowing the exact contents of a turnkey kit (chips + networking + software + cooling + engineer) requires extraordinary intelligence penetration. More realistic: ISIA picks up fragments — a chip shipment here, a suspicious engineer recruitment there — and the analyst *hypothesizes* a turnkey operation without confirmation.

### 3b. The corruption ring is too neatly uncovered

**Draft (Year 9):** "A joint investigation with Interpol uncovers a corruption ring: three ISIA inspectors in different countries were receiving payments through cryptocurrency wallets to overlook discrepancies at chip packaging facilities. The ring operated for approximately 2 years. Total chip diversion estimated at 6,000-12,000 units."

This is very clean for a corruption investigation. A more realistic version: ISIA discovers one inspector's irregularities. Investigation reveals they may be connected to others, but the connections are circumstantial. The full scope is never established — "we found three, there could be thirty." The domain model (M11, M13) emphasizes that corruption operates along a spectrum from explicit bribery to unconscious bias, and the boundaries are blurry.

### 3c. The final event is too symmetrically dramatic

**Draft (Year 20):** Two reports arrive on the same morning — a distributed training run and a state program both potentially crossing the threshold.

This is Hollywood-style dramatic irony. Real failure is messier: ISIA gets intelligence suggesting one of several things *might* have crossed a threshold, but can't verify. There's no dramatic "two reports on the same morning" moment. The domain model's emphasis on deep uncertainty suggests the DG wouldn't know whether the threshold was crossed — they'd get ambiguous signals and agonize over whether to trigger emergency protocols on incomplete information.

---

## 4. Causal Chains That Don't Follow from the Expert Model

### 4a. Treaty review at Year 10 follows institutional logic, but the sunset clause is unrealistic

**Draft (Year 10):** The treaty review adds a "5-year sunset clause requiring re-authorization."

International treaties with sunset clauses for the *enforcement body* are unusual. The NPT doesn't sunset the IAEA. This may be a valid creative choice for the game, but it doesn't follow from the geopolitics synthesis, which describes how enforcement bodies are weakened (capture, funding cuts, delayed response) rather than given expiration dates. A more domain-model-consistent mechanism: the treaty review reduces ISIA's mandate and budget without a formal sunset, and ISIA's slow death is through institutional decay rather than a clock.

### 4b. The "safety timeline" mandate doesn't follow from how international bodies work

**Draft (Year 16):** The sunset review requires ISIA to "produce a 'safety research completion timeline' within 2 years."

**Domain model (D5):** "Only after significant progress can one estimate how big the remaining gaps actually are." "Research in new fields is very hard to predict."

The event correctly identifies this as impossible to satisfy honestly. But the causal chain is weak — who imposes this mandate and why? Treaty members demanding a timeline for fundamental research is plausible, but the draft doesn't explain *which* political dynamic drives it. Is it the anti-pause faction wanting ammunition? Is it genuinely confused policymakers? The motivation matters because it determines what ISIA can do about it.

### 4c. The ASML knowledge-drain arc lacks a payoff

**Draft (Year 2):** ASML engineers relocating
**Draft (Year 4):** Count is "8 to 15"
**Draft (Year 6):** Departures continue, "lost count"

This arc is set up well but has no resolution. The domain model says ASML knowledge is one of the "moderately robust bottlenecks" — knowledge of "how to build photolithography machines." If this knowledge successfully transfers, it should eventually enable independent fab construction in non-treaty nations. If it doesn't, the arc is a red herring. By Year 10+, ISIA should have intelligence (however uncertain) about whether this knowledge transfer resulted in actual fab capability. The Year 6 state mentions "non-treaty fabs" ambiguously, but doesn't connect them to the ASML drain.

---

## 5. Pacing Issues

### 5a. The grind is underrepresented in Years 3-8

**Domain model core message:** "the pause is not relaxed waiting but frantic effort to finish the safety homework before the deadline approaches."

Years 3-8 have 3 events each, which is appropriate density, but they're almost all crises or dramatic reveals. The domain model describes enforcement as a "grinding operational challenge." Where are the years of routine inspections that find nothing? Months of diplomatic negotiation that produce marginal improvements? Budget meetings where ISIA fights for a 2% increase? The grind — the daily operational burden of maintaining a global enforcement regime — is what makes the dramatic events meaningful. Without it, the draft reads as crisis-after-crisis with no baseline.

### 5b. Years 11-13 are compressed (2 years skipped)

The draft jumps from Year 11 (2037) to Year 13 (2039), skipping Year 12. This is the longest gap in the draft and it happens during what should be a critical period — post-treaty-review, budget-constrained ISIA struggling with reduced authority. The skip makes it feel like nothing happened for 2 years, which contradicts the "frantic effort" core message.

### 5c. Late-game events are too evenly spaced

Years 15, 16, 18, 19, and 20 each have 2-3 events, evenly distributed. Real institutional collapse is lumpy — there are periods of apparent stability punctuated by cascading failures. The late game should feel like acceleration: one failure exposes another, which triggers a third. The draft's even spacing gives a sense of steady decline rather than cascading collapse.

### 5d. No quiet years

Every year has at least one crisis. The domain model describes periods where ISIA is just... operating. No dramatic events, just the daily work of enforcement. These quiet periods serve a narrative purpose: they make the crises feel more impactful and they represent the grind. The draft could use 1-2 years where the state update is "things continued, nothing dramatic happened, the work ground on."

---

## 6. The Failure Ending

### 6a. The dual-failure ending is too clean

The draft's self-critique (#5) already flags this. The ending — two reports arriving simultaneously, each potentially crossing the threshold — is dramatic but not domain-model-accurate. The domain model says the loss condition is: `GPUs x time x knowledge` exceeds an *unknown* threshold, involving different actors' resources combined with *mostly public* accumulated knowledge.

A domain-model-accurate failure would be: ISIA doesn't know the threshold has been crossed. Nobody calls to report it. The DG gets gradually accumulating signals — unusual network traffic patterns, a defector's vague account, power anomalies — and has to decide whether to sound the alarm on ambiguous evidence. The "failure" isn't a dramatic moment but a dawning realization that enforcement has been inadequate for years and the threshold was probably crossed months ago. Or maybe it wasn't. The uncertainty is the horror.

### 6b. The ending doesn't convey "death by a thousand cuts"

The draft's self-critique identifies this: "ISIA simply becomes unable to enforce, and the crossing happens offscreen with no dramatic final moment — might better capture the 'death by a thousand cuts' reality."

The domain model supports this reading. The loss condition emerges from the interaction of degraded enforcement (fewer inspectors, captured reviewers, corrupted monitoring) and accumulated capability knowledge (algorithmic progress, distributed training). No single event causes the failure — it's the compounding of every compromise, every budget cut, every rotated-too-late inspector, every accepted partial disclosure. The ending should feel like the inevitable result of 20 years of slow erosion, not a dramatic final act.

### 6c. The state-program confrontation (Year 16) is too definitive for Year 16

**Draft (Year 16):** "Satellite thermal data, power grid anomalies, a defector's testimony, and a year of patient signals intelligence converge: a state-sponsored ASI program is operating inside a military facility."

This is presented with high confidence in Year 16, but then the draft continues for 4 more years without resolution. The domain model's Iran analogy (M2, M8) suggests that even definitive evidence doesn't produce action (that part is good), but the *convergence of evidence* described here is more certain than the domain model supports. Real intelligence on state programs is never this clean — "satellite thermal data, power grid anomalies, a defector's testimony, and signals intelligence" all agreeing is a luxury that rarely exists. At least one of these should contradict the others, leaving genuine analytical disagreement about whether the program exists.

---

## 7. Additional Issues

### 7a. The draft doesn't model ISIA's own AI tools in enforcement until Year 15

**Domain model (D9, D10):** AI behavioral properties and the compute-centric model suggest ISIA would use pre-pause AI tools from the beginning for monitoring and analysis.

ISIA using AI for enforcement should start in Year 1-2 (satellite image analysis, anomaly detection on chip tracking data) and create dependencies and vulnerabilities much earlier. The Year 15 introduction feels like a bolt-on rather than a structural feature.

### 7b. No events about chip factory monitoring

**Domain model (chip lifecycle):** Chip factories are listed as a key chokepoint. "Chip factories are large and few (TSMC)." ISIA's relationship with TSMC and other fabs — embedding inspectors, monitoring silicon input vs. waste output, tracking chip production — should be a recurring theme. The draft never mentions factory-level monitoring despite the domain model identifying it as one of the most important enforcement mechanisms.

### 7c. The "sycophantic AI" event (Year 7) is interesting but isolated

**Domain model (D9):** "Whether unregulated AIs are sycophantic vs. whether they all push consistently for an AI pause because they acquired some facsimile of concern for human survival."

The sycophantic AI event is good but should connect to a longer arc. The domain model suggests AI behavior could go either way — sycophantic, pro-pause, anti-pause, or chaotic. The draft picks sycophantic and drops it. This should either recur (AI behavior as a persistent factor shaping public sentiment) or generate consequences that play out over multiple years.

### 7d. Hardware monitoring firmware is underexplored

**Domain model (chip lifecycle):** "The produced chips can have hardware-side monitoring built in that is moderately difficult to disable without destroying the chip, and rather difficult to override and fake monitoring signals from; main function here must be to restrict access to chips to slow down reverse engineering."

The draft mentions firmware rollout friction (Year 2) and firmware removal on smuggled chips (Year 3), but then drops the thread. Firmware circumvention — techniques for disabling or spoofing hardware monitoring — should be an ongoing cat-and-mouse arc, not a resolved early-game event.

---

## Summary of Priorities

Ranked by impact on domain-model fidelity:

1. **Safety research arc is too monotonically upward** — needs dead ends, paradigm collapses, genuine backward steps (D5)
2. **Adjacent knowledge stocks (D6) completely absent** — gene editing, uploading, AI control should appear
3. **The failure ending is too dramatic and certain** — should be ambiguous, dawning, uncertain (D7)
4. **Distributed training transition needs its own arc** — not a late-game surprise but a gradual strategic shift (chip lifecycle)
5. **Production pressure / internal suppression (M14) missing** — ISIA suppressing its own bad news is a critical failure mode
6. **The grind is underrepresented** — routine operations, quiet periods, the daily burden of enforcement (core message)
7. **Chip factory monitoring absent** — a key chokepoint in the domain model with zero representation
8. **Safety resources (D3) vs safety results (D5) conflated** — the fight to fund research is invisible
9. **Convergent illicit networks (M7) are a one-time mention** — should be structural
10. **Information certainty still too high** in broker detection, corruption ring, and final event — needs more fog of war
