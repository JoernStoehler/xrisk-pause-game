import { test, expect } from "@playwright/test";

test.use({ viewport: { width: 390, height: 844 } });

test.beforeEach(async ({ page }) => {
  // Clear saved state so each test starts fresh, but skip tutorial
  await page.goto("/");
  await page.evaluate(() => {
    localStorage.clear();
    localStorage.setItem("global-pause-tutorial-done", "1");
  });
  await page.reload();
});

test("title screen loads and shows Take Office", async ({ page }) => {
  await expect(page.locator("text=THE PAUSE")).toBeVisible();
  await expect(page.locator("text=Take Office")).toBeVisible();
  await page.screenshot({ path: "/tmp/e2e-01-title.png" });
});

test("clicking Take Office shows game screen with card", async ({ page }) => {
  await page.click("text=Take Office");
  await page.locator(".animate-card-enter").first().waitFor();

  // Resource icons should be present (SVG elements in the dark top bar)
  await expect(page.locator("svg").first()).toBeVisible();

  // Card text and speaker name should be visible
  await expect(page.locator(".bg-tan").first()).toBeVisible();

  // Bottom bar with year
  await expect(page.getByText("2026")).toBeVisible();

  await page.screenshot({ path: "/tmp/e2e-02-game.png" });
});

test("swiping advances to next card", async ({ page }) => {
  await page.click("text=Take Office");
  await page.locator(".animate-card-enter").first().waitFor();
  // Wait for card-enter flip animation (350ms) to complete
  await page.waitForTimeout(400);

  // Simulate a swipe by dragging the card
  const card = page.locator(".animate-card-enter").first();
  const box = await card.boundingBox();
  if (box) {
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.down();
    // Drag far enough to commit
    for (let i = 0; i < 10; i++) {
      await page.mouse.move(
        box.x + box.width / 2 - (i + 1) * 20,
        box.y + box.height / 2,
      );
    }
    await page.mouse.up();
  }

  // Wait for new card to appear
  await page.locator(".animate-card-enter").first().waitFor({ timeout: 2000 });
  await page.screenshot({ path: "/tmp/e2e-03-after-choice.png" });
});

test("repeated swipes eventually trigger death screen", async ({ page }) => {
  await page.click("text=Take Office");
  await page.locator(".animate-card-enter").first().waitFor();
  // Wait for card-enter flip animation (350ms) to complete
  await page.waitForTimeout(400);

  // Use keyboard shortcuts (ArrowLeft) for faster swipes than mouse drag
  for (let i = 0; i < 50; i++) {
    const tryAgain = page.locator("text=Try Again");
    if (await tryAgain.isVisible().catch(() => false)) {
      break;
    }

    const card = page.locator(".animate-card-enter").first();
    try {
      await card.waitFor({ timeout: 2000 });
    } catch {
      break; // Card didn't appear — likely on death screen
    }

    await page.keyboard.press("ArrowLeft");
    // Wait for fly-off (300ms) + new card mount
    await page.waitForTimeout(350);
  }

  const isDead = await page
    .locator("text=Try Again")
    .isVisible()
    .catch(() => false);
  expect(isDead, "Game should reach death within 50 swipes").toBe(true);

  await expect(page.locator("text=Try Again")).toBeVisible();
  await page.screenshot({ path: "/tmp/e2e-04-death.png" });

  // Share button should be visible
  await expect(page.locator("text=Share")).toBeVisible();

  // Restart
  await page.click("text=Try Again");
  await expect(page.getByText("2026")).toBeVisible({ timeout: 2000 });
  await page.screenshot({ path: "/tmp/e2e-05-restart.png" });
});
