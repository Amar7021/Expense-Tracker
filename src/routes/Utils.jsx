import GridLoading from "@/components/loaders/GridLoading"
import { Suspense } from "react"

export default function lazyComponent(element) {
    return <Suspense fallback={<GridLoading />}>{element}</Suspense>
}
