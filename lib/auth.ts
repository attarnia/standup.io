import { createSupabaseServerClient } from "./server-client";
import { prisma } from "./prisma";

export async function getCurrentUser() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  // ← Supabase user داریم، حالا Prisma user رو پیدا می‌کنیم
  const dbUser = await prisma.user.findUnique({
    where: { email: user.email },
  });

  return dbUser;
}
