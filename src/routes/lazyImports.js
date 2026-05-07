import { lazy } from "react"

const Home = lazy(() => import("../modules/home/Home"))
const Profile = lazy(() => import("../modules/profile/Profile"))
const DarkMode3 = lazy(() => import("../modules/dark-mode/DarkMode3"))

export { Home, Profile, DarkMode3 }
