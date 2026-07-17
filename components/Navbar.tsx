"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/about", label: "About" },
];


type Props = {
  firstName?: string | null;
};


export default function Navbar({ firstName }: Props) {
  const [open, setOpen] = useState(false);

  const cta = firstName ? (
    <Link
      href="/dashboard"
      className="hidden md:inline-flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
    >
      <span className="size-5 rounded-full bg-white/20 dark:bg-black/20 flex items-center justify-center text-xs font-bold">
        {firstName[0].toUpperCase()}
      </span>
      {firstName}
    </Link>
  ) : (
    <Link
      href="/auth"
      className="hidden md:inline-flex bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
    >
      Get Started
    </Link>
  );

  const mobileCta = firstName ? (
    <li className="pt-2">
      <Link
        href="/dashboard"
        className="block text-center bg-black text-white dark:bg-white dark:text-black py-2 rounded-full text-sm"
        onClick={() => setOpen(false)}
      >
        Go to Dashboard
      </Link>
    </li>
  ) : (
    <li className="pt-2">
      <Link
        href="/auth"
        className="block text-center bg-black text-white dark:bg-white dark:text-black py-2 rounded-full text-sm"
        onClick={() => setOpen(false)}
      >
        Get Started
      </Link>
    </li>
  );

  return (
    <nav
      className="wrapper fixed z-50 top-4 left-0 right-0 mx-auto px-4 w-full max-w-3xl"
      aria-label="Main Navigation"
    >
      <div className="liquidGlass-wrapper dock w-full">
        <div className="liquidGlass-effect"></div>
        <div className="liquidGlass-tint"></div>
        <div className="liquidGlass-shine"></div>

        <div className="liquidGlass-text w-full">
          <div className="w-full px-4 py-2">
            <div className="flex items-center justify-between w-full">
              <Link
                href="/"
                className="text-xl font-black tracking-tight text-gray-900 dark:text-gray-100"
                aria-label="Standup Home"
              >
                Standup
              </Link>

              <div className="hidden md:flex">
                <ul className="flex items-center gap-6 lg:gap-8 font-semibold text-sm">
                  {LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="nav-link hover:opacity-70 transition-opacity"
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
                  className="md:hidden inline-flex items-center justify-center w-10 h-10 text-gray-900 dark:text-gray-100"
                  aria-label={open ? "Close menu" : "Open menu"}
                  aria-expanded={open}
                >
                  {open ? <X size={22} /> : <Menu size={22} />}
                </button>
              </div>
            </div>

            {open && (
              <div className="md:hidden mt-3 pt-3 border-t border-black/5 dark:border-white/10">
                <ul className="flex flex-col gap-2 font-medium text-base pb-2">
                  {LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block py-1 hover:opacity-70"
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  {mobileCta}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* <svg className="absolute w-0 h-0 invisible" aria-hidden="true">
        <filter
          id="glass-distortion"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.01"
            numOctaves="1"
            seed="5"
            result="turbulence"
          />
          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
          </feComponentTransfer>
          <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
          <feSpecularLighting
            in="softMap"
            surfaceScale="5"
            specularConstant="1"
            specularExponent="100"
            lightingColor="white"
            result="specLight"
          >
            <fePointLight x="-200" y="-200" z="300" />
          </feSpecularLighting>
          <feComposite
            in="specLight"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
            result="litImage"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softMap"
            scale="50"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg> */}
    </nav>
  );
}
