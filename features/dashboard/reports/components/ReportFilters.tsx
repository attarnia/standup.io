import { Search } from "lucide-react";

export default function ReportFilters() {
    return (
        <section
            aria-labelledby="report-filters-heading"
            className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
        >
            <h2
                id="report-filters-heading"
                className="sr-only"
            >
                Report filters
            </h2>

            <div className="relative w-full max-w-sm">
                <Search
                    aria-hidden
                    size={18}
                    className="absolute top-1/2 left-4 -translate-y-1/2 text-muted"
                />

                <input
                    type="search"
                    placeholder="Search reports..."
                    className="w-full rounded-xl bg-base py-3 pr-4 pl-11 text-sm text-text outline-none placeholder:text-muted focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div
                className="flex items-center gap-2"
                role="tablist"
                aria-label="Report filters"
            >
                <button
                    type="button"
                    className="rounded-xl bg-blue-500 px-4 py-2 text-sm font-medium text-white"
                >
                    Today
                </button>

                <button
                    type="button"
                    className="rounded-xl bg-base px-4 py-2 text-sm text-muted transition hover:text-text"
                >
                    This Week
                </button>

                <button
                    type="button"
                    className="rounded-xl bg-base px-4 py-2 text-sm text-muted transition hover:text-text"
                >
                    All
                </button>
            </div>
        </section>
    );
}