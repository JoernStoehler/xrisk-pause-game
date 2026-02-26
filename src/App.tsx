import { useEffect, useState } from "react";
import { useGame } from "./engine/useGame";
import { TitleScreen } from "./components/TitleScreen";
import { GameScreen } from "./components/GameScreen";
import { DeathScreen } from "./components/DeathScreen";
import { QAReference } from "./components/QAReference";

export default function App() {
  const { state, startGame, choose, restart } = useGame();
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  if (hash === "#qa") {
    return <QAReference />;
  }

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
