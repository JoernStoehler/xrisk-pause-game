import { useGame } from "./engine/useGame";
import { TitleScreen } from "./components/TitleScreen";
import { GameScreen } from "./components/GameScreen";
import { DeathScreen } from "./components/DeathScreen";

export default function App() {
  const { state, startGame, choose, restart } = useGame();

  if (state.phase === "title") {
    return <TitleScreen onStart={startGame} />;
  }

  if (state.phase === "dead" && state.death) {
    return (
      <DeathScreen
        death={state.death}
        turnsSurvived={state.turn}
        onRestart={restart}
      />
    );
  }

  return <GameScreen state={state} onChoice={choose} />;
}
