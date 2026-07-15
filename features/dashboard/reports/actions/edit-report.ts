"use server";

import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { createReportSchema } from "../schemas/report.schema";

export async function editReport(reportId: string, data: unknown) {
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

  const parsed = createReportSchema.safeParse(data);

  if (!parsed.success) {
    throw new Error("Invalid data");
  }

  return prisma.report.update({
    where: { id: reportId },
    data: {
      title: parsed.data.title,
      description: parsed.data.description,
    },
  });
}
