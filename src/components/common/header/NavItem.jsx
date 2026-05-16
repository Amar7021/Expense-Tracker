import { NavLink } from "react-router"
import NavIcon from "./NavIcon"

const NavItem = ({ label, to, icon, onClick }) => {
    return (
        <NavLink
            to={to}
            onClick={onClick}
            className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium no-underline transition-colors duration-200 ${
                    isActive
                        ? "active bg-[var(--accent-bg)] text-[var(--accent-1)]"
                        : "bg-transparent text-[var(--text)] hover:bg-[var(--accent-bg)] hover:text-[var(--accent-1)]"
                }`
            }
        >
            <NavIcon name={icon} />
            {label}
        </NavLink>
    )
}

export default NavItem
