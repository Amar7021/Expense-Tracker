import "./App.css"
import { RouterProvider } from "react-router/dom"
import router from "./routes/Routes"
import { useEffect } from "react"
import { setThemeMode } from "./global-state/global-feature-slice/appStartSlice"
import { useDispatch } from "react-redux"

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        const stored = localStorage.getItem("theme") || "system"
        dispatch(setThemeMode(stored))
    }, [dispatch])

    useEffect(() => {
        const media = window.matchMedia("(prefers-color-scheme: dark)")

        const listener = () => {
            const stored = localStorage.getItem("theme")
            if (!stored) {
                dispatch(setThemeMode("system"))
            }
        }

        media.addEventListener("change", listener)
        return () => media.removeEventListener("change", listener)
    }, [dispatch])

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default App
