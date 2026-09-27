export function CreateTestButton() {
  return (
    <button
      type="button"
      className="inline-flex h-10 shrink-0 cursor-pointer items-center gap-2 rounded-lg bg-brand px-3.5 text-sm font-medium text-white transition-colors hover:brightness-95 sm:h-11 sm:gap-2.5 sm:px-5 sm:text-[15px]"
    >
      <span aria-hidden="true" className="text-xl leading-none font-light">
        +
      </span>
      Create Test
    </button>
  );
}
