import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function DashboardSkeleton() {
    return (
        <div className="mx-auto w-full max-w-7xl space-y-8 px-4 py-6 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mt-11 space-y-8">
                <Skeleton className="h-12 w-52 rounded-lg" />
                <Skeleton className="h-4 w-80 rounded-lg" />
            </div>

            {/* Balance Overview Cards - matching BalanceOverview component */}
            <div className="grid gap-4 md:grid-cols-3">
                {[1, 2, 3].map(i => (
                    <Card key={i}>
                        <CardHeader className="flex flex-row items-center justify-between pb-3">
                            <Skeleton className="h-4 w-20" />
                            <div className="bg-muted flex size-9 items-center justify-center rounded-lg">
                                <Skeleton className="size-4 rounded-full" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="mb-1 h-8 w-32" />
                            <Skeleton className="h-3 w-24" />
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Spending Overview - matching SpendingOverview component */}
            <div className="grid gap-4 md:grid-cols-2">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div className="flex-1">
                            <Skeleton className="mb-2 h-5 w-28" />
                            <Skeleton className="h-4 w-48" />
                        </div>
                        <div className="bg-muted flex size-10 items-center justify-center rounded-xl">
                            <Skeleton className="size-5 rounded-full" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-9 w-40" />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div className="flex-1">
                            <Skeleton className="mb-2 h-5 w-32" />
                            <Skeleton className="h-4 w-48" />
                        </div>
                        <div className="bg-muted flex size-10 items-center justify-center rounded-xl">
                            <Skeleton className="size-5 rounded-full" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-4 w-56" />
                    </CardContent>
                </Card>
            </div>

            {/* Chart and Groups - matching the grid layout */}
            <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
                {/* Monthly Spending Chart Skeleton */}
                <Card>
                    <CardHeader>
                        <Skeleton className="mb-2 h-6 w-40" />
                        <Skeleton className="h-4 w-60" />
                    </CardHeader>
                    <CardContent>
                        <div className="h-[320px] w-full">
                            <div className="flex h-full items-end gap-3 px-2">
                                {[...Array(12)].map((_, index) => {
                                    const heights = [
                                        40, 55, 70, 85, 100, 115, 130, 145, 160,
                                        175, 190, 205,
                                    ]
                                    return (
                                        <div
                                            key={index}
                                            className="flex flex-1 flex-col items-center gap-2"
                                        >
                                            <Skeleton
                                                className="w-full rounded-md"
                                                style={{
                                                    height: `${heights[index % heights.length]}px`,
                                                    minHeight: "20px",
                                                }}
                                            />
                                            <Skeleton className="h-3 w-6" />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Recent Groups Skeleton */}
                <Card>
                    <CardHeader>
                        <Skeleton className="mb-2 h-6 w-32" />
                        <Skeleton className="h-4 w-48" />
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3, 4].map(i => (
                                <div
                                    key={i}
                                    className="border-border flex items-center justify-between gap-4 border-t py-4 first:border-t-0 first:pt-0 last:pb-0"
                                >
                                    <div className="min-w-0 flex-1">
                                        <Skeleton className="mb-2 h-4 w-32" />
                                        <Skeleton className="h-3 w-16" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Skeleton className="size-4 rounded-full" />
                                        <Skeleton className="h-4 w-20" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
