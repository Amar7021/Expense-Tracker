import GridLoading from "@/components/loaders/GridLoading"
import { UserProfile } from "@clerk/react"

const Profile = () => {
    return (
        <>
            <title>Smart Split - Profile</title>
            <meta name="robots" content="noindex, nofollow" />
            <section className="mx-[20px] mt-[120px] mb-[50px] flex w-full items-center justify-center">
                <UserProfile fallback={<GridLoading />} />
            </section>
        </>
    )
}

export default Profile
