import type { TestRecord, TestStatus } from "@/lib/tests";
import type { TestFilterState } from "./filter-tests";
import { uniqueClassNames } from "./filter-tests";
import { testsCountLabel } from "./format";
import { statusOptions } from "./status-pill";

type TestsToolbarProps = {
  tests: TestRecord[];
  filters: TestFilterState;
  visibleCount: number;
  onQueryChange: (query: string) => void;
  onClassNameChange: (className: string) => void;
  onStatusChange: (status: TestStatus | "") => void;
};

const fieldClassName =
  "h-10 rounded-lg border border-[#E6E8EE] bg-white px-3 text-sm text-[#2C2C2E] outline-none focus:border-[#0057F3] focus:ring-2 focus:ring-[#0057F3]/20";

export function TestsToolbar({
  tests,
  filters,
  visibleCount,
  onQueryChange,
  onClassNameChange,
  onStatusChange,
}: TestsToolbarProps) {
  const classNames = uniqueClassNames(tests);

  return (
    <div className="flex flex-col gap-3 border-b border-[#F0F1F5] p-4 sm:p-5 lg:flex-row lg:items-center">
      <label className="relative min-w-0 lg:flex-1">
        <span className="sr-only">Search tests</span>
        <SearchIcon />
        <input
          type="search"
          value={filters.query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search by test name"
          className={`${fieldClassName} w-full pr-3 pl-9`}
        />
      </label>

      <label className="min-w-0 lg:w-44">
        <span className="sr-only">Filter by class</span>
        <select
          value={filters.className}
          onChange={(event) => onClassNameChange(event.target.value)}
          className={`${fieldClassName} w-full`}
        >
          <option value="">All classes</option>
          {classNames.map((className) => (
            <option key={className} value={className}>
              {className}
            </option>
          ))}
        </select>
      </label>

      <label className="min-w-0 lg:w-44">
        <span className="sr-only">Filter by status</span>
        <select
          value={filters.status}
          onChange={(event) =>
            onStatusChange(event.target.value as TestStatus | "")
          }
          className={`${fieldClassName} w-full`}
        >
          <option value="">All statuses</option>
          {statusOptions.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </label>

      <p
        aria-live="polite"
        className="inline-flex h-10 items-center self-start rounded-full bg-[#E8F2FE] px-3 text-sm font-medium text-[#0057F3] lg:ml-auto"
      >
        {testsCountLabel(visibleCount, tests.length)}
      </p>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-[#8B909A]"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}
