"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createWorkspace } from "@/action/workspace";

export default function CreateWorkspaceForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await createWorkspace(name, description);
      router.push("/dashboard/workspaces");
    } catch (err: any) {
      setError(err.message ?? "Failed to create workspace");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-2xl rounded-3xl border border-border bg-surface p-8 shadow-sm">
      {/* ...unchanged header markup... */}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-semibold text-text"
          >
            Workspace Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Acme Team"
            className="w-full rounded-2xl border border-border bg-base px-4 py-3.5 text-text placeholder:text-muted outline-none transition-all duration-200 focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
          <p className="mt-2 text-sm text-muted">
            Choose a memorable name for your workspace.
          </p>
        </div>

        <div>
          <label
            htmlFor="description"
            className="mb-2 block text-sm font-semibold text-text"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe what this workspace is for..."
            className="w-full resize-none rounded-2xl border border-border bg-base px-4 py-3.5 text-text placeholder:text-muted outline-none transition-all duration-200 focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
          <p className="mt-2 text-sm text-muted">
            Optional. Give your teammates some context.
          </p>
        </div>

        {/* ...settings checkboxes stay as-is for now, see note below... */}

        {error && <p className="text-sm text-red-500">{error}</p>}

        <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={() => router.back()}
            className="rounded-2xl border border-border bg-base px-6 py-3 font-medium text-text transition hover:bg-border/40"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={submitting}
            className="rounded-2xl bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:opacity-50"
          >
            {submitting ? "Creating..." : "Create Workspace"}
          </button>
        </div>
      </form>
    </div>
  );
}
