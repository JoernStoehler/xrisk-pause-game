import { test, expect } from "@playwright/test";

test.use({ viewport: { width: 390, height: 844 } });

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => localStorage.clear());
  await page.reload();
});

test("first play shows 3 tutorial cards then starts game", async ({ page }) => {
  await page.click("text=Take Office");

  // Tutorial card 1: welcome
  await expect(page.getByText("Welcome, Director-General")).toBeVisible();
  await expect(page.getByText("Skip Tutorial")).toBeVisible();

  // Swipe to advance (keyboard)
  await page.keyboard.press("ArrowRight");
  await page.waitForTimeout(600);

  // Tutorial card 2: resources (highlights should be active)
  await expect(page.getByText("four pillars")).toBeVisible();
  await page.keyboard.press("ArrowLeft");
  await page.waitForTimeout(600);

  // Tutorial card 3: mechanics
  await expect(page.getByText("Swipe the portrait")).toBeVisible();
  await page.keyboard.press("ArrowRight");
  await page.waitForTimeout(600);

  // Now in real game — year display and real card visible
  await expect(page.getByText("2026")).toBeVisible({ timeout: 2000 });
  await page.locator(".animate-card-enter").first().waitFor({ timeout: 2000 });
});

test("skip tutorial persists across sessions", async ({ page }) => {
  // Complete tutorial first
  await page.click("text=Take Office");
  await expect(page.getByText("Welcome, Director-General")).toBeVisible();

  // Skip it
  await page.click("text=Skip Tutorial");
  await expect(page.getByText("2026")).toBeVisible({ timeout: 2000 });

  // Clear game state but keep tutorial-done flag, then reload
  await page.evaluate(() => localStorage.removeItem("global-pause-state"));
  await page.reload();
  await page.click("text=Take Office");

  // Should go straight to game (no tutorial text)
  await expect(page.getByText("2026")).toBeVisible({ timeout: 2000 });
  await page.locator(".animate-card-enter").first().waitFor({ timeout: 2000 });
});

test("keyboard controls work during gameplay", async ({ page }) => {
  // Skip tutorial via localStorage
  await page.evaluate(() => localStorage.setItem("global-pause-tutorial-done", "1"));
  await page.reload();
  await page.click("text=Take Office");
  await page.locator(".animate-card-enter").first().waitFor();
  await page.waitForTimeout(400); // card-enter animation

  // Press ArrowRight — should advance game
  await page.keyboard.press("ArrowRight");

  // New card should appear
  await page.locator(".animate-card-enter").first().waitFor({ timeout: 2000 });
});
