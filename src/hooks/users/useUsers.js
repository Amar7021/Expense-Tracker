import { useQuery } from "convex/react"
import { api } from "../../../convex/_generated/api"

export function useSearchUsers(searchQuery) {
    const users = useQuery(
        api.users.searchUsers,
        searchQuery?.length >= 2 ? { query: searchQuery } : "skip"
    )

    return {
        users: users ?? [],
        isLoading: users === undefined,
    }
}
