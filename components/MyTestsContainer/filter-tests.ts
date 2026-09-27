import type { TestRecord, TestStatus } from "@/lib/tests";

export type TestFilterState = {
  query: string;
  className: string;
  status: TestStatus | "";
};

export const initialFilters: TestFilterState = {
  query: "",
  className: "",
  status: "",
};

export function uniqueClassNames(tests: TestRecord[]): string[] {
  return [...new Set(tests.map((test) => test.className))].sort((a, b) =>
    a.localeCompare(b, "en", { numeric: true }),
  );
}

export function filterTests(
  tests: TestRecord[],
  filters: TestFilterState,
): TestRecord[] {
  const query = filters.query.trim().toLowerCase();

  return tests.filter((test) => {
    const matchesQuery =
      query.length === 0 || test.title.toLowerCase().includes(query);
    const matchesClass =
      filters.className === "" || test.className === filters.className;
    const matchesStatus =
      filters.status === "" || test.status === filters.status;

    return matchesQuery && matchesClass && matchesStatus;
  });
}
