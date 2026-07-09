/*
  Warnings:

  - The values [ADMIN] on the enum `WorkspaceRole` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[inviteCode]` on the table `Workspace` will be added. If there are existing duplicate values, this will fail.
  - The required column `inviteCode` was added to the `Workspace` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "WorkspaceRole_new" AS ENUM ('OWNER', 'MEMBER');
ALTER TABLE "WorkspaceMember" ALTER COLUMN "role" TYPE "WorkspaceRole_new" USING ("role"::text::"WorkspaceRole_new");
ALTER TYPE "WorkspaceRole" RENAME TO "WorkspaceRole_old";
ALTER TYPE "WorkspaceRole_new" RENAME TO "WorkspaceRole";
DROP TYPE "public"."WorkspaceRole_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "WorkspaceMember" DROP CONSTRAINT "WorkspaceMember_userId_fkey";

-- DropForeignKey
ALTER TABLE "WorkspaceMember" DROP CONSTRAINT "WorkspaceMember_workspaceId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Workspace" ADD COLUMN     "inviteCode" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Workspace_inviteCode_key" ON "Workspace"("inviteCode");

-- CreateIndex
CREATE INDEX "Workspace_name_idx" ON "Workspace"("name");

-- CreateIndex
CREATE INDEX "WorkspaceMember_userId_idx" ON "WorkspaceMember"("userId");

-- CreateIndex
CREATE INDEX "WorkspaceMember_workspaceId_idx" ON "WorkspaceMember"("workspaceId");

-- AddForeignKey
ALTER TABLE "WorkspaceMember" ADD CONSTRAINT "WorkspaceMember_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkspaceMember" ADD CONSTRAINT "WorkspaceMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
