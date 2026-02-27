import { useEffect, useState } from "react";
import { useGame } from "./engine/useGame";
import { TitleScreen } from "./components/TitleScreen";
import { GameScreen } from "./components/GameScreen";
import { DeathScreen } from "./components/DeathScreen";
import { TutorialScreen } from "./components/TutorialScreen";
import { QAReference } from "./components/QAReference";

/** Read ?variant= from URL for layout comparison. */
function getVariant(): string | null {
  return new URLSearchParams(window.location.search).get("variant");
}

export default function App() {
  const { state, startGame, choose, restart, tutorialIndex, advanceTutorial, skipTutorial } = useGame();
  const [hash, setHash] = useState(window.location.hash);
  const variant = getVariant();

  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  if (hash === "#qa") {
    return <QAReference />;
  }

  // Phone-frame variants cap total height so the year bar isn't far from
  // the card on tall desktop screens. Screens must use h-full (not min-h-dvh)
  // inside the capped wrapper — see GameScreen's `constrained` prop.
  const constrained = variant === "1" || variant === "2";

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
    screen = <GameScreen state={state} onChoice={choose} constrained={constrained} />;
  }

  if (constrained) {
    // variant=1: 844px (iPhone 14 Pro height)
    // variant=2: 700px (more compact)
    const maxH = variant === "2" ? "700px" : "844px";
    return (
      <div className="mx-auto max-w-md h-dvh flex flex-col justify-center">
        <div className="w-full overflow-hidden" style={{ maxHeight: maxH, height: "100%" }}>
          {screen}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md min-h-dvh">
      {screen}
    </div>
  );
}
