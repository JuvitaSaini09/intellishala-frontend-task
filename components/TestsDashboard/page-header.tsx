import { CreateTestButton } from "./create-test-button";

export function PageHeader() {
  return (
    <div className="mb-5 flex items-start justify-between gap-3">
      <div className="min-w-0">
        <h1 className="text-2xl leading-8 font-semibold text-ink lg:text-[28px]">
          My Tests
        </h1>
        <p className="mt-0.5 text-sm text-muted lg:mt-1">
          All the tests you&apos;ve created, across your classes.
        </p>
      </div>
      <CreateTestButton />
    </div>
  );
}
