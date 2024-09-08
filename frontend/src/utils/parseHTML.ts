/**
 * HTML文字列を解析し、特定のクラス名を持つ要素のテキストを抽出する関数
 * @param {string} html - 解析対象のHTML文字列
 * @returns {Object} - 抽出されたデータを含むオブジェクト
 */
export default function parseHTML(html: string) {
  const parser = new DOMParser();
  const document = parser.parseFromString(html, "text/html");

  // 出発時間や到着時間を取得し、そのテキストを配列に格納
  const time: string[] = [];
  document.querySelectorAll(".time").forEach((el, index) => {
    if (index > 0) time.push(el.textContent || "");
  });

  // 駅名を取得し、そのテキストを配列に格納
  const station: string[] = [];
  document
    .querySelectorAll(".station dt")
    .forEach((el) => station.push(el.textContent || ""));

  // 鉄道や方面を取得し、そのテキストを配列に格納
  const lines: string[] = [];
  const destinations: string[] = [];
  document.querySelectorAll(".transport").forEach((el) => {
    lines.push(el.querySelector("div")?.textContent || "");
    destinations.push(el.querySelector(".destination")?.textContent || "");
  });

  // 距離や運賃などの概要を取得し、それぞれのテキストを配列に格納
  const summary: string[] = Array.from(
    document.querySelector(".summary")?.children || []
  ).map((el) => el.textContent || "");

  // 配列を結合し、オブジェクトの乗り換え情報に変換
  const transit = station.map((v, i) => ({
    station: v,
    time: time[i],
    line: lines[i],
    destination: destinations[i],
  }));

  return { transit: transit, summary: summary };
}
