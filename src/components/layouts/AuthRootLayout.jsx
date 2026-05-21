import { Navigate, Outlet } from "react-router"
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"
import { useAuth } from "@clerk/react"
import BarLoading from "../loaders/BarLoading"

const AuthRootLayout = () => {
    const { isLoaded, userId } = useAuth()

    if (isLoaded && !userId) {
        return <Navigate to="/" replace />
    }

    return (
        <>
            <Header authRoute isLoading={!isLoaded} />
            <main>{!isLoaded ? <BarLoading /> : <Outlet />}</main>
            <Footer />
        </>
    )
}

export default AuthRootLayout
