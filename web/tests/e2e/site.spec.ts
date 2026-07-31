import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const keyRoutes = [
  ["/", /Find the right car/i],
  ["/vehicles", /Used cars and vans/i],
  ["/sell-your-car", /Sell your car/i],
  ["/finance", /Start with a straightforward conversation/i],
  ["/services", /Experienced care/i],
  ["/contact", /Visit, call or send/i],
  ["/reviews", /Trust built/i],
  ["/warranty-and-aftercare", /Support beyond the handover/i],
  ["/privacy", /Privacy notice/i],
  ["/cookies", /Cookie policy/i],
  ["/terms", /Website terms/i],
  ["/complaints", /Complaints/i],
  ["/accessibility", /Accessibility statement/i],
  ["/finance-disclosure", /Finance disclosure/i],
] as const;

test.describe("key routes", () => {
  for (const [path, heading] of keyRoutes) {
    test(`${path} renders successfully`, async ({ page }) => {
      const response = await page.goto(path);

      expect(response?.status()).toBe(200);
      await expect(
        page.getByRole("heading", { level: 1, name: heading }),
      ).toBeVisible();
    });
  }
});

test("primary navigation identifies the current section", async ({ page }) => {
  const routes = [
    ["/", "Home"],
    ["/vehicles", "Vehicles"],
    ["/vehicles/2016-volvo-xc90-t8-inscription", "Vehicles"],
    ["/sell-your-car", "Sell your car"],
    ["/finance", "Finance"],
    ["/services", "Services"],
  ] as const;

  for (const [path, label] of routes) {
    await page.goto(path);

    await expect(
      page
        .getByRole("navigation", { name: "Primary navigation" })
        .getByRole("link", { name: label }),
    ).toHaveAttribute("aria-current", "page");
  }
});

test("mobile navigation identifies the current section", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/services");
  await page.getByText("Menu", { exact: true }).click();

  await expect(
    page
      .getByRole("navigation", { name: "Mobile navigation" })
      .getByRole("link", { name: "Services" }),
  ).toHaveAttribute("aria-current", "page");
});

test("inventory pagination shows ten then seven vehicles", async ({ page }) => {
  await page.goto("/vehicles");

  await expect(page.getByText("Showing 1-10 of 17 vehicles")).toBeVisible();
  await expect(page.locator("article")).toHaveCount(10);

  await page.getByRole("link", { name: "Next" }).click();

  await expect(page).toHaveURL(/\/vehicles\?page=2$/);
  await expect(page.getByText("Showing 11-17 of 17 vehicles")).toBeVisible();
  await expect(page.locator("article")).toHaveCount(7);
});

test("contact form exposes required fields and valid consent flow", async ({
  page,
}) => {
  await page.goto("/contact");

  const form = page.locator("form");
  await expect(form).toBeVisible();
  expect(
    await form.evaluate(
      (element) =>
        element instanceof HTMLFormElement && element.checkValidity(),
    ),
  ).toBe(false);

  await page
    .getByRole("combobox", { name: /what can we help with/i })
    .selectOption("General question");
  await page.getByRole("textbox", { name: /full name/i }).fill("Test Customer");
  await page.getByRole("textbox", { name: /telephone/i }).fill("01440 000000");
  await page
    .getByRole("textbox", { name: /email/i })
    .fill("customer@example.test");
  await page
    .getByRole("textbox", { name: /your message/i })
    .fill("Please contact me about a vehicle.");
  await page.getByRole("checkbox").check();

  expect(
    await form.evaluate(
      (element) =>
        element instanceof HTMLFormElement && element.checkValidity(),
    ),
  ).toBe(true);
});

test.describe("legacy redirects", () => {
  test("content route redirects to its replacement", async ({ request }) => {
    const response = await request.get("/testimonials/", { maxRedirects: 0 });

    expect(response.status()).toBe(308);
    expect(response.headers().location).toBe("/reviews");
  });

  test("legacy privacy route redirects to the new notice", async ({
    request,
  }) => {
    const response = await request.get("/privacy_policy/", {
      maxRedirects: 0,
    });

    expect(response.status()).toBe(308);
    expect(response.headers().location).toBe("/privacy");
  });

  test("active legacy stock id redirects to the matching vehicle", async ({
    request,
  }) => {
    const response = await request.get("/details/vehicle/1659208", {
      maxRedirects: 0,
    });

    expect(response.status()).toBe(308);
    expect(response.headers().location).toBe(
      "/vehicles/2016-volvo-xc90-t8-inscription",
    );
  });
});

test("security headers include the report-only CSP", async ({ request }) => {
  const response = await request.get("/");

  expect(response.headers()["content-security-policy-report-only"]).toContain(
    "default-src 'self'",
  );
  expect(response.headers()["x-content-type-options"]).toBe("nosniff");
  expect(response.headers()["x-frame-options"]).toBe("DENY");
});

test("cookie choice can be changed after the initial decision", async ({
  page,
}) => {
  await page.goto("/cookies");

  await page.getByRole("button", { name: "Manage", exact: true }).click();
  await expect(
    page.getByRole("dialog", { name: /cookie preferences/i }),
  ).toBeVisible();

  await page.getByRole("checkbox", { name: /analytics/i }).check();
  await page.getByRole("button", { name: /save preferences/i }).click();
  await expect(page.getByRole("button", { name: "Manage", exact: true })).toHaveCount(0);

  await page.reload();
  await expect(
    page.getByRole("button", { name: /accept optional/i }),
  ).toHaveCount(0);

  await page.getByRole("button", { name: /manage cookies/i }).click();
  await expect(page.getByRole("checkbox", { name: /analytics/i })).toBeChecked();
});

for (const path of ["/", "/vehicles", "/contact", "/services", "/privacy"]) {
  test(`${path} has no detectable WCAG A or AA violations`, async ({ page }) => {
    await page.goto(path);

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(
      results.violations,
      results.violations
        .map(
          (violation) =>
            `${violation.id}: ${violation.nodes
              .map((node) => node.target.join(" "))
              .join(", ")}`,
        )
        .join("\n"),
    ).toEqual([]);
  });
}
