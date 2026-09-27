import { CreateTestButton } from "./create-test-button";

export function PageHeader() {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h1 className="text-[28px] leading-8 font-semibold text-ink">My Tests</h1>
        <p className="mt-1 text-sm text-muted">
          All the tests you&apos;ve created, across your classes.
        </p>
      </div>
      <CreateTestButton />
    </div>
  );
}
