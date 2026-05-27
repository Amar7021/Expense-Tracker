import { Button } from "@/components/ui/Button"
import {
    ArrowRight,
    BarChart3,
    CreditCard,
    LineChart,
    PieChart,
    ShieldCheck,
    Wallet,
} from "lucide-react"
import { useNavigate } from "react-router"

const LandingPage = () => {
    const navigate = useNavigate()

    const redirectHandler = path => {
        navigate(path)
    }
    return (
        <>
            <title>Smart Split - Track Expenses Easily</title>
            <meta
                name="description"
                content="Smart Split helps friends, roommates, and teams split expenses effortlessly, track balances, manage shared spending, and settle payments with ease."
            />
            <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-[var(--accent-bg)] blur-3xl" />
                <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[var(--accent-bg)] blur-3xl" />
            </div>
            <section className="relative overflow-hidden">
                <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
                    <div>
                        <h1 className="max-w-2xl text-5xl leading-tight font-black tracking-tight text-[var(--text-h)] lg:text-7xl">
                            Take control of your{" "}
                            <span className="text-[var(--accent-1)]">
                                money
                            </span>{" "}
                            without spreadsheets.
                        </h1>
                        <p className="text-muted-foreground mt-6 max-w-xl text-lg leading-8">
                            Track expenses, monitor budgets, analyze spending
                            habits, and grow your savings with a beautifully
                            designed expense tracker built for modern life.
                        </p>
                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                            <Button
                                className="group inline-flex h-[58px] items-center justify-center gap-2 rounded-2xl bg-[var(--accent-1)] px-7 py-4 text-base font-semibold text-white shadow-xl shadow-purple-500/20 transition hover:scale-[1.02]"
                                onClick={() => redirectHandler("/sign-up")}
                            >
                                Start Tracking Free
                                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                            </Button>
                            <Button
                                variant="outline"
                                className="bg-bg-transparent bg-background flex h-[58px] rounded-2xl border border-[var(--border)] px-7 py-4 text-base font-semibold transition-all duration-200 hover:border-[var(--accent-border)] hover:text-[var(--accent-1)] md:hidden"
                                onClick={() => redirectHandler("/sign-in")}
                            >
                                Sign In
                            </Button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute top-10 -left-10 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl" />
                        <div className="border-border bg-card/70 relative rounded-[32px] border p-5 shadow-2xl backdrop-blur">
                            <div className="border-border flex items-center justify-between border-b pb-5">
                                <div>
                                    <p className="text-muted-foreground text-sm">
                                        Total Balance
                                    </p>

                                    <h2 className="mt-1 text-4xl font-bold tracking-tight text-[var(--text-h)]">
                                        $24,980
                                    </h2>
                                </div>
                            </div>
                            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                <div className="border-border bg-background rounded-3xl border p-5">
                                    <div className="flex items-center justify-between">
                                        <div className="rounded-2xl bg-[var(--accent-bg)] p-3 text-[var(--accent-1)]">
                                            <CreditCard className="h-5 w-5" />
                                        </div>

                                        <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-600">
                                            +18%
                                        </span>
                                    </div>

                                    <p className="text-muted-foreground mt-5 text-sm">
                                        Monthly Savings
                                    </p>

                                    <h3 className="mt-1 text-2xl font-bold">
                                        $4,250
                                    </h3>
                                </div>
                                <div className="border-border bg-background rounded-3xl border p-5">
                                    <div className="flex items-center justify-between">
                                        <div className="rounded-2xl bg-[var(--accent-bg)] p-3 text-[var(--accent-1)]">
                                            <PieChart className="h-5 w-5" />
                                        </div>

                                        <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-500">
                                            -4%
                                        </span>
                                    </div>

                                    <p className="text-muted-foreground mt-5 text-sm">
                                        Food Expenses
                                    </p>

                                    <h3 className="mt-1 text-2xl font-bold">
                                        $1,120
                                    </h3>
                                </div>
                            </div>
                            <div className="border-border bg-background mt-6 rounded-3xl border p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="text-lg font-semibold text-[var(--text-h)]">
                                            Spending Analytics
                                        </h4>

                                        <p className="text-muted-foreground text-sm">
                                            Last 6 months overview
                                        </p>
                                    </div>
                                    <LineChart className="h-5 w-5 text-[var(--accent-1)]" />
                                </div>
                                <div className="mt-8 flex h-44 items-end justify-between gap-3">
                                    {[35, 55, 40, 75, 60, 90].map(
                                        (height, i) => (
                                            <div
                                                key={i}
                                                className="relative flex-1 rounded-t-2xl bg-gradient-to-t from-[var(--accent-1)] to-purple-300"
                                                style={{
                                                    height: `${height}%`,
                                                }}
                                            >
                                                <div className="text-muted-foreground absolute inset-x-0 -top-6 text-center text-xs">
                                                    {
                                                        [
                                                            "Jan",
                                                            "Feb",
                                                            "Mar",
                                                            "Apr",
                                                            "May",
                                                            "Jun",
                                                        ][i]
                                                    }
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="features"
                className="mx-auto max-w-7xl px-6 pb-24 lg:px-8"
            >
                <div className="mx-auto max-w-2xl text-center">
                    <div className="inline-flex rounded-full border border-[var(--accent-border)] bg-[var(--accent-bg)] px-4 py-2 text-sm font-medium text-[var(--accent-1)]">
                        Features
                    </div>

                    <h2 className="mt-6 text-4xl font-black tracking-tight text-[var(--text-h)] lg:text-5xl">
                        Everything you need to manage finances
                    </h2>

                    <p className="text-muted-foreground mt-5 text-lg">
                        Built for individuals, independent professionals, and
                        money-savvy users.
                    </p>
                </div>
                <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {[
                        {
                            icon: Wallet,
                            title: "Smart Budgeting",
                            desc: "Set monthly spending limits.",
                        },
                        {
                            icon: BarChart3,
                            title: "Advanced Analytics",
                            desc: "Track trends and visualize your financial health.",
                        },
                        {
                            icon: ShieldCheck,
                            title: "Safe & Simple",
                            desc: "Your data stays private and easy to access.",
                        },
                        {
                            icon: PieChart,
                            title: "Expense Categories",
                            desc: "Automatically categorize transactions.",
                        },
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="group border-border bg-card rounded-[28px] border p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
                        >
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent-bg)] text-[var(--accent-1)]">
                                <feature.icon className="h-6 w-6" />
                            </div>

                            <h3 className="mt-6 text-xl font-bold text-[var(--text-h)]">
                                {feature.title}
                            </h3>

                            <p className="text-muted-foreground mt-3 leading-7">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
                <div className="to-background relative overflow-hidden rounded-[40px] border border-[var(--accent-border)] bg-gradient-to-br from-[var(--accent-bg)] p-10 lg:p-16">
                    <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
                    <div className="relative z-10 max-w-3xl">
                        <div className="bg-background/80 inline-flex rounded-full border border-[var(--accent-border)] px-4 py-2 text-sm font-medium text-[var(--accent-1)] backdrop-blur">
                            Get Started Today
                        </div>
                        <h2 className="mt-6 text-4xl font-black tracking-tight text-[var(--text-h)] lg:text-6xl">
                            Your money deserves better tracking.
                        </h2>
                        <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-8">
                            Join thousands of users building healthier financial
                            habits with Expense Tracker.
                        </p>
                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                            <Button
                                size="lg"
                                className="h-[58px] rounded-2xl bg-[var(--accent-1)] px-8 py-4 text-base font-semibold text-white shadow-xl shadow-purple-500/20 transition hover:scale-[1.02]"
                                onClick={() => redirectHandler("/sign-up")}
                            >
                                Create Free Account
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LandingPage
