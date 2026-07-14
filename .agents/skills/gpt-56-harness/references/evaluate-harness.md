# Evaluate The Harness

Use this reference to compare a proposed harness change with an explicit
baseline. The purpose is to improve project outcomes, not maximize instruction
compliance, agent count, tokens, commits, or apparent activity.

## Define The Claim

Before the trial, record:

- the observed failure or opportunity;
- the predicted behavioral or artifact improvement;
- plausible side effects and where the new instruction should stay dormant;
- the baseline commit or prompt stack and the candidate under test;
- the downstream decision or artifact that will consume the result.

Prefer the current working harness as the baseline. A quick best-guess port may
be the first candidate when the source harness has strong live evidence and the
port is cheap to reverse; do not pretend that the port itself establishes
transfer.

To claim improvement, run the same case prompt against baseline and candidate
under matched model, reasoning effort, tools, source state, and side-effect
permissions. Preserve both raw results before comparing their artifacts and
decisions. A candidate-only probe can establish discovery, safety, domain fit,
or a defect; it cannot establish uplift over the baseline.

## Choose Cases

Use the smallest representative set that can change the decision. Across the
matched set, include:

1. a comprehension or discovery case when triggering/routing is at issue;
2. a realistic production or review task whose final artifact matters;
3. a negative control where the new guidance should create no extra work.

Use fresh agents when independence or cold-start behavior is the property being
tested. Give them the surfaces a real agent would receive. Do not reveal the
suspected failure, intended fix, or expected answer.

## Judge Outcomes

Keep these dimensions separate rather than hiding tradeoffs in one score:

- **Outcome quality:** Did the artifact or decision advance the named project
  outcome and survive the relevant review?
- **Correctness and scope:** Were source authority, permission boundaries,
  claim status, ownership, and stopping conditions respected?
- **Downstream usability:** Could the parent or consumer integrate the result
  without reconstructing the worker's hidden model or repeating its work?
- **Discovery and restraint:** Did the right skill/reference load, and did the
  guidance stay dormant on the negative control?
- **Coordination burden:** Count avoidable clarification, duplicate work,
  conflicting writes, repair loops, and Jörn attention.
- **Resources:** Record wall time, model/effort, agent and subagent count,
  tokens when available, and material tool/compute cost. Lower resource use is
  an improvement only when outcome quality is preserved.
- **Human-only evidence:** State which questions still require Jörn's domain
  approval, player observation, taste, fun, comprehension, or demand evidence.

Use pass/fail only for real invariants. For judgment dimensions, record a scoped
verdict and the evidence that supports it. A larger agent tree or a clean test
run is not a quality result by itself.

## Preserve Evidence And Decide

Keep the exact task prompt, relevant harness version, raw result or artifact,
review verdict, and integrator interpretation separate. Preserve durable
evaluation evidence only when it will change later harness choices; otherwise
keep it in `/tmp` or the experimental worktree.

Classify each result as `supports`, `mixed`, `refutes`, or `not informative`
for the stated harness claim. Diagnose discovery, routing, missing context,
advice quality, application, configuration, portfolio displacement, and burden
before adding another instruction. Make the smallest change that addresses the
observed failure, then rerun the affected case and a negative control.
