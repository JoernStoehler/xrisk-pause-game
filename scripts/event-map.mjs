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

// ── HTML Output (Interactive D3 Tripartite Force Graph) ───────────────

function writeHtml(events, analysis) {
  const { entityCounts, topicCounts, barMentions, brokenRefs } = analysis;

  // Normalize type (strip parenthetical suffixes like "crisis (chain starter)")
  const normalizeType = (t) => {
    const base = t.split("(")[0].trim();
    return ["crisis", "report", "consequence", "preparation"].includes(base) ? base : "crisis";
  };

  // Count bars affected per event
  const barsAffected = (e) => {
    let count = 0;
    for (const bar of ["pol", "int", "saf", "alg"]) {
      if (e.bars.includes(bar)) count++;
    }
    return count;
  };

  // ── Build tripartite graph: entity nodes, event nodes, topic nodes ──

  // 1. Entity nodes (unique entities across all events)
  const entityNodes = Object.entries(entityCounts).map(([name, count]) => ({
    id: "entity:" + name,
    label: name,
    nodeType: "entity",
    degree: count,
  }));

  // 2. Topic nodes (unique topics across all events)
  const topicNodes = Object.entries(topicCounts).map(([name, count]) => ({
    id: "topic:" + name,
    label: name,
    nodeType: "topic",
    degree: count,
  }));

  // 3. Event nodes
  const eventNodes = events.map((e) => ({
    id: "event:" + e.id,
    label: e.id.replace("#", ""),
    nodeType: "event",
    eventType: normalizeType(e.type),
    rawType: e.type,
    entities: e.entities,
    topics: e.topics,
    situation: e.situation,
    bars: e.bars,
    barCount: barsAffected(e),
    refs: e.refs,
    file: e.file,
    degree: e.entities.length + e.topics.length + e.refs.length,
  }));

  const allNodes = [...entityNodes, ...eventNodes, ...topicNodes];

  // 4. Edges: entity->event, event->topic
  const edges = [];
  for (const e of events) {
    const eventId = "event:" + e.id;
    for (const ent of e.entities) {
      edges.push({ source: "entity:" + ent, target: eventId, edgeType: "entity-event" });
    }
    for (const t of e.topics) {
      edges.push({ source: eventId, target: "topic:" + t, edgeType: "event-topic" });
    }
  }

  // Bar imbalance data
  const barNames = { pol: "Political Power", int: "Intelligence", saf: "Safety Progress", alg: "Algorithmic Prog" };
  const barData = Object.entries(barMentions)
    .sort((a, b) => b[1] - a[1])
    .map(([b, c]) => ({ key: b, name: barNames[b], count: c, pct: Math.round((c / events.length) * 100) }));

  const graphData = JSON.stringify({ nodes: allNodes, edges, barData });

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Event Map -- ${events.length} events (tripartite)</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #f8f9fa;
    color: #212529;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
  }
  #graph-container {
    width: 100%;
    height: 100%;
    position: relative;
  }
  svg { display: block; background: #ffffff; }

  /* Panels share a common look */
  .panel {
    position: absolute;
    z-index: 10;
    background: #ffffff;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    padding: 12px 16px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.08);
  }
  .panel h3 {
    color: #212529;
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  /* Top-left header */
  #header {
    position: absolute;
    top: 16px;
    left: 16px;
    z-index: 10;
    pointer-events: none;
  }
  #header h1 {
    color: #212529;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 4px;
  }
  #header p {
    color: #6c757d;
    font-size: 12px;
  }

  /* Stats panel (top-right) */
  #stats-panel {
    top: 16px;
    right: 16px;
    min-width: 240px;
  }
  .stat-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 4px;
    font-size: 12px;
  }
  .stat-label { width: 120px; color: #495057; }
  .stat-value { font-weight: 600; color: #212529; }
  .bar-track {
    flex: 1;
    height: 12px;
    background: #e9ecef;
    border-radius: 3px;
    overflow: hidden;
  }
  .bar-fill {
    height: 100%;
    border-radius: 3px;
  }
  .bar-pct { width: 36px; text-align: right; color: #6c757d; font-size: 11px; }

  /* Legend (bottom-left) */
  #legend {
    bottom: 16px;
    left: 16px;
  }
  .legend-section { margin-bottom: 8px; }
  .legend-section:last-child { margin-bottom: 0; }
  .legend-title { color: #6c757d; font-size: 10px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
  .legend-items { display: flex; flex-wrap: wrap; gap: 6px 14px; }
  .legend-item {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 11px;
    color: #495057;
  }
  .legend-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  /* Tooltip */
  #tooltip {
    position: absolute;
    z-index: 100;
    background: #ffffff;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    padding: 12px 16px;
    max-width: 380px;
    font-size: 12px;
    line-height: 1.5;
    pointer-events: none;
    display: none;
    box-shadow: 0 4px 16px rgba(0,0,0,0.12);
    color: #212529;
  }
  #tooltip .tt-id { color: #212529; font-weight: 700; font-size: 14px; }
  #tooltip .tt-type-badge { display: inline-block; padding: 1px 6px; border-radius: 3px; color: white; font-size: 10px; font-weight: 600; margin-left: 6px; }
  #tooltip .tt-desc { color: #495057; margin: 6px 0; }
  #tooltip .tt-section { margin-top: 6px; }
  #tooltip .tt-label { color: #6c757d; font-size: 10px; text-transform: uppercase; }
  #tooltip .tt-tags { display: flex; flex-wrap: wrap; gap: 3px; margin-top: 2px; }
  #tooltip .tt-tag-entity { background: #dbeafe; color: #1e40af; padding: 1px 5px; border-radius: 2px; font-size: 10px; }
  #tooltip .tt-tag-topic { background: #dcfce7; color: #166534; padding: 1px 5px; border-radius: 2px; font-size: 10px; }
  #tooltip .tt-bars { color: #0d9488; margin-top: 4px; }

  /* Controls */
  #controls {
    position: absolute;
    top: 116px;
    left: 16px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  #controls button {
    background: #ffffff;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    color: #495057;
    padding: 4px 10px;
    font-size: 11px;
    font-family: inherit;
    cursor: pointer;
  }
  #controls button:hover { background: #f1f3f5; border-color: #adb5bd; }
  #controls button.active { border-color: #3b82f6; color: #3b82f6; font-weight: 600; }

  /* Search */
  #search-box {
    position: absolute;
    top: 80px;
    left: 16px;
    z-index: 10;
  }
  #search-input {
    background: #ffffff;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    color: #212529;
    padding: 5px 10px;
    font-size: 12px;
    font-family: inherit;
    width: 200px;
    outline: none;
  }
  #search-input:focus { border-color: #3b82f6; box-shadow: 0 0 0 2px rgba(59,130,246,0.15); }
  #search-input::placeholder { color: #adb5bd; }

  /* Copy toast */
  #copy-toast {
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    background: #1e293b;
    color: #f8fafc;
    padding: 6px 16px;
    border-radius: 6px;
    font-size: 12px;
    z-index: 100;
    opacity: 0;
    transition: opacity 0.2s;
    pointer-events: none;
  }
  #copy-toast.show { opacity: 1; }
</style>
</head>
<body>
<div id="graph-container">
  <div id="header">
    <h1>Event Map -- Tripartite Graph</h1>
    <p>${events.length} events | ${Object.keys(entityCounts).length} entities | ${Object.keys(topicCounts).length} topics</p>
  </div>

  <div id="stats-panel" class="panel">
    <h3>Summary</h3>
    <div class="stat-row">
      <span class="stat-label">Entity nodes</span>
      <span class="stat-value">${entityNodes.length}</span>
    </div>
    <div class="stat-row">
      <span class="stat-label">Event nodes</span>
      <span class="stat-value">${eventNodes.length}</span>
    </div>
    <div class="stat-row">
      <span class="stat-label">Topic nodes</span>
      <span class="stat-value">${topicNodes.length}</span>
    </div>
    <div class="stat-row">
      <span class="stat-label">Total edges</span>
      <span class="stat-value">${edges.length}</span>
    </div>
    <div style="margin-top:8px">
      <div class="legend-title">Bar Coverage</div>
    </div>
  </div>

  <div id="controls">
    <button id="btn-reset">Reset Zoom</button>
    <button id="btn-labels" class="active">Labels</button>
    <button id="btn-stubs">Hide Stubs</button>
  </div>

  <div id="copy-toast">Copied!</div>

  <div id="search-box">
    <input id="search-input" type="text" placeholder="Search nodes..." />
  </div>

  <div id="legend" class="panel">
    <h3>Legend</h3>
    <div class="legend-section">
      <div class="legend-title">Node Type</div>
      <div class="legend-items">
        <div class="legend-item"><div class="legend-dot" style="background:#3b82f6"></div>Entity</div>
        <div class="legend-item"><div class="legend-dot" style="background:#f97316"></div>Event</div>
        <div class="legend-item"><div class="legend-dot" style="background:#22c55e"></div>Topic</div>
      </div>
    </div>
    <div class="legend-section">
      <div class="legend-title">Entity/topic size = connection count</div>
    </div>
  </div>

  <div id="tooltip"></div>

  <svg id="graph-svg"></svg>
</div>

<script src="https://d3js.org/d3.v7.min.js"></script>
<script>
(function() {
  const DATA = ${graphData};
  const { nodes, edges, barData } = DATA;

  // ── Bar coverage in stats panel ──
  const statsPanel = document.getElementById('stats-panel');
  const barColorMap = { pol: '#ef4444', int: '#3b82f6', saf: '#22c55e', alg: '#f97316' };
  barData.forEach(function(b) {
    var row = document.createElement('div');
    row.className = 'stat-row';
    row.innerHTML =
      '<span class="stat-label">' + b.name + '</span>' +
      '<div class="bar-track"><div class="bar-fill" style="width:' + b.pct + '%;background:' + barColorMap[b.key] + '"></div></div>' +
      '<span class="bar-pct">' + b.pct + '%</span>';
    statsPanel.appendChild(row);
  });

  // ── Dimensions ──
  var W = window.innerWidth;
  var H = window.innerHeight;

  var svg = d3.select('#graph-svg')
    .attr('width', W)
    .attr('height', H);

  // ── Pre-compute adjacency maps for O(1) hover lookups ──
  // neighborIds: nodeId -> Set of connected node IDs
  // nodeEdgeIndices: nodeId -> Set of edge indices in the edges array
  var neighborIds = new Map();
  var nodeEdgeIndices = new Map();

  // Initialize sets for all nodes
  nodes.forEach(function(n) {
    neighborIds.set(n.id, new Set());
    nodeEdgeIndices.set(n.id, new Set());
  });

  edges.forEach(function(e, i) {
    var sid = e.source;
    var tid = e.target;
    if (neighborIds.has(sid)) {
      neighborIds.get(sid).add(tid);
      nodeEdgeIndices.get(sid).add(i);
    }
    if (neighborIds.has(tid)) {
      neighborIds.get(tid).add(sid);
      nodeEdgeIndices.get(tid).add(i);
    }
  });

  // ── Node color by type ──
  var nodeColor = function(d) {
    switch (d.nodeType) {
      case 'entity': return '#3b82f6';
      case 'event': return '#f97316';
      case 'topic': return '#22c55e';
      default: return '#6c757d';
    }
  };

  // ── Node radius ──
  // Entities/topics: sized by degree (connection count), min 4 max 16
  // Events: uniform size 6
  var nodeRadius = function(d) {
    if (d.nodeType === 'event') return 6;
    var deg = d.degree || 1;
    return Math.max(4, Math.min(16, 3 + Math.sqrt(deg) * 2.5));
  };

  // ── Pre-compute layout synchronously — no timer, no requestAnimationFrame ──
  // alphaDecay(0.005) → forces fade to ~0 over ~1400 ticks (vs 300 with default 0.0228).
  // Gives enough time for 223 nodes to untangle while converging to true equilibrium.
  var simulation = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(edges).id(function(d) { return d.id; }).distance(80))
    .force('charge', d3.forceManyBody().strength(-150))
    .force('center', d3.forceCenter(W / 2, H / 2))
    .alphaDecay(0.005)
    .stop();
  for (var i = 0; i < 1500; i++) simulation.tick();

  // Container for zoom/pan
  var g = svg.append('g');

  var zoomBehavior = d3.zoom()
    .scaleExtent([0.1, 6])
    .on('zoom', function(event) { g.attr('transform', event.transform); });
  svg.call(zoomBehavior);
  svg.on('dblclick.zoom', null);

  // ── Draw edges (positions from pre-computed layout) ──
  var linkG = g.append('g').attr('class', 'links');
  var link = linkG.selectAll('line')
    .data(edges)
    .join('line')
    .attr('stroke', '#cbd5e1')
    .attr('stroke-width', 0.6)
    .attr('stroke-opacity', 0.3)
    .attr('x1', function(d) { return d.source.x; })
    .attr('y1', function(d) { return d.source.y; })
    .attr('x2', function(d) { return d.target.x; })
    .attr('y2', function(d) { return d.target.y; });

  // ── Draw nodes (positions from pre-computed layout) ──
  var nodeG = g.append('g').attr('class', 'nodes');
  var node = nodeG.selectAll('g')
    .data(nodes)
    .join('g')
    .attr('class', 'node')
    .attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; })
    .call(d3.drag()
      .on('start', function(event, d) { isDragging = true; wasDragged = false; })
      .on('drag', function(event, d) {
        wasDragged = true;
        d.x = event.x; d.y = event.y;
        d3.select(this).attr('transform', 'translate(' + event.x + ',' + event.y + ')');
        var connected = nodeEdgeMap.get(d.id) || [];
        for (var i = 0; i < connected.length; i++) {
          var el = linkElements[connected[i].idx];
          if (connected[i].role === 'source') { el.setAttribute('x1', event.x); el.setAttribute('y1', event.y); }
          else { el.setAttribute('x2', event.x); el.setAttribute('y2', event.y); }
        }
      })
      .on('end', function() {
        isDragging = false;
        // Reset wasDragged after a tick so the click handler sees it, then clears it
        setTimeout(function() { wasDragged = false; }, 0);
        // Clean up tooltip/highlight in case cursor ended outside the node
        tooltip.style.display = 'none';
        highlightedNode = null;
        resetHighlight();
      }));

  // Circle for each node
  node.append('circle')
    .attr('r', function(d) { return nodeRadius(d); })
    .attr('fill', function(d) { return nodeColor(d); })
    .attr('stroke', function(d) {
      switch (d.nodeType) {
        case 'entity': return '#1e40af';
        case 'event': return '#c2410c';
        case 'topic': return '#15803d';
        default: return '#4b5563';
      }
    })
    .attr('stroke-width', 1.2)
    .attr('opacity', 0.9);

  // Labels — only show for entities and topics by default (events are too dense)
  var showLabels = true;
  var labels = node.append('text')
    .text(function(d) { return d.label.replace(/#/g, '').replace(/--/g, ' '); })
    .attr('x', function(d) { return nodeRadius(d) + 4; })
    .attr('y', 3)
    .attr('fill', function(d) { return d.nodeType === 'event' ? '#9ca3af' : '#374151'; })
    .attr('font-size', function(d) { return d.nodeType === 'event' ? '7px' : '9px'; })
    .attr('font-weight', function(d) { return d.nodeType === 'event' ? 'normal' : '500'; })
    .attr('font-family', 'inherit')
    .style('pointer-events', 'none');

  // ── Tooltip ──
  var tooltip = document.getElementById('tooltip');

  // ── Highlight helpers ──
  var highlightedNode = null;
  var edgeElements = link.nodes();
  var isDragging = false;
  var wasDragged = false;

  // Pre-compute edge connections per node for drag
  var nodeEdgeMap = new Map();
  var linkElements = link.nodes();
  nodes.forEach(function(n) { nodeEdgeMap.set(n.id, []); });
  edges.forEach(function(e, i) {
    var sid = typeof e.source === 'object' ? e.source.id : e.source;
    var tid = typeof e.target === 'object' ? e.target.id : e.target;
    if (nodeEdgeMap.has(sid)) nodeEdgeMap.get(sid).push({ idx: i, role: 'source' });
    if (nodeEdgeMap.has(tid)) nodeEdgeMap.get(tid).push({ idx: i, role: 'target' });
  });

  function resetHighlight() {
    var q = searchInput ? searchInput.value.toLowerCase().trim() : '';
    if (q) {
      // Restore search state instead of default
      var matchingIds = new Set();
      nodes.forEach(function(d) {
        var match = d.label.toLowerCase().includes(q)
          || d.id.toLowerCase().includes(q)
          || (d.entities && d.entities.some(function(e) { return e.toLowerCase().includes(q); }))
          || (d.topics && d.topics.some(function(t) { return t.toLowerCase().includes(q); }))
          || (d.situation && d.situation.toLowerCase().includes(q));
        if (match) matchingIds.add(d.id);
      });
      node.select('circle').attr('opacity', function(d) { return matchingIds.has(d.id) ? 1 : 0.05; });
      edgeElements.forEach(function(el, idx) {
        var e = edges[idx];
        var sid = typeof e.source === 'object' ? e.source.id : e.source;
        var tid = typeof e.target === 'object' ? e.target.id : e.target;
        var connected = matchingIds.has(sid) || matchingIds.has(tid);
        el.setAttribute('stroke', '#cbd5e1');
        el.setAttribute('stroke-opacity', connected ? '0.5' : '0.05');
        el.setAttribute('stroke-width', '0.6');
      });
    } else {
      edgeElements.forEach(function(el) {
        el.setAttribute('stroke', '#cbd5e1');
        el.setAttribute('stroke-opacity', '0.3');
        el.setAttribute('stroke-width', '0.6');
      });
      node.select('circle').attr('opacity', 0.9);
    }
  }

  node.on('mouseenter', function(event, d) {
    if (isDragging) return;

    // Show tooltip on hover
    if (d.nodeType === 'entity') {
      tooltip.innerHTML =
        '<span class="tt-id">' + d.label + '</span>' +
        '<span class="tt-type-badge" style="background:#3b82f6">ENTITY</span>' +
        '<div class="tt-desc">Appears in ' + d.degree + ' event(s)</div>';
    } else if (d.nodeType === 'topic') {
      tooltip.innerHTML =
        '<span class="tt-id">' + d.label + '</span>' +
        '<span class="tt-type-badge" style="background:#22c55e">TOPIC</span>' +
        '<div class="tt-desc">Appears in ' + d.degree + ' event(s)</div>';
    } else {
      var entityTags = (d.entities || []).map(function(e) { return '<span class="tt-tag-entity">' + e + '</span>'; }).join('');
      var topicTags = (d.topics || []).map(function(t) { return '<span class="tt-tag-topic">' + t + '</span>'; }).join('');
      tooltip.innerHTML =
        '<span class="tt-id">' + d.label + '</span>' +
        '<span class="tt-type-badge" style="background:#f97316">' + (d.rawType || 'event') + '</span>' +
        '<div class="tt-desc">' + (d.situation || '').slice(0, 300) + ((d.situation || '').length > 300 ? '...' : '') + '</div>' +
        (entityTags ? '<div class="tt-section"><span class="tt-label">Entities</span><div class="tt-tags">' + entityTags + '</div></div>' : '') +
        (topicTags ? '<div class="tt-section"><span class="tt-label">Topics</span><div class="tt-tags">' + topicTags + '</div></div>' : '') +
        (d.bars ? '<div class="tt-bars">Bars: ' + d.bars + '</div>' : '') +
        (d.file ? '<div style="color:#6c757d;font-size:10px;margin-top:4px">' + d.file + '</div>' : '');
    }
    tooltip.style.display = 'block';
    highlightedNode = d.id;

    // O(1) adjacency lookup: get connected edge indices and neighbor IDs
    var connectedEdges = nodeEdgeIndices.get(d.id) || new Set();
    var neighbors = neighborIds.get(d.id) || new Set();

    // Highlight connected edges, dim others
    edgeElements.forEach(function(el, idx) {
      if (connectedEdges.has(idx)) {
        el.setAttribute('stroke', '#2563eb');
        el.setAttribute('stroke-opacity', '0.7');
        el.setAttribute('stroke-width', '1.5');
      } else {
        el.setAttribute('stroke-opacity', '0.05');
      }
    });

    // Dim non-connected nodes
    node.select('circle').attr('opacity', function(n) {
      if (n.id === d.id) return 1;
      return neighbors.has(n.id) ? 0.9 : 0.08;
    });
  })
  .on('mousemove', function(event) {
    var tw = tooltip.offsetWidth || 380;
    var th = tooltip.offsetHeight || 200;
    var tx = event.pageX + 14;
    var ty = event.pageY + 14;
    if (tx + tw > W) tx = event.pageX - tw - 14;
    if (ty + th > H) ty = event.pageY - th - 14;
    if (ty < 0) ty = 8;
    tooltip.style.left = tx + 'px';
    tooltip.style.top = ty + 'px';
  })
  .on('mouseleave', function() {
    if (isDragging) return;
    tooltip.style.display = 'none';
    highlightedNode = null;
    resetHighlight();
  });

  // ── Click to copy node ID ──
  var copyToast = document.getElementById('copy-toast');
  var copyTimeout = null;
  node.on('click', function(event, d) {
    if (wasDragged) return; // Don't copy after drag
    event.stopPropagation();
    navigator.clipboard.writeText(d.id).then(function() {
      copyToast.textContent = 'Copied: ' + d.id;
      copyToast.classList.add('show');
      clearTimeout(copyTimeout);
      copyTimeout = setTimeout(function() { copyToast.classList.remove('show'); }, 1500);
    }).catch(function() {
      // Clipboard unavailable (HTTP or permissions) — show ID in toast so user can copy manually
      copyToast.textContent = d.id;
      copyToast.classList.add('show');
      clearTimeout(copyTimeout);
      copyTimeout = setTimeout(function() { copyToast.classList.remove('show'); }, 3000);
    });
  });

  // ── Controls ──
  document.getElementById('btn-reset').addEventListener('click', function() {
    svg.transition().duration(500).call(zoomBehavior.transform, d3.zoomIdentity);
  });

  document.getElementById('btn-labels').addEventListener('click', function() {
    showLabels = !showLabels;
    labels.style('display', showLabels ? null : 'none');
    this.classList.toggle('active', showLabels);
  });

  // ── Hide stubs (entities/topics with only 1 edge) ──
  var stubsHidden = false;
  var stubNodeIds = new Set();
  nodes.forEach(function(n) {
    if (n.nodeType !== 'event') {
      var deg = (neighborIds.get(n.id) || new Set()).size;
      if (deg <= 1) stubNodeIds.add(n.id);
    }
  });
  // Pre-compute which edges connect to stub nodes
  var stubEdgeIndices = new Set();
  edges.forEach(function(e, i) {
    var sid = typeof e.source === 'object' ? e.source.id : e.source;
    var tid = typeof e.target === 'object' ? e.target.id : e.target;
    if (stubNodeIds.has(sid) || stubNodeIds.has(tid)) stubEdgeIndices.add(i);
  });

  document.getElementById('btn-stubs').addEventListener('click', function() {
    stubsHidden = !stubsHidden;
    this.classList.toggle('active', stubsHidden);
    this.textContent = stubsHidden ? 'Show Stubs' : 'Hide Stubs';
    node.style('display', function(d) {
      if (stubsHidden && stubNodeIds.has(d.id)) return 'none';
      return null;
    });
    labels.style('display', function(d) {
      if (stubsHidden && stubNodeIds.has(d.id)) return 'none';
      return showLabels ? null : 'none';
    });
    edgeElements.forEach(function(el, idx) {
      if (stubsHidden && stubEdgeIndices.has(idx)) {
        el.style.display = 'none';
      } else {
        el.style.display = '';
      }
    });
  });

  // ── Search ──
  var searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', function() {
    var q = searchInput.value.toLowerCase().trim();
    if (!q) {
      node.select('circle').attr('opacity', 0.9);
      labels.attr('fill', '#333');
      edgeElements.forEach(function(el) {
        el.setAttribute('stroke', '#cbd5e1');
        el.setAttribute('stroke-opacity', '0.3');
      });
      return;
    }
    node.select('circle').attr('opacity', function(d) {
      var match = d.label.toLowerCase().includes(q)
        || d.id.toLowerCase().includes(q)
        || (d.entities && d.entities.some(function(e) { return e.toLowerCase().includes(q); }))
        || (d.topics && d.topics.some(function(t) { return t.toLowerCase().includes(q); }))
        || (d.situation && d.situation.toLowerCase().includes(q));
      return match ? 1 : 0.05;
    });
    labels.attr('fill', function(d) {
      var match = d.label.toLowerCase().includes(q)
        || d.id.toLowerCase().includes(q)
        || (d.entities && d.entities.some(function(e) { return e.toLowerCase().includes(q); }))
        || (d.topics && d.topics.some(function(t) { return t.toLowerCase().includes(q); }))
        || (d.situation && d.situation.toLowerCase().includes(q));
      return match ? '#1d4ed8' : '#ccc';
    });
    // Also dim edges for non-matching nodes
    var matchingIds = new Set();
    nodes.forEach(function(d) {
      var match = d.label.toLowerCase().includes(q)
        || d.id.toLowerCase().includes(q)
        || (d.entities && d.entities.some(function(e) { return e.toLowerCase().includes(q); }))
        || (d.topics && d.topics.some(function(t) { return t.toLowerCase().includes(q); }))
        || (d.situation && d.situation.toLowerCase().includes(q));
      if (match) matchingIds.add(d.id);
    });
    edgeElements.forEach(function(el, idx) {
      var e = edges[idx];
      var sid = typeof e.source === 'object' ? e.source.id : e.source;
      var tid = typeof e.target === 'object' ? e.target.id : e.target;
      var connected = matchingIds.has(sid) || matchingIds.has(tid);
      el.setAttribute('stroke-opacity', connected ? '0.5' : '0.05');
    });
  });

  // ── Resize handler ──
  window.addEventListener('resize', function() {
    W = window.innerWidth;
    H = window.innerHeight;
    svg.attr('width', W).attr('height', H);
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
