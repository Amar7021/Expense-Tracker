import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs"

import ContactCard from "./ContactCard"
import GroupCard from "./GroupCard"
import EmptyContacts from "./EmptyContacts"

export default function ContactsTabs({ users, groups, search }) {
    const searchText = search.trim().toLowerCase()

    const filteredUsers = users.filter(
        user =>
            user.name.toLowerCase().includes(searchText) ||
            user.email.toLowerCase().includes(searchText)
    )

    const filteredGroups = groups.filter(group =>
        group.name.toLowerCase().includes(searchText)
    )

    return (
        <Tabs defaultValue="people" className="w-full">
            <TabsList className="grid w-full max-w-sm grid-cols-2">
                <TabsTrigger value="people">
                    People ({filteredUsers.length})
                </TabsTrigger>

                <TabsTrigger value="groups">
                    Groups ({filteredGroups.length})
                </TabsTrigger>
            </TabsList>

            <TabsContent value="people">
                {filteredUsers.length === 0 ? (
                    <EmptyContacts
                        title="No contacts found"
                        description="Try another search."
                    />
                ) : (
                    <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {filteredUsers.map(user => (
                            <ContactCard key={user.id} user={user} />
                        ))}
                    </div>
                )}
            </TabsContent>

            <TabsContent value="groups">
                {filteredGroups.length === 0 ? (
                    <EmptyContacts
                        title="No groups found"
                        description="Create your first group."
                    />
                ) : (
                    <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {filteredGroups.map(group => (
                            <GroupCard key={group.id} group={group} />
                        ))}
                    </div>
                )}
            </TabsContent>
        </Tabs>
    )
}
