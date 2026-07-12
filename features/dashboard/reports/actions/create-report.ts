"use server";

import { prisma } from "@/lib/prisma";

import { getCurrentUser } from "@/lib/auth";

import { canAccessWorkspace } from "@/lib/workspace-permission";
import { createReportSchema } from "../schemas/report.schema";


export async function createReport(
  workspaceId: string,

  data: unknown,
) {
  // 1 - Auth

  const user = await getCurrentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  // 2 - Permission

  const access = await canAccessWorkspace(user.id, workspaceId);

  if (!access) {
    throw new Error("Forbidden");
  }

  // 3 - Validation

  const parsed = createReportSchema.safeParse(data);

  if (!parsed.success) {
    throw new Error("Invalid data");
  }

  // 4 - Database

  const report = await prisma.report.create({
    data: {
      title: parsed.data.title,

      description: parsed.data.description,

      workspaceId,

      creatorId: user.id,
    },
  });

  return report;
}
