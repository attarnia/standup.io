"use client";

import { User } from "@supabase/supabase-js";
import { useState } from "react";
import { getSupabaseBrowserClient } from "@/lib/browser-client";
import { AuthDemoPage } from "@/components/ui/AuthDemoPage";
import { useRouter } from "next/navigation";
import { useAuth } from "@/features/auth/hooks/useAuth";
import SessionCard from "@/features/auth/components/SessionCard";

type EmailPasswordDemoProps = {
  user: User | null;
};

type Mode = "signup" | "signin";

export default function EmailPasswordDemo({
  user,
}: EmailPasswordDemoProps) {
  const [mode, setMode] = useState<Mode>("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const supabase = getSupabaseBrowserClient();
  const router = useRouter();

  const { user: currentUser, signOut } = useAuth(user);


  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setLoading(true);

    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/welcome`,
        },
      });

      if (error) {
        setStatus(error.message);
      } else {
        setStatus(
          "Check your inbox to confirm the new account.",
        );
      }
    } else {
      const { error } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (error) {
        setStatus(error.message);
      } else {
        setStatus("Signed in successfully");
        router.replace("/dashboard");
      }
    }

    setLoading(false);
  }


  return (
    <AuthDemoPage
      title="Email + Password"
      intro="Classic credentials authentication using Supabase session management."
      steps={[
        "Create account or sign in.",
        "Session updates automatically.",
        "Sign out to clear session.",
      ]}
    >

      {!currentUser && (
        <form
          onSubmit={handleSubmit}
          className="
            rounded-3xl
            border border-border
            bg-surface
            p-8
            text-text
            shadow-xl
          "
        >

          <div className="flex items-center justify-between gap-4">

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                Credentials
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                {
                  mode === "signup"
                    ? "Create an account"
                    : "Welcome back"
                }
              </h3>
            </div>


            <div className="
              flex
              rounded-full
              border border-border
              bg-base
              p-1
              text-xs
            ">
              {(["signup", "signin"] as Mode[]).map(
                (option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setMode(option)}
                    className={`
                      rounded-full
                      px-4
                      py-1
                      transition

                      ${mode === option
                        ? "bg-primary text-primary-foreground"
                        : "text-muted"
                      }
                    `}
                  >
                    {
                      option === "signup"
                        ? "Sign up"
                        : "Sign in"
                    }
                  </button>
                ),
              )}
            </div>

          </div>


          <div className="mt-6 space-y-4">

            <label className="block text-sm">
              <span className="text-neutral">
                Email
              </span>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@email.com"
                className="
                  mt-2
                  w-full
                  rounded-2xl
                  border border-border
                  bg-base
                  px-3
                  py-2.5
                  text-text
                  placeholder:text-muted
                  outline-none
                  focus:border-primary
                "
              />
            </label>


            <label className="block text-sm">

              <span className="text-neutral">
                Password
              </span>


              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                placeholder="At least 6 characters"
                className="
                  mt-2
                  w-full
                  rounded-2xl
                  border border-border
                  bg-base
                  px-3
                  py-2.5
                  text-text
                  placeholder:text-muted
                  outline-none
                  focus:border-primary
                "
              />

            </label>

          </div>


          <button
            disabled={loading}
            type="submit"
            className="
              mt-6
              w-full
              rounded-full
              bg-primary
              px-4
              py-2.5
              text-sm
              font-semibold
              text-primary-foreground
              transition
              hover:bg-primary-hover
              disabled:opacity-50
            "
          >
            {
              loading
                ? "Loading..."
                : mode === "signup"
                  ? "Create account"
                  : "Sign in"
            }
          </button>


          {
            status && (
              <p
                className="
                  mt-4
                  text-sm
                  text-muted
                "
                role="status"
              >
                {status}
              </p>
            )
          }

        </form>
      )}

      <SessionCard
        user={currentUser}
        signOut={signOut}
      />

    </AuthDemoPage>
  );
}