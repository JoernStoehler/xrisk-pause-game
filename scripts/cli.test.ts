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

// REGRESSION BREADCRUMB: cards may have static 2-or-3 choice structures, but CLI
// command handling only supports left/right. Add down input before using CLI auto
// runs for three-choice balance conclusions.
