import { workspace } from "./data";

export function WorkspaceCard() {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-[#E6E8EE] px-3 py-3">
      <div className="min-w-0">
        <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#A3A6AD]">
          {workspace.label}
        </p>
        <p className="mt-1 truncate text-sm font-semibold text-[#3A3A3C]">
          {workspace.name}
        </p>
      </div>
      <span className="shrink-0 rounded-md bg-[#0057F3] px-2.5 py-1 text-xs font-semibold text-white">
        {workspace.role}
      </span>
    </div>
  );
}
