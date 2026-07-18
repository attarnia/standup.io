import { Workspace } from "../types/types";
import EmptyWorkspace from "./EmptyWorkspace";
import WorkspaceCard from "./WorkspaceCard";

type WorkspaceListProps = {
  workspaces: Workspace[];
};

export default function WorkspaceList({
  workspaces,
}: WorkspaceListProps) {
  if (workspaces.length === 0) {
    return <EmptyWorkspace />;
  }

  return (
    <section
      aria-label="Workspace list"
      className="grid  grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-3 2xl:grid-cols-3"
    >
      {workspaces.map((workspace) => (
        <WorkspaceCard
          key={workspace.id}
          {...workspace}
        />
      ))}
    </section>
  );
}