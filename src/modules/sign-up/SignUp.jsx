import PuffLoading from "@/components/loaders/PuffLoading"
import { SignUp as ClerkSignUp } from "@clerk/react"

const SignUp = () => {
    return (
        <>
            <title>Smart Split - Sign Up</title>
            <meta name="robots" content="noindex, nofollow" />
            <section className="mt-[95px] mb-[35px] flex items-center justify-center">
                <ClerkSignUp
                    signInUrl={import.meta.env.VITE_CLERK_SIGN_IN_URL}
                    fallbackRedirectUrl={
                        import.meta.env.VITE_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL
                    }
                    fallback={<PuffLoading />}
                />
            </section>
        </>
    )
}

export default SignUp
