"use client";

import Sidebar from "@/components/sidebar";
import { MobileTopBar } from "@/components/sidebar/mobile-top-bar";
import {
  SidebarProvider,
  useSidebar,
} from "@/components/sidebar/sidebar-context";
import type { ReactNode } from "react";

function Shell({ children }: { children: ReactNode }) {
  const { open, close } = useSidebar();

  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-page">
      <MobileTopBar />
      <div className="relative flex min-h-0 flex-1 overflow-hidden">
        {open ? (
          <button
            type="button"
            aria-label="Close sidebar"
            className="fixed inset-0 z-40 bg-[#111827]/25 lg:hidden"
            onClick={close}
          />
        ) : null}
        <Sidebar />
        <section className="min-w-0 flex-1 overflow-y-auto">{children}</section>
      </div>
    </div>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <Shell>{children}</Shell>
    </SidebarProvider>
  );
}
