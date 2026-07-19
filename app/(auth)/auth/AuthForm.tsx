"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { getSupabaseBrowserClient } from "@/lib/browser-client";


type Mode = "signin" | "signup";


export default function AuthForm() {
  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const supabase = getSupabaseBrowserClient();

  function switchMode(next: Mode) {
    setMode(next);
    setError("");
    setMessage("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    if (mode === "signup") {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/welcome`,
        },
      });

      if (error) setError(error.message);
      else if (data.session) router.replace("/dashboard"); 
      else setMessage("Check your inbox to confirm your account.");
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) setError(error.message);
      else router.replace("/dashboard");
    }

    setLoading(false);
  }

  async function handleGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=/dashboard`,
      },
    });
  }

  return (
    <div className="min-h-screen bg-base flex items-center justify-center px-4">
      <div className="w-full max-w-sm">

        <div className="text-center mb-8">
          <Link href="/" className="inline-block font-black text-2xl tracking-tight text-text">
            StandUp
          </Link>
          <p className="mt-2 text-sm text-muted">
            {mode === "signin" ? "Welcome back" : "Create your account"}
          </p>
        </div>

        <div className="bg-surface border border-border rounded-2xl p-6 shadow-2xl">

          <div className="flex p-1 bg-base border border-border rounded-xl mb-6">
            {(["signin", "signup"] as Mode[]).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => switchMode(option)}
                className={`
                  flex-1 py-1.5 text-sm font-medium rounded-lg
                  transition-all duration-150
                  ${mode === option
                    ? "bg-primary text-primary-foreground"
                    : "text-muted hover:text-neutral"
                  }
                `}
              >
                {option === "signin" ? "Sign in" : "Sign up"}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={handleGoogle}
            className="w-full flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl border border-border bg-base text-sm font-medium text-neutral hover:bg-border/50 transition-colors duration-150"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Continue with Google
          </button>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted">or</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label htmlFor="auth-email" className="block text-xs font-medium text-neutral mb-1.5">
                Email
              </label>
              <input
                id="auth-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                placeholder="you@email.com"
                className="w-full px-3 py-2.5 rounded-xl border border-border bg-base text-sm text-text placeholder:text-muted outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition"
              />
            </div>

            <div>
              <label htmlFor="auth-password" className="block text-xs font-medium text-neutral mb-1.5">
                Password
              </label>
              <input
                id="auth-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                autoComplete={mode === "signin" ? "current-password" : "new-password"}
                placeholder="At least 6 characters"
                className="w-full px-3 py-2.5 rounded-xl border border-border bg-base text-sm text-text placeholder:text-muted outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition"
              />
            </div>

            {error && (
              <p role="alert" className="text-xs text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            {message && (
              <p role="status" className="text-xs text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-lg px-3 py-2">
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover disabled:opacity-50 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              {loading
                ? "Loading..."
                : mode === "signin"
                  ? "Sign in"
                  : "Create account"
              }
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
