# Restart checkpoint — implementation review, 10 October 2026

Status: completion and review snapshot for `cleanup/restart-checkpoint-2026-10-10`.
This records repository changes, checks, and unresolved gaps; it is not domain
approval or evidence that a new game is fun, teaches, or reaches players.
The pre-cleanup source tree is pinned at
`255282028d6d5e13274bd21b80a00dbd7b902f44` /
`archive/pre-restart-2026-10-10`. At the 10 October review, no merge, push,
or deployment had been performed.

## Integration and follow-ups — 13 October 2026

Jörn approved merging, cleanup, and pushing this checkpoint. It was merged into
main and pushed on 13 October. Both the pre-restart recovery tag and the
inventory/proposal archive at `archive/restart-inventory-2026-10-10` were pushed.
The task's implementation and inventory worktrees and branches were removed
after confirming that ignored plaintexts match main and the private backup.
Previous build/test outputs were privately archived, and the old dependency
installation was removed. The independent sandbox-winddown worktree remains
outside this cleanup. Domain/player-facing claims remain draft.

[GitHub validation for the integration](https://github.com/JoernStoehler/xrisk-pause-game/actions/runs/38388162264)
passed, including the secret-scanning step. A second verified local Git bundle
and the cleanup-artifact archive are in the same private backup directory.

The next environment session should establish its actual capabilities and fill
in [INSTALL](../INSTALL.md), including source-history access and instruction
loading. Separately, arrange private access to the encrypted literature's key
or an authorized plaintext transfer. Neither setup can be established from
this host alone. Cloudflare credentials are absent on this host, so checking
provider-side Git build triggers remains a follow-up; the repository's GitHub
workflow performs validation only. Missing transcripts and historical
prototype refs need recovery only when a concrete next question depends on
them. Select that question before refreshing literature or choosing a game
stack; there is no mandatory whole-corpus rehabilitation task.

## Remaining gaps

- **Portable encrypted-source access:** all four ignored plaintexts, including
  IABIED, were copied into this worktree and a private local backup with matching
  checksums. Tracked ciphertexts are unchanged. The decryption key was unavailable;
  equivalence to those ciphertexts and recovery in a new cloud remain unverified.
  The key or an authorized private transfer is needed there.
- **Interview provenance:** July records are agent-written paraphrases; raw
  session pointers are missing, and the safety-exit record ends in a truncated
  sentence. Older recovered numerical attributions also lack raw transcripts.
  They are preserved with these limits, not promoted to verified forecasts.
- **Other prototype branches:** historical references to commits
  `7cbf546`, `7f23bc2`, `1c6f376`, `cf563b7`, `a759485`, and
  `b3f0be9` did not resolve locally. Their recovery is not established.
- **Environment and hosting:** Claude chat cloud and ChatGPT Work images,
  capabilities, persistence, and instruction loading need a first run.
  Cloudflare account state and provider-side build triggers were not inspected.
  Check triggers before merging removal of the old build files.
- **Research coverage and fidelity:** most corpus metadata/conversions remain
  unaudited. The fresh-reader test demonstrates a few useful paths, not complete
  literature coverage or domain correctness. Further source checking and Jörn's
  approval remain necessary where claims matter.

These gaps need missing source evidence, private access, or the actual target
environment; repository rearrangement cannot resolve them efficiently.

## What changed

Six substantive [topic briefs](README.md) replace the old active documentation
hierarchy. [Jörn's four source records](../interviews/jorn.md) are consolidated
with all original bodies preserved exactly. Literature stays flat, with a
[115-entry catalog](../literature/INDEX.md), availability distinctions, labels for
known project compilations, and [directory-local maintenance rules](../literature/AGENTS.md).
The incident-statistics contradiction and an IAEA editorial description are
annotated without rewriting their original claims.

The React/Vite game, diagnostic model, tests, deployment configuration, and two
app-specific skills are removed from the active checkout. Generic coordination,
knowledge, log-reading, review-delivery, and session workflows remain; stale
paths and standing model-family rankings were revised or retired.

[INSTALL](../INSTALL.md) supplies common setup and three environment sections.
Python standard-library link checks replace application CI. The secret-scanning
workflow and optional hook remain. Decryption now publishes complete output at
mode 0600 and cleans up failed temporary output.

## Review findings and fixes

Independent content review found two valuable judgments missing from the briefs:
the uncertain long-pause horizon with active work, and weak measures' possible
value as enabling steps. Both now point to the preserved May record. It also
found an overbroad treaty citation and an unlabeled project synthesis; both were
corrected. Re-review confirmed these four fixes, then caught wording stronger
than Jörn's six-month-pause statement; that wording and the shorter-if-lucky
caveat were corrected too.

Independent engineering review found no remaining actionable defect in its
scope, including a second review of the changed decryption helper. A fresh reader
retrieved a treaty passage, interpreted the conditional inference estimate,
planned an unfamiliar cloud setup, and found the scoped literature workflow
without assuming browser/npm installation or exhaustive coverage.

## Evidence and limits at the 10 October review

- All four interview bodies match the baseline exactly.
- Of 119 baseline tracked literature files, 113 are byte-identical. Changes are
  three navigation/status files, two source annotations, and temporary-file
  ignores. All four ciphertexts and private plaintext copies are unchanged.
- Git recovery tag resolves to the baseline; a verified private Git bundle
  preserves the pre-cleanup refs/history. Backup location:
  `/home/joern/.local/share/xrisk-pause-game/restart-backups/2026-10-10-2552820`.
  This is local backup evidence, not proof of remote disaster recovery.
- Local links/anchors, whitespace, shell syntax, and retained skill frontmatter
  checks pass. The canonical skill validator was unavailable; a structural
  substitute was used. Gitleaks was unavailable locally, so the optional hook
  skipped its scan. GitHub-hosted CI, including secret scanning, has not run.
- Synthetic real-age tests cover exact output, mode 0600, existing-file skip,
  invalid-cipher cleanup, and absent-key skip. The reviewer independently checked
  success/partial-output failure with a test age command.
- A clean local clone is checked without ignored plaintext. `main` remains
  unchanged. No game tests apply to this checkpoint; archived game test results
  do not validate the next concept.

## Why there is no dummy game

The concept has not selected an interaction or renderer. Keeping portable setup
knowledge and a recoverable old-stack candidate avoids a framework default
while leaving a deliberate setup cost for the first prototype. These earlier
planning allowances are estimates, not measured time or promises:

| Next task | Rough focused agent-work allowance |
| --- | --- |
| Reproduce old stack in a clean environment | 1–3 hours, plus 2–8 for debt/version repair if needed |
| New minimal web scaffold | 1–3 hours; 4–8 total with consistent CI/tests/browser setup |
| Compare stack fit after a representative interaction exists | 4–12 hours; before that, 30–60 minutes identifies constraints only |
| First verified static preview after build works | 1–3 hours with usable account; 3–8 with access/routing work |
| First run in each additional environment | 0.5–2 hours planning allowance; unsupported capabilities can block it |

Reusing the old stack becomes reasonable if a new concept selects it. A dedicated
browser dependency becomes reasonable when an actual rendering/testing consumer
justifies installation and maintenance. Neither choice has been made implicitly.
