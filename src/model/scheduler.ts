import type { ScheduledEvent } from "./types.ts";

const eventTypeOrder: Record<ScheduledEvent["type"], number> = {
  INTERNAL_RSI_BOUNDARY: 0,
  TAKEOVER_COMPLETE: 1,
  SENSOR_CHECK: 2,
  BACKGROUND_SENSOR_CHECK: 2,
  ANALYZE_REPORT: 3,
  STOP_ATTEMPT: 4,
  WORKLOAD_COMPLETE: 5,
  INFERENCE_REQUEST: 6,
  INFERENCE_CLASSIFY: 7,
  INFERENCE_RESOLVE: 8,
  INFERENCE_COMPLETE: 9,
  ARTIFACT_CARRIER_CHANGE: 10,
};

/** Deterministic timestamp queue. Same-time ordering is structural, not insertion order. */
export class EventQueue {
  readonly #events: ScheduledEvent[] = [];

  schedule(event: ScheduledEvent): void {
    if (this.#events.some((candidate) => candidate.id === event.id)) {
      throw new Error(`Duplicate scheduled event id: ${event.id}`);
    }
    this.#events.push(event);
    this.#events.sort((a, b) =>
      a.atHour - b.atHour
      || eventTypeOrder[a.type] - eventTypeOrder[b.type]
      || a.id.localeCompare(b.id));
  }

  cancelWhere(predicate: (event: ScheduledEvent) => boolean): void {
    for (let index = this.#events.length - 1; index >= 0; index -= 1) {
      const candidate = this.#events[index];
      if (candidate && predicate(candidate)) this.#events.splice(index, 1);
    }
  }

  next(): ScheduledEvent | undefined {
    return this.#events.shift();
  }

  snapshot(): ScheduledEvent[] {
    return structuredClone(this.#events);
  }
}
