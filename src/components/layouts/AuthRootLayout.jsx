import { Navigate, Outlet } from "react-router"
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"

const AuthRootLayout = () => {
    const authToken = true

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            {authToken ? <Outlet /> : <Navigate to={"/"} replace />}
            <Footer />
        </div>
    )
}

export default AuthRootLayout
