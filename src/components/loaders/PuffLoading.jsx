import { PuffLoader } from "react-spinners"

const PuffLoading = ({ color = "var(--accent-1)", size = 80 }) => {
    return (
        <div className="absolute top-[61px] right-0 bottom-[61px] left-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
            <PuffLoader size={size} color={color} />
        </div>
    )
}

export default PuffLoading
