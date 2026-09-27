import type { TestStatus } from "@/lib/tests";

const statusStyles: Record<TestStatus, string> = {
  Active: "bg-[#E7F8EF] text-[#0F9F6E]",
  Scheduled: "bg-[#E8F2FE] text-[#0057F3]",
  Completed: "bg-[#F3F4F6] text-[#4B5563]",
  Published: "bg-[#EEF2FF] text-[#4338CA]",
  Overdue: "bg-[#FDECEC] text-[#DC2626]",
  Draft: "bg-[#FFF6E8] text-[#B45309]",
};

export const statusOptions: TestStatus[] = [
  "Active",
  "Scheduled",
  "Completed",
  "Published",
  "Overdue",
  "Draft",
];

type StatusPillProps = {
  status: TestStatus;
};

export function StatusPill({ status }: StatusPillProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}
