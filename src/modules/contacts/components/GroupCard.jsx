import { ArrowRight, Users } from "lucide-react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"

import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"

export default function GroupCard({ group }) {
    return (
        <Card className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <CardContent className="space-y-5 pt-6">
                <div className="flex items-center gap-4">
                    <div className="flex size-14 items-center justify-center rounded-full bg-[var(--accent-bg)]">
                        <Users className="size-7 text-[var(--accent-1)]" />
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold">{group.name}</h3>

                        <p className="text-muted-foreground text-sm">
                            {group.memberCount} members
                        </p>
                    </div>
                </div>

                <Badge variant="secondary">Expense Group</Badge>
            </CardContent>

            <CardFooter className="justify-end">
                <Button variant="ghost" size="sm" className="gap-2">
                    Open
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Button>
            </CardFooter>
        </Card>
    )
}
