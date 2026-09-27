import { formatTestDate } from "./format";

type DateTextProps = {
  value: string | null;
};

export function DateText({ value }: DateTextProps) {
  const parts = formatTestDate(value);

  if (!parts) {
    return <span className="text-sm text-[#8B909A]">—</span>;
  }

  return (
    <span className="block">
      <span className="block text-sm text-[#2C2C2E]">{parts.date}</span>
      <span className="block text-xs text-[#8B909A]">{parts.time}</span>
    </span>
  );
}
