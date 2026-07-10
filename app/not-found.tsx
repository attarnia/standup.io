import Link from "next/link";
import { FolderX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-md flex-col items-center justify-center px-4 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface">
        <FolderX size={26} className="text-muted" />
      </div>

      <h1 className="mt-6 text-xl font-semibold text-text">Not found</h1>
      <p className="mt-2 text-sm leading-6 text-muted">
        This page doesnt exist, or you dont have access to it.
      </p>

      <Link
        href="/dashboard"
        className="mt-6 rounded-2xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md transition hover:bg-primary-hover"
      >
        Go to dashboard
      </Link>
    </div>
  );
}
