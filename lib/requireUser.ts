import { syncUser } from "@/action/syncUser";
import { createSupabaseServerClient } from "@/lib/server-client";

export async function requireUser() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("UNAUTHENTICATED");
  }

  await syncUser(user);
  return user;
}
