import { ArrowDownLeft, ArrowUpRight, Wallet } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function formatCurrency(amount) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(Math.abs(amount))
}

export function BalanceOverview({ youOwe, youAreOwed, totalBalance }) {
    const cards = [
        {
            title: "You owe",
            amount: youOwe,
            icon: ArrowDownLeft,
            description: "Money you need to pay",
            iconClass: "text-destructive",
            bgClass: "bg-destructive/10",
        },
        {
            title: "You're owed",
            amount: youAreOwed,
            icon: ArrowUpRight,
            description: "Money others owe you",
            iconClass: "text-emerald-600 dark:text-emerald-400",
            bgClass: "bg-emerald-500/10",
        },
        {
            title: "Total balance",
            amount: totalBalance,
            icon: Wallet,
            description:
                totalBalance >= 0 ? "Overall, you're owed" : "Overall, you owe",
            iconClass: "text-[var(--accent-1)]",
            bgClass: "bg-[var(--accent-bg)]",
        },
    ]

    return (
        <div className="grid gap-4 md:grid-cols-3">
            {cards.map(card => {
                const Icon = card.icon

                return (
                    <Card key={card.title}>
                        <CardHeader className="flex flex-row items-center justify-between pb-3">
                            <CardTitle className="text-muted-foreground text-sm font-medium">
                                {card.title}
                            </CardTitle>

                            <div
                                className={`flex size-9 items-center justify-center rounded-lg ${card.bgClass}`}
                            >
                                <Icon className={`size-4 ${card.iconClass}`} />
                            </div>
                        </CardHeader>

                        <CardContent>
                            <div className="text-2xl font-semibold tracking-tight">
                                {formatCurrency(card.amount)}
                            </div>

                            <p className="text-muted-foreground mt-1 text-xs">
                                {card.description}
                            </p>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    )
}
