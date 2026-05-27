import { GridLoader } from "react-spinners"

const GridLoading = ({ color = "var(--accent-1)", size = 18, margin = 2 }) => {
    return (
        <div className="fixed top-[61px] right-0 left-0 z-50 flex min-h-[calc(100vh-61px)] items-center justify-center bg-black/40 backdrop-blur-[2px]">
            <GridLoader
                margin={margin}
                size={size}
                color={color}
                className="mb-[61px]"
            />
        </div>
    )
}

export default GridLoading
