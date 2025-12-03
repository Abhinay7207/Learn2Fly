import Link from "next/link"
import { ArrowLeft, BookOpen, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Course data with modules and pages
const getCourseData = (slug: string) => {
    const courses: Record<string, any> = {
        "beginner-build": {
            title: "Beginner: Build Your First Drone",
            description: "Complete guide to building your first quadcopter from scratch",
            level: "Beginner",
            modules: [
                {
                    id: 1,
                    title: "Introduction & Safety",
                    duration: "30 mins",
                    pages: 5,
                    topics: ["Drone basics", "Safety protocols", "Tools needed", "Workspace setup", "Legal requirements"]
                },
                {
                    id: 2,
                    title: "Understanding Components",
                    duration: "45 mins",
                    pages: 5,
                    topics: ["Frame selection", "Motors & ESCs", "Flight controller", "Battery basics", "Propellers"]
                },
                {
                    id: 3,
                    title: "Assembly Process",
                    duration: "60 mins",
                    pages: 5,
                    topics: ["Frame assembly", "Motor mounting", "Wiring basics", "FC installation", "Final assembly"]
                },
                {
                    id: 4,
                    title: "Software Configuration",
                    duration: "40 mins",
                    pages: 5,
                    topics: ["Betaflight basics", "Radio setup", "Sensor calibration", "Flight modes", "Testing"]
                },
                {
                    id: 5,
                    title: "First Flight & Tuning",
                    duration: "35 mins",
                    pages: 5,
                    topics: ["Pre-flight checks", "Maiden flight", "Basic tuning", "Troubleshooting", "Maintenance"]
                }
            ]
        },
        "fpv-racing": {
            title: "Intermediate: FPV Racing Drone",
            description: "Build a high-performance FPV racing quadcopter",
            level: "Intermediate",
            modules: [
                {
                    id: 1,
                    title: "FPV System Overview",
                    duration: "35 mins",
                    pages: 5,
                    topics: ["FPV components", "Video systems", "Goggle selection", "Antenna theory", "Legal considerations"]
                },
                {
                    id: 2,
                    title: "Advanced Component Selection",
                    duration: "50 mins",
                    pages: 5,
                    topics: ["Racing frames", "High-KV motors", "4-in-1 ESCs", "F7 flight controllers", "LiPo selection"]
                },
                {
                    id: 3,
                    title: "Building for Performance",
                    duration: "70 mins",
                    pages: 5,
                    topics: ["Clean build", "Weight optimization", "Camera mounting", "VTX setup", "Antenna placement"]
                },
                {
                    id: 4,
                    title: "Racing Firmware Setup",
                    duration: "55 mins",
                    pages: 5,
                    topics: ["Betaflight racing", "OSD configuration", "Rates setup", "Filters tuning", "Blackbox"]
                },
                {
                    id: 5,
                    title: "FPV Flying & Racing",
                    duration: "45 mins",
                    pages: 5,
                    topics: ["FPV fundamentals", "Racing techniques", "Track practice", "Advanced maneuvers", "Competition prep"]
                }
            ]
        },
        "autonomous-flight": {
            title: "Advanced: Autonomous Flight Systems",
            description: "Master autonomous flight with ArduPilot and mission planning",
            level: "Advanced",
            modules: [
                {
                    id: 1,
                    title: "Autonomous Systems Introduction",
                    duration: "40 mins",
                    pages: 5,
                    topics: ["Autonomy overview", "ArduPilot vs PX4", "Hardware requirements", "GPS systems", "Safety protocols"]
                },
                {
                    id: 2,
                    title: "Pixhawk Setup",
                    duration: "60 mins",
                    pages: 5,
                    topics: ["Pixhawk hardware", "Sensor integration", "Telemetry systems", "Companion computers", "Power systems"]
                },
                {
                    id: 3,
                    title: "ArduPilot Configuration",
                    duration: "75 mins",
                    pages: 5,
                    topics: ["Mission Planner", "Parameter tuning", "Failsafe config", "Geofencing", "Advanced features"]
                },
                {
                    id: 4,
                    title: "Mission Planning",
                    duration: "50 mins",
                    pages: 5,
                    topics: ["Waypoint missions", "Survey grid", "Camera control", "MAVLink protocol", "Ground stations"]
                },
                {
                    id: 5,
                    title: "Advanced Applications",
                    duration: "55 mins",
                    pages: 5,
                    topics: ["Precision landing", "Object avoidance", "Swarm systems", "AI integration", "Commercial use"]
                }
            ]
        }
    }

    return courses[slug] || null
}

export default async function CourseDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const courseData = getCourseData(slug)

    if (!courseData) {
        return <div>Course not found</div>
    }

    const totalPages = courseData.modules.reduce((sum: number, m: any) => sum + m.pages, 0)
    const totalDuration = courseData.modules.reduce((sum: number, m: any) => {
        const mins = parseInt(m.duration)
        return sum + mins
    }, 0)

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
            <div className="container max-w-6xl mx-auto py-12 px-4 md:px-6 lg:px-8">
                <Link href="/courses">
                    <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-primary">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Courses
                    </Button>
                </Link>

                <div className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge variant={courseData.level === "Beginner" ? "secondary" : courseData.level === "Advanced" ? "destructive" : "default"}>
                            {courseData.level}
                        </Badge>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {Math.floor(totalDuration / 60)}h {totalDuration % 60}m
                        </span>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <BookOpen className="w-4 h-4" />
                            {totalPages} pages
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{courseData.title}</h1>
                    <p className="text-xl text-muted-foreground">{courseData.description}</p>
                </div>

                <div className="grid gap-6">
                    {courseData.modules.map((module: any) => (
                        <Link key={module.id} href={`/courses/${slug}/${module.id}/1`}>
                            <Card className="overflow-hidden hover:border-primary/50 transition-colors cursor-pointer">
                                <CardHeader className="bg-muted/50">
                                    <div className="flex items-start justify-between">
                                        <div className="flex gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                                                {module.id}
                                            </div>
                                            <div>
                                                <CardTitle className="text-xl mb-1">Module {module.id}: {module.title}</CardTitle>
                                                <CardDescription className="flex items-center gap-4">
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="w-3 h-3" />
                                                        {module.duration}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <BookOpen className="w-3 h-3" />
                                                        {module.pages} pages
                                                    </span>
                                                </CardDescription>
                                            </div>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <h4 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide">Topics Covered:</h4>
                                    <ul className="grid sm:grid-cols-2 gap-2">
                                        {module.topics.map((topic: string, idx: number) => (
                                            <li key={idx} className="flex items-center text-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                                                {topic}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

                <div className="mt-10 p-6 rounded-lg bg-primary/5 border">
                    <h3 className="text-2xl font-bold mb-2">Ready to start learning?</h3>
                    <p className="text-muted-foreground mb-4">Access all {totalPages} pages of comprehensive content covering everything you need to know.</p>
                    <Button size="lg">Start Course</Button>
                </div>
            </div>
        </div>
    )
}
