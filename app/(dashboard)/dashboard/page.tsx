import DashboardWrapper from "@/features/dashboard/components/DashboardWrapper";
import { Suspense } from "react";

const page = () => {
  return (
    <>
      <Suspense fallback>
        <DashboardWrapper />
      </Suspense>
    </>
  );
};

export default page;
