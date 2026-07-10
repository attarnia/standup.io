import { prisma } from "@/lib/prisma";
import type { User as SupabaseUser } from "@supabase/supabase-js";

export async function syncUser(supabaseUser: SupabaseUser) {
  const email = supabaseUser.email!;

  const existingByEmail = await prisma.user.findUnique({ where: { email } });

  if (existingByEmail && existingByEmail.id !== supabaseUser.id) {
    return existingByEmail;
  }

  return prisma.user.upsert({
    where: { id: supabaseUser.id },
    update: { email },
    create: {
      id: supabaseUser.id,
      email,
      name: supabaseUser.user_metadata?.name ?? email.split("@")[0],
    },
  });
}
