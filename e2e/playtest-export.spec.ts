import { expect, test } from "@playwright/test";

test.use({ viewport: { width: 390, height: 844 } });

type ClipboardWindow = Window & { __copiedText?: string };

const deadWorld = {
  elapsedMonths: 2,
  decisionCount: 2,
  resources: { political: 0, intelligence: 42, safety: 61, algorithmic: 77 },
  treaty: { erosion: 0, legitimacy: 50, usChinaWar: false },
  enforcement: { visibility: 0, missedThreats: 0, sourceProtection: 60 },
  publicOpinion: {
    legitimacy: 50,
    fatigue: { elapsedMonths: 2, value: 20, changePerMonth: 2 },
  },
  research: { mentoringCapacity: 50, containment: 35 },
};

const deadSavedState = {
  v: 6,
  state: {
    phase: "dead",
    world: deadWorld,
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

async function loadDeadRun(page: import("@playwright/test").Page, path: string) {
  await page.goto(path);
  await page.evaluate((state) => {
    localStorage.clear();
    localStorage.setItem("global-pause-tutorial-done", "1");
    localStorage.setItem("global-pause-state", JSON.stringify(state));
  }, deadSavedState);
  await page.reload();
  await expect(page.getByTestId("death-screen")).toBeVisible();
}

test("default death screen keeps the public controls only", async ({ page }) => {
  await loadDeadRun(page, "/");

  await expect(page.getByTestId("share-button")).toBeVisible();
  await expect(page.getByTestId("restart-button")).toBeVisible();
  await expect(page.getByTestId("copy-run-log-button")).toHaveCount(0);
});

test("playtest mode shows run-log export and copies parseable JSON", async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: {
        writeText: async (text: string) => {
          (window as ClipboardWindow).__copiedText = text;
        },
      },
    });
  });

  await loadDeadRun(page, "/?playtest=1");

  await page.getByTestId("copy-run-log-button").click();

  const copiedText = await page.evaluate(
    () => (window as ClipboardWindow).__copiedText ?? "",
  );
  const copied = JSON.parse(copiedText) as {
    schema?: string;
    phase?: string;
    decisionCount?: number;
    world?: { resources?: Record<string, number> };
    history?: unknown[];
  };

  expect(copied).toMatchObject({
    schema: "global-pause-playtest-death-run-v2",
    phase: "dead",
    decisionCount: 2,
    world: {
      resources: { political: 0, intelligence: 42, safety: 61, algorithmic: 77 },
    },
  });
  expect(copied.history).toHaveLength(3);
});
