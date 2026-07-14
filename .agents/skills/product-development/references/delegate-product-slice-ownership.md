# Delegate Product-Slice Ownership

Use this reference when deciding whether a fresh autonomous session should own
a whole coherent product slice rather than receive a bounded implementation or
review subtask.

Whole-slice ownership is plausible when the repository contains discoverable
domain and product sources, the slice's player purpose and downstream interface
can be stated, and one session can iterate across design, model boundaries,
implementation, rendering, review, and revision. Missing session history can
then be cheaper than transferring a large accumulated context. Do not use a
slice owner to avoid settling an unresolved project-wide product shape, claim,
or authority decision that would change the assignment itself.

The integration owner retains cross-slice dependency order, accepted project
scope, and merge authority. Transfer the slice-local work needed to reach the
gate: inspect current evidence, compare plausible designs, choose an artifact,
implement it, render real states, run relevant checks, obtain scoped agent
reviews, revise, and return a reviewable candidate. Do not constrain the
recipient to a designer or coder role when the outcome requires both.

Use `$gpt-56-harness` for a durable cold-start prompt. State:

- what player/use-context decision the slice serves;
- what earlier surfaces supply and what later surfaces may rely on;
- required scope, accepted decisions, claim status, and prohibited stronger
  conclusions;
- primary entry points and the authority hierarchy among code, game model,
  product docs, research, old artifacts, and developing evidence;
- the returned worktree's downstream use and the review or human-test gate it
  must plausibly pass.

Keep provisional diagnoses and suggested strategies distinguishable from fixed
constraints. Give the owner room to discover a better interaction, structure,
or artifact medium. Define failure at the outcome level: a design inventory,
first-pass mockup, passing build, or favorable agent review is not a successful
product slice when the assignment is to return a human-test-ready candidate.

When domain evidence or adjacent implementation is moving, separate the stable
slice core from possible extensions. Preserve insertion points or reopen
conditions without turning immature evidence into player-facing claims.

Treat the first whole-slice run as a workflow trial. Evaluate the artifact,
semantic calibration, player-facing quality, review and integration cost, and
usefulness as a new starting point. Update durable delegation or model-routing
guidance only from the observed result.
