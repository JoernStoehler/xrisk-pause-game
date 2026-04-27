---
name: research-topic
description: "Research a topic from expert literature and compress it into game-ready pause-game design material. Use when the domain model, card concepts, or card text need new source-grounded mechanisms, scenarios, or card ideas."
---

# Research Topic Pipeline

Four-step process for turning a knowledge gap into card-ready design material.
Each step produces a distinct artifact. Do not skip steps or combine artifacts.

## When to Use

Use this when game content needs real-world expertise that is not already
captured well enough in `literature/`, `design/domain-model.md`, or
`design/card-concepts.md`.

## Step 1: Guided Literature Search

**Goal:** Find and download expert-written source documents relevant to the
topic.
**Output:** Files in `literature/`.

Rules:

- Search for specific known documents, not general summaries.
- Download actual source text and preserve title, authors, date, and URL.
- Prioritize freely available full-text documents.
- Filter for relevance during search; avoid downloading a broad pile and
  sorting it later.
- Agent-downloaded text is acceptable in `literature/`; agent-written
  summaries are not.
- Verify coverage from multiple angles and flag gaps.

## Step 2: Expert Model Extraction

**Goal:** Compress the source documents into transferable mechanisms and
patterns.
**Output:** `design/<topic>-synthesis.md`

Rules:

- Every claim cites a specific source file and ideally a passage or section.
- Extract mechanisms, not just examples.
- Flag disagreement or weak evidence honestly.
- Exclude mechanisms unsupported by the sources.
- Keep it under 3000 words.
- Number items so Jörn can reference them unambiguously.

## Step 3: ISIA Scenario Specialization

**Goal:** Translate generic mechanisms into concrete pause-enforcement
scenarios.
**Output:** new or updated scenario material in `design/`

Rules:

- For each mechanism from step 2, describe how it plays out for a global AI
  pause agency over multi-year enforcement.
- Include the player-facing tension and tradeoffs.
- Identify which game state it affects: resource bars, hidden state, or card
  pool dynamics.
- Note timescale in game terms.
- Reference the synthesis document for sourcing instead of repeating citations
  inline.
- Write for an agent who knows the mechanics but not the external field.

## Step 4: Card-Writing Reference

**Goal:** Produce material a card-writing agent can directly use.
**Output:** new or updated idea lines in `design/card-concepts.md` or another
agreed design artifact

Rules:

- Each idea line should be a concrete scenario with a player choice implied.
- Mark new ideas clearly so Jörn can review them before implementation.
- Note which step-3 mechanism each idea derives from.
- Do not write TypeScript cards yet unless Jörn explicitly asks for that.

## Anti-Patterns

- Writing the conclusion first, then finding literature to support it.
- Agent summaries masquerading as literature.
- Skipping the scenario layer between source extraction and card concepts.
- Giant unread literature dumps.
- Combining all four steps into one mixed artifact.
