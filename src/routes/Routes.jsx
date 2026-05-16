import { createBrowserRouter } from "react-router"
import RootError from "../utils/errors/RootError"
import { Profile, Dashboard } from "./lazyImports"
import lazyComponent from "./Utils"
import RootLayout from "@/components/layouts/RootLayout"
import AuthRootLayout from "@/components/layouts/AuthRootLayout"
import SignIn from "@/modules/sign-in/SignIn"
import SignUp from "@/modules/sign-up/SignUp"
import PageNotFound from "@/modules/errors/PageNotFound"
import LandingPage from "@/modules/home/LandingPage"

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        errorElement: <RootError />,
        children: [
            {
                index: true,
                element: <LandingPage />,
            },
            {
                path: "sign-in",
                Component: SignIn,
            },
            {
                path: "sign-up",
                Component: SignUp,
            },
        ],
    },
    {
        Component: AuthRootLayout,
        errorElement: <RootError />,
        children: [
            {
                path: "dashboard",
                element: lazyComponent(<Dashboard />),
            },
            {
                path: "profile",
                element: lazyComponent(<Profile />),
            },
        ],
    },
    {
        path: "*",
        Component: PageNotFound,
    },
])

export default router
