import { expect, test } from "@playwright/test";

test.use({ viewport: { width: 390, height: 844 } });

type ClipboardWindow = Window & { __copiedText?: string };

const deadSavedState = {
  v: 4,
  state: {
    phase: "dead",
    resources: { pol: 0, int: 42, saf: 61, alg: 77 },
    hidden: { pressure: 2 },
    turn: 2,
    activeCard: null,
    rngState: 123456,
    death: {
      resource: "pol",
      extreme: "depleted",
      message: "Political authority collapsed.",
    },
    history: [
      { turn: 0, cardId: "opening-brief", choice: "left" },
      { turn: 1, cardId: "treaty-threat", choice: "right" },
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
    turnCount?: number;
    hidden?: Record<string, number>;
    history?: unknown[];
  };

  expect(copied).toMatchObject({
    schema: "global-pause-playtest-death-run-v1",
    phase: "dead",
    turnCount: 2,
    hidden: { pressure: 2 },
  });
  expect(copied.history).toHaveLength(2);
});
