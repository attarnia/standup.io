import { createSupabaseServerClient } from "@/lib/server-client";
import { syncUser } from "@/action/syncUser";

export async function requireUser() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("UNAUTHENTICATED");
  }

  const dbUser = await syncUser(user);

  return { ...user, id: dbUser.id };
}
