import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Lightbulb, Brain, Code, Rocket, CheckCircle, Target, Zap } from "lucide-react"

export default function HowItWorks() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-offwhite relative overflow-hidden">
        <div className="abstract-shape-1" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                How We <span className="gradient-text">Work</span>
              </h1>
              <p className="max-w-[900px] text-graphite/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our proven process for turning founder visions into successful products
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-lg bg-electricIndigo/10 px-3 py-1 text-sm font-medium text-electricIndigo">
                Our Philosophy
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Think First, Build Smart</h2>
              <p className="text-graphite/70">
                Most agencies jump straight to coding. We start with strategic thinking. This fundamental difference is
                why our clients succeed where others fail.
              </p>
              <p className="text-graphite/70">
                We believe that the right strategy reduces development time, saves money, and creates products users
                actually want. Our process is designed to bring clarity before a single line of code is written.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative animate-float">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  width={400}
                  height={400}
                  alt="Think First Philosophy"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Process */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-offwhite relative">
        <div className="abstract-shape-2" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Process</h2>
              <p className="max-w-[900px] text-graphite/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A structured approach to turning ideas into successful products
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl py-12">
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-electricIndigo text-white">
                      1
                    </div>
                    <h3 className="text-2xl font-bold">Discovery Call</h3>
                  </div>
                  <p className="text-graphite/70">
                    We start with a free 30-minute call to understand your vision, goals, and challenges. This helps us
                    determine if we're a good fit for each other.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-teal" />
                      <span className="text-sm">Understand your vision and goals</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-teal" />
                      <span className="text-sm">Identify key challenges</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-teal" />
                      <span className="text-sm">Determine next steps</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="rounded-full bg-electricIndigo/10 p-6">
                    <Lightbulb className="h-24 w-24 text-electricIndigo" />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex items-center justify-center lg:order-last">
                  <div className="rounded-full bg-electricIndigo/10 p-6">
                    <Brain className="h-24 w-24 text-electricIndigo" />
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-electricIndigo text-white">
                      2
                    </div>
                    <h3 className="text-2xl font-bold">Think Sprint</h3>
                  </div>
                  <p className="text-graphite/70">
                    Our signature 3-day workshop brings clarity to your vision. We define your users, map out the MVP
                    scope, and create a clear roadmap for development.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-teal" />
                      <span className="text-sm">User research & persona development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-teal" />
                      <span className="text-sm">Feature prioritization workshop</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-teal" />
                      <span className="text-sm">MVP scope definition</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-teal" />
                      <span className="text-sm">Technical architecture planning</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-electricIndigo text-white">
                      3
                    </div>
                    <h3 className="text-2xl font-bold">Build Sprint</h3>
                  </div>
                  <p className="text-graphite/70">
                    With a clear plan in place, we design and develop your MVP with weekly demos, continuous feedback,
                    and a focus on what matters most.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-teal" />
                      <span className="text-sm">UI/UX design & prototyping</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-teal" />
                      <span className="text-sm">Frontend & backend development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-teal" />
                      <span className="text-sm">Weekly demos & feedback cycles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-teal" />
                      <span className="text-sm">Quality assurance & testing</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="rounded-full bg-electricIndigo/10 p-6">
                    <Code className="h-24 w-24 text-electricIndigo" />
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex items-center justify-center lg:order-last">
                  <div className="rounded-full bg-electricIndigo/10 p-6">
                    <Rocket className="h-24 w-24 text-electricIndigo" />
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-electricIndigo text-white">
                      4
                    </div>
                    <h3 className="text-2xl font-bold">GTM Sprint</h3>
                  </div>
                  <p className="text-graphite/70">
                    We help you launch, acquire users, gather feedback, and prepare for your next growth phase or
                    funding round.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-teal" />
                      <span className="text-sm">Launch strategy development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-teal" />
                      <span className="text-sm">User acquisition planning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-teal" />
                      <span className="text-sm">Analytics & tracking setup</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-teal" />
                      <span className="text-sm">Investor pitch deck creation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Makes Us Different</h2>
              <p className="max-w-[900px] text-graphite/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our unique approach to building successful MVPs
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
            <Card className="flex flex-col border-0 shadow-md bg-offwhite">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="rounded-full bg-red-100 p-2">
                    <Target className="h-5 w-5 text-red-600" />
                  </div>
                  <CardTitle>Traditional Agencies</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-1 space-y-2">
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-red-100 p-1 mt-1">
                    <span className="text-red-600 text-xs">✕</span>
                  </div>
                  <p className="text-sm">Build exactly what you ask for</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-red-100 p-1 mt-1">
                    <span className="text-red-600 text-xs">✕</span>
                  </div>
                  <p className="text-sm">Focus on hours billed, not outcomes</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-red-100 p-1 mt-1">
                    <span className="text-red-600 text-xs">✕</span>
                  </div>
                  <p className="text-sm">Require detailed specs upfront</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-red-100 p-1 mt-1">
                    <span className="text-red-600 text-xs">✕</span>
                  </div>
                  <p className="text-sm">Limited strategic input</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-red-100 p-1 mt-1">
                    <span className="text-red-600 text-xs">✕</span>
                  </div>
                  <p className="text-sm">No skin in the game</p>
                </div>
              </CardContent>
            </Card>
            <Card className="flex flex-col border-0 shadow-md bg-offwhite">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="rounded-full bg-teal/20 p-2">
                    <Zap className="h-5 w-5 text-teal" />
                  </div>
                  <CardTitle>ThinkToBuild Approach</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-1 space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-teal mt-0.5" />
                  <p className="text-sm">Challenge assumptions to build the right thing</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-teal mt-0.5" />
                  <p className="text-sm">Focus on business outcomes and traction</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-teal mt-0.5" />
                  <p className="text-sm">Help clarify your vision and strategy</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-teal mt-0.5" />
                  <p className="text-sm">Bring founder-level strategic thinking</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-teal mt-0.5" />
                  <p className="text-sm">Optional equity partnerships</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-offwhite relative">
        <div className="abstract-shape-1" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tools & Technologies</h2>
              <p className="max-w-[900px] text-graphite/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We use modern tools and technologies to build scalable, maintainable products
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 py-12 md:grid-cols-4">
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="rounded-full bg-white p-4 shadow-md card-hover">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  width={60}
                  height={60}
                  alt="React"
                  className="object-contain"
                />
              </div>
              <p className="font-medium">React</p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="rounded-full bg-white p-4 shadow-md card-hover">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  width={60}
                  height={60}
                  alt="Next.js"
                  className="object-contain"
                />
              </div>
              <p className="font-medium">Next.js</p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="rounded-full bg-white p-4 shadow-md card-hover">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  width={60}
                  height={60}
                  alt="Node.js"
                  className="object-contain"
                />
              </div>
              <p className="font-medium">Node.js</p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="rounded-full bg-white p-4 shadow-md card-hover">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  width={60}
                  height={60}
                  alt="TypeScript"
                  className="object-contain"
                />
              </div>
              <p className="font-medium">TypeScript</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-graphite/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Common questions about our process and approach
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl space-y-8 py-12">
            <div className="space-y-2 p-6 rounded-lg bg-offwhite card-hover">
              <h3 className="text-xl font-bold">How long does it take to build an MVP?</h3>
              <p className="text-graphite/70">
                Most MVPs take 6-12 weeks from Think Sprint to launch, depending on complexity. Our process is designed
                to be efficient while ensuring quality and strategic alignment.
              </p>
            </div>
            <div className="space-y-2 p-6 rounded-lg bg-offwhite card-hover">
              <h3 className="text-xl font-bold">What if I don't have a clear idea yet?</h3>
              <p className="text-graphite/70">
                That's exactly what our Think Sprint is designed for! We help clarify your vision, identify your target
                users, and define the core features that will validate your concept.
              </p>
            </div>
            <div className="space-y-2 p-6 rounded-lg bg-offwhite card-hover">
              <h3 className="text-xl font-bold">How much does it cost?</h3>
              <p className="text-graphite/70">
                Our sprints are priced transparently based on scope and timeline. Think Sprints typically range from
                $5K-10K, while Build Sprints range from $20K-100K depending on complexity. We also offer equity
                partnerships for select startups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-deepBlue text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-electricIndigo blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-teal blur-3xl animate-pulse-slow"></div>
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
              <p className="max-w-[600px] text-white/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Book a free discovery call to discuss your project and see if we're a good fit.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="gap-1 bg-white text-deepBlue hover:bg-white/90" asChild>
                <Link href="/contact">
                  Book a Discovery Call
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-deepBlue"
                asChild
              >
                <Link href="/our-sprints">Explore Our Sprints</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
