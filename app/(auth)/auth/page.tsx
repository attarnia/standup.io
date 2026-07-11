import { createSupabaseServerClient } from "@/lib/server-client";
import Link from "next/link";
import { redirect } from "next/navigation";

const demos = [
  {
    href: "/email-password",
    title: "Email + Password",
    description:
      "Classic credentials authentication using Supabase sessions.",
    highlights: [
      "Sign up and sign in",
      "Session management",
      "Password authentication",
    ],
  },
  {
    href: "/google-login",
    title: "Google Login",
    description:
      "OAuth authentication with Supabase and Google provider.",
    highlights: [
      "OAuth redirect",
      "Google authentication",
      "Session sync",
    ],
  },
] as const;

export default async function Home() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <main
      className="
        min-h-screen
        bg-base
        text-text
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-5xl
          flex-col
          gap-12
          px-6
          py-16
        "
      >
        <header className="space-y-4">
          <h1
            className="
              text-4xl
              font-semibold
            "
          >
            Authentication flows
          </h1>
        </header>
        <section
          className="
            grid
            gap-6
            md:grid-cols-2
          "
        >
          {demos.map((demo) => (
            <Link
              key={demo.href}
              href={demo.href}
              className="
                group
                flex
                flex-col
                rounded-3xl
                border
                border-border
                bg-surface
                p-6
                transition
                hover:-translate-y-1
                hover:border-primary
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >
                <span
                  className="
                    text-xs
                    uppercase
                    tracking-[0.3em]
                    text-muted
                  "
                >
                  Flow
                </span>
                <span
                  className="
                    text-sm
                    font-semibold
                    text-muted
                    transition
                    group-hover:text-text
                  "
                >
                  Open ↗
                </span>
              </div>
              <h3
                className="
                  mt-5
                  text-xl
                  font-semibold
                "
              >
                {demo.title}
              </h3>
              <p
                className="
                  mt-2
                  text-sm
                  text-muted
                "
              >
                {demo.description}
              </p>
              <ul
                className="
                  mt-5
                  space-y-2
                  text-xs
                  text-muted
                "
              >
                {demo.highlights.map((item) => (
                  <li key={item}>
                    • {item}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}