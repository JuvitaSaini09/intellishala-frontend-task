import type { NavItemConfig } from "./types";

type NavItemProps = {
  item: NavItemConfig;
  isActive: boolean;
  onSelect: (id: string) => void;
};

export function NavItem({ item, isActive, onSelect }: NavItemProps) {
  const Icon = item.icon;

  return (
    <button
      type="button"
      onClick={() => onSelect(item.id)}
      aria-current={isActive ? "page" : undefined}
      className={[
        "flex h-11 w-full cursor-pointer items-center gap-3 rounded-lg px-3 text-left text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0057F3]/30",
        isActive
          ? "bg-[#E8F2FE] font-semibold text-[#0057F3]"
          : "font-medium text-[#6E727A] hover:bg-[#F4F6F8]",
      ].join(" ")}
    >
      <Icon className="size-5 shrink-0" />
      <span className="truncate">{item.label}</span>
    </button>
  );
}
