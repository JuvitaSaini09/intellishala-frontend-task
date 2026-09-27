export const PAGE_SIZE = 5;

export function questionLabel(count: number): string {
  return count === 1 ? "1 Question" : `${count} Questions`;
}

export function classLabel(className: string): string {
  const [grade, ...section] = className.split(" ");
  if (!section.length || Number.isNaN(Number(grade))) return className;
  return `Grade ${grade} • ${section.join(" ")}`;
}

export function submissionLabel(submitted: number, total: number): string {
  if (total === 0) return "-";
  return `${submitted}/${total}`;
}

export function testsCountLabel(count: number): string {
  return count === 1 ? "1 test" : `${count} tests`;
}

export function pageRangeLabel(
  page: number,
  pageSize: number,
  total: number,
): string {
  if (total === 0) return "Showing 0 of 0 tests";
  const start = (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, total);
  const noun = total === 1 ? "test" : "tests";
  return `Showing ${start} to ${end} of ${total} ${noun}`;
}

const dateFormat = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "short",
  timeZone: "Asia/Kolkata",
});

const timeFormat = new Intl.DateTimeFormat("en-IN", {
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
  timeZone: "Asia/Kolkata",
});

export function formatTestDate(value: string | null): string | null {
  if (!value) return null;
  const parsed = new Date(value);
  const date = dateFormat.format(parsed);
  const time = timeFormat
    .format(parsed)
    .replace(/\s*(am|pm)$/i, (_, mer: string) => ` ${mer.toUpperCase()}`);
  return `${date}, ${time}`;
}
