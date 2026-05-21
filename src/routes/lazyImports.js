import { lazy } from "react"

const Profile = lazy(() => import("../modules/profile/Profile"))
const Dashboard = lazy(() => import("../modules/dashboard/Dashboard"))
const Expenses = lazy(() => import("../modules/expenses/Expenses"))

export { Profile, Dashboard, Expenses }
