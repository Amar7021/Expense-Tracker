import GridLoading from "@/components/loaders/GridLoading"
import ErrorBoundary from "@/utils/errors/ErrorBoundary"
import { Suspense } from "react"

export default function lazyComponent(element) {
    return (
        <Suspense fallback={<GridLoading />}>
            <ErrorBoundary>{element}</ErrorBoundary>
        </Suspense>
    )
}
