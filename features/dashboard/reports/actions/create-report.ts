"use server";

import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { canAccessWorkspace } from "@/lib/workspace-permission";
import { createReportSchema } from "../schemas/report.schema";

export async function createReport(workspaceId: string, data: unknown) {
  const user = await getCurrentUser();
  if (!user) throw new Error("Unauthorized");

  const access = await canAccessWorkspace(user.id, workspaceId);
  if (!access) throw new Error("Forbidden");

  const parsed = createReportSchema.safeParse(data);
  if (!parsed.success) throw new Error("Invalid data");

  return prisma.report.create({
    data: {
      title: parsed.data.title,
      description: parsed.data.description,
      status: parsed.data.status,
      workspaceId,
      creatorId: user.id,
    },
  });
}
