import { CreditCard, TrendingUp } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function formatCurrency(amount) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(amount)
}

export function SpendingOverview({ totalSpent }) {
    return (
        <div className="grid gap-4 md:grid-cols-2">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle className="text-base">Total spent</CardTitle>

                        <p className="text-muted-foreground mt-1 text-sm">
                            Your personal share this year
                        </p>
                    </div>

                    <div className="flex size-10 items-center justify-center rounded-xl bg-[var(--accent-bg)]">
                        <CreditCard className="size-5 text-[var(--accent-1)]" />
                    </div>
                </CardHeader>

                <CardContent>
                    <p className="text-3xl font-semibold tracking-tight">
                        {formatCurrency(totalSpent)}
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle className="text-base">
                            Spending trend
                        </CardTitle>

                        <p className="text-muted-foreground mt-1 text-sm">
                            Your spending throughout the year
                        </p>
                    </div>

                    <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10">
                        <TrendingUp className="size-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                </CardHeader>

                <CardContent>
                    <p className="text-muted-foreground text-sm">
                        Review your monthly spending below.
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}
