import DashboardSkeleton from "@/components/DashboardSkeleton";
import DashboardWrapper from "@/features/dashboard/components/DashboardWrapper";
import { Suspense } from "react";

const page = () => {
  return (
    <>
      <Suspense fallback={<DashboardSkeleton />}>
        <DashboardWrapper />
      </Suspense>
    </>
  );
};

export default page;
