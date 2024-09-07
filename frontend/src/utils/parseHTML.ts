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
  document.querySelectorAll(".time").forEach((el) => {
    time.push(el.textContent || "");
  });

  // 駅名を取得し、そのテキストを配列に格納
  const station: string[] = [];
  document
    .querySelectorAll(".station dt")
    .forEach((el) => station.push(el.textContent || ""));

  // 鉄道や方面を取得し、そのテキストを配列に格納
  const transport: object[] = [];
  document.querySelectorAll(".transport").forEach((el) => {
    transport.push({
      line: el.querySelector("div")?.textContent,
      destination: el.querySelector(".destination")?.textContent,
    });
  });

  // 距離や運賃などの概要を取得し、それぞれのテキストを配列に格納
  const summary: string[] = Array.from(
    document.querySelector(".summary")?.children || []
  ).map((el) => el.textContent || "");

  return { station, time, transport, summary };
}
