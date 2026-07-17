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

export default function SidebarItem({
  href,
  icon: Icon,
  children,
}: Props) {
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
        group flex h-10.25 items-center
        rounded-xl
        px-2.5
        transition-colors duration-100

        ${
          isActive
            ? "bg-border text-text"
            : "text-muted hover:bg-border/60 hover:text-neutral"
        }
      `}
    >
      <span className="flex h-5 w-5 shrink-0 items-center justify-center">
        <Icon
          size={18}
          aria-hidden
          className="transition-transform duration-200 group-hover:scale-110"
        />
      </span>

      <span
        className={`
          overflow-hidden whitespace-nowrap
          transition-[max-width,opacity,margin]
          duration-200 ease-in-out

          ${
            isCollapsed
              ? "ml-0 max-w-0 opacity-0"
              : "ml-3 max-w-45 opacity-100"
          }
        `}
      >
        {children}
      </span>
    </Link>
  );
}