import { NavLink } from "react-router"
import NavIcon from "./NavIcon"

const NavItem = ({ label, to, icon, mobile = false, onClick }) => {
    return (
        <NavLink
            to={to}
            onClick={onClick}
            className={({ isActive }) =>
                `${
                    mobile ? "flex items-center gap-3 px-4 py-3" : "px-3 py-2"
                } rounded-lg text-sm font-medium no-underline transition-all duration-200 ${
                    isActive ? "active" : ""
                }`
            }
            style={({ isActive }) => ({
                background: isActive ? "var(--accent-bg)" : "transparent",
                color: isActive ? "var(--accent)" : "var(--text)",
            })}
        >
            {mobile && icon && <NavIcon name={icon} />}

            {label}
        </NavLink>
    )
}

export default NavItem
