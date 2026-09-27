import type { TestRecord } from "@/lib/tests";

type TestActionsProps = {
  test: TestRecord;
};

export function TestActions({ test }: TestActionsProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        aria-label={`View ${test.title}`}
        className="h-8 cursor-pointer rounded-lg border border-[#D7DCE5] bg-white px-3 text-xs font-medium text-[#2C2C2E] hover:bg-[#F4F6F8]"
      >
        View
      </button>
      <button
        type="button"
        aria-label={`Result for ${test.title}`}
        className="h-8 cursor-pointer rounded-lg bg-[#0057F3] px-3 text-xs font-medium text-white hover:bg-[#004AD4]"
      >
        Result
      </button>
    </div>
  );
}
