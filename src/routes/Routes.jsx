import { createBrowserRouter } from "react-router"
// import AuthRoute from "../utils/auth-route/AuthRoute"
import RootError from "../utils/errors/RootError"
import SignIn from "../modules/sign-in/SignIn"
import SignUp from "../modules/sign-up/SignUp"
import PageNotFound from "../modules/errors/PageNotFound"
import { DarkMode3, Home, Profile } from "./lazyImports"
import lazyComponent from "./Utils"
import RootLayout from "../components/layouts/RootLayout"
import AuthRootLayout from "../components/layouts/AuthRootLayout"

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        errorElement: <RootError />,
        children: [
            {
                index: true,
                element: <div>Landing Page</div>,
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
                path: "home",
                element: lazyComponent(<Home />),
            },
            {
                path: "profile",
                element: lazyComponent(<Profile />),
            },
            {
                path: "dark",
                element: lazyComponent(<DarkMode3 />),
            },
        ],
    },
    {
        path: "*",
        Component: PageNotFound,
    },
])

export default router
