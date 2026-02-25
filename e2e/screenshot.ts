/**
 * Standalone Playwright screenshot script for visual QA.
 * Captures all key game states: title, game, swipe-right, swipe-left.
 *
 * Usage: npx tsx e2e/screenshot.ts
 * Requires: dev server running on http://localhost:5173
 */

import fs from "node:fs";
import { chromium } from "@playwright/test";

const BASE_URL = "http://localhost:5173";
const VIEWPORT = { width: 390, height: 844 };

function makeTimestampDir(): string {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  const stamp = [
    now.getFullYear(),
    pad(now.getMonth() + 1),
    pad(now.getDate()),
    "-",
    pad(now.getHours()),
    pad(now.getMinutes()),
    pad(now.getSeconds()),
  ].join("");
  const dir = `/tmp/qa-${stamp}`;
  fs.mkdirSync(dir, { recursive: true });
  return dir;
}

// Same launch args as playwright.config.ts
const LAUNCH_ARGS = [
  "--no-sandbox",
  "--disable-setuid-sandbox",
  "--disable-gpu",
  "--disable-dev-shm-usage",
  "--disable-software-rasterizer",
  "--no-zygote",
];

async function main() {
  const browser = await chromium.launch({ headless: true, args: LAUNCH_ARGS });
  const page = await browser.newPage({ viewport: VIEWPORT });

  const dir = makeTimestampDir();
  console.log(`Screenshots saved to ${dir}/`);

  try {
    // Clear any saved state
    await page.goto(BASE_URL);
    await page.evaluate(() => localStorage.clear());
    await page.reload();

    // 1. Title screen
    await page.waitForSelector("text=Take Office");
    await page.screenshot({ path: `${dir}/01-title.png` });
    console.log(`✓ ${dir}/01-title.png — Title screen`);

    // 2. Game screen (click Take Office, wait for card animation)
    await page.click("text=Take Office");
    await page.waitForTimeout(800);
    await page.screenshot({ path: `${dir}/02-game.png` });
    console.log(`✓ ${dir}/02-game.png — Game screen (neutral, no swipe)`);

    // Find the card and compute its center (same pattern as drag.spec.ts)
    const card = page.locator(".animate-card-enter").first();
    const box = await card.boundingBox();
    if (!box) {
      throw new Error("Card element not found — cannot capture swipe states");
    }
    const cx = box.x + box.width / 2;
    const cy = box.y + box.height / 2;

    // 3. Swipe right — drag ~80px right, hold for screenshot
    await page.mouse.move(cx, cy);
    await page.mouse.down();
    await page.mouse.move(cx + 80, cy, { steps: 15 });
    await page.waitForTimeout(200);
    await page.screenshot({ path: `${dir}/03-swipe-right.png` });
    console.log(`✓ ${dir}/03-swipe-right.png — Mid-swipe right (~80px)`);

    // Release and let card spring back
    await page.mouse.move(cx, cy, { steps: 10 });
    await page.mouse.up();
    await page.waitForTimeout(500);

    // 4. Swipe left — drag ~80px left from center, hold for screenshot
    // Re-locate card in case position shifted after spring-back
    const box2 = await card.boundingBox();
    if (!box2) {
      throw new Error(
        "Card element not found after spring-back — cannot capture left swipe",
      );
    }
    const cx2 = box2.x + box2.width / 2;
    const cy2 = box2.y + box2.height / 2;

    await page.mouse.move(cx2, cy2);
    await page.mouse.down();
    await page.mouse.move(cx2 - 80, cy2, { steps: 15 });
    await page.waitForTimeout(200);
    await page.screenshot({ path: `${dir}/04-swipe-left.png` });
    console.log(`✓ ${dir}/04-swipe-left.png — Mid-swipe left (~80px)`);

    // Release and let card spring back
    await page.mouse.move(cx2, cy2, { steps: 10 });
    await page.mouse.up();
    await page.waitForTimeout(500);

    console.log(`\nAll 4 screenshots captured in ${dir}/`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error("Screenshot script failed:", err);
  process.exit(1);
});
