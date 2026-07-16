"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import { useSidebar } from "./sidebar-context";

interface Props {
  href: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

export default function SidebarItem({ href, icon: Icon, children }: Props) {
  const pathname = usePathname();
  const { isCollapsed } = useSidebar();

  const isActive =
    href === "/dashboard"
      ? pathname === href
      : pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      title={isCollapsed ? String(children) : undefined}
      className={`
        flex items-center gap-3 rounded-lg px-2 py-2 text-sm
        transition-colors duration-150
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50
        ${isCollapsed ? "justify-center" : ""}
        ${isActive
          ? "bg-border text-text font-medium"
          : "text-muted hover:bg-border/60 hover:text-neutral"
        }
      `}
    >
      <Icon size={17} aria-hidden className="shrink-0" />

      {!isCollapsed && (
        <span className="truncate">{children}</span>
      )}
    </Link>
  );
}
