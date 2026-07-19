"use client";

import { createContext, useContext, useState } from "react";


type SidebarContextType = {
  isCollapsed: boolean;
  isMobileOpen: boolean;
  toggleCollapse: () => void;
  openMobile: () => void;
  closeMobile: () => void;
  close: () => void;
};


const SidebarContext = createContext<SidebarContextType | null>(null);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <SidebarContext.Provider
      value={{
        isCollapsed,
        isMobileOpen,
        toggleCollapse: () => setIsCollapsed((v) => !v),
        openMobile:     () => setIsMobileOpen(true),
        closeMobile:    () => setIsMobileOpen(false),
        close: () => {
          setIsCollapsed(true);
          setIsMobileOpen(false);
        },
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error("useSidebar must be used inside <SidebarProvider>");
  return ctx;
}