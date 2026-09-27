"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const DESKTOP_QUERY = "(min-width: 1024px)";

type SidebarContextValue = {
  open: boolean;
  mobileOpen: boolean;
  isDesktop: boolean;
  setOpen: (open: boolean) => void;
  toggle: () => void;
};

const SidebarContext = createContext<SidebarContextValue | null>(null);

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_QUERY);

    function sync() {
      setIsDesktop(media.matches);
      if (media.matches) setMobileOpen(false);
    }

    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (isDesktop || !mobileOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMobileOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isDesktop, mobileOpen]);

  const toggle = useCallback(() => {
    if (window.matchMedia(DESKTOP_QUERY).matches) return;
    setMobileOpen((current) => !current);
  }, []);

  const setOpen = useCallback((next: boolean) => {
    if (window.matchMedia(DESKTOP_QUERY).matches) return;
    setMobileOpen(next);
  }, []);

  const value = useMemo(
    () => ({
      open: isDesktop || mobileOpen,
      mobileOpen,
      isDesktop,
      setOpen,
      toggle,
    }),
    [isDesktop, mobileOpen, setOpen, toggle],
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within SidebarProvider");
  }
  return context;
}
