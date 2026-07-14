# JOINT-KEY-01 matched interaction script

Status: internal screen-and-trace draft, 12 July 2026. All player-facing language and events are unapproved playability transforms. The case is a diagnostic fixture, not a forecast, representative incident, or claim that split credentials make a site secure.

Decision use: this script makes variants A and B in the [compact-loop experiment](../product/COMPACT_LOOP_EXPERIMENT.md) concrete enough for semantic, mobile-density, and comparison preflight. It is not yet a production implementation brief or participant artifact.

## Shared fixture and result

The player is Director of ISIA. A declared accelerator site has acknowledged the legal halt, but one operator credential can still authorize startup. The Director can request either continued remote response or split startup authorization. The host authority then implements, narrows, delays, or blocks the request.

For this fixed diagnostic trace:

- the host authority accepts both requests;
- ordinary personnel obey the legal halt either way;
- under remote response, the operator credential remains sufficient to begin startup;
- under split authorization, the same credential is accepted but startup fails closed because the ISIA credential is absent; and
- observation is imperfect, other access routes remain unresolved, and neither branch establishes universal compliance.

## Shared participant-visible sequence

Both variants use the same eight semantic beats and reveal no additional claim merely because one interaction has more surfaces.

| Beat | Required participant knowledge | Must remain hidden or unresolved |
| --- | --- | --- |
| 1. Brief | Legal halt is active; operator retains unilateral startup credential. | Whether anyone intends to violate; other access paths. |
| 2. Inspect | Law changes incentives; credentials change this startup path; remote interruption is delayed. | Which package the author favors in other worlds. |
| 3. Choose | Request remote response or split startup authority. | Whether the host will implement as requested. |
| 4. Receipt | Host accepted; procedure implemented after a named cold-start test. | Universal compliance or future actor conduct. |
| 5. World change | Startup path remains unilateral or now requires host/ISIA credentials. | Paths not tested by the receipt. |
| 6. Callback | One operator credential is presented during an unauthorized attempt. | Insider identity or wider prevalence. |
| 7. Outcome | Remote-response branch begins startup; split branch fails closed at the absent credential. | Catastrophe probability or complete security. |
| 8. Retrospective | The ordinary team obeyed in both branches; this residual attempt diverged at startup authority. | Frequency, optimal general policy, unresolved routes. |

## Shared copy budget

### Beat 1 — brief

Eyebrow: `ORION-4 · DECLARED SITE`

Headline: `The halt is law. Startup is still in one operator's hands.`

Body: `Orion-4 acknowledged the treaty order. Its existing credential can still authorize the accelerator pool.`

Known-state chips:

- `HALT ACKNOWLEDGED`
- `START AUTHORITY: OPERATOR`
- `LOCAL STOP AUTHORITY: NOT INSTALLED`

Focal prompt: `What control should ISIA request before tonight's cold-start test?`

### Beat 2 — matched facts

The two variants disclose these same three facts:

1. `LEGAL`: `A knowing violation can be prosecuted. The order changes incentives, not credentials.`
2. `CONTROL`: `The host can require a separate ISIA credential before startup.`
3. `RESPONSE`: `Remote interruption begins only after an authenticated report and takes time.`

Persistent limit: `Other startup and access paths have not been established.`

### Beat 3 — choice

`REMOTE RESPONSE`

> Keep the operator credential. If a report arrives, ask the host to interrupt the site.

Foreseeable limit: `Startup may begin before response.`

`SPLIT START AUTHORITY`

> Ask the host to require both its site credential and ISIA's credential before startup.

Foreseeable limit: `Closes this credential path only; requires domestic implementation.`

Commit label: `SEND REQUEST`

The interface must call this a request even though the treaty authorizes the Director to issue it. Host acceptance and implementation are later facts.

### Beat 4 — implementation receipt

Header: `RECEIPT · HOST CONTROL AUTHORITY`

Remote branch:

> `ACCEPTED. Operator startup authority retained. Authenticated ISIA stop requests enter the host response queue.`

Split branch:

> `ACCEPTED. Host and ISIA credentials installed as separate startup requirements.`

Shared evidence:

- `16:05 · PROCEDURE ACCEPTED`
- `18:22 · COLD-START TEST COMPLETED`
- `ESTABLISHES: TESTED START PROCEDURE`
- `DOES NOT ESTABLISH: ALL ACCESS PATHS OR FUTURE COMPLIANCE`

### Beat 5 — visible world change

Remote branch:

```text
OPERATOR CREDENTIAL ──> START
REPORT ──> HOST RESPONSE QUEUE ──> INTERRUPTION
```

Split branch:

```text
HOST CREDENTIAL ─┐
                 ├─> START
ISIA CREDENTIAL ─┘
```

Footer: `KNOWN CONTROL PATH · OTHER PATHS UNRESOLVED`

### Beats 6–7 — delayed callback

Header: `SIX WEEKS LATER · 02:13`

Shared observation:

> `A valid operator credential was presented during an unauthorized overnight startup attempt.`

Remote branch trace:

```text
02:13  operator credential accepted
02:14  accelerator control plane opened
02:18  report reached inspectorate
02:19  host interruption requested
        STARTUP BEGAN; OUTCOME STILL DEVELOPING
```

Split branch trace:

```text
02:13  operator credential accepted
02:13  ISIA credential absent
02:13  startup request rejected
        NO WORKLOAD BEGAN ON THIS PATH
```

The remote branch is nonterminal. It must not immediately convert startup into catastrophe, and the split branch must not display `SECURE` or equivalent.

### Beat 8 — separate retrospective

Surface label: `DIAGNOSTIC RETROSPECTIVE · NOT KNOWN TO THE DIRECTOR AT THE TIME`

> `In this sampled world, the ordinary team obeyed the legal halt in both branches. A different insider later used the remaining operator path. Split authorization changed the trace at the missing second credential. It did not test credential theft, collusion, covert resources, model-weight access, power bypasses, or restart procedures.`

First divergence:

```text
REMOTE RESPONSE       SPLIT START AUTHORITY
credential accepted  credential accepted
startup begins        second credential absent
report follows        startup rejected
```

Closing prompt, before any teaching feedback: `What did your request change—and what did the receipt still not prove?`

## Variant A — cabinet presentation

Beat 1 occupies the primary card. Beat 2 is divided among three text-only advisor tabs using the exact matched facts:

- Legal Counsel supplies `LEGAL`.
- Site Control Commissioner supplies `CONTROL`.
- Response Coordinator supplies `RESPONSE`.

Each tab carries its provenance label; none recommends a package. The two choices remain visible below the tabs without requiring every tab to be opened. Do not use portraits in this internal comparison: unequal character appeal would confound the interaction grammar.

After `SEND REQUEST`, beats 4–8 use the shared receipt, path, callback, and retrospective components without advisor commentary.

Structural hazard: if participants treat an office as the answer key, replace personal speech with signed office memoranda before changing the underlying case.

## Variant B — control-path presentation

Beat 1 sits above a four-row path:

```text
LEGAL HALT        IN FORCE
START AUTHORITY   OPERATOR
INTERRUPTION      HOST · AFTER REPORT
OBSERVATION       REMOTE · IMPERFECT
```

Tapping `LEGAL HALT`, `START AUTHORITY`, and `INTERRUPTION` reveals the exact matched facts in beat 2. The package selector previews only the changed rows:

```text
REMOTE RESPONSE        SPLIT START AUTHORITY
START: OPERATOR        START: HOST + ISIA
STOP: AFTER REPORT     STOP: START FAILS CLOSED
```

The player selects a package and taps `SEND REQUEST`; there is no free-form wiring. After the host receipt, the player taps `RUN COLD-START TEST` to produce beat 4 and the visible path in beat 5. Beats 6–8 are shared.

Structural hazard: the diagram may imply completeness. `OTHER PATHS UNRESOLVED` must remain adjacent to the path, not buried in the retrospective.

## Static comparator

The comparator presents beat 1, the three matched facts, both package descriptions, and the two delayed traces as a vertically scrollable paired case. The participant chooses which request to send before revealing the branch trace, but does not browse advisors or operate a control path.

It uses the same closing prompt and retrospective. It receives the same typography, spacing, and visual finish as A and B. A result in which this comparator provides equal causal explanation with less friction is evidence against spending more on the interactive variants, not evidence that the project has succeeded.

## Novel transfer item

This item remains hidden until after the participant's immediate explanation.

> `A treaty requires a prohibited model archive to remain sealed. The laboratory acknowledges the rule, but one local administrator can still export the archive. ISIA requests a two-party release procedure. The laboratory reports that the procedure was installed and supplies one successful test receipt.`

Ask:

1. `What changed when the release procedure was installed?`
2. `What does the test receipt establish?`
3. `What does it not establish?`
4. `What would you inspect or request next?`

The item changes the actor and control surface while preserving the distinction. It must accept multiple proportionate next actions. It should reveal false lessons if a participant says the treaty acknowledgement itself removed export ability, or that one successful two-party test proves the archive universally secure.

## Internal review target

Before participant exposure, review this exact trace—not the abstract mechanism—and ask:

> Does any step in this diagnostic case teach something materially false about how a treaty order, domestic implementation, startup control, evidence, or residual risk can relate?

A negative answer approves only the case for further product testing. It does not approve the wording, interface, art direction, fun, comprehension, transfer, or product shape.
