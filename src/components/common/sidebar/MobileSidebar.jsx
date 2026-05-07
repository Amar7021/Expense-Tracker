import { navLinks } from "../utils"
import AuthButtons from "../AuthButtons"
import NavItem from "../header/NavItem"

const MobileSidebar = ({ isOpen, onClose }) => {
    return (
        <>
            <div
                onClick={onClose}
                className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 md:hidden ${
                    isOpen
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0"
                }`}
            />
            <aside
                className={`fixed top-[61px] right-0 z-50 flex h-screen w-[280px] flex-col border-l border-[var(--border)] bg-[var(--bg)] pb-[60px] transition-transform duration-300 ease-in-out md:hidden ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex flex-1 flex-col px-4 py-5">
                    <div className="flex flex-col gap-2">
                        {navLinks.map(link => (
                            <NavItem
                                key={link.to}
                                {...link}
                                mobile
                                onClick={onClose}
                            />
                        ))}
                    </div>

                    <AuthButtons mobile onClick={onClose} />
                </div>
            </aside>
        </>
    )
}

export default MobileSidebar
