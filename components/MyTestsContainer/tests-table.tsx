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
  "px-5 py-3 text-left text-[11px] font-medium tracking-[0.08em] text-table-head uppercase";

export function TestsTable({ tests }: TestsTableProps) {
  return (
    <>
      <div className="hidden overflow-x-auto lg:block">
        <table className="w-full min-w-[980px] border-collapse">
          <caption className="sr-only">Tests</caption>
          <thead>
            <tr>
              <th className={headerClassName}>Title</th>
              <th className={headerClassName}>Class &amp; Subject</th>
              <th className={headerClassName}>Assigned</th>
              <th className={headerClassName}>Due</th>
              <th className={headerClassName}>Status</th>
              <th
                className="px-5 py-3 text-center text-[11px] font-medium tracking-[0.08em] text-table-head uppercase"
              >
                Submissions
              </th>
              <th className={headerClassName}>Action</th>
            </tr>
          </thead>
          <tbody>
            {tests.map((test) => (
              <tr key={test.id} className="border-t border-line">
                <td className="px-5 py-4">
                  <p className="max-w-[220px] text-sm font-semibold text-ink">
                    {test.title}
                  </p>
                  <p className="mt-0.5 text-xs text-soft">
                    {questionLabel(test.questionCount)}
                  </p>
                </td>
                <td className="px-5 py-4">
                  <ClassSubject test={test} />
                </td>
                <td className="px-5 py-4">
                  <DateText value={test.assignedAt} />
                </td>
                <td className="px-5 py-4">
                  <DateText value={test.dueAt} />
                </td>
                <td className="px-5 py-4">
                  <StatusPill status={test.status} />
                </td>
                <td className="px-5 py-4 text-center text-sm whitespace-nowrap text-table-value tabular-nums">
                  {submissionLabel(
                    test.submissions.submitted,
                    test.submissions.total,
                  )}
                </td>
                <td className="px-5 py-4">
                  <TestActions test={test} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="divide-y divide-line lg:hidden">
        {tests.map((test) => (
          <TestCard key={test.id} test={test} />
        ))}
      </ul>
    </>
  );
}
