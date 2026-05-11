import type {
  DeathInfo,
  GameState,
  HiddenState,
  HistoryEntry,
  Resources,
} from "../engine/types";

const PLAYTEST_EXPORT_SCHEMA = "global-pause-playtest-run-v1";

interface PlaytestRunExport {
  schema: typeof PLAYTEST_EXPORT_SCHEMA;
  generatedAt: string;
  phase: GameState["phase"];
  outcome: "dead" | "victory" | "in-progress" | "not-started";
  turnCount: number;
  resources: Resources;
  hidden: HiddenState;
  death: DeathInfo | null;
  history: HistoryEntry[];
  activeCardId: string | null;
  rngState: number;
  limitations: string[];
}

function getOutcome(phase: GameState["phase"]): PlaytestRunExport["outcome"] {
  if (phase === "dead" || phase === "victory") return phase;
  if (phase === "playing") return "in-progress";
  return "not-started";
}

function copyHistory(history: readonly HistoryEntry[]): HistoryEntry[] {
  return history.map(({ turn, cardId, choice }) => ({ turn, cardId, choice }));
}

export function buildPlaytestExport(
  state: GameState,
  generatedAt: Date = new Date(),
): PlaytestRunExport {
  return {
    schema: PLAYTEST_EXPORT_SCHEMA,
    generatedAt: generatedAt.toISOString(),
    phase: state.phase,
    outcome: getOutcome(state.phase),
    turnCount: state.turn,
    resources: { ...state.resources },
    hidden: { ...state.hidden },
    death: state.death ? { ...state.death } : null,
    history: copyHistory(state.history),
    activeCardId: state.activeCard?.templateId ?? null,
    rngState: state.rngState,
    limitations: [
      "initialSeed is not currently tracked; current rngState is exported instead.",
    ],
  };
}

export function generatePlaytestExport(
  state: GameState,
  generatedAt: Date = new Date(),
): string {
  return JSON.stringify(buildPlaytestExport(state, generatedAt), null, 2);
}
