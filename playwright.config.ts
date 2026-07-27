import { defineConfig, devices } from "@playwright/test";

const PORT = 3100;
const baseURL = `http://localhost:${PORT}`;

/** E2E config — runs the dev server on :3100 and tests desktop + mobile. */
export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 30_000,
  retries: 1,
  reporter: "list",
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile", use: { ...devices["Pixel 5"] } },
    // Firefox and WebKit are opt-in locally (they add two browser downloads)
    // but run in CI, where Safari coverage matters for an Indian mobile
    // audience. Select with `--project=firefox` / `--project=webkit`.
    { name: "firefox", use: { ...devices["Desktop Firefox"] } },
    { name: "webkit", use: { ...devices["Desktop Safari"] } },
    { name: "mobile-safari", use: { ...devices["iPhone 13"] } },
  ],
  webServer: {
    // Test a production build, not `next dev`. Dev compiles each route on first
    // request, which blew the per-test timeout on any spec that visits several
    // pages and made results depend on compile order rather than on the app.
    // NEXT_DIST_DIR also keeps this off the main .next directory, so an e2e run
    // cannot corrupt a production build that is already serving.
    command: `next build && next start -p ${PORT}`,
    env: { NEXT_DIST_DIR: ".next-e2e" },
    url: baseURL,
    // Generous: this covers a cold production build, not just server startup.
    timeout: 600_000,
    reuseExistingServer: !process.env.CI,
  },
});
