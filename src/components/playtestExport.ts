import type {
  DeathInfo,
  GameState,
  HiddenState,
  HistoryEntry,
  Resources,
} from "../engine/types";

const DEATH_RUN_EXPORT_SCHEMA = "global-pause-playtest-death-run-v1";

export type DeathRunExportState = GameState & { phase: "dead"; death: DeathInfo };

interface DeathRunExport {
  schema: typeof DEATH_RUN_EXPORT_SCHEMA;
  generatedAt: string;
  phase: "dead";
  turnCount: number;
  resources: Resources;
  hidden: HiddenState;
  death: DeathInfo;
  history: HistoryEntry[];
  rngState: number;
  limitations: string[];
}

function copyHistory(history: readonly HistoryEntry[]): HistoryEntry[] {
  return history.map(({ turn, cardId, choice }) => ({ turn, cardId, choice }));
}

export function buildDeathRunExport(
  state: DeathRunExportState,
  generatedAt: Date = new Date(),
): DeathRunExport {
  return {
    schema: DEATH_RUN_EXPORT_SCHEMA,
    generatedAt: generatedAt.toISOString(),
    phase: state.phase,
    turnCount: state.turn,
    resources: { ...state.resources },
    hidden: { ...state.hidden },
    death: { ...state.death },
    history: copyHistory(state.history),
    rngState: state.rngState,
    limitations: [
      "initialSeed is not currently tracked; current rngState is exported instead.",
    ],
  };
}

export function generateDeathRunExport(
  state: DeathRunExportState,
  generatedAt: Date = new Date(),
): string {
  return JSON.stringify(buildDeathRunExport(state, generatedAt), null, 2);
}
