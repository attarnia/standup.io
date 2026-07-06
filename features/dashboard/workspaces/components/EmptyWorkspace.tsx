import Button from "@/components/ui/Button";
import { FolderPlus } from "lucide-react";

export default function EmptyWorkspace() {
    return (
        <section className="flex min-h-105 flex-col items-center justify-center rounded-3xl border border-dashed border-border bg-surface px-6 text-center">
            <FolderPlus
                size={42}
                className="text-muted"
                aria-hidden="true"
            />

            <h2 className="mt-6 text-xl font-semibold text-text">
                No workspaces yet
            </h2>

            <p className="mt-2 max-w-md text-sm leading-6 text-muted">
                Create your first workspace and start collaborating with your team.
            </p>

            <div className="mt-8">
                <Button className="w-fit">
                    Create Workspace
                </Button>
            </div>
        </section>
    );
}