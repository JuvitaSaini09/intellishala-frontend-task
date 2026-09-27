"use client";

import { useMemo, useState } from "react";
import type { TestRecord } from "@/lib/tests";
import { EmptyState } from "./empty-state";
import {
  filterTests,
  initialFilters,
  type TestFilterState,
} from "./filter-tests";
import { PAGE_SIZE } from "./format";
import { Pagination } from "./pagination";
import { TestsTable } from "./tests-table";
import { TestsToolbar } from "./tests-toolbar";

type TestsBoardProps = {
  tests: TestRecord[];
};

export function TestsBoard({ tests }: TestsBoardProps) {
  const [filters, setFilters] = useState<TestFilterState>(initialFilters);
  const [page, setPage] = useState(1);

  const visibleTests = useMemo(
    () => filterTests(tests, filters),
    [tests, filters],
  );

  const pageCount = Math.max(1, Math.ceil(visibleTests.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const pagedTests = visibleTests.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  function updateFilters(patch: Partial<TestFilterState>) {
    setFilters((current) => ({ ...current, ...patch }));
    setPage(1);
  }

  return (
    <section className="rounded-2xl bg-white px-5 shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
      <TestsToolbar
        tests={tests}
        filters={filters}
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
          onAction={() => {
            setFilters(initialFilters);
            setPage(1);
          }}
        />
      ) : null}

      {visibleTests.length > 0 ? <TestsTable tests={pagedTests} /> : null}

      {visibleTests.length > 0 ? (
        <Pagination
          page={currentPage}
          pageCount={pageCount}
          pageSize={PAGE_SIZE}
          total={visibleTests.length}
          onPageChange={setPage}
        />
      ) : null}
    </section>
  );
}
