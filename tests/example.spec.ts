import { expect, test } from "playwright/test";

test("homepage has an accessible heading", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Example Domain/i);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Example Domain");
});
