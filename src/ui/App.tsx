import { useEffect, useReducer, useRef, useState, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";
import { cards, policyLabel, type AdvisorCard, type Choice, type GameAction } from "./content.ts";
import { createGame, reduceGame, type GameState } from "./game.ts";
import { buildDGDossier } from "./outcome.ts";

type AppAction =
  | { type: "BEGIN" }
  | { type: "GAME"; action: GameAction }
  | { type: "NEW_WORLD"; seed: string }
  | { type: "REPLAY_WORLD" };

export interface AppProps {
  createSeed?: () => string;
}

function defaultSeed(): string {
  return globalThis.crypto?.randomUUID?.() ?? `run-${Date.now()}-${Math.random()}`;
}

export function reduceApp(state: GameState, action: AppAction): GameState {
  switch (action.type) {
    case "BEGIN":
      return { ...state, screen: "card" };
    case "GAME":
      return reduceGame(state, action.action);
    case "NEW_WORLD":
      return createGame(action.seed);
    case "REPLAY_WORLD":
      return { ...createGame(state.seed), screen: "card" };
  }
}

function Shell({ children, onNewWorld }: { children: ReactNode; onNewWorld: () => void }) {
  return <section className="game-shell">
    <header className="topbar">
      <div className="seal"><span>IS</span></div>
      <div className="title-block">
        <strong>INTERNATIONAL SUPERINTELLIGENCE AGENCY</strong>
        <small>DIRECTOR-GENERAL · OPENING YEAR</small>
      </div>
      <button className="icon-button" onClick={onNewWorld} aria-label="Start a new world">↻</button>
    </header>
    {children}
    <footer>
      <span>STRUCTURAL PROTOTYPE</span>
      <span>DIAGNOSTIC WORLDS · NOT FORECAST-CALIBRATED</span>
    </footer>
  </section>;
}

function StatusBar({ state }: { state: GameState }) {
  return <div className="statusbar" aria-label="Current policy state">
    <div><span>CUSTODY</span><strong>{state.custody === "multiparty" ? "JOINT" : state.custody === "legal_order" ? "OPERATOR" : "UNSET"}</strong></div>
    <div><span>INFERENCE</span><strong>{policyLabel(state.inferencePolicy)}</strong></div>
    <div><span>COVERAGE</span><strong>{state.resourceCoverage === "compute_or_memory" ? "C ∨ M" : state.resourceCoverage === "compute_only" ? "COMPUTE" : "UNSET"}</strong></div>
  </div>;
}

function Portrait({ kind }: { kind: AdvisorCard["portrait"] }) {
  return <div className={`portrait portrait-${kind}`} aria-hidden="true">
    <div className="head" />
    <div className="body" />
    <div className="mark" />
  </div>;
}

function ChoiceButton({ choice, onChoose }: { choice: Choice; onChoose: (choice: Choice) => void }) {
  return <button className={`choice choice-${choice.direction}`} data-choice={choice.direction} onClick={() => onChoose(choice)}>
    <span>{choice.label}</span>
    <small>{choice.hint}</small>
  </button>;
}

function Intro({ onBegin }: { onBegin: () => void }) {
  const [methodOpen, setMethodOpen] = useState(false);
  return <div className="intro">
    <div className="intro-grid" aria-hidden="true" />
    <p className="eyebrow">1 AUGUST 2026</p>
    <h1>The pause exists.<br />Now it has to work.</h1>
    <p className="intro-copy">The United States and China have founded ISIA and stopped declared frontier training. You are its first Director-General. Every order will pass through institutions, hardware, people—and a world you cannot see directly.</p>
    <button className="primary" onClick={onBegin}>ASSUME OFFICE <span>→</span></button>
    <button className="text-button" onClick={() => setMethodOpen((open) => !open)} aria-expanded={methodOpen} aria-controls="method-note">What this prototype claims</button>
    <div className="method" id="method-note" hidden={!methodOpen}>
      <strong>This is a causal teaching model, not a survival forecast.</strong>
      <p>One hidden diagnostic world is fixed for a run. Replaying the same world changes policy without rerolling unrelated luck. Current branch frequencies are test fixtures.</p>
    </div>
  </div>;
}

function DecisionCard({ card, onChoose }: { card: AdvisorCard; onChoose: (choice: Choice) => void }) {
  const cardRef = useRef<HTMLElement>(null);
  const dragStartX = useRef<number | null>(null);
  const dragDelta = useRef(0);
  const [visibleDelta, setVisibleDelta] = useState(0);

  useEffect(() => {
    cardRef.current?.focus();
  }, []);

  function startDrag(event: ReactPointerEvent<HTMLElement>) {
    dragStartX.current = event.clientX;
    dragDelta.current = 0;
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function moveDrag(event: ReactPointerEvent<HTMLElement>) {
    if (dragStartX.current === null) return;
    dragDelta.current = event.clientX - dragStartX.current;
    setVisibleDelta(dragDelta.current);
  }

  function finishDrag() {
    if (dragStartX.current === null) return;
    const choice = dragDelta.current < -90 ? card.left : dragDelta.current > 90 ? card.right : null;
    dragStartX.current = null;
    dragDelta.current = 0;
    setVisibleDelta(0);
    if (choice) onChoose(choice);
  }

  const direction = visibleDelta < -40 ? "left" : visibleDelta > 40 ? "right" : undefined;
  const style = visibleDelta === 0 ? undefined : {
    transform: `translateX(${visibleDelta}px) rotate(${Math.max(-6, Math.min(6, visibleDelta / 30))}deg)`,
  };

  return <>
    <div className="card-stage">
      <div className="swipe-label swipe-left">{card.left.label}</div>
      <article
        className={`advisor-card${dragStartX.current === null ? "" : " dragging"}`}
        data-card=""
        data-direction={direction}
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={finishDrag}
        onPointerCancel={finishDrag}
        ref={cardRef}
        style={style}
        tabIndex={-1}
      >
        <div className="card-date">{card.date}</div>
        <Portrait kind={card.portrait} />
        <div className="advisor"><span>{card.role}</span><strong>{card.name}</strong></div>
        <blockquote>{card.statement}</blockquote>
        <p>{card.context}</p>
        <div className="drag-hint">SWIPE OR CHOOSE</div>
      </article>
      <div className="swipe-label swipe-right">{card.right.label}</div>
    </div>
    <div className="choices">
      <ChoiceButton choice={card.left} onChoose={onChoose} />
      <ChoiceButton choice={card.right} onChoose={onChoose} />
    </div>
  </>;
}

function Outcome({ state, onReplay, onNewWorld }: { state: GameState; onReplay: () => void; onNewWorld: () => void }) {
  const outcomeRef = useRef<HTMLElement>(null);
  useEffect(() => {
    outcomeRef.current?.focus();
  }, []);
  if (!state.result) return null;
  const dossier = buildDGDossier(state.result);
  return <>
    <StatusBar state={state} />
    <section className={`outcome outcome-${dossier.summary.tone}`} aria-live="polite" tabIndex={-1} data-outcome="" ref={outcomeRef}>
      <p className="eyebrow">DIRECTOR-GENERAL&apos;S OPENING DOSSIER</p>
      <h2>{dossier.summary.headline}</h2>
      <p className="outcome-detail">{dossier.summary.detail}</p>
      <div className="outcome-facts">
        <div><span>DELIVERED REPORTS</span><strong>{dossier.events.length}</strong></div>
        <div><span>CAPABILITY ARTIFACTS</span><strong>{dossier.artifactStatus}</strong></div>
        <div><span>WORLD STATUS</span><strong>NOT ESTABLISHED</strong></div>
      </div>
      <ol className="timeline">
        {dossier.events.length ? dossier.events.map((event) => <li key={`${event.hour}-${event.explanation}`}><time>+{event.hour.toFixed(2)}h</time><p>{event.explanation}</p></li>) : <li><p>No operational report reached your desk during this episode.</p></li>}
      </ol>
      <div className="outcome-actions">
        <button className="primary" onClick={onReplay}>REPLAY THIS WORLD <span>↺</span></button>
        <button className="secondary" onClick={onNewWorld}>SAMPLE A NEW WORLD</button>
      </div>
      <details>
        <summary>RETROSPECTIVE DIAGNOSTIC · SEPARATE FROM THIS DOSSIER</summary>
        <p>The sampled world retains hidden compliance, classifier error, research-route availability, internal thresholds, and counterfactual effects. Those facts are not Director-General knowledge. Replaying preserves this world; sampling a new world does not.</p>
      </details>
    </section>
  </>;
}

export function App({ createSeed = defaultSeed }: AppProps) {
  const [state, dispatch] = useReducer(reduceApp, undefined, () => createGame(createSeed()));
  const newWorld = () => dispatch({ type: "NEW_WORLD", seed: createSeed() });
  const choose = (choice: Choice) => dispatch({ type: "GAME", action: choice.action });

  return <Shell onNewWorld={newWorld}>
    {state.screen === "intro" && <Intro onBegin={() => dispatch({ type: "BEGIN" })} />}
    {state.screen === "card" && <>
      <StatusBar state={state} />
      <DecisionCard key={state.cardId} card={cards[state.cardId]} onChoose={choose} />
    </>}
    {state.screen === "outcome" && <Outcome state={state} onReplay={() => dispatch({ type: "REPLAY_WORLD" })} onNewWorld={newWorld} />}
  </Shell>;
}
