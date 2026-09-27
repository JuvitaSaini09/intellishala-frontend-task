"use client";

import { useState } from "react";
import { defaultActiveNavId, navItems } from "./data";
import { NavItem } from "./nav-item";
import { useSidebar } from "./sidebar-context";

export function SidebarNav() {
  const [activeId, setActiveId] = useState(defaultActiveNavId);
  const { close } = useSidebar();

  function handleSelect(id: string) {
    setActiveId(id);
    close();
  }

  return (
    <nav aria-label="Main" className="mt-5 min-h-0 flex-1 overflow-y-auto">
      <ul className="flex flex-col gap-1">
        {navItems.map((item) => (
          <li key={item.id}>
            <NavItem
              item={item}
              isActive={item.id === activeId}
              onSelect={handleSelect}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
