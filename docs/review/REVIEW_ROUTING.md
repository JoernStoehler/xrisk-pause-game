# Review routing

Status: review-navigation aid, 11 July 2026. It routes each review to the least
context that can answer its question. It does not replace domain approval,
human testing, or cross-lane product judgment.

The coordinator or evaluator uses the [success model](../product/SUCCESS_MODEL.md)
to select a lane and assemble only its minimum context. Do not give that model
to cold participants. A genuinely cold reviewer receives only the intended
audience, the artifact's public promise, and the artifact itself, and reports an
independent first impression before seeing the design rationale. Reviewers may
challenge a success assumption as stale, harmful, or contradicted by evidence;
they are not limited to checking conformance with it.

## Reusable review brief

Keep the brief outcome-first and compact:

- **Artifact/version:** the exact object and state under review.
- **Lane and reviewer authority:** what this reviewer can establish.
- **Core question:** one decision-relevant question.
- **Minimum context:** two to four links selected from the lane below.
- **Evidence/status:** what is observed, inferred, draft, approved, or missing.
- **Downstream decision:** the exact choice this verdict will change.
- **Non-goals:** nearby questions this review must not appear to settle.
- **Allowed verdict:** accepted for scoped use, repair, reject, or unresolved,
  with artifact, audience/environment, and conditions named.
- **Challenge invitation:** which premise may be stale, which decomposition may
  be missing, and what conflicting evidence would change the framing?

## Mission and model

- **Core question:** Does this artifact advance the survival-oriented impact
  route by making adequate treaty establishment or operation more reasoned,
  without magical control or fake race-versus-pause symmetry?
- **Minimum context:** [project guidance](../../AGENTS.md),
  [product architecture](../product/PRODUCT_ARCHITECTURE_PORTFOLIO.md), and the
  relevant [game-model overview](../game-model/README.md).
- **Evidence:** causal paths, player authority, omissions, policy-ordering
  reversals, and artifact behavior.
- **Non-goals:** line editing, UI polish, calibration of unresolved quantities,
  or proving real-world treaty feasibility from a diagnostic world.
- **Verdict scope:** mission/model coherence for the named artifact only; not
  claim approval, playability, release, or product impact.

## Claim and epistemics

- **Core question:** Are factual claims, Jörn judgments, project inferences,
  fixtures, playability transforms, observations, and retrospective truth kept
  honest and distinct?
- **Minimum context:** the artifact's claim ledger, relevant dated record under
  `docs/jorn/` and `docs/research/`, and [expert-model provenance](../expert-model/provenance.md). Add
  model trace semantics only when the claim depends on information flow.
- **Evidence:** sentence-level provenance, current approval state, rival views,
  uncertainty language, and what the player can actually infer.
- **Non-goals:** deciding whether the interaction is fun or whether approved
  prose fits on a phone.
- **Verdict scope:** named claims and epistemic boundary only. Jörn's approval
  of expert-grounded content is distinct and remains required.

## Mobile readability and editorial density

- **Core question:** Can the intended audience comfortably absorb the
  decision-relevant content on real small phones, with a clear focal action and
  without nuance being hidden in tiny or dense text?
- **Minimum context:** the rendered artifact at target viewports, its immediate
  task/copy, the relevant criterion in the
  [success model](../product/SUCCESS_MODEL.md), and, when comparison is useful,
  rejected spike evidence on branch `codex/simple-mobile-spike` at `7f23bc2`.
- **Evidence:** real-device observation with target humans, text size and zoom
  behavior, scan path, skipped text, comprehension, and density by state.
- **Non-goals:** proving interaction accessibility, domain truth, game feel, or
  engineering correctness. Automated reflow and screenshot fit cannot settle
  comfortable reading.
- **Verdict scope:** readability/editorial fitness for named states, devices,
  settings, and audience. The current public UI is rejected in this lane despite
  prior semantic and technical passes.

## Visual craft and appeal

- **Core question:** Does the artifact's palette, typography, imagery, portrait
  treatment, spacing, composition, motion, and finish create a coherent and
  desirable mobile game at the intended quality bar?
- **Minimum context:** the rendered artifact at representative phone and desktop
  viewports, its intended tone and audience, and the visual-craft criterion in
  the [success model](../product/SUCCESS_MODEL.md). For comparative review, the
  retired GPT-5.5 product is recoverable at
  `0c5262c34c423cc62b68124d30d002b4886b879f`; use it as a reference, not an
  approved target.
- **Evidence:** independent visual critique, target-human first impression,
  hierarchy and composition at real size, consistency across states, perceived
  trust and production value, desire to continue, and willingness to share.
- **Non-goals:** settling readability, accessibility, narrative effectiveness,
  domain truth, or fun. A visually attractive screenshot does not establish a
  usable interaction, and readable text does not establish visual appeal.
- **Verdict scope:** visual craft for the named artifact, states, viewports, and
  audience. The integrated candidate at `1c6f376` is rejected in this lane;
  Jörn's preference for the older product's simplicity does not approve its
  portraits or require restoring its architecture.

## Interaction and accessibility

- **Core question:** Can people using supported inputs, devices, and assistive
  technology perceive state, take intended actions, recover from errors, and
  receive equivalent essential information?
- **Minimum context:** the running artifact, supported-state inventory, and
  [product/UX evidence](../research/product-ux-research-2026-07-11.md).
- **Evidence:** automated checks plus real keyboard, screen-reader, low-vision,
  limited-dexterity, touch, motion-preference, and representative-device use.
- **Non-goals:** rating prose density, fun, model fidelity, or demand except
  where an access barrier directly affects them.
- **Verdict scope:** tested interactions, assistive modes, browsers, and
  devices—not universal accessibility or public readiness.

## Game feel and agency

- **Core question:** Do choices create understandable leverage, fair
  uncertainty, recovery, delayed consequence, and a satisfying desire to keep
  operating the institution?
- **Minimum context:** the playable slice and the pleasure/loop hypotheses in
  the [game-design portfolio](../game-design/README.md).
- **Evidence:** target-human behavior and accounts of agency, surprise,
  frustration, pleasure, stopping, and voluntary continuation; visible causal
  differences between choices.
- **Non-goals:** testing factual recall alone, balancing to a target survival
  rate, or approving a full campaign from one chapter.
- **Verdict scope:** promise or failure of the tested loop for the sampled
  audience. **Agents can identify structural risks but cannot validate fun or
  felt agency.**

## Narrative and emotional appeal

- **Core question:** Do people, stakes, and callbacks make players care about
  competent institutional action without manipulation, fatalism, or advisors
  becoming truth keys?
- **Minimum context:** the artifact's narrative beats and the narrative hazards
  in the [game-design portfolio](../game-design/README.md).
- **Evidence:** target-human emotional response, recall of consequential people
  and events, interpretation of tone, and the stories players retell.
- **Non-goals:** domain approval of every line, causal-transfer measurement, or
  distribution performance.
- **Verdict scope:** emotional/narrative response to the tested material and
  cohort. **Real target humans are required.**

## Cold first use

- **Core question:** Without repository context or rescue by the team, do
  premise-qualified newcomers understand the role, objective, available power,
  first decision, and feedback quickly enough to proceed?
- **Minimum context:** only the public entry path, intended audience definition
  and the artifact's public promise. The coordinator may use
  [audience research](../research/AUDIENCE_AND_DISTRIBUTION.md) to recruit and
  interpret cohorts, but must not expose its rationale or the success model to
  participants before their independent report. Reviewers who know the design
  should not stand in for newcomers.
- **Evidence:** silent first use on participants' own devices, observed stalls
  and exits, and unprompted explanation before interview contamination.
- **Non-goals:** teaching participants the interface, explaining the model, or
  extrapolating retention and transfer from successful entry.
- **Verdict scope:** entry comprehension for the tested cohorts and contexts.
  **Real target humans are required; agent cold reads are preflight only.**

## Comprehension, learning, and transfer

- **Core question:** Does play improve causal explanation and appropriately
  uncertain judgment on unfamiliar treaty claims, without creating confident
  false beliefs?
- **Minimum context:** the playable artifact, its one named transfer target,
  the relevant target/test in the [game-design portfolio](../game-design/README.md),
  and the cohort definition. Keep hidden scoring and expected answers away from
  participants.
- **Evidence:** unprompted explanation, differently worded novel cases, delayed
  transfer, misconception and calibration checks, and comparison with a
  credible cheaper prose or facilitated alternative across relevant cohorts.
- **Non-goals:** treating vocabulary recall, immediate agreement, completion,
  enjoyment, premise agreement, or in-game success as learning; establishing
  domain truth, demand, policy influence, or survival impact.
- **Verdict scope:** learning/transfer for the named artifact, target, cohort,
  comparator, and delay only. **Real target humans are required; agents may
  preflight prompts, confounds, and false-lesson risks but cannot validate
  comprehension or transfer.**

## Sharing and distribution

- **Core question:** Does the product reach premise-qualified people and create
  qualified recipient engagement, repeated use, or policy-context utility—not
  merely exposure or share intent?
- **Minimum context:** [audience and distribution research](../research/AUDIENCE_AND_DISTRIBUTION.md),
  the actual channel/artifact, and its instrumented funnel definitions.
- **Evidence:** source-separated exposure, qualified starts, transfer,
  recipient engagement, facilitator or institutional reuse, and policy-context
  observation.
- **Non-goals:** treating views, clicks, ratings, signatures, or community size
  as demand, influence, adoption, or survival impact.
- **Verdict scope:** tested audience-channel fit and observed reuse. **Real
  recipients, facilitators, and institutional actors are required; agents
  cannot validate demand, virality, or influence.** Keep voluntary mobile play,
  an explorable reasoning instrument, and a facilitated case separate: success
  in one does not validate the others.

## Product and shape

- **Core question:** Which bounded next experiment is favored by the evidence,
  and what evidence would justify freezing or rejecting an integrated campaign,
  layered modes, separate products, a voluntary mobile game, or a facilitated
  case?
- **Minimum context:** the artifact and current decision, the shape hypotheses
  in [product architecture](../product/PRODUCT_ARCHITECTURE_PORTFOLIO.md), the
  relevant human lane verdicts, and the intended use context from
  [audience research](../research/AUDIENCE_AND_DISTRIBUTION.md).
- **Evidence:** repeated cross-lane human results across relevant cohorts,
  devices, and voluntary/facilitated contexts; transfer, agency, readability,
  continuation or reuse; plus content and maintenance evidence before any shape
  is frozen.
- **Non-goals:** selecting a durable product from one favorable session,
  allowing architecture already built to decide packaging, pooling distinct use
  contexts, or treating a successful facilitated case as a successful mobile
  game.
- **Verdict scope:** early review may **favor the next experiment** for a named
  shape and state what would reverse that allocation. Freezing a shape requires
  repeated cross-lane evidence; neither verdict approves the product, release,
  mission impact, or neighboring shapes.

## Engineering

- **Core question:** Does implemented behavior reliably match the intended
  symbolic model and information boundary, across supported states and devices,
  with maintainable content, performance, privacy, and rollback?
- **Minimum context:** source code and tests, relevant `docs/game-model/`
  specification, [current gaps](../CURRENT_GAPS.md), and the changed runtime
  paths. Deployment reviews additionally follow the deploy skill.
- **Evidence:** focused and full validation as appropriate, deterministic
  traces, rendered state coverage, performance and error data, schema/content
  migration behavior, and operational ownership.
- **Non-goals:** establishing domain truth, comfortable reading, fun, transfer,
  demand, or product impact merely because checks pass.
- **Verdict scope:** named implementation, environments, and operational
  conditions—not public or product approval.

## Fresh review after a fix

A rejected artifact does not become accepted because a patch addresses the
reported issue. Preserve the old finding, identify the new artifact/version,
and obtain fresh evidence in the failed lane. For cold first use, readability,
game feel, narrative response, transfer, and distribution, use new target humans
who have not been coached by the prior failure; an independent reviewer is also
valuable where prior context would mask the issue. Re-run adjacent lanes when
the fix changes their evidence—for example, editorial cuts can change claims or
transfer, and larger controls can change layout or interaction.

## Verdict form and escalation

> **[Accepted / rejected / unresolved] for [lane]** — artifact/version,
> audience or environment, evidence, and conditions. This verdict does not
> approve [named unreviewed lanes or broader product claims].

A lane verdict should remain narrow even when favorable. “Product candidate,”
“release candidate,” or “successful product” requires explicit cross-lane
synthesis at the corresponding evidence gate in the success model, including
the required human evidence and Jörn's domain approval. A product/shape verdict
that favors an experiment is not that synthesis. If artifact evidence
contradicts the success model, record the contradiction and route the assumption
itself for revision; do not force the artifact or evidence to fit a stale model.
