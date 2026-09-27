import type { TestRecord } from "@/lib/tests";
import { ClassSubject } from "./class-subject";
import { DateText } from "./date-text";
import { questionLabel, submissionLabel } from "./format";
import { StatusPill } from "./status-pill";
import { TestActions } from "./test-actions";

type TestCardProps = {
  test: TestRecord;
};

export function TestCard({ test }: TestCardProps) {
  return (
    <li className="flex flex-col gap-3.5 rounded-xl border border-[#E8EAF0] bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[15px] leading-5 font-semibold text-ink">
            {test.title}
          </p>
          <p className="mt-1 text-xs text-soft">
            {questionLabel(test.questionCount)}
          </p>
        </div>
        <StatusPill status={test.status} />
      </div>

      <ClassSubject test={test} />

      <div className="grid grid-cols-2 gap-3 rounded-lg bg-[#F7F8FC] px-3 py-2.5">
        <div className="min-w-0">
          <p className="text-[11px] font-medium tracking-[0.02em] text-soft">
            Assigned
          </p>
          <div className="mt-1">
            <DateText value={test.assignedAt} />
          </div>
        </div>
        <div className="min-w-0">
          <p className="text-[11px] font-medium tracking-[0.02em] text-soft">
            Due Date
          </p>
          <div className="mt-1">
            <DateText value={test.dueAt} />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-[#F0F1F5] pt-3">
        <p className="text-sm text-table-value">
          <span className="text-soft">Submissions </span>
          <span className="tabular-nums">
            {submissionLabel(test.submissions.submitted, test.submissions.total)}
          </span>
        </p>
        <TestActions test={test} />
      </div>
    </li>
  );
}
