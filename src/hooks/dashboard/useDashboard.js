import { useQuery } from "convex/react"
import { api } from "../../../convex/_generated/api"

export function useUserBalances() {
    const data = useQuery(api.dashboard.getUserBalances)

    return {
        data,
        youOwe: data?.youOwe ?? 0,
        youAreOwed: data?.youAreOwed ?? 0,
        totalBalance: data?.totalBalance ?? 0,
        oweDetails: data?.oweDetails ?? {
            youOwe: [],
            youAreOwedBy: [],
        },
        isLoading: data === undefined,
    }
}

export function useTotalSpent() {
    const data = useQuery(api.dashboard.getTotalSpent)

    return {
        data,
        totalSpent: data ?? 0,
        isLoading: data === undefined,
    }
}

export function useMonthlySpending() {
    const data = useQuery(api.dashboard.getMonthlySpending)

    return {
        data,
        monthlySpending: data ?? [],
        isLoading: data === undefined,
    }
}

export function useUserGroups() {
    const data = useQuery(api.dashboard.getUserGroups)

    return {
        data,
        groups: data ?? [],
        isLoading: data === undefined,
    }
}
