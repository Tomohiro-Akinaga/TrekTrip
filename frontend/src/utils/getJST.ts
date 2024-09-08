/**
 * 日本時間をISO形式（YYYY-MM-DDTHH:MM）で取得する
 * @returns {string} - 現在の日本時間
 */

export default function getJST() {
  const date = new Date();

  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day}T${hour}:${minutes}`;
}
