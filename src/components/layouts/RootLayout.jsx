import { Outlet, useLocation } from "react-router"
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"
import { useEffect } from "react"

const RootLayout = () => {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }, [location?.pathname])

    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default RootLayout
