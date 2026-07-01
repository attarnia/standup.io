"use client";

import { useState } from "react";
import Link from "next/link";

import {
    ChevronDown,
    FolderKanban,
} from "lucide-react";
import Badge from "@/components/ui/Badge";

export default function SidebarProjects() {

    const [open, setOpen] = useState(true);

    return (
        <li>

            <button
                onClick={() => setOpen(!open)}
                className="flex w-full items-center justify-between rounded-xl transition-colors p-3 hover:bg-(--muted)/50"
            >
                <div className="flex items-center gap-3">

                    <FolderKanban size={20} />

                    <span>Projects</span>

                </div>

                <ChevronDown
                    className={`transition-transform duration-200 ${open ? "rotate-180" : ""
                        }`}
                    size={18}
                />
            </button>

            {open && (

                <ul className="mt-2 ml-6 space-y-1">

                    <li>
                        <Link
                            href="/projects/frontend"
                            className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-(--muted)/50"
                        >
                            <span>
                                Frontend 👑
                            </span>

                            <Badge variant="success">
                                5
                            </Badge>
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/projects/backend"
                            className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-(--muted)/50"
                        >
                            <span>
                                Backend
                            </span>

                            <Badge variant="success">
                                5
                            </Badge>
                        </Link>
                    </li>

                </ul>

            )}

        </li>
    );
}