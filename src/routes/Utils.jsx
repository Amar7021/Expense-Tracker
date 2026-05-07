import { Suspense } from "react"

export default function lazyComponent(element) {
    return <Suspense fallback={"Loading..."}>{element}</Suspense>
}
