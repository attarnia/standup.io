import { getUserWorkspaces, getWorkspaceDetails } from "@/action/workspace";
import MembersClient from "./MemberClient";

type Props = {
  searchParams: Promise<{
    workspace?: string;
  }>;
};

export default async function MembersPage({ searchParams }: Props) {
  const memberships = await getUserWorkspaces();

  const params = await searchParams;

  const workspaceId = params.workspace ?? memberships[0]?.workspaceId ?? "";

  const { workspace } = await getWorkspaceDetails(workspaceId);

  return <MembersClient memberships={memberships} workspace={workspace} />;
}
