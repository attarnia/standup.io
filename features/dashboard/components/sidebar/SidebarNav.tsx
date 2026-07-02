import {
  LayoutDashboard,
  Settings,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";

import SidebarItem from "./SidebarItem";
import SidebarProjects from "./SidebarProject";

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
        icon: LayoutDashboard,
      },
      {
        label: "Members",
        href: "/dashboard/members",
        icon: Users,
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
        icon: Sparkles ,
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
      className="flex h-full flex-col px-3 py-4"
    >
      <div className="">
        {sections.map((section) => (
          <section key={section.title}>
       

            {section.items && (
              <ul className="">
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

      <div className="mt-auto border-t border-muted pt-4">
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
