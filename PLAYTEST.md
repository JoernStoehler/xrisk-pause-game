# Playtest Guide — V2 Engine

How to connect player feedback to specific knobs in the v2 engine. Organized by what the player might *say*, not by what the engine does. See DESIGN.md for state shape and reducer list.

---

## "The game is too hard" / "I always lose"

**Which loss condition?** This is the most important diagnostic question.

### Losing to ASI (frontier hits 100)

The frontier is advancing faster than the player can buy time. Levers:

| Knob | Reducer | Effect of lowering |
|------|---------|-------------------|
| Frontier base advance rate | `frontierAdvance` | Directly slows the clock. Most impactful. |
| Frontier modifiers from history (breakthroughs, leaked research) | `frontierAdvance` | Reduces punishment for missed events. |
| Event spawn rates for capability events | `eventGeneration` producers | Fewer capability crises = less frontier acceleration. |
| Event urgency windows (`timeoutWeek - createdWeek`) | Event templates | More weeks to respond before `onTimeout` fires. |

**Common pattern:** Player ignores events, `onTimeout` effects spike frontier, game ends. Fix: widen timeout windows or soften `onTimeout` effects.

### Losing to treaty collapse

Political actors become hostile enough that IAS is effectively dead. Levers:

| Knob | Reducer | Effect |
|------|---------|--------|
| Starting political valence/trust | Initial state | Higher = more runway before hostility |
| Political drift speed | `politicalUpdate` | Slower drift = more time to course-correct |
| Opinion → political coupling strength | `politicalUpdate` | Weaker coupling = politicians less responsive to angry public |
| US-China bilateral tension effects | `politicalUpdate` | Reduce geopolitical spillover into IAS |

**Common pattern:** One government spirals hostile — low valence attracts hostile events, which lower valence further. Fix: dampen the feedback loop (add inertia/cooldown to political drift) or make player decisions that improve valence more impactful.

### Losing on time (maxWeeks without enough safety milestones)

Player is stable but not progressing toward win condition. Levers:

| Knob | Where | Effect |
|------|-------|--------|
| Number of milestones required to win | Win condition | Fewer = easier |
| Safety milestone event frequency | Event producers | More opportunities to earn milestones |
| Milestone prerequisites | Event templates | Simpler chains = less luck-dependent |

**Common pattern:** Player manages crises well but never triggers milestone events because they require specific state conditions. Fix: broaden conditions or increase base spawn rates.

---

## "The game is too easy" / "I won without trying"

**Probable cause:** Milestones arrive too fast, or threats aren't escalating.

| Knob | Where | Effect of changing |
|------|-------|-------------------|
| Milestone event frequency | Event producers | Reduce to slow win path |
| Milestone prerequisites | Event templates | Add conditions (budget investment, opinion support) |
| Frontier base rate | `frontierAdvance` | Increase to tighten the race |
| Opinion drift toward apathy | `opinionDrift` | Increase salience decay so support erodes |
| Budget squeeze | `budgetAccrual` | Reduce income so player can't fund everything |

**Common pattern:** Player handles events routinely, milestones arrive on schedule, never feels threatened. Fix: increase frontier rate (tighter race) or make milestones require active investment (budget commitment, political capital).

---

## "The game feels unfair" / "I got screwed by RNG"

### "I made the right choice and it went badly"

Decision outcomes in v2 are deterministic (`decision.apply` is a pure function), but some decisions have probabilistic follow-ups via `followUp` spawners. If those feel random:

**Levers:**
- Make follow-up probabilities visible in decision descriptions
- Reduce variance in follow-up effects
- Add "bad luck protection" (consecutive negative follow-ups reduce probability of next one)

### "Events keep spawning that I can't handle"

Event producers read state to compute spawn probability. If the player is struggling, certain producers may fire more often (realistic — struggling agencies get more crises).

**Levers:**
- Add cooldown logic to producers (can't fire within N weeks of previous firing)
- Cap maximum active events on the map
- Reduce spawn probability coupling to negative state (flatten the death spiral)

### "I ran out of budget for everything"

Budget starvation cascade: political actor cuts funding → can't respond to events → more crises → political actor gets more hostile → less funding.

**Levers:**
- Increase budget accrual base rate
- Add minimum budget floor (emergency funding)
- Make some decisions cost 0 budget (diplomatic options, public appeals)
- Reduce political hostility → budget coupling

---

## "The game is boring" / "Nothing is happening"

### "I'm just waiting for events"

Quiet periods when producers don't fire. More likely early game when state is moderate.

**Levers:**
- Increase base spawn rates in event producers
- Guarantee minimum 1 event every N weeks
- Add "routine operations" events that are low-stakes but keep the player engaged
- Start the game at 2x speed

### "All events feel the same"

Template pool needs variety. v2's richer state enables more varied events.

**Levers:**
- Add more event templates (target: 25-30)
- Use opinion distribution for variant text (protests look different at 60% vs 90% salience)
- Political actor state drives event framing (US-funded event vs. China-hostile event)
- Region-specific flavor

### "My choices don't seem to matter"

The player can't see the impact of their decisions.

**Levers:**
- Show opinion shift after decisions (poll result animation)
- Show political actor reaction (news ticker entry)
- Make decision effects larger and more distinct
- Ensure each decision in a pair has meaningfully different consequences

---

## "I don't understand what's happening"

This is the most important feedback category for the target audience (people who don't yet appreciate x-risk).

### "What are these numbers?"

v2 shows polls instead of raw numbers. If players still don't understand:

**Levers:**
- Reduce visible information (show 2-3 polls, not all state)
- Use natural language summaries ("Public support is slipping" not "valence: 0.3")
- Tutorial difficulty should introduce concepts one at a time

### "What am I supposed to do?"

The player doesn't understand their role or goals.

**Levers:**
- Opening sequence should establish: you run IAS, frontier is advancing, your job is to buy time for safety research
- Milestone tracker should be visually prominent (this is your win condition)
- First few events should have obvious good/bad options

### "Why did I lose?"

The loss condition wasn't clearly signaled.

**Levers:**
- Game over screen should explain which condition triggered and show the trajectory
- Warning system (flashing indicators) before loss conditions become critical
- "Last 5 events" recap on game over

---

## "The game is too fast" / "I can't keep up"

**Levers:**
- Auto-pause on decision events (already in v1, keep in v2)
- Increase event urgency windows
- Reduce event frequency
- Add visual cue when events need attention (pulsing bubble)

### Mobile-specific
- Touch targets may be too small
- Modal opening speed may lag
- Consider tap-and-hold for event preview vs. tap to open

---

## "The game is too slow" / "I want it to go faster"

**Levers:**
- Add 8x speed option
- Auto-pop minor events at high speed
- Skip animations at high speed
- Consolidate low-stakes events into batch notifications

---

## Key Feedback Loops to Monitor

These are the v2 feedback loops that can spiral. Each should have damping built in.

1. **Opinion → Politics → Budget → Capability → Opinion**: Low public support → hostile government → budget cuts → can't respond → more crises → lower support. **Damping:** minimum budget floor, budget-free decision options.

2. **Media → Opinion → Media**: Media covers what gets readership → negative coverage lowers salience/valence → lower support generates more negative coverage. **Damping:** media attention span (moves on after N weeks), positive coverage when salience is high and events resolve well.

3. **Frontier → Events → Frontier**: Higher frontier → more capability events → frontier advances faster. **Damping:** cap on frontier-accelerating events per period, player decisions that slow frontier.

4. **Political trust → Event variants → Trust**: Low trust → controlling/hostile government events → player loses autonomy → trust erodes further. **Damping:** trust recovery events, diplomatic decisions.

---

## Expected Win/Loss Distribution by Difficulty

- **Tutorial:** ~90% win rate. Losses should feel like clear mistakes, not bad luck.
- **Normal:** ~40-50% win rate for engaged players. Most losses should be ASI (frontier) — "the clock ran out." Treaty collapse and time-out should be rare (~10% of losses each).
- **Realistic:** ~10-20% win rate. Multiple loss conditions should feel plausible. This communicates the thesis: "the problem might be unsolvable."

If the distribution doesn't match, trace back through the feedback loops above to find which knob is miscalibrated.
