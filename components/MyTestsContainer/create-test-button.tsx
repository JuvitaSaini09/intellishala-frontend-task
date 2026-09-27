export function CreateTestButton() {
  return (
    <button
      type="button"
      className="inline-flex h-11 shrink-0 cursor-pointer items-center gap-2.5 rounded-lg bg-brand px-5 text-[15px] font-medium text-white transition-colors hover:brightness-95"
    >
      <span aria-hidden="true" className="text-xl leading-none font-light">
        +
      </span>
      Create Test
    </button>
  );
}
