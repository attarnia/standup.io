"use client";

import {
  FileText,
  Folder,
  House,
  Users2,
  type LucideIcon,
} from "lucide-react";

import SidebarItem from "./SidebarItem";


type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};


const items: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: House },
  { label: "Members", href: "/dashboard/members", icon: Users2 },
  { label: "All Workspaces", href: "/dashboard/workspaces", icon: Folder },
  { label: "Reports", href: "/dashboard/reports", icon: FileText },
];


export default function SidebarNav() {
  return (
    <nav
      aria-label="Main navigation"
      className="flex flex-1 flex-col justify-between"
    >
      <ul role="list" className="space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <SidebarItem href={item.href} icon={item.icon}>
              {item.label}
            </SidebarItem>
          </li>
        ))}
      </ul>
    </nav>
  );
}
