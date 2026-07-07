import WorkspaceHeader from "@/features/dashboard/workspaces/components/WorkspaceHeader";
import WorkspaceList from "@/features/dashboard/workspaces/components/WorkspaceList";
import { workspaces } from "@/features/dashboard/workspaces/data/workspaces";

export default function WorkspacesPage() {
    return (
        <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
            <WorkspaceHeader />

            <WorkspaceList workspaces={workspaces} />
        </main>
    );
}