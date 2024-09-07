import puppeteer from "puppeteer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  /* ブラウザ起動 */
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();

  /* Yahoo乗り換え案内へ移動 */
  await page.goto("https://transit.yahoo.co.jp/");

  /* 出発駅入力 */
  await page.locator('#query_input[name="from"]').fill("東京");

  /* 到着駅入力 */
  await page.locator('#query_input[name="to"]').fill("福島駅");

  /* 全交通手段のチェックを外す */
  const transitCheckboxes = await page.$$('input[type="checkbox"]');
  for (const checkbox of transitCheckboxes) {
    const isChecked = await checkbox.evaluate((element) => element.checked);
    if (!isChecked) return;
    await checkbox.click();
  }

  /* 検索クリック */
  await page.locator("#searchModuleSubmit").click();
  await page.waitForNavigation();

  /* ブラウザ終了 */
  await browser.close();

  return NextResponse.json({ message: "Scraped" }, { status: 201 });
}
