import { prisma } from "./prisma";


export async function canAccessWorkspace(
  userId: string,
  workspaceId: string
) {

  const allMembers =
    await prisma.workspaceMember.findMany({
      where:{
        workspaceId
      }
    });




  const member =
    await prisma.workspaceMember.findUnique({
      where:{
        workspaceId_userId:{
          workspaceId,
          userId
        }
      }
    });




  return !!member;

}