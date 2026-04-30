import { useState } from "react"

const DarkMode = () => {
    const [theme, setTheme] = useState("")

    const applyTheme = mode => {
        setTheme(mode)
    }

    return (
        <div
            className={`flex min-h-screen w-full items-center justify-center bg-white dark:bg-gray-800 ${theme === "dark" ? "dark" : ""}`}
        >
            <div className="flex gap-0.5 rounded-sm bg-gray-200 p-1">
                <button
                    className={`cursor-pointer rounded-sm px-2 py-1 text-[18px] text-black ${theme === "light" ? "bg-gray-400 text-white" : ""} transition-colors hover:bg-gray-400`}
                    onClick={() => applyTheme("light")}
                >
                    ☀
                </button>
                <button
                    className={`cursor-pointer rounded-sm px-1.5 py-1 text-[16px] text-black ${theme === "dark" ? "bg-gray-400" : ""} transition-colors hover:bg-gray-400`}
                    onClick={() => applyTheme("dark")}
                >
                    🌙
                </button>
                <button
                    className={`cursor-pointer rounded-sm px-1.5 py-1 text-[16px] text-black ${theme === "" ? "bg-gray-400" : ""} transition-colors hover:bg-gray-400`}
                    onClick={() => applyTheme("")}
                >
                    💻
                </button>
            </div>
        </div>
    )
}

export default DarkMode
