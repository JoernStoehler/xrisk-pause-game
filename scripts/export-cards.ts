/**
 * Export card data for review.
 *
 * Outputs:
 *   docs/cards-export.md
 *   public/cards-map.html
 *
 * Usage: npm run cards
 */

import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { ALL_CARDS, CARD_GROUPS } from "../src/content/cards";
import type { CardDefinition, ChoiceDefinition, DynamicText } from "../src/engine/card";
import type { History } from "../src/engine/history";
import { buildPool } from "../src/engine/pool";
import { initialState, RESOURCE_KEYS, type Effects, type State } from "../src/engine/state";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(repoRoot, "docs");
const cardsDir = join(repoRoot, "src/content/cards");
const publicDir = join(repoRoot, "public");

const baseState = initialState();
const baseHistory: History = [{ type: "gameStarted", seed: 1 }];

type CardSource = { file: string; line: number };
type StateReference = {
  cardId: string;
  path: string;
  source: string;
  kind: "read" | "write";
};

const cardFiles = readdirSync(cardsDir).filter(
  (file) => file.endsWith(".ts") && file !== "index.ts",
);

const lineNumberAt = (content: string, index: number): number =>
  content.slice(0, index).split("\n").length;

const uniqueSorted = (values: readonly string[]): string[] =>
  [...new Set(values)].sort();

const sourceByCardId: Record<string, CardSource> = {};
const stateReferences: StateReference[] = [];

for (const file of cardFiles) {
  const content = readFileSync(join(cardsDir, file), "utf-8");
  const definitions = [...content.matchAll(/id:\s*"([^"]+)"/g)].map((match) => ({
    id: match[1],
    index: match.index ?? 0,
  }));

  for (const definition of definitions) {
    sourceByCardId[definition.id] = {
      file,
      line: lineNumberAt(content, definition.index),
    };
  }

  const ownerAt = (index: number): string | null => {
    let owner: string | null = null;
    for (const definition of definitions) {
      if (definition.index <= index) owner = definition.id;
      else break;
    }
    return owner;
  };

  for (const match of content.matchAll(/\bstate\.([A-Za-z_][A-Za-z0-9_.]*)/g)) {
    const cardId = ownerAt(match.index ?? 0);
    if (!cardId) continue;
    stateReferences.push({
      cardId,
      path: `state.${match[1]}`,
      source: `${file}:${lineNumberAt(content, match.index ?? 0)}`,
      kind: "read",
    });
  }

  for (const match of content.matchAll(/\bnextState\.([A-Za-z_][A-Za-z0-9_.]*)/g)) {
    const cardId = ownerAt(match.index ?? 0);
    if (!cardId) continue;
    stateReferences.push({
      cardId,
      path: `state.${match[1]}`,
      source: `${file}:${lineNumberAt(content, match.index ?? 0)}`,
      kind: "write",
    });
  }
}

const sourceLabel = (cardId: string): string => {
  const source = sourceByCardId[cardId];
  return source ? `${source.file}:${source.line}` : "unknown";
};

const resolveText = (value: DynamicText): string =>
  typeof value === "function" ? value(baseState, baseHistory) : value;

const fmtEffects = (effects: Effects | undefined): string =>
  Object.entries(effects ?? {})
    .filter(([, value]) => value !== 0)
    .map(([key, value]) => `${key}${value > 0 ? "+" : ""}${value}`)
    .join(" ") || "-";

const fmtRate = (card: CardDefinition, state: State = baseState): string => {
  const rate = card.rate(state, baseHistory);
  const formattedRate = Number.isInteger(rate) ? String(rate) : rate.toFixed(2);
  return `${formattedRate}/month`;
};

const choiceLine = (
  arrow: string,
  choice: ChoiceDefinition | undefined,
): string => {
  if (!choice) return `${arrow} -`;
  return `${arrow} ${resolveText(choice.label)}: ${fmtEffects(choice.effects)}`;
};

const table = (
  headers: readonly string[],
  rows: readonly (readonly string[])[],
): string[] => {
  const lines = [
    `| ${headers.join(" | ")} |`,
    `| ${headers.map(() => "---").join(" | ")} |`,
  ];
  for (const row of rows) lines.push(`| ${row.join(" | ")} |`);
  return lines;
};

const countBy = <T,>(
  items: readonly T[],
  getKey: (item: T) => string,
): [string, number][] => {
  const counts = new Map<string, number>();
  for (const item of items) {
    const key = getKey(item);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
};

const referencesFor = (
  cardId: string,
  kind: StateReference["kind"],
): string[] =>
  uniqueSorted(
    stateReferences
      .filter((reference) => reference.cardId === cardId && reference.kind === kind)
      .map((reference) => `${reference.path} (${reference.source})`),
  );

const initialPool = buildPool(ALL_CARDS, baseState, baseHistory);
const initialRateByCard = new Map(initialPool.map((entry) => [entry.card.id, entry.rate]));
const cardsWithDownChoice = ALL_CARDS.filter((card) => card.choices.down);
const cardsMissingIdea = ALL_CARDS.filter((card) => !card.idea);
const tags = ALL_CARDS.flatMap((card) => card.tags ?? []);
const speakers = ALL_CARDS.map((card) => resolveText(card.speaker));

const md: string[] = [];
md.push(`# Card Review - ${ALL_CARDS.length} cards, ${CARD_GROUPS.length} groups`);
md.push("");
md.push("Generated by `npm run cards`.");
md.push("State references are lightweight source-pattern review aids, not complete semantic analysis.");
md.push("");
md.push("## Corpus Summary");
md.push("");
const initialTotalRate = initialPool.reduce((sum, entry) => sum + entry.rate, 0);
const expectedInitialWait = initialTotalRate > 0 ? 1 / initialTotalRate : null;
md.push(`- Initial pool eligibility: ${initialPool.length}/${ALL_CARDS.length} cards have rate > 0 in a new game.`);
if (expectedInitialWait !== null) {
  md.push(`- Initial total event rate: ${initialTotalRate.toFixed(2)}/month; expected wait ${expectedInitialWait.toFixed(2)} months.`);
}
md.push(`- Down choices: ${cardsWithDownChoice.length} cards.`);
md.push(`- Cards missing idea: ${cardsMissingIdea.length}.`);
md.push(`- State reads found: ${stateReferences.filter((reference) => reference.kind === "read").length}.`);
md.push(`- State writes found: ${stateReferences.filter((reference) => reference.kind === "write").length}.`);
md.push("");
md.push("### Counts By Group");
md.push("");
md.push(...table(
  ["Group", "Cards", "Initial Pool", "Down Choices"],
  CARD_GROUPS.map((group) => [
    `${group.label} (${group.id})`,
    String(group.cards.length),
    String(group.cards.filter((card) => initialRateByCard.has(card.id)).length),
    String(group.cards.filter((card) => card.choices.down).length),
  ]),
));
md.push("");
md.push("### Counts By Tag");
md.push("");
md.push(...table(["Tag", "Cards"], countBy(tags, (tag) => tag).map(([tag, count]) => [tag, String(count)])));
md.push("");
md.push("### Counts By Speaker");
md.push("");
md.push(...table(["Speaker", "Cards"], countBy(speakers, (speaker) => speaker).map(([speaker, count]) => [speaker, String(count)])));
md.push("");
md.push("### Cards Missing Idea");
md.push("");
md.push(cardsMissingIdea.length ? cardsMissingIdea.map((card) => `- \`${card.id}\` (${sourceLabel(card.id)})`).join("\n") : "None.");
md.push("");

for (const group of CARD_GROUPS) {
  md.push(`## ${group.label} (${group.id})`);
  md.push("");
  for (const card of group.cards) {
    const reads = referencesFor(card.id, "read");
    const writes = referencesFor(card.id, "write");
    md.push(`### ${card.id}`);
    md.push("");
    md.push(`_Source:_ \`${sourceLabel(card.id)}\``);
    md.push(`_Tags:_ ${(card.tags ?? []).join(", ") || "-"}`);
    md.push(`_Initial rate:_ ${fmtRate(card)}`);
    if (card.idea) md.push(`_Idea:_ ${card.idea}`);
    md.push("");
    md.push(`${resolveText(card.speaker)}: ${resolveText(card.text)}`);
    md.push("");
    md.push(choiceLine("<-", card.choices.left));
    md.push(choiceLine("->", card.choices.right));
    if (card.choices.down) md.push(choiceLine("v", card.choices.down));
    if (reads.length || writes.length) {
      md.push("");
      if (reads.length) md.push(`Reads: ${reads.join("; ")}`);
      if (writes.length) md.push(`Writes: ${writes.join("; ")}`);
    }
    md.push("");
  }
}

const mdFile = join(outDir, "cards-export.md");
writeFileSync(mdFile, md.join("\n"));

type GraphNode = { id: string; type: "card" | "state" | "tag"; group?: string };
type GraphEdge = { source: string; target: string; type: string };

const nodes: GraphNode[] = [];
const edges: GraphEdge[] = [];
const statePaths = new Set<string>();

for (const group of CARD_GROUPS) {
  for (const card of group.cards) {
    nodes.push({ id: card.id, type: "card", group: group.id });
    for (const tag of card.tags ?? []) {
      nodes.push({ id: `tag:${tag}`, type: "tag" });
      edges.push({ source: card.id, target: `tag:${tag}`, type: "tag" });
    }
    for (const resource of RESOURCE_KEYS) {
      if (card.choices.left.effects?.[resource] || card.choices.right.effects?.[resource] || card.choices.down?.effects?.[resource]) {
        const path = `state.resources.${resource}`;
        statePaths.add(path);
        edges.push({ source: card.id, target: path, type: "choice-effect" });
      }
    }
  }
}

for (const reference of stateReferences) {
  statePaths.add(reference.path);
  edges.push({
    source: reference.kind === "read" ? reference.path : reference.cardId,
    target: reference.kind === "read" ? reference.cardId : reference.path,
    type: reference.kind,
  });
}

for (const path of statePaths) nodes.push({ id: path, type: "state" });

const nodeKeys = new Set<string>();
const dedupedNodes = nodes.filter((node) => {
  const key = `${node.type}:${node.id}`;
  if (nodeKeys.has(key)) return false;
  nodeKeys.add(key);
  return true;
});

const edgeKeys = new Set<string>();
const dedupedEdges = edges.filter((edge) => {
  const key = `${edge.source}->${edge.target}:${edge.type}`;
  if (edgeKeys.has(key)) return false;
  edgeKeys.add(key);
  return true;
});

const graph = {
  generatedAt: new Date().toISOString(),
  nodes: dedupedNodes,
  edges: dedupedEdges,
};

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Card Map</title>
<style>
body { margin: 0; font-family: system-ui, sans-serif; background: #f8fafc; color: #111827; }
main { max-width: 1200px; margin: 0 auto; padding: 24px; }
h1 { margin: 0 0 4px; font-size: 28px; }
.summary { color: #4b5563; margin-bottom: 24px; }
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; }
.card { background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 14px; }
.card h2 { font-size: 16px; margin: 0 0 6px; }
.meta { color: #6b7280; font-size: 12px; margin-bottom: 8px; }
.refs { font-size: 12px; line-height: 1.45; }
code { background: #eef2ff; border-radius: 4px; padding: 1px 4px; }
</style>
</head>
<body>
<main>
<h1>Card Map</h1>
<p class="summary">${ALL_CARDS.length} cards, ${dedupedNodes.filter((node) => node.type === "state").length} state paths, ${dedupedEdges.length} edges. Generated by <code>npm run cards</code>.</p>
<div class="grid">
${ALL_CARDS.map((card) => {
  const reads = referencesFor(card.id, "read");
  const writes = referencesFor(card.id, "write");
  return `<section class="card">
<h2>${card.id}</h2>
<div class="meta">${sourceLabel(card.id)} · initial rate ${fmtRate(card)}</div>
<div class="refs"><strong>Reads</strong>: ${reads.map((read) => `<code>${read}</code>`).join(" ") || "-"}<br>
<strong>Writes</strong>: ${writes.map((write) => `<code>${write}</code>`).join(" ") || "-"}</div>
</section>`;
}).join("\n")}
</div>
<script type="application/json" id="card-graph">${JSON.stringify(graph)}</script>
</main>
</body>
</html>
`;

const htmlFile = join(publicDir, "cards-map.html");
writeFileSync(htmlFile, html);
console.log(`${ALL_CARDS.length} cards -> ${mdFile}`);
console.log(`${dedupedNodes.length} nodes, ${dedupedEdges.length} edges -> ${htmlFile}`);
