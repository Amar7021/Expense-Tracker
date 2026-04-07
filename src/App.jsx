import "./App.css"
import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"
import Home from "./modules/home/Home"
import AuthRoute from "./utils/auth-route/AuthRoute"
import Profile from "./modules/profile/Profile"
import RootError from "./utils/errors/RootError"
import SignIn from "./modules/auth/sign-in/SignIn"
import SignUp from "./modules/auth/sign-up/SignUp"

function App() {
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
            ],
        },
        {
            path: "*",
            element: <div>Page Not Found!!!</div>,
        },
    ])

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default App
