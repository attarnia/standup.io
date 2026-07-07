"use client";

import { useState } from "react";
import Link from "next/link";

import {
    ChevronDown,
    Folder,
} from "lucide-react";

import Badge from "@/components/ui/Badge";

export default function SidebarWorkSpaces() {
    const [open, setOpen] = useState(true);
    return (
      <li>
        <Link href="dashboard/workspaces" className="flex flex-col gap-2">
          <button
            onClick={() => setOpen(!open)}
            className="flex w-full items-center justify-between rounded-xl transition-colors p-2 hover:bg-muted/20"
          >
            <div className="flex items-center gap-3">
              <Folder size={20} />
              <span>Workspaces</span>
            </div>
            <ChevronDown
              className={`transition-transform duration-200 ${
                open ? "rotate-180" : ""
              }`}
              size={18}
            />
          </button>
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
        </Link>
      </li>
    );
}