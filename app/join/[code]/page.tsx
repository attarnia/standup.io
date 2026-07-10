import { joinWorkspace } from "@/action/workspace";
import { createSupabaseServerClient } from "@/lib/server-client";
import { redirect } from "next/navigation";

export default async function JoinPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(`/auth?next=/join/${code}`);
  }

  let workspaceId: string | null = null;
  let errorType: string | null = null;

  try {
    const workspace = await joinWorkspace(code);
    workspaceId = workspace.id;
  } catch (err: any) {
    console.error("JOIN ERROR:", err); 
    errorType =
      err?.message === "You're already a member of this workspace"
        ? "already_member"
        : "invalid_invite";
  }

  if (workspaceId) {
    redirect(`/dashboard/workspaces/${workspaceId}`);
  }
  redirect(`/dashboard/workspaces?error=${errorType}`);
}
