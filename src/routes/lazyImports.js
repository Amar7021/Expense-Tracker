import { lazy } from "react"

const Profile = lazy(() => import("../modules/profile/Profile"))
const Dashboard = lazy(() => import("../modules/dashboard/Dashboard"))

export { Profile, Dashboard }
