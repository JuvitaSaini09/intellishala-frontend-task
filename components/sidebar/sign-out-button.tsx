import { SignOutIcon } from "./icons";

export function SignOutButton() {
  return (
    <button
      type="button"
      className="flex h-11 w-full cursor-pointer items-center justify-start gap-2.5 rounded-xl border border-[#EF4444] bg-[#FDF2F0] px-4 text-sm font-medium text-[#EF4444] transition-colors hover:bg-[#FFE8E6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444]/30"
    >
      <SignOutIcon className="size-[18px] shrink-0" />
      Sign out
    </button>
  );
}
