import { expect, test, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

type OpeningPath = {
  custody: "left" | "right";
  frontier: "left" | "right";
  service?: "left" | "right";
  coverage: "left" | "right";
};

async function choose(page: Page, direction: "left" | "right"): Promise<void> {
  await page.locator(`[data-choice="${direction}"]`).click();
}

async function resolveOpening(page: Page, path: OpeningPath): Promise<void> {
  await page.getByRole("button", { name: /assume office/i }).click();
  await choose(page, path.custody);
  await choose(page, path.frontier);
  if (path.service) await choose(page, path.service);
  await choose(page, path.coverage);
  await choose(page, "right");
  await expect(page.locator("[data-outcome]")).toBeVisible();
}

const paths: OpeningPath[] = [
  { custody: "left", frontier: "left", coverage: "left" },
  { custody: "left", frontier: "left", coverage: "right" },
  { custody: "right", frontier: "left", coverage: "left" },
  { custody: "right", frontier: "left", coverage: "right" },
  ...(["left", "right"] as const).flatMap((custody) =>
    (["left", "right"] as const).flatMap((service) =>
      (["left", "right"] as const).map((coverage) => ({
        custody,
        frontier: "right" as const,
        service,
        coverage,
      })),
    ),
  ),
];

test("intro disclosure is operable and exposes its state", async ({ page }) => {
  await page.goto("/");
  const disclosure = page.getByRole("button", { name: /what this prototype claims/i });
  const method = page.locator("#method-note");

  await expect(disclosure).toHaveAttribute("aria-expanded", "false");
  await expect(method).toBeHidden();
  await disclosure.click();
  await expect(disclosure).toHaveAttribute("aria-expanded", "true");
  await expect(method).toBeVisible();
});

for (const [index, path] of paths.entries()) {
  test(`opening decision path ${index + 1} reaches a legible dossier`, async ({ page }) => {
    await page.goto("/");
    await resolveOpening(page, path);

    await expect(page.getByRole("heading", { level: 2 })).toBeVisible();
    await expect(page.getByText("DIAGNOSTIC WORLDS · NOT FORECAST-CALIBRATED")).toBeVisible();
    await expect(page.getByRole("button", { name: /replay this world/i })).toBeVisible();
    const overflowsHorizontally = await page.evaluate(() =>
      document.documentElement.scrollWidth > document.documentElement.clientWidth);
    expect(overflowsHorizontally).toBe(false);
  });
}

test("pointer swipe and keyboard choice both advance cards", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /assume office/i }).click();

  const card = page.locator("[data-card]");
  const box = await card.boundingBox();
  if (!box) throw new Error("Advisor card has no bounding box");
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(box.x + box.width / 2 - 140, box.y + box.height / 2, { steps: 6 });
  await page.mouse.up();
  await expect(page.getByText("LIN WEI")).toBeVisible();

  const coldHold = page.getByRole("button", { name: /cold-hold frontier weights/i });
  await coldHold.focus();
  await page.keyboard.press("Enter");
  await expect(page.getByText("AMINA RAHAL")).toBeVisible();
});

test("new content receives focus after navigation", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /assume office/i }).click();
  await expect(page.locator("[data-card]")).toBeFocused();

  await choose(page, "right");
  await expect(page.locator(":focus")).toBeVisible();
  await expect(page.locator(":focus")).toHaveAttribute("data-card", "");
});

test("intro, decision, and dossier have no serious accessibility violations", async ({ page }) => {
  const seriousViolations = async () => {
    const results = await new AxeBuilder({ page }).analyze();
    return results.violations
      .filter((violation) => violation.impact === "serious" || violation.impact === "critical")
      .map(({ id, impact, help, nodes }) => ({ id, impact, help, targets: nodes.map((node) => node.target) }));
  };

  await page.goto("/");
  expect(await seriousViolations()).toEqual([]);
  await page.getByRole("button", { name: /assume office/i }).click();
  expect(await seriousViolations()).toEqual([]);
  await choose(page, "right");
  await choose(page, "left");
  await choose(page, "right");
  await choose(page, "right");
  expect(await seriousViolations()).toEqual([]);
});

test("a complete opening has no browser or request errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => errors.push(`page: ${error.message}`));
  page.on("requestfailed", (request) => {
    errors.push(`request: ${request.url()} (${request.failure()?.errorText ?? "unknown"})`);
  });

  await page.goto("/");
  await resolveOpening(page, {
    custody: "right",
    frontier: "right",
    service: "left",
    coverage: "right",
  });
  expect(errors).toEqual([]);
});
