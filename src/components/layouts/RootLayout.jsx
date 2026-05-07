import { Outlet } from "react-router"
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"

const RootLayout = () => {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default RootLayout
