import { Component } from "react"

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false, error: null, errorInfo: null }
    }

    static getDerivedStateFromError(error) {
        console.error("Derived State error caught:", error)
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error,
            errorInfo,
        })
        console.error("Error caught:", error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex min-h-screen items-center justify-center bg-(--bg) px-4">
                    <div className="w-full max-w-lg rounded-2xl border border-(--border) bg-(--bg) p-6 shadow-(--shadow)">
                        {/* Header */}
                        <div className="mb-4 flex items-center gap-3">
                            <div className="rounded-full bg-(--accent-bg) p-2 text-(--accent)">
                                ⚠️
                            </div>
                            <h2 className="text-xl font-semibold text-(--text-h)">
                                Something went wrong
                            </h2>
                        </div>

                        {/* Message */}
                        <p className="mb-4 text-(--text)">
                            {this.state.error?.toString() ||
                                "An unexpected error occurred."}
                        </p>

                        {/* Stack details */}
                        {this.state.errorInfo?.componentStack && (
                            <details className="overflow-auto rounded-lg border border-(--border) bg-(--code-bg) p-3 text-sm">
                                <summary className="mb-2 cursor-pointer text-(--text)">
                                    View technical details
                                </summary>
                                <pre className="text-xs wrap-break-word whitespace-pre-wrap text-(--accent)">
                                    {this.state.errorInfo.componentStack}
                                </pre>
                            </details>
                        )}

                        {/* Action buttons */}
                        <div className="mt-6 flex justify-end gap-2">
                            <button
                                onClick={() => window.location.reload()}
                                className="rounded-lg bg-(--accent) px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 active:scale-[0.98]"
                            >
                                Reload Page
                            </button>
                            <button
                                onClick={() => window.history.back()}
                                className="rounded-lg border border-(--accent) px-4 py-2 text-sm font-medium text-(--accent) transition hover:bg-(--accent-bg) active:scale-[0.98]"
                            >
                                Go Back
                            </button>
                        </div>
                    </div>
                </div>
            )
        }

        return this.props.children
    }
}
