import { Button } from "@/components/ui/Button"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router"

const PageNotFound = () => {
    const navigate = useNavigate()
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const [seconds, setSeconds] = useState(10)
    const containerRef = useRef(null)

    useEffect(() => {
        if (seconds <= 0) {
            navigate("/")
            return
        }
        const t = setTimeout(() => setSeconds(s => s - 1), 1000)
        return () => clearTimeout(t)
    }, [seconds, navigate])

    useEffect(() => {
        const handleMove = e => {
            const { innerWidth: w, innerHeight: h } = window
            setMousePos({
                x: (e.clientX / w - 0.5) * 24,
                y: (e.clientY / h - 0.5) * 24,
            })
        }
        window.addEventListener("mousemove", handleMove)
        return () => window.removeEventListener("mousemove", handleMove)
    }, [])

    return (
        <>
            <title>Expense Tracker - 404 Page Not Found</title>
            <meta name="robots" content="noindex, nofollow" />
            <div
                ref={containerRef}
                className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-[var(--bg)] px-6 select-none"
            >
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-50"
                    style={{
                        backgroundImage: `
                        linear-gradient(var(--border) 1px, transparent 1px),
                        linear-gradient(90deg, var(--border) 1px, transparent 1px)
                    `,
                        backgroundSize: "48px 48px",
                        maskImage:
                            "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
                    }}
                />
                <div
                    aria-hidden
                    className="pointer-events-none absolute top-1/2 left-1/2 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-bg)] blur-[48px]"
                />
                <div className="relative z-10 flex max-w-[560px] flex-col items-center gap-6 text-center">
                    <div
                        className="relative leading-none font-bold tracking-tighter text-transparent select-none"
                        style={{
                            fontSize: "clamp(96px, 20vw, 180px)",
                            WebkitTextStroke: "1.5px var(--border)",
                            transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.3}px)`,
                            transition: "transform 0.12s ease-out",
                        }}
                    >
                        <span
                            aria-hidden
                            className="absolute inset-0 text-transparent opacity-35 select-none"
                            style={{
                                WebkitTextStroke: "1.5px var(--accent-1)",
                                transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.6}px)`,
                                transition: "transform 0.2s ease-out",
                            }}
                        >
                            404
                        </span>
                        404
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-border)] bg-[var(--accent-bg)] px-3 py-1 text-sm font-medium tracking-wide text-[var(--accent-1)]">
                        <span className="size-1.5 [animation:pulse-dot_1.6s_ease-in-out_infinite] rounded-full bg-[var(--accent-1)]" />
                        Page not found
                    </span>
                    <h1
                        className="m-0 leading-[1.15] font-medium tracking-[-0.8px] text-[var(--text-h)]"
                        style={{ fontSize: "clamp(24px, 4vw, 36px)" }}
                    >
                        We lost this page
                    </h1>
                    <p className="mx-auto max-w-[380px] leading-relaxed text-[var(--text)]">
                        The page you're looking for doesn't exist, was moved, or
                        the link is broken. Head back to safety below.
                    </p>
                    <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
                        <Button
                            onClick={() => navigate("/")}
                            className="relative inline-flex h-12 cursor-pointer items-center gap-2 overflow-hidden rounded-xl border-none bg-[var(--accent-1)] px-6 py-3 text-sm font-medium text-white shadow-[0_0_0_0_var(--accent-border)] transition-all duration-200 hover:shadow-[0_0_0_4px_var(--accent-border)]"
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <path
                                    d="M10 12L6 8l4-4"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            Go Home
                        </Button>

                        <Button
                            onClick={() => navigate(-1)}
                            className="inline-flex h-12 cursor-pointer items-center gap-2 rounded-xl border border-[var(--border)] bg-transparent px-6 py-3 text-sm font-medium text-[var(--text-h)] transition-all duration-200 hover:border-[var(--accent-border)]"
                            size="lg"
                            variant="outline"
                        >
                            Go back
                        </Button>
                    </div>
                    <p className="mt-2 text-sm text-[var(--text)] opacity-60">
                        Redirecting to home in{" "}
                        <span className="text-[var(--accent-1)] tabular-nums">
                            {seconds}s
                        </span>
                    </p>
                    <div className="mt-2 h-1 w-full max-w-[240px] overflow-hidden rounded-full bg-[var(--border)]">
                        <div
                            className="h-full bg-[var(--accent-1)] transition-all duration-1000 ease-linear"
                            style={{
                                width: `${(seconds / 10) * 100}%`,
                            }}
                        />
                    </div>
                </div>
                <div className="absolute right-0 bottom-8 left-0 flex items-center justify-center gap-2 text-xs text-[var(--text)] opacity-45">
                    <span>Home</span>
                    <span>/</span>
                    <span className="text-[var(--accent-1)]">404</span>
                </div>

                <style>{`
                @keyframes pulse-dot {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50%       { opacity: 0.4; transform: scale(0.7); }
                }
            `}</style>
            </div>
        </>
    )
}

export default PageNotFound
