import "./style.css";
import { cards, policyLabel, type AdvisorCard, type Choice, type GameAction } from "./content.ts";
import { createGame, reduceGame, type GameState } from "./game.ts";
import { buildDGDossier } from "./outcome.ts";

const appElement = document.querySelector<HTMLElement>("#app");
if (!appElement) throw new Error("Missing #app");
const app: HTMLElement = appElement;
let state: GameState = newGame();
let dragStartX: number | null = null;
let dragDelta = 0;

function newSeed(): string {
  return globalThis.crypto?.randomUUID?.() ?? `run-${Date.now()}-${Math.random()}`;
}

function newGame(seed = newSeed()): GameState {
  return createGame(seed);
}

function applyAction(action: GameAction): void {
  state = reduceGame(state, action);
  render();
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", "\"": "&quot;",
  })[character] ?? character);
}

function shell(content: string): string {
  return `<section class="game-shell">
    <header class="topbar"><div class="seal"><span>IS</span></div><div class="title-block"><strong>INTERNATIONAL SUPERINTELLIGENCE AGENCY</strong><small>DIRECTOR-GENERAL · OPENING YEAR</small></div><button class="icon-button" data-action="new" aria-label="Start a new world">↻</button></header>
    ${content}
    <footer><span>STRUCTURAL PROTOTYPE</span><span>DIAGNOSTIC WORLDS · NOT FORECAST-CALIBRATED</span></footer>
  </section>`;
}

function statusBar(): string {
  return `<div class="statusbar" aria-label="Current policy state">
    <div><span>CUSTODY</span><strong>${state.custody === "multiparty" ? "JOINT" : state.custody === "legal_order" ? "OPERATOR" : "UNSET"}</strong></div>
    <div><span>INFERENCE</span><strong>${policyLabel(state.inferencePolicy)}</strong></div>
    <div><span>COVERAGE</span><strong>${state.resourceCoverage === "compute_or_memory" ? "C ∨ M" : state.resourceCoverage === "compute_only" ? "COMPUTE" : "UNSET"}</strong></div>
  </div>`;
}

function portrait(kind: AdvisorCard["portrait"]): string {
  return `<div class="portrait portrait-${kind}" aria-hidden="true"><div class="head"></div><div class="body"></div><div class="mark"></div></div>`;
}

function choiceButton(choice: Choice): string {
  return `<button class="choice choice-${choice.direction}" data-choice="${choice.direction}"><span>${escapeHtml(choice.label)}</span><small>${escapeHtml(choice.hint)}</small></button>`;
}

function renderIntro(): void {
  app.innerHTML = shell(`<div class="intro"><div class="intro-grid" aria-hidden="true"></div><p class="eyebrow">1 AUGUST 2026</p><h1>The pause exists.<br/>Now it has to work.</h1><p class="intro-copy">The United States and China have founded ISIA and stopped declared frontier training. You are its first Director-General. Every order will pass through institutions, hardware, people—and a world you cannot see directly.</p><button class="primary" data-action="begin">ASSUME OFFICE <span>→</span></button><button class="text-button" data-action="method" aria-expanded="false" aria-controls="method-note">What this prototype claims</button><div class="method" id="method-note" hidden><strong>This is a causal teaching model, not a survival forecast.</strong><p>One hidden diagnostic world is fixed for a run. Replaying the same world changes policy without rerolling unrelated luck. Current branch frequencies are test fixtures.</p></div></div>`);
}

function renderCard(): void {
  const card = cards[state.cardId];
  app.innerHTML = shell(`${statusBar()}<div class="card-stage"><div class="swipe-label swipe-left">${escapeHtml(card.left.label)}</div><article class="advisor-card" data-card tabindex="-1"><div class="card-date">${card.date}</div>${portrait(card.portrait)}<div class="advisor"><span>${card.role}</span><strong>${card.name}</strong></div><blockquote>${card.statement}</blockquote><p>${card.context}</p><div class="drag-hint">SWIPE OR CHOOSE</div></article><div class="swipe-label swipe-right">${escapeHtml(card.right.label)}</div></div><div class="choices">${choiceButton(card.left)}${choiceButton(card.right)}</div>`);
  bindSwipe(card);
}

function renderOutcome(): void {
  if (!state.result) return;
  const dossier = buildDGDossier(state.result);
  app.innerHTML = shell(`${statusBar()}<section class="outcome outcome-${dossier.summary.tone}" aria-live="polite" tabindex="-1" data-outcome><p class="eyebrow">DIRECTOR-GENERAL'S OPENING DOSSIER</p><h2>${dossier.summary.headline}</h2><p class="outcome-detail">${dossier.summary.detail}</p><div class="outcome-facts"><div><span>DELIVERED REPORTS</span><strong>${dossier.events.length}</strong></div><div><span>CAPABILITY ARTIFACTS</span><strong>${dossier.artifactStatus}</strong></div><div><span>WORLD STATUS</span><strong>NOT ESTABLISHED</strong></div></div><ol class="timeline">${dossier.events.length ? dossier.events.map((event) => `<li><time>+${event.hour.toFixed(2)}h</time><p>${escapeHtml(event.explanation)}</p></li>`).join("") : "<li><p>No operational report reached your desk during this episode.</p></li>"}</ol><div class="outcome-actions"><button class="primary" data-action="replay">REPLAY THIS WORLD <span>↺</span></button><button class="secondary" data-action="new">SAMPLE A NEW WORLD</button></div><details><summary>RETROSPECTIVE DIAGNOSTIC · SEPARATE FROM THIS DOSSIER</summary><p>The sampled world retains hidden compliance, classifier error, research-route availability, internal thresholds, and counterfactual effects. Those facts are not Director-General knowledge. Replaying preserves this world; sampling a new world does not.</p></details></section>`);
}

function bindSwipe(card: AdvisorCard): void {
  const element = document.querySelector<HTMLElement>("[data-card]");
  if (!element) return;
  element.addEventListener("pointerdown", (event) => { dragStartX = event.clientX; dragDelta = 0; element.setPointerCapture(event.pointerId); element.classList.add("dragging"); });
  element.addEventListener("pointermove", (event) => {
    if (dragStartX === null) return;
    dragDelta = event.clientX - dragStartX;
    element.style.transform = `translateX(${dragDelta}px) rotate(${Math.max(-6, Math.min(6, dragDelta / 30))}deg)`;
    element.dataset.direction = dragDelta < -40 ? "left" : dragDelta > 40 ? "right" : "";
  });
  const finish = () => {
    if (dragStartX === null) return;
    element.classList.remove("dragging"); element.style.transform = ""; element.dataset.direction = "";
    const choice = dragDelta < -90 ? card.left : dragDelta > 90 ? card.right : null;
    dragStartX = null; dragDelta = 0;
    if (choice) applyAction(choice.action);
  };
  element.addEventListener("pointerup", finish); element.addEventListener("pointercancel", finish);
}

function bindGlobal(): void {
  app.querySelector<HTMLElement>("[data-action='begin']")?.addEventListener("click", () => { state.screen = "card"; render(); });
  app.querySelector<HTMLElement>("[data-action='method']")?.addEventListener("click", (event) => {
    const button = event.currentTarget as HTMLElement;
    const method = app.querySelector<HTMLElement>("#method-note");
    if (!method) return;
    method.hidden = !method.hidden;
    button.setAttribute("aria-expanded", String(!method.hidden));
  });
  app.querySelectorAll<HTMLElement>("[data-choice]").forEach((button) => button.addEventListener("click", () => { const card = cards[state.cardId]; applyAction(button.dataset.choice === "left" ? card.left.action : card.right.action); }));
  app.querySelector<HTMLElement>("[data-action='replay']")?.addEventListener("click", () => { state = newGame(state.seed); state.screen = "card"; render(); });
  app.querySelectorAll<HTMLElement>("[data-action='new']").forEach((button) => button.addEventListener("click", () => { state = newGame(); render(); }));
}

function render(): void {
  if (state.screen === "intro") renderIntro(); else if (state.screen === "card") renderCard(); else renderOutcome();
  bindGlobal();
  if (state.screen === "card") app.querySelector<HTMLElement>("[data-card]")?.focus();
  else if (state.screen === "outcome") app.querySelector<HTMLElement>("[data-outcome]")?.focus();
}

render();
