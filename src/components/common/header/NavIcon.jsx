import { LayoutDashboard, ReceiptText, BarChart3, Users } from "lucide-react"

const NavIcon = ({ name, size = 18 }) => {
    switch (name) {
        case "dashboard":
            return <LayoutDashboard size={size} />

        case "contacts":
            return <Users size={size} />

        case "expenses":
            return <ReceiptText size={size} />

        case "reports":
            return <BarChart3 size={size} />

        default:
            return null
    }
}

export default NavIcon
