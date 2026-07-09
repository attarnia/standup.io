"use client";

import { useState } from "react";
import Link from "next/link";

import { ChevronDown, Folder } from "lucide-react";

import Badge from "@/components/ui/Badge";

export default function SidebarWorkSpaces() {
  const [open, setOpen] = useState(true);

  return (
    <li>
      <div className="flex flex-col gap-2">
        <div className="flex w-full items-center justify-between rounded-xl transition-colors p-2 hover:bg-muted/20">
          <Link
            href="/dashboard/workspaces"
            className="flex flex-1 items-center gap-3"
          >
            <Folder size={20} />
            <span>Workspaces</span>
          </Link>

          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle workspaces"
            className="p-1"
          >
            <ChevronDown
              className={`transition-transform duration-200 ${
                open ? "rotate-180" : ""
              }`}
              size={18}
            />
          </button>
        </div>

        {open && (
          <ul className="ml-6">
            <li>
              <Link
                href="/projects/frontend"
                className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-muted/20"
              >
                <span>Frontend 👑</span>
                <Badge>5</Badge>
              </Link>
            </li>
            <li>
              <Link
                href="/projects/backend"
                className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-(--muted)/50"
              >
                <span>Backend</span>
                <Badge>5</Badge>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </li>
  );
}
