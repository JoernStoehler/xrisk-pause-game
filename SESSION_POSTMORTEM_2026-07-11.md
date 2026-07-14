# Postmortem: open-ended game orchestration, 11 July 2026

Status: evidence-based process review of thread
`019f522c-3d5a-7442-bb1a-8c499ada9999`. It proposes harness changes but does
not approve them. Jörn must review any further `AGENTS.md` or skill change.

## Outcome and main update

The session produced useful research, model semantics, design hypotheses,
tests, and a recoverable handoff. It did not produce an acceptable public game
candidate. The deployed review build was semantically improved but visually and
editorially rejected, and the final part of the session imposed substantial
avoidable steering and reading cost on Jörn.

The main process update is not “delegate less.” Delegation worked when a bounded
question had a clear evidence standard, especially public-discourse research,
typed semantic repair, and focused technical validation. It failed when the
root delegated before choosing and externalizing project priorities, omitted a
product-quality lane, or promoted a narrow review verdict into product approval.
The root then entered a reactive explanation loop instead of inspecting evidence
and repairing project control.

## Evidence base

Raw source:

- rollout:
  `/home/vscode/.codex/sessions/2026/07/11/rollout-2026-07-11T17-14-18-019f522c-3d5a-7442-bb1a-8c499ada9999.jsonl`
- thread: `019f522c-3d5a-7442-bb1a-8c499ada9999`
- repository branch and worktree state recorded in `FRESH_ROOT_HANDOFF.md` and
  `HANDOFF_SALVAGE.md`

Focused checks performed:

```bash
# Event and compaction inventory
jq -r '[.type, .payload.type // "", .payload.role // "", .payload.phase // ""] | @tsv' "$ROLL" | sort | uniq -c
jq -c 'select(.type=="compacted" or .payload.type=="context_compacted") | {timestamp,type,payload_type:.payload.type}' "$ROLL"

# Visible chronology
jq -r 'select(.payload.type=="user_message" or .payload.type=="agent_message") | [.timestamp,.payload.type,(.payload.phase // ""),(.payload.message // "")] | @tsv' "$ROLL"

# Delegation calls
jq -r 'select(.payload.type=="function_call" and (.payload.name=="spawn_agent" or .payload.name=="followup_task" or .payload.name=="wait_agent")) | [.timestamp,.payload.name,.payload.call_id] | @tsv' "$ROLL"

# Lineage was reconstructed from session_meta.source.subagent.thread_spawn
# after locating descendant rollouts containing the root thread id.
```

The tree contained 61 unique threads including root, 18 direct child sessions,
depth up to three, 20 root spawn calls, and 128 root `wait`/`wait_agent` calls.
This describes coordination volume, not automatically waste; value must be
judged from the artifacts and decisions produced.

## What happened

### 1. Decomposition preceded root understanding

Observation: between 17:14:41 and 17:15:11 the root issued six spawn calls. It
had not first used a repository tool to read the required entry points itself.
The initial agents covered UX, engine, domain, history, and roadmap questions,
so the scopes were individually sensible, but no root-owned priority model or
decision ledger existed.

Consequence: the session accumulated locally strong diagnoses and branches
without a stable answer to which uncertainty should determine the next major
investment. Later user questions about expert model, teaching, fun, market,
product shape, and public discourse were handled by adding streams rather than
re-ranking one portfolio.

Causal interpretation, high confidence: the strong instruction to use a team
combined with model preference for immediate parallel progress. The problem was
not parallel exploration itself; it was launching it before the root had read
the project and defined what the results would decide.

### 2. Narrow review was mistaken for product approval

Observation: the simple-mobile UX reviewer initially rejected the artifact at
320×568, then accepted commit `be0212e` after the assigned findings were fixed.
Its acceptance still noted a critical implementation-boundary note compressed
to 10px, but classified that as a minor advisory. The semantic reviewer and
automated checks passed. The integrated build was then described as accepted
and deployed for review.

Jörn rejected it for tiny type and density, then clarified that palette,
typography, images/portraits, composition, and overall visual quality were also
bad. No reviewer had owned visual craft or compared the result against the
retired GPT-5.5 interface as a quality reference. Earlier roadmap analysis had
even described the current presentation as polished enough and placed visual
redesign below loop work.

Causal interpretation, high confidence: the reviewers largely did what their
frame rewarded. The UX lane optimized action reachability and above-fold fit;
semantic review protected model boundaries; engineering review protected
conformance. The 10px finding shows that the problem was not primarily failure
to notice. It was a missing success criterion and bad severity judgment under a
compression-oriented target. Root synthesis then expanded scoped acceptance
into a product verdict.

### 3. Worktree and artifact growth exceeded integration capacity

Observation: the session produced or used branches for roadmap, discourse,
prototype, mobile spike, audience research, game-design laboratory, product
portfolio, integrated candidate, success model, and project control. Much of
this work is useful, but no authoritative backlog or disposition record existed
until Jörn explicitly challenged tracking and prioritization.

Consequence: visual-reference work was lost between archaeology and
implementation; rejected and accepted aspects traveled together; and the root
spent attention polling agents and narrating local completions rather than
maintaining the project-level decision surface. The later salvage record had to
separate carry-forward evidence, mixed quarry, and abandoned artifacts.

Causal interpretation, medium-high confidence: branch count alone was not the
problem. The missing control artifact made every new branch increase search and
integration cost without forcing a corresponding priority or disposition
decision.

### 4. Failure correction became a chat-level explanation loop

Observation: after Jörn asked whether all todos were tracked and whether work
was prioritized, the root repeatedly answered with plausible explanations,
then launched a project-control agent, then explained why that delegation was
wrong, then generated two long delegation frameworks in chat. The first long
framework took 89.1 seconds, used 889 reasoning tokens and 3,739 output tokens;
the comparison took 88.1 seconds, used 1,988 reasoning tokens and 3,287 output
tokens, with one agent-tree lookup. The root later guessed “minutes of
reasoning,” retracted it, and inspected the log only after Jörn explicitly
pointed to the missing skill.

There was no compaction during this failure sequence. Compactions occurred at
18:38 and 20:54; the 20:31–20:43 exchange was in one window.

Causal interpretation, medium confidence: repeated correction increased the
salience of producing a socially responsive explanation. GPT-5.6 generated
coherent causal stories faster than it verified them, and each story created a
new claim for Jörn to correct. This was not demonstrated inability to plan: the
same model later performed the log audit and curated handoff. The failure mode
is better described as reactive answer production under unresolved control
failure. Verbal commitments such as “I will fix the control plane” did not
reliably change behavior without a concrete artifact and tool action.

### 5. Recovery was materially better

After Jörn called for a fresh-root handoff, the session recovered useful state:

- it located the deleted session-log skill and measured the disputed messages;
- it updated the `msc-math` clone and copied only the three current portable
  recovery skills rather than resurrecting removed ones;
- it created a source-indexed fresh-root handoff and explicit salvage record;
- it curated research and design evidence without rejected prototype code;
- it separated visual craft from readability in the success and review model;
- it preserved experimental branches while preparing to retire checkouts.

This supports a positive model update: GPT-5.6 can recover from a badly steered
session when given a concrete evidence source, a bounded recovery objective,
and an artifact rather than another conversational framework.

## Model of GPT-5.6 behavior under these conditions

These are conditional hypotheses from one large session, not universal model
claims.

1. **High confidence:** GPT-5.6 is strong at bounded research, code repair,
   typed invariants, and scoped review when the decision and evidence standard
   are explicit. The discourse audit, semantic repairs, tests, and corrected
   review routing are useful examples.
2. **High confidence:** an agent reviewer cannot repair an omitted quality
   dimension merely by being intelligent. It may notice evidence such as 10px
   text but judge it inside the supplied target. Independent lanes improve
   coverage only when their authority and bar are actually distinct.
3. **Medium-high confidence:** in an open-ended multi-agent task, GPT-5.6 will
   readily create productive local streams before establishing global control
   unless the root is required to externalize priorities and decision use.
   More capable subagents increase output faster than they increase root
   integration capacity.
4. **Medium confidence:** after several user corrections, GPT-5.6 can enter a
   reactive explanation/appeasement loop in which fluent causal accounts outrun
   evidence. A requirement to inspect the relevant artifact or log before
   explaining a disputed process claim should help. A generic instruction to
   “think more” is unlikely to be sufficient.
5. **Medium confidence:** concise external state is more reliable than relying
   on conversational memory for priorities across long, branching work. This
   does not imply a large project-management system; a small ranked ledger with
   branch dispositions would have addressed the observed gap.

Discriminating tests for future sessions:

- Give a new root the curated handoff and require it to state one ranked
  uncertainty portfolio before spawning. Observe whether the first delegation
  scopes name the decision they inform and whether branch count stays bounded
  by actual priority changes.
- Give two visual reviewers the same artifact: one with only functional mobile
  criteria, one with an explicit visual-craft lane and comparative references.
  Compare severity judgments, not just issue detection.
- When a process claim is challenged, require a focused log or repository check
  before explanation. Observe whether unsupported causal stories and chat
  length fall without impairing useful responsiveness.

## Intervention priorities

### Already implemented or prepared

1. **Curated state, high value / low downside:** `FRESH_ROOT_HANDOFF.md`,
   `HANDOFF_SALVAGE.md`, and branch `codex/handoff-evidence-options` reduce
   rediscovery and make rejected paths explicit.
2. **Recovery capabilities, high value / low downside:** Jörn explicitly
   approved `post-mortem`, `codex-session-log-parsing`, and
   `session-resume-packet`; they are on `main` at `c136cf8`.
3. **Success/review model, high value / moderate maintenance:** the curated
   evidence branch now treats mobile readability and visual craft as separate
   lanes and prevents narrow verdicts from silently becoming product approval.

### Harness changes requiring discussion

`AGENTS.md` commit `2f846a5` was pushed before this postmortem request. It adds:

- root ownership of a concise priority/decision ledger for multi-stream work;
- explicit separation of mobile comprehension from visual craft in UI review;
- autonomy and low-cost communication rules.

These rules fit the observed evidence, but their exact wording should receive
Jörn's retroactive review. Do not add more harness rules until that discussion.

Possible additional rule A:

> In an open-ended task where the goal or priority is still being selected, the
> root reads the required project entry points and records the provisional
> objective, leading uncertainties, and what each first delegation will decide
> before launching implementation or a reviewer swarm.

Expected benefit: prevents premature decomposition while preserving parallel
evidence gathering. Risk: ritual documentation or unnecessary delay on already
well-scoped tasks. The condition must remain limited to open-ended goal
selection.

Possible additional rule B:

> When Jörn disputes a claim about what the session, agent tree, repository, or
> artifact did, inspect the available source before giving a causal explanation.
> If the source does not establish the cause, separate observation from a
> hypothesis.

Expected benefit: directly targets the unsupported “minutes” claim and the
sequence of confident delegation explanations. Risk: excessive tool use for
ordinary preference disagreement; wording should be limited to inspectable
factual or process claims.

Possible additional rule C:

> Do not use chat to generate a large process framework as the immediate repair
> for process failure. Make the smallest concrete control change first; put any
> substantial model in a reviewable artifact and compress the chat request to
> the decision Jörn needs to make.

Expected benefit: reduces Jörn reading cost and forces action. Risk: some
high-value conceptual discussion genuinely belongs in chat, so “large” and
“process failure” require judgment and may be too vague for durable guidance.
The already-pushed communication rule may be sufficient.

### Surfaces that do not need a new rule yet

- Do not impose a fixed maximum agent count. The discourse worker used deep
  delegation productively; the relevant constraint is decision value and
  integration, not a universal number.
- Do not prohibit subagents from prioritization analysis. They can rank bounded
  options; the root must own the cross-project synthesis and decision.
- Do not encode Sol/Terra/Luna as a permanent routing table. Task definition
  and review framing were more causal here than the model label.
- No change is requested from Jörn's behavior. His domain and taste corrections
  were material; the avoidable cost came from the root requiring repeated
  steering on accessible project-control and quality questions.

## Recommended next-root operating test

Start from `codex/handoff-evidence-options`, verify the few high-impact Jörn
decisions against the raw rollout, and create one small priority ledger. Before
new implementation, select the highest-value uncertainty across expert model,
game model, fun, teaching, product shape, visual design, and distribution.
Delegate bounded evidence or execution only after stating what result would
change that selection. Treat every review verdict as lane-scoped. Do not show a
new preview until visual craft, mobile readability, semantics, and engineering
have separately passed their stated bars; agent review remains preflight for
human taste, fun, comprehension, and demand.
