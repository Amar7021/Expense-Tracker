import { useMutation, useQuery } from "convex/react"
import { api } from "../../../convex/_generated/api"

export function useContacts() {
    const data = useQuery(api.contacts.getAllContacts)

    return {
        users: data?.users ?? [],
        groups: data?.groups ?? [],
        isLoading: data === undefined,
    }
}

export function useSearchUsers(search) {
    const users = useQuery(
        api.users.searchUsers,
        search.trim().length >= 2 ? { query: search.trim() } : "skip"
    )

    return {
        users: users ?? [],
        isLoading: users === undefined,
    }
}

export function useCreateGroup() {
    const createGroup = useMutation(api.contacts.createGroup)

    return {
        createGroup,
    }
}
