---
title: "Decision Making under Deep Uncertainty: From Theory to Practice"
author: "Vincent A. W. J. Marchau, Warren E. Walker, Pieter J. T. M. Bloemen, Steven W. Popper (Editors)"
year: 2019
source_url: "https://doi.org/10.1007/978-3-030-05252-2"
source_format: pdf
downloaded: 2026-03-12
encrypted: false
notes: "Open-access Springer book (CC BY 4.0) providing the first unified treatment of decision-making frameworks designed specifically for deep uncertainty — situations where experts cannot agree on models, probabilities, or how to value outcomes. Covers five main approaches: Robust Decision Making (RDM), Dynamic Adaptive Planning (DAP), Dynamic Adaptive Policy Pathways (DAPP), Info-Gap Decision Theory, and Engineering Options Analysis. Applications drawn primarily from water management and climate policy, but frameworks generalize to any long-horizon planning problem under irreducible uncertainty. Relevant to the ISIA game's core design challenge: how does an agency manage a long-horizon safety program (AI alignment research) when timeline, feasibility, and cost are all deeply uncertain?"
---

# Decision Making under Deep Uncertainty: From Theory to Practice

**Vincent A. W. J. Marchau, Warren E. Walker, Pieter J. T. M. Bloemen, Steven W. Popper (Editors)**
Springer, 2019. Open Access, CC BY 4.0.

---

## Structure

- **Part I:** Five DMDU approaches (theory chapters)
- **Part II:** Application case studies for each approach
- **Part III:** DMDU in practice — institutions, processes, governance
- **Part IV:** Taxonomy and synthesis; reflections on public policy

---

## I. Deep Uncertainty: Definition and Taxonomy

### What Deep Uncertainty Is

The book adopts the following definition (from Lempert, Popper, and Bankes 2003):

> Deep uncertainty exists when "the experts do not know or the parties to a decision cannot agree upon (1) the appropriate models to describe the interactions among a system's variables, (2) the probability distributions to represent uncertainty about key variables and parameters in the models, and/or (3) how to value the desirability of alternative outcomes."

This is uncertainty at the level of the framework itself — not just uncertain inputs to an agreed model, but uncertainty about which model is right, whether any model is right, and what counts as a good outcome.

### The Five-Level Taxonomy of Uncertainty

Walker et al. (2003), summarized in Chapter 1, distinguishes uncertainty along four dimensions: the future state of the world (X), the system model (R), outcomes (O), and stakeholder weights (W). Against these dimensions, five levels are defined:

**Complete determinism:** All four dimensions known precisely. Theoretical limit.

**Level 1 — Known unknowns, unquantified:** One admits uncertainty but does not quantify it. Sensitivity analysis on model parameters. Applies to short-term, stable systems (e.g., mail delivery). Standard engineering conservatism lives here.

**Level 2 — Probabilistic uncertainty:** System model or inputs can be described probabilistically; alternative futures have assignable probabilities. Standard statistics, expected-value optimization, and decision theory under risk apply. *Example:* choosing a supermarket checkout line.

**Level 3 — Scenario uncertainty:** A limited set of plausible futures, but probabilities cannot be assigned. Traditional scenario planning applies — design the plan that performs best across the scenarios. *Example:* keeping an umbrella in the car. The assumption is that the range of scenarios is comprehensive enough that a static robust policy can be found.

**Level 4 — Deep uncertainty:** Two variants:
- **Level 4a:** Many plausible futures, but knowledge exists about the space of possibilities (unknown but bounded)
- **Level 4b:** "We don't know what we don't know" — Taleb's Black Swans. Unknown-unknown territory.

At Level 4, analysts "struggle to (4a) or cannot (4b) specify the appropriate models... select probability distributions... and/or value the desirability of alternative outcomes." Standard methods (levels 1–3) fail because their foundational assumptions don't hold.

### When Deep Uncertainty Requires Different Methods

DMDU approaches yield benefits over traditional "predict-then-act" when three conditions hold simultaneously:
1. **High contextual uncertainty (X):** Deep, not well-characterized
2. **Many policy degrees of freedom:** More choices available
3. **High system complexity (R):** Experts disagree significantly on models

When only one or two conditions apply, scenario planning or traditional methods may suffice.

### The Paradigm Shift: "Monitor and Adapt"

Traditional approaches use the **predict-then-act** paradigm: forecast the future, optimize for it, implement. This fails under Level 4 uncertainty because the forecasts themselves are unreliable.

DMDU approaches use the **monitor-and-adapt** paradigm: commit to near-term actions, monitor how the future unfolds, and adjust as knowledge is gained. "In a rapidly changing world, fixed static policies are likely to fail."

---

## II. The Five DMDU Approaches

### 1. Robust Decision Making (RDM)

**Core idea:** Seek strategies that perform acceptably well across a wide range of plausible futures, rather than optimally under a predicted future.

**Key elements (Lempert et al. 2003):**
- Consider a **multiplicity of plausible futures** (an ensemble) — stress-test all proposed policies
- **Seek robust, not optimal strategies:** A robust strategy performs well "compared to the alternatives, over a wide range of plausible futures"
- **Employ adaptive strategies:** Near-term actions + signposts to monitor + contingency actions triggered by signpost signals
- Use the computer to facilitate human deliberation, not to recommend a specific answer

**Analytical structure (XLRM matrix):**
- **X** — Exogenous uncertainties
- **L** — Policy levers (controllable)
- **R** — Relationships (system model)
- **M** — Measures of performance

**Five-step process:**
1. Decision framing (define X, L, R, M)
2. Evaluate candidate strategies across many simulated futures
3. Vulnerability analysis — use Scenario Discovery to find which futures cause strategies to fail
4. Tradeoff analysis among strategies across policy-relevant scenarios
5. Develop new robust strategies incorporating adaptive elements

**Robustness criteria:** RDM typically uses a satisficing domain criterion (strategy performs acceptably in the most futures) or regret minimization, not expected utility maximization.

**Key tool — Scenario Discovery:** A statistical method that identifies which combinations of uncertain factors best explain when a strategy fails. Produces "policy-relevant scenarios" that illuminate vulnerabilities clearly and reproducibly.

---

### 2. Dynamic Adaptive Planning (DAP)

**Core idea:** Design a plan explicitly for adaptation. Rather than a single static plan optimized for one future, build a plan that specifies near-term actions, anticipates vulnerabilities, and pre-specifies what to do if key assumptions fail.

**Roots in Assumption-Based Planning (ABP):**
- An **assumption** is any assertion about the world that underlies the plan
- A **critical (load-bearing) assumption** is one whose failure would cause the plan to miss its objectives
- A **vulnerable assumption** is one that plausible events could cause to fail within the plan's lifetime

**Five design steps (Walker, Marchau, Kwakkel 2001/2010):**

**Step I — Stage Setting:** Define goals, objectives, constraints, definition of success, and the set of possible actions. Identify necessary conditions for success — these become the basis for all vulnerability analysis.

**Step II — Assembling an Initial Plan:** From the available actions, build an initial plan that meets stated goals. This is equivalent to traditional policy analysis.

**Step III — Increasing Robustness:** Identify vulnerabilities and opportunities in the initial plan. Specify five types of anticipatory actions:
- **Mitigating (M):** Reduce adverse impacts from *certain* vulnerabilities
- **Hedging (H):** Reduce adverse impacts from *uncertain* vulnerabilities (like buying car insurance)
- **Seizing (SZ):** Take advantage of *certain* opportunities
- **Exploiting (E):** Take advantage of *uncertain* new developments
- **Shaping (SH):** Proactively affect external forces to reduce chances of negative outcomes or increase chances of positive ones

**Step IV — Setting up the Monitoring System:** Define **signposts** and **triggers**:
- **Signposts** specify the types of information and variables to monitor — they show whether the plan is achieving its goals and whether vulnerabilities are materializing
- **Triggers** are the critical signpost levels or events that, when reached, signal that contingent actions must be taken

**Step V — Preparing Trigger Responses:** Pre-specify contingent actions linked to each trigger:
- **Defensive actions (DA):** Preserve plan benefits, respond to challenges without changing the plan itself
- **Corrective actions (CR):** Adjustments to the plan triggered by specific events
- **Capitalizing actions (CP):** Exploit unexpected opportunities
- **Reassessment (RE):** When fundamental assumptions underlying the plan have been invalidated — the entire plan is re-examined, though prior learning accelerates this

**Adaptive robustness vs. static robustness:** DAP achieves robustness not by finding one policy that works across all futures (static), but by building in the ability to learn and adjust (adaptive robustness). The monitoring + trigger system is the learning mechanism.

---

### 3. Dynamic Adaptive Policy Pathways (DAPP)

**Core idea:** Plan decisions as a **sequence over time** rather than a single choice. Different conditions may require different actions at different times. DAPP maps out multiple possible "pathways" — sequences of decisions — and helps identify which pathway to follow as conditions unfold.

**Two foundational concepts:**

**Adaptation Tipping Points (ATPs):** The conditions under which a current policy action fails to achieve its stated objectives. An ATP is not a forecast of when failure will occur — it is a threshold condition in uncertainty space that defines when action A is no longer sufficient and something else is needed. "The point at which the current approach reaches its limits."

**Adaptation Pathways:** Sequences of policy actions (A → B → C) where each action is adopted once its predecessor reaches its ATP. Multiple pathways through the same decision space are possible. Different pathways involve different timing, cost, and flexibility trade-offs.

**Five-step process:**

**Step 1 — Problem framing:** Define system, objectives, constraints, indicators. Specify major uncertainties (external forces, system structure, valuation of outcomes). Generate ensemble of plausible futures.

**Step 2 — Assess vulnerabilities and ATPs:** For each plausible future (treated as a "reference case" with no new policies), identify when current actions fail to meet objectives. Identify both vulnerabilities (actions that could prevent objectives) and opportunities (developments that could help).

**Step 3 — Identify contingent actions and assess their ATPs:** Develop alternative policy actions to address vulnerabilities and seize opportunities. Screen out ineffective actions. Assess the ATPs for each promising action.

**Step 4 — Design and evaluate pathways:** Assemble candidate pathways from the action set. Visualize as a **pathway map** (metro map format), with time or changing conditions on one axis. Evaluate pathways on cost, urgency, severity of impacts, path dependency, and option-preservation. Some sequences are impossible or prohibitively costly; others are natural transitions.

**Step 5 — Design the adaptive strategy:** From preferred pathways, specify:
- **Initial actions** (what to do now)
- **Long-term options** (what to keep available)
- **Enabling measures** (what preserves options)
- **Signposts to monitor** and **trigger points** that signal when the next pathway step should be activated

**DAPP vs. DAP:** DAP focuses on protecting an initial plan from failing (protective adaptivity). DAPP extends this to the full temporal sequence of decisions — not just "what if our plan fails" but "what comes after, and after that." DAPP adds **sequencing and path dependency** as explicit design dimensions.

**Key design principle for signposts:** Signposts must be both **timely** (signal with enough lead time to prepare and implement follow-up actions before an ATP is reached) and **reliable** (no missed signals, no false alarms). Surprisingly, indicators directly tied to policy objectives (norm violations) are often *not* the best signposts — they may only signal failure after the ATP is already past. Better signposts are often leading indicators of driving forces (trends in the physical environment, technology, societal values) that give earlier warning.

---

### 4. Info-Gap Decision Theory (IG)

**Core idea:** Rather than enumerating all possible futures, quantify how far from a "best estimate" scenario the world can deviate before a candidate strategy fails. Choose strategies with the largest **radius of stability** — the most tolerance for deviation.

**Key distinction:** IG doesn't produce insights into the full uncertainty subspace where a policy fails; instead it answers "how wrong can my model be before this strategy breaks?" This makes the choice of reference scenario and distance metric central analytic decisions.

**Limitation:** IG addresses modeled uncertainty only — it does not handle "Black Swan" events outside the modeled space. In contrast to RDM, DAP, and DAPP, unknown-unknown uncertainty is not incorporated.

---

### 5. Engineering Options Analysis (EOA)

**Core idea:** Assign economic value to **flexibility** in system design. Rather than committing to a fixed design, build in options (real options in an engineering context) whose value increases as uncertainty resolves. Choose designs that preserve the ability to expand, contract, or switch in the future.

**Key contribution:** EOA provides rigorous economic valuation of "keeping options open" — a concept that other DMDU approaches invoke but don't always quantify.

---

## III. Taxonomy of DMDU Building Blocks

Chapter 15 (Kwakkel and Haasnoot) provides a comparative taxonomy identifying five building-block dimensions across which all DMDU approaches make choices:

**1. Policy architecture:** How is adaptivity structured?
- **Protective adaptivity** (ABP, DAP, RDM): Start with an initial plan; use contingent actions to protect it from failing
- **Dynamic adaptivity** (DAPP): Explicitly sequences changes to the plan over time; the plan itself evolves

**2. Generation of scenarios:** How are plausible futures produced?
- Sampling (RDM, MORDM): Random/computational sampling across uncertainty space
- Transient scenarios (DAPP): Time-dependent scenarios that evolve
- Reference scenario outward sampling (IG): From a point estimate outward

**3. Generation of policy alternatives:** Where do candidate policies come from?
- Pre-specified and iteratively refined (RDM, DAP)
- Many-objective search (MORDM): Computational optimization generates alternatives
- Pre-specified from available actions (DAPP)

**4. Robustness metrics:** How is "good enough" defined?
- Satisficing / domain criterion: Strategy performs acceptably in the most futures (RDM, DAP, DAPP)
- Regret: Strategy minimizes worst-case gap from best achievable outcome
- Radius of stability (IG): Maximum tolerable deviation from reference scenario

**5. Vulnerability analysis:** How are failure conditions identified?
- Scenario Discovery (RDM): Statistical partitioning of uncertainty space by success/failure
- Adaptation Tipping Points (DAPP): Threshold conditions for specific actions
- Qualitative judgment (ABP, DAP)

**The taxonomy's practical value:** Rather than arguing "which approach is best," practitioners can ask which combination of building blocks fits their specific problem context — data availability, time horizon, number of alternatives, model availability, stakeholder configuration.

---

## IV. Signposts and Triggers in Detail

Signposts and triggers are the operational core of the "monitor and adapt" paradigm. They appear in all adaptive DMDU approaches (RDM, DAP, DAPP).

### Signposts

A **signpost** specifies a variable or type of information to monitor over time. Signposts serve two functions:
1. **Plan performance signals:** Indicate whether the current plan is achieving its goals
2. **Vulnerability signals:** Indicate whether identified vulnerabilities are materializing (or opportunities arising)

Effective signposts are:
- **Timely:** Must provide signal with enough lead time to prepare and implement the next action before an Adaptation Tipping Point is reached. Lead time = preparation time + implementation time + activation time for the new action.
- **Reliable:** Must not produce false alarms or miss genuine signals. This argues against choosing only objective/norm-based indicators, which often only trigger after the ATP is already past.
- **Specific:** Tied to identified assumptions or vulnerabilities, not generic monitoring for its own sake

**Counterintuitive design principle:** The best signpost indicators are often not the policy outcome variables themselves (flood damage, treaty violations, etc.) but rather **leading indicators of the driving forces** — trends in the external environment (technology trajectories, political dynamics, economic signals) that systematically predict when outcome thresholds will be crossed.

### Triggers

A **trigger** is the critical value or event associated with a signpost that, when reached, signals that a pre-specified contingent action should be taken. Triggers convert continuous monitoring into discrete decisions.

**Trigger design principles:**
- Triggers should be pre-specified *before* implementation, not decided ad hoc when a signal appears. Pre-specification reduces political pressure to rationalize inaction.
- Triggers can be quantitative thresholds (e.g., demand grew 25% slower than forecast → delay capacity investment) or qualitative events (e.g., hub carrier moves 50% of operations → begin terminal redesign)
- Multiple trigger levels for the same variable can activate different response types (defensive → corrective → reassessment)

**Four types of trigger responses (DAP framework):**
1. **Defensive (DA):** Leave the plan unchanged; respond to preserve its benefits or meet outside challenges
2. **Corrective (CR):** Adjust the plan in response to specific triggers
3. **Capitalizing (CP):** Exploit emerging opportunities
4. **Reassessment (RE):** Fundamental reexamination when the plan's foundational assumptions are invalidated

---

## V. Application to Research Programs with Unknown Timelines and Costs

Although the book's primary case studies involve water management and climate adaptation, the frameworks generalize explicitly to any long-horizon planning problem under deep uncertainty. Chapter 17 explicitly calls for broadening DMDU applications to "transportation, energy, security, health care, and spatial planning."

### The Structural Parallel

A research program aimed at solving a technically difficult problem with an unknown timeline and uncertain costs is structurally identical to the problems DMDU was designed for:
- **Deep uncertainty about X (external forces):** When will the problem be solved? What breakthroughs are needed?
- **Deep uncertainty about R (system model):** What research approaches are likely to succeed?
- **Deep uncertainty about O (outcomes):** What does "solved" actually mean? What counts as a partial solution?
- **Deep uncertainty about W (valuation):** How do we compare early partial success against delayed comprehensive success?

Standard project management (predict-then-act) assumes a known work breakdown structure, estimable durations, and predictable resource requirements. These assumptions fail for basic research.

### DMDU Applied to Research Management

**Robust Decision Making framing:**
- X = unknown breakthroughs, competitor progress, regulatory timelines
- L = research prioritization, staffing, external collaborations, publication strategy
- R = current best theories of what approaches are most promising
- M = safety benchmarks, interpretability metrics, capability evaluations

Rather than committing to a fixed research roadmap (predict-then-act), use RDM to find a research strategy that performs acceptably across many possible futures for what the hard problems turn out to be.

**Dynamic Adaptive Planning framing:**
- Initial plan = current best research agenda
- Critical assumptions = which technical approaches are promising; what "alignment" requires; that sufficient resources will remain available
- Signposts = capability evaluations, theoretical progress indicators, competitor developments
- Triggers = if approach X shows no progress after 2 years → shift resources; if external threat materializes → accelerate specific track
- Contingent actions = pre-specified pivots that are designed *in advance* rather than chosen under pressure

**DAPP framing:**
- Pathway map = sequences of research priorities contingent on what is learned
- ATPs = points where current research strategy demonstrably fails to make progress
- The map forces explicit reasoning about path dependency: some research tracks must be pursued before others become possible; some lock out options; some are irreversible commitments

### Key DMDU Insights for Research Program Management

1. **"Predict then act" fails for basic research.** No credible forecast of when alignment will be solved exists. Plans premised on specific timelines will be wrong. The correct paradigm is "monitor and adapt."

2. **Static robustness is insufficient.** Finding a research strategy that looks good across today's scenarios is not enough — the world will change in ways not captured by current scenarios. Adaptive robustness (learning mechanisms built into the plan) is required.

3. **Pre-specify pivots.** The most important DMDU insight for research management: decide *in advance* what signals would cause a change in direction, and what that change would be. Ad hoc pivots under pressure produce worse decisions than pre-specified trigger responses.

4. **Distinguish types of actions:**
   - **Mitigating actions** (certain vulnerabilities): e.g., if a key researcher leaves, the handoff plan is already designed
   - **Hedging actions** (uncertain vulnerabilities): e.g., maintain parallel research tracks against the possibility that the primary approach fails
   - **Shaping actions:** Proactively influence external conditions — e.g., work to shape evaluation standards so the program's eventual outputs will be recognized as successful

5. **Design signposts for lead time, not just accuracy.** By the time capability evaluations demonstrate that alignment research has failed, the deadline may be past. The monitoring system needs leading indicators — theoretical milestones, interpretability benchmarks, evaluation methodology progress — that give actionable signal months or years before a definitive verdict is available.

6. **Commit to short-term actions while keeping long-term options open.** This is the fundamental DMDU principle for long-horizon programs. Don't try to solve everything now; instead, make the near-term investments that keep the most options available for the future.

---

## VI. Implementation Challenges

Chapter 17 (Conclusions) identifies recurring barriers when applying DMDU approaches in practice:

**Political narrative requirement:** Adaptive programs are harder to sell politically because they don't promise a fixed outcome. An "appealing and convincing narrative" is required — illustrated by the Dutch Delta Programme's use of pathway maps to communicate the approach to parliament.

**Keeping politics at arm's length:** Once committed to a long-term adaptive program, political interference in day-to-day decisions is destructive. The Dutch model: Parliament and Senate agreed on the program's necessity, secured it through legislation (the Delta Act), assigned an independent Commissioner, and guaranteed funding — then stayed out of operational decisions.

**Primary vs. secondary rules:** Primary rules specify *how* the system should function (flood safety standards). Secondary rules specify *how primary rules may be created, changed, and adjudicated*. Adaptive governance requires both. Too-frequent trigger responses create instability; too-slow response fails to adapt. The balance must be designed.

**Organizational inertia:** DMDU scholars often assume their approaches will be "welcomed." In practice, organizational culture, institutional habits, and existing procedures strongly resist the paradigm shift from predict-then-act to monitor-and-adapt.

**Signal-to-noise ratio:** Identifying Adaptation Tipping Points is especially difficult when there is large natural variability — distinguishing meaningful trend signals from noise is a persistent technical challenge.

---

## VII. Key Theoretical Contributions

- **The five-level uncertainty taxonomy** provides a vocabulary for classifying *how* uncertain a problem is — which determines which analytical methods are appropriate.
- **Robustness ≠ optimality.** The core reorientation: seeking a strategy that performs well under many futures, rather than best under one assumed future.
- **Adaptive robustness** is a distinct concept from static robustness. Static robustness finds a policy that works across a fixed set of scenarios. Adaptive robustness builds in learning mechanisms so the policy improves as the future unfolds.
- **Signposts and triggers** operationalize adaptive robustness. They are not just monitoring for its own sake — they are the mechanism by which a plan remains on course or changes course based on incoming information.
- **The taxonomy of building blocks** (Ch. 15) argues for decomposing DMDU approaches into their constituent choices rather than treating each as an indivisible method. Different problem contexts warrant different combinations.

---

## Relevance to the ISIA Game

The ISIA (International Superintelligence Agency) faces an archetypal DMDU problem:

**The core asymmetry:** The pause buys time for safety research — but the timeline and cost of that research are deeply uncertain, as is whether it will succeed at all. The agency must manage an international enforcement regime (a long-horizon, high-stakes program) under Level 4 uncertainty about when and whether its core mission will be achievable.

**Game design implications:**

1. **The player is always managing under deep uncertainty.** No card should imply the player knows exactly when safety will be achieved or what it requires. The opacity is the game.

2. **The signpost/trigger mechanic maps directly to card gameplay.** Player choices can function as setting signposts ("we will monitor this") or as trigger responses ("we deploy inspectors when intelligence threshold is crossed"). Cards that introduce intelligence about the external world are signposts. Cards that force a response to a threshold crossing are triggers.

3. **Adaptive vs. static robustness as failure modes.** The player who pursues a static strategy (high leverage, high intel, low everything else) will hit a tipping point where that strategy fails. The game should reward — and make survival contingent on — building adaptive capacity (maintaining all four bars) rather than optimizing any one.

4. **Shaping actions as a distinctive card type.** DMDU's concept of shaping actions (proactively influence external forces) could be a distinct card mechanic — choices that affect the probability distribution of future cards rather than just the resource bars.

5. **The "monitor and adapt" paradigm as the game's thesis.** The pause is not a solution — it's a strategy for keeping options open while alignment research continues under deep uncertainty. The game's core message maps exactly to the DMDU core principle: commit to near-term actions (the treaty), keep long-term options open (fund alignment research), and monitor for signals of progress or failure (intelligence/inspections).
