"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Search, LayoutGrid, List } from "lucide-react";
import { getUserWorkspaces, getWorkspaceDetails } from "@/action/workspace";

type Props = {
  memberships: Awaited<ReturnType<typeof getUserWorkspaces>>;
  workspace: Awaited<ReturnType<typeof getWorkspaceDetails>>["workspace"];
};

export default function MembersClient({ memberships, workspace }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const workspaceId =
    searchParams.get("workspace") ?? memberships[0]?.workspaceId ?? "";

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Members</h1>
          <p className="text-sm text-zinc-500">
            Manage members in your selected workspace.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <select
            value={workspaceId}
            onChange={(e) =>
              router.push(`/dashboard/members?workspace=${e.target.value}`)
            }
            className="rounded-xl border border-white/10 bg-zinc-900 px-4 py-2"
          >
            {memberships.map((membership) => (
              <option
                key={membership.workspaceId}
                value={membership.workspaceId}
              >
                {membership.workspace.name}
              </option>
            ))}
          </select>

          <button className="flex items-center gap-2 text-zinc-400">
            <Search size={18} />
            Search
          </button>

          <div className="flex rounded-xl border border-white/10 overflow-hidden">
            <button className="p-2 bg-white/5">
              <LayoutGrid size={18} />
            </button>

            <button className="p-2 hover:bg-white/5">
              <List size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">{workspace.name}</h2>

        <p className="text-sm text-zinc-500">
          members
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {workspace.members.length === 0 ? (
          <div className="col-span-full flex h-60 items-center justify-center rounded-2xl border border-dashed border-white/10">
            <p className="text-zinc-500">No members in this workspace.</p>
          </div>
        ) : (
          workspace.members.map((member) => {
            const name = member.user.name ?? member.user.email;

            const initials = name
              .split(" ")
              .map((word) => word[0])
              .join("")
              .slice(0, 2)
              .toUpperCase();

            return (
              <div
                key={member.id}
                className="group rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
              >
                <div className="flex h-60 items-center justify-center rounded-2xl border border-dashed border-white/10 bg-black/20">
                  <span className="text-6xl font-bold tracking-wider text-zinc-200">
                    {initials}
                  </span>
                </div>

                <div className="mt-5">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold">{name}</h3>

                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        member.user.email
                          ? "bg-emerald-500"
                          : "bg-zinc-500"
                      }`}
                    />
                  </div>

                  <p className="mt-1 text-sm capitalize text-zinc-500">
                    {member.role.replaceAll("_", " ").toLowerCase()}
                  </p>

                  <p className="mt-1 truncate text-xs text-zinc-600">
                    {member.user.email}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
