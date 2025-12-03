"use client"

import Link from "next/link"
import { ArrowRight, BookOpen, Cpu, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DroneModel } from "@/components/drone-model"
import { LottieAnimation } from "@/components/lottie-animation"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 lg:grid-cols-2 lg:gap-10 px-6 md:px-8 lg:px-12">
        <div className="flex flex-col items-start gap-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl"
          >
            Master the Art of <br className="hidden sm:inline" />
            <span className="text-primary">Drone Making</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[700px] text-lg text-muted-foreground sm:text-xl"
          >
            From basic aerodynamics to advanced flight controllers.
            Dive deep into the science and engineering behind drones.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4"
          >
            <Link href="/courses">
              <Button size="lg">
                Start Learning <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/theory">
              <Button variant="outline" size="lg">
                Explore Theory
              </Button>
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center"
        >
          <DroneModel />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="container max-w-7xl mx-auto py-16 md:py-24 lg:py-32 bg-muted/50 rounded-3xl my-16 px-6 md:px-8 lg:px-12">
        <div className="flex max-w-[58rem] mx-auto flex-col items-center justify-center gap-6 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">
            Why Study Drones?
          </h2>
          <p className="max-w-[85%] leading-relaxed text-muted-foreground text-lg sm:leading-8">
            Drones are revolutionizing industries from agriculture to cinematography.
            Understanding how they work gives you the power to build, repair, and innovate.
            Our platform provides comprehensive resources for hobbyists and engineers alike.
          </p>
          {/* <div className="mt-8">
             <LottieAnimation url="YOUR_LOTTIE_JSON_URL_HERE" /> 
             Uncomment and add your own Lottie JSON URL from https://lottiefiles.com/
          </div> */}
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-12 md:py-16 lg:py-24 px-6 md:px-8 lg:px-12">
        <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <Card className="transition-all hover:shadow-lg">
            <CardHeader className="space-y-3">
              <BookOpen className="h-12 w-12 mb-2 text-primary" />
              <CardTitle className="text-xl">Detailed Theory</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                In-depth articles on aerodynamics, electronics, and mechanics.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/theory" className="text-sm font-medium hover:underline inline-flex items-center">
                Read Articles &rarr;
              </Link>
            </CardContent>
          </Card>
          <Card className="transition-all hover:shadow-lg">
            <CardHeader className="space-y-3">
              <GraduationCap className="h-12 w-12 mb-2 text-primary" />
              <CardTitle className="text-xl">Structured Courses</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                Step-by-step guides to build your own drones from scratch.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/courses" className="text-sm font-medium hover:underline inline-flex items-center">
                View Courses &rarr;
              </Link>
            </CardContent>
          </Card>
          <Card className="transition-all hover:shadow-lg">
            <CardHeader className="space-y-3">
              <Cpu className="h-12 w-12 mb-2 text-primary" />
              <CardTitle className="text-xl">The Science</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                Understand the physics and math that make flight possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/science" className="text-sm font-medium hover:underline inline-flex items-center">
                Explore Science &rarr;
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
