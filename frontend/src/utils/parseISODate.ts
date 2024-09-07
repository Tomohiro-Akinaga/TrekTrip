/**
 * ISO 8601 日付文字列を Date オブジェクトに変換する
 * @param {string} isoDate - ISO 8601 日付文字列
 */
export default function parseISODate(isoDate: string) {
  const date = new Date(isoDate);

  const year = date.getFullYear().toString();

  const month = (date.getMonth() + 1).toString().padStart(2, "0");

  const day = date.getDate().toString().padStart(2, "0");

  const hour = date.getHours().toString().padStart(2, "0");

  const minutes = date.getMinutes().toString().padStart(2, "0");

  return { year, month, day, hour, minutes };
}
