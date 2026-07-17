"use client";

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useSidebar } from "./sidebar-context";
import Link from "next/link";

export default function SidebarHeader() {
  const { isCollapsed, toggleCollapse } = useSidebar();

  return (
    <header
      className={`
        flex h-14 shrink-0 items-center border-b border-border px-3
        ${isCollapsed ? "justify-center" : "justify-between"}
      `}
    >
      {!isCollapsed && (
        <Link href='/'>
          <span className="font-bold text-text tracking-tight">
            StandUp
          </span>
        </Link>
      )}

      <button
        type="button"
        onClick={toggleCollapse}
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        className="flex h-8 w-8 items-center justify-center rounded-lg text-muted hover:bg-border hover:text-text transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
      >
        {isCollapsed ? (
          <PanelLeftOpen size={16} aria-hidden />
        ) : (
          <PanelLeftClose size={16} aria-hidden />
        )}
      </button>
    </header>
  );
}
