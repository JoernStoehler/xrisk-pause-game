/**
 * Export card data for review and visualization.
 *
 * Outputs:
 *   design/cards-export.md  — flat review file grouped by explicit card group
 *   public/cards-map.html   — D3 force graph (served by Vite at /cards-map.html)
 *
 * Usage: npm run cards
 */

import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import type { GameState } from "../src/engine/types";
import { newGame } from "../src/engine/state";
import { ALL_CARDS, CARD_GROUPS } from "../src/data/cards";
import { HIDDEN } from "../src/data/cards/hidden";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(repoRoot, "design");
const cardsDir = join(repoRoot, "src/data/cards");
const hiddenByCodeName: Record<string, string> = HIDDEN;

// Build card-id → source-file mapping
const cardFiles = readdirSync(cardsDir).filter(
  (f) =>
    f.endsWith(".ts") &&
    !f.endsWith(".test.ts") &&
    !["index.ts", "groups.ts", "hidden.ts", "examples.ts"].includes(f),
);

type CardSource = { file: string; line: number };

const lineNumberAt = (content: string, index: number) =>
  content.slice(0, index).split("\n").length;

const idToSource: Record<string, CardSource> = {};
for (const file of cardFiles) {
  const content = readFileSync(join(cardsDir, file), "utf-8");
  for (const match of content.matchAll(/id:\s*"([^"]+)"/g)) {
    idToSource[match[1]] = { file, line: lineNumberAt(content, match.index!) };
  }
}

const sourceLabel = (cardId: string) => {
  const source = idToSource[cardId];
  return source ? `${source.file}:${source.line}` : "unknown";
};

const idToGroup: Record<string, string> = {};
for (const group of CARD_GROUPS) {
  for (const card of group.cards) {
    idToGroup[card.id] = group.id;
  }
}

const base = newGame(1);
const res = <T,>(v: T | ((s: GameState) => T)): T =>
  typeof v === "function" ? (v as (s: GameState) => T)(base) : v;
const fmtFx = (fx: Partial<Record<string, number>>) =>
  Object.entries(fx).filter(([, v]) => v !== 0)
    .map(([k, v]) => `${k}${v! > 0 ? "+" : ""}${v}`).join(" ") || "—";
const fmtHidden = (fx?: Record<string, number>) =>
  Object.entries(fx ?? {}).filter(([, v]) => v !== 0)
    .map(([k, v]) => `${k}${v > 0 ? "+" : ""}${v}`).join(" ") || "—";
const choiceMeta = (choice: { hiddenEffects?: Record<string, number>; enabled?: unknown }) => {
  const meta: string[] = [];
  const hidden = fmtHidden(choice.hiddenEffects);
  if (hidden !== "—") meta.push(`hidden ${hidden}`);
  if (choice.enabled !== undefined) meta.push("enabled dynamic");
  return meta.length ? ` (${meta.join("; ")})` : "";
};

// --- Extract interaction data from source files ---
type GEdge = { source: string; target: string; type: string };
type GNode = {
  id: string;
  type: string;
  file?: string;
  sourceFile?: string;
  speaker?: string;
  text?: string;
  effects?: string;
};
type Direction = "left" | "right" | "down";
type DynamicChoice = { card: string; direction: Direction; source: string };

const gNodes: GNode[] = [];
const gEdges: GEdge[] = [];
const hiddenWrites: { card: string; key: string }[] = [];
const hiddenReads: { card: string; key: string }[] = [];
const cardTags: { card: string; tag: string }[] = [];
const dynamicChoices: DynamicChoice[] = [];

for (const card of ALL_CARDS) {
  for (const direction of ["left", "right", "down"] as const) {
    const choice = card[direction];
    if (choice?.enabled !== undefined) {
      dynamicChoices.push({ card: card.id, direction, source: sourceLabel(card.id) });
    }
  }
}

// Add card nodes
for (const card of ALL_CARDS) {
  gNodes.push({
    id: card.id,
    type: "card",
    file: idToGroup[card.id] ?? "unknown",
    sourceFile: sourceLabel(card.id),
    speaker: res(card.speaker),
    text: res(card.text),
    effects: `← ${fmtFx(card.left.effects)}  → ${fmtFx(card.right.effects)}`,
  });
}

// Parse source files for interactions
for (const file of cardFiles) {
  const content = readFileSync(join(cardsDir, file), "utf-8");

  // Position-based card ID tracking
  interface PosMatch { pos: number; id: string; kind: "def" | "histRef" }
  const posMatches: PosMatch[] = [];
  for (const m of content.matchAll(/id:\s*"([^"]+)"/g)) {
    posMatches.push({ pos: m.index!, id: m[1], kind: "def" });
  }
  for (const m of content.matchAll(/h\.cardId\s*===\s*"([^"]+)"/g)) {
    posMatches.push({ pos: m.index!, id: m[1], kind: "histRef" });
  }
  posMatches.sort((a, b) => a.pos - b.pos);

  let currentCard = "";
  for (const pm of posMatches) {
    if (pm.kind === "def") {
      currentCard = pm.id;
    } else if (currentCard) {
      gEdges.push({ source: pm.id, target: currentCard, type: "chain" });
    }
  }

  const defPositions = posMatches.filter((p) => p.kind === "def");
  const findOwner = (pos: number) => {
    let owner = "";
    for (const d of defPositions) {
      if (d.pos <= pos) owner = d.id;
      else break;
    }
    return owner;
  };

  for (const m of content.matchAll(/state\.hidden\[HIDDEN\.(\w+)\]/g)) {
    const owner = findOwner(m.index!);
    const key = hiddenByCodeName[m[1]];
    if (owner && key) hiddenReads.push({ card: owner, key });
  }
  for (const m of content.matchAll(/state\.hidden\.(\w+)/g)) {
    const owner = findOwner(m.index!);
    if (owner) hiddenReads.push({ card: owner, key: m[1] });
  }

}

for (const card of ALL_CARDS) {
  for (const choice of [card.left, card.right, card.down]) {
    if (!choice?.hiddenEffects) continue;
    for (const [key, value] of Object.entries(choice.hiddenEffects)) {
      if (value !== 0) hiddenWrites.push({ card: card.id, key });
    }
  }
}

const uniqueSorted = (values: string[]) => [...new Set(values)].sort();

const hiddenReadsByCard = new Map<string, string[]>();
for (const read of hiddenReads) {
  hiddenReadsByCard.set(read.card, uniqueSorted([...(hiddenReadsByCard.get(read.card) ?? []), read.key]));
}

const hiddenWritesByCard = new Map<string, string[]>();
for (const write of hiddenWrites) {
  hiddenWritesByCard.set(write.card, uniqueSorted([...(hiddenWritesByCard.get(write.card) ?? []), write.key]));
}

const table = (headers: readonly string[], rows: readonly (readonly string[])[]) => {
  const out = [`| ${headers.join(" | ")} |`, `| ${headers.map(() => "---").join(" | ")} |`];
  for (const row of rows) out.push(`| ${row.join(" | ")} |`);
  return out;
};

const countBy = <T,>(items: readonly T[], getKey: (item: T) => string) => {
  const counts = new Map<string, number>();
  for (const item of items) {
    const key = getKey(item);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
};

const formatNumber = (value: number) => Number.isInteger(value) ? String(value) : value.toFixed(2);

// --- Generate .md review file ---
const cardsMissingIdea = ALL_CARDS.filter((card) => !card.idea);
const startingEligibleCards = ALL_CARDS.filter((card) => card.poolWeight(base) > 0);
const cardsWithDownChoice = ALL_CARDS.filter((card) => card.down);
const cardsWithHiddenReads = uniqueSorted(hiddenReads.map((read) => read.card));
const cardsWithHiddenWrites = uniqueSorted(hiddenWrites.map((write) => write.card));
const dynamicChoiceCardCount = new Set(dynamicChoices.map((choice) => choice.card)).size;

const md: string[] = [];
md.push(`# Card Review — ${ALL_CARDS.length} cards, ${CARD_GROUPS.length} groups`);
md.push("Generated by `npm run cards`.");
md.push("Generated note: source lines, hidden reads, and chain links are lightweight source-pattern review aids, not complete semantic analysis.");
md.push("");
md.push("## Corpus Summary");
md.push("");
md.push(`- Starting pool eligibility: ${startingEligibleCards.length}/${ALL_CARDS.length} cards have pool weight > 0 in a new game.`);
md.push(`- Down choices: ${cardsWithDownChoice.length} cards.`);
md.push(`- Dynamic enabled choices: ${dynamicChoices.length} choices across ${dynamicChoiceCardCount} cards.`);
md.push(`- Hidden state writes: ${hiddenWrites.length} nonzero choice effects across ${cardsWithHiddenWrites.length} cards.`);
md.push(`- Hidden state reads: ${hiddenReads.length} source references across ${cardsWithHiddenReads.length} cards.`);
md.push(`- Cards missing idea: ${cardsMissingIdea.length}.`);
md.push("");

md.push("### Counts By Group");
md.push("");
md.push(...table(
  ["Group", "Cards", "Initial Pool", "Down Choices", "Dynamic Choices", "Hidden Writes"],
  CARD_GROUPS.map((group) => {
    const groupCards = group.cards;
    const groupIds = new Set(groupCards.map((card) => card.id));
    return [
      `${group.label} (${group.id})`,
      String(groupCards.length),
      String(groupCards.filter((card) => card.poolWeight(base) > 0).length),
      String(groupCards.filter((card) => card.down).length),
      String(dynamicChoices.filter((choice) => groupIds.has(choice.card)).length),
      String(hiddenWrites.filter((write) => groupIds.has(write.card)).length),
    ];
  }),
));
md.push("");

md.push("### Counts By Tag");
md.push("");
md.push(...table(
  ["Tag", "Cards"],
  countBy(
    ALL_CARDS.flatMap((card) => card.tags ?? []),
    (tag) => tag,
  ).map(([tag, count]) => [tag, String(count)]),
));
md.push("");

md.push("### Counts By Speaker");
md.push("");
md.push(...table(
  ["Speaker", "Cards"],
  countBy(ALL_CARDS, (card) => res(card.speaker)).map(([speaker, count]) => [speaker, String(count)]),
));
md.push("");

md.push("### Cards Missing Idea");
md.push("");
if (cardsMissingIdea.length === 0) {
  md.push("None.");
} else {
  for (const card of cardsMissingIdea) md.push(`- \`${card.id}\` (${sourceLabel(card.id)})`);
}
md.push("");

md.push("### Dynamic Enabled Choices");
md.push("");
if (dynamicChoices.length === 0) {
  md.push("None.");
} else {
  md.push(...table(
    ["Card", "Choice", "Source"],
    dynamicChoices.map((choice) => [choice.card, choice.direction, `\`${choice.source}\``]),
  ));
}
md.push("");

for (const group of CARD_GROUPS) {
  md.push(`## ${group.label} (${group.id})`);
  md.push("");
  for (const card of group.cards) {
    const idea = card.idea ? ` — *${card.idea}*` : "";
    const hiddenReadsText = hiddenReadsByCard.get(card.id)?.join(", ") ?? "—";
    const hiddenWritesText = hiddenWritesByCard.get(card.id)?.join(", ") ?? "—";
    md.push(`**${card.id}**${idea}`);
    md.push(`_Source:_ \`${sourceLabel(card.id)}\` · _Tags:_ ${(card.tags ?? []).join(", ") || "—"} · _Pool at new game:_ ${formatNumber(card.poolWeight(base))}`);
    if (hiddenReadsText !== "—" || hiddenWritesText !== "—") {
      md.push(`_Hidden:_ reads ${hiddenReadsText}; writes ${hiddenWritesText}`);
    }
    md.push(`${res(card.speaker)}: ${res(card.text)}`);
    md.push(`← ${res(card.left.label)}: ${fmtFx(card.left.effects)}${choiceMeta(card.left)}`);
    md.push(`→ ${res(card.right.label)}: ${fmtFx(card.right.effects)}${choiceMeta(card.right)}`);
    if (card.down) {
      md.push(`↓ ${res(card.down.label)}: ${fmtFx(card.down.effects)}${choiceMeta(card.down)}`);
    }
    md.push("");
  }
}

const mdFile = join(outDir, "cards-export.md");
writeFileSync(mdFile, md.join("\n"));
console.log(`${ALL_CARDS.length} cards → ${mdFile}`);

// Build hidden state hub nodes and edges
const hiddenKeys = new Set([
  ...hiddenWrites.map((w) => w.key),
  ...hiddenReads.map((r) => r.key),
]);
for (const key of hiddenKeys) {
  gNodes.push({ id: `state:${key}`, type: "state" });
}
for (const w of hiddenWrites) {
  gEdges.push({ source: w.card, target: `state:${w.key}`, type: "hidden-write" });
}
for (const r of hiddenReads) {
  gEdges.push({ source: `state:${r.key}`, target: r.card, type: "hidden-read" });
}

// Build tag nodes and card↔tag edges from Card.tags field
const tagSet = new Set<string>();
for (const card of ALL_CARDS) {
  if (card.tags) {
    for (const tag of card.tags) {
      tagSet.add(tag);
      cardTags.push({ card: card.id, tag });
    }
  }
}
for (const tag of tagSet) {
  gNodes.push({ id: `tag:${tag}`, type: "tag" });
}
for (const ct of cardTags) {
  gEdges.push({ source: ct.card, target: `tag:${ct.tag}`, type: "tag" });
}

// Deduplicate exact directed triples; edge direction carries review meaning.
const edgeSet = new Set<string>();
const uniqueEdges = gEdges.filter((e) => {
  const key = `${e.source}->${e.target}:${e.type}`;
  if (edgeSet.has(key)) return false;
  edgeSet.add(key);
  return true;
});

// Card groups for coloring
const fileGroups = CARD_GROUPS.map((group) => group.id);

const graphData = JSON.stringify({ nodes: gNodes, edges: uniqueEdges, fileGroups });

const CLOSE_SCRIPT = "</scr" + "ipt>";

const chainCount = uniqueEdges.filter((e) => e.type === "chain").length;
const stateEdgeCount = uniqueEdges.filter((e) => e.type.startsWith("hidden-")).length;
const tagEdgeCount = uniqueEdges.filter((e) => e.type === "tag").length;

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Card Map — ${ALL_CARDS.length} cards</title>
<script src="https://d3js.org/d3.v7.min.js">${CLOSE_SCRIPT}
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #f8f9fa; color: #212529; overflow: hidden; width: 100vw; height: 100vh; }
svg#graph { display: block; background: #ffffff; }

.panel { position: absolute; z-index: 10; background: #fff; border: 1px solid #dee2e6;
  border-radius: 8px; padding: 12px 16px; box-shadow: 0 1px 4px rgba(0,0,0,0.08); }

#header { position: absolute; top: 16px; left: 16px; z-index: 10; pointer-events: none; }
#header h1 { color: #212529; font-size: 18px; font-weight: 700; margin-bottom: 4px; }
#header p { color: #6c757d; font-size: 12px; }

#controls { position: absolute; top: 16px; right: 16px; z-index: 10; display: flex; gap: 8px; }
#controls button { border: 1px solid #dee2e6; border-radius: 6px; padding: 6px 14px;
  font-size: 12px; font-family: inherit; cursor: pointer; background: #fff; color: #495057;
  transition: background 0.15s, border-color 0.15s; }
#controls button.active { background: #2563eb; color: #fff; border-color: #2563eb; }
#controls button:hover:not(.active) { background: #f1f5f9; }

#legend { bottom: 16px; left: 16px; font-size: 11px; }
.legend-row { display: flex; align-items: center; gap: 6px; margin-bottom: 4px; color: #495057; }

#tooltip { position: absolute; z-index: 100; background: #fff; border: 1px solid #dee2e6;
  border-radius: 8px; padding: 12px 16px; max-width: 500px; font-size: 12px; line-height: 1.5;
  pointer-events: none; display: none; box-shadow: 0 4px 16px rgba(0,0,0,0.12); color: #212529; }
#tooltip .tt-id { font-weight: 700; font-size: 14px; }
#tooltip .tt-badge { display: inline-block; padding: 1px 6px; border-radius: 3px; color: white;
  font-size: 10px; font-weight: 600; margin-left: 6px; }
#tooltip .tt-desc { color: #495057; margin: 6px 0; white-space: pre-wrap; }
#tooltip .tt-meta { color: #6c757d; font-size: 11px; margin-top: 4px; }

#copy-toast { position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
  background: #212529; color: #fff; padding: 6px 16px; border-radius: 6px; font-size: 12px;
  opacity: 0; transition: opacity 0.2s; pointer-events: none; z-index: 200; }
#copy-toast.show { opacity: 1; }

#search-box { position: absolute; top: 70px; left: 16px; z-index: 10; }
#search-input { border: 1px solid #dee2e6; border-radius: 4px; padding: 4px 8px;
  font-size: 12px; font-family: inherit; width: 200px; }
#search-input:focus { outline: none; border-color: #3b82f6; }
</style>
</head>
<body>
<div id="header">
  <h1>Card Map</h1>
  <p>${ALL_CARDS.length} cards, ${hiddenKeys.size} state vars, ${tagSet.size} tags, ${chainCount} chains, ${stateEdgeCount} state edges, ${tagEdgeCount} tag edges</p>
</div>
<div id="controls">
  <button id="btn-force" class="active">Force</button>
  <button id="btn-grid">Grid</button>
</div>
<div id="search-box"><input id="search-input" placeholder="Search cards..." /></div>
<div id="legend" class="panel">
  <div class="legend-row"><svg width="14" height="14"><circle cx="7" cy="7" r="5" fill="#f97316" stroke="#c2410c" stroke-width="1"/></svg> Card (color = group, size = degree)</div>
  <div class="legend-row"><svg width="14" height="14"><rect x="2" y="2" width="10" height="10" rx="2" fill="#0d9488" stroke="#0f766e" stroke-width="1"/></svg> State variable</div>
  <div class="legend-row"><svg width="14" height="14"><polygon points="7,1 13,7 7,13 1,7" fill="#8b5cf6" stroke="#6d28d9" stroke-width="1"/></svg> Developer tag</div>
  <div class="legend-row" style="margin-top:8px;color:#9ca3af;font-size:10px">Click: select · Shift+click: multi · Ctrl+C: copy · Drag: move</div>
</div>
<div id="tooltip"></div>
<div id="copy-toast"></div>
<svg id="graph"></svg>
<script>
var data = ${graphData};
var W = window.innerWidth, H = window.innerHeight;

// Node lookup by ID
var nodeById = {};
data.nodes.forEach(function(n) { nodeById[n.id] = n; });

// Pre-compute degree for sizing
data.nodes.forEach(function(n) { n.degree = 0; });
data.edges.forEach(function(e) {
  if (nodeById[e.source]) nodeById[e.source].degree++;
  if (nodeById[e.target]) nodeById[e.target].degree++;
});

// Pre-compute adjacency
var neighborIds = new Map();
var nodeEdgeIndices = new Map();
data.nodes.forEach(function(n) { neighborIds.set(n.id, new Set()); nodeEdgeIndices.set(n.id, new Set()); });
data.edges.forEach(function(e, i) {
  neighborIds.get(e.source).add(e.target);
  neighborIds.get(e.target).add(e.source);
  nodeEdgeIndices.get(e.source).add(i);
  nodeEdgeIndices.get(e.target).add(i);
});

var colors = d3.scaleOrdinal(d3.schemeTableau10).domain(data.fileGroups);

function nodeRadius(d) {
  if (d.type === 'tag') return Math.max(5, Math.min(12, 3 + Math.sqrt(d.degree) * 1.5));
  if (d.type === 'state') return Math.max(6, Math.min(14, 4 + Math.sqrt(d.degree) * 2));
  return Math.max(4, Math.min(14, 3 + Math.sqrt(d.degree) * 2));
}
function nodeColor(d) {
  if (d.type === 'state') return '#0d9488';
  if (d.type === 'tag') return '#8b5cf6';
  return colors(d.file);
}
function nodeStroke(d) {
  if (d.type === 'state') return '#0f766e';
  if (d.type === 'tag') return '#6d28d9';
  return d3.color(colors(d.file)).darker(0.5);
}
function edgeColor() { return '#9ca3af'; }
function edgeWidth() { return 0.8; }
function edgeOpacity() { return 0.35; }
function edgeDash() { return null; }

// ==================== GRID LAYOUT ====================
function computeGridLayout() {
  var COLS = 7, COL_W = 260, ROW_H = 20, GROUP_PAD = 30, COL_GAP = 16;
  var pos = {};

  var fileCounts = {};
  data.fileGroups.forEach(function(f) { fileCounts[f] = 0; });
  data.nodes.forEach(function(n) { if (n.type === 'card') fileCounts[n.file] = (fileCounts[n.file]||0)+1; });

  var fileEdgeCounts = {};
  data.fileGroups.forEach(function(f) { fileEdgeCounts[f] = 0; });
  data.edges.forEach(function(e) {
    var sn = nodeById[e.source], tn = nodeById[e.target];
    if (sn && sn.type === 'card') fileEdgeCounts[sn.file]++;
    if (tn && tn.type === 'card') fileEdgeCounts[tn.file]++;
  });
  var sortedFiles = data.fileGroups.slice().sort(function(a,b) { return fileEdgeCounts[b] - fileEdgeCounts[a]; });

  var colHeights = [];
  for (var c = 0; c < COLS; c++) colHeights.push(0);
  var fileBlocks = {};
  sortedFiles.forEach(function(f) {
    var count = fileCounts[f] || 0;
    var blockH = GROUP_PAD + Math.ceil(count / 2) * ROW_H + 10;
    var minCol = 0;
    for (var c = 1; c < COLS; c++) { if (colHeights[c] < colHeights[minCol]) minCol = c; }
    fileBlocks[f] = { col: minCol, x: minCol * (COL_W + COL_GAP), y: colHeights[minCol], w: COL_W, h: blockH };
    colHeights[minCol] += blockH + COL_GAP;
  });

  var fileCardIdx = {};
  data.nodes.forEach(function(n) {
    if (n.type !== 'card') return;
    var fb = fileBlocks[n.file];
    if (!fb) { pos[n.id] = {x:0,y:0}; return; }
    var idx = fileCardIdx[n.file] || 0;
    fileCardIdx[n.file] = idx + 1;
    pos[n.id] = { x: fb.x + 10 + (idx%2) * (COL_W/2), y: fb.y + GROUP_PAD + Math.floor(idx/2) * ROW_H };
  });

  var maxColH = Math.max.apply(null, colHeights);
  var stateNodes = data.nodes.filter(function(n) { return n.type === 'state'; });
  var stateW = stateNodes.length * 160;
  var stateStartX = (COLS * (COL_W + COL_GAP)) / 2 - stateW / 2;
  stateNodes.forEach(function(n, i) { pos[n.id] = { x: stateStartX + i*160 + 80, y: maxColH + 60 }; });

  var tagNodes = data.nodes.filter(function(n) { return n.type === 'tag'; });
  var tagW = tagNodes.length * 140;
  var tagStartX = (COLS * (COL_W + COL_GAP)) / 2 - tagW / 2;
  tagNodes.forEach(function(n, i) { pos[n.id] = { x: tagStartX + i*140 + 70, y: maxColH + 120 }; });

  return { pos: pos, fileBlocks: fileBlocks, sortedFiles: sortedFiles, maxColH: maxColH,
    stateStartX: stateStartX, tagStartX: tagStartX };
}

// ==================== FORCE LAYOUT ====================
function computeForceLayout() {
  // Create copies of nodes/edges for simulation
  var simNodes = data.nodes.map(function(n) { return { id: n.id, type: n.type, file: n.file }; });
  var simEdges = data.edges.map(function(e) { return { source: e.source, target: e.target, type: e.type }; });

  // File-group centroids: seed cards from same file near each other
  var fileCentroids = {};
  var angle = 0, radius = 300;
  data.fileGroups.forEach(function(f) {
    fileCentroids[f] = { x: Math.cos(angle) * radius, y: Math.sin(angle) * radius };
    angle += 2 * Math.PI / data.fileGroups.length;
  });

  // Seed initial positions near file centroid (jittered)
  simNodes.forEach(function(n, i) {
    if (n.type === 'card' && n.file && fileCentroids[n.file]) {
      n.x = fileCentroids[n.file].x + (Math.random()-0.5) * 100;
      n.y = fileCentroids[n.file].y + (Math.random()-0.5) * 100;
    } else {
      n.x = (Math.random()-0.5) * 600;
      n.y = (Math.random()-0.5) * 600;
    }
  });

  var sim = d3.forceSimulation(simNodes)
    .force('charge', d3.forceManyBody().strength(-300))
    .force('link', d3.forceLink(simEdges).id(function(d){return d.id}).distance(function(e) {
      if (e.type === 'chain') return 80;
      if (e.type === 'hidden-read' || e.type === 'hidden-write') return 120;
      return 100;
    }).strength(function(e) {
      if (e.type === 'chain') return 0.8;
      if (e.type === 'hidden-read' || e.type === 'hidden-write') return 0.3;
      return 0.4;
    }))
    .force('center', d3.forceCenter(0, 0))
    .force('collide', d3.forceCollide(40))
    .force('fileGroup', function(alpha) {
      // Mild pull toward file centroid
      simNodes.forEach(function(n) {
        if (n.type === 'card' && n.file && fileCentroids[n.file]) {
          var cx = fileCentroids[n.file].x, cy = fileCentroids[n.file].y;
          n.vx += (cx - n.x) * alpha * 0.03;
          n.vy += (cy - n.y) * alpha * 0.03;
        }
      });
    })
    .stop();

  // Run to convergence
  for (var i = 0; i < 500; i++) sim.tick();

  var pos = {};
  simNodes.forEach(function(n) { pos[n.id] = { x: n.x, y: n.y }; });
  return { pos: pos };
}

// Compute both layouts
var gridLayout = computeGridLayout();
var forceLayout = computeForceLayout();

// Start with force layout
var currentLayout = 'force';
data.nodes.forEach(function(n) {
  var p = forceLayout.pos[n.id] || {x:0,y:0};
  n.x = p.x; n.y = p.y;
});

var svg = d3.select('#graph').attr('width', W).attr('height', H);
var g = svg.append('g');

var zoomBehavior = d3.zoom().scaleExtent([0.1, 6])
  .on('zoom', function(event) { g.attr('transform', event.transform); });
svg.call(zoomBehavior);
svg.on('dblclick.zoom', null);

// Auto-fit
function autoFit() {
  var xExt = d3.extent(data.nodes, function(d){return d.x});
  var yExt = d3.extent(data.nodes, function(d){return d.y});
  var pad = 80;
  var bw = xExt[1] - xExt[0] + pad*2;
  var bh = yExt[1] - yExt[0] + pad*2;
  var sc = Math.min(W / bw, H / bh, 1.5);
  var tx = W/2 - (xExt[0]+xExt[1])/2*sc;
  var ty = H/2 - (yExt[0]+yExt[1])/2*sc;
  svg.transition().duration(500).call(zoomBehavior.transform, d3.zoomIdentity.translate(tx,ty).scale(sc));
}
autoFit();

// Grid background group (only visible in grid mode)
var gridBgG = g.append('g').attr('class', 'grid-bg').style('display', 'none');

// Draw edges
var linkG = g.append('g');
var link = linkG.selectAll('line').data(data.edges).join('line')
  .attr('stroke', edgeColor)
  .attr('stroke-width', edgeWidth)
  .attr('stroke-opacity', edgeOpacity)
  .attr('stroke-dasharray', edgeDash);

function updateEdgePositions() {
  link.attr('x1', function(d){ var n=nodeById[d.source]; return n?n.x:0; })
    .attr('y1', function(d){ var n=nodeById[d.source]; return n?n.y:0; })
    .attr('x2', function(d){ var n=nodeById[d.target]; return n?n.x:0; })
    .attr('y2', function(d){ var n=nodeById[d.target]; return n?n.y:0; });
}
updateEdgePositions();

// Pre-compute edge-to-node map for drag
var nodeEdgeMap = new Map();
data.nodes.forEach(function(n) { nodeEdgeMap.set(n.id, []); });
var edgeElements = link.nodes();
data.edges.forEach(function(e, i) {
  if (nodeEdgeMap.has(e.source)) nodeEdgeMap.get(e.source).push({idx:i, role:'source'});
  if (nodeEdgeMap.has(e.target)) nodeEdgeMap.get(e.target).push({idx:i, role:'target'});
});

// Draw nodes
var isDragging = false, wasDragged = false;
var nodeG = g.append('g');
var node = nodeG.selectAll('g').data(data.nodes).join('g')
  .attr('class', 'node')
  .attr('transform', function(d) { return 'translate('+d.x+','+d.y+')'; })
  .call(d3.drag()
    .on('start', function(event, d) { isDragging = true; wasDragged = false; })
    .on('drag', function(event, d) {
      wasDragged = true;
      d.x = event.x; d.y = event.y;
      d3.select(this).attr('transform', 'translate('+event.x+','+event.y+')');
      var connected = nodeEdgeMap.get(d.id) || [];
      for (var j = 0; j < connected.length; j++) {
        var el = edgeElements[connected[j].idx];
        if (connected[j].role === 'source') { el.setAttribute('x1', event.x); el.setAttribute('y1', event.y); }
        else { el.setAttribute('x2', event.x); el.setAttribute('y2', event.y); }
      }
    })
    .on('end', function() { isDragging = false; setTimeout(function(){wasDragged=false},0); }));

// Node shapes: circle (card), rect (state), diamond/polygon (tag)
node.each(function(d) {
  var el = d3.select(this);
  if (d.type === 'state') {
    var s = nodeRadius(d) * 1.6;
    el.append('rect').attr('class','shape').attr('width',s).attr('height',s).attr('x',-s/2).attr('y',-s/2)
      .attr('rx',3).attr('fill',nodeColor(d)).attr('stroke',nodeStroke(d)).attr('stroke-width',1.2).attr('opacity',0.9);
  } else if (d.type === 'tag') {
    var r = nodeRadius(d);
    el.append('polygon').attr('class','shape')
      .attr('points', '0,'+(-r)+' '+r+',0 0,'+r+' '+(-r)+',0')
      .attr('fill',nodeColor(d)).attr('stroke',nodeStroke(d)).attr('stroke-width',1.2).attr('opacity',0.9);
  } else {
    el.append('circle').attr('class','shape').attr('r', nodeRadius(d))
      .attr('fill', nodeColor(d)).attr('stroke', nodeStroke(d)).attr('stroke-width',1.2).attr('opacity',0.9);
  }
});

// Labels
function labelText(d) {
  if (d.type === 'state') return d.id.replace('state:','');
  if (d.type === 'tag') return d.id.replace('tag:','');
  return d.id;
}
var labels = node.append('text')
  .text(labelText)
  .attr('x', function(d) { return nodeRadius(d) + 4; })
  .attr('y', 3)
  .attr('fill', function(d) {
    if (d.type === 'state') return '#0f766e';
    if (d.type === 'tag') return '#6d28d9';
    return '#374151';
  })
  .attr('font-size', function(d) { return d.degree > 3 ? '11px' : '9px'; })
  .attr('font-weight', function(d) { return d.degree > 3 ? '600' : '400'; })
  .attr('font-family', 'inherit')
  .style('pointer-events', 'none');

// Tooltip
var tooltip = document.getElementById('tooltip');

function showTooltip(event, d) {
  if (isDragging) return;
  var h;
  if (d.type === 'state') {
    var key = d.id.replace('state:','');
    var connected = data.edges.filter(function(e){return (e.type==='hidden-read'||e.type==='hidden-write') && (e.source===d.id||e.target===d.id)})
      .map(function(e){return e.type+': '+(e.source===d.id?e.target:e.source)});
    h = '<span class="tt-id">'+key+'</span><span class="tt-badge" style="background:#0d9488">STATE VAR</span>'+
      '<div class="tt-desc">Connected cards: '+(connected.join(', ')||'none')+'</div>';
  } else if (d.type === 'tag') {
    var tag = d.id.replace('tag:','');
    var cards = data.edges.filter(function(e){return e.type==='tag' && (e.source===d.id||e.target===d.id)})
      .map(function(e){return e.source===d.id?e.target:e.source});
    h = '<span class="tt-id">'+tag+'</span><span class="tt-badge" style="background:#8b5cf6">TAG</span>'+
      '<div class="tt-desc">'+cards.length+' cards: '+(cards.join(', ')||'none')+'</div>';
  } else {
    h = '<span class="tt-id">'+d.id+'</span><span class="tt-badge" style="background:'+nodeColor(d)+'">CARD</span>'+
      '<div class="tt-desc">'+(d.speaker||'')+': '+(d.text||'')+'</div>'+
      '<div class="tt-meta">'+(d.effects||'')+'</div>'+
      '<div class="tt-meta">group '+(d.file||'')+' · source '+(d.sourceFile||'unknown')+' · '+d.degree+' connections</div>';
  }
  tooltip.innerHTML = h;
  tooltip.style.display = 'block';
}

function positionTooltip(event) {
  var tw = tooltip.offsetWidth || 400;
  var th = tooltip.offsetHeight || 200;
  var tx = event.pageX + 14, ty = event.pageY + 14;
  if (tx + tw > W) tx = event.pageX - tw - 14;
  if (tx < 0) tx = 8;
  if (ty + th > H) ty = event.pageY - th - 14;
  if (ty < 0) ty = 8;
  tooltip.style.left = tx + 'px';
  tooltip.style.top = ty + 'px';
}

function resetHighlight() {
  edgeElements.forEach(function(el, idx) {
    var e = data.edges[idx];
    el.setAttribute('stroke', edgeColor(e));
    el.setAttribute('stroke-opacity', String(edgeOpacity(e)));
    el.setAttribute('stroke-width', String(edgeWidth(e)));
  });
  node.select('.shape').attr('opacity', 0.9);
}

function highlightNode(d) {
  var connectedEdges = nodeEdgeIndices.get(d.id) || new Set();
  var neighbors = neighborIds.get(d.id) || new Set();
  edgeElements.forEach(function(el, idx) {
    if (connectedEdges.has(idx)) {
      el.setAttribute('stroke', '#2563eb');
      el.setAttribute('stroke-opacity', '0.8');
      el.setAttribute('stroke-width', '2.5');
    } else {
      el.setAttribute('stroke-opacity', '0.04');
    }
  });
  node.select('.shape').attr('opacity', function(n) { return n.id===d.id||neighbors.has(n.id)?1:0.08; });
}

node.on('mouseenter', function(event, d) { showTooltip(event, d); highlightNode(d); })
  .on('mousemove', function(event) { positionTooltip(event); })
  .on('mouseleave', function() { if(!isDragging){ tooltip.style.display='none'; resetHighlight(); updateSelectionVisuals(); } });

// Selection
var selected = new Set();
function updateSelectionVisuals() {
  node.select('.shape')
    .attr('stroke-width', function(d){return selected.has(d.id)?3:1.2})
    .attr('stroke', function(d){return selected.has(d.id)?'#2563eb':nodeStroke(d)});
}

node.on('click', function(event, d) {
  if (wasDragged) return;
  event.stopPropagation();
  if (event.shiftKey) {
    if (selected.has(d.id)) selected.delete(d.id); else selected.add(d.id);
  } else {
    if (selected.has(d.id) && selected.size === 1) { selected.clear(); }
    else { selected.clear(); selected.add(d.id); }
  }
  updateSelectionVisuals();
});

svg.on('click', function(event) {
  if (event.target === svg.node()) { selected.clear(); updateSelectionVisuals(); }
});

// Ctrl+C
document.addEventListener('keydown', function(event) {
  if ((event.ctrlKey || event.metaKey) && event.key === 'c' && selected.size > 0) {
    var ids = [...selected].join(', ');
    if (navigator.clipboard) {
      navigator.clipboard.writeText(ids).then(function() { showCopyToast('Copied: '+ids); });
    } else { showCopyToast(ids); }
  }
});

var copyToast = document.getElementById('copy-toast');
var copyTimeout = null;
function showCopyToast(msg) {
  copyToast.textContent = msg;
  copyToast.classList.add('show');
  clearTimeout(copyTimeout);
  copyTimeout = setTimeout(function(){copyToast.classList.remove('show')},1500);
}

// Search
var searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', function() {
  var q = searchInput.value.toLowerCase().trim();
  if (!q) { resetHighlight(); return; }
  var matchingIds = new Set();
  data.nodes.forEach(function(d) {
    var match = d.id.toLowerCase().includes(q) || (d.speaker||'').toLowerCase().includes(q)
      || (d.text||'').toLowerCase().includes(q) || (d.file||'').toLowerCase().includes(q)
      || (d.sourceFile||'').toLowerCase().includes(q);
    if (match) matchingIds.add(d.id);
  });
  node.select('.shape').attr('opacity', function(d){return matchingIds.has(d.id)?1:0.05});
  labels.attr('fill-opacity', function(d){return matchingIds.has(d.id)?1:0.1});
  edgeElements.forEach(function(el, idx) {
    var e = data.edges[idx];
    el.setAttribute('stroke-opacity', matchingIds.has(e.source)||matchingIds.has(e.target)?'0.5':'0.05');
  });
});

// ==================== LAYOUT TOGGLE ====================
function applyLayout(layoutName, animate) {
  currentLayout = layoutName;
  var positions = layoutName === 'grid' ? gridLayout.pos : forceLayout.pos;

  data.nodes.forEach(function(n) {
    var p = positions[n.id] || {x:0,y:0};
    n.x = p.x; n.y = p.y;
  });

  var dur = animate ? 600 : 0;
  node.transition().duration(dur)
    .attr('transform', function(d) { return 'translate('+d.x+','+d.y+')'; });
  link.transition().duration(dur)
    .attr('x1', function(d){ var n=nodeById[d.source]; return n?n.x:0; })
    .attr('y1', function(d){ var n=nodeById[d.source]; return n?n.y:0; })
    .attr('x2', function(d){ var n=nodeById[d.target]; return n?n.x:0; })
    .attr('y2', function(d){ var n=nodeById[d.target]; return n?n.y:0; });

  // Grid backgrounds
  gridBgG.selectAll('*').remove();
  if (layoutName === 'grid') {
    gridBgG.style('display', null);
    var gl = gridLayout;
    gl.sortedFiles.forEach(function(f) {
      var fb = gl.fileBlocks[f];
      gridBgG.append('rect').attr('x', fb.x - 4).attr('y', fb.y).attr('width', fb.w + 8).attr('height', fb.h)
        .attr('rx', 4).attr('fill', '#f8f9fa').attr('stroke', '#e9ecef').attr('stroke-width', 1);
      gridBgG.append('text').attr('x', fb.x + 4).attr('y', fb.y + 14)
        .text(f).attr('fill', '#6c757d').attr('font-size', '10px').attr('font-weight', '600')
        .attr('font-family', 'inherit').style('pointer-events', 'none');
    });
  } else {
    gridBgG.style('display', 'none');
  }

  // Update edge-to-node positions after transition
  if (dur > 0) setTimeout(function() { updateEdgePositions(); }, dur + 10);

  // Refit
  setTimeout(function() { autoFit(); }, dur > 0 ? dur + 20 : 10);

  document.getElementById('btn-force').className = layoutName==='force' ? 'active' : '';
  document.getElementById('btn-grid').className = layoutName==='grid' ? 'active' : '';
}

document.getElementById('btn-force').addEventListener('click', function() { applyLayout('force', true); });
document.getElementById('btn-grid').addEventListener('click', function() { applyLayout('grid', true); });

window.addEventListener('resize', function() {
  W = window.innerWidth; H = window.innerHeight;
  svg.attr('width', W).attr('height', H);
});
${CLOSE_SCRIPT}
</body>
</html>`;

const htmlFile = join(repoRoot, "public", "cards-map.html");
writeFileSync(htmlFile, html);
console.log(`${gNodes.length} nodes, ${uniqueEdges.length} edges → ${htmlFile}`);
