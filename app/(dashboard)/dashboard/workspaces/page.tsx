import WorkspaceListSkeleton from "@/components/WorkSpaceListSkeleton";
import WorkspaceWrapper from "@/features/dashboard/workspaces/components/WorkspaceWrapper";
import { Suspense } from "react";

export default function WorkspacesPage() {
  return (
    <>
      <Suspense fallback={<WorkspaceListSkeleton />}>
        <WorkspaceWrapper />
      </Suspense>
    </>
  );
}
