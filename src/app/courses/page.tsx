import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const courses = [
    {
        title: "Beginner: Build Your First Drone",
        description: "A step-by-step guide to building a simple quadcopter.",
        level: "Beginner",
        slug: "beginner-build",
    },
    {
        title: "Intermediate: FPV Racing Drone",
        description: "Build a high-speed racing drone with FPV goggles support.",
        level: "Intermediate",
        slug: "fpv-racing",
    },
    {
        title: "Advanced: Autonomous Flight",
        description: "Program your drone for autonomous missions using ArduPilot.",
        level: "Advanced",
        slug: "autonomous-flight",
    },
]

export default function CoursesPage() {
    return (
        <div className="container max-w-6xl mx-auto py-12 px-4 md:px-6 lg:px-8">
            <div className="mb-10">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Drone Courses</h1>
                <p className="text-muted-foreground mt-3 text-lg">
                    Structured learning paths from assembling to programming.
                </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                    <Link key={course.slug} href={`/courses/${course.slug}`}>
                        <Card className="h-full hover:bg-muted/50 transition-colors">
                            <CardHeader>
                                <div className="flex justify-between items-start mb-2">
                                    <Badge variant={course.level === "Beginner" ? "secondary" : course.level === "Advanced" ? "destructive" : "default"}>
                                        {course.level}
                                    </Badge>
                                </div>
                                <CardTitle>{course.title}</CardTitle>
                                <CardDescription>{course.description}</CardDescription>
                            </CardHeader>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}
