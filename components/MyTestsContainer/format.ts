export function questionLabel(count: number): string {
  return count === 1 ? "1 question" : `${count} questions`;
}

export function submissionLabel(submitted: number, total: number): string {
  return `${submitted}/${total}`;
}

export function testsCountLabel(visible: number, total: number): string {
  const noun = total === 1 ? "test" : "tests";
  if (visible === total) return `${total} ${noun}`;
  return `${visible} of ${total}`;
}

type TestDateParts = {
  date: string;
  time: string;
};

const dateFormat = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "Asia/Kolkata",
});

const timeFormat = new Intl.DateTimeFormat("en-IN", {
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
  timeZone: "Asia/Kolkata",
});

export function formatTestDate(value: string | null): TestDateParts | null {
  if (!value) return null;
  const parsed = new Date(value);
  return {
    date: dateFormat.format(parsed),
    time: timeFormat.format(parsed),
  };
}
