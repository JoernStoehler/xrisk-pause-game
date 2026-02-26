# Card Writing Guide

Agent-facing reference for writing card content. Read this before creating or modifying cards.

Jörn reviews card output on the QA page (`#qa`), not this file. Edit this file if cards keep coming out wrong in the same systematic way.

---

## The Game's Core Thesis

You are the Director-General of the ISIA (International Superintelligence & Intelligence Agency), enforcing an international treaty banning ASI development. The game teaches: **enforcement of a global AI pause is structurally hard**. The player learns this by dying repeatedly from different failure modes.

The core message: "With a pause we can survive superintelligence... if nothing goes wrong and a lot goes right."

The structural hardness comes from four tensions that can't all be resolved simultaneously:

1. **Monitoring vs. sovereignty** — Preventing ASI requires intrusive verification (inspectors in datacenters, chip tracking, researcher surveillance). This looks authoritarian and drives nations to leave the treaty.
2. **Verification vs. trust** — Relying on good faith means nations cheat. Heavy verification signals distrust and erodes the coalition.
3. **Research suppression vs. innovation** — Banning dangerous AI research also blocks beneficial uses. Nations view this as economic sabotage and competitive disadvantage.
4. **Enforcement vs. backlash** — Sanctioning violators requires political power. Accumulating that power makes ISIA itself the threat.

Every card should sit inside one or more of these tensions.

---

## The Treaty (what ISIA enforces)

Key mechanisms from the treaty (see `literature/iabied-treaty.md` for full text):

- **Compute caps**: Training runs above FLOP thresholds are prohibited. Small training (~1e22 FLOP on 16 H100s) is permitted.
- **Centralized chip infrastructure**: All AI chip clusters above threshold size must be in monitored facilities ("declared CCCs"). Governments use eminent domain to centralize private datacenters.
- **On-site verification**: ISIA inspectors, tamper-proof cameras, and chip-use monitoring at every declared CCC. Must distinguish prohibited training from permitted inference.
- **Supply chain tracking**: ISIA monitors chip fabrication, assembly, testing, and installation. Tracks every AI chip from manufacture to declared facility.
- **Non-party restrictions**: Nations that don't sign are denied AI chip sales, cloud access, and frontier model APIs.
- **Restricted research**: Bans precursor ASI research — new training methods, efficient chip designs, distributed training architectures.
- **Research verification**: Domestic enforcement agencies + ISIA auditors embedded in high-risk organizations. Researcher interviews, employment monitoring.

The Director-General can propose emergency threshold changes (implemented immediately, valid 30 days, then needs Executive Council majority).

---

## Resources — What They Represent

| Resource | At 0 (death) | At 100 (death) | Real-world meaning |
|---|---|---|---|
| **Trust** | Public revolt, agency defunded | Overpromised; visible failure shatters credibility | Public and institutional confidence in ISIA |
| **Funding** | Can't operate, agency shuttered | Waste scandal, agency dismantled | Operational budget from member states |
| **Intel** | Blind to threats, ASI slips through | Surveillance state, nations flee treaty | Intelligence and verification capability |
| **Leverage** | No political power, ignored | Authoritarian backlash, coalition revolts | Political authority and enforcement power |

All start at 50. The tensions above map directly to resource conflicts:
- Monitoring vs. sovereignty → Intel ↑ but Trust ↓ or Leverage ↓
- Verification vs. trust → Intel ↑ but Trust ↓
- Research suppression → Leverage ↑ but Trust ↓ and Funding ↓
- Enforcement → Leverage ↑ but Trust ↓

---

## Card Format

```typescript
{
  id: "kebab-case-id",          // unique, descriptive
  speaker: "Role Title",        // must match a portrait in SpeakerPortrait.tsx
  text: "...",                  // 1-2 sentences, present tense, concrete scenario
  left: {
    label: "Action phrase",     // 2-5 words, imperative
    apply: (s) => ({ ...s, resources: clampResources(s.resources, { trust: 5, intel: -8 }) }),
    previews: [
      { resource: "trust", direction: "up", size: "small" },
      { resource: "intel", direction: "down", size: "small" },
    ],
  },
  right: { /* same structure */ },
  weight: (s) => ...,           // 0 = excluded, >0 = draw weight
  color: "#ef4444",             // optional, crisis accent color
}
```

### Text Guidelines

- **50-100 words.** The card is small — text must fit.
- **Present tense, concrete scenario.** "A researcher at a major lab claims they've been running prohibited evaluations." Not: "There is a risk that researchers might conduct prohibited evaluations."
- **Speaker is talking to you.** The tone is a briefing, not a news report. The speaker has a role and a stake.
- **No exposition.** Don't explain why something matters — the resource previews do that. The text presents the situation; the player learns the lesson by seeing what happens.
- **Both choices must feel defensible.** Never "obviously good vs obviously bad." The player should feel torn.

### Delta Guidelines

- **Touch 2-3 resources** per choice. Single-resource cards feel flat.
- **Deltas range ±3 to ±15.** Small (3-6) for routine, medium (6-10) for incidents, large (10-15) for crises.
- **Previews must match deltas.** `size: "small"` for ±3-8, `size: "large"` for ±9-15.
- **No safe options.** Every choice should cost something.

### Weight Guidelines

- **Always-on routine cards:** weight 1-2 (never above 2)
- **State-gated incidents:** weight 1-2, return 0 when condition not met
- **History-triggered chains:** weight 3 (high priority when triggered, 0 otherwise)
- **Crisis cards:** weight 5, gated on resource extreme (< 20 or > 80)
- **Late-game escalation:** weight 1.5-2.5, gated on turn count (>= 8, 10, or 15)

---

## Card Categories

### Routine (always available, weight 1-2)
Bread-and-butter cards. Budget decisions, public relations, hiring, diplomatic meetings. Establish baseline resource flows. Player sees these every game.

### Incident (state-gated, weight 1-2)
Enforcement events — rogue labs detected, chip smuggling, whistleblowers. Often gated on Intel level. These are the "job" of ISIA.

### Political (turn-gated, weight 1-1.5)
Treaty negotiations, senate hearings, coalition management. Appear after early turns. Leverage-heavy.

### History-triggered (weight 3 when triggered)
Consequences of earlier choices. "You protected the whistleblower → now the lab is suing you." Most narratively interesting. Every major card should eventually have a consequence chain.

### Crisis (weight 5, resource-gated)
Thermostat cards. Appear when a resource is extreme (< 20 or > 80). Offer a way back from the edge, but at steep cost to another resource. There must be at least 1 crisis card per resource per direction (8 minimum).

### Late-game (turn-gated, weight 1.5-2.5)
Escalation. Capability jumps, distributed training networks, novel attack vectors. Make later turns harder. Appear at turn >= 8, 10, or 15.

### Filler (weight 1-1.5)
Low-stakes flavor cards. Quiet days, conference invites. Give the player a breather. Keep deltas small (±2-5).

---

## Patterns

### Degraded Variants
Same event, worse options when a resource is low. Mutually exclusive weight functions.

```typescript
// Normal variant (intel >= 40): good options
weight: (s) => (s.resources.intel >= 40 ? 1.5 : 0)

// Degraded variant (intel < 40): worse options, same event concept
weight: (s) => (s.resources.intel < 40 ? 1.5 : 0)
```

Teaches the player: "when your Intel is low, everything is harder." Pure experiential learning.

### History Chains
Card A → consequence Card B (triggered by Card A's choice).

```typescript
// Consequence card: appears after specific choice
weight: (s) => recentChoice(s, "parent-card-id", "left") ? 3 : 0
```

Use `recentChoice(state, cardId, choice, withinTurns)` helper (defined in cards.ts).

Best chains have different consequences for left vs. right choice on the parent card. See whistleblower → whistleblower-fallout / coverup-leak as the reference example.

---

## Scenario Sources

When writing cards, draw from these real-world dynamics. Key literature references:

| Topic | Literature file | Card scenario types |
|---|---|---|
| Treaty enforcement mechanisms | `literature/iabied-treaty.md` | Inspections, chip tracking, research bans, defection |
| Real AI incidents (2024-2025) | `literature/ai-incident-database-2024-2025.md` | Deepfakes, model theft, safety failures, fraud |
| Political landscape | `literature/political-statements-ai-risk.md` | Administration changes, treaty skepticism, coalition pressure |
| Frontier capabilities | `literature/aisi-frontier-trends-2025.md` | Capability jumps, threshold breaches, novel architectures |
| US policy shifts | `literature/us-ai-executive-orders.md` | Regulatory whiplash, enforcement gaps |

### High-value scenario themes (not yet in card pool)

- **Compute threshold breach** — lab legally just under the limit, pushing boundaries
- **Non-party defection** — nation announces withdrawal or never-signed nation races ahead
- **Distributed training** — many small labs collectively training something massive
- **Researcher brain drain** — top talent leaving treaty nations for non-party jurisdictions
- **Chip fabrication exploit** — backdoored chips, stolen manufacturing designs
- **Economic recession** — pressure to lift compute restrictions for growth
- **Election interference** — AI-powered, treaty blamed for not preventing it
- **Dual-use research dilemma** — beneficial cancer research uses prohibited training scale
- **ISIA internal scandal** — monitors abusing surveillance access
- **Technical surprise** — new training method works at 1/100th expected compute

---

## Provenance Convention

Above each card (or group of related cards), add a comment block:

```typescript
// Source: literature/iabied-treaty.md (Article V — chip centralization)
// Rationale: teaches that centralization creates single points of failure
// Category: incident
```

Fields:
- **Source**: which literature doc or real-world event inspired it. "original" if invented.
- **Rationale**: what game lesson this card teaches (1 line).
- **Category**: routine | incident | political | history-triggered | crisis | late-game | filler

---

## Anti-Patterns

- **Abstract exposition**: "AI poses risks to humanity" → too vague, no scenario
- **Safe option available**: "Investigate" vs "Do nothing wrong" → one choice is obviously better
- **Single-resource card**: Only touches Trust → no tradeoff, no tension
- **Lecture text**: Speaker explains why AI is dangerous → game should teach through play, not text
- **Unrealistic scenario**: Something that wouldn't happen under this treaty framework
- **Redundant card**: Mechanically identical to an existing card with different flavor text

---

## Speakers (21 portraits available)

Use existing speakers when possible. Each has a portrait and an established role:

| Speaker | Role / When to use |
|---|---|
| Chief Financial Officer | Budget decisions, financial crises |
| Communications Director | Public messaging, UN speeches, trust crises |
| Head of Human Resources | Hiring, staffing decisions |
| Political Advisor | Lobbying, senate hearings, political maneuvering |
| Press Secretary | Media relations, leaks, public perception |
| Intelligence Analyst | Rogue labs, threats (high-intel variant) |
| Junior Analyst | Threats (low-intel degraded variant) |
| Customs Liaison | Chip smuggling, supply chain enforcement |
| Anonymous Source | Whistleblowers, insider tips |
| Diplomatic Attaché | Treaty negotiations, nation relations |
| Legal Counsel | Lawsuits, legal precedent, compliance |
| Civil Liberties Advocate | Surveillance backlash, privacy concerns |
| UN Secretary-General | Power accusations, institutional crises |
| Ethics Watchdog | Regulatory capture, corruption allegations |
| Finance Director | Membership dues, funding sources |
| Enforcement Chief | Seizures, raids, enforcement operations |
| Investigative Journalist | Exposés, waste scandals, leaks |
| NATO Liaison | Military AI exemptions, defense cooperation |
| Chief Scientist | Capability assessments, threshold decisions |
| Deputy Director | Internal operations, quiet days |
| Executive Assistant | Conferences, scheduling, networking |

Adding new speakers requires a new portrait (use `scripts/generate-portrait.mjs`).
