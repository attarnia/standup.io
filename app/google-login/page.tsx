import { createSupabaseServerClient } from "@/lib/server-client";
import GoogleLoginDemo from "./GoogleLoginDemo";
import { syncUser } from "@/action/syncUser";

export default async function EmailPasswordPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    await syncUser(user);
  }

  console.log({ user });
  return <GoogleLoginDemo user={user} />;
}
