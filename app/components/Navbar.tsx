import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 m-auto mt-5 right-0 z-50 bg-[#303030] backdrop-blur-md rounded-[29px] w-[40%] px-4 sm:px-6 lg:px-4 p-3">
            <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
                <div className="flex justify-start">
                    <Link
                        href="/"
                        className="text-xl font-black tracking-tight"
                        aria-label="Standup Home"
                    >
                        Standup
                    </Link>
                </div>
                <nav className="flex justify-center" aria-label="Main Navigation">
                    <ul className="flex items-center gap-8 font-medium">
                        <li>
                            <Link href="/" className="py-2">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="" className="py-2">
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link href="" className="py-2">
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex justify-end">
                    <Link
                        href="/signup"
                        className="inline-flex items-center justify-center px-5 py-3 font-semibold text-white bg-black/60 rounded-full"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}