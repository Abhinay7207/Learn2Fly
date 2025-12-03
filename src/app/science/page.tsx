import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const scienceTopics = [
    {
        title: "Physics of Flight",
        description: "Bernoulli's principle, Newton's laws, and how propellers generate lift.",
        slug: "physics-of-flight",
    },
    {
        title: "Battery Chemistry",
        description: "Understanding LiPo batteries, C-ratings, and voltage sag.",
        slug: "battery-chemistry",
    },
    {
        title: "Radio Frequency (RF)",
        description: "How transmitters and receivers communicate. 2.4GHz vs 5.8GHz.",
        slug: "radio-frequency",
    },
    {
        title: "PID Controllers",
        description: "The math behind flight stability: Proportional, Integral, Derivative.",
        slug: "pid-controllers",
    },
]

export default function SciencePage() {
    return (
        <div className="container max-w-6xl mx-auto py-12 px-4 md:px-6 lg:px-8">
            <div className="mb-10">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">The Science Behind Drones</h1>
                <p className="text-muted-foreground mt-3 text-lg">
                    Deep dive into the scientific principles that make flight possible.
                </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {scienceTopics.map((topic) => (
                    <Link key={topic.slug} href={`/science/${topic.slug}`}>
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
