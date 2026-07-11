"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type AuthDemoPageProps = {
    title: string;
    intro: string;
    steps: string[];
    children: ReactNode;
};

export function AuthDemoPage({
    title,
    intro,
    steps,
    children,
}: AuthDemoPageProps) {
    return (
        <div
            className="
        flex
        min-h-screen
        flex-col
        bg-base
        text-text
      "
        >
            <header
                className="
          border-b
          border-border
          bg-surface
        "
            >
                <div
                    className="
            mx-auto
            flex
            w-full
            max-w-5xl
            items-center
            justify-between
            px-6
            py-5
          "
                >
                    <div>
                        <p
                            className="
                text-[11px]
                uppercase
                tracking-[0.25em]
                text-muted
              "
                        >
                            Supabase Auth
                        </p>
                        <h1
                            className="
                text-2xl
                font-semibold
              "
                        >
                            {title}
                        </h1>
                    </div>
                    <Link
                        href="/"
                        className="
              text-sm
              font-semibold
              text-muted
              transition
              hover:text-text
            "
                    >
                        Back home →
                    </Link>
                </div>
            </header>
            <main
                className="
          mx-auto
          w-full
          max-w-5xl
          px-6
          py-12
        "
            >
                <div
                    className="
            grid
            gap-8
            lg:grid-cols-[0.95fr_1.05fr]
          "
                >
                    <section
                        className="
              rounded-3xl
              border
              border-border
              bg-surface
              p-8
            "
                    >
                        <p
                            className="
                text-lg
                font-medium
                text-text
              "
                        >
                            {intro}
                        </p>
                        <ol
                            className="
                mt-5
                list-decimal
                space-y-2
                pl-5
                text-sm
                text-muted
              "
                        >
                            {steps.map((step) => (
                                <li key={step}>
                                    {step}
                                </li>
                            ))}

                        </ol>
                    </section>
                    <div
                        className="
              flex
              flex-col
              gap-6
            "
                    >
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}