import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, BookOpen, Github, Youtube, Users } from "lucide-react"

const resources = [
    {
        category: "Open Source Flight Controllers",
        items: [
            {
                title: "Betaflight",
                description: "Open source flight controller software for multirotors and fixed-wing aircraft.",
                url: "https://betaflight.com/",
                icon: Github,
            },
            {
                title: "ArduPilot",
                description: "The most advanced, full-featured and reliable open source autopilot software.",
                url: "https://ardupilot.org/",
                icon: Github,
            },
            {
                title: "PX4 Autopilot",
                description: "Professional open-source autopilot for drones and autonomous vehicles.",
                url: "https://px4.io/",
                icon: Github,
            },
        ]
    },
    {
        category: "Educational Resources",
        items: [
            {
                title: "Oscar Liang",
                description: "Comprehensive tutorials on FPV drones, flight controllers, and drone building.",
                url: "https://oscarliang.com/",
                icon: BookOpen,
            },
            {
                title: "Drone Nodes",
                description: "In-depth guides and reviews on drone components and builds.",
                url: "https://dronenodes.com/",
                icon: BookOpen,
            },
            {
                title: "GetFPV Learn",
                description: "Educational articles and guides for FPV drone enthusiasts.",
                url: "https://www.getfpv.com/learn/",
                icon: BookOpen,
            },
        ]
    },
    {
        category: "Video Tutorials",
        items: [
            {
                title: "Joshua Bardwell",
                description: "The go-to YouTube channel for FPV drone building and troubleshooting.",
                url: "https://www.youtube.com/@JoshuaBardwell",
                icon: Youtube,
            },
            {
                title: "Albert Kim",
                description: "Detailed drone build guides and component reviews.",
                url: "https://www.youtube.com/@albertkim",
                icon: Youtube,
            },
            {
                title: "Mr Steele",
                description: "FPV freestyle and racing content with build insights.",
                url: "https://www.youtube.com/@MrSteeleFPV",
                icon: Youtube,
            },
        ]
    },
    {
        category: "Community & Forums",
        items: [
            {
                title: "Reddit r/Multicopter",
                description: "Active community discussing drone builds, troubleshooting, and flying.",
                url: "https://www.reddit.com/r/Multicopter/",
                icon: Users,
            },
            {
                title: "IntFPV Forum",
                description: "International FPV community with extensive build logs and discussions.",
                url: "https://intofpv.com/",
                icon: Users,
            },
            {
                title: "RC Groups",
                description: "Long-standing RC community with dedicated multirotor sections.",
                url: "https://www.rcgroups.com/aircraft-electric-multirotor-drones-790/",
                icon: Users,
            },
        ]
    },
    {
        category: "Open Hardware Projects",
        items: [
            {
                title: "Taulabs",
                description: "Open source flight control system hardware and software.",
                url: "https://github.com/TauLabs/TauLabs",
                icon: Github,
            },
            {
                title: "MultiWii",
                description: "Open source flight controller software for multirotor aircraft.",
                url: "http://www.multiwii.com/",
                icon: Github,
            },
            {
                title: "QGroundControl",
                description: "Open source ground control station for drones.",
                url: "http://qgroundcontrol.com/",
                icon: Github,
            },
        ]
    },
]

export default function ResourcesPage() {
    return (
        <div className="container max-w-7xl mx-auto py-12 px-6 md:px-8 lg:px-12">
            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                    Drone Making Resources
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
                    Explore these curated open-source projects, educational platforms, and communities
                    to deepen your drone knowledge and connect with fellow enthusiasts.
                </p>
            </div>

            <div className="space-y-12">
                {resources.map((category, idx) => (
                    <div key={idx}>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">
                            {category.category}
                        </h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {category.items.map((resource, resourceIdx) => {
                                const Icon = resource.icon
                                return (
                                    <a
                                        key={resourceIdx}
                                        href={resource.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group"
                                    >
                                        <Card className="h-full hover:bg-muted/50 transition-all hover:shadow-lg">
                                            <CardHeader>
                                                <div className="flex items-start justify-between">
                                                    <Icon className="h-8 w-8 text-primary mb-2" />
                                                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                                                </div>
                                                <CardTitle className="group-hover:text-primary transition-colors">
                                                    {resource.title}
                                                </CardTitle>
                                                <CardDescription className="leading-relaxed">
                                                    {resource.description}
                                                </CardDescription>
                                            </CardHeader>
                                        </Card>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 p-8 bg-muted/50 rounded-xl border">
                <h3 className="text-xl font-semibold mb-3">📚 Want to Contribute?</h3>
                <p className="text-muted-foreground leading-relaxed">
                    Know of other great resources? Consider contributing to open-source drone projects
                    or sharing your knowledge with the community. The drone ecosystem thrives on
                    collaboration and shared learning.
                </p>
            </div>
        </div>
    )
}
