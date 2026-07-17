"use client";

import { Folder } from "lucide-react";
import Link from "next/link";

export default function SidebarWorkspaces() {
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
      </div>
    </div>
  );
}
