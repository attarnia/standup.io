import AiSummaryCard from "@/components/ui/AiSummeryCard";
import SummaryCard from "@/components/ui/SummaryCard";
import Hero from "@/features/dashboard/components/Hero";
import QuickActions from "@/features/dashboard/components/quick-actions/QuickActions";
import TodayReports from "@/features/dashboard/components/today-reports/TodayReports";
import { prisma } from "@/lib/prisma";
import { createSupabaseServerClient } from "@/lib/server-client";
import { ClipboardList, Folder, Users2 } from "lucide-react";
import { redirect } from "next/navigation";
async function DashboardWrapper() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const fullName =
    user?.user_metadata?.full_name ??
    user?.user_metadata?.name ??
    user?.email?.split("@")[0] ??
    null;
  if (!user) {
    redirect("/auth");
  }

  const memberships = await prisma.workspaceMember.findMany({
    where: {
      userId: user.id,
    },
    select: {
      workspaceId: true,
      role: true,
    },
  });

  const workspaceIds = memberships.map((m) => m.workspaceId);
  const threeDaysAgo = new Date();
  threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);

  const [reportsToday, totalMembers] = await Promise.all([
    prisma.report.findMany({
      where: {
        workspaceId: {
          in: workspaceIds,
        },
        createdAt: {
          gte: threeDaysAgo,
        },
      },
      include: {
        creator: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    }),

    prisma.workspaceMember.findMany({
      where: {
        workspaceId: {
          in: workspaceIds,
        },
      },
      distinct: ["userId"],
    }),
  ]);
  const rep = await prisma.report.findMany();
  const owned = memberships.filter((m) => m.role === "OWNER").length;
  const member = memberships.filter((m) => m.role === "MEMBER").length;
  console.log(rep);
  return (
    <div>
      <Hero name={fullName} />
      <section className="mt-8 grid grid-cols-2 gap-4 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
        <SummaryCard
          title="Total Workspaces"
          value={memberships.length}
          description={`${owned} owned • ${member} member`}
          icon={Folder}
        />

        <SummaryCard
          title="Today's Reports"
          value={reportsToday.length}
          description="Submitted today"
          icon={ClipboardList}
          iconBgClass="bg-orange-500/10 ring-orange-500/20"
          iconClass="text-orange-400"
        />

        <SummaryCard
          title="Total Team Members"
          value={totalMembers.length}
          description="Across your workspaces"
          icon={Users2}
          iconBgClass="bg-green-500/10 ring-green-500/20"
          iconClass="text-green-400"
        />
        <AiSummaryCard workspaceIds={workspaceIds} />
      </section>
      <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3 items-start">
        <div className="lg:col-span-2">
          <TodayReports reports={reportsToday} />
        </div>

        <div className="lg:col-span-1">
          <QuickActions />
        </div>
      </section>
    </div>
  );
}

export default DashboardWrapper;
