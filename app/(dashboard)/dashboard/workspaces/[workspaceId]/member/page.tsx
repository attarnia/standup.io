import { getWorkspaceDetails } from "@/action/workspace";
import WorkspaceMembers from "@/features/dashboard/workspaces/components/WorkSpaceMembers";

export default async function MembersPage({
  params,
}: {
  params: Promise<{ workspaceId: string }>;
}) {
  const { workspaceId } = await params;
  const { workspace, currentUserRole } = await getWorkspaceDetails(workspaceId);

  return (
    <WorkspaceMembers workspace={workspace} currentUserRole={currentUserRole} />
  );
}
