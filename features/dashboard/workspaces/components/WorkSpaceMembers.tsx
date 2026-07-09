"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Crown, X, Copy, Check } from "lucide-react";
import Badge from "@/components/ui/Badge";
import {
  removeMember,
  transferOwnership,
  regenerateInviteCode,
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
  const router = useRouter();

  const isOwner = currentUserRole === "OWNER";
  const inviteLink =
    typeof window !== "undefined"
      ? `${window.location.origin}/join/${workspace.inviteCode}`
      : "";

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
    </div>
  );
}
