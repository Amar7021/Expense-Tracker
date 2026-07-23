import { useEffect, useRef } from "react"
import { useAuth } from "@clerk/react"
import { useMutation } from "convex/react"
import { api } from "../../convex/_generated/api"

export default function ConvexUserSync({ children }) {
    const { isLoaded, userId } = useAuth()
    const store = useMutation(api.users.store)

    const synced = useRef(false)

    useEffect(() => {
        if (!isLoaded) return
        if (!userId) return
        if (synced.current) return

        synced.current = true

        store().catch(console.error)
    }, [isLoaded, userId, store])

    return children
}
