import { NavLink } from "react-router"
import { Menu, Wallet, X } from "lucide-react"
import ThemeSwitcher from "../../theme-switcher/ThemeSwitcher"
import MobileSidebar from "../sidebar/MobileSidebar"
import { useState } from "react"
import AuthButtons from "../AuthButtons"
import { navLinks } from "../utils"
import NavItem from "./NavItem"

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    return (
        <>
            <header
                className="fixed top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--bg)] backdrop-blur-sm"
                style={{
                    background:
                        "color-mix(in srgb, var(--bg) 95%, transparent)",
                }}
            >
                <nav className="mx-auto flex h-[60px] max-w-[1200px] items-center justify-between px-6">
                    <NavLink
                        to="/"
                        className="flex items-center gap-2 text-[17px] font-medium text-[var(--bg)] text-[var(--text-h)] no-underline"
                        style={{
                            letterSpacing: "-0.3px",
                        }}
                    >
                        <Wallet color="var(--accent)" />
                        Expense Tracker
                    </NavLink>
                    <div className="hidden items-center gap-1 md:flex">
                        {navLinks.map(link => (
                            <NavItem key={link.to} {...link} />
                        ))}
                    </div>
                    <div className="hidden items-center gap-3 md:flex">
                        <ThemeSwitcher />
                        <AuthButtons />
                    </div>
                    <div className="flex items-center gap-2 md:hidden">
                        <ThemeSwitcher />
                        <button
                            onClick={toggleSidebar}
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] md:hidden"
                            style={{
                                background: "var(--card)",
                                color: "var(--text)",
                            }}
                        >
                            {isSidebarOpen ? (
                                <X size={20} />
                            ) : (
                                <Menu size={20} />
                            )}
                        </button>
                    </div>
                </nav>
            </header>
            <MobileSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        </>
    )
}

export default Header
