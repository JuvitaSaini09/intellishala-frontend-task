"use client";

import { useMemo, useState } from "react";
import type { TestRecord } from "@/lib/tests";
import { EmptyState } from "./empty-state";
import {
  filterTests,
  initialFilters,
  type TestFilterState,
} from "./filter-tests";
import { TestsTable } from "./tests-table";
import { TestsToolbar } from "./tests-toolbar";

type TestsBoardProps = {
  tests: TestRecord[];
};

export function TestsBoard({ tests }: TestsBoardProps) {
  const [filters, setFilters] = useState<TestFilterState>(initialFilters);
  const visibleTests = useMemo(
    () => filterTests(tests, filters),
    [tests, filters],
  );

  function updateFilters(patch: Partial<TestFilterState>) {
    setFilters((current) => ({ ...current, ...patch }));
  }

  return (
    <section className="overflow-hidden rounded-2xl border border-[#E6E8EE] bg-white">
      <TestsToolbar
        tests={tests}
        filters={filters}
        visibleCount={visibleTests.length}
        onQueryChange={(query) => updateFilters({ query })}
        onClassNameChange={(className) => updateFilters({ className })}
        onStatusChange={(status) => updateFilters({ status })}
      />

      {tests.length === 0 ? (
        <EmptyState
          title="No tests yet"
          description="Tests you create will show up here."
        />
      ) : null}

      {tests.length > 0 && visibleTests.length === 0 ? (
        <EmptyState
          title="No matching tests"
          description="Nothing matches this search and these filters."
          actionLabel="Clear filters"
          onAction={() => setFilters(initialFilters)}
        />
      ) : null}

      {visibleTests.length > 0 ? <TestsTable tests={visibleTests} /> : null}
    </section>
  );
}
