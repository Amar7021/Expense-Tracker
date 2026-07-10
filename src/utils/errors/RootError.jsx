import { AlertTriangle, Home, RefreshCw } from "lucide-react"
import { useRouteError, useNavigate } from "react-router"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const RootError = () => {
    const error = useRouteError()
    const navigate = useNavigate()

    console.error("Route Error:", error)

    const errorMessage =
        error?.message || error?.statusText || "Something unexpected happened."

    return (
        <div className="bg-background flex min-h-[100vh] items-center justify-center p-4">
            <Card className="w-full max-w-lg shadow-lg">
                <CardHeader className="items-center text-center">
                    <CardTitle className="flex items-center gap-2 text-3xl">
                        <AlertTriangle className="text-destructive h-6 w-6" />{" "}
                        Something went wrong
                    </CardTitle>

                    <CardDescription>
                        An unexpected error occurred while loading this page.
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                    <div className="bg-muted/40 rounded-lg border p-4">
                        <p className="text-muted-foreground text-sm font-medium">
                            Error Details
                        </p>

                        <p className="mt-2 text-sm break-words">
                            {errorMessage}
                        </p>
                    </div>

                    {import.meta.env.DEV && error?.stack && (
                        <details className="rounded-lg border p-4">
                            <summary className="cursor-pointer text-sm font-medium">
                                Stack Trace
                            </summary>

                            <pre className="mt-3 overflow-auto text-xs whitespace-pre-wrap">
                                {error.stack}
                            </pre>
                        </details>
                    )}

                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Button
                            className="flex-1"
                            onClick={() => window.location.reload()}
                        >
                            <RefreshCw />
                            Reload Page
                        </Button>

                        <Button
                            variant="outline"
                            className="flex-1"
                            onClick={() => navigate("/")}
                        >
                            <Home />
                            Go Home
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default RootError
