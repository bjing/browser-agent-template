import "dotenv/config";
import { chromium } from "playwright";

const baseUrl = process.env.BASE_URL ?? "https://example.com";
const headless = process.env.HEADLESS !== "false";
const navigationTimeoutMs = Number(process.env.NAVIGATION_TIMEOUT_MS ?? "30000");

async function main(): Promise<void> {
  const browser = await chromium.launch({ headless });
  const page = await browser.newPage();

  page.setDefaultNavigationTimeout(navigationTimeoutMs);

  try {
    await page.goto(baseUrl, { waitUntil: "domcontentloaded" });

    const title = await page.title();
    console.log(`Loaded ${baseUrl}`);
    console.log(`Page title: ${title}`);
  } finally {
    await page.close();
    await browser.close();
  }
}

main().catch((error: unknown) => {
  console.error("Automation run failed.");
  console.error(error);
  process.exitCode = 1;
});
