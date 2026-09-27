import { formatTestDate } from "./format";

type DateTextProps = {
  value: string | null;
};

export function DateText({ value }: DateTextProps) {
  const label = formatTestDate(value);

  if (!label) {
    return <span className="text-sm text-table-value">-</span>;
  }

  return (
    <span className="text-sm whitespace-nowrap text-table-value">{label}</span>
  );
}
