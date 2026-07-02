import SummaryCard from "@/components/ui/SummaryCard";
import Hero from "@/features/dashboard/components/Hero";
import QuickActions from "@/features/dashboard/components/quick-actions/QuickActions";
import TodayReports from "@/features/dashboard/components/today-reports/TodayReports";
import { ClipboardList, FolderKanban, Users } from "lucide-react";

const page = () => {
  return (
    <>
      <Hero />
      <section className="grid grid-cols-1 gap-5 md:grid-cols-3 mt-10">
        <SummaryCard
          title="Total Projects"
          value={4}
          description="2 owned • 2 member"
          icon={FolderKanban}
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
          icon={Users}
          iconBgClass="bg-green-700/30"
          iconClass="text-green-600"
        />
      </section>
      <section className="mt-8 grid gap-6 lg:grid-cols-[2fr_1fr]">
        <TodayReports />

        <QuickActions />
      </section>
    </>
  );
};

export default page;
