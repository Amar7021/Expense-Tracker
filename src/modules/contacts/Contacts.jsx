import { useState } from "react"
import CreateGroupDialog from "./components/CreateGroupDialog"
import ContactsTabs from "./components/ContactsTabs"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/Input"
import { useContacts } from "@/hooks/contacts/useContacts"
import { Users } from "lucide-react"
import { Button } from "@/components/ui/Button"
import ContactsSkeleton from "./components/ContactsSkeleton"

export default function Contacts() {
    const { users, groups, isLoading } = useContacts()

    const [search, setSearch] = useState("")
    const [open, setOpen] = useState(false)

    if (isLoading) {
        return <ContactsSkeleton />
    }

    return (
        <>
            <div className="mx-auto w-full max-w-7xl space-y-6 px-4 py-6">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="flex items-center gap-3">
                            <Users className="size-6 text-[var(--accent-1)]" />

                            <h1 className="text-3xl font-semibold">Contacts</h1>
                        </div>

                        <p className="text-muted-foreground mt-2">
                            Manage your friends and expense groups.
                        </p>
                    </div>

                    <Button onClick={() => setOpen(true)}>New Group</Button>
                </div>
                <div className="relative">
                    <Search className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                    <Input
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Search people or groups..."
                        className="max-w-xl pl-10"
                    />
                </div>
                <ContactsTabs users={users} groups={groups} search={search} />
                <CreateGroupDialog open={open} onOpenChange={setOpen} />
            </div>
        </>
    )
}
