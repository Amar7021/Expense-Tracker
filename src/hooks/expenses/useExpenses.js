import { useMutation, useQuery } from "convex/react"

import { api } from "../../../convex/_generated/api"

import { useAsyncMutation } from "../useAsyncMutation"

export function useExpensesBetweenUsers(userId) {
    const data = useQuery(
        api.expenses.getExpensesBetweenUsers,
        userId ? { userId } : "skip"
    )

    return {
        expenses: data?.expenses ?? [],
        settlements: data?.settlements ?? [],
        otherUser: data?.otherUser ?? null,
        balance: data?.balance ?? 0,

        isLoading: data === undefined,
    }
}

export function useCreateExpense() {
    const mutation = useMutation(api.expenses.createExpense)

    return useAsyncMutation(mutation)
}

export function useDeleteExpense() {
    const mutation = useMutation(api.expenses.deleteExpense)

    return useAsyncMutation(mutation)
}
