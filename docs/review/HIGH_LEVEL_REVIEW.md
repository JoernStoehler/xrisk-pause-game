# High-level model review

Status: ready for Jörn's high-level pass on beliefs, uncertainty structure,
first-year likelihood ordering, and game pruning. It is not a request to validate
code or supply a complete numerical prior.

Estimated first pass: 10–20 minutes. Detailed artifacts are linked only where a
disagreement needs expansion.

## 1. Proposed presentation architecture

Maintain three independent products:

1. **Expert atlas:** what the project currently believes and why; allowed to be
   verbal, incomplete, multiply modeled, and only ordinally probabilistic.
2. **Architectural game specification:** every state distinction, action,
   transition, observation and omission the game intends to implement; explicit
   enough for later code conformance, but not a claim about reality.
3. **Review/pruning interface:** short crux cards, exact intervention scenarios,
   first-year forecast definitions, and deletion tests designed to find errors
   quickly.

Use sparse module graphs as indexes. Use local mechanism graphs, timelines,
tables, equations/dense submodels, and paired trajectories where those are
clearer. Do not force the expert atlas and game engine into the same graph.

**High-level review:** Is this separation right, or is there a benefit from a
more unified representation that outweighs the risk of letting engine
convenience reshape the expert model?

## 2. Current substantive synthesis

The project presently asserts, with varying confidence:

1. **Capability:** nearby scaling produces correlated but ragged progress;
   current benchmark/scaling evidence does not locate the capability profile or
   resource level at which dangerous reinvestment becomes possible.
2. **Reinvestment:** internal cognitive changes, communicable theory, scaffold
   changes, trained successors, human–AI labs, hardware and economic improvement
   are distinct but interacting routes. An episode may fizzle or compress the
   next step below response time.
3. **Control:** credible punishment can deter many ordinary actors. Custody,
   direct interruption and other proactive controls are the backstop for actors
   willing to gamble on a fast decisive run, expecting impunity, or able to
   finish before enforcement. The layers are complementary.
4. **Substitution:** compute-only rules face memory, interconnect, distributed
   state, algorithms, inference-time work, hidden hardware and reconstruction.
   Broader coverage changes the evader's cost and observability rather than
   proving impossibility. The technically preferred control surface, the
   politically feasible surface, and the dangerous resources left outside it
   must be tracked separately.
5. **Inference:** preserving frontier inference jointly affects current benefits,
   political opposition, safety/treaty work, capability research, cyber/persuasion,
   leakage, ambiguity and covert preparation. A current Jörn branch puts roughly
   **25%** on intensified, large-model-assisted interpretability-like work causing
   a much faster algorithmic-efficiency regime, versus roughly **10%** if
   GPT-5.0+ inference is restricted. The residual route uses consumer-runnable
   ~70B open-weight models. A provisional interpretation is ~2x efficiency
   improvement per year, compounding to ~1,000x over ten years; the event horizon
   and exact conditioning remain unresolved.
6. **Politics:** treaty persistence is produced by actor-specific beliefs,
   authority, factual control, evidence, constituencies, routines and coercion.
   Operational failure can occur without top-leader belief change.
7. **Safety/exit:** none of the currently brainstormed routes looks adequate.
   Designed cognition, enhanced-human/upload and control-assisted learned-system
   routes are an ontology, not equally weighted candidates. Jörn's leading
   speculative bet involves uploading and intelligence augmentation inside an
   institution more capable than historical precedent, selected for correctly
   rejecting wishful reasoning rather than prestige. Objective adequacy,
   justified recognition, authorization and faithful implementation remain
   distinct. Foundational work also creates a secrecy dilemma between leakage
   prevention and access to criticism, labor and political legibility.
8. **Breach, recovery and loss:** leakage raises algorithmic progress without
   itself killing anyone. A dangerous run may be stopped after a delay unless a
   sufficiently fast internal RSI/takeover path completes first. A withdrawing
   state may re-enter before a decisive build, although restoring bans,
   monitoring and factual control is difficult. Treaty erosion, leakage, run
   initiation, interruption, re-entry, unsafe system creation, loss of control
   and extinction are separate transitions. Terminal manifestation is not
   limited to present-day attack technologies.

The short argument/rival/policy cards are in
[`key-claims.md`](../expert-model/key-claims.md). The fuller synthesis is in
[`current-synthesis.md`](../expert-model/current-synthesis.md).

**High-level review:** Which assertion is materially wrong, too strong, or
missing its strongest rival? Which missing assertion would alter several policy
comparisons?

## 3. Dated quantitative judgments retained without smoothing

The atlas preserves two dated review judgments and four recovered but
unverified interview attributions as separate, ambiguously conditioned records:

- no effective pause: roughly 5th–95th percentile **0.5–10 years** to death;
- lethal effective compute: roughly 5th–95th percentile **2×–1,000×** an unknown
  pre-internal-use GPT-5.6 training-compute baseline;
- MIRI-like pause: roughly **25% survival**, informally “about 50% persistence ×
  50% safety easier than feared”;
- existing frontier inference retained: a separate comparison from roughly
  **30% to 15%** survival;
- intensified efficiency research with large-model inference: roughly **25%**
  for a major interpretability-like efficiency regime, compared with roughly
  **10%** if GPT-5.0+ inference is restricted because smaller open-weight models
  remain available;
- initial teaching proposition: a sufficiently serious pause could make survival
  **more likely than not**.

Plausible reconciliations include different policy packages, full versus easier
latent worlds, approximate conversational numbers, belief change, or the last
statement being pedagogical/existential rather than a literal forecast. None is
currently a game prior.

**High-level review:** Which statements remain current? What is the minimal
conditioning clarification that makes each useful? Does the >50% statement
describe a real policy/world conditional, an existence claim, or only a desired
lesson? For the 25%/10% comparison, does the event mean that a persistent
~2x/year regime begins within a specified horizon, rather than one isolated 2x
advance?

## 4. Conditional first-year picture

Window: August 2026–July 2027, conditional on the US and China founding ISIA and
known declared sites starting with monitors, telemetry and immediate stop paths.
This is not a forecast that the founding premise occurs.

### Current provisional ordering

`I` below means project inference offered for correction.

**Structurally expected or premise-near:**

- declared-site control is fixed true at the opening instant by the scenario
  premise, while complete inventory/consolidation is not;
- control remains uneven between declared controlled sites and undeclared,
  compartmented, covert, distributed and third-country resources;
- disputes move rapidly from “pause” to inference, post-training, custody,
  exceptions, evidence access and military scope.

**Provisional central branches:**

- at least one material delay, ambiguity or partial implementation failure;
- repeated bargaining over access, evidence or symmetry without either side
  announcing intent to build ASI;
- concentrated opposition from some firms/users;
- meaningful consolidation/custody progress but no justified claim of universal
  coverage;
- inference rules, exceptions or enforcement interpretation evolving during the
  year.

**Live branches:**

- disputed anomaly, false positive, filtered report or true warning that arrives
  too late;
- military/intelligence exception or poorly observed channel;
- broad inference materially accelerating research/evasion within the year;
- a real bounded AI-research improvement that moves one bottleneck and fizzles;
- a confident but objectively wrong institutional technical assessment.

**Tail or unresolved but robust-policy-relevant:**

- a covert/ambiguous project crossing the decisive threshold;
- improvement occurring wholly inside one authorized inference episode;
- a Taiwan/war continuity failure under retained top-leader catastrophe belief;
- genuine adequate, recognizable and authorized safety exit;
- rapid explicit bilateral abandonment, as opposed to gradual erosion.

The exact scenario cards and resolvable blank forecast register are
[`first-year-scenario-cards.md`](first-year-scenario-cards.md) and
[`first-year-forecast-register.md`](first-year-forecast-register.md). The labels
above remain provisional and have not been migrated into that register.

**High-level review:** For each of cold, restricted and broad inference, which
item is wrong by at least one ordinal tier under the shared founding premise?
Which event with nontrivial first-year probability is missing? Which items
change most among the three cards? Treat declared-site opening control as a
premise, not as an uncertain first-year achievement.

## 5. Proposed pruning boundary

### Explicit core processes

- ownership/custody/credentials/power/workload/monitor/stop distinctions;
- latent conduct → trace → collection → interpretation → report → response;
- asymmetric US, PRC and ISIA actor/authority/information maps;
- inference-policy mediators;
- compute/memory/substitution interface;
- route/carrier/resource/evaluation reinvestment process;
- candidate/threat/evidence/evaluator/authorization/build safety process;
- several crisis pathways and continuing post-treaty-failure development.

### Coarse or composite

- macroeconomic benefits/costs and constituencies;
- public opinion through affected groups, elite cues, salience and mobilization;
- intelligence through tasks/source families/rival hypotheses, not one skill;
- military geopolitics through access, authority, evidence and escalation effects;
- third countries activated when they host relevant resources, supply chains or
  enforcement leverage.

### Authored/scenario-only

- rare geopolitical events whose internal dynamics add no distinct intervention;
- unweighted model-error stress worlds;
- candidate-specific safety proposals where exact technical content is fictional
  but the assurance process is real.

### Atlas-only or omitted

- exact internal scientific content and exhaustive cognitive task ontology;
- detailed war, macroeconomic, electoral or country-by-country simulation;
- exact extinction technology;
- detailed benchmark leaderboards;
- generic survival, treaty-health, safety-progress or distance-to-RSI meters.

The rule is: retain a pathway when it can reverse policy, supplies a distinct
warning/intervention, corrects a target misconception, recurs across the game,
or is needed to explain an outcome. Prune when wide variation changes only
flavor/frequency and the interface is preserved.

**High-level review:** Which proposed compression would teach the wrong lesson?
Which explicit mechanism could safely be collapsed? Which costly omitted pathway
would likely reverse an opening policy choice?

## 6. Status and next gate

The expert atlas and architectural game specification are ready for this
high-level review. A typed executable opening slice now covers event scheduling,
named diagnostic worlds, control/inference races, projections, and four golden
traces. It is not a complete game, political simulation, or calibrated
distribution; see the current [implementation map](../game-model/implementation-map.md).

The ChatGPT session did not have the repository checkout across its conversation
boundary. The retired May-era repository is now recoverable at commit
`0c5262c34c423cc62b68124d30d002b4886b879f`, but it is a different architecture
and is not automatically source truth for this packet. The
[coverage ledger](coverage-ledger.md) distinguishes current records, retired
material, ordinary research still needed, and genuinely frontier judgments.

The typed opening slice and paired traces are complete. After high-level
corrections, the next gate is targeted research for rows marked
`NOT-RESEARCHED`, elicitation only for quantities that survive pruning, and
separate versioned forecast, diagnostic-fixture, and playability-transform
ledgers.
