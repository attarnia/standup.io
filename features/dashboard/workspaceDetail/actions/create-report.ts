"use server";

import { prisma } from "@/lib/prisma";

import { getCurrentUser } from "@/lib/auth";
import { checkWorkspaceAccess } from "@/lib/workspace-permission";
import { createReportSchema } from "../schemas/report.schema";


export async function createReport(workspaceId: string, data: unknown) {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  await checkWorkspaceAccess(workspaceId, user.id);

  const result = createReportSchema.safeParse(data);

  if (!result.success) {
    throw new Error("Invalid report data");
  }

  const report = await prisma.report.create({
    data: {
      title: result.data.title,
      description: result.data.description,

      workspaceId,

      creatorId: user.id,
    },
  });

  return report;
}
