import type { ComponentType } from "react";

export type SidebarIconProps = {
  className?: string;
};

export type SidebarIcon = ComponentType<SidebarIconProps>;

export type NavItemConfig = {
  id: string;
  label: string;
  icon: SidebarIcon;
};

export type Workspace = {
  label: string;
  name: string;
  role: string;
};

export type Account = {
  name: string;
  detail: string;
  initials: string;
};
