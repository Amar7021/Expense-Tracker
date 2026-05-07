import { useNavigate } from "react-router"

const SignIn = () => {
    const navigate = useNavigate()

    return (
        <div>
            <button
                type="button"
                className="bg-white text-black"
                onClick={() => navigate("/sign-up")}
            >
                Sign up
            </button>
        </div>
    )
}

export default SignIn
