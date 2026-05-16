import { Navigate, Outlet } from "react-router"
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"

const AuthRootLayout = () => {
    const authToken = false

    if (!authToken) {
        return <Navigate to="/" replace />
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Header authRoute />
            <main className="bg-background text-foreground min-h-screen">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default AuthRootLayout
