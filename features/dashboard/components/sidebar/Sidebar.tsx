"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { SidebarProvider, useSidebar } from "./sidebar-context";
import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";


function MobileTopBar() {
  const { openMobile } = useSidebar();

  return (
    <div className="md:hidden fixed top-0 inset-x-0 z-30 h-14 flex items-center gap-3 px-4 bg-surface border-b border-border">
      <button
        type="button"
        onClick={openMobile}
        aria-label="Open navigation"
        className="flex h-8 w-8 items-center justify-center rounded-lg text-muted hover:bg-border hover:text-text transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
      >
        <Menu size={18} aria-hidden />
      </button>
      <Link href="/" className="font-bold text-sm text-text tracking-tight">
        StandUp
      </Link>
    </div>
  );
}


function SidebarShell() {
  const { isCollapsed, isMobileOpen, close } = useSidebar();

  return (
    <>
      <MobileTopBar />

      <div
        aria-hidden="true"
        onClick={close}
        className={`
          fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden
          transition-opacity duration-300
          ${isMobileOpen ? "opacity-100" : "pointer-events-none opacity-0"}
        `}
      />

      <div
        aria-hidden="true"
        onClick={close}
        className={`
          hidden md:block fixed inset-0 z-40
          transition-opacity duration-300
          ${!isCollapsed ? "opacity-100" : "pointer-events-none opacity-0"}
        `}
      />

      <aside
        className={`
          fixed inset-y-0 left-0 z-50
          flex flex-col
          border-r border-border bg-surface
          transition-all duration-300 ease-in-out

          ${isCollapsed ? "w-20" : "w-60"}
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <div className="shrink-0 border-b border-border pl-3">
          <SidebarHeader />
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-5">
          <SidebarNav />
        </div>
      </aside>
    </>
  );
}


export default function Sidebar() {
  return (
    <SidebarProvider>
      <SidebarShell />
    </SidebarProvider>
  );
}
