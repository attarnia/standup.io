"use client";

import { useSidebar, SidebarProvider } from "./sidebar-context";
import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";

// ─── Shell (uses context) ─────────────────────────────────────────────────────

function SidebarShell() {
  const { isCollapsed, isMobileOpen, closeMobile } = useSidebar();

  return (
    <>
      {/* Mobile backdrop */}
      <div
        aria-hidden="true"
        onClick={closeMobile}
        className={`
          fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden
          transition-opacity duration-300
          ${isMobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 flex flex-col bg-surface border-r border-border
          transition-all duration-300 ease-in-out
          md:relative md:translate-x-0
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          ${isCollapsed ? "w-[72px]" : "w-64"}
        `}
      >
        <SidebarHeader />
        <SidebarNav />
      </aside>
    </>
  );
}

// ─── Sidebar (wraps with provider) ───────────────────────────────────────────

export default function Sidebar() {
  return (
    <SidebarProvider>
      <SidebarShell />
    </SidebarProvider>
  );
}

// ─── Mobile trigger (place in layout header) ─────────────────────────────────
// Usage: <SidebarTrigger />

export function SidebarTrigger() {
  // Must be a child of the layout that renders <Sidebar />
  // Wrap your layout with <SidebarProvider> and use useSidebar here
  // Or handle this with a separate context at the layout level
  return null;
}