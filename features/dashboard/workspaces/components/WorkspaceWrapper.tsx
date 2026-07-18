import { getUserWorkspaces } from "@/action/workspace";
import WorkspaceHeader from "@/features/dashboard/workspaces/components/WorkspaceHeader";
import WorkspaceList from "@/features/dashboard/workspaces/components/WorkspaceList";
import { toUIWorkspace } from "@/lib/mappers/workspace";
async function WorkspaceWrapper() {
  const memberships = await getUserWorkspaces();
  const workspaces = memberships.map(toUIWorkspace);
  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
      <WorkspaceHeader />
      <WorkspaceList workspaces={workspaces} />
    </main>
  );
}

export default WorkspaceWrapper;
