import { Navigate, Outlet } from "react-router"

const AuthRoute = () => {
    const authToken = true

    return authToken ? <Outlet /> : <Navigate to={"/sign-in"} replace />
}

export default AuthRoute
