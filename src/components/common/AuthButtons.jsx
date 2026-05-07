import { NavLink } from "react-router"

const AuthButtons = ({ mobile = false, onClick }) => {
    return (
        <div
            className={`flex ${
                mobile ? "mt-auto flex-col gap-3 pt-6" : "items-center gap-3"
            }`}
        >
            <NavLink
                to="/sign-in"
                onClick={onClick}
                className={`rounded-lg border border-[var(--border)] text-sm no-underline transition-all duration-200 ${
                    mobile
                        ? "px-4 py-3 text-center"
                        : "px-4 py-2 hover:bg-[var(--accent-bg)]"
                }`}
                style={{
                    color: "var(--text)",
                }}
            >
                Sign in
            </NavLink>

            <NavLink
                to="/sign-up"
                onClick={onClick}
                className={`rounded-lg text-sm font-medium text-white no-underline transition-opacity hover:opacity-90 ${
                    mobile ? "px-4 py-3 text-center" : "px-4 py-2"
                }`}
                style={{
                    background: "var(--accent)",
                }}
            >
                Get started
            </NavLink>
        </div>
    )
}

export default AuthButtons
