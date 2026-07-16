"use client";

import {
  FileText,
  House,
  Settings,
  Sparkles,
  Users2,
  LogOut,
  type LucideIcon,
  Folder,
} from "lucide-react";

import { useRouter } from "next/navigation";

import SidebarItem from "./SidebarItem";
import SidebarWorkspaces from "./SidebarWorkSpaces";
import { useSidebar } from "./sidebar-context";

import { getSupabaseBrowserClient } from "@/lib/browser-client";

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
    items: [
      {
        label: "All Workspaces",
        href: "/dashboard/workspaces",
        icon: Folder,
      },
    ],
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
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function SidebarNav() {
  const { isCollapsed } = useSidebar();

  const router = useRouter();

  const supabase = getSupabaseBrowserClient();

  async function handleSignOut() {
    await supabase.auth.signOut();

    router.replace("/");
    router.refresh();
  }

  return (
    <nav
      aria-label="Main navigation"
      className="flex flex-1 flex-col justify-between overflow-y-auto px-2 py-3"
    >
      <div className="space-y-4">
        {sections.map((section) => (
          <section key={section.title} aria-label={section.title}>
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

      <div className="border-t border-border pt-3 space-y-1">
        <ul role="list" className="space-y-0.5">
          {bottomItems.map((item) => (
            <li key={item.href}>
              <SidebarItem href={item.href} icon={item.icon}>
                {item.label}
              </SidebarItem>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={handleSignOut}
          className={`
            flex w-full items-center gap-3 rounded-lg px-2 py-2 text-sm
            text-red-400 transition-colors duration-150
            hover:bg-red-500/10 hover:text-red-300
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400/40
            ${isCollapsed ? "justify-center" : ""}
          `}
        >
          <LogOut size={17} aria-hidden />

          {!isCollapsed && <span>Sign out</span>}
        </button>
      </div>
    </nav>
  );
}
