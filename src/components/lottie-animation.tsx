"use client"

import Lottie from "lottie-react"
import { useEffect, useState } from "react"
import { LoadingSpinner } from "./loading-spinner"

export function LottieAnimation({ url }: { url: string }) {
    const [animationData, setAnimationData] = useState(null)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchAnimation = async () => {
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    setError(true)
                    return
                }
                const contentType = response.headers.get("content-type")
                if (!contentType || !contentType.includes("application/json")) {
                    setError(true)
                    return
                }
                const data = await response.json()
                setAnimationData(data)
            } catch (err) {
                console.error("Error loading Lottie animation:", err)
                setError(true)
            }
        }
        fetchAnimation()
    }, [url])

    if (error) return null // Hide the animation if there's an error
    if (!animationData) return <LoadingSpinner />

    return <Lottie animationData={animationData} loop={true} className="h-64 w-64" />
}
