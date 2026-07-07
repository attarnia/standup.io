export default function CreateWorkspaceForm() {
  return (
    <div className="mx-auto w-full max-w-2xl rounded-3xl border border-border bg-surface p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-text">Create Workspace</h2>
        <p className="mt-2 text-sm text-muted">
          Create a new workspace for your team, clients, or personal projects.
        </p>
      </div>

      <form className="space-y-6">
        {/* Workspace Name */}
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
            placeholder="Acme Team"
            className="w-full rounded-2xl border border-border bg-base px-4 py-3.5 text-text placeholder:text-muted outline-none transition-all duration-200 focus:border-primary focus:ring-4 focus:ring-primary/10"
          />

          <p className="mt-2 text-sm text-muted">
            Choose a memorable name for your workspace.
          </p>
        </div>

        {/* Description */}
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
            placeholder="Describe what this workspace is for..."
            className="w-full resize-none rounded-2xl border border-border bg-base px-4 py-3.5 text-text placeholder:text-muted outline-none transition-all duration-200 focus:border-primary focus:ring-4 focus:ring-primary/10"
          />

          <p className="mt-2 text-sm text-muted">
            Optional. Give your teammates some context.
          </p>
        </div>

        {/* Settings */}
        <div className="rounded-2xl border border-border bg-base p-5">
          <h3 className="mb-4 text-sm font-semibold text-text">
            Workspace Settings
          </h3>

          <div className="space-y-4">
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                defaultChecked
                className="mt-1 h-4 w-4 rounded border-border accent-primary"
              />

              <div>
                <p className="font-medium text-text">Private Workspace</p>
                <p className="text-sm text-muted">
                  Only invited members can access this workspace.
                </p>
              </div>
            </label>

            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                defaultChecked
                className="mt-1 h-4 w-4 rounded border-border accent-primary"
              />

              <div>
                <p className="font-medium text-text">
                  Allow member invitations
                </p>
                <p className="text-sm text-muted">
                  Team members can invite others after joining.
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Info Box */}
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4">
          <p className="text-sm text-text">
            Your workspace will be created immediately. You can change its name,
            description, and permissions later from the settings page.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
          <button
            type="button"
            className="rounded-2xl border border-border bg-base px-6 py-3 font-medium text-text transition hover:bg-border/40"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="rounded-2xl bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg"
          >
            Create Workspace
          </button>
        </div>
      </form>
    </div>
  );
}
