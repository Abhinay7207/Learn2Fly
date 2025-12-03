import { courseContent } from "@/lib/course-content"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Home } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

export default async function CourseReaderPage({
    params,
}: {
    params: Promise<{ slug: string; module: string; page: string }>
}) {
    const { slug, module: moduleId, page: pageId } = await params

    const course = courseContent[slug]
    if (!course) return notFound()

    const currentModule = course[moduleId]
    if (!currentModule) return notFound()

    const currentPage = currentModule.pages.find(p => p.id === pageId)
    if (!currentPage) return notFound()

    // Navigation logic
    const pageIndex = currentModule.pages.findIndex(p => p.id === pageId)
    const totalPages = currentModule.pages.length

    const prevPage = pageIndex > 0 ? currentModule.pages[pageIndex - 1] : null
    const nextPage = pageIndex < totalPages - 1 ? currentModule.pages[pageIndex + 1] : null

    // Module navigation (if at start/end of module)
    const moduleIds = Object.keys(course).sort((a, b) => parseInt(a) - parseInt(b))
    const currentModuleIndex = moduleIds.indexOf(moduleId)

    const prevModuleId = currentModuleIndex > 0 ? moduleIds[currentModuleIndex - 1] : null
    const nextModuleId = currentModuleIndex < moduleIds.length - 1 ? moduleIds[currentModuleIndex + 1] : null

    return (
        <div className="min-h-screen bg-background">
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 items-center">
                    <Link href={`/courses/${slug}`} className="mr-6 flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Overview
                        </Button>
                    </Link>
                    <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                        <span className="text-sm font-medium text-muted-foreground hidden md:inline-block">
                            Module {moduleId}: {currentModule.title}
                        </span>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">
                                Page {pageIndex + 1} of {totalPages}
                            </span>
                        </div>
                    </div>
                </div>
            </header>

            <main className="container max-w-4xl py-10 px-4 md:px-6">
                <div className="space-y-8">
                    {/* Header Section */}
                    <div className="space-y-4">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{currentPage.title}</h1>
                        <div className="h-1 w-20 bg-primary rounded-full" />
                    </div>

                    {/* Featured Image */}
                    {currentPage.image && (
                        <div className="relative aspect-video w-full overflow-hidden rounded-xl border bg-muted shadow-sm">
                            <Image
                                src={currentPage.image}
                                alt={currentPage.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}

                    {/* Content */}
                    <Card className="border-none shadow-none bg-transparent">
                        <CardContent className="p-0">
                            <div
                                className="
                                    max-w-none
                                    [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:mt-8 [&>h3]:mb-4 [&>h3]:text-foreground
                                    [&>p]:text-lg [&>p]:leading-relaxed [&>p]:mb-6 [&>p]:text-muted-foreground
                                    [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul]:space-y-2
                                    [&>ul>li]:text-lg [&>ul>li]:text-muted-foreground
                                    [&>strong]:text-foreground [&>strong]:font-semibold
                                    [&>.lead]:text-xl [&>.lead]:text-foreground [&>.lead]:font-medium [&>.lead]:mb-8
                                    [&>.alert]:p-4 [&>.alert]:rounded-lg [&>.alert]:mb-6 [&>.alert]:bg-destructive/10 [&>.alert]:text-destructive [&>.alert]:border [&>.alert]:border-destructive/20
                                "
                                dangerouslySetInnerHTML={{ __html: currentPage.content }}
                            />
                        </CardContent>
                    </Card>

                    {/* Navigation Footer */}
                    <div className="flex items-center justify-between pt-8 border-t mt-12">
                        {/* Previous Button */}
                        {prevPage ? (
                            <Link href={`/courses/${slug}/${moduleId}/${prevPage.id}`}>
                                <Button variant="outline" className="h-auto py-4 px-6">
                                    <div className="text-left">
                                        <div className="text-xs text-muted-foreground mb-1">Previous</div>
                                        <div className="flex items-center font-semibold">
                                            <ChevronLeft className="mr-2 h-4 w-4" />
                                            {prevPage.title}
                                        </div>
                                    </div>
                                </Button>
                            </Link>
                        ) : prevModuleId ? (
                            <Link href={`/courses/${slug}/${prevModuleId}/5`}> {/* Go to last page of prev module */}
                                <Button variant="outline" className="h-auto py-4 px-6">
                                    <div className="text-left">
                                        <div className="text-xs text-muted-foreground mb-1">Previous Module</div>
                                        <div className="flex items-center font-semibold">
                                            <ChevronLeft className="mr-2 h-4 w-4" />
                                            Back to Module {prevModuleId}
                                        </div>
                                    </div>
                                </Button>
                            </Link>
                        ) : (
                            <div /> /* Spacer */
                        )}

                        {/* Next Button */}
                        {nextPage ? (
                            <Link href={`/courses/${slug}/${moduleId}/${nextPage.id}`}>
                                <Button className="h-auto py-4 px-6">
                                    <div className="text-right">
                                        <div className="text-xs text-primary-foreground/80 mb-1">Next</div>
                                        <div className="flex items-center font-semibold">
                                            {nextPage.title}
                                            <ChevronRight className="ml-2 h-4 w-4" />
                                        </div>
                                    </div>
                                </Button>
                            </Link>
                        ) : nextModuleId ? (
                            <Link href={`/courses/${slug}/${nextModuleId}/1`}>
                                <Button className="h-auto py-4 px-6">
                                    <div className="text-right">
                                        <div className="text-xs text-primary-foreground/80 mb-1">Next Module</div>
                                        <div className="flex items-center font-semibold">
                                            Start Module {nextModuleId}
                                            <ChevronRight className="ml-2 h-4 w-4" />
                                        </div>
                                    </div>
                                </Button>
                            </Link>
                        ) : (
                            <Link href={`/courses/${slug}`}>
                                <Button variant="default" className="h-auto py-4 px-6">
                                    <div className="text-right">
                                        <div className="text-xs text-primary-foreground/80 mb-1">Complete</div>
                                        <div className="flex items-center font-semibold">
                                            Finish Course
                                            <Home className="ml-2 h-4 w-4" />
                                        </div>
                                    </div>
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </main>
        </div>
    )
}
