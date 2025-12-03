import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const topics = [
    {
        title: "Aerodynamics",
        description: "How drones fly: Lift, Thrust, Drag, and Weight.",
        slug: "aerodynamics",
    },
    {
        title: "Components",
        description: "Motors, ESCs, Flight Controllers, and Propellers.",
        slug: "components",
    },
    {
        title: "Flight Modes",
        description: "Stabilize, Acro, Horizon, and GPS modes explained.",
        slug: "flight-modes",
    },
    {
        title: "Safety & Regulations",
        description: "Flying safely and adhering to local laws.",
        slug: "safety",
    },
]

export default function TheoryPage() {
    return (
        <div className="container max-w-6xl mx-auto py-12 px-4 md:px-6 lg:px-8">
            <div className="mb-10">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Drone Theory</h1>
                <p className="text-muted-foreground mt-3 text-lg">
                    Comprehensive guides to understand the mechanics and physics of drones.
                </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {topics.map((topic) => (
                    <Link key={topic.slug} href={`/theory/${topic.slug}`}>
                        <Card className="h-full hover:bg-muted/50 transition-colors">
                            <CardHeader>
                                <CardTitle>{topic.title}</CardTitle>
                                <CardDescription>{topic.description}</CardDescription>
                            </CardHeader>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}
