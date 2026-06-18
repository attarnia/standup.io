'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
const LINKS = [
    { href: '/', label: 'Home' },
    { href: '/features', label: 'Features' },
    { href: '/about', label: 'About' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <header className="nav-header">
            <div className="flex-between">
                <Link
                    href="/"
                    className="text-xl font-black tracking-tight text-(gray-100)"
                    aria-label="Standup Home"
                >
                    Standup
                </Link>
                <nav className="hidden md:flex" aria-label="Main Navigation">
                    <ul className="flex-align-center gap-6 lg:gap-8 font-medium">
                        {LINKS.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className="nav-link">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="flex-align-center gap-2">
                    <Link
                        href="/signup"
                        className="hidden md:inline-flex nav-btn"
                    >
                        Get Startedsss
                    </Link>
                    <button
                        type="button"
                        onClick={() => setOpen(prev => !prev)}
                        className="md:hidden inline-flex items-center justify-center w-10 h-10 text-(--gray-100)"
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open ? "true" : "false"}
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>
            {open && (
                <nav
                    className="md:hidden mt-3 pt-3 border-t border-white/10"
                    aria-label="Mobile Navigation"
                >
                    <ul className="flex flex-col gap-1 font-medium">
                        {LINKS.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="block nav-link"
                                    onClick={() => setOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}

                        <li className="pt-2">
                            <Link
                                href="/signup"
                                className="block text-center nav-btn"
                                onClick={() => setOpen(false)}
                            >
                                Get Started
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}