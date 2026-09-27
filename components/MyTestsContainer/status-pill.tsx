import type { TestStatus } from "@/lib/tests";

const statusStyles: Record<TestStatus, string> = {
  Active: "bg-[#E7F8EF] text-[#0F9F6E]",
  Scheduled: "bg-[#EAF1FB] text-brand",
  Completed: "bg-[#F3F4F6] text-[#4B5563]",
  Published: "bg-[#ebf7f1] text-[#32c77a]",
  Overdue: "bg-[#FDECEC] text-[#DC2626]",
  Draft: "bg-[#F2F2F2] text-[#6B7280]",
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
      className={`inline-flex items-center rounded-lg px-3 py-2 text-xs font-medium ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}
