import { expect, test, type Page } from "@playwright/test";

async function openCard(page: Page) {
  await page.goto("/");
  await page.getByRole("button", { name: /assume office/i }).click();
  return page.locator("[data-card]");
}

test("vertical dragging with sideways drift does not choose a policy", async ({ page }) => {
  const card = await openCard(page);
  const box = await card.boundingBox();
  if (!box) throw new Error("Missing card");
  const x = box.x + box.width / 2;
  const y = box.y + 80;
  await page.mouse.move(x, y);
  await page.mouse.down();
  await page.mouse.move(x + 110, y + 180, { steps: 10 });
  await page.mouse.up();
  await expect(card).toContainText("MARA VOSS");
  await expect(card).not.toHaveAttribute("data-direction");
});

test("cancelling a horizontal swipe never commits the choice", async ({ page }) => {
  const card = await openCard(page);
  const box = await card.boundingBox();
  if (!box) throw new Error("Missing card");
  const x = box.x + box.width / 2;
  const y = box.y + 80;
  await page.mouse.move(x, y);
  await page.mouse.down();
  await page.mouse.move(x - 140, y, { steps: 6 });
  await card.dispatchEvent("pointercancel", { pointerId: 1 });
  await page.mouse.up();
  await expect(card).toContainText("MARA VOSS");
  await expect(card).not.toHaveAttribute("data-direction");
  await page.getByRole("button", { name: /take joint custody/i }).click();
  await expect(page.getByText("LIN WEI")).toBeVisible();
});

test("touch scroll over the card moves the page without choosing", async ({ page, context, isMobile }) => {
  test.skip(!isMobile, "Native touch scroll uses the mobile profiles");
  await page.setViewportSize({ width: 390, height: 500 });
  const card = await openCard(page);
  await page.evaluate(() => window.scrollTo(0, 0));
  const box = await card.boundingBox();
  if (!box) throw new Error("Missing card");
  const x = box.x + box.width / 2;
  const y = Math.min(400, box.y + 220);
  const before = await page.evaluate(() => window.scrollY);
  const client = await context.newCDPSession(page);
  await client.send("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: [{ x, y }] });
  for (let step = 1; step <= 10; step++) {
    await client.send("Input.dispatchTouchEvent", {
      type: "touchMove", touchPoints: [{ x: x + step * 2, y: y - step * 20 }],
    });
  }
  await client.send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(before + 40);
  await expect(card).toContainText("MARA VOSS");
  await expect(card).not.toHaveAttribute("data-direction");
  await client.detach();
});
