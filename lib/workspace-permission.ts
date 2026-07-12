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


  console.log("ALL MEMBERS OF WORKSPACE");
  console.log(allMembers);


  const member =
    await prisma.workspaceMember.findUnique({
      where:{
        workspaceId_userId:{
          workspaceId,
          userId
        }
      }
    });


  console.log("FOUND MEMBER");
  console.log(member);


  return !!member;

}