import { spawnSync } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";

const tmpDirs: string[] = [];

function makeStateFile(): string {
  const dir = mkdtempSync(join(tmpdir(), "pause-cli-test-"));
  tmpDirs.push(dir);
  return join(dir, "state.json");
}

function runCli(stateFile: string, ...args: string[]) {
  return spawnSync("tsx", ["src/cli.ts", ...args], {
    cwd: process.cwd(),
    env: { ...process.env, PAUSE_CLI_STATE_FILE: stateFile },
    encoding: "utf8",
  });
}

afterEach(() => {
  for (const dir of tmpDirs.splice(0)) {
    rmSync(dir, { recursive: true, force: true });
  }
});

describe("cli", () => {
  it("can reset, reload saved state, and choose left", () => {
    const stateFile = makeStateFile();

    const reset = runCli(stateFile, "reset");
    expect(reset.status).toBe(0);
    expect(reset.stdout).toContain("Turn 0");
    expect(reset.stdout).toContain("Pool:");

    const left = runCli(stateFile, "left");
    expect(left.status).toBe(0);
    expect(left.stderr).toBe("");
    expect(left.stdout).toContain("Turn 1");
    expect(left.stdout).toContain("Pool:");
  });

  it("accepts down commands without corrupting saved state", () => {
    const stateFile = makeStateFile();

    const reset = runCli(stateFile, "reset");
    expect(reset.status).toBe(0);

    const down = runCli(stateFile, "down");
    expect(down.status).toBe(0);
    expect(down.stderr).toBe("");
    expect(down.stdout).toContain("Turn");
    expect(down.stdout).toContain("Pool:");
  });

  it("reports missing saved state for choice commands", () => {
    const stateFile = makeStateFile();

    const left = runCli(stateFile, "left");
    expect(left.status).toBe(1);
    expect(left.stdout).toContain("No active game");
  });

  it("runs auto mode without relying on existing saved state", () => {
    const stateFile = makeStateFile();

    const auto = runCli(stateFile, "auto", "2");
    expect(auto.status).toBe(0);
    expect(auto.stdout).toContain("Auto-playing 2 turns");
  });
});
