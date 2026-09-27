"use client";

import { product } from "./data";
import { Logo } from "./logo";
import { useSidebar } from "./sidebar-context";
import { Title } from "./title";

export function MobileTopBar() {
  const { open, toggle } = useSidebar();

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-line bg-white px-4 lg:hidden">
      <div className="flex min-w-0 items-center gap-3">
        <Logo letter={product.mark} />
        <Title>{product.name}</Title>
      </div>
      <button
        type="button"
        aria-label={open ? "Close sidebar" : "Open sidebar"}
        aria-expanded={open}
        aria-controls="app-sidebar"
        onClick={toggle}
        className="flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-lg text-ink transition-colors hover:bg-[#EEF1F6]"
      >
        <MenuIcon />
      </button>
    </header>
  );
}

function MenuIcon() {
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
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}
