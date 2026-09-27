import { SignOutIcon } from "./icons";

export function SignOutButton() {
  return (
    <button
      type="button"
      className="flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#F0A3A0] bg-[#FFF1F0] text-sm font-medium text-[#EF4444] transition-colors hover:bg-[#FFE8E6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444]/30"
    >
      <SignOutIcon className="size-[18px]" />
      Sign out
    </button>
  );
}
