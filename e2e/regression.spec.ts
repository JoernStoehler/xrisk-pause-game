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
  test.fail(true, "Known regression: global overflow hidden makes #qa unscrollable.");

  await page.goto("/#qa");
  const before = await page.evaluate(() => window.scrollY);
  await page.mouse.wheel(0, 900);
  const after = await page.evaluate(() => window.scrollY);

  expect(after).toBeGreaterThan(before);
});

test("long card text fits inside the card text area", async ({ page }) => {
  test.fail(true, "Known regression: long card text overflows the fixed text area.");

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

test.skip("enabled down choices have a visible game affordance", async () => {
  // Decision pending: implement down-choice UI/CLI or convert down cards to two choices.
});

// REGRESSION BREADCRUMB: card data has enabled `down` choices, while the mobile
// UI currently exposes only left/right. Replace the skipped test above with an
// executable regression once the product direction is settled.
