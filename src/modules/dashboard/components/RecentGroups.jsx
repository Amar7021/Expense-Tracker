import { ArrowDownRight, ArrowUpRight, Users } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function formatCurrency(amount) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(Math.abs(amount))
}

export function RecentGroups({ groups }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Your groups</CardTitle>
                <p className="text-muted-foreground text-sm">
                    Your current balance in each group
                </p>
            </CardHeader>
            <CardContent>
                {groups.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-10 text-center">
                        <div className="bg-muted mb-3 flex size-12 items-center justify-center rounded-xl">
                            <Users className="text-muted-foreground size-5" />
                        </div>
                        <p className="font-medium">No groups yet</p>
                        <p className="text-muted-foreground mt-1 text-sm">
                            Create a group to start splitting expenses.
                        </p>
                    </div>
                ) : (
                    <div className="divide-border divide-y">
                        {groups.map(group => {
                            const isPositive = group.balance > 0

                            const isNegative = group.balance < 0
                            return (
                                <div
                                    key={group.id}
                                    className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
                                >
                                    <div className="min-w-0">
                                        <p className="truncate font-medium">
                                            {group.name}
                                        </p>

                                        <p className="text-muted-foreground mt-1 text-xs">
                                            {group.members.length} members
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        {isPositive && (
                                            <ArrowUpRight className="size-4 text-emerald-600 dark:text-emerald-400" />
                                        )}

                                        {isNegative && (
                                            <ArrowDownRight className="text-destructive size-4" />
                                        )}
                                        <span
                                            className={
                                                isPositive
                                                    ? "font-medium text-emerald-600 dark:text-emerald-400"
                                                    : isNegative
                                                      ? "text-destructive font-medium"
                                                      : "text-muted-foreground font-medium"
                                            }
                                        >
                                            {isPositive
                                                ? "+"
                                                : isNegative
                                                  ? "-"
                                                  : ""}
                                            {formatCurrency(group.balance)}
                                        </span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
