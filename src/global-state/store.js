import { configureStore } from "@reduxjs/toolkit"
import appStartReducer from "./global-feature-slice/appStartSlice"

const store = configureStore({
    reducer: {
        appStart: appStartReducer,
    },
})

export default store
