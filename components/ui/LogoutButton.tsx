"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

import { getSupabaseBrowserClient } from "@/lib/browser-client";

export default function LogoutButton() {
    const router = useRouter();
    const supabase = getSupabaseBrowserClient();

    async function handleSignOut() {
        await supabase.auth.signOut();

        router.replace("/");
        router.refresh();
    }

    return (
        <button
            type="button"
            onClick={handleSignOut}
            className="
        flex w-fit items-center justify-center gap-2
        rounded-xl p-2
        hover:bg-red-500/10 transition-colors text-red-400
      "
        >
            <LogOut size={17} />
        </button>
    );
}