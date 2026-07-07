import {
  House,
  Settings,
  Sparkles,
  Users2,
  type LucideIcon,
} from "lucide-react";

import SidebarItem from "./SidebarItem";
import SidebarProjects from "./SidebarWorkSpaces";

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
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: House,
      },
      {
        label: "Members",
        href: "/dashboard/members",
        icon: Users2,
      },
    ],
  },
  {
    title: "Projects",
    component: <SidebarProjects />,
  },
  {
    title: "AI",
    items: [
      {
        label: "AI",
        href: "/dashboard/ai",
        icon: Sparkles,
      },
    ],
  },
  {
    title: "Reports",
    items: [
      {
        label: "Reports",
        href: "/dashboard/reports",
        icon: Sparkles,
      },
    ],
  },
];

const bottomSection: NavSection = {
  title: "Preferences",
  items: [
    {
      label: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ],
};

export default function SidebarNav() {
  return (
    <nav
      aria-label="Main navigation"
      className="flex h-full flex-col px-2 py-4"
    >
      <div>
        {sections.map((section) => (
          <section key={section.title}>
            {section.items && (
              <ul>
                {section.items.map((item) => (
                  <li key={item.href} className="my-2">
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

      <div className="mt-auto border-muted pt-4">
        <ul className="space-y-1">
          {bottomSection.items?.map((item) => (
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
