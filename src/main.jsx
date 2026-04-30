import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { ClerkProvider } from "@clerk/react"
import store from "./global-state/store.js"
import { Provider } from "react-redux"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            <ClerkProvider>
                <App />
            </ClerkProvider>
        </Provider>
    </StrictMode>
)
