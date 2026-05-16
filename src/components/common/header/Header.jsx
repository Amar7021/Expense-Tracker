import { NavLink, useNavigate } from "react-router"
import { Menu, Wallet, X } from "lucide-react"
import ThemeSwitcher from "../../theme-switcher/ThemeSwitcher"
import MobileSidebar from "../sidebar/MobileSidebar"
import { useState } from "react"
import { Button } from "@/components/ui/Button"

const Header = ({ authRoute = false }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const navigate = useNavigate()

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
                <nav className="ml-0 flex h-[60px] items-center justify-between px-6 md:ml-5">
                    <NavLink
                        to={authRoute ? "/dashboard" : "/"}
                        className="flex items-center gap-2 text-[17px] font-medium text-[var(--bg)] text-[var(--text-h)] no-underline"
                        style={{
                            letterSpacing: "-0.3px",
                        }}
                    >
                        <Wallet color="var(--accent-1)" />
                        Expense Tracker
                    </NavLink>
                    {!authRoute && (
                        <div className={`hidden items-center gap-3 md:flex`}>
                            <NavLink
                                to="/sign-in"
                                className={`bg-bg-transparent rounded-lg border border-[var(--border)] px-4 py-2 text-center text-sm text-[var(--text)] no-underline transition-all duration-200 hover:border-[var(--accent-border)] hover:text-[var(--accent-1)]`}
                            >
                                Sign in
                            </NavLink>
                            <Button
                                size="lg"
                                onClick={() => navigate("/sign-up")}
                                className="group inline-flex h-[44px] items-center justify-center gap-2 rounded-xl bg-[var(--accent-1)] px-7 py-4 text-base font-semibold text-white shadow-xl shadow-purple-500/20 transition hover:scale-[1.02]"
                            >
                                Get started
                            </Button>
                        </div>
                    )}
                    <div className="flex items-center gap-2">
                        <ThemeSwitcher />
                        {authRoute && (
                            <button
                                onClick={toggleSidebar}
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)]"
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
                        )}
                    </div>
                </nav>
            </header>
            <MobileSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        </>
    )
}

export default Header
