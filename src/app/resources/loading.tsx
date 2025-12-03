import { LoadingSpinner } from "@/components/loading-spinner"

export default function ResourcesLoading() {
    return (
        <div className="container max-w-6xl mx-auto py-12 px-6 md:px-8 lg:px-12">
            <LoadingSpinner />
        </div>
    )
}
