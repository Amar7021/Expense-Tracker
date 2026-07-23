import { useCallback, useState } from "react"

export function useAsyncMutation(mutation) {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const execute = useCallback(
        async (...args) => {
            setIsLoading(true)
            setError(null)

            try {
                return await mutation(...args)
            } catch (error) {
                setError(error)
                throw error
            } finally {
                setIsLoading(false)
            }
        },
        [mutation]
    )

    return {
        execute,
        isLoading,
        error,
    }
}
