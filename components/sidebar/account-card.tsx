import { account } from "./data";

export function AccountCard() {
  return (
    <div className="flex items-center gap-3 px-1 py-2">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#E7E9EE] text-sm font-semibold text-[#5C616A]">
        {account.initials}
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-medium text-[#2C2C2E]">
          {account.name}
        </p>
        <p className="truncate text-xs text-[#8B909A]">{account.detail}</p>
      </div>
    </div>
  );
}
