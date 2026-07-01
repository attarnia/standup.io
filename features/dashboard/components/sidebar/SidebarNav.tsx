import SidebarItem from "./SidebarItem";

import {
    LayoutDashboard,
    Settings,
} from "lucide-react";
import SidebarProjects from "./SidebarProject";

export default function SidebarNav() {
    return (
        <nav
            aria-label="Main navigation"
            className="flex h-full flex-col p-4"
        >
            <ul className="space-y-6">
                <li>
                    <SidebarItem
                        href="/dashboard"
                        icon={LayoutDashboard}
                    >
                        Dashboard
                    </SidebarItem>
                </li>

                <SidebarProjects />
                <li>
                    <SidebarItem
                        href="/Members"
                        icon={LayoutDashboard}
                    >
                        Members
                    </SidebarItem>
                </li>
            </ul>

            <ul className="mt-auto space-y-2 pb-4 pt-4">
                <li>
                    <SidebarItem
                        href="/settings"
                        icon={Settings}
                    >
                        Settings
                    </SidebarItem>
                </li>
            </ul>
        </nav>
    );
}