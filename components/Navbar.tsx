'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-5 inset-x-0 z-50 mx-auto w-[92%] sm:w-[85%] md:w-[75%] lg:w-[60%] xl:w-[40%] max-w-3xl bg-[#303030] backdrop-blur-md rounded-[29px] px-4 sm:px-6 py-3">
            <div className="flex items-center justify-between">
                <Link
                    href="/"
                    className="text-xl font-black tracking-tight"
                    aria-label="Standup Home"
                >
                    Standup
                    
                </Link>

                <nav className="hidden md:flex" aria-label="Main Navigation">
                    <ul className="flex items-center gap-6 lg:gap-8 font-medium">
                        <li><Link href="/" className="py-2">Home</Link></li>
                        <li><Link href="/features" className="py-2">Features</Link></li>
                        <li><Link href="/about" className="py-2">About</Link></li>
                    </ul>
                </nav>

                <div className="flex items-center gap-2">
                    <Link
                        href="/signup"
                        className="hidden sm:inline-flex items-center justify-center px-5 py-3 font-semibold text-white bg-black/60 rounded-full whitespace-nowrap"
                    >
                        Get Started
                    </Link>

                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        className="md:hidden inline-flex items-center justify-center w-10 h-10 text-white"
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                    >
                        {open ? (
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        ) : (
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {open && (
                <nav className="md:hidden mt-3 pt-3 border-t border-white/10" aria-label="Mobile Navigation">
                    <ul className="flex flex-col gap-1 font-medium">
                        <li><Link href="/" className="block py-2" onClick={() => setOpen(false)}>Home</Link></li>
                        <li><Link href="/features" className="block py-2" onClick={() => setOpen(false)}>Features</Link></li>
                        <li><Link href="/about" className="block py-2" onClick={() => setOpen(false)}>About</Link></li>
                        <li className="pt-2 sm:hidden">
                            <Link
                                href="/signup"
                                className="block text-center px-5 py-3 font-semibold text-white bg-black/60 rounded-full"
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