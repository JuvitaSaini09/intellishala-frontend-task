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
    <li className="flex flex-col gap-3 px-5 py-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-ink">{test.title}</p>
          <p className="mt-0.5 text-xs text-soft">
            {questionLabel(test.questionCount)}
          </p>
        </div>
        <StatusPill status={test.status} />
      </div>

      <ClassSubject test={test} />

      <dl className="grid grid-cols-2 gap-x-4 gap-y-3">
        <div>
          <dt className="text-xs text-soft">Assigned</dt>
          <dd className="mt-0.5">
            <DateText value={test.assignedAt} />
          </dd>
        </div>
        <div>
          <dt className="text-xs text-soft">Due</dt>
          <dd className="mt-0.5">
            <DateText value={test.dueAt} />
          </dd>
        </div>
      </dl>

      <div className="flex items-center justify-between gap-3">
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
