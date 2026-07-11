import { createSupabaseServerClient } from "@/lib/server-client";
import EmailPasswordDemo from "./EmailPasswordDemo";

export default async function EmailPasswordPage() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <EmailPasswordDemo user={user} />;
}