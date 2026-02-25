import { useGame } from "./engine/useGame";
import { TitleScreen } from "./components/TitleScreen";
import { GameScreen } from "./components/GameScreen";
import { DeathScreen } from "./components/DeathScreen";

export default function App() {
  const { state, startGame, choose, restart } = useGame();

  let screen;
  if (state.phase === "title") {
    screen = <TitleScreen onStart={startGame} />;
  } else if (state.phase === "dead" && state.death) {
    screen = (
      <DeathScreen
        death={state.death}
        turnsSurvived={state.turn}
        onRestart={restart}
      />
    );
  } else {
    screen = <GameScreen state={state} onChoice={choose} />;
  }

  return (
    <div className="mx-auto max-w-md min-h-dvh">
      {screen}
    </div>
  );
}
