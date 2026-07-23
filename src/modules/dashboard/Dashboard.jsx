import { BalanceOverview } from "./components/BalanceOverview"

import { SpendingOverview } from "./components/SpendingOverview"

import { MonthlySpendingChart } from "./components/MonthlySpendingChart"

import { RecentGroups } from "./components/RecentGroups"

import {
    useMonthlySpending,
    useTotalSpent,
    useUserBalances,
    useUserGroups,
} from "@/hooks/dashboard/useDashboard"
import DashboardSkeleton from "./components/DashboardSkeleton"

export default function Dashboard() {
    const {
        youOwe,
        youAreOwed,
        totalBalance,
        isLoading: isBalanceLoading,
    } = useUserBalances()

    const { totalSpent, isLoading: isTotalSpentLoading } = useTotalSpent()

    const { monthlySpending, isLoading: isMonthlySpendingLoading } =
        useMonthlySpending()

    const { groups, isLoading: isGroupsLoading } = useUserGroups()

    const isLoading =
        isBalanceLoading ||
        isTotalSpentLoading ||
        isMonthlySpendingLoading ||
        isGroupsLoading

    if (isLoading) {
        return <DashboardSkeleton />
    }

    return (
        <div className="mx-auto w-full max-w-7xl space-y-8 px-4 py-6 sm:px-6 lg:px-8">
            <div>
                <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    Dashboard
                </h1>

                <p className="text-muted-foreground mt-1 text-sm">
                    Keep track of your expenses, balances, and spending.
                </p>
            </div>

            <BalanceOverview
                youOwe={youOwe}
                youAreOwed={youAreOwed}
                totalBalance={totalBalance}
            />

            <SpendingOverview totalSpent={totalSpent} />

            <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
                <MonthlySpendingChart data={monthlySpending} />

                <RecentGroups groups={groups} />
            </div>
        </div>
    )
}
