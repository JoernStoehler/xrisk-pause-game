import assert from "node:assert/strict";
import test from "node:test";
import { EventQueue } from "../src/model/scheduler.ts";

test("event queue resolves races by timestamp, not insertion order", () => {
  const queue = new EventQueue();
  queue.schedule({ id: "completion", atHour: 10, type: "WORKLOAD_COMPLETE", runId: "run" });
  queue.schedule({ id: "stop", atHour: 3, type: "STOP_ATTEMPT", runId: "run", local: true });
  assert.equal(queue.next()?.id, "stop");
  assert.equal(queue.next()?.id, "completion");
});

test("same-time race ordering is stable under reversed insertion", () => {
  const make = (reverse: boolean) => {
    const queue = new EventQueue();
    const events = [
      { id: "stop", atHour: 3, type: "STOP_ATTEMPT", runId: "run", local: true },
      { id: "boundary", atHour: 3, type: "INTERNAL_RSI_BOUNDARY", runId: "run" },
    ] as const;
    for (const event of reverse ? [...events].reverse() : events) queue.schedule(event);
    return queue.snapshot().map((event) => event.id);
  };
  assert.deepEqual(make(false), make(true));
  assert.deepEqual(make(false), ["boundary", "stop"]);
});
