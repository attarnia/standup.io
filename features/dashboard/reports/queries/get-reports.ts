"use server";

import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { canAccessWorkspace } from "@/lib/workspace-permission";

export async function getReports(workspaceId: string) {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const access = await canAccessWorkspace(user.id, workspaceId);

  if (!access) {
    throw new Error("Forbidden");
  }

  return prisma.report.findMany({
    where: { workspaceId },
    include: {
      creator: {
        select: { name: true, email: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });
}
