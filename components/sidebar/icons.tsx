import type { ReactNode } from "react";
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

export function GraduationCapIcon({ className }: SidebarIconProps) {
  return (
    <Icon className={className}>
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c1.2 1.6 3.4 2.5 6 2.5s4.8-.9 6-2.5v-5" />
    </Icon>
  );
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

export function FileTextIcon({ className }: SidebarIconProps) {
  return (
    <Icon className={className}>
      <path d="M14 3H7.5A1.5 1.5 0 0 0 6 4.5v15A1.5 1.5 0 0 0 7.5 21h9a1.5 1.5 0 0 0 1.5-1.5V8Z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h4" />
    </Icon>
  );
}

export function BookOpenIcon({ className }: SidebarIconProps) {
  return (
    <Icon className={className}>
      <path d="M12 7.2C10.8 5.8 8.9 5 6.5 5H3v13h3.5c2.2 0 4 0.7 5.5 2" />
      <path d="M12 7.2C13.2 5.8 15.1 5 17.5 5H21v13h-3.5c-2.2 0-4 0.7-5.5 2" />
    </Icon>
  );
}

export function FolderIcon({ className }: SidebarIconProps) {
  return (
    <Icon className={className}>
      <path d="M3 7.5A1.5 1.5 0 0 1 4.5 6h4l1.6 1.8H19.5A1.5 1.5 0 0 1 21 9.3v8.2a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5Z" />
    </Icon>
  );
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

export function SparklesIcon({ className }: SidebarIconProps) {
  return (
    <Icon className={className}>
      <path d="M12 3.5 13.2 8 17.5 9.2 13.2 10.4 12 15 10.8 10.4 6.5 9.2 10.8 8Z" />
      <path d="M18 14.5 18.6 16.4 20.5 17 18.6 17.6 18 19.5 17.4 17.6 15.5 17 17.4 16.4Z" />
    </Icon>
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
