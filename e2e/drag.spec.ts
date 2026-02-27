import { test, expect } from "@playwright/test";

test.use({ viewport: { width: 390, height: 844 } });

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => {
    localStorage.clear();
    localStorage.setItem("global-pause-tutorial-done", "1");
  });
  await page.reload();
  await page.click("text=Take Office");
  await page.locator(".animate-card-enter").first().waitFor();
  // Wait for card-enter flip animation (350ms rotateY) to complete —
  // backface-visibility:hidden blocks pointer events during animation
  await page.waitForTimeout(400);
});

async function getCardCenter(page: import("@playwright/test").Page) {
  // The card is the portrait element with the animate-card-enter class
  const card = page.locator(".animate-card-enter").first();
  const box = await card.boundingBox();
  if (!box) throw new Error("Card not found");
  return { x: box.x + box.width / 2, y: box.y + box.height / 2, box };
}

test("choice labels are always visible", async ({ page }) => {
  // Labels should be visible without any interaction
  const leftLabel = page.locator("[data-testid=label-left]");
  const rightLabel = page.locator("[data-testid=label-right]");
  await expect(leftLabel).toBeVisible();
  await expect(rightLabel).toBeVisible();

  // Labels should have text content
  const leftText = await leftLabel.textContent();
  const rightText = await rightLabel.textContent();
  expect(leftText?.trim().length).toBeGreaterThan(0);
  expect(rightText?.trim().length).toBeGreaterThan(0);
});

test("dragging portrait tilts only portrait, not text", async ({ page }) => {
  const { x, y } = await getCardCenter(page);

  // Get the speaker name — it's outside the swipeable portrait area
  const speakerName = page.locator(".rounded-b-lg .font-bold").first();
  const speakerBefore = await speakerName.textContent();
  expect(speakerBefore).toBeTruthy();

  // Start drag
  await page.mouse.move(x, y);
  await page.mouse.down();

  // Drag right 60px (past 30px tilt threshold)
  await page.mouse.move(x + 60, y, { steps: 10 });
  await page.waitForTimeout(100);

  // Portrait should be tilted (has transform)
  const card = page.locator(".animate-card-enter").first();
  const transform = await card.evaluate(
    (el) => (el as HTMLElement).style.transform,
  );
  expect(transform).toContain("rotate");

  // Release without committing (within ±100px threshold)
  await page.mouse.move(x, y, { steps: 5 });
  await page.mouse.up();
  await page.waitForTimeout(400); // wait for spring-back animation

  // Speaker name should still be the same (card didn't change)
  const speakerAfter = await speakerName.textContent();
  expect(speakerAfter).toBe(speakerBefore);
});

test("dragging card shows resource impact indicators", async ({ page }) => {
  const { x, y } = await getCardCenter(page);

  // No impact indicators should be visible before drag
  await expect(page.locator(".animate-bar-pulse")).toHaveCount(0);

  // Start drag right past tilt threshold
  await page.mouse.move(x, y);
  await page.mouse.down();
  await page.mouse.move(x + 60, y, { steps: 10 });
  await page.waitForTimeout(100);

  // At least one resource icon should show an impact triangle
  const indicators = page.locator(".animate-bar-pulse");
  const count = await indicators.count();
  expect(count).toBeGreaterThan(0);

  // Release without committing
  await page.mouse.move(x, y, { steps: 5 });
  await page.mouse.up();
  await page.waitForTimeout(400);

  // Indicators should be gone after release
  await expect(page.locator(".animate-bar-pulse")).toHaveCount(0);
});

test("completing a swipe advances the game", async ({ page }) => {
  const { x, y } = await getCardCenter(page);

  // Drag right past commit threshold (100px)
  await page.mouse.move(x, y);
  await page.mouse.down();
  await page.mouse.move(x + 150, y, { steps: 15 });
  await page.mouse.up();

  // New card should appear after swipe commit
  await page.locator(".animate-card-enter").first().waitFor({ timeout: 2000 });
});
