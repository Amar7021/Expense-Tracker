import SectionWrapper from "@/components/custom/SectionWrapper"
import GridLoading from "@/components/loaders/GridLoading"
import { UserProfile } from "@clerk/react"

const Profile = () => {
    return (
        <>
            <title>Smart Split - Profile</title>
            <meta name="robots" content="noindex, nofollow" />
            <SectionWrapper>
                <UserProfile fallback={<GridLoading />} />
            </SectionWrapper>
        </>
    )
}

export default Profile
