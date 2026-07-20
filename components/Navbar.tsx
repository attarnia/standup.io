"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/#home", label: "Home" },
  { href: "/#features", label: "Features" },
  { href: "/#howItWorks", label: "How It Works" },
];


type Props = {
  firstName?: string | null;
};


export default function Navbar({ firstName }: Props) {
  const [open, setOpen] = useState(false);

  const cta = firstName ? (
    <Link
      href="/dashboard"
      className="hidden md:flex items-center gap-3 rounded-full border border-border px-2 py-2 hover:bg-primary/5 transition-all backdrop-blur-lg"
    >
      <span className="text-sm font-medium  px-2 py-1 text-text">
       Go to Dashboard
      </span>
    </Link>
  ) : (
    <Link
      href="/auth"
      className="hidden md:inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition-colors"
    >
      Get Started
    </Link>
  );

  return (
    <nav
      className="fixed top-3 sm:top-4 left-0 right-0 z-50 w-full px-3 sm:px-5"
      aria-label="Main Navigation"
    >
      <div className="liquidGlass-wrapper dock mx-auto w-full max-w-6xl bg-surface/10 border border-border rounded-2xl">
        <div className="liquidGlass-effect"></div>
        <div className="liquidGlass-tint"></div>
        <div className="liquidGlass-shine"></div>

        <div className="liquidGlass-text w-full text-text">
          <div className="w-full px-4 py-2">
            <div className="flex items-center justify-between w-full">
              <Link
                href="/"
                className="text-lg sm:text-xl font-black tracking-tight text-text"
                aria-label="Standup Home"
              >
                Standup
              </Link>

              <div className="hidden md:flex">
                <ul className="hidden md:flex items-center gap-5 lg:gap-8 font-semibold text-sm">
                  {LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-text hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-4">
                {cta}

                <button
                  type="button"
                  onClick={() => setOpen((prev) => !prev)}
                  className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl text-text hover:bg-white/5 transition-colors"
                  aria-label={open ? "Close menu" : "Open menu"}
                  aria-expanded={open}
                >
                  {open ? <X size={22} /> : <Menu size={22} />}
                </button>
              </div>
            </div>

            <div
              className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open
                ? "max-h-96 opacity-100 mt-3 pt-3 border-t border-border"
                : "max-h-0 opacity-0"
                }`}
            >
              <ul className="flex flex-col gap-1 pb-3">
                {LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center rounded-xl px-2 py-3 text-lg font-medium text-text transition-all duration-200 hover:bg-primary/10 hover:text-primary active:scale-[0.98]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}

                <li className="mt-2">
                  {firstName ? (
                    <Link
                      href="/dashboard"
                      onClick={() => setOpen(false)}
                      className="flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface/10 px-4 py-3 text-sm font-medium text-text backdrop-blur-lg transition-all duration-200 hover:bg-surface hover:border-primary/40 active:scale-[0.98]"
                    >
                      <span>Go to Dashboard</span>
                    </Link>
                  ) : (
                    <Link
                      href="/auth"
                      onClick={() => setOpen(false)}
                      className="flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
                    >
                      Get Started
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <svg className="absolute w-0 h-0 invisible" aria-hidden="true">
        ...
      </svg> */}
    </nav>
  );
}
