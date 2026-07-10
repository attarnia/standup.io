import SummaryCard from "@/components/ui/SummaryCard";
import Hero from "@/features/dashboard/components/Hero";
import QuickActions from "@/features/dashboard/components/quick-actions/QuickActions";
import TodayReports from "@/features/dashboard/components/today-reports/TodayReports";
import { createSupabaseServerClient } from "@/lib/server-client";
import { ClipboardList, Folder, Users2 } from "lucide-react";
import { redirect } from "next/navigation";

const page = async () => {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth");
  }

  return (
    <>
      <Hero />
      <section className="mt-8 grid grid-cols-1 gap-4 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
        <SummaryCard
          title="Total Workspaces"
          value={4}
          description="2 owned • 2 member"
          icon={Folder}
        />

        <SummaryCard
          title="Today's Reports"
          value="12"
          description="Submitted today"
          icon={ClipboardList}
          iconBgClass="bg-orange-700/30"
          iconClass="text-orange-600"
        />

        <SummaryCard
          title="Total Team Members"
          value="12"
          description="Submitted today"
          icon={Users2}
          iconBgClass="bg-green-700/30"
          iconClass="text-green-600"
        />
      </section>
      <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3 items-start">
        <div className="lg:col-span-2">
          <TodayReports />
        </div>

        <div className="lg:col-span-1">
          <QuickActions />
        </div>
      </section>
    </>
  );
};

export default page;
