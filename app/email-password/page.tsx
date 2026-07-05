import { createSupabaseServerClient } from "@/lib/server-client";
import EmailPasswordDemo from "./EmailPasswordDemo";
import { syncUser } from "@/action/syncUser";

export default async function EmailPasswordPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    await syncUser(user);
  }

  return <EmailPasswordDemo user={user} />;
}
