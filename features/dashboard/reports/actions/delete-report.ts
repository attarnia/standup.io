"use server";

import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

export async function deleteReport(reportId: string) {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const report = await prisma.report.findUnique({
    where: { id: reportId },
    select: { creatorId: true },
  });

  if (!report) {
    throw new Error("Not found");
  }

  if (report.creatorId !== user.id) {
    throw new Error("Forbidden");
  }

  // 3 - Delete
  await prisma.report.delete({
    where: { id: reportId },
  });
}
