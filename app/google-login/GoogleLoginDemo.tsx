"use client";

import { User } from "@supabase/supabase-js";
import { getSupabaseBrowserClient } from "@/lib/browser-client";
import { AuthDemoPage } from "@/components/ui/AuthDemoPage";
import { useAuth } from "@/features/auth/hooks/useAuth";
import SessionCard from "@/features/auth/components/SessionCard";

type GoogleLoginDemoProps = {
  user: User | null;
};

export default function GoogleLoginDemo({ user }: GoogleLoginDemoProps) {
  const supabase = getSupabaseBrowserClient();

  const { user: currentUser, signOut } = useAuth(user);

  async function handleGoogleLogin() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=/dashboard`,
      },
    });
  }

  return (
    <AuthDemoPage
      title="Google Login"
      intro="Sign in with Google using Supabase OAuth."
      steps={[
        "Click continue with Google.",
        "Complete OAuth flow.",
        "Session will update automatically.",
      ]}
    >
      {!currentUser && (
        <section className="rounded-3xl border border-border bg-surface p-8 text-text shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                OAuth
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Continue with Google
              </h3>
            </div>

            <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
              OAuth
            </span>
          </div>

          <p className="mt-4 text-sm text-muted">
            Supabase handles authentication and returns a secure session.
          </p>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="
              mt-6 w-full rounded-full 
              bg-primary 
              px-4 py-2.5
              text-sm font-semibold
              text-primary-foreground
              transition
              hover:bg-primary-hover
            "
          >
            Continue with Google
          </button>
        </section>
      )}

      <SessionCard
        user={currentUser}
        signOut={signOut}
      />

    </AuthDemoPage>
  );
}