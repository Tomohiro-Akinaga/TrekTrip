export default function parseHTML(html: string) {
  const parser = new DOMParser();
  const document = parser.parseFromString(html, "text/html");

  const time: any[] = [];
  document.querySelectorAll(".time").forEach((element) => {
    time.push(element.textContent);
  });

  const train: any[] = [];
  document.querySelectorAll(".transport").forEach((icon) => {
    train.push(icon.textContent);
  });

  const summary = Array.from(
    document.querySelector(".summary")?.children || []
  ).map((element) => element.textContent);

  return { time, train, summary };
}
