export type WorkspaceRole = "Owner" | "Member";

export interface Workspace {
  id: string;
  name: string;
  description: string;
  members: number;
  updatedAt: string;

  role: {
    label: WorkspaceRole;
  };
}