"use server";

import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { ReportStatus } from "@prisma/client";

export async function updateReportStatus(
  reportId: string,
  status: ReportStatus,
) {
  // 1 - Auth
  const user = await getCurrentUser();
  if (!user) throw new Error("Unauthorized");

  // 2 - Ownership (only fetch what we need)
  const report = await prisma.report.findUnique({
    where: { id: reportId },
    select: { creatorId: true },
  });

  if (!report) throw new Error("Not found");
  if (report.creatorId !== user.id) throw new Error("Forbidden");

  // 3 - Update
  return prisma.report.update({
    where: { id: reportId },
    data: { status },
    select: { id: true, status: true },
  });
}
