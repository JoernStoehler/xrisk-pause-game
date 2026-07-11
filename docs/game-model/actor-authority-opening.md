# Opening actor and authority chains

Status: primary/authoritative-source-backed structural map; current-law snapshot
11 July 2026; not a forecast of political willingness or litigation outcome.

## Core invariant

The DG proposes or requests action. Domestic actors supply legal authority,
appropriation, implementation, physical access and coercion. No card may assign
“the US complies” or “China complies” directly.

## United States

```text
                    Congress ─ statute ─ appropriation
                       │                     │
President ─ support ─ US National Authority / agency ─ rule or order
                       │                     │
               DOJ / courts           operator / inspector
                       │                     │
                   coercion              physical act
```

Opening branches:

- federal assets and voluntary operator monitors can move in days;
- compulsory treaty inspection needs a valid domestic chain;
- export/foreign-transfer control is not domestic runtime control;
- courts can stay or narrow an action;
- states/utilities/localities have heterogeneous physical and permitting roles;
  and
- DPA Titles I/III and most Title VII authorities in the current compilation
  terminate on 30 September 2026 unless renewed, making renewal a first-quarter
  event.

Required gates for a US action include decision maker, legal basis, implementer,
controlled asset, voluntariness, coverage, lead time, evidence, confidentiality,
appropriation, challenge/stay, sunset and reversibility.

## People's Republic of China

```text
central Party authorization
       ├─ State Council → CAC / MIIT / NDRC-NDA / security organs
       │                        ↓
       │               provincial joint teams → civilian sites
       │
       └─ CMC order → PLA / military research and procurement sites
```

Opening branches:

- top-level authority can be broad while site information remains poor;
- CAC service/model filings omit important internal research;
- MIIT/NDRC/power/project data locate infrastructure but not workload truth;
- MPS/MSS can compel or discover information that may not be shareable;
- provincial teams have site knowledge plus growth/local-protection incentives;
- civilian compliance does not establish military compliance; and
- foreign access is a negotiated managed-access protocol rather than automatic
  or impossible.

## Executable structural checks

`src/model/authority.ts` contains a deliberately small gate evaluator. Current
tests show:

- treaty/ISIA status alone does not grant direct domestic entry;
- US voluntary monitoring can precede compulsory inspection;
- PRC civilian freeze and military freeze require parallel chains; and
- satisfying a political decision gate does not satisfy implementation/access
  gates.

This is not yet connected to the playable vertical slice. Its next use is a
legislative/implementation process chapter in which opening orders can be full,
narrowed, delayed or blocked for named reasons.

## Source packets

- `source/us-authority-map-2026-07-11.md`
- `source/prc-authority-map-2026-07-11.md`
