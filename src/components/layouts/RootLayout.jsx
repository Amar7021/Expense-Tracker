import { Outlet } from "react-router"
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"

const RootLayout = () => {
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
