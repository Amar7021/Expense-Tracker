import { useAction } from "convex/react"

import { api } from "../../../convex/_generated/api"

import { useAsyncMutation } from "../useAsyncMutation"

export function useSendEmail() {
    const action = useAction(api.email.sendEmail)

    return useAsyncMutation(action)
}
