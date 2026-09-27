import { tests } from "@/lib/tests";
import { TestsBoard } from "./tests-board";

export default function MyTestsContainer() {
  return (
    <div className="px-4 py-6 sm:px-8 sm:py-8">
      <h1 className="mb-6 text-2xl font-semibold tracking-tight text-[#1C1C1E]">
        My Tests
      </h1>
      <TestsBoard tests={tests} />
    </div>
  );
}
