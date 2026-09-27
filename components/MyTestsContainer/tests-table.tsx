import type { TestRecord } from "@/lib/tests";
import { DateText } from "./date-text";
import { questionLabel, submissionLabel } from "./format";
import { StatusPill } from "./status-pill";
import { TestActions } from "./test-actions";
import { TestCard } from "./test-card";

type TestsTableProps = {
  tests: TestRecord[];
};

const headerClassName =
  "px-4 py-3 text-left text-xs font-medium tracking-wide text-[#8B909A] uppercase";

export function TestsTable({ tests }: TestsTableProps) {
  return (
    <>
      <div className="hidden overflow-x-auto lg:block">
        <table className="w-full min-w-[960px] border-collapse">
          <caption className="sr-only">Tests</caption>
          <thead className="bg-[#F8F9FC]">
            <tr>
              <th className={headerClassName}>Test</th>
              <th className={headerClassName}>Class</th>
              <th className={headerClassName}>Subject</th>
              <th className={headerClassName}>Assigned</th>
              <th className={headerClassName}>Due</th>
              <th className={headerClassName}>Status</th>
              <th className={headerClassName}>Submissions</th>
              <th className={`${headerClassName} text-right`}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tests.map((test) => (
              <tr key={test.id} className="border-t border-[#F0F1F5]">
                <td className="px-4 py-3.5">
                  <p className="text-sm font-semibold text-[#1C1C1E]">
                    {test.title}
                  </p>
                  <p className="mt-0.5 text-xs text-[#8B909A]">
                    {questionLabel(test.questionCount)}
                  </p>
                </td>
                <td className="px-4 py-3.5 text-sm whitespace-nowrap text-[#2C2C2E]">
                  {test.className}
                </td>
                <td className="px-4 py-3.5 text-sm whitespace-nowrap text-[#2C2C2E]">
                  {test.subject}
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <DateText value={test.assignedAt} />
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <DateText value={test.dueAt} />
                </td>
                <td className="px-4 py-3.5 whitespace-nowrap">
                  <StatusPill status={test.status} />
                </td>
                <td className="px-4 py-3.5 text-sm font-medium whitespace-nowrap text-[#2C2C2E] tabular-nums">
                  {submissionLabel(
                    test.submissions.submitted,
                    test.submissions.total,
                  )}
                </td>
                <td className="px-4 py-3.5">
                  <div className="flex justify-end">
                    <TestActions test={test} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="divide-y divide-[#F0F1F5] lg:hidden">
        {tests.map((test) => (
          <TestCard key={test.id} test={test} />
        ))}
      </ul>
    </>
  );
}
