import { useRouteError } from "react-router"

const RootError = () => {
    const error = useRouteError()

    return (
        <div className="flex min-h-screen items-center justify-center bg-[var(--bg)] px-4">
            <div className="w-full max-w-lg rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6 shadow-(--shadow)">
                <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-full bg-(--accent-bg) p-2 text-[var(--accent-1)]">
                        ⚠️
                    </div>
                    <h2>Something went wrong</h2>
                </div>
                <p className="mb-4 text-[var(--text)]">
                    {error?.message || "An unexpected error occurred."}
                </p>
                {error?.stack && (
                    <details className="overflow-auto rounded-lg border border-[var(--border)] bg-[var(--code-bg)] p-3 text-sm">
                        <summary className="mb-2 cursor-pointer text-[var(--text)]">
                            View technical details
                        </summary>
                        <pre className="text-xs wrap-break-word whitespace-pre-wrap text-[var(--accent-1)]">
                            {error.stack}
                        </pre>
                    </details>
                )}
                <div className="mt-6 flex justify-end">
                    <button
                        onClick={() => window.location.reload()}
                        className="cursor-pointer rounded-lg bg-[var(--accent-1)] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 active:scale-[0.98]"
                    >
                        Reload Page
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RootError
