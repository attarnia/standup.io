"use server";

import { Prisma } from "@prisma/client";

import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

export type ReportWithWorkspace = Prisma.ReportGetPayload<{
  include: {
    creator: { select: { name: true; email: true } };
    workspace: { select: { name: true } };
  };
}>;

export async function getAllReports(): Promise<ReportWithWorkspace[]> {
  const user = await getCurrentUser();
  if (!user) throw new Error("Unauthorized");

  const memberships = await prisma.workspaceMember.findMany({
    where: { userId: user.id },
    select: { workspaceId: true },
  });

  const workspaceIds = memberships.map((m) => m.workspaceId);
  if (workspaceIds.length === 0) return [];

  return prisma.report.findMany({
    where: { workspaceId: { in: workspaceIds } },
    include: {
      creator: { select: { name: true, email: true } },
      workspace: { select: { name: true } },
    },
    orderBy: { createdAt: "desc" },
  });
}
