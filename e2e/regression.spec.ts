import { test, expect } from "@playwright/test";

test.use({ viewport: { width: 390, height: 844 } });

const savedCardState = (templateId: string) => ({
  v: 6,
  state: {
    phase: "playing",
    world: {
      elapsedMonths: 12,
      decisionCount: 4,
      resources: { political: 50, intelligence: 50, safety: 50, algorithmic: 50 },
      treaty: { erosion: 0, legitimacy: 50, usChinaWar: false },
      enforcement: { visibility: 0, missedThreats: 0, sourceProtection: 60 },
      publicOpinion: {
        legitimacy: 50,
        fatigue: { elapsedMonths: 12, value: 20, changePerMonth: 2 },
      },
      research: { mentoringCapacity: 50, containment: 35 },
    },
    activeCard: { templateId },
    rngState: 1,
    death: null,
    history: [
      { type: "gameStarted", seed: 1 },
      { type: "cardDrawn", elapsedMonths: 12, deltaMonths: 1, cardId: templateId, rngStateBefore: 1, rngStateAfter: 1, totalRate: 1 },
    ],
  },
});

async function loadSavedCard(page: import("@playwright/test").Page, templateId: string) {
  await page.goto("/");
  await page.evaluate((state) => {
    localStorage.clear();
    localStorage.setItem("global-pause-tutorial-done", "1");
    localStorage.setItem("global-pause-state", JSON.stringify(state));
  }, savedCardState(templateId));
  await page.reload();
  await page.locator("[data-testid=swipe-card]").waitFor();
}

test("QA reference page is scrollable", async ({ page }) => {
  await page.goto("/#qa");
  await expect(page.getByRole("heading", { name: "QA Reference" })).toBeVisible();
  await expect
    .poll(() =>
      page.evaluate(() => document.documentElement.scrollHeight > window.innerHeight),
    )
    .toBe(true);

  const before = await page.evaluate(() => window.scrollY);
  await page.keyboard.press("PageDown");
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(before);
  const after = await page.evaluate(() => window.scrollY);

  expect(after).toBeGreaterThan(before);
});

test("long card text stays contained in its text area", async ({ page }) => {
  await loadSavedCard(page, "war-inspection-crisis");

  const contained = await page.locator("[data-testid=swipe-card] p").evaluate((text) => {
    const textBox = text.getBoundingClientRect();
    const container = text.parentElement;
    if (!container) return false;
    const containerBox = container.getBoundingClientRect();
    return (
      textBox.top >= containerBox.top &&
      text.scrollWidth <= container.clientWidth &&
      container.scrollHeight >= container.clientHeight
    );
  });

  expect(contained).toBe(true);
});

test("enabled down choices have a visible game affordance", async ({ page }) => {
  await loadSavedCard(page, "daily-briefing");

  await expect(page.getByTestId("label-down")).toBeVisible();
  await expect(page.getByTestId("label-down")).toContainText(
    "Protect research time",
  );
  await page.getByTestId("label-down").click();
  await expect
    .poll(() =>
      page.evaluate(() => {
        const raw = localStorage.getItem("global-pause-state");
        if (!raw) return null;
        const saved = JSON.parse(raw);
        return saved.state.history
          .filter((entry: { type?: string }) => entry.type === "choiceCommitted")
          .at(-1);
      }),
    )
    .toEqual({ type: "choiceCommitted", elapsedMonths: 12, decisionIndex: 4, cardId: "daily-briefing", choice: "down" });
});

test("disabled down choices do not animate the card away from keyboard input", async ({ page }) => {
  await loadSavedCard(page, "budget-turf-war");

  await expect(page.getByTestId("label-down")).toHaveCount(0);
  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(600);

  const portraitStillVisible = await page.locator("[data-testid=swipe-card] img").evaluate((img) => {
    const box = img.getBoundingClientRect();
    return box.top < window.innerHeight && box.bottom > 0;
  });
  expect(portraitStillVisible).toBe(true);
});
