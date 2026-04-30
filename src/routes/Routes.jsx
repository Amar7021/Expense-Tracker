import { createBrowserRouter } from "react-router"
import Home from "../modules/home/Home"
import AuthRoute from "../utils/auth-route/AuthRoute"
import Profile from "../modules/profile/Profile"
import RootError from "../utils/errors/RootError"
import SignIn from "../modules/auth/sign-in/SignIn"
import SignUp from "../modules/auth/sign-up/SignUp"
import DarkMode from "../modules/dark-mode/DarkMode"
import DarkMode2 from "../modules/dark-mode/DarkMode2"
import DarkMode3 from "../modules/dark-mode/DarkMode3"

const router = createBrowserRouter([
    {
        path: "/sign-in",
        Component: SignIn,
    },
    {
        path: "/sign-up",
        Component: SignUp,
    },
    {
        Component: AuthRoute,
        errorElement: <RootError />,
        children: [
            {
                path: "/",
                Component: Home,
            },
            {
                path: "profile",
                Component: Profile,
            },
            {
                path: "dark",
                Component: DarkMode3,
            },
        ],
    },
    {
        path: "*",
        element: <div>Page Not Found!!!</div>,
    },
])

export default router
