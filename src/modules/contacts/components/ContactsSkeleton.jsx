import { Skeleton } from "@/components/ui/Skeleton"

export default function ContactsSkeleton() {
    return (
        <div className="mx-auto w-full max-w-7xl space-y-6 px-4 pt-14 pb-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <div className="flex items-center gap-3">
                        <Skeleton className="h-8 w-8 rounded-full" />

                        <Skeleton className="h-10 w-56" />
                    </div>

                    <Skeleton className="mt-5 h-4 w-72" />
                </div>

                <Skeleton className="h-9 w-25 rounded-md" />
            </div>

            {/* Search */}
            <div className="relative">
                <Skeleton className="h-9 max-w-[645px] min-w-75 rounded-md" />
            </div>

            {/* Tabs */}
            <div className="space-y-6">
                <Skeleton className="h-9 max-w-[432px] min-w-75 rounded-md" />
                {/* <div className="flex flex-col rounded-xl text-center"> */}
                <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <ContactCardSkeleton key={index} />
                    ))}
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

function ContactCardSkeleton() {
    return (
        <div className="bg-card rounded-xl border p-5 shadow-sm">
            <div className="flex items-start gap-4">
                <Skeleton className="h-14 w-14 rounded-full" />

                <div className="flex-1 space-y-2">
                    <Skeleton className="h-5 w-36" />
                    <Skeleton className="h-4 w-48" />
                </div>
            </div>

            <div className="mt-5 space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
            </div>

            <div className="mt-6 flex gap-3">
                <Skeleton className="h-9 flex-1 rounded-md" />
                <Skeleton className="h-9 flex-1 rounded-md" />
            </div>
        </div>
    )
}
