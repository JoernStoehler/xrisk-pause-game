#!/usr/bin/env node
/**
 * Event Map Visualization
 *
 * Parses events-draft-v2.md and events-brainstorm-*.md files.
 * Outputs:
 *   - Entity × topic coverage matrix
 *   - Event list grouped by primary entity cluster
 *   - Cross-reference graph (which events link to which)
 *   - Imbalance report (under-covered entities/topics)
 *   - Bar effects summary
 *
 * Usage:
 *   node scripts/event-map.mjs              # terminal output
 *   node scripts/event-map.mjs --html       # write event-map.html
 *   node scripts/event-map.mjs --json       # write event-map.json
 */

import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join } from "path";

const DATA_DIR = join(import.meta.dirname, "..", "src", "data");

// ── Parse ────────────────────────────────────────────────────────────

function findEventFiles() {
  const files = readdirSync(DATA_DIR).filter(
    (f) => f.startsWith("events-") && f.endsWith(".md")
  );
  return files.map((f) => join(DATA_DIR, f));
}

function parseEvents(filePath) {
  const content = readFileSync(filePath, "utf-8");
  const events = [];
  // Split on #### # which starts each event
  const blocks = content.split(/^#### /m).slice(1);

  for (const block of blocks) {
    const lines = block.trim().split("\n");
    const idMatch = lines[0].match(/^(#[\w-]+)/);
    if (!idMatch) continue;

    const id = idMatch[1];
    const event = {
      id,
      file: filePath.split("/").pop(),
      type: "",
      entities: [],
      topics: [],
      situation: "",
      options: [],
      teaches: "",
      refs: [],
      bars: "",
    };

    let currentField = null;
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];

      if (line.startsWith("**Type:**")) {
        event.type = line.replace("**Type:**", "").trim();
      } else if (line.startsWith("**Entities:**")) {
        event.entities = line
          .replace("**Entities:**", "")
          .trim()
          .split(",")
          .map((e) => e.trim())
          .filter(Boolean);
      } else if (line.startsWith("**Topics:**")) {
        event.topics = line
          .replace("**Topics:**", "")
          .trim()
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean);
      } else if (line.startsWith("**Situation:**")) {
        event.situation = line.replace("**Situation:**", "").trim();
        currentField = "situation";
      } else if (line.startsWith("**Options:**")) {
        currentField = "options";
      } else if (line.startsWith("**Teaches:**")) {
        event.teaches = line.replace("**Teaches:**", "").trim();
        currentField = "teaches";
      } else if (line.startsWith("**Refs:**")) {
        const refLine = line.replace("**Refs:**", "").trim();
        event.refs = [...refLine.matchAll(/#[\w-]+/g)].map((m) => m[0]);
      } else if (line.startsWith("**Bars:**")) {
        event.bars = line.replace("**Bars:**", "").trim();
      } else if (currentField === "situation" && line && !line.startsWith("**")) {
        event.situation += " " + line.trim();
      } else if (currentField === "options" && line.startsWith("- ")) {
        event.options.push(line.replace("- ", "").trim());
      } else if (currentField === "teaches" && line && !line.startsWith("**")) {
        event.teaches += " " + line.trim();
      }
    }

    events.push(event);
  }
  return events;
}

// ── Analysis ─────────────────────────────────────────────────────────

function analyze(events) {
  const entityCounts = {};
  const topicCounts = {};
  const typeCounts = {};
  const barMentions = { pol: 0, int: 0, saf: 0, alg: 0 };
  const entityTopicPairs = {};
  const refGraph = {};

  for (const e of events) {
    // Count entities
    for (const ent of e.entities) {
      entityCounts[ent] = (entityCounts[ent] || 0) + 1;
    }
    // Count topics
    for (const t of e.topics) {
      topicCounts[t] = (topicCounts[t] || 0) + 1;
    }
    // Count types
    typeCounts[e.type] = (typeCounts[e.type] || 0) + 1;

    // Bar mentions
    for (const bar of ["pol", "int", "saf", "alg"]) {
      if (e.bars.includes(bar)) barMentions[bar]++;
    }

    // Entity × topic pairs
    for (const ent of e.entities) {
      for (const t of e.topics) {
        const key = `${ent} × ${t}`;
        entityTopicPairs[key] = (entityTopicPairs[key] || 0) + 1;
      }
    }

    // Ref graph
    refGraph[e.id] = e.refs;
  }

  // Find orphans (no incoming or outgoing refs)
  const allRefs = new Set(events.flatMap((e) => e.refs));
  const allIds = new Set(events.map((e) => e.id));
  const orphans = events.filter(
    (e) => e.refs.length === 0 && !allRefs.has(e.id)
  );

  // Find broken refs
  const brokenRefs = [];
  for (const e of events) {
    for (const ref of e.refs) {
      if (!allIds.has(ref)) {
        brokenRefs.push({ from: e.id, to: ref });
      }
    }
  }

  return {
    entityCounts,
    topicCounts,
    typeCounts,
    barMentions,
    entityTopicPairs,
    refGraph,
    orphans,
    brokenRefs,
  };
}

// ── Terminal Output ──────────────────────────────────────────────────

function printTerminal(events, analysis) {
  const {
    entityCounts,
    topicCounts,
    typeCounts,
    barMentions,
    orphans,
    brokenRefs,
  } = analysis;

  console.log(`\n${"═".repeat(60)}`);
  console.log(`  EVENT MAP — ${events.length} events across ${new Set(events.map((e) => e.file)).size} files`);
  console.log(`${"═".repeat(60)}\n`);

  // Type breakdown
  console.log("TYPE BREAKDOWN");
  console.log("─".repeat(40));
  for (const [type, count] of Object.entries(typeCounts).sort(
    (a, b) => b[1] - a[1]
  )) {
    const bar = "█".repeat(count);
    console.log(`  ${type.padEnd(15)} ${String(count).padStart(3)}  ${bar}`);
  }

  // Bar coverage
  console.log("\nBAR COVERAGE (events affecting each bar)");
  console.log("─".repeat(40));
  const barNames = {
    pol: "Political Power",
    int: "Intelligence",
    saf: "Safety Progress",
    alg: "Algorithmic Prog",
  };
  for (const [bar, count] of Object.entries(barMentions).sort(
    (a, b) => b[1] - a[1]
  )) {
    const pct = Math.round((count / events.length) * 100);
    const barVis = "█".repeat(Math.round(count / 2));
    console.log(
      `  ${barNames[bar].padEnd(18)} ${String(count).padStart(3)} (${String(pct).padStart(2)}%)  ${barVis}`
    );
  }

  // Top entities
  console.log("\nTOP ENTITIES (by event count)");
  console.log("─".repeat(40));
  const sortedEntities = Object.entries(entityCounts).sort(
    (a, b) => b[1] - a[1]
  );
  for (const [ent, count] of sortedEntities.slice(0, 20)) {
    const bar = "█".repeat(count);
    console.log(`  ${ent.padEnd(25)} ${String(count).padStart(3)}  ${bar}`);
  }

  // Top topics
  console.log("\nTOP TOPICS (by event count)");
  console.log("─".repeat(40));
  const sortedTopics = Object.entries(topicCounts).sort(
    (a, b) => b[1] - a[1]
  );
  for (const [topic, count] of sortedTopics.slice(0, 20)) {
    const bar = "█".repeat(count);
    console.log(`  ${topic.padEnd(25)} ${String(count).padStart(3)}  ${bar}`);
  }

  // Events grouped by primary entity cluster
  console.log("\nEVENTS BY PRIMARY ENTITY");
  console.log("─".repeat(60));
  const clusters = {};
  for (const e of events) {
    const primary = e.entities[0] || "untagged";
    const cluster = primary.split("-")[0]; // e.g., "isia" from "isia-enforcement"
    if (!clusters[cluster]) clusters[cluster] = [];
    clusters[cluster].push(e);
  }
  for (const [cluster, clusterEvents] of Object.entries(clusters).sort(
    (a, b) => b[1].length - a[1].length
  )) {
    console.log(`\n  ${cluster.toUpperCase()} (${clusterEvents.length} events)`);
    for (const e of clusterEvents) {
      const refs = e.refs.length ? ` → ${e.refs.join(", ")}` : "";
      const typeTag =
        e.type === "crisis"
          ? "[C]"
          : e.type === "report"
            ? "[R]"
            : e.type === "consequence"
              ? "[Q]"
              : "[P]";
      console.log(`    ${typeTag} ${e.id}${refs}`);
    }
  }

  // Orphans
  if (orphans.length > 0) {
    console.log(`\n⚠ ORPHAN EVENTS (no refs in or out): ${orphans.length}`);
    console.log("─".repeat(40));
    for (const e of orphans) {
      console.log(`  ${e.id} (${e.file})`);
    }
  }

  // Broken refs
  if (brokenRefs.length > 0) {
    console.log(`\n⚠ BROKEN REFS: ${brokenRefs.length}`);
    console.log("─".repeat(40));
    for (const { from, to } of brokenRefs) {
      console.log(`  ${from} → ${to} (target not found)`);
    }
  }

  // Imbalance report
  console.log("\nIMBALANCE REPORT");
  console.log("─".repeat(40));
  const avgEntityCount =
    Object.values(entityCounts).reduce((a, b) => a + b, 0) /
    Object.keys(entityCounts).length;
  const underservedEntities = Object.entries(entityCounts)
    .filter(([, c]) => c <= 1)
    .sort((a, b) => a[1] - b[1]);
  if (underservedEntities.length > 0) {
    console.log(
      `  Entities with ≤1 event (avg: ${avgEntityCount.toFixed(1)}):`
    );
    for (const [ent, count] of underservedEntities) {
      console.log(`    ${ent}: ${count}`);
    }
  }

  const avgTopicCount =
    Object.values(topicCounts).reduce((a, b) => a + b, 0) /
    Object.keys(topicCounts).length;
  const underservedTopics = Object.entries(topicCounts)
    .filter(([, c]) => c <= 1)
    .sort((a, b) => a[1] - b[1]);
  if (underservedTopics.length > 0) {
    console.log(
      `\n  Topics with ≤1 event (avg: ${avgTopicCount.toFixed(1)}):`
    );
    for (const [topic, count] of underservedTopics) {
      console.log(`    ${topic}: ${count}`);
    }
  }

  console.log(`\n${"═".repeat(60)}\n`);
}

// ── HTML Output (Interactive D3 Force Graph) ─────────────────────────

function writeHtml(events, analysis) {
  const { barMentions, orphans, brokenRefs } = analysis;

  // Determine cluster for each event
  const clusterOf = (e) => (e.entities[0] || "untagged").split("-")[0];

  // Assign stable cluster positions for force layout grouping
  const clusterSet = [...new Set(events.map(clusterOf))];

  // Count bars affected per event
  const barsAffected = (e) => {
    let count = 0;
    for (const bar of ["pol", "int", "saf", "alg"]) {
      if (e.bars.includes(bar)) count++;
    }
    return count;
  };

  // Normalize type (strip parenthetical suffixes like "crisis (chain starter)")
  const normalizeType = (t) => {
    const base = t.split("(")[0].trim();
    return ["crisis", "report", "consequence", "preparation"].includes(base) ? base : "crisis";
  };

  // Build nodes
  const allIds = new Set(events.map((e) => e.id));
  const nodes = events.map((e) => ({
    id: e.id,
    type: normalizeType(e.type),
    rawType: e.type,
    cluster: clusterOf(e),
    entities: e.entities,
    topics: e.topics,
    situation: e.situation,
    bars: e.bars,
    barCount: barsAffected(e),
    refs: e.refs,
    file: e.file,
    isOrphan: orphans.some((o) => o.id === e.id),
  }));

  // Build edges (only for refs that point to existing events)
  const edges = [];
  for (const e of events) {
    for (const ref of e.refs) {
      const isBroken = !allIds.has(ref);
      edges.push({ source: e.id, target: ref, broken: isBroken });
    }
  }

  // Bar imbalance data
  const barNames = { pol: "Political Power", int: "Intelligence", saf: "Safety Progress", alg: "Algorithmic Prog" };
  const barData = Object.entries(barMentions)
    .sort((a, b) => b[1] - a[1])
    .map(([b, c]) => ({ key: b, name: barNames[b], count: c, pct: Math.round((c / events.length) * 100) }));

  // Cluster color palette
  const clusterColors = {
    isia: "#4a9eff",
    gov: "#ff6b6b",
    public: "#ffd93d",
    rogue: "#ff4757",
    researcher: "#2ed573",
    natl: "#ff7f50",
    chip: "#a29bfe",
    journalist: "#fd79a8",
    military: "#636e72",
    treaty: "#00cec9",
    civil: "#e17055",
    ai: "#6c5ce7",
    smuggler: "#d63031",
    corp: "#e84393",
    who: "#00b894",
    untagged: "#888888",
  };

  const graphData = JSON.stringify({ nodes, edges, clusterSet, clusterColors, barData, brokenRefs });

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Event Map -- ${events.length} events</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Space Mono', 'SF Mono', 'Fira Code', monospace;
    background: #1a1a2e;
    color: #e0e0e0;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
  }
  #graph-container {
    width: 100%;
    height: 100%;
    position: relative;
  }
  svg { display: block; }

  /* Top-left header */
  #header {
    position: absolute;
    top: 16px;
    left: 16px;
    z-index: 10;
    pointer-events: none;
  }
  #header h1 {
    color: #f0c040;
    font-size: 18px;
    margin-bottom: 4px;
  }
  #header p {
    color: #888;
    font-size: 12px;
  }

  /* Bar imbalance panel */
  #bar-panel {
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 10;
    background: rgba(22, 33, 62, 0.92);
    border: 1px solid #333;
    border-radius: 8px;
    padding: 12px 16px;
    min-width: 220px;
  }
  #bar-panel h3 {
    color: #f0c040;
    font-size: 13px;
    margin-bottom: 8px;
  }
  .bar-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 4px;
    font-size: 12px;
  }
  .bar-label { width: 110px; color: #ccc; }
  .bar-track {
    flex: 1;
    height: 14px;
    background: #0f0f23;
    border-radius: 3px;
    overflow: hidden;
    position: relative;
  }
  .bar-fill {
    height: 100%;
    border-radius: 3px;
    transition: width 0.3s;
  }
  .bar-pct { width: 36px; text-align: right; color: #aaa; }

  /* Legend */
  #legend {
    position: absolute;
    bottom: 16px;
    left: 16px;
    z-index: 10;
    background: rgba(22, 33, 62, 0.92);
    border: 1px solid #333;
    border-radius: 8px;
    padding: 12px 16px;
  }
  #legend h3 {
    color: #f0c040;
    font-size: 13px;
    margin-bottom: 8px;
  }
  .legend-section { margin-bottom: 8px; }
  .legend-section:last-child { margin-bottom: 0; }
  .legend-title { color: #888; font-size: 10px; text-transform: uppercase; margin-bottom: 4px; }
  .legend-items { display: flex; flex-wrap: wrap; gap: 6px 12px; }
  .legend-item {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 11px;
    color: #ccc;
  }
  .legend-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .legend-rect {
    width: 14px;
    height: 10px;
    border-radius: 2px;
    flex-shrink: 0;
    border: 1.5px solid;
  }

  /* Cluster labels */
  #cluster-labels {
    position: absolute;
    bottom: 16px;
    right: 16px;
    z-index: 10;
    background: rgba(22, 33, 62, 0.92);
    border: 1px solid #333;
    border-radius: 8px;
    padding: 12px 16px;
    max-width: 240px;
  }
  #cluster-labels h3 {
    color: #f0c040;
    font-size: 13px;
    margin-bottom: 8px;
  }

  /* Tooltip */
  #tooltip {
    position: absolute;
    z-index: 100;
    background: rgba(16, 16, 36, 0.96);
    border: 1px solid #555;
    border-radius: 8px;
    padding: 12px 16px;
    max-width: 380px;
    font-size: 12px;
    line-height: 1.5;
    pointer-events: none;
    display: none;
    box-shadow: 0 4px 20px rgba(0,0,0,0.5);
  }
  #tooltip .tt-id { color: #f0c040; font-weight: bold; font-size: 14px; }
  #tooltip .tt-type { display: inline-block; padding: 1px 6px; border-radius: 3px; color: white; font-size: 10px; font-weight: bold; margin-left: 6px; }
  #tooltip .tt-situation { color: #bbb; margin: 6px 0; }
  #tooltip .tt-section { margin-top: 6px; }
  #tooltip .tt-label { color: #888; font-size: 10px; text-transform: uppercase; }
  #tooltip .tt-tags { display: flex; flex-wrap: wrap; gap: 3px; margin-top: 2px; }
  #tooltip .tt-tag-entity { background: #1a3d5c; padding: 1px 5px; border-radius: 2px; font-size: 10px; }
  #tooltip .tt-tag-topic { background: #3d1a5c; padding: 1px 5px; border-radius: 2px; font-size: 10px; }
  #tooltip .tt-bars { color: #7fdbca; margin-top: 4px; }
  #tooltip .tt-refs { color: #f0c040; margin-top: 4px; }
  #tooltip .tt-broken { color: #e74c3c; }

  /* Controls */
  #controls {
    position: absolute;
    top: 80px;
    left: 16px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  #controls button {
    background: rgba(22, 33, 62, 0.92);
    border: 1px solid #444;
    border-radius: 4px;
    color: #ccc;
    padding: 4px 10px;
    font-size: 11px;
    font-family: inherit;
    cursor: pointer;
  }
  #controls button:hover { background: #2a2a4e; border-color: #666; }
  #controls button.active { border-color: #f0c040; color: #f0c040; }

  /* Search */
  #search-box {
    position: absolute;
    top: 80px;
    right: 16px;
    z-index: 10;
  }
  #search-input {
    background: rgba(22, 33, 62, 0.92);
    border: 1px solid #444;
    border-radius: 4px;
    color: #e0e0e0;
    padding: 5px 10px;
    font-size: 12px;
    font-family: inherit;
    width: 200px;
    outline: none;
  }
  #search-input:focus { border-color: #f0c040; }
  #search-input::placeholder { color: #666; }
</style>
</head>
<body>
<div id="graph-container">
  <div id="header">
    <h1>Event Map -- ${events.length} events</h1>
    <p>${new Set(events.map((e) => e.file)).size} source files | ${edges.length} references | ${brokenRefs.length} broken</p>
  </div>

  <div id="bar-panel">
    <h3>Bar Imbalance</h3>
  </div>

  <div id="controls">
    <button id="btn-reset">Reset Zoom</button>
    <button id="btn-labels" class="active">Labels</button>
    <button id="btn-broken">Broken Refs</button>
  </div>

  <div id="search-box">
    <input id="search-input" type="text" placeholder="Search events..." />
  </div>

  <div id="legend">
    <h3>Legend</h3>
    <div class="legend-section">
      <div class="legend-title">Event Type (node color)</div>
      <div class="legend-items">
        <div class="legend-item"><div class="legend-dot" style="background:#e74c3c"></div>Crisis</div>
        <div class="legend-item"><div class="legend-dot" style="background:#3498db"></div>Report</div>
        <div class="legend-item"><div class="legend-dot" style="background:#e67e22"></div>Consequence</div>
        <div class="legend-item"><div class="legend-dot" style="background:#2ecc71"></div>Preparation</div>
      </div>
    </div>
    <div class="legend-section">
      <div class="legend-title">Node size = bars affected (1-4)</div>
    </div>
    <div class="legend-section">
      <div class="legend-title">Cluster (outline color)</div>
      <div class="legend-items" id="cluster-legend-items"></div>
    </div>
  </div>

  <div id="tooltip"></div>

  <svg id="graph-svg"></svg>
</div>

<script src="https://d3js.org/d3.v7.min.js"></script>
<script>
(function() {
  const DATA = ${graphData};
  const { nodes, edges, clusterSet, clusterColors, barData, brokenRefs } = DATA;

  // -- Bar panel --
  const barPanel = document.getElementById('bar-panel');
  const barColorMap = { pol: '#e74c3c', int: '#3498db', saf: '#2ecc71', alg: '#e67e22' };
  barData.forEach(b => {
    const row = document.createElement('div');
    row.className = 'bar-row';
    row.innerHTML =
      '<span class="bar-label">' + b.name + '</span>' +
      '<div class="bar-track"><div class="bar-fill" style="width:' + b.pct + '%;background:' + barColorMap[b.key] + '"></div></div>' +
      '<span class="bar-pct">' + b.pct + '%</span>';
    barPanel.appendChild(row);
  });

  // -- Cluster legend --
  const clLegend = document.getElementById('cluster-legend-items');
  clusterSet.forEach(c => {
    const col = clusterColors[c] || '#888';
    const item = document.createElement('div');
    item.className = 'legend-item';
    item.innerHTML = '<div class="legend-rect" style="border-color:' + col + ';background:transparent"></div>' + c;
    clLegend.appendChild(item);
  });

  // -- Dimensions --
  const W = window.innerWidth;
  const H = window.innerHeight;

  const svg = d3.select('#graph-svg')
    .attr('width', W)
    .attr('height', H);

  // Arrow marker for directed edges
  const defs = svg.append('defs');
  defs.append('marker')
    .attr('id', 'arrow')
    .attr('viewBox', '0 0 10 6')
    .attr('refX', 10)
    .attr('refY', 3)
    .attr('markerWidth', 8)
    .attr('markerHeight', 6)
    .attr('orient', 'auto')
    .append('path')
    .attr('d', 'M0,0 L10,3 L0,6')
    .attr('fill', '#555');

  defs.append('marker')
    .attr('id', 'arrow-broken')
    .attr('viewBox', '0 0 10 6')
    .attr('refX', 10)
    .attr('refY', 3)
    .attr('markerWidth', 8)
    .attr('markerHeight', 6)
    .attr('orient', 'auto')
    .append('path')
    .attr('d', 'M0,0 L10,3 L0,6')
    .attr('fill', '#e74c3c');

  defs.append('marker')
    .attr('id', 'arrow-highlight')
    .attr('viewBox', '0 0 10 6')
    .attr('refX', 10)
    .attr('refY', 3)
    .attr('markerWidth', 8)
    .attr('markerHeight', 6)
    .attr('orient', 'auto')
    .append('path')
    .attr('d', 'M0,0 L10,3 L0,6')
    .attr('fill', '#f0c040');

  // Container for zoom/pan
  const g = svg.append('g');

  const zoom = d3.zoom()
    .scaleExtent([0.1, 6])
    .on('zoom', (event) => g.attr('transform', event.transform));
  svg.call(zoom);

  // Type color
  const typeColor = (t) => {
    switch(t) {
      case 'crisis': return '#e74c3c';
      case 'report': return '#3498db';
      case 'consequence': return '#e67e22';
      case 'preparation': return '#2ecc71';
      default: return '#e74c3c';
    }
  };

  // Node radius based on bar count (min 6, max 18)
  const nodeRadius = (d) => 6 + (d.barCount || 0) * 3;

  // Cluster center positions (arranged in a circle)
  const clusterAngle = {};
  clusterSet.forEach((c, i) => {
    const angle = (2 * Math.PI * i) / clusterSet.length - Math.PI / 2;
    clusterAngle[c] = angle;
  });
  const clusterRadius = Math.min(W, H) * 0.28;

  // Create a node map for edge lookups (including broken ref ghost nodes)
  const nodeMap = new Map(nodes.map(n => [n.id, n]));

  // Add ghost nodes for broken ref targets so edges can be drawn
  const ghostNodes = [];
  for (const br of brokenRefs) {
    if (!nodeMap.has(br.to)) {
      const ghost = {
        id: br.to,
        type: 'ghost',
        rawType: 'ghost',
        cluster: 'untagged',
        entities: [],
        topics: [],
        situation: '(missing event)',
        bars: '',
        barCount: 0,
        refs: [],
        file: '',
        isOrphan: false,
        isGhost: true,
      };
      ghostNodes.push(ghost);
      nodeMap.set(br.to, ghost);
    }
  }
  const allNodes = [...nodes, ...ghostNodes];

  // Force simulation
  const simulation = d3.forceSimulation(allNodes)
    .force('link', d3.forceLink(edges).id(d => d.id).distance(80).strength(0.3))
    .force('charge', d3.forceManyBody().strength(-200).distanceMax(400))
    .force('center', d3.forceCenter(W / 2, H / 2).strength(0.05))
    .force('cluster', (alpha) => {
      allNodes.forEach(d => {
        const angle = clusterAngle[d.cluster] || 0;
        const cx = W / 2 + Math.cos(angle) * clusterRadius;
        const cy = H / 2 + Math.sin(angle) * clusterRadius;
        d.vx += (cx - d.x) * alpha * 0.08;
        d.vy += (cy - d.y) * alpha * 0.08;
      });
    })
    .force('collision', d3.forceCollide().radius(d => nodeRadius(d) + 3));

  // Draw edges
  const linkG = g.append('g').attr('class', 'links');
  const link = linkG.selectAll('line')
    .data(edges)
    .join('line')
    .attr('stroke', d => d.broken ? '#e74c3c' : '#444')
    .attr('stroke-width', d => d.broken ? 1 : 1.2)
    .attr('stroke-dasharray', d => d.broken ? '4,3' : 'none')
    .attr('stroke-opacity', d => d.broken ? 0.4 : 0.5)
    .attr('marker-end', d => d.broken ? 'url(#arrow-broken)' : 'url(#arrow)');

  // Initially hide broken refs
  let showBroken = false;
  link.filter(d => d.broken).style('display', 'none');

  // Draw cluster background labels
  const clusterLabelG = g.append('g').attr('class', 'cluster-labels');
  clusterSet.forEach(c => {
    const angle = clusterAngle[c] || 0;
    const cx = W / 2 + Math.cos(angle) * clusterRadius * 1.35;
    const cy = H / 2 + Math.sin(angle) * clusterRadius * 1.35;
    clusterLabelG.append('text')
      .attr('x', cx)
      .attr('y', cy)
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'central')
      .attr('fill', clusterColors[c] || '#888')
      .attr('font-size', '14px')
      .attr('font-weight', 'bold')
      .attr('font-family', 'inherit')
      .attr('opacity', 0.4)
      .text(c.toUpperCase());
  });

  // Draw nodes
  const nodeG = g.append('g').attr('class', 'nodes');
  const node = nodeG.selectAll('g')
    .data(allNodes)
    .join('g')
    .attr('class', 'node')
    .call(d3.drag()
      .on('start', dragStarted)
      .on('drag', dragged)
      .on('end', dragEnded));

  // Circle for each node
  node.append('circle')
    .attr('r', d => nodeRadius(d))
    .attr('fill', d => d.isGhost ? '#333' : typeColor(d.type))
    .attr('stroke', d => clusterColors[d.cluster] || '#888')
    .attr('stroke-width', d => d.isGhost ? 1 : 2)
    .attr('stroke-dasharray', d => d.isGhost ? '2,2' : 'none')
    .attr('opacity', d => d.isGhost ? 0.3 : 0.85);

  // Labels
  let showLabels = true;
  const labels = node.append('text')
    .text(d => d.id.replace('#', '').replace(/--/g, '/'))
    .attr('x', d => nodeRadius(d) + 4)
    .attr('y', 3)
    .attr('fill', '#aaa')
    .attr('font-size', '9px')
    .attr('font-family', 'inherit')
    .style('pointer-events', 'none');

  // Tooltip
  const tooltip = document.getElementById('tooltip');

  node.on('mouseenter', (event, d) => {
    if (d.isGhost) {
      tooltip.innerHTML =
        '<span class="tt-id">' + d.id + '</span>' +
        '<span class="tt-type tt-broken" style="background:#e74c3c">MISSING</span>' +
        '<div class="tt-situation" style="color:#e74c3c">This event is referenced but not defined in any file.</div>';
    } else {
      const entityTags = d.entities.map(e => '<span class="tt-tag-entity">' + e + '</span>').join('');
      const topicTags = d.topics.map(t => '<span class="tt-tag-topic">' + t + '</span>').join('');
      const refsList = d.refs.length > 0
        ? '<div class="tt-refs">Refs: ' + d.refs.join(', ') + '</div>'
        : '';
      tooltip.innerHTML =
        '<span class="tt-id">' + d.id + '</span>' +
        '<span class="tt-type" style="background:' + typeColor(d.type) + '">' + d.rawType + '</span>' +
        '<div class="tt-situation">' + d.situation.slice(0, 300) + (d.situation.length > 300 ? '...' : '') + '</div>' +
        '<div class="tt-section"><span class="tt-label">Entities</span><div class="tt-tags">' + entityTags + '</div></div>' +
        '<div class="tt-section"><span class="tt-label">Topics</span><div class="tt-tags">' + topicTags + '</div></div>' +
        (d.bars ? '<div class="tt-bars">Bars: ' + d.bars + '</div>' : '') +
        refsList +
        '<div style="color:#666;font-size:10px;margin-top:4px">' + d.file + '</div>';
    }
    tooltip.style.display = 'block';

    // Highlight connected edges
    link.attr('stroke', l => {
      const sid = typeof l.source === 'object' ? l.source.id : l.source;
      const tid = typeof l.target === 'object' ? l.target.id : l.target;
      if (sid === d.id || tid === d.id) return '#f0c040';
      return l.broken ? '#e74c3c' : '#444';
    }).attr('stroke-opacity', l => {
      const sid = typeof l.source === 'object' ? l.source.id : l.source;
      const tid = typeof l.target === 'object' ? l.target.id : l.target;
      if (sid === d.id || tid === d.id) return 1;
      return l.broken ? 0.4 : 0.5;
    }).attr('stroke-width', l => {
      const sid = typeof l.source === 'object' ? l.source.id : l.source;
      const tid = typeof l.target === 'object' ? l.target.id : l.target;
      if (sid === d.id || tid === d.id) return 2.5;
      return l.broken ? 1 : 1.2;
    }).attr('marker-end', l => {
      const sid = typeof l.source === 'object' ? l.source.id : l.source;
      const tid = typeof l.target === 'object' ? l.target.id : l.target;
      if (sid === d.id || tid === d.id) return 'url(#arrow-highlight)';
      return l.broken ? 'url(#arrow-broken)' : 'url(#arrow)';
    });

    // Dim non-connected nodes
    node.select('circle').attr('opacity', n => {
      if (n.id === d.id) return 1;
      const connected = edges.some(l => {
        const sid = typeof l.source === 'object' ? l.source.id : l.source;
        const tid = typeof l.target === 'object' ? l.target.id : l.target;
        return (sid === d.id && tid === n.id) || (tid === d.id && sid === n.id);
      });
      return connected ? 0.9 : (n.isGhost ? 0.1 : 0.2);
    });
  })
  .on('mousemove', (event) => {
    let tx = event.pageX + 14;
    let ty = event.pageY + 14;
    if (tx + 380 > W) tx = event.pageX - 394;
    if (ty + 200 > H) ty = event.pageY - 200;
    tooltip.style.left = tx + 'px';
    tooltip.style.top = ty + 'px';
  })
  .on('mouseleave', () => {
    tooltip.style.display = 'none';
    // Reset highlights
    link.attr('stroke', d => d.broken ? '#e74c3c' : '#444')
      .attr('stroke-opacity', d => d.broken ? 0.4 : 0.5)
      .attr('stroke-width', d => d.broken ? 1 : 1.2)
      .attr('marker-end', d => d.broken ? 'url(#arrow-broken)' : 'url(#arrow)');
    node.select('circle').attr('opacity', d => d.isGhost ? 0.3 : 0.85);
  });

  // Tick
  simulation.on('tick', () => {
    link
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => {
        const dx = d.target.x - d.source.x;
        const dy = d.target.y - d.source.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        return d.target.x - (dx / dist) * nodeRadius(d.target);
      })
      .attr('y2', d => {
        const dx = d.target.x - d.source.x;
        const dy = d.target.y - d.source.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        return d.target.y - (dy / dist) * nodeRadius(d.target);
      });

    node.attr('transform', d => 'translate(' + d.x + ',' + d.y + ')');
  });

  // Drag handlers
  function dragStarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }
  function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }
  function dragEnded(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }

  // Controls
  document.getElementById('btn-reset').addEventListener('click', () => {
    svg.transition().duration(500).call(zoom.transform, d3.zoomIdentity);
  });

  document.getElementById('btn-labels').addEventListener('click', function() {
    showLabels = !showLabels;
    labels.style('display', showLabels ? 'block' : 'none');
    this.classList.toggle('active', showLabels);
  });

  document.getElementById('btn-broken').addEventListener('click', function() {
    showBroken = !showBroken;
    link.filter(d => d.broken).style('display', showBroken ? 'block' : 'none');
    node.filter(d => d.isGhost).style('display', showBroken ? 'block' : 'none');
    this.classList.toggle('active', showBroken);
  });

  // Search
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase().trim();
    if (!q) {
      node.select('circle').attr('opacity', d => d.isGhost ? 0.3 : 0.85);
      labels.attr('fill', '#aaa');
      return;
    }
    node.select('circle').attr('opacity', d => {
      const match = d.id.toLowerCase().includes(q)
        || d.entities.some(e => e.toLowerCase().includes(q))
        || d.topics.some(t => t.toLowerCase().includes(q))
        || d.situation.toLowerCase().includes(q)
        || d.cluster.toLowerCase().includes(q);
      return match ? 1 : 0.08;
    });
    labels.attr('fill', function(d) {
      const match = d.id.toLowerCase().includes(q)
        || d.entities.some(e => e.toLowerCase().includes(q))
        || d.topics.some(t => t.toLowerCase().includes(q))
        || d.situation.toLowerCase().includes(q)
        || d.cluster.toLowerCase().includes(q);
      return match ? '#f0c040' : '#333';
    });
  });

  // Resize handler
  window.addEventListener('resize', () => {
    const nw = window.innerWidth;
    const nh = window.innerHeight;
    svg.attr('width', nw).attr('height', nh);
  });
})();
</script>
</body>
</html>`;

  const outPath = join(import.meta.dirname, "..", "public", "event-map.html");
  writeFileSync(outPath, html);
  console.log(`\nHTML written to ${outPath}`);
  return outPath;
}

// ── JSON Output ──────────────────────────────────────────────────────

function writeJson(events, analysis) {
  const outPath = join(DATA_DIR, "event-map.json");
  writeFileSync(outPath, JSON.stringify({ events, analysis }, null, 2));
  console.log(`\nJSON written to ${outPath}`);
  return outPath;
}

// ── Main ─────────────────────────────────────────────────────────────

const files = findEventFiles();
console.log(`Parsing ${files.length} event files...`);

const allEvents = [];
for (const f of files) {
  const events = parseEvents(f);
  console.log(`  ${f.split("/").pop()}: ${events.length} events`);
  allEvents.push(...events);
}

// Deduplicate by ID (keep first occurrence)
const seen = new Set();
const unique = [];
for (const e of allEvents) {
  if (!seen.has(e.id)) {
    seen.add(e.id);
    unique.push(e);
  } else {
    console.log(`  ⚠ Duplicate: ${e.id} (keeping first, from ${unique.find((u) => u.id === e.id).file})`);
  }
}

const analysis = analyze(unique);

const args = process.argv.slice(2);
if (args.includes("--html")) {
  writeHtml(unique, analysis);
} else if (args.includes("--json")) {
  writeJson(unique, analysis);
} else {
  printTerminal(unique, analysis);
}

if (args.includes("--html") || args.includes("--json")) {
  // Also print terminal summary
  printTerminal(unique, analysis);
}
