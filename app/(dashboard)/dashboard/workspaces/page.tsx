import WorkspacesPageSkeleton from "@/components/ui/WorkspacePageSkeleton";
import WorkspaceWrapper from "@/features/dashboard/workspaces/components/WorkspaceWrapper";
import { Suspense } from "react";

export default function WorkspacesPage() {
  return (
    <>
      <Suspense fallback={<WorkspacesPageSkeleton />}>
        <WorkspaceWrapper />
      </Suspense>
    </>
  );
}
