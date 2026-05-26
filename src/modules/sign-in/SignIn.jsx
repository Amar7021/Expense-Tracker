import GridLoading from "@/components/loaders/GridLoading"
import { SignIn as ClerkSignIn } from "@clerk/react"

const SignIn = () => {
    return (
        <>
            <title>Smart Split - Sign In</title>
            <meta name="robots" content="noindex, nofollow" />
            <section className="mt-[75px] flex items-center justify-center">
                <ClerkSignIn
                    signUpUrl={import.meta.env.VITE_CLERK_SIGN_UP_URL}
                    fallbackRedirectUrl={
                        import.meta.env.VITE_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL
                    }
                    fallback={<GridLoading />}
                />
            </section>
        </>
    )
}

export default SignIn
