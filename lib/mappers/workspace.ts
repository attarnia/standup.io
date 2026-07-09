import type { Workspace as UIWorkspace } from "@/features/dashboard/workspaces/types/types";

type MembershipWithWorkspace = {
  role: "OWNER" | "MEMBER";
  workspace: {
    id: string;
    name: string;
    description: string | null;
    updatedAt: Date;
    _count: { members: number };
  };
};

export function toUIWorkspace(m: MembershipWithWorkspace): UIWorkspace {
  return {
    id: m.workspace.id,
    name: m.workspace.name,
    description: m.workspace.description ?? "",
    members: m.workspace._count.members,
    updatedAt: m.workspace.updatedAt.toLocaleDateString(),
    role: { label: m.role === "OWNER" ? "Owner" : "Member" },
  };
}
