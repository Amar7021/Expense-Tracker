import { createSlice } from "@reduxjs/toolkit"

export const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"

const applyThemeToDOM = mode => {
    const isDark =
        mode === "dark" || (mode === "system" && getSystemTheme() === "dark")

    document.documentElement.classList.toggle("dark", isDark)
}

const appStartSlice = createSlice({
    name: "appStart",
    initialState: {
        themeMode: localStorage.getItem("theme") || "system",
    },
    reducers: {
        setThemeMode: (state, { payload }) => {
            state.themeMode = payload
            if (payload === "system") {
                localStorage.removeItem("theme")
            } else {
                localStorage.setItem("theme", payload)
            }

            applyThemeToDOM(payload)
        },
    },
})

export const { setThemeMode } = appStartSlice.actions

export const appStart = state => state.appStart

export default appStartSlice.reducer
