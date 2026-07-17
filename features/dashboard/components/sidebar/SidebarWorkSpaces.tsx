"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Folder } from "lucide-react";
import { useSidebar } from "./sidebar-context";



const workspaces = [
  { id: "1", name: "Frontend", href: "/dashboard/workspaces/1", count: 5 },
  { id: "2", name: "Backend", href: "/dashboard/workspaces/2", count: 3 },
];


export default function SidebarWorkspaces() {
  const [isOpen, setIsOpen] = useState(true);
  const { isCollapsed } = useSidebar();
  const pathname = usePathname();

  if (isCollapsed) {
    return (
      <Link
        href="/dashboard/workspaces"
        title="Workspaces"
        aria-label="Workspaces"
        className="flex justify-center rounded-lg px-2 py-2 text-muted hover:bg-border/60 hover:text-neutral transition-colors duration-150"
      >
        <Folder size={17} aria-hidden />
      </Link>
    );
  }

  return (
    <div>
      <div className="flex items-center rounded-lg transition-colors duration-150 hover:bg-border/60 group">
        <Link
          href="/dashboard/workspaces"
          className="flex flex-1 items-center gap-3 px-2 py-2 text-sm text-muted hover:text-neutral transition-colors duration-150"
        >
          <Folder size={17} aria-hidden className="shrink-0" />
          <span className="truncate">Workspaces</span>
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Collapse workspaces" : "Expand workspaces"}
          className="mr-1 flex h-6 w-6 items-center justify-center rounded text-muted hover:text-neutral transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
        >
          <ChevronDown
            size={14}
            aria-hidden
            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      <div
        className={`
          grid transition-all duration-300 ease-in-out
          ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
        `}
      >
        <ul className="overflow-hidden ml-4 mt-1 space-y-0.5" role="list">
          {workspaces.map((ws) => {
            const isActive = pathname === ws.href || pathname.startsWith(ws.href + "/");

            return (
              <li key={ws.id}>
                <Link
                  href={ws.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`
                    flex items-center justify-between rounded-lg px-2 py-1.5 text-sm
                    transition-colors duration-150
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50
                    ${isActive
                      ? "bg-border text-text font-medium"
                      : "text-muted hover:bg-border/60 hover:text-neutral"
                    }
                  `}
                >
                  <span className="truncate">{ws.name}</span>
                  <span
                    aria-label={`${ws.count} members`}
                    className="ml-2 shrink-0 rounded-md bg-border px-1.5 py-0.5 text-xs text-muted"
                  >
                    {ws.count}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
