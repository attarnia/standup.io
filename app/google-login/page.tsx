import { createSupabaseServerClient } from "@/lib/server-client";
import GoogleLoginDemo from "./GoogleLoginDemo";

export default async function EmailPasswordPage() {
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log( { user });
  return <GoogleLoginDemo user={user} />;
}