import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, CheckCircle, Calendar, Clock3, Users, Zap } from "lucide-react"

export default function OurSprints() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-offwhite relative overflow-hidden">
        <div className="abstract-shape-1" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Our <span className="gradient-text">Sprints</span>
              </h1>
              <p className="max-w-[900px] text-graphite/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Focused, time-boxed engagements to solve specific challenges in your startup journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Think Sprint */}
      <section id="think" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-lg bg-electricIndigo/10 px-3 py-1 text-sm font-medium text-electricIndigo">
                <Brain className="mr-1 h-4 w-4" />
                <span>THINK SPRINT</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Strategic Clarity Before Code
              </h2>
              <p className="text-graphite/70">
                Our signature 3-day workshop brings clarity to your vision. We define your users, map out the MVP scope, and create a clear roadmap for development.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-electricIndigo" />
                  <span className="text-sm font-medium">3-Day Workshop</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-electricIndigo" />
                  <span className="text-sm font-medium">Pre-Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-electricIndigo" />
                  <span className="text-sm font-medium">For Founders with Ideas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-electricIndigo" />
                  <span className="text-sm font-medium">Strategic Focus</span>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">What's Included:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal mt-0.5" />
                    <span>User research & persona development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal mt-0.5" />
                    <span>Feature prioritization workshop</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal mt-0.5" />
                    <span>MVP scope definition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal mt-0.5" />
                    <span>Technical architecture planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal mt-0.5" />
                    <span>Development roadmap & timeline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal mt-0.5" />
                    <span>Budget planning & resource allocation</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Book a Think Sprint
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative animate-float">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  width={400}
                  height={400}
                  alt="Think Sprint"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Build Sprint */}
      <section id="build" className="w-full py-12 md:py-24 lg:py-32 bg-offwhite relative">
        <div className="abstract-shape-2" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-\
