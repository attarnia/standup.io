import { prisma } from "@/lib/prisma";
import type { User as SupabaseUser } from "@supabase/supabase-js";

export async function syncUser(supabaseUser: SupabaseUser) {
  const email = supabaseUser.email;

  if (!email) {
    throw new Error("Email missing");
  }

  return prisma.user.upsert({
    where: { email },
    update: {
      name: supabaseUser.user_metadata?.name ?? email.split("@")[0],
    },
    create: {
      id: supabaseUser.id,
      email,
      name: supabaseUser.user_metadata?.name ?? email.split("@")[0],
    },
  });
}