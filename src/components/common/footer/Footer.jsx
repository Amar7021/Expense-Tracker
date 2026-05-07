const Footer = () => {
    return (
        <footer className="mt-auto border-t border-[var(--border)] bg-[var(--social-bg)]">
            <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-3 px-6 py-5">
                <div className="flex items-center gap-2">
                    <span
                        className="text-xs text-[var(--text)]"
                        style={{
                            opacity: 0.7,
                        }}
                    >
                        © {new Date().getFullYear()}
                    </span>
                    <span className="text-sm font-medium text-[var(--text-h)]">
                        Expense Tracker
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
