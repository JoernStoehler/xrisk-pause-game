import { defineConfig, devices } from "@playwright/test";

const port = Number(process.env.PLAYWRIGHT_PORT ?? 5174);
const baseURL = `http://127.0.0.1:${port}`;
const mobileRegressionSpec = /mobile-regression\.spec\.ts/;

export default defineConfig({
  testDir: "./e2e",
  timeout: 30_000,
  retries: process.env.CI ? 1 : 0,
  use: {
    baseURL,
    headless: true,
    screenshot: "only-on-failure",
    trace: "on-first-retry",
    video: "retain-on-failure",
    launchOptions: {
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-gpu",
        "--disable-dev-shm-usage",
        "--disable-software-rasterizer",
        "--no-zygote",
      ],
    },
  },
  projects: [
    {
      name: "chromium",
      testIgnore: mobileRegressionSpec,
    },
    {
      name: "mobile-chrome",
      testMatch: mobileRegressionSpec,
      use: {
        ...devices["Pixel 5"],
      },
    },
    {
      name: "mobile-safari-like",
      testMatch: mobileRegressionSpec,
      use: {
        ...devices["iPhone 13"],
        browserName: "chromium",
      },
    },
  ],
  webServer: {
    command: `npm run dev -- --host 127.0.0.1 --port ${port}`,
    url: baseURL,
    reuseExistingServer: false,
  },
});
