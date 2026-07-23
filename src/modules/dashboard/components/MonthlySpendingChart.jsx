import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts"

const monthFormatter = new Intl.DateTimeFormat("en-IN", {
    month: "short",
})

function formatCurrency(amount) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(amount)
}

export function MonthlySpendingChart({ data }) {
    const chartData = data.map(item => ({
        ...item,
        monthLabel: monthFormatter.format(new Date(item.month)),
    }))

    return (
        <Card>
            <CardHeader>
                <CardTitle>Monthly spending</CardTitle>

                <p className="text-muted-foreground text-sm">
                    Your spending by month this year
                </p>
            </CardHeader>

            <CardContent>
                <div className="h-[320px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={chartData}
                            margin={{
                                top: 10,
                                right: 10,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <defs>
                                <linearGradient
                                    id="spendingGradient"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="var(--accent-1)"
                                        stopOpacity={0.3}
                                    />

                                    <stop
                                        offset="100%"
                                        stopColor="var(--accent-1)"
                                        stopOpacity={0}
                                    />
                                </linearGradient>
                            </defs>

                            <XAxis
                                dataKey="monthLabel"
                                axisLine={false}
                                tickLine={false}
                                tick={{
                                    fill: "currentColor",
                                    fontSize: 12,
                                }}
                            />

                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{
                                    fill: "currentColor",
                                    fontSize: 12,
                                }}
                                tickFormatter={value => `₹${value}`}
                            />

                            <Tooltip
                                formatter={value => formatCurrency(value)}
                                contentStyle={{
                                    background: "var(--card)",
                                    border: "1px solid var(--border)",
                                    borderRadius: "var(--radius)",
                                    color: "var(--card-foreground)",
                                }}
                            />

                            <Area
                                type="monotone"
                                dataKey="total"
                                stroke="var(--accent-1)"
                                strokeWidth={2}
                                fill="url(#spendingGradient)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    )
}
