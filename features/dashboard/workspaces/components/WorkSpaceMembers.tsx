"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Crown, X, Copy, Check } from "lucide-react";
import Badge from "@/components/ui/Badge";
import {
  removeMember,
  transferOwnership,
  regenerateInviteCode,
  leaveWorkspace,
  deleteWorkSpace,
} from "@/action/workspace";

type Member = {
  id: string;
  role: "OWNER" | "MEMBER";
  user: { id: string; name: string | null; email: string };
};

type Workspace = {
  id: string;
  name: string;
  inviteCode: string;
  members: Member[];
};

export default function WorkspaceMembers({
  workspace,
  currentUserRole,
}: {
  workspace: Workspace;
  currentUserRole: "OWNER" | "MEMBER";
}) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  const [busyId, setBusyId] = useState<string | null>(null);
  const [leave, setLeave] = useState<boolean>(false);
  const [deleting, setDeleting] = useState<boolean>(false);

  const router = useRouter();

  const isOwner = currentUserRole === "OWNER";
  const inviteLink = `${process.env.NEXT_PUBLIC_APP_URL}/join/${workspace.inviteCode}`;

  async function handelDelete() {
    setError("");
    const confirmed = window.confirm(
      `Delete "${workspace.name}"?\n\nThis will permanently delete the workspace, all reports, members, and related data. This action cannot be undone.`,
    );
    if (!confirmed) return;
    setDeleting(true);

    try {
      await deleteWorkSpace(workspace.id);
      router.push("/dashboard/workspaces");
      router.refresh();
    } catch (e: any) {
      setError(e.message);
      setDeleting(false);
    }
  }

  async function handelLeave() {
    setError("");
    const confirmed = window.confirm(
      `Leave ${workspace.name}? You'll need a new invite to rejoin.`,
    );
    if (!confirmed) return;
    setLeave(true);
    try {
      await leaveWorkspace(workspace.id);
      router.push("/dashboard/workspaces");
      router.refresh();
    } catch (e: any) {
      setError(e.message);
      setLeave(false);
    }
  }

  async function handleCopyLink() {
    await navigator.clipboard.writeText(inviteLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  async function handleRegenerateLink() {
    setError("");
    try {
      await regenerateInviteCode(workspace.id);
      router.refresh();
    } catch (e: any) {
      setError(e.message);
    }
  }

  async function handleRemove(memberId: string) {
    setError("");
    setBusyId(memberId);
    try {
      await removeMember(workspace.id, memberId);
      router.refresh();
    } catch (e: any) {
      setError(e.message);
    } finally {
      setBusyId(null);
    }
  }

  async function handleMakeOwner(memberId: string) {
    setError("");
    setBusyId(memberId);
    try {
      await transferOwnership(workspace.id, memberId);
      router.refresh();
    } catch (e: any) {
      setError(e.message);
    } finally {
      setBusyId(null);
    }
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-border bg-surface p-5">
        <p className="text-sm font-semibold text-text">Invite link</p>
        <p className="mt-1 text-sm text-muted">
          Anyone with this link can join {workspace.name}.
        </p>

        <div className="mt-3 flex items-center gap-2 rounded-xl border border-border bg-base px-4 py-3">
          <code className="flex-1 truncate text-sm text-primary">
            {inviteLink}
          </code>
          <button
            onClick={handleCopyLink}
            className="text-muted transition hover:text-text"
            title="Copy link"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </div>

        {isOwner && (
          <button
            onClick={handleRegenerateLink}
            className="mt-3 text-xs font-medium text-muted underline hover:text-text"
          >
            Regenerate link
          </button>
        )}
      </div>

      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
          Members ({workspace.members.length})
        </h2>

        <ul className="mt-3 divide-y divide-border rounded-2xl border border-border bg-surface">
          {workspace.members.map((m) => (
            <li
              key={m.id}
              className="flex items-center justify-between px-5 py-4"
            >
              <div className="min-w-0">
                <p className="flex items-center gap-2 truncate text-sm font-medium text-text">
                  {m.user.name ?? m.user.email}
                  {m.role === "OWNER" && (
                    <Crown size={13} className="shrink-0 text-amber-500" />
                  )}
                </p>
                <p className="truncate text-xs text-muted">{m.user.email}</p>
              </div>

              <div className="flex shrink-0 items-center gap-3">
                <Badge variant={m.role === "OWNER" ? "primary" : "default"}>
                  {m.role === "OWNER" ? "Owner" : "Member"}
                </Badge>

                {isOwner && m.role !== "OWNER" && (
                  <>
                    <button
                      onClick={() => handleMakeOwner(m.id)}
                      disabled={busyId === m.id}
                      className="text-xs font-medium text-muted underline hover:text-text disabled:opacity-50"
                    >
                      Make owner
                    </button>
                    <button
                      onClick={() => handleRemove(m.id)}
                      disabled={busyId === m.id}
                      className="text-muted transition hover:text-red-500 disabled:opacity-50"
                      title="Remove member"
                    >
                      <X size={16} />
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}
      <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-5">
        <p className="text-sm font-semibold text-text">Leave workspace</p>
        <p className="mt-1 text-sm text-muted">
          {isOwner &&
          workspace.members.filter((m) => m.role === "OWNER").length === 1
            ? "You're the only owner. Transfer ownership to someone else before you can leave."
            : `You'll lose access to ${workspace.name} and need a new invite to rejoin.`}
        </p>
        <button
          onClick={handelLeave}
          disabled={
            leave ||
            (isOwner &&
              workspace.members.filter((m) => m.role === "OWNER").length === 1)
          }
          className="btn-error mt-3 rounded-lg px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-40"
        >
          {leave ? "Leaving..." : "Leave workspace"}
        </button>
      </div>
      {isOwner && (
        <div className="rounded-2xl border border-red-600/30 bg-red-600/5 p-5">
          <p className="text-sm font-semibold text-red-400">Delete workspace</p>

          <p className="mt-1 text-sm text-muted">
            Permanently delete <strong>{workspace.name}</strong>, including all
            reports, members, invite links, and other associated data. This
            action cannot be undone.
          </p>

          <button
            onClick={handelDelete}
            disabled={deleting}
            className="mt-3 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {deleting ? "Deleting..." : "Delete workspace"}
          </button>
        </div>
      )}
    </div>
  );
}
