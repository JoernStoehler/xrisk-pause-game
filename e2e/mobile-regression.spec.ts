import { expect, type Locator, type Page, test } from "@playwright/test";

const viewportTolerance = 8;

const worldState = (
  elapsedMonths: number,
  decisionCount = 0,
  resources = { political: 50, intelligence: 50, safety: 50, algorithmic: 50 },
) => ({
  elapsedMonths,
  decisionCount,
  resources,
  treaty: { erosion: 0, legitimacy: 50, usChinaWar: false },
  enforcement: { visibility: 0, missedThreats: 0, sourceProtection: 60 },
  publicOpinion: {
    legitimacy: 50,
    fatigue: { elapsedMonths, value: 20, changePerMonth: 2 },
  },
  research: { mentoringCapacity: 50, containment: 35 },
});

const savedPlayingState = (templateId: string) => ({
  v: 6,
  state: {
    phase: "playing",
    world: worldState(12, 4),
    activeCard: { templateId },
    rngState: 1,
    death: null,
    history: [
      { type: "gameStarted", seed: 1 },
      { type: "cardDrawn", elapsedMonths: 12, deltaMonths: 1, cardId: templateId, rngStateBefore: 1, rngStateAfter: 1, totalRate: 1 },
    ],
  },
});

const deadSavedState = {
  v: 6,
  state: {
    phase: "dead",
    world: worldState(2, 2, { political: 0, intelligence: 42, safety: 61, algorithmic: 77 }),
    activeCard: null,
    rngState: 123456,
    death: {
      resource: "political",
      extreme: "depleted",
      message: "Political authority collapsed.",
    },
    history: [
      { type: "gameStarted", seed: 42 },
      {
        type: "cardDrawn",
        elapsedMonths: 1,
        deltaMonths: 1,
        cardId: "daily-briefing",
        rngStateBefore: 42,
        rngStateAfter: 123,
        totalRate: 1,
      },
      { type: "choiceCommitted", elapsedMonths: 1, decisionIndex: 0, cardId: "daily-briefing", choice: "left" },
    ],
  },
};

async function clearState(page: Page, path = "/") {
  await page.goto(path);
  await page.evaluate(() => {
    localStorage.clear();
    localStorage.setItem("global-pause-tutorial-done", "1");
  });
  await page.reload();
}

async function loadSavedRun(
  page: Page,
  state: ReturnType<typeof savedPlayingState> | typeof deadSavedState,
  path = "/",
) {
  await page.goto(path);
  await page.evaluate((savedState) => {
    localStorage.clear();
    localStorage.setItem("global-pause-tutorial-done", "1");
    localStorage.setItem("global-pause-state", JSON.stringify(savedState));
  }, state);
  await page.reload();
}

async function expectNoHorizontalOverflow(page: Page) {
  await expect
    .poll(() =>
      page.evaluate(
        () =>
          document.documentElement.scrollWidth -
          document.documentElement.clientWidth,
      ),
    )
    .toBeLessThanOrEqual(1);
}

async function expectInViewport(locator: Locator, label: string) {
  await expect(locator, `${label} should be visible`).toBeVisible();
  const box = await locator.boundingBox();
  const viewport = await locator.page().evaluate(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }));

  expect(box, `${label} should have a layout box`).not.toBeNull();
  if (!box) return;

  expect(box.x, `${label} should not extend past the left edge`).toBeGreaterThanOrEqual(
    -viewportTolerance,
  );
  expect(box.y, `${label} should not extend past the top edge`).toBeGreaterThanOrEqual(
    -viewportTolerance,
  );
  expect(
    box.x + box.width,
    `${label} should not extend past the right edge`,
  ).toBeLessThanOrEqual(viewport.width + viewportTolerance);
  expect(
    box.y + box.height,
    `${label} should not extend past the bottom edge`,
  ).toBeLessThanOrEqual(viewport.height + viewportTolerance);
}

async function expectTapTarget(locator: Locator, label: string) {
  await expectInViewport(locator, label);
  const box = await locator.boundingBox();
  expect(box, `${label} should have a layout box`).not.toBeNull();
  if (!box) return;

  expect(box.width, `${label} should be at least 44 CSS px wide`).toBeGreaterThanOrEqual(
    44,
  );
  expect(box.height, `${label} should be at least 44 CSS px tall`).toBeGreaterThanOrEqual(
    44,
  );
}

test("title screen keeps the start control usable on mobile", async ({ page }) => {
  await clearState(page);

  await expect(page.getByTestId("title-screen")).toBeVisible();
  await expect(page.getByRole("heading", { name: "THE PAUSE" })).toBeVisible();
  await expectNoHorizontalOverflow(page);
  await expectTapTarget(page.getByTestId("start-button"), "Take Office");
});

test("seeded game screen fits controls and records a choice", async ({ page }) => {
  await loadSavedRun(page, savedPlayingState("daily-briefing"));

  await expect(page.getByTestId("game-screen")).toBeVisible();
  await expectNoHorizontalOverflow(page);
  await expectInViewport(page.getByTestId("resource-bar"), "resource bar");
  await expectInViewport(page.getByTestId("label-left"), "left choice label");
  await expectInViewport(page.getByTestId("label-right"), "right choice label");
  await expectTapTarget(page.getByTestId("label-down"), "down choice");
  await expectInViewport(page.getByTestId("year-display"), "year bar");

  await page.getByTestId("label-down").click();

  await expect
    .poll(() =>
      page.evaluate(() => {
        const raw = localStorage.getItem("global-pause-state");
        if (!raw) return null;
        const saved = JSON.parse(raw) as {
          state?: { history?: Array<{ type?: string; cardId?: string; choice?: string; elapsedMonths?: number; decisionIndex?: number }> };
        };
        return saved.state?.history
          ?.filter((entry) => entry.type === "choiceCommitted")
          .at(-1) ?? null;
      }),
    )
    .toEqual({ type: "choiceCommitted", elapsedMonths: 12, decisionIndex: 4, cardId: "daily-briefing", choice: "down" });
});

test("dead state keeps public controls reachable on mobile", async ({ page }) => {
  await loadSavedRun(page, deadSavedState);

  await expect(page.getByTestId("death-screen")).toBeVisible();
  await expectNoHorizontalOverflow(page);
  await expectTapTarget(page.getByTestId("share-button"), "Share");
  await expectTapTarget(page.getByTestId("restart-button"), "Try Again");
  await expect(page.getByTestId("copy-run-log-button")).toHaveCount(0);
});

test("playtest death export does not push primary controls offscreen", async ({ page }) => {
  await loadSavedRun(page, deadSavedState, "/?playtest=1");

  await expect(page.getByTestId("death-screen")).toBeVisible();
  await expectNoHorizontalOverflow(page);
  await expectTapTarget(page.getByTestId("share-button"), "Share");
  await expectTapTarget(page.getByTestId("copy-run-log-button"), "Copy Run Log");
  await expectTapTarget(page.getByTestId("restart-button"), "Try Again");
});
