import Button from "@/components/ui/Button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function WorkspaceHeader() {
  return (
    <header className="flex flex-col gap-6 border-b border-border pb-6 lg:flex-row lg:items-center lg:justify-between">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-text">
          Workspaces
        </h1>

        <p className="mt-2 leading-5 text-muted">
          Manage your workspaces, collaborate with your team, and organize every
          project in one place.
        </p>
      </div>

      <Button className="w-fit flex items-center gap-2">
        <Plus size={18} aria-hidden="true" />

        <Link href="/dashboard/workspaces/new" className="font-medium">
          New Workspace
        </Link>
      </Button>
    </header>
  );
}
