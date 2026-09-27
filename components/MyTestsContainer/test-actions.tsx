import type { TestRecord } from "@/lib/tests";

type TestActionsProps = {
  test: TestRecord;
};

const actionButtonClassName =
  "h-8 cursor-pointer rounded-lg border border-[#D7DCE5] bg-white px-3 text-sm text-table-value transition-colors hover:bg-[#F4F6F8] hover:text-ink";

export function TestActions({ test }: TestActionsProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        aria-label={`View ${test.title}`}
        className={actionButtonClassName}
      >
        View
      </button>
      <button
        type="button"
        aria-label={`Result for ${test.title}`}
        className={actionButtonClassName}
      >
        Result
      </button>
    </div>
  );
}
