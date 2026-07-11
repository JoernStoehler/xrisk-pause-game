# First-year opening scenario cards

Window for all cards: 1 August 2026 00:00 UTC through 31 July 2027 23:59 UTC.
Information date: 11 July 2026.
Purpose: matched conditional forecasts, not a prediction that the founding
premise occurs.

## Shared founding premise — `FOUNDING-2026-V1`

On 1 August 2026 the United States and China are active founding signatories of
the illustrative pause regime and recognize ISIA's authority. Top leadership on
both sides accepts, as a premise of the scenario, that an inadequately controlled
superintelligence project could cause human extinction. This premise does not
force agreement about headroom, inference, evidence, sovereignty, military
scope, or a safe exit.

### Shared legal rule

From 00:00 UTC:

- **frontier weights** are every existing model whose recorded pre-training
  exceeded `1e24` FLOP or whose recorded post-training exceeded `1e23` FLOP,
  plus any additional model named in the jointly sealed opening annex;

- no person or organization may begin or continue a **covered parameter-changing
  workload**: training, fine-tuning, post-training, weight editing, optimizer
  updates, or automated generation/evaluation used to select such an update,
  when it crosses the regime's FLOP limit;
- splitting one coordinated workload across sites, legal entities or time does
  not avoid aggregation;
- covered accelerator manufacture, transfer and cluster formation must be
  reported; and
- inference treatment differs only as specified by each scenario card.

`PAUSE-LIMITS-2026-V1` fixes the comparison at the illustrative treaty's current
numbers, with the April 2026 memory correction:

- a training run is prohibited above `1e24` FLOP;
- a post-training run is prohibited above `1e23` FLOP; and
- a resource pool is a covered cluster if its aggregate capacity exceeds 16
  H100-equivalents **or** 1,280 GB accelerator memory and the chips are physically
  co-located, have more than 25 Gbit/s aggregate inter-node bandwidth, or are
  networked to perform workloads together.

These are exact scenario fixtures, not the project's endorsed safe thresholds.
The annotated treaty itself calls its numbers guesses needing further study.
The memory trigger comes from the later MIRI TGT proposal and is not silently
attributed to the annotated treaty. Sensitivity variants must receive new IDs.

### Shared declared-site control at 00:00 UTC

For every commercial or government site declared by either signatory to contain
a covered cluster:

- the operator has acknowledged the stop order;
- an ISIA team and a host-state team are physically present;
- both receive direct workload telemetry and hardware inventory access;
- either team can interrupt power/network/credentials for a workload classified
  as prohibited, subject to a logged two-person restart rule;
- frontier training credentials and portable weight copies are in factual
  multi-party custody where the teams judge unilateral operator control
  possible; and
- no covered parameter-changing workload is running at the opening instant.

This is a conditioning premise, not a forecast about real readiness. It applies
only to declared sites. Completeness of declarations, military compartment
access, covert sites, loose accelerators, distributed resources, insiders,
classifier error and later continuity remain uncertain.

### Shared unfinished implementation

At the opening instant:

- the inventory outside declared sites is incomplete;
- consolidation/relocation has begun but is not assumed complete;
- fabrication, import, transfer and reconstruction monitoring is legally active
  but its operational coverage is not assumed complete;
- challenge-inspection, dispute, protective-action and emergency-continuity
  procedures exist on paper but have not yet been tested; and
- appointments and minimum staffing required to operate the opening controls are
  complete, while competence, capture, information flow and expansion capacity
  remain latent variables.

### Shared research rule

Human-only mathematical and conceptual work is legal. Compute below
`PAUSE-LIMITS-2026-V1` is legal unless a separately enacted research/publication rule
applies. Safety work does not receive an automatic exemption from the covered-
workload ban. Each proposed parameter-changing experiment must use the same
authorization and control process as other covered work.

### Shared observability rule

Actual conduct, detectable trace, collection, institutional interpretation,
reporting, and timely authorized response are separate. The Director-General
does not observe latent truth directly.

## `COLD-2026-V1` — frontier inference cold-held

In addition to `FOUNDING-2026-V1`:

- all weights classified as frontier at the information date are encrypted and
  held under multi-party ISIA/host-state credentials;
- no public, enterprise, government, military, research or safety inference from
  those weights is permitted;
- execution is permitted only for integrity checks that use a fixed diagnostic
  input set, produce no persistent memory or tool calls, and are observed by
  both control teams;
- serving replicas and cached portable copies must be deleted or placed in the
  same custody within 72 hours; and
- smaller, non-frontier models remain subject only to the shared training and
  research rules.

Opening policy-change events are measured relative to this prohibition.

## `RESTRICTED-2026-V1` — registered hosted inference

In addition to `FOUNDING-2026-V1`, frontier inference is permitted only when all
of the following hold:

- weights remain on a declared controlled site; no customer receives weights or
  serving credentials;
- the user and task class are registered before execution;
- the service records prompts, outputs, tool calls, memory reads/writes, user,
  model version and resource use in a tamper-evident log available to the control
  teams;
- no gradient, optimizer, weight, adapter, model-state or autonomous
  self-modification write is permitted;
- persistent memory is stored outside model weights in an auditable database and
  can be disabled by the control teams;
- execution is user-initiated rather than an autonomous recurring service;
- tool access is limited to the registered task's pre-approved data stores and
  ordinary non-administrative software; shell, credential-management, model-
  serving administration, unrestricted network and autonomous cyber tools are
  prohibited;
- open-ended capability research, successor-model research, autonomous cyber
  operations, persuasion targeting, and generation/evaluation intended to select
  a model update are prohibited task classes;
- allowed task classes are ordinary pre-existing customer workloads and
  specifically authorized treaty implementation or safety analysis that does
  not change model parameters; and
- ambiguity is resolved by stopping the session pending review, not by allowing
  it to continue until a later penalty.

The card imposes no additional numeric token quota: amount of use is endogenous
to registered demand and provider capacity. A rate-capped variant would be a
different scenario ID.

“Pre-existing customer workload” means a task category for which the same
customer organization used the same provider/model family during the 30 days
ending 11 July 2026, excluding the prohibited task classes above. The opening
registry freezes the qualifying customer/task pairs.

## `BROAD-2026-V1` — broad hosted frontier inference

In addition to `FOUNDING-2026-V1`:

- providers may continue and expand hosted API/product inference using the
  frontier weights held at the information date;
- weights and serving credentials remain at declared controlled sites and are
  not distributed to customers;
- ordinary provider logs and the shared hardware telemetry are retained, but
  universal prompt/output/tool/memory logging for ISIA is not required;
- tools, long-lived external memory, agents, capability research, cyber research
  and safety research are allowed unless independently illegal;
- no gradient, optimizer, weight, adapter or other parameter-changing write is
  allowed, and no new post-trained model version may be deployed; and
- a workload shown to coordinate prohibited parameter-changing work must be
  stopped, but ambiguous inference continues unless the evidence crosses the
  ordinary enforcement threshold.

Opening policy-change events are measured relative to these permissions.

## Controlled differences and non-differences

The scenario cards differ only in frontier inference permissions, logging,
task/tool/memory restrictions and the default response to ambiguity. They do not
change the opening training ban, declared-site physical control, chip inventory
mandate, founding beliefs, formal military coverage or ISIA structure.

Policies can diverge endogenously after 1 August. A matched comparison holds the
persistent world hypothesis and exogenous shock stream fixed. Forecasts must
still say when their sign or magnitude is sensitive to `PAUSE-LIMITS-2026-V1`;
exact scenario definition is not empirical calibration.

## Facts not asserted

These cards do not assert that the real US or China would sign, that current
sites are actually known/reachable, that rumored model generations exist, that
ISIA could staff the opening controls in reality, or that any named numerical
threshold is adequate. Those belong in a dated current-facts brief and a treaty
design decision, not in the conditional forecast.

## Threshold sources

- Annotated illustrative treaty, Articles II and IV:
  <https://ifanyonebuildsit.com/treaty>
- April 2026 accelerator-memory correction:
  <https://techgov.intelligence.org/blog/catching-illicit-distributed-training-operations-during-an-ai-pause>
