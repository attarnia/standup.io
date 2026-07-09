import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/requireUser";
import { revalidatePath } from "next/cache";

export async function createWorkspace(name: string) {
  const user = await requireUser();
  if (!name.trim()) {
    throw new Error("Workspace name is required");
  }
  const workspace = await prisma.workspace.create({
    data: {
      name: name.trim(),
      members: {
        create: {
          userId: user.id,
          role: "OWNER",
        },
      },
    },
  });
  revalidatePath("/workspaces");
  return workspace;
}
