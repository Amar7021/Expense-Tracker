import { useState } from "react"
import { Loader2, Search, X } from "lucide-react"

import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/Dialog"

import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar"

import { useCreateGroup, useSearchUsers } from "@/hooks/contacts/useContacts"

export default function CreateGroupDialog({ open, onOpenChange }) {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [search, setSearch] = useState("")
    const [selectedUsers, setSelectedUsers] = useState([])

    const { users, isLoading } = useSearchUsers(search)
    const { createGroup } = useCreateGroup()

    const handleSelectUser = user => {
        const alreadySelected = selectedUsers.some(
            selected => selected.id === user.id
        )

        if (alreadySelected) {
            return
        }

        setSelectedUsers(prev => [...prev, user])

        setSearch("")
    }

    const handleRemoveUser = userId => {
        setSelectedUsers(prev => prev.filter(user => user.id !== userId))
    }

    const handleCreateGroup = async () => {
        if (!name.trim()) {
            return
        }

        try {
            await createGroup({
                name: name.trim(),
                description: description.trim() || undefined,
                members: selectedUsers.map(user => user.id),
            })

            handleClose()
        } catch (error) {
            console.error("Failed to create group:", error)
        }
    }

    const handleClose = () => {
        setName("")
        setDescription("")
        setSearch("")
        setSelectedUsers([])

        onOpenChange(false)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-sm">
                <DialogHeader>
                    <DialogTitle>Create Group</DialogTitle>
                </DialogHeader>

                <div className="space-y-5">
                    {/* Group Details */}
                    <div className="space-y-3">
                        <Input
                            placeholder="Group name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />

                        <Textarea
                            placeholder="Description (optional)"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>

                    {/* Search Users */}
                    <div className="space-y-2">
                        <p className="text-sm font-medium">Add Members</p>

                        <div className="relative">
                            <Search className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />

                            <Input
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                placeholder="Search by name or email..."
                                className="pl-9"
                            />
                        </div>

                        {/* Search Results */}
                        {search.trim().length >= 2 && (
                            <div className="max-h-48 overflow-y-auto rounded-md border">
                                {isLoading ? (
                                    <div className="flex items-center justify-center p-4">
                                        <Loader2 className="size-4 animate-spin" />
                                    </div>
                                ) : users.length === 0 ? (
                                    <p className="text-muted-foreground p-4 text-center text-sm">
                                        No users found
                                    </p>
                                ) : (
                                    users.map(user => {
                                        const isSelected = selectedUsers.some(
                                            selected => selected.id === user.id
                                        )

                                        return (
                                            <button
                                                key={user.id}
                                                type="button"
                                                disabled={isSelected}
                                                onClick={() =>
                                                    handleSelectUser(user)
                                                }
                                                className="hover:bg-accent flex w-full items-center gap-3 p-3 text-left transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                                            >
                                                <Avatar className="size-9">
                                                    <AvatarImage
                                                        src={user.imageUrl}
                                                    />

                                                    <AvatarFallback>
                                                        {user.name
                                                            ?.charAt(0)
                                                            .toUpperCase()}
                                                    </AvatarFallback>
                                                </Avatar>

                                                <div className="min-w-0">
                                                    <p className="truncate text-sm font-medium">
                                                        {user.name}
                                                    </p>

                                                    <p className="text-muted-foreground truncate text-xs">
                                                        {user.email}
                                                    </p>
                                                </div>
                                            </button>
                                        )
                                    })
                                )}
                            </div>
                        )}
                    </div>

                    {/* Selected Members */}
                    {selectedUsers.length > 0 && (
                        <div className="space-y-2">
                            <p className="text-sm font-medium">
                                Selected Members
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {selectedUsers.map(user => (
                                    <div
                                        key={user.id}
                                        className="bg-muted flex items-center gap-2 rounded-full border px-3 py-1.5"
                                    >
                                        <Avatar className="size-6">
                                            <AvatarImage src={user.imageUrl} />

                                            <AvatarFallback>
                                                {user.name
                                                    ?.charAt(0)
                                                    .toUpperCase()}
                                            </AvatarFallback>
                                        </Avatar>

                                        <span className="max-w-32 truncate text-sm">
                                            {user.name}
                                        </span>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleRemoveUser(user.id)
                                            }
                                            className="text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            <X className="size-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={handleClose}>
                        Cancel
                    </Button>

                    <Button disabled={!name.trim()} onClick={handleCreateGroup}>
                        Create Group
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
