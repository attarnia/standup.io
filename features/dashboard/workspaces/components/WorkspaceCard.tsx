import Badge from "@/components/ui/Badge";
import { Clock3, Users } from "lucide-react";
import { Workspace } from "../types/types";
import { WORKSPACE_ROLE_VARIANTS } from "../constants/constants";
import Link from "next/link";



export default function WorkspaceCard({
    id,
    name,
    description,
    members,
    updatedAt,
    role,
}: Workspace) {
    return (
        <Link
            href={`/dashboard/workspaces/${id}/reports`}
            className="block h-full"
        >
            <article
                className="
      flex h-full flex-col
      rounded-2xl lg:rounded-3xl
      border border-border
      bg-surface
      p-4 sm:p-5 lg:p-6
      transition-all duration-200
      hover:border-muted/40
      hover:-translate-y-0.5
    "
            >
                <header className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1 pb-2">
                        <h2 className="truncate font-semibold text-text sm:text-lg">
                            {name}
                        </h2>

                        <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">
                            {description}
                        </p>
                    </div>

                    <Badge
                        variant={WORKSPACE_ROLE_VARIANTS[role.label]}
                       
                    >
                        {role.label}
                    </Badge>
                </header>

                <footer className="mt-auto border-t border-border pt-4">
                    <div className="flex gap-3 text-sm text-muted flex-row sm:items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Users size={16} aria-hidden />
                            <span>{members} Members</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Clock3 size={16} aria-hidden />
                            <time dateTime={updatedAt}>{updatedAt}</time>
                        </div>
                    </div>
                </footer>
            </article>
        </Link>
    );
}