import Link from "next/link";
import { Plus, FolderPlus, Users, Settings } from "lucide-react";

const actions = [
  {
    title: "New Project",
    description: "Create a workspace",
    href: "/dashboard/projects/new",
    icon: FolderPlus,
  },
  {
    title: "Submit Report",
    description: "Send today's report",
    href: "/dashboard/report/new",
    icon: Plus,
  },
  {
    title: "Invite Members",
    description: "Add teammates",
    href: "/dashboard/members",
    icon: Users,
  },
  {
    title: "Settings",
    description: "Workspace settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function QuickActions() {
  return (
    <div className="rounded-3xl border border-zinc-800 p-6">
      <h2 className="text-lg font-semibold">Quick Actions</h2>
      <p className="mt-1 text-sm">
        Frequently used actions.
      </p>

      <div className="mt-5 space-y-3">
        {actions.map(({ title, description, href, icon: Icon }) => (
          <Link
            key={title}
            href={href}
            className="flex items-center gap-4 rounded-lg border-zinc-800 border  p-4 transition-colors hover:bg-muted/30"
          >
            <div className="rounded-lg bg-primary/10 p-2">
              <Icon className="h-5 w-5 text-primary" />
            </div>

            <div>
              <p className="font-medium">{title}</p>
              <p className="text-sm">{description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
