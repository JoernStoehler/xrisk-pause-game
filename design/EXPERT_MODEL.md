# Expert Model

Status: draft extracted from the restored `2026-05-11 10:30` Codex session
log. This is not card text, not public wording, and not a complete domain
model. It is a readable project reference for Jörn's expert views about AI
pause governance.

## Purpose

1. Record the expert views recovered from the deleted extraction session.
2. Separate Jörn's answers from Codex summaries.
3. Preserve uncertainty and explicit quantities when they appear.
4. Track unanswered questions that should be asked later.
5. Give future game-design work a reliable domain reference.

## Source Logs

Primary expert-interview source:

```text
/home/vscode/.codex/sessions/2026/05/11/rollout-2026-05-11T10-30-40-019e1696-c6d9-74e1-9f5a-6fbcc90b75e8.jsonl
```

Setup/provenance source:

```text
/home/vscode/.codex/sessions/2026/05/11/rollout-2026-05-11T10-02-46-019e167d-3c6d-7130-8787-60de3e4f4859.jsonl
```

This rewrite-discussion source:

```text
/home/vscode/.codex/sessions/2026/06/02/rollout-2026-06-02T09-26-02-019e87a7-805f-7333-9e75-a97742a3df91.jsonl
```

The branch `stream/expert-model-extraction-recovered` is not a source for
Jörn's view. It is a secondary artifact made from the session and later recovery
work. Use it only as a hint for where to look in the logs.

## Extraction Commands

Extract human-visible messages from a session log:

```bash
SESSION=/home/vscode/.codex/sessions/2026/05/11/rollout-2026-05-11T10-30-40-019e1696-c6d9-74e1-9f5a-6fbcc90b75e8.jsonl

jq -r '
  select(.type == "event_msg")
  | select(.payload.type == "user_message"
      or .payload.type == "agent_message")
  | "\n## " + .timestamp + " " + .payload.type + "\n\n"
    + (.payload.message // "")
' "$SESSION" > /tmp/expert-model-10-30-chat.md
```

Find the main expert-interview sections:

```bash
rg -n \
  "fake composite quotes|Topic: China|Topic: Capability|CAP-Q02|SUF-Q01|CMP-Q01|I can quickly state|Thx! Here's my quick response|right: 1" \
  /tmp/expert-model-10-30-chat.md
```

Inspect tool/file operations from the session:

```bash
jq -r '
  select(.type == "response_item")
  | select(.payload.type == "function_call")
  | select((.payload.arguments // "") | test("expert-model|EXPERT_MODEL|git commit|apply_patch|worktree"))
  | .timestamp + " " + .payload.name + " " + (.payload.arguments // "")
' "$SESSION"
```

## Source Sections

The readable extraction below uses these recovered sections:

1. `BROAD`: fake public-discourse quotes and Jörn's 15-part answer.
2. `CHN`: China / treaty feasibility prompt and answer.
3. `CAP-1`: capability research / dual-use safety prompt and answer.
4. `CAP-2`: research controls under uncertainty prompt and answer.
5. `SUF`: sufficiency / fake hope prompt and answer.
6. `CMP`: compute tracking prompt. The exact prompt was recovered, but no Jörn
   answer to that prompt was recovered.

## Extracted Expert View

### 1. Survival Feasibility

Jörn's view is not "survival is easy if people try." It is closer to:

1. There are demanding expert requirements.
2. Some assumptions about reality are probably true but not certain.
3. Survival is possible if the requirements are not softened in fatal ways.
4. Survival also depends on not being unlucky about facts such as how much
   compute a seed superintelligence needs, and how well politicians can
   understand that difficult action is needed to avoid personal death.
5. If those conditions hold, humanity may survive and reach a good
   post-singularity future.

Source: setup answers in `10:30`.

### 2. Sufficiency

Recognizing risk is not enough. Many actions do not affect existential risk.
Some actions are harmful. Few actions are helpful. Fewer are sufficient.

For the game, this means ordinary governance measures should not be represented
as enough merely because they are directionally good. Labels, audits, fines,
voluntary thresholds, model evaluations, and emergency powers can fail if they
do not stop the path to ASI before a point of no return.

Weak measures can still be useful if they make strong measures more likely.
Jörn described this as moving survival from "close to zero" to "close to zero
but higher" by themselves, and then to "maybe we actually survive this" when the
later strong measures happen.

Source: `BROAD` item 1 and `SUF`.

### 3. Points Of No Return

A point of no return can happen before extinction. Examples from Jörn:

1. A time can arrive when only pulling the plug on a seed superintelligence
   would still suffice.
2. A later time can arrive when adding safety measures no longer helps.
3. A later time can arrive when standard economic incentives no longer matter
   because some actors have stronger motives and can take actions that
   unknowingly kill everyone.

Source: `BROAD` item 1.

### 4. Generic Regulation

Existing or proposed governance can be useful and still insufficient. A visible
process is not the same as a causal blocker.

Jörn endorsed the claims that:

1. The issue is whether measures are sufficient before points of no return.
2. "Tighten later" fails if the warning comes after the option to recover is
   already gone.
3. Weak measures can be worse than nothing if they create political comfort
   while leaving the core path to ASI open.

Jörn was less sure about a broad claim that fake hope "often" comes from visible
governance substituting for an actual blocker. He treated it as one possible
discourse failure among many, and too abstract without more detail.

Source: `SUF`.

### 5. China And Treaty Feasibility

The proposal is not unilateral U.S. slowdown. The proposal is a global treaty or
everyone dies.

Jörn affirmed these points:

1. China and the U.S. share the core interest of not going extinct.
2. Mistrust and cheating risk are real treaty-design problems.
3. They are not proof that a treaty cannot work.
4. The game should avoid both "China will inevitably defect" and "everyone
   rationally cooperates once they understand x-risk."

Jörn also said China has repeatedly asked about a treaty, sometimes with a focus
on existential risk rather than vague AI risk.

Source: `BROAD` item 3 and `CHN`.

### 6. Treaty Mechanisms

Jörn said verification, monitoring, chip controls, inspections, intelligence
sharing, and credible enforcement are basically all necessary. If one is
missing, the game should show a realistic delayed failure mode. It should not
show instant collapse, and it should not ignore the missing mechanism.

Concrete enforcement mechanisms can include:

1. Public discussion of public intelligence.
2. Positive and negative financial incentives.
3. Economic sanctions.
4. Hacking.
5. Traditional military intervention on an escalation ladder.

Jörn noted that nuclear first strikes are very high on the escalation ladder and
usually not better than alternatives.

Source: `CHN`.

### 7. China-Blame Politics

Jörn described a strong Washington-connected lobby that tries to blame China for
racing to AI. He said China luckily seems not to have a mirrored lobby.

He also gave an example of early precursor detection: intelligence about
anti-treaty sentiment among military officials can be passed to decision-makers
before it becomes unilateral superintelligence development.

Source: `CHN`.

### 8. Compute Tracking

Jörn's broad answer says tracking chips is only the start. Tracking tells you
who can build superintelligence. It does not restrict what GPUs are used for.

Useful compute control may involve:

1. Restricting GPU use.
2. Consolidation.
3. Surveillance.
4. Changed chip design.
5. Chip supply-chain control or regulation.
6. Reducing smuggling.

The recovered `CMP` prompt asked for more detail on tracking, consolidation,
chip-use verification, supply-chain control, smuggling, and threshold updates.
No Jörn answer to that exact prompt was recovered.

Source: `BROAD` item 5 and unanswered `CMP`.

### 9. Capability Research And Model Access

"Modern frontier models aid capability research" should not be left vague.
Jörn split it into three kinds of aid:

1. Labor aid: idea generation, coding ML experiments, and routine experimental
   judgment such as picking hyperparameters.
2. Test-subject aid: large models can be used to test interpretability
   techniques, training techniques, and bottleneck diagnoses.
3. Non-human-purchasable labor: synthetic data, self-distillation, or use of
   inference and internals at scales humans cannot realistically provide.

ChatGPT is not dangerous in most applications, but carve-outs may be hard to
write without creating extinction risk. Jörn is unsure where the practical
boundary should be and how much effort should go into separating dangerous from
harmless research.

Source: `BROAD` item 2 and `CAP-1`.

### 10. Open Source And Open Weights

Jörn's answer does not treat "open source" as the core issue. The core issue is
whether AI systems help research into building superintelligence.

He said there are no tools to inspect open-source AI for whether it will aid
such research. That depends on how researchers use it, and predicting whether
research ideas will work is hard.

"Once released, no unrelease" is true but not specific to open source. The
superintelligence does not care whether its weights are downloadable by
citizens or running in a company-owned data center.

Source: `BROAD` item 6.

### 11. Research Controls

The treaty does not propose restricting private thought. It restricts speech,
sharing results, and use of resources such as compute.

Jörn rejected framing "the hard part" as the key point. The relevant claim is
more direct: the treaty restricts resources besides private thoughts first.
Restricting private thought looks worse than useful because it would require
totalitarian methods and thought-reading, while the upside over a 20-year
horizon is not worth that.

Jörn compared resource restriction to uranium: owning private property does not
mean being allowed to build or detonate atomic weapons.

Source: `CAP-2`.

### 12. Small-Group Research Uncertainty

Jörn thinks the game can encode uncertainty about small-group research with
hidden latents randomized at game start.

The uncertainty is not "different game runs" in the real world. In the real
world, there is one outcome and nobody has made it legibly clear whether
small-group research is:

1. Negligible.
2. Notable but not independently sufficient.
3. Sufficient to kill everyone unless heavily surveilled or restricted.

Waiting for a second breakthrough before increasing surveillance may be too
late. Restricting before the first event means the agency may never learn
whether the restriction was necessary, while still paying political and freedom
costs.

Source: `CAP-1` and `CAP-2`.

### 13. Safety-Labeled Research

Safety-labeled research should not automatically get a free pass.

Jörn said he often has to explain to experts that what they think is safety
research is not actually useful. The label is a weak signal in the AI alignment
landscape, partly because many good people gave up and partly because companies
learned they need to keep up appearances.

Source: `CAP-2`.

### 14. Freedom, Backlash, And Evasion

Jörn's frame is not generic "freedom vs safety." All treaties that are not about
dissolving restrictions are restrictions on freedom in the libertarian sense.
The proposed trade is unusually good: giving up compute for one economically
valuable research line in exchange for massively reducing the risk that
everyone is killed.

Other political fights should mostly stay separate from the treaty. If unrelated
issues are bundled into the treaty, later political pressure over those issues
can be misdirected at the treaty and cause failure.

Jörn distinguished backlash from evasive remnants:

1. Backlash grows as restrictions push harder.
2. Evasive actions change but shrink under stronger enforcement.

He did not yet have a preferred word or list for this distinction.

Source: `CAP-2`.

### 15. Near-Term Harms And X-Risk

Jörn does not think attention is a simple bottleneck between near-term harms and
existential risk. He mostly expects synergy from talking about strong regulation
at all.

Plans that address non-existential risks but not existential risks are severely
bounded in impact, because people only keep jobs or other benefits until they
die. Jörn thinks many people making "x-risk is a distraction" arguments do not
believe the existential risk is real.

Source: `BROAD` item 7.

### 16. Labs And Safety Teams

Jörn rejects the claim that labs "know the tech best" in the relevant sense.
They know how to build more capable models and control them to a limited
degree. Controlling something smarter than you, with death as the failure mode
and no second try, is a different problem.

Jörn says lab plans have repeatedly been wrong, ignore the threat model, say
problems will be solved later, and have made basically zero progress in the
last 20 years.

Source: `BROAD` item 8.

### 17. Treaties Are Not Automatically Fake

Jörn pointed to past nuclear and bioweapon treaties as counterexamples to the
claim that treaties never work. He also noted that military leaders have an
interest in not dying personally.

AI CEOs are different: they were selected for wanting AI, believing AI is
controllable, or believing racing to ASI is the best available path.

Jörn wants better odds than "if we are lucky," but treats luck as part of the
situation. Enforcement through mutual monitoring is possible in principle.

Source: `BROAD` item 9.

### 18. Duration

Jörn guesses the treaty needs at least 20 years. If humanity is lucky, less. If
unlucky, more.

The required actions are mostly the same whether the pause lasts 5, 20, or 50
years, so Jörn favors conservative timelines until the ban on superintelligence
can end safely.

Jörn is not enthusiastic about six-month pauses or about doing nothing useful
for 20 years and then ending the ban in the same bad position.

Source: `BROAD` items 11 and 15.

### 19. Progress Is Not Safely Incremental

Jörn says the METR graph is not incremental; even if taken at face value, it
accelerates rapidly. He also warned against taking such a graph at face value
for unpredictable technologies.

Incident reports show companies often do not anticipate problems in advance or
detect them shortly after release. Prompt hacking remains unsolved, and training
capabilities selectively remains unsolved because generalization is useful
across domains.

Source: `BROAD` item 12.

### 20. Civil Liberties And Democracy

Jörn treats long-term power balance and preservation of democracy as real
issues. He does not think they can easily be entangled with the treaty now.
China would not sign a treaty that infringes on its political model, and nobody
will believe a bluff that one would rather cause extinction than accept a
treaty that leaves China's political model outside the treaty.

Research bans have existed before and have not necessarily escalated. Compute
monitoring for AI-ready chips is different from monitoring all private compute
use.

Source: `BROAD` item 14.

### 21. Public Discourse

The game should start from existing public discourse, not from an empty space.
Players may already think AI is risky or should be regulated. The harder target
is understanding the difference between generic AI regulation, local data-center
backlash, voluntary lab safety, and an enforceable global pause treaty.

Jörn wants the game to avoid assuming players know the terms, concepts, or even
the genre. Important audiences may include public-discussion participants,
viral superspreaders, journalists, policymakers, and AI-literate readers, but
the target audience was not settled in the recovered session.

Source: setup answers and public-discourse subagent report in `10:30`.

## Unanswered Or Incomplete

1. Compute control and verification needs a direct Jörn answer. The recovered
   `CMP` prompt was not answered in the recovered session.
2. The practical boundary for AI/model carve-outs is unresolved.
3. The best term/list for backlash versus evasive remnants is unresolved.
4. The target audience is unresolved.
5. The relation between this extracted model and specific cards/mechanics has
   not been approved.
6. This file still needs Jörn review for extraction errors.

## Review Status

This file is an extraction draft. Future agents may use it to orient design
work, but should not treat it as approved player-facing text.

When adding new material:

1. Add the question that was asked.
2. Add the extracted answer in plain language.
3. Preserve uncertainty.
4. Mark unanswered parts.
5. Do not cite recovered worktree artifacts as evidence for Jörn's views.
