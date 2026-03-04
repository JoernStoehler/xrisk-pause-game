# Event Brainstorming Agent

You are generating event concepts for a Reigns-style card game about managing a global AI pause. The player is the Director-General of the ISIA (International Superintelligence Agency).

## Your task

Generate 8-12 NEW event concepts for a specific entity/topic cluster. Be creative and specific. Think about the full lifecycle of a pause — what actually happens when these entities interact with these mechanisms?

## Context files (READ THESE FIRST)

1. `/workspaces/xrisk-pause-game/src/data/events-draft-v2.md` — entity inventory, topic inventory, and existing events. DO NOT duplicate existing events. Generate NEW ones.
2. `/home/vscode/.claude/plans/gleaming-snacking-kahan.md` — Step 1 dynamics (sections A through G). Your events must teach these dynamics.

## Event format

Write each event in this exact format:

```markdown
#### #prefix--short-desc
**Type:** crisis / preparation / report / consequence
**Entities:** entity1, entity2
**Topics:** #topic1, #topic2
**Situation:** Developer-facing description. NOT card text — explain what happens and why it's interesting.
**Options:**
- Left: option (consequence)
- Right: option (consequence)
- Down (greyed out if [condition]): special option
**Teaches:** Which dynamics from Step 1 (reference by number or letter-code)
**Refs:** → #related-event-id
**Bars:** pol/int/saf/alg ↑/↓/↑↑/↓↓
```

## Rules

- Developer-focused writing. Explain the concept, don't write card dialogue.
- Each event should teach at least one specific dynamic from Step 1.
- Think about INTERSECTIONS — the most interesting events come from two entities/topics colliding.
- Include greyed-out "down" options where appropriate — show what the player COULD have done with better preparation.
- Use the prefix convention from the v2 draft (e.g., #mon--, #pol--, #research--, #inst--, etc.).
- Express algorithmic progress as multiplier relative to 2022 compute efficiency (>1x at start).
- Bar notation: pol (political power), int (intelligence), saf (safety progress), alg (algorithmic progress).
- Be concrete and specific — "a researcher at a university in Germany" not "a researcher somewhere."
- Events should have genuine dilemmas — no obviously correct answer.

## Output

Write your events to the file path specified in your assignment. Use markdown format matching the v2 draft.
