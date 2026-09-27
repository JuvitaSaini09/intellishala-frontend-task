"use client";

import { AccountCard } from "./account-card";
import { product } from "./data";
import { Logo } from "./logo";
import { SidebarNav } from "./sidebar-nav";
import { useSidebar } from "./sidebar-context";
import { SignOutButton } from "./sign-out-button";
import { Title } from "./title";
import { WorkspaceCard } from "./workspace-card";

export default function Sidebar() {
  const { open, close } = useSidebar();

  return (
    <aside
      id="app-sidebar"
      aria-label="Sidebar"
      className={[
        "flex h-full w-64 shrink-0 flex-col bg-white px-5 pt-3 pb-5 lg:pt-7",
        "fixed inset-y-0 right-0 z-50 transition-transform duration-200 ease-out",
        "lg:static lg:z-0 lg:visible lg:translate-x-0 lg:pointer-events-auto",
        open
          ? "translate-x-0"
          : "max-lg:translate-x-full max-lg:invisible max-lg:pointer-events-none",
      ].join(" ")}
    >
      <div className="mb-4 flex justify-end lg:hidden">
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={close}
          className="flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-lg text-ink transition-colors hover:bg-[#EEF1F6]"
        >
          <CloseIcon />
        </button>
      </div>
      <div className="hidden items-center gap-3 lg:flex">
        <Logo letter={product.mark} />
        <Title>{product.name}</Title>
      </div>
      <div className="lg:mt-7">
        <WorkspaceCard />
      </div>
      <SidebarNav />
      <footer className="mt-auto pt-6">
        <AccountCard />
        <div className="mt-3">
          <SignOutButton />
        </div>
      </footer>
    </aside>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      aria-hidden="true"
      className="size-5"
    >
      <path d="M6 6 18 18" />
      <path d="M18 6 6 18" />
    </svg>
  );
}
