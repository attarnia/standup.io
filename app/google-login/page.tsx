import { createSupabaseServerClient } from "@/lib/server-client";
import GoogleLoginDemo from "./GoogleLoginDemo";

export default async function GoogleLoginPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <GoogleLoginDemo user={user} />;
}
