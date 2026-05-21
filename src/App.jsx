import "./App.css"
import { RouterProvider } from "react-router/dom"
import router from "./routes/Routes"
import { useEffect } from "react"
import { setThemeMode } from "./global-state/global-feature-slice/appStartSlice"
import { useDispatch } from "react-redux"
import { ClerkProvider } from "@clerk/react"
import { shadcn } from "@clerk/ui/themes"

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const AFTER_SIGNOUT_URL = import.meta.env.VITE_CLERK_AFTER_SIGNOUT_URL

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

    if (!PUBLISHABLE_KEY) {
        throw new Error("Add your Clerk Publishable Key to the .env file")
    }

    return (
        <ClerkProvider
            publishableKey={PUBLISHABLE_KEY}
            appearance={{
                theme: shadcn,
            }}
            afterSignOutUrl={AFTER_SIGNOUT_URL}
        >
            <RouterProvider router={router} />
        </ClerkProvider>
    )
}

export default App
