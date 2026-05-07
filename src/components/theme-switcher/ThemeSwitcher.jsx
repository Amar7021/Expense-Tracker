import { Sun, Moon, Laptop } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import {
    setThemeMode,
    appStart,
} from "../../global-state/global-feature-slice/appStartSlice"

const options = [
    { key: "dark", label: "Dark", icon: Moon },
    { key: "light", label: "Light", icon: Sun },
    { key: "system", label: "System", icon: Laptop },
]

export default function ThemeSwitcher() {
    const dispatch = useDispatch()
    const { themeMode } = useSelector(appStart)

    const handleTheme = mode => {
        dispatch(setThemeMode(mode))
    }

    return (
        <div className="flex items-center gap-1 rounded-4xl border border-[var(--border)] bg-[var(--bg)] p-1 shadow-[var(--shadow)]">
            {options.map(option => {
                const { key, icon: Icon } = option
                const isActive = themeMode === key

                return (
                    <button
                        key={key}
                        onClick={() => handleTheme(key)}
                        className={`flex cursor-pointer items-center gap-1 rounded-full p-1 text-sm font-medium transition-colors duration-200 ${
                            isActive
                                ? "border border-[var(--accent-border)] bg-[var(--accent-bg)] text-[var(--accent)]"
                                : "text-[var(--text)] hover:bg-[var(--accent-bg)]/50"
                        } `}
                    >
                        <Icon size={16} />
                    </button>
                )
            })}
        </div>
    )
}
