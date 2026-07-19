import WorkspaceListSkeleton from "../WorkSpaceListSkeleton";
import Skeleton from "./Skeleton";

export default function WorkspacesPageSkeleton() {
  return (
    <main className="space-y-10">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="space-y-3">
          <Skeleton className="h-10 w-56 rounded-md" />
          <Skeleton className="h-5 w-96 rounded-md" />
        </div>

        <Skeleton className="h-11 w-40 rounded-xl" />
      </div>

      <div className="h-px bg-white/10" />

      <WorkspaceListSkeleton />
    </main>
  );
}
