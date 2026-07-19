"use server";

import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/requireUser";
import { revalidatePath } from "next/cache";

// ---------- Create / Join ----------

export async function createWorkspace(name: string, description?: string) {
  const user = await requireUser();

  if (!name.trim()) {
    throw new Error("Workspace name is required");
  }

  const workspace = await prisma.workspace.create({
    data: {
      name: name.trim(),
      description: description?.trim() || null,
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

export async function joinWorkspace(inviteCode: string) {
  const user = await requireUser();

  const workspace = await prisma.workspace.findUnique({
    where: { inviteCode: inviteCode.trim() },
  });

  if (!workspace) {
    throw new Error("Invalid invite code");
  }

  const existingMembership = await prisma.workspaceMember.findUnique({
    where: {
      workspaceId_userId: {
        workspaceId: workspace.id,
        userId: user.id,
      },
    },
  });

  if (existingMembership) {
    throw new Error("You're already a member of this workspace");
  }

  await prisma.workspaceMember.create({
    data: {
      workspaceId: workspace.id,
      userId: user.id,
      role: "MEMBER",
    },
  });

  revalidatePath("/workspaces");
  return workspace;
}

// ---------- List / Read ----------

export async function getUserWorkspaces() {
  const user = await requireUser();

  return prisma.workspaceMember.findMany({
    where: { userId: user.id },
    include: {
      workspace: {
        include: {
          _count: { select: { members: true } },
        },
      },
    },
    orderBy: { createdAt: "asc" },
  });
}

export async function getWorkspaceDetails(workspaceId: string) {
  const user = await requireUser();

  const membership = await prisma.workspaceMember.findUnique({
    where: { workspaceId_userId: { workspaceId, userId: user.id } },
    include: {
      workspace: {
        include: {
          members: {
            include: { user: true },
            orderBy: { createdAt: "asc" },
          },
        },
      },
    },
  });

  if (!membership) {
    throw new Error("You don't have access to this workspace");
  }

  return {
    workspace: membership.workspace,
    currentUserRole: membership.role,
  };
}

// ---------- Leave ----------

export async function leaveWorkspace(workspaceId: string) {
  const user = await requireUser();

  const membership = await prisma.workspaceMember.findUnique({
    where: {
      workspaceId_userId: { workspaceId, userId: user.id },
    },
  });

  if (!membership) {
    throw new Error("You're not a member of this workspace");
  }

  if (membership.role === "OWNER") {
    const ownerCount = await prisma.workspaceMember.count({
      where: { workspaceId, role: "OWNER" },
    });
    if (ownerCount <= 1) {
      throw new Error(
        "You're the only owner — transfer ownership before leaving",
      );
    }
  }

  await prisma.workspaceMember.delete({
    where: { workspaceId_userId: { workspaceId, userId: user.id } },
  });

  revalidatePath("/workspaces");
}

// ---------- Member management (OWNER only) ----------

export async function removeMember(workspaceId: string, memberId: string) {
  const user = await requireUser();

  const requesterMembership = await prisma.workspaceMember.findUnique({
    where: { workspaceId_userId: { workspaceId, userId: user.id } },
  });

  if (!requesterMembership || requesterMembership.role !== "OWNER") {
    throw new Error("Only the owner can remove members");
  }

  const targetMember = await prisma.workspaceMember.findUnique({
    where: { id: memberId },
  });

  if (targetMember?.role === "OWNER") {
    throw new Error("Cannot remove the workspace owner");
  }

  await prisma.workspaceMember.delete({ where: { id: memberId } });
  revalidatePath(`/workspaces/${workspaceId}`);
}

export async function transferOwnership(
  workspaceId: string,
  newOwnerMemberId: string,
) {
  const user = await requireUser();

  const requesterMembership = await prisma.workspaceMember.findUnique({
    where: { workspaceId_userId: { workspaceId, userId: user.id } },
  });

  if (!requesterMembership || requesterMembership.role !== "OWNER") {
    throw new Error("Only the current owner can transfer ownership");
  }

  const newOwner = await prisma.workspaceMember.findUnique({
    where: { id: newOwnerMemberId },
  });

  if (!newOwner || newOwner.workspaceId !== workspaceId) {
    throw new Error("That member doesn't belong to this workspace");
  }

  await prisma.$transaction([
    prisma.workspaceMember.update({
      where: { id: newOwnerMemberId },
      data: { role: "OWNER" },
    }),
    prisma.workspaceMember.update({
      where: { id: requesterMembership.id },
      data: { role: "MEMBER" },
    }),
  ]);

  revalidatePath(`/workspaces/${workspaceId}`);
}

// ---------- Invite code (OWNER only) ----------

export async function regenerateInviteCode(workspaceId: string) {
  const user = await requireUser();

  const membership = await prisma.workspaceMember.findUnique({
    where: { workspaceId_userId: { workspaceId, userId: user.id } },
  });

  if (!membership || membership.role !== "OWNER") {
    throw new Error("Only the owner can regenerate the invite code");
  }

  const { createId } = await import("@paralleldrive/cuid2");
  const workspace = await prisma.workspace.update({
    where: { id: workspaceId },
    data: { inviteCode: createId() },
  });

  revalidatePath(`/workspaces/${workspaceId}`);
  return workspace.inviteCode;
}

export async function deleteWorkSpace(workspaceId: string) {
  const user = await requireUser();

  const membership = await prisma.workspaceMember.findUnique({
    where: {
      workspaceId_userId: {
        workspaceId,
        userId: user.id,
      },
    },
  });

  if (!membership || membership.role !== "OWNER") {
    throw new Error("Only the owner can delete the workspace");
  }

  await prisma.workspace.delete({
    where: {
      id: workspaceId,
    },
  });

  revalidatePath("/dashboard/workspaces");

  return { success: true };
}
