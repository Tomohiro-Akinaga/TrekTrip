import puppeteer from "puppeteer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  /* リクエストボディから出発駅と到着駅を取得 */
  const { departure, arrival } = await request.json();

  /* Puppeteerでブラウザを起動する */
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(3000);

  try {
    /* Yahooの乗り換え案内ページにアクセス */
    await page.goto("https://transit.yahoo.co.jp/");

    /* 出発駅と到着駅の入力フィールドにリクエスト値を入力 */
    await page.locator('#query_input[name="from"]').fill(departure);
    await page.locator('#query_input[name="to"]').fill(arrival);

    /* 交通手段（新幹線、バスなど）の選択をリセット（チェックされている項目をすべて外す） */
    const transitCheckboxes = await page.$$('input[type="checkbox"]');
    for (const checkbox of transitCheckboxes) {
      const isChecked = await checkbox.evaluate((element) => element.checked);
      if (isChecked) await checkbox.click();
    }

    /* 検索ボタンをクリック */
    await page.locator("#searchModuleSubmit").click();
    await page.waitForNavigation();
    await page.waitForSelector("#route01");

    /* ページのHTMLを取得*/
    const html = await page.content();

    return NextResponse.json({ html }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  } finally {
    /* ブラウザを終了 */
    await browser.close();
  }
}
