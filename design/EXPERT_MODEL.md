# Expert Model

Status: recovered draft. This is the single retained source-of-truth file for
what could be recovered about Jörn's expert model from the deleted extraction
session and its worktree. It is not final card text, not public wording, and not
a settled ontology.

Use this file as the durable recovery surface. The obsolete worktree helper
files were intentionally not copied to `main`; source-status notes below say
which parts are close to Jörn's chat and which parts are draft Codex scaffolding.

## Source Status

1. Close-source recovered material:
   the broad 2026-05-11 interview response, China/treaty follow-up,
   capability-research follow-up, research-controls follow-up, and sufficiency
   follow-up.
2. Codex synthesis:
   compact wording, grouping, headings, and stable IDs in this file.
3. Draft scaffolding:
   `CMP-D*` compute-control points and `CMP-Q01` next question were recovered
   from a draft prompt and have not yet been answered by Jörn.
4. Missing source:
   the deleted live extraction session, named `/tmp/expert-model-*` scratch
   files, and named raw session logs from 2026-05-11 were not recoverable in
   this environment.

## Recovery Summary

Recoverable expert model:

1. A first broad response to common public-discourse claims about AI pause,
   regulation, treaties, open source, near-term harms, lab safety, duration,
   progress, civil liberties, and fatalism.
2. A follow-up on China and treaty feasibility.
3. A follow-up on capability research and dual-use safety work.
4. A follow-up on research controls under uncertainty.
5. A follow-up on sufficiency and fake hope.
6. A draft next question on compute control and verification.

Not recovered: the deleted live extraction session, named `/tmp` scratch files,
and named raw session logs from 2026-05-11 in this environment.

## Interview Sheet

### Q01. Is generic AI regulation enough?

Short answer: no.

Jörn's model says risk recognition does not imply that arbitrary action helps.
Most actions do not affect existential risk, many can be harmful, few are
helpful, and fewer are sufficient. Labels, audits, and fines do not matter after
extinction and can stop mattering earlier at points of no return.

Close-source version:

- `risk -> do anything` is wrong.
- The question is sufficiency before points of no return.
- A point of no return can arrive before extinction.
- It is easier to break safety guarantees than add them after the threat exists.

### Q02. Is pause just movie panic or a ban on all useful AI?

Short answer: no.

Jörn's model says the expert case is not downstream of movies. Not all AI use
furthers superintelligence, but modern frontier models can genuinely aid
capability research. Over a long pause, capability-relevant use can accumulate,
so carve-outs may be dangerous even when many everyday applications are not
dangerous.

Open uncertainty:

- How to set the practical boundary.
- How much to invest in distinguishing dangerous from harmless research.
- How much to worry about carve-outs and slippery slopes.

### Q03. Does a U.S. slowdown mean China wins?

Short answer: that misstates the proposal.

Jörn's model says unilateral U.S. slowdown is not the proposal under discussion.
The relevant proposal is a global treaty. China and the U.S. share the core
interest of not going extinct. Mistrust and cheating risk are treaty-design
problems, not proof that a treaty cannot work.

Game-relevant pressure:

- Avoid "China inevitably defects."
- Avoid "everyone cooperates once they understand x-risk."
- Show delayed failure modes when a necessary mechanism is missing.

### Q04. Do existing laws, safety institutes, and voluntary commitments stop the
race to superintelligence?

Short answer: no.

Jörn's model says progress toward superintelligence continues despite current
measures. Planned measures are not much stronger than past measures. Current
governance does not stop internal model training where existing capital can be
turned into unreleased superintelligence.

### Q05. Is compute tracking enough?

Short answer: no.

Jörn's model says tracking tells you who builds superintelligence; it does not
by itself prevent them from doing so. The treaty needs restrictions on what GPUs
and other AI-ready chips are used for. Tracking is a cornerstone because chips
are a bottleneck resource, but tracking must connect to use restrictions and
enforcement.

Likely mechanism layer:

- compute inventory;
- consolidation;
- surveillance of AI-ready chips;
- chip-design changes;
- chip supply-chain control;
- smuggling reduction;
- inspections;
- intelligence sharing;
- concrete enforcement.

### Q06. Does open source inspection solve capability risk?

Short answer: no.

Jörn's model says there are no tools to inspect open-source AI and determine
whether it will aid research into superintelligence. The danger depends on how
researchers use the system, and predicting which research ideas will work is
hard. Extinction risk is not mainly about whether weights are downloadable by
citizens; a superintelligence can kill everyone from a public release or a
company data center.

### Q07. Are near-term harms a distraction from x-risk?

Short answer: not necessarily.

Jörn's model says attention may not be simply bottlenecked across near-term
harms and x-risk. There can be synergy because both can support discussion of
strong regulation. Many "x-risk is a distraction" claims may really come from
people who do not believe existential risk is real.

Important distinction:

- Non-x-risk harms can be real.
- Plans that address only non-existential harms are bounded in impact if
  extinction follows soon after.

### Q08. Do lab safety teams solve the core problem?

Short answer: no.

Jörn's model says labs know how to build more capable models and control them to
a limited degree. That is different from knowing how to safely control
superintelligence. Failure means death and no retry. Company plans can be judged
directly; Jörn's view is that they repeatedly ignore the threat model, promise
future solutions, and have made basically zero relevant progress on the core
problem in the last 20 years.

### Q09. Are treaties just paper that countries violate when it matters?

Short answer: too strong.

Jörn's model says this is not true for past treaty regimes such as nuclear
weapons and bioweapons. Treaty enforcement through mutual monitoring is possible
in principle. Military leaders have an interest in not personally dying. AI CEOs
were selected for wanting AI, believing control is possible, or believing racing
is the only path, so their incentives differ from militaries and governments.

### Q10. Are labels like "doomer" and "decel" arguments?

Short answer: no.

Jörn's model says there are arguments beyond cultural group identity. The right
move is to evaluate the arguments.

### Q11. How long does a pause need to last?

Short answer: probably long, with uncertainty.

Jörn's guess is at least roughly 20 years, with less possible if lucky and more
possible if unlucky. The needed actions are mostly similar whether the duration
is 5, 20, or 50 years, so the proposal can err toward conservative timelines
until the ban on superintelligence can be ended safely.

### Q12. Is AI progress incremental and manageable?

Short answer: Jörn does not buy that comfort.

Jörn's model says the METR graph is not incremental, and even if taken at face
value it accelerates rapidly. Incident reports often show companies failing to
anticipate or detect problems. Prompt hacking remains unsolved, and selective
training of capabilities is unsolved because generalization is useful across
many domains.

### Q13. What is wrong with "AI will still be useful to humans" as an answer?

Short answer: it fails to imagine superintelligence.

Jörn's model treats this as denying or not engaging the possibility of
superintelligence. The relevant response is the standard case for why
superintelligence is possible and why we cannot rule out it arriving soon if
development is not banned.

### Q14. Does pause require unacceptable surveillance or ending democracy?

Short answer: the concern is real, but not decisive.

Jörn's model says long-term power balance and preservation of democracy matter,
but they cannot easily be entangled with the treaty. China would not sign a
treaty that requires changing its political model. Compute monitoring for
AI-ready chips differs from monitoring all private compute use. Research bans
have existed before and have not automatically escalated.

Open issue:

- Whether democracy and freedoms fail long term remains open.
- Broader private-compute monitoring might reduce long-horizon research
  accumulation, but that is a stronger and more concerning regime.

### Q15. What is the point of buying time?

Short answer: use the time to figure out how not to die.

Jörn's model is not enthusiastic about six-month pauses or doing nothing useful
for 20 years. The point of a long pause is to make survival work possible before
ending the ban on superintelligence.

## Fact Sheet

### Sufficiency

- `SUF-F01`: The central issue is not whether a measure is directionally good;
  it is whether the measure is sufficient before points of no return.
- `SUF-F02`: "Tighten later" fails if the warning signal comes after capability
  progress, deployment, theft, or institutional lock-in has removed recovery
  options.
- `SUF-F03`: Weak measures can be worse than nothing if they create public
  comfort while leaving the core path to ASI open.
- `SUF-F04`: "Guarantee-like" means not relying on assumptions Jörn expects to
  be false. It does not mean mathematical proof.
- `SUF-F05`: Preparatory measures alone may move survival from close to zero to
  close to zero but higher. Their value is in enabling later strong measures.
- `SUF-F06`: Survival progress may look like preliminary steps enabling later
  steps, and then those later steps actually happening.

### China And Treaty Feasibility

- `CHN-F01`: Unilateral U.S. slowdown is not the proposal.
- `CHN-F02`: China and the U.S. share the core interest of not going extinct.
- `CHN-F03`: Mistrust and cheating risk are real treaty-design problems, not
  treaty-impossibility proofs.
- `CHN-F04`: Verification, monitoring, chip controls, inspections, intelligence
  sharing, and enforcement mechanisms are basically all necessary.
- `CHN-F05`: If one necessary mechanism is missing, the game should show a
  realistic delayed failure mode.
- `CHN-F06`: Enforcement can include public intelligence, financial incentives,
  sanctions, hacking, and traditional military intervention on an escalation
  ladder.
- `CHN-F07`: A Washington-connected lobby tries to blame China for racing to AI;
  Jörn has not seen a mirrored Chinese lobby.
- `CHN-F08`: Precursor steps to unilateral superintelligence and extinction can
  be detected at very early political and institutional stages.

### Capability Research And Safety-Labeled Work

- `CAP-F01`: "Modern frontier models aid capability research" should be split
  into several mechanisms.
- `CAP-F02`: Models can provide labor for capability research: idea generation,
  experiment coding, and routine experimental judgment.
- `CAP-F03`: Large models can be test subjects for interpretability,
  training-technique experiments, and diagnosis of bottlenecks.
- `CAP-F04`: Models can provide non-human-purchasable labor such as synthetic
  training data or use of inference and internals at scales humans would not
  realistically produce.
- `CAP-F05`: Jörn is uncertain how dangerous small-group research is over a
  long pause.
- `CAP-F06`: The game can encode that uncertainty with hidden latents randomized
  at run start.
- `CAP-F07`: Small-research-group danger is correlated across cases such as
  small models, small compute, and moderate researcher time.
- `CAP-F08`: Pivoting after evidence is possible but limited. Waiting for a
  second breakthrough before surveillance is already precarious.
- `CAP-F09`: Early surveillance costs political capital by violating previous
  freedoms, but may gain political capital if the public wants researchers
  constrained or hates AI.
- `CAP-F10`: Safety-labeled research is a weak signal. Some work labeled safety
  is not actually useful.
- `CAP-F11`: Too-narrow restriction has a direct failure mode: capability
  progress still happens, then everyone dies.

### Research Controls And Freedom

- `CIV-F01`: The treaty does not propose restricting private thought.
- `CIV-F02`: The treaty restricts speech or sharing of results and resource use
  such as compute.
- `CIV-F03`: Private-thought restriction is not proposed because the downsides,
  including totalitarianism and thought-reading, appear to outweigh the upside.
- `CIV-F04`: Speech restrictions have precedent in nuclear-weapons contexts.
- `CIV-F05`: Compute restrictions are analogous to not being allowed to build or
  detonate atomic weapons even if private ownership of uranium atoms is allowed.
- `CIV-F06`: All treaties restrict freedom in a libertarian sense, but the AI
  pause trade is unusually favorable if one economically valuable line of
  compute use is restricted in exchange for massively reducing everyone-dies
  risk.
- `CIV-F07`: Unrelated political fights should be kept independent from the
  treaty where possible, because attaching them can create pressure against the
  treaty and cause collapse.

### Backlash And Evasion

- `EVS-F01`: Backlash and evasive remnants are different.
- `EVS-F02`: Backlash grows as restrictions push harder.
- `EVS-F03`: Evasive actions change but shrink under stronger enforcement.
- `EVS-F04`: Black markets are not backlash.
- `EVS-F05`: White markets can be worse than black markets when they leave more
  compute unmonitored.

### Compute Control And Verification

Source status: mostly draft from `design/expert-model-next-question.md`, not yet
answered by Jörn as `CMP-*`.

- `CMP-D01`: Perfect verification is probably the wrong standard; the relevant
  standard is reducing extinction-relevant capability progress enough under
  realistic cheating pressure.
- `CMP-D02`: Tracking chip ownership is not enough. Restrictions on chip use,
  training runs, model access, research sharing, and investigations likely
  matter.
- `CMP-D03`: Compute control is powerful because advanced AI training depends
  on scarce specialized chips and visible supply chains.
- `CMP-D04`: The bottleneck weakens if the regime ignores smuggling, hidden
  clusters, older chips, or algorithmic progress.
- `CMP-D05`: Verification may combine hardware registries, chip-design changes,
  data-center inspections, electricity and networking anomalies, export
  controls, intelligence work, and whistleblower channels.
- `CMP-D06`: The game should represent false positives and false negatives.
- `CMP-D07`: The game should avoid "compute control solves everything" and
  "some cheating makes the treaty pointless."
- `CMP-D08`: Civil-liberties risk should be compared against monitoring needed
  for AI-ready chips and capability research, not rounded into monitoring all
  private life.
- `CMP-D09`: A weak treaty can be dangerous if it creates public comfort while
  leaving enough unmonitored compute and research channels for ASI-relevant
  progress.

## Prompting Rules Recovered From Jörn

1. Use globally unique labels so Jörn can refer to points cheaply.
2. Tell Jörn what Codex thinks it already knows before asking.
3. Ask for correction, mixing, rejection, and missing cruxes.
4. Do not ask Jörn to review full agent-written synthesis by default.
5. Preserve raw source excerpts first.
6. Treat synthesis as fallible.
7. Avoid repeating accepted points.
8. Avoid "the player should learn" wording in public-discourse prompts unless
   the task is explicitly syllabus work.
9. Ask what wrong inference the game should avoid.

## Next Interview Question

Use `design/expert-model-next-question.md`.

Current planned question: `CMP-Q01`, compute control and verification.

Ask Jörn which `CMP-C*` components are right, wrong, too vague, or missing the
main crux, and what wrong player inference the game should most avoid when it
represents compute verification.
