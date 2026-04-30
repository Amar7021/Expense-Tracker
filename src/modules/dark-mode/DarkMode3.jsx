import {
    appStart,
    setThemeMode,
} from "../../global-state/global-feature-slice/appStartSlice"
import { useSelector, useDispatch } from "react-redux"

const DarkMode3 = () => {
    const { themeMode } = useSelector(appStart)
    const dispatch = useDispatch()

    const handleTheme = mode => {
        dispatch(setThemeMode(mode))
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-800">
            <button
                type="button"
                className={`cursor-pointer rounded-sm px-2 py-1 text-[18px] text-black ${themeMode === "system" ? "bg-gray-400 text-white" : ""} transition-colors hover:bg-gray-400`}
                onClick={() => handleTheme("system")}
            >
                System
            </button>
            <button
                type="button"
                className={`cursor-pointer rounded-sm px-1.5 py-1 text-[16px] text-black ${themeMode === "dark" ? "bg-gray-400" : ""} transition-colors hover:bg-gray-400`}
                onClick={() => handleTheme("dark")}
            >
                Dark
            </button>
            <button
                type="button"
                className={`cursor-pointer rounded-sm px-2 py-1 text-[18px] text-black ${themeMode === "light" ? "bg-gray-400 text-white" : ""} transition-colors hover:bg-gray-400`}
                onClick={() => handleTheme("light")}
            >
                Light
            </button>
        </div>
    )
}

export default DarkMode3
