import {
  AiAssistantIcon,
  BookIcon,
  ClipboardListIcon,
  ClipboardPlusIcon,
  FolderIcon,
  GraduationCapIcon,
  ResultIcon,
} from "./icons";
import type { Account, NavItemConfig, Workspace } from "./types";

export const product = {
  name: "Intellishala",
  mark: "I",
} as const;

export const workspace: Workspace = {
  label: "Workspace",
  name: "Demo 2",
  role: "Teacher",
};

export const account: Account = {
  name: "Teacher",
  detail: "Demo 2",
  initials: "T",
};

export const navItems: NavItemConfig[] = [
  { id: "my-classes", label: "My Classes", icon: GraduationCapIcon },
  { id: "create-test", label: "Create Test", icon: ClipboardPlusIcon },
  { id: "my-tests", label: "My Tests", icon: ClipboardListIcon },
  { id: "homework", label: "Homework", icon: BookIcon },
  { id: "question-bank", label: "Question Bank", icon: BookIcon },
  { id: "my-files", label: "My Files", icon: FolderIcon },
  { id: "result", label: "Result", icon: ResultIcon },
  { id: "ai-assistant", label: "AI Assistant", icon: AiAssistantIcon },
];

export const defaultActiveNavId = "my-tests";
