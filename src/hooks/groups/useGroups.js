import { useQuery } from "convex/react"

import { api } from "../../../convex/_generated/api"

export function useUserGroups() {
    const groups = useQuery(api.groups.getUserGroups)

    return {
        groups: groups ?? [],
        isLoading: groups === undefined,
    }
}

export function useGroupOrMembers(groupId) {
    const data = useQuery(
        api.groups.getGroupOrMembers,
        groupId ? { groupId } : {}
    )

    return {
        selectedGroup: data?.selectedGroup ?? null,
        groups: data?.groups ?? [],

        isLoading: data === undefined,
    }
}

export function useGroupExpenses(groupId) {
    const data = useQuery(
        api.groups.getGroupExpenses,
        groupId ? { groupId } : "skip"
    )

    return {
        group: data?.group ?? null,
        members: data?.members ?? [],
        expenses: data?.expenses ?? [],
        settlements: data?.settlements ?? [],
        balances: data?.balances ?? [],
        userLookupMap: data?.userLookupMap ?? {},

        isLoading: data === undefined,
    }
}
