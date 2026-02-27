import { useEffect, useState } from "react";
import { useGame } from "./engine/useGame";
import { TitleScreen } from "./components/TitleScreen";
import { GameScreen } from "./components/GameScreen";
import { DeathScreen } from "./components/DeathScreen";
import { TutorialScreen } from "./components/TutorialScreen";
import { QAReference } from "./components/QAReference";

export default function App() {
  const { state, startGame, choose, restart, tutorialIndex, advanceTutorial, skipTutorial } = useGame();
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
  } else if (state.phase === "tutorial") {
    screen = (
      <TutorialScreen
        tutorialIndex={tutorialIndex}
        onAdvance={advanceTutorial}
        onSkip={skipTutorial}
      />
    );
  } else if (state.phase === "dead" && state.death) {
    screen = (
      <DeathScreen
        death={state.death}
        turnsSurvived={state.turn}
        history={state.history}
        onRestart={restart}
      />
    );
  } else {
    screen = <GameScreen state={state} onChoice={choose} />;
  }

  // Phone-frame layout: cap height at 844px (iPhone 14 Pro) so the year bar
  // isn't stranded at the bottom of tall desktop viewports.
  return (
    <div className="mx-auto max-w-md h-dvh flex flex-col justify-center">
      <div className="w-full overflow-y-auto overflow-x-hidden" style={{ maxHeight: "844px", height: "100%" }}>
        {screen}
      </div>
    </div>
  );
}
