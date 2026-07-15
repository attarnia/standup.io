"use client";

import {
  FileText,
  House,
  Settings,
  Sparkles,
  Users2,
  type LucideIcon,
} from "lucide-react";

import SidebarItem from "./SidebarItem";
import SidebarWorkspaces from "./SidebarWorkSpaces";
import { useSidebar } from "./sidebar-context";

// ─── Types ────────────────────────────────────────────────────────────────────

type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

type NavSection = {
  title: string;
  items?: NavItem[];
  component?: React.ReactNode;
};

// ─── Config ───────────────────────────────────────────────────────────────────

const sections: NavSection[] = [
  {
    title: "General",
    items: [
      { label: "Dashboard", href: "/dashboard", icon: House },
      { label: "Members", href: "/dashboard/members", icon: Users2 },
    ],
  },
  {
    title: "Workspaces",
    component: <SidebarWorkspaces />,
  },
  {
    title: "Tools",
    items: [
      { label: "AI", href: "/dashboard/ai", icon: Sparkles },
      { label: "Reports", href: "/dashboard/reports", icon: FileText },
    ],
  },
];

const bottomItems: NavItem[] = [
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function SidebarNav() {
  const { isCollapsed } = useSidebar();

  return (
    <nav
      aria-label="Main navigation"
      className="flex flex-1 flex-col justify-between overflow-y-auto px-2 py-3"
    >
      {/* Main sections */}
      <div className="space-y-4">
        {sections.map((section) => (
          <section key={section.title} aria-label={section.title}>
            {/* Section label — hidden when collapsed */}
            {!isCollapsed && (
              <p className="mb-1 px-2 text-[11px] font-medium uppercase tracking-wider text-muted/60">
                {section.title}
              </p>
            )}

            {section.items && (
              <ul role="list" className="space-y-0.5">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <SidebarItem href={item.href} icon={item.icon}>
                      {item.label}
                    </SidebarItem>
                  </li>
                ))}
              </ul>
            )}

            {section.component}
          </section>
        ))}
      </div>

      {/* Bottom settings */}
      <div className="border-t border-border pt-3">
        <ul role="list" className="space-y-0.5">
          {bottomItems.map((item) => (
            <li key={item.href}>
              <SidebarItem href={item.href} icon={item.icon}>
                {item.label}
              </SidebarItem>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
