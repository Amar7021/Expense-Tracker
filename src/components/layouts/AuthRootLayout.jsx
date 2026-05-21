import { Navigate, Outlet, useLocation } from "react-router"
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"
import { useAuth } from "@clerk/react"
import { useEffect, useRef } from "react"
import LoadingBar from "react-top-loading-bar"
import PuffLoading from "../loaders/PuffLoading"

const AuthRootLayout = () => {
    const { isLoaded, userId } = useAuth()
    const location = useLocation()

    const loadingBarRef = useRef(null)

    useEffect(() => {
        const loadingBar = loadingBarRef.current

        loadingBar?.continuousStart()

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })

        const timer = setTimeout(() => {
            loadingBar?.complete()
        }, 500)

        return () => {
            clearTimeout(timer)
        }
    }, [location?.pathname])

    if (isLoaded && !userId) {
        return <Navigate to="/" replace />
    }

    return (
        <>
            <LoadingBar
                color="var(--accent-1)"
                ref={loadingBarRef}
                shadow={true}
            />
            <Header authRoute isLoading={!isLoaded} />
            <main>{!isLoaded ? <PuffLoading /> : <Outlet />}</main>
            <Footer />
        </>
    )
}

export default AuthRootLayout
