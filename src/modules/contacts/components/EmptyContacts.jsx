import { FolderOpen } from "lucide-react"

export default function EmptyContacts({ title, description }) {
    return (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-20 text-center">
            <FolderOpen className="text-muted-foreground mb-5 size-12" />

            <h3 className="text-lg font-semibold">{title}</h3>

            <p className="text-muted-foreground mt-2 max-w-sm text-sm">
                {description}
            </p>
        </div>
    )
}
