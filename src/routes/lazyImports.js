import { lazy } from "react"

const Profile = lazy(() => import("../modules/profile/Profile"))
const Dashboard = lazy(() => import("../modules/dashboard/Dashboard"))
const Expenses = lazy(() => import("../modules/expenses/Expenses"))
const Settlements = lazy(() => import("../modules/settlements/Settlements"))
const Contacts = lazy(() => import("../modules/contacts/Contacts"))

export { Profile, Dashboard, Expenses, Settlements, Contacts }
