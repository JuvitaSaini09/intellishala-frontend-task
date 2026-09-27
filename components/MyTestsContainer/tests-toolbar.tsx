"use client";

import type { TestRecord, TestStatus } from "@/lib/tests";
import type { TestFilterState } from "./filter-tests";
import { uniqueClassNames } from "./filter-tests";
import { FilterSelect } from "./filter-select";
import { testsCountLabel } from "./format";
import { statusOptions } from "./status-pill";

type TestsToolbarProps = {
  tests: TestRecord[];
  filters: TestFilterState;
  onQueryChange: (query: string) => void;
  onClassNameChange: (className: string) => void;
  onStatusChange: (status: TestStatus | "") => void;
};

const fieldClassName =
  "h-9 rounded-lg border border-field bg-white px-3 text-sm text-[#4A4A4A] outline-none placeholder:text-soft focus:border-brand";

export function TestsToolbar({
  tests,
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
    <div className="flex flex-col gap-3 border-b border-line py-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center gap-2">
        <h2 className="text-base font-semibold text-ink">My Tests</h2>
        <p
          aria-live="polite"
          className="inline-flex items-center rounded-lg bg-[#EAF1FB] px-2.5 py-1 text-xs font-medium text-brand"
        >
          {testsCountLabel(tests.length)}
        </p>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
        <label className="relative sm:w-[200px]">
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

        <FilterSelect
          label="Filter by class"
          value={filters.className}
          options={classOptions}
          onChange={onClassNameChange}
          className="sm:w-[140px]"
        />

        <FilterSelect
          label="Filter by status"
          value={filters.status}
          options={statusFilterOptions}
          onChange={(value) => onStatusChange(value as TestStatus | "")}
          className="sm:w-[140px]"
        />
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
