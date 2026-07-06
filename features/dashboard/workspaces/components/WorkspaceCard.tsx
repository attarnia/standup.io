import Badge from "@/components/ui/Badge";
import { Clock3, Users } from "lucide-react";
import { Workspace } from "../types/types";
import { WORKSPACE_ROLE_VARIANTS } from "../constants/constants";



export default function WorkspaceCard({
    name,
    description,
    members,
    updatedAt,
    role,
}: Workspace) {
    return (
        <article className="flex h-full flex-col rounded-3xl border border-border bg-surface p-6 transition-colors duration-200 hover:border-muted/40">
            <header className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                    <h2 className="truncate text-lg font-semibold text-text">
                        {name}
                    </h2>

                    <p className="my-2 line-clamp-2 text-sm leading-6 text-muted">
                        {description}
                    </p>
                </div>

                <Badge variant={WORKSPACE_ROLE_VARIANTS[role.label]}>
                    {role.label}
                </Badge>
            </header>

            <footer className="mt-auto border-t border-border pt-5">
                <div className="flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2">
                        <Users
                            size={16}
                            aria-hidden="true"
                        />
                        <span>{members} Members</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Clock3
                            size={16}
                            aria-hidden="true"
                        />
                        <time dateTime={updatedAt}>
                            {updatedAt}
                        </time>
                    </div>
                </div>
            </footer>
        </article>
    );
}