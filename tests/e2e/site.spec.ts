import { test, expect } from "@playwright/test";

test.describe("GovEligify marketing site", () => {
  test("home loads with hero + headline", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/GovEligify/);
    await expect(
      page.getByRole("heading", { level: 1, name: /entitled to/i }),
    ).toBeVisible();
    // Trust line present
    await expect(
      page.getByText(/we never submit applications/i).first(),
    ).toBeVisible();
  });

  test("primary nav reaches explore and shows schemes", async ({ page }) => {
    await page.goto("/explore");
    await expect(
      page.getByRole("heading", { level: 1 }),
    ).toBeVisible();
    // At least one known sample scheme renders
    await expect(page.getByText(/PM-KISAN|Kisan Samman/i).first()).toBeVisible();
  });

  test("scheme detail page renders eligibility + official portal link", async ({
    page,
  }) => {
    await page.goto("/explore/pm-kisan");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    const apply = page.getByRole("link", { name: /official portal/i }).first();
    await expect(apply).toBeVisible();
    await expect(apply).toHaveAttribute("target", "_blank");
    await expect(apply).toHaveAttribute("rel", /noopener/);
  });

  test("certificates and key pages load", async ({ page }) => {
    for (const path of ["/certificates", "/how-it-works", "/faq", "/about", "/chat"]) {
      const res = await page.goto(path);
      expect(res?.status(), `status for ${path}`).toBeLessThan(400);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    }
  });
});

test.describe("Bot (standalone /chat page)", () => {
  test("a CTA navigates to the standalone chat page", async ({ page }) => {
    await page.goto("/");
    await page
      .getByRole("link", { name: /check my eligibility/i })
      .first()
      .click();
    await page.waitForURL(/\/chat/);
    await expect(
      page.getByRole("heading", { level: 1, name: /what are you entitled to/i }),
    ).toBeVisible();
    await expect(
      page.getByText(/not affiliated with any government/i).first(),
    ).toBeVisible();
  });

  test("a seeded query auto-answers with a scheme card", async ({ page }) => {
    await page.goto("/chat?q=" + encodeURIComponent("I'm a farmer"));
    await expect(
      page.getByRole("link", { name: /official portal/i }).first(),
    ).toBeVisible({ timeout: 10_000 });
  });
});

test.describe("Funny 404", () => {
  test("unknown route shows the eligibility-report 404", async ({ page }) => {
    const res = await page.goto("/this-route-does-not-exist-zzz");
    expect(res?.status()).toBe(404);
    await expect(page.getByText(/ELIGIBILITY ASSESSMENT REPORT/i)).toBeVisible();
    await expect(page.getByText(/NOT ELIGIBLE/i)).toBeVisible();
    await expect(page.getByRole("link", { name: /return to home/i })).toBeVisible();
  });
});
