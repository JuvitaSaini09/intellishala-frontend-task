import type { TestRecord } from "@/lib/tests";
import { DateText } from "./date-text";
import { questionLabel, submissionLabel } from "./format";
import { StatusPill } from "./status-pill";
import { TestActions } from "./test-actions";

type TestCardProps = {
  test: TestRecord;
};

export function TestCard({ test }: TestCardProps) {
  return (
    <li className="flex flex-col gap-3 px-4 py-4 sm:px-5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-[#1C1C1E]">{test.title}</p>
          <p className="mt-0.5 text-xs text-[#8B909A]">
            {questionLabel(test.questionCount)}
          </p>
        </div>
        <StatusPill status={test.status} />
      </div>

      <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
        <div>
          <dt className="text-xs text-[#8B909A]">Class</dt>
          <dd className="mt-0.5 text-[#2C2C2E]">{test.className}</dd>
        </div>
        <div>
          <dt className="text-xs text-[#8B909A]">Subject</dt>
          <dd className="mt-0.5 text-[#2C2C2E]">{test.subject}</dd>
        </div>
        <div>
          <dt className="text-xs text-[#8B909A]">Assigned</dt>
          <dd className="mt-0.5">
            <DateText value={test.assignedAt} />
          </dd>
        </div>
        <div>
          <dt className="text-xs text-[#8B909A]">Due</dt>
          <dd className="mt-0.5">
            <DateText value={test.dueAt} />
          </dd>
        </div>
      </dl>

      <div className="flex items-center justify-between gap-3">
        <p className="text-sm text-[#2C2C2E]">
          <span className="text-[#8B909A]">Submissions </span>
          <span className="font-medium tabular-nums">
            {submissionLabel(test.submissions.submitted, test.submissions.total)}
          </span>
        </p>
        <TestActions test={test} />
      </div>
    </li>
  );
}
