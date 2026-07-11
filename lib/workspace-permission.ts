import { prisma } from "@/lib/prisma";

export async function checkWorkspaceAccess(
  workspaceId: string,
  userId: string,
) {
  const member = await prisma.workspaceMember.findUnique({
    where: {
      workspaceId_userId: {
        workspaceId,
        userId,
      },
    },
  });

  if (!member) {
    throw new Error("Forbidden");
  }

  return member;
}