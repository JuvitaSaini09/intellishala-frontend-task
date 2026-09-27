import { tests } from "@/lib/tests";
import { PageHeader } from "./page-header";
import { TestsBoard } from "./tests-board";

export default function MyTestsContainer() {
  return (
    <div className="px-4 py-6 sm:px-8 sm:py-7">
      <PageHeader />
      <TestsBoard tests={tests} />
    </div>
  );
}
