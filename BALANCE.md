# Balance Tuning — Process & Findings

## How to balance quickly

1. **Simulate before tuning.** Run 20-30 random-play games, collect death-cause distribution and turn-count range. The data tells you exactly what's broken — don't guess from reading card deltas.
   ```bash
   for i in $(seq 1 20); do npm run cli reset 2>&1 | tail -0; npm run cli auto 50 2>&1 | grep -E "depleted|overloaded|Survived"; done
   ```
   If >40% of deaths are the same cause, that resource axis is structurally broken.

2. **Count flow rates, not individual cards.** Balance problems are rarely "this card's delta is too high." They're usually "the net flow for resource X across ALL cards is -3/turn." Count total sources and sinks per resource across the whole pool. If a resource has 12 drain cards and 3 source cards, per-card tuning won't fix it — add source cards.

3. **Crisis cards are the thermostat.** High-weight resource-gated cards self-correct extreme bars. Without a crisis card for a given extreme, that death type is either too common (no rescue) or unreachable (drift never gets there). Minimum: 1 crisis card per resource per direction = 8 total.

4. **Weight dominance kills variety.** No always-on card should exceed 1.5× average pool weight. High weights (3-5) should be reserved for conditional cards (crisis, history-triggered).

5. **Re-simulate after changes.** Check that: (a) death types spread across 5+ of 8 causes, (b) turn counts in target range (15-40), (c) no single card appears more than once every 4 turns.

## Card pool design principles

- **Every resource needs sources AND sinks in the always-on pool.** At least 2 always-on cards should offer each resource as a positive delta.
- **Degraded variants teach the player.** Same event, worse options when a resource is low. Player learns "low X makes everything harder" through experience.
- **History chains create narrative.** Card X → delayed consequence card Y. Most interesting mechanic. Every major card should eventually have a consequence chain.
- **Late-game escalation prevents stale mid-games.** Cards gated on turn >=10/15 make later turns harder.
- **Anti-repeat window should scale with pool size.** Window of 3 for 15-20 cards. For 25+, consider 4-5.

## Balance state (after Feb 2025 tuning)

**Before tuning:** 57% funding-depleted, 30% intel-overloaded. Only 2/8 death types ever occurred.

**After tuning (29 cards, 24 death messages):** 6/8 death types observed in 12 games: funding-depleted (3), intel-overloaded (3), funding-overloaded (1), leverage-overloaded (2), trust-depleted (2), trust-overloaded (1). Turn range: 14-43.

**Still rare/unseen:** intel-depleted, leverage-depleted. Intel-depleted is structurally hard (intel trends up from investigation cards). Leverage-depleted is rescued by the irrelevance-crisis card.

## What hasn't been tested

- Real human play (only random 50/50). Human players likely keep funding higher (they learn funding=life), shifting deaths toward other causes.
- Mobile feel. Swipe thresholds (30px tilt, 100px commit) not tuned on real devices.
- Whether the "lesson" (enforcement is structurally hard) actually lands with players.

## Content pass workflow (for when AI expert is available)

1. Expert provides 5-10 real governance dilemmas
2. Each becomes 1-3 card templates with realistic speakers/text/tradeoffs
3. Run `cli auto 50` × 20 to check balance
4. Expert reviews death messages for accuracy and teaching value
5. Iterate on delta tuning until death distribution is spread
