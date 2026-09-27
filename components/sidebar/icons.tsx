import { createElement, type ReactNode } from "react";
import { Book, Folder, GraduationCap, type IconNode } from "lucide";
import type { SidebarIconProps } from "./types";

function Icon({
  className,
  children,
}: SidebarIconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function LucideIcon({
  icon,
  className,
}: SidebarIconProps & { icon: IconNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {icon.map(([tag, attrs], index) =>
        createElement(tag, { ...attrs, key: index }),
      )}
    </svg>
  );
}

export function GraduationCapIcon({ className }: SidebarIconProps) {
  return <LucideIcon icon={GraduationCap} className={className} />;
}

export function ClipboardPlusIcon({ className }: SidebarIconProps) {
  return (
    <Icon className={className}>
      <rect x="8" y="3" width="8" height="4" rx="1" />
      <path d="M16 5h1.5A1.5 1.5 0 0 1 19 6.5v13A1.5 1.5 0 0 1 17.5 21h-11A1.5 1.5 0 0 1 5 19.5v-13A1.5 1.5 0 0 1 6.5 5H8" />
      <path d="M12 11v6" />
      <path d="M9 14h6" />
    </Icon>
  );
}

export function ClipboardListIcon({ className }: SidebarIconProps) {
  return (
    <Icon className={className}>
      <rect x="8" y="3" width="8" height="4" rx="1" />
      <path d="M16 5h1.5A1.5 1.5 0 0 1 19 6.5v13A1.5 1.5 0 0 1 17.5 21h-11A1.5 1.5 0 0 1 5 19.5v-13A1.5 1.5 0 0 1 6.5 5H8" />
      <path d="M9 12h6" />
      <path d="M9 16h6" />
    </Icon>
  );
}

export function BookIcon({ className }: SidebarIconProps) {
  return <LucideIcon icon={Book} className={className} />;
}

export function FolderIcon({ className }: SidebarIconProps) {
  return <LucideIcon icon={Folder} className={className} />;
}

export function ResultIcon({ className }: SidebarIconProps) {
  return (
    <Icon className={className}>
      <rect x="8" y="3" width="8" height="4" rx="1" />
      <path d="M16 5h1.5A1.5 1.5 0 0 1 19 6.5v13A1.5 1.5 0 0 1 17.5 21h-11A1.5 1.5 0 0 1 5 19.5v-13A1.5 1.5 0 0 1 6.5 5H8" />
      <path d="M8 17v-2.5" />
      <path d="M12 17V11" />
      <path d="M16 17v-4" />
    </Icon>
  );
}

export function AiAssistantIcon({ className }: SidebarIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinejoin="miter"
      className={className}
      aria-hidden="true"
    >
      <path d="M9 8.2 10.15 13.35 15.5 14.6 10.15 15.85 9 21.2 7.85 15.85 2.5 14.6 7.85 13.35Z" />
      <path d="M17.15 2.7 17.9 5.45 20.8 6.2 17.9 6.95 17.15 9.7 16.4 6.95 13.5 6.2 16.4 5.45Z" />
    </svg>
  );
}

export function SignOutIcon({ className }: SidebarIconProps) {
  return (
    <Icon className={className}>
      <path d="M10 6.5V5.8A1.8 1.8 0 0 0 8.2 4H5.8A1.8 1.8 0 0 0 4 5.8v12.4A1.8 1.8 0 0 0 5.8 20h2.4A1.8 1.8 0 0 0 10 18.2v-.7" />
      <path d="M10 12h10" />
      <path d="M16.5 8.5 20 12l-3.5 3.5" />
    </Icon>
  );
}
