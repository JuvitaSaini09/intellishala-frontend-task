"use client";

import type { TestRecord, TestStatus } from "@/lib/tests";
import type { TestFilterState } from "./filter-tests";
import { uniqueClassNames } from "./filter-tests";
import { FilterSelect } from "./filter-select";
import { testsCountLabel } from "./format";
import { statusOptions } from "./status-pill";

type TestsToolbarProps = {
  tests: TestRecord[];
  count: number;
  filters: TestFilterState;
  onQueryChange: (query: string) => void;
  onClassNameChange: (className: string) => void;
  onStatusChange: (status: TestStatus | "") => void;
};

const fieldClassName =
  "h-10 rounded-lg border border-field bg-white px-3 text-sm text-[#4A4A4A] outline-none placeholder:text-soft focus:border-brand min-[960px]:h-9";

export function TestsToolbar({
  tests,
  count,
  filters,
  onQueryChange,
  onClassNameChange,
  onStatusChange,
}: TestsToolbarProps) {
  const classNames = uniqueClassNames(tests);

  const classOptions = [
    { value: "", label: "All Classes" },
    ...classNames.map((className) => ({
      value: className,
      label: className,
    })),
  ];

  const statusFilterOptions = [
    { value: "", label: "All Status" },
    ...statusOptions.map((status) => ({
      value: status,
      label: status,
    })),
  ];

  return (
    <div className="flex flex-col gap-3.5 border-b border-line py-4 min-[960px]:flex-row min-[960px]:items-center min-[960px]:justify-between min-[960px]:gap-3">
      <div className="flex items-center gap-2">
        <h2 className="text-base font-semibold text-ink">My Tests</h2>
        <p
          aria-live="polite"
          className="inline-flex items-center rounded-lg bg-[#EAF1FB] px-2.5 py-1 text-xs font-medium text-brand"
        >
          {testsCountLabel(count)}
        </p>
      </div>

      <div className="flex w-full flex-col gap-2.5 min-[960px]:w-auto min-[960px]:flex-row min-[960px]:items-center min-[960px]:gap-3">
        <label className="relative w-full min-[960px]:w-[200px]">
          <span className="sr-only">Search Tests</span>
          <SearchIcon />
          <input
            type="search"
            value={filters.query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search tests"
            className={`${fieldClassName} w-full pr-3 pl-8`}
          />
        </label>

        <div className="grid w-full grid-cols-2 gap-2.5 min-[960px]:flex min-[960px]:w-auto min-[960px]:gap-3">
          <FilterSelect
            label="Filter by class"
            value={filters.className}
            options={classOptions}
            onChange={onClassNameChange}
            className="min-w-0 min-[960px]:w-[140px]"
          />

          <FilterSelect
            label="Filter by status"
            value={filters.status}
            options={statusFilterOptions}
            onChange={(value) => onStatusChange(value as TestStatus | "")}
            className="min-w-0 min-[960px]:w-[140px]"
          />
        </div>
      </div>
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
      className="pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-soft"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}
