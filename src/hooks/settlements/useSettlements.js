import { useMutation, useQuery } from "convex/react"

import { api } from "../../../convex/_generated/api"

import { useAsyncMutation } from "../useAsyncMutation"

export function useSettlementData(entityType, entityId) {
    const data = useQuery(
        api.settlements.getSettlementData,
        entityType && entityId
            ? {
                  entityType,
                  entityId,
              }
            : "skip"
    )

    return {
        data,
        isLoading: data === undefined,
    }
}

export function useCreateSettlement() {
    const mutation = useMutation(api.settlements.createSettlement)

    return useAsyncMutation(mutation)
}
