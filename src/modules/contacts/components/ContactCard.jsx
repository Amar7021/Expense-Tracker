import { ArrowRight, Mail, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar"
import { Badge } from "@/components/ui/Badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/Button"

export default function ContactCard({ user }) {
    const initials = user.name
        ?.split(" ")
        .map(n => n[0])
        .join("")
        .substring(0, 2)
        .toUpperCase()

    return (
        <Card className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <CardContent className="space-y-5 pt-6">
                <div className="flex items-center gap-4">
                    <Avatar className="size-14">
                        <AvatarImage src={user.imageUrl} />

                        <AvatarFallback>{initials}</AvatarFallback>
                    </Avatar>

                    <div className="min-w-0 flex-1">
                        <h3 className="truncate text-lg font-semibold">
                            {user.name}
                        </h3>

                        <div className="text-muted-foreground mt-1 flex items-center gap-2 text-sm">
                            <Mail className="size-4" />
                            <span className="truncate">{user.email}</span>
                        </div>
                    </div>
                </div>

                <Badge variant="secondary">
                    <User className="mr-1 size-3" />
                    Personal Contact
                </Badge>
            </CardContent>

            <CardFooter className="justify-end">
                <Button variant="ghost" size="sm" className="gap-2">
                    View
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Button>
            </CardFooter>
        </Card>
    )
}
