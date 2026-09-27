import type { TestRecord } from "@/lib/tests";
import { ClassSubject } from "./class-subject";
import { DateText } from "./date-text";
import { questionLabel, submissionLabel } from "./format";
import { StatusPill } from "./status-pill";
import { TestActions } from "./test-actions";
import { TestCard } from "./test-card";

type TestsTableProps = {
  tests: TestRecord[];
};

const headerClassName =
  "px-3 py-3 text-left text-[11px] font-medium tracking-[0.06em] text-table-head uppercase first:pl-0 last:pr-0";

const cellClassName = "px-3 py-3.5 first:pl-0 last:pr-0";

export function TestsTable({ tests }: TestsTableProps) {
  return (
    <>
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[980px] table-fixed border-collapse">
          <caption className="sr-only">Tests</caption>
          <colgroup>
            <col className="w-[20%]" />
            <col className="w-[16%]" />
            <col className="w-[14%]" />
            <col className="w-[14%]" />
            <col className="w-[10%]" />
            <col className="w-[10%]" />
            <col className="w-[16%]" />
          </colgroup>
          <thead>
            <tr>
              <th className={headerClassName}>Title</th>
              <th className={headerClassName}>Class &amp; Subject</th>
              <th className={headerClassName}>Assigned</th>
              <th className={headerClassName}>Due</th>
              <th className={headerClassName}>Status</th>
              <th className={`${headerClassName} text-center`}>Submissions</th>
              <th className={headerClassName}>Action</th>
            </tr>
          </thead>
          <tbody>
            {tests.map((test) => (
              <tr key={test.id} className="border-t border-line">
                <td className={cellClassName}>
                  <p className="text-sm font-semibold text-ink">{test.title}</p>
                  <p className="mt-0.5 text-xs text-soft">
                    {questionLabel(test.questionCount)}
                  </p>
                </td>
                <td className={cellClassName}>
                  <ClassSubject test={test} />
                </td>
                <td className={cellClassName}>
                  <DateText value={test.assignedAt} />
                </td>
                <td className={cellClassName}>
                  <DateText value={test.dueAt} />
                </td>
                <td className={cellClassName}>
                  <StatusPill status={test.status} />
                </td>
                <td
                  className={`${cellClassName} text-center text-sm whitespace-nowrap text-table-value tabular-nums`}
                >
                  {submissionLabel(
                    test.submissions.submitted,
                    test.submissions.total,
                  )}
                </td>
                <td className={`${cellClassName} whitespace-nowrap`}>
                  <TestActions test={test} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="flex flex-col gap-3 py-4 md:hidden">
        {tests.map((test) => (
          <TestCard key={test.id} test={test} />
        ))}
      </ul>
    </>
  );
}
