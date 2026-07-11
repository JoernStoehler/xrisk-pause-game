# Adversarial audit of the expert-model and review artifacts

Status: internal review, 11 July 2026. Scope: knowledge-transfer quality,
overclaim control, expert/game-model separation, and the first-year ordinal
ledger. This audit does not judge the executable game model or supply missing
forecast probabilities.

## Bottom line

The artifact family has the right architecture: separate expert atlas and game
specification; persistent correlated uncertainty; explicit event/observation/
report/response chains; typed political failure; and a review interface that
asks for causal repair before numbers. It is useful as an internal orientation
pack.

It is **not yet ready as the main high-level transfer object for Jörn or another
expert**. A reviewer can understand the intended ontology, but cannot yet tell
reliably which substantive beliefs are held, how strongly, why, and where the
game model has already influenced the atlas. The first-year ledger is readable
as a scenario menu, not yet defensible as an ordinal forecast ledger.

## Blockers before high-level expert review

### B1. The reconstruction boundary excludes much of the work the atlas claims to summarize

`forecast-ontology-and-first-year-decomposition.md` says the earlier research
corpus and simulator were unavailable. The present workspace contains only two
source packets, while the atlas calls itself the project's “current beliefs” and
the elicitation interface says ordinary research should precede frontier review.
This creates an avoidable epistemic ambiguity: “not mentioned” can mean pruned,
forgotten during reconstruction, or researched and rejected.

Concrete repair:

- Restore or import the prior research reports and executable diagnostics, or
  explicitly freeze this artifact set as a partial reconstruction.
- Add a coverage ledger: important topic, source corpus present/absent, atlas
  page, game-model treatment, and review status.
- Do not ask an expert to correct branch weights until missing source work is
  distinguishable from deliberate omission.

### B2. The atlas transfers an ontology more successfully than it transfers beliefs and reasons

Most substantive pages explain distinctions and list live alternatives. They
rarely state a dated project judgment, best argument, best contrary argument,
and evidence actually bearing on magnitude. Provenance records such as
`TECH-EMPIRICAL-01` and `SOCIAL-MECHANISMS-01` are family placeholders with
paper-level mapping pending. This is honest, but it cannot yet support the stated
question “what does the project currently believe, and why?”

Concrete repair:

- For every high-leverage arrow, add a compact claim card with conditions,
  current directional judgment, argument, strongest rival, exact provenance,
  and what would change a policy ranking.
- Give claim-level citations first to empirical statements, then to structural
  arguments. Do not expand every paragraph into nodes.
- Label unsupported cross-domain integrations `PROJECT-CONJECTURE`, rather than
  letting a broad source family appear to support the integrated forecast.

### B3. Two major parts of the visible expert model are missing from the atlas

The atlas has no substantive page for **technical alignment/safe exit** and no
substantive page for **loss/manifestation after unsafe capability**. Yet the game
specification already contains a typed safety process and assumes unsafe ASI
causes extinction. Missing material includes:

- designed cognition, control-assisted learned systems, and enhanced-human or
  upload routes;
- objective adequacy versus recognizability, institutional approval, legal
  authorization, and implementation;
- the possibility that no available evidence justifies a decisive build;
- the default pessimism about alignment, alongside deliberately easier sampled
  worlds needed for a playable win;
- why an unsafe decisive system is expected to escape control and cause
  extinction using novel technologies, rather than being restricted to current
  attack methods.

Without these pages, the expert atlas cannot audit the game's terminal logic or
its most important winning paths.

Concrete repair: add separate `technical-safety-and-exit.md` and
`loss-of-control-and-manifestation.md` pages before presenting the atlas as a
complete high-level view. Preserve uncertainty and arguments; do not invent a
generic alignment-progress variable or detailed weapon simulation.

### B4. Consequential judgments already supplied by Jörn are omitted or weakened into vague prose

Packet-era notes attribute quantitative or comparative anchors to Jörn that the
atlas should preserve as recovered judgments, even if they never become game
frequencies. Direct transcripts for four of these records are missing:

- roughly 5th–95th percentile 0.5–10 years to death without a pause;
- an illustrative roughly 25% survival assessment under a MIRI-like pause,
  decomposed informally as about one-half pause persistence and one-half luck on
  safety difficulty;
- a separate 30% to 15% survival comparison when existing models/inference are
  not rolled back;
- uncertainty or tension with the earlier pedagogical claim that a sufficiently
  serious pause could make survival more likely than not.

These numbers have unclear dates, conditioning, dependence, and may reflect
different scenario versions. That is a reason to record and reconcile them, not
to omit them. A dated “judgments and tensions” register should state what each
number conditions on, whether it supersedes another, and whether it is suitable
only as qualitative evidence.

Other underrepresented visible branches include research bans and dual-use
publication, compute-times-memory coverage, uploads/intelligence-enhanced human
labor, qualitative algorithmic breakthroughs that invalidate thresholds, and
third-country enforcement/escalation cases. Some appear in the game model or
forecast backlog but not in the atlas's belief-transfer narrative.

### B5. The first-year ledger mixes incompatible event and likelihood objects

The ledger is intelligible as a list of plausible developments. It is not yet a
coherent ordinal forecast table because:

- rows use different opening policies, while the conditioning premise leaves
  inference, custody, consolidation, and detailed implementation unsettled;
- some rows are events, some are enduring states, some are disjunctions, and
  some are statements about completeness of evidence;
- labels such as “live-to-central conditional,” “tail or unresolved,” and “not
  central; live as a claimed achievement” are not members of one ordered scale;
- “structurally expected” is used both for processes generated by many models
  and for outcomes thought to follow from the scenario premise;
- several judgments infer occurrence from the existence of many possible
  mechanisms, without showing why their aggregate first-year incidence is
  central;
- undefined terms—material, substantial, serious, decisive, comprehensive—make
  tier disagreements impossible to interpret;
- the table does not say whether at-least-one-event rows are highly correlated
  or nearly entailed by broad definitions.

Concrete repair:

1. Define three opening scenario cards (`COLD`, `RESTRICTED`, `BROAD`) including
   exact initial control state; assign stable IDs.
2. Split each row into one resolvable occurrence or end-state and give a status
   per scenario card. Put pathway importance in a separate column.
3. Reserve `unresolved` for inability to rank. Do not combine it with a rank.
4. Separate “near-definitional under premise” from “structurally expected across
   models.”
5. Replace vague thresholds before asking for tier corrections, even if the
   threshold is deliberately coarse.
6. State shared latent parents and obvious nesting beside the ledger, not only
   in the later elicitation protocol.

Potential overclaims needing explicit human confirmation include “at least one
material implementation failure” as central, “substantial consolidation/custody
progress” as central, concentrated opposition as central under all relevant
openings, and rapid bilateral abandonment as tail. These may be reasonable;
the present documents do not yet carry enough argument to make the ranking
defensible.

### B6. Expert-model and game-model influence is not yet auditable

The documents repeatedly state the conceptual separation correctly. In
practice, `symbolic-stochastic-expert-model.md` and the game specification use
the same hypothesis-family identifiers and nearly the same modular graph.
Without claim-level sources, a reviewer cannot tell whether a structure
entered the game because of an expert claim or entered the atlas because the
game needed a tractable interface.

Concrete repair: add a selected interface crosswalk:

| Atlas claim | Evidence/judgment | Game rule | Compression/distortion | Direction of derivation |
| --- | --- | --- | --- | --- |

Use it only for policy-sensitive and terminal paths. Mark reconstructed game
choices as fixtures until an atlas claim independently supports them.

## Important nonblocking repairs

### N1. Put the atlas's strongest claims before its methodology

A reviewer currently encounters many cautions, schemas, and protocols before a
short statement of substantive judgments. Add a two-page “current synthesis and
disagreements” entry point with links to the detailed atlas. Keep the cautions,
but do not make readers infer the beliefs from pruning rules.

### N2. Distinguish branch probability from branch value throughout

“Live,” “represent,” “stress-test,” and “decision-relevant” sometimes appear in
the same phrase. A catastrophic branch may merit robust policy while remaining
outside the sampled game distribution. Use separate fields for occurrence rank,
robust-policy relevance, pedagogical value, and representation status.

### N3. Complete the capability-to-outcome bridge

The capability page handles reinvestment carriers well but has little on
strategic awareness, deception, autonomy, access acquisition, replication,
offense–defense shifts, and the conversion of cognitive advantage into control.
These need not become separate simulation meters. They do need enough atlas
coverage to explain why “unsafe decisive capability” is terminal and which
observations could arrive before loss.

### N4. Clarify current facts versus scenario facts

The first-year window is close enough that model availability, active training
runs, cluster inventory, legal powers, and treaty language are mutable facts.
Keep a dated current-facts brief separate from the conditional forecast. Rumors
must remain rumors. The narrow source check correctly states this, but the
ledger still contains premises such as immediate staffing and site reach that
could be mistaken for factual readiness.

### N5. Do not let the elicitation form anchor the substantive model

The review protocol is good, but its proposed batch and event register can make
the listed branches feel exhaustive. Every review batch should contain a
prominent “missing decomposition / reject the framing” option and one blank
request for the highest-value omitted path.

## Obvious semantic fixes applied

- The illustrative schema now uses provenance IDs that exist in the current
  register and marks the example claim `draft`, not `reviewed`.
- The review interface now explains that `S/I/J/F` are shorthand for, rather
  than a competing replacement of, the atlas's detailed provenance classes.

## Readiness criterion

The next high-level review is ready when Jörn can, without consulting the chat:

1. see the project's dated substantive judgments and their strongest reasons;
2. distinguish missing research from deliberate pruning;
3. compare one exact first-year starting state at a time;
4. locate how his earlier quantitative judgments were represented or bracketed;
5. inspect alignment/exit and loss-of-control reasoning, not only pause
   mechanics; and
6. identify where the game intentionally compresses or contradicts the richer
   expert model.

Until then, the best use of the current artifacts is internal model completion
and targeted research, not another broad probability elicitation.
