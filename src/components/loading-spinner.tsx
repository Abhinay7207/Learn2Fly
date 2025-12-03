import "./loading-spinner.css"

export function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center min-h-[400px]">
            <div className="spinner">
                <div className="spinner1"></div>
            </div>
        </div>
    )
}
