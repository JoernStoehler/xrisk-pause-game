import type { HistoryEntry } from "../engine/history";
import type { GameState } from "../engine/session";
import { cloneState, type DeathInfo, type Resources, type State } from "../engine/state";

const DEATH_RUN_EXPORT_SCHEMA = "global-pause-playtest-death-run-v2";

export type DeathRunExportState = GameState & { phase: "dead"; death: DeathInfo };

interface DeathRunExport {
  schema: typeof DEATH_RUN_EXPORT_SCHEMA;
  generatedAt: string;
  phase: "dead";
  decisionCount: number;
  resources: Resources;
  world: State;
  death: DeathInfo;
  history: HistoryEntry[];
  rngState: number;
  limitations: string[];
}

function copyHistory(history: readonly HistoryEntry[]): HistoryEntry[] {
  return history.map((entry) => ({ ...entry }));
}

export function buildDeathRunExport(
  state: DeathRunExportState,
  generatedAt: Date = new Date(),
): DeathRunExport {
  return {
    schema: DEATH_RUN_EXPORT_SCHEMA,
    generatedAt: generatedAt.toISOString(),
    phase: state.phase,
    decisionCount: state.world.decisionCount,
    resources: { ...state.world.resources },
    world: cloneState(state.world),
    death: { ...state.death },
    history: copyHistory(state.history),
    rngState: state.rngState,
    limitations: [
      "Card definitions are code and are not embedded in this export.",
    ],
  };
}

export function generateDeathRunExport(
  state: DeathRunExportState,
  generatedAt: Date = new Date(),
): string {
  return JSON.stringify(buildDeathRunExport(state, generatedAt), null, 2);
}
