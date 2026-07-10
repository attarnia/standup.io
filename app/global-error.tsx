"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body className="flex min-h-screen items-center justify-center bg-[#0b0f14] px-4 text-center text-slate-200">
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-semibold text-white">
            Something went critically wrong
          </h1>
          <p className="mt-2 max-w-sm text-sm text-slate-400">
            The application failed to load. Please refresh the page.
          </p>
          <button
            onClick={() => reset()}
            className="mt-6 rounded-2xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-400"
          >
            Reload
          </button>
        </div>
      </body>
    </html>
  );
}
