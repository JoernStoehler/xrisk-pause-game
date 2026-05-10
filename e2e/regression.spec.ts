import { test, expect } from "@playwright/test";

test.use({ viewport: { width: 390, height: 844 } });

const savedCardState = (templateId: string) => ({
  v: 4,
  state: {
    phase: "playing",
    resources: { pol: 50, int: 50, saf: 50, alg: 50 },
    hidden: {},
    turn: 12,
    activeCard: { templateId },
    rngState: 1,
    death: null,
    history: [],
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
  await page.mouse.move(200, 400);
  await page.mouse.wheel(0, 900);
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(before);
  const after = await page.evaluate(() => window.scrollY);

  expect(after).toBeGreaterThan(before);
});

test("long card text fits inside the card text area", async ({ page }) => {
  await loadSavedCard(page, "biotech-proposal");

  const overflows = await page.locator("[data-testid=swipe-card] p").evaluate((text) => {
    const textBox = text.getBoundingClientRect();
    const container = text.parentElement;
    if (!container) return true;
    const containerBox = container.getBoundingClientRect();
    return (
      textBox.top < containerBox.top ||
      textBox.bottom > containerBox.bottom ||
      text.scrollHeight > container.clientHeight ||
      text.scrollWidth > container.clientWidth
    );
  });

  expect(overflows).toBe(false);
});

test("enabled down choices have a visible game affordance", async ({ page }) => {
  await loadSavedCard(page, "data-center-attack");

  await expect(page.getByTestId("label-down")).toBeVisible();
  await expect(page.getByTestId("label-down")).toContainText(
    "Cross-reference satellite data",
  );
});
