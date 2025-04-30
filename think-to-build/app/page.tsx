import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  Lightbulb,
  Rocket,
  Brain,
  Target,
  Users,
  Code,
  LineChart,
  Repeat,
  Clock,
  CheckCircle,
  Briefcase,
} from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
        <div className="abstract-shape-1" />
        <div className="abstract-shape-2" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Think First. <span className="gradient-text">Build Smart.</span>
                </h1>
                <p className="max-w-[600px] text-graphite/70 md:text-xl">
                  Founder-first MVP studio. Clarity → Sprints → Launch.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="gap-1" asChild>
                  <Link href="/contact">
                    Book a Sprint
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/how-it-works">Explore How It Works</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-float">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Hero Image"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Solve Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-lg bg-electricIndigo/10 px-3 py-1 text-sm font-medium text-electricIndigo">
                From Chaos
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Founders Face Challenges</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-red-100 p-1 mt-1">
                    <span className="text-red-600 text-xs">✕</span>
                  </div>
                  <div>
                    <span className="font-medium">Unclear vision and strategy</span>
                    <p className="text-sm text-graphite/70">
                      Most founders struggle to articulate what they're building and why it matters
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-red-100 p-1 mt-1">
                    <span className="text-red-600 text-xs">✕</span>
                  </div>
                  <div>
                    <span className="font-medium">Overbuilding features</span>
                    <p className="text-sm text-graphite/70">
                      Wasting time and money on features users don't need or want
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-red-100 p-1 mt-1">
                    <span className="text-red-600 text-xs">✕</span>
                  </div>
                  <div>
                    <span className="font-medium">Agencies that just execute</span>
                    <p className="text-sm text-graphite/70">
                      Most dev shops build exactly what you ask for—even if it's wrong
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-lg bg-teal/10 px-3 py-1 text-sm font-medium text-teal">
                To Clarity
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">We Bring Solutions</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-teal/20 p-1 mt-1">
                    <CheckCircle className="h-4 w-4 text-teal" />
                  </div>
                  <div>
                    <span className="font-medium">Strategic clarity first</span>
                    <p className="text-sm text-graphite/70">
                      We help define your vision, users, and MVP scope before writing code
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-teal/20 p-1 mt-1">
                    <CheckCircle className="h-4 w-4 text-teal" />
                  </div>
                  <div>
                    <span className="font-medium">Focused sprint execution</span>
                    <p className="text-sm text-graphite/70">
                      Time-boxed development of only what matters for validation and traction
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-teal/20 p-1 mt-1">
                    <CheckCircle className="h-4 w-4 text-teal" />
                  </div>
                  <div>
                    <span className="font-medium">Founder-first approach</span>
                    <p className="text-sm text-graphite/70">
                      We're founders too—we understand the journey and challenges
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sprint Cards Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-offwhite relative">
        <div className="abstract-shape-3" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Sprints</h2>
              <p className="max-w-[900px] text-graphite/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Focused, time-boxed engagements to solve specific challenges in your startup journey
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col card-hover border-0 shadow-md bg-white">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="rounded-full bg-electricIndigo/10 p-2">
                    <Brain className="h-5 w-5 text-electricIndigo" />
                  </div>
                  <CardTitle>Think Sprint</CardTitle>
                </div>
                <p className="text-sm text-graphite/70">For founders with ideas but no clear roadmap</p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
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
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/our-sprints#think">
                    Explore Sprint
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col card-hover border-0 shadow-md bg-white">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="rounded-full bg-electricIndigo/10 p-2">
                    <Code className="h-5 w-5 text-electricIndigo" />
                  </div>
                  <CardTitle>Build Sprint</CardTitle>
                </div>
                <p className="text-sm text-graphite/70">For founders ready to build their MVP</p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal mt-0.5" />
                    <span>UI/UX design & prototyping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal mt-0.5" />
                    <span>Frontend & backend development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal mt-0.5" />
                    <span>Weekly demos & feedback cycles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal mt-0.5" />
                    <span>Launch-ready MVP delivery</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/our-sprints#build">
                    Explore Sprint
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col card-hover border-0 shadow-md bg-white">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="rounded-full bg-electricIndigo/10 p-2">
                    <LineChart className="h-5 w-5 text-electricIndigo" />
                  </div>
                  <CardTitle>GTM Sprint</CardTitle>
                </div>
                <p className="text-sm text-graphite/70">For founders with an MVP ready to launch</p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal mt-0.5" />
                    <span>Launch strategy development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal mt-0.5" />
                    <span>User acquisition planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal mt-0.5" />
                    <span>Analytics & tracking setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal mt-0.5" />
                    <span>Investor pitch deck creation</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/our-sprints#gtm">
                    Explore Sprint
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col card-hover border-0 shadow-md bg-white md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="rounded-full bg-electricIndigo/10 p-2">
                    <Repeat className="h-5 w-5 text-electricIndigo" />
                  </div>
                  <CardTitle>Revamp Sprint</CardTitle>
                </div>
                <p className="text-sm text-graphite/70">For founders with existing products that need improvement</p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal mt-0.5" />
                    <span>UX audit & improvement plan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal mt-0.5" />
                    <span>Technical debt assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal mt-0.5" />
                    <span>Performance optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal mt-0.5" />
                    <span>Feature enhancement & redesign</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/our-sprints#revamp">
                    Explore Sprint
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col card-hover border-0 shadow-md bg-white md:col-span-2 lg:col-span-2">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="rounded-full bg-electricIndigo/10 p-2">
                    <Clock className="h-5 w-5 text-electricIndigo" />
                  </div>
                  <CardTitle>Retainer Pods</CardTitle>
                </div>
                <p className="text-sm text-graphite/70">For founders who need ongoing support and development</p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm md:grid md:grid-cols-2 md:gap-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal mt-0.5" />
                    <span>Dedicated product team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal mt-0.5" />
                    <span>Flexible monthly commitment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal mt-0.5" />
                    <span>Ongoing development & maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal mt-0.5" />
                    <span>Strategic advisory included</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/our-sprints#retainer">
                    Explore Retainer Options
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center">
            <Button size="lg" asChild>
              <Link href="/our-sprints">
                View All Sprints
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why ThinkToBuild */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why ThinkToBuild</h2>
              <p className="max-w-[900px] text-graphite/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our unique approach to building successful MVPs
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
            <div className="flex flex-col items-start space-y-4 p-6 rounded-lg bg-offwhite card-hover">
              <div className="rounded-full bg-electricIndigo/10 p-3">
                <Lightbulb className="h-6 w-6 text-electricIndigo" />
              </div>
              <h3 className="text-xl font-bold">Clarity-first, not code-first</h3>
              <p className="text-graphite/70">
                We don't start coding until we understand your vision, users, and business model. This saves time,
                money, and prevents building the wrong thing.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-4 p-6 rounded-lg bg-offwhite card-hover">
              <div className="rounded-full bg-electricIndigo/10 p-3">
                <Target className="h-6 w-6 text-electricIndigo" />
              </div>
              <h3 className="text-xl font-bold">Real strategy, not cookie-cutter</h3>
              <p className="text-graphite/70">
                Every startup is unique. We tailor our approach to your specific market, users, and challenges instead
                of applying one-size-fits-all solutions.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-4 p-6 rounded-lg bg-offwhite card-hover">
              <div className="rounded-full bg-electricIndigo/10 p-3">
                <Users className="h-6 w-6 text-electricIndigo" />
              </div>
              <h3 className="text-xl font-bold">Founder empathy, not agency fluff</h3>
              <p className="text-graphite/70">
                Built by founders for founders. We understand the pressure, constraints, and challenges you face because
                we've been there ourselves.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-4 p-6 rounded-lg bg-offwhite card-hover">
              <div className="rounded-full bg-electricIndigo/10 p-3">
                <Briefcase className="h-6 w-6 text-electricIndigo" />
              </div>
              <h3 className="text-xl font-bold">Equity-backed teams with skin in the game</h3>
              <p className="text-graphite/70">
                For select startups, we offer equity partnerships where we invest our time and expertise alongside you,
                aligning our success with yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-offwhite relative">
        <div className="abstract-shape-1" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Process</h2>
              <p className="max-w-[900px] text-graphite/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A proven approach to turning ideas into successful products
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl py-12">
            <div className="relative">
              {/* Timeline line */}
              <div className="timeline-line left-4 top-0 h-full md:left-1/2 md:-ml-0.5"></div>

              {/* Step 1 */}
              <div className="relative mb-16">
                <div className="md:flex md:items-center">
                  <div className="md:w-1/2 md:pr-8">
                    <div className="mb-4 flex items-center md:justify-end">
                      <div className="rounded-full bg-electricIndigo/10 p-3">
                        <Lightbulb className="h-6 w-6 text-electricIndigo" />
                      </div>
                      <div className="ml-4 md:ml-0 md:mr-4">
                        <h3 className="text-xl font-bold">Discovery</h3>
                        <p className="text-sm text-graphite/70">Understanding your vision</p>
                      </div>
                    </div>
                    <div className="rounded-lg bg-white p-4 shadow-md card-hover md:text-right">
                      <p className="text-sm">
                        We start by deeply understanding your vision, market, and users to align on goals and
                        challenges.
                      </p>
                    </div>
                  </div>
                  <div className="timeline-dot left-4 top-4 md:left-1/2 md:-ml-2"></div>
                  <div className="mt-4 md:mt-0 md:w-1/2 md:pl-8"></div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative mb-16">
                <div className="md:flex md:items-center">
                  <div className="md:w-1/2 md:pr-8"></div>
                  <div className="timeline-dot left-4 top-4 md:left-1/2 md:-ml-2"></div>
                  <div className="mt-4 md:mt-0 md:w-1/2 md:pl-8">
                    <div className="mb-4 flex items-center">
                      <div className="rounded-full bg-electricIndigo/10 p-3">
                        <Brain className="h-6 w-6 text-electricIndigo" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold">Think Sprint</h3>
                        <p className="text-sm text-graphite/70">Strategic clarity</p>
                      </div>
                    </div>
                    <div className="rounded-lg bg-white p-4 shadow-md card-hover">
                      <p className="text-sm">
                        Our structured workshop process helps define your MVP scope, user journeys, and technical
                        requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative mb-16">
                <div className="md:flex md:items-center">
                  <div className="md:w-1/2 md:pr-8">
                    <div className="mb-4 flex items-center md:justify-end">
                      <div className="rounded-full bg-electricIndigo/10 p-3">
                        <Code className="h-6 w-6 text-electricIndigo" />
                      </div>
                      <div className="ml-4 md:ml-0 md:mr-4">
                        <h3 className="text-xl font-bold">MVP Build</h3>
                        <p className="text-sm text-graphite/70">Focused execution</p>
                      </div>
                    </div>
                    <div className="rounded-lg bg-white p-4 shadow-md card-hover md:text-right">
                      <p className="text-sm">
                        We design and develop your MVP with weekly demos, continuous feedback, and a focus on what
                        matters.
                      </p>
                    </div>
                  </div>
                  <div className="timeline-dot left-4 top-4 md:left-1/2 md:-ml-2"></div>
                  <div className="mt-4 md:mt-0 md:w-1/2 md:pl-8"></div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="md:flex md:items-center">
                  <div className="md:w-1/2 md:pr-8"></div>
                  <div className="timeline-dot left-4 top-4 md:left-1/2 md:-ml-2"></div>
                  <div className="mt-4 md:mt-0 md:w-1/2 md:pl-8">
                    <div className="mb-4 flex items-center">
                      <div className="rounded-full bg-electricIndigo/10 p-3">
                        <Rocket className="h-6 w-6 text-electricIndigo" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold">GTM Launch</h3>
                        <p className="text-sm text-graphite/70">Market validation</p>
                      </div>
                    </div>
                    <div className="rounded-lg bg-white p-4 shadow-md card-hover">
                      <p className="text-sm">
                        We help you launch, acquire users, gather feedback, and prepare for your next growth phase.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Button size="lg" asChild>
              <Link href="/how-it-works">
                See Full Process
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Meet the Collective */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Your Product Pod</h2>
              <p className="max-w-[900px] text-graphite/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                This isn't an agency. This is your product team.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 py-12 md:grid-cols-3 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="relative h-24 w-24 overflow-hidden rounded-full bg-electricIndigo/10 p-1">
                <Image
                  src="/placeholder.svg?height=96&width=96"
                  width={96}
                  height={96}
                  alt="Team Member"
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-lg font-bold">Alex Chen</h3>
              <p className="text-sm text-graphite/70">Product Strategist</p>
              <p className="text-xs text-graphite/70">Ex-Google, 2x Founder</p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="relative h-24 w-24 overflow-hidden rounded-full bg-electricIndigo/10 p-1">
                <Image
                  src="/placeholder.svg?height=96&width=96"
                  width={96}
                  height={96}
                  alt="Team Member"
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-lg font-bold">Sarah Kim</h3>
              <p className="text-sm text-graphite/70">UX Designer</p>
              <p className="text-xs text-graphite/70">10+ Years in Product Design</p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="relative h-24 w-24 overflow-hidden rounded-full bg-electricIndigo/10 p-1">
                <Image
                  src="/placeholder.svg?height=96&width=96"
                  width={96}
                  height={96}
                  alt="Team Member"
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-lg font-bold">Michael Torres</h3>
              <p className="text-sm text-graphite/70">Tech Lead</p>
              <p className="text-xs text-graphite/70">Full-Stack Architecture Expert</p>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="relative h-24 w-24 overflow-hidden rounded-full bg-electricIndigo/10 p-1">
                <Image
                  src="/placeholder.svg?height=96&width=96"
                  width={96}
                  height={96}
                  alt="Team Member"
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-lg font-bold">Priya Sharma</h3>
              <p className="text-sm text-graphite/70">Growth Strategist</p>
              <p className="text-xs text-graphite/70">Acquisition & GTM Specialist</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="max-w-2xl rounded-lg bg-electricIndigo/5 p-6 border border-electricIndigo/20">
              <p className="text-center text-graphite/70">
                <span className="font-bold text-electricIndigo">Equity partnerships available:</span> For select
                startups, our team members can work for a mix of cash and equity, aligning our success with yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Carousel */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-offwhite relative">
        <div className="abstract-shape-2" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Founders Say</h2>
              <p className="max-w-[900px] text-graphite/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from the founders we've helped launch successful products
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
            <div className="rounded-lg border-0 bg-white p-6 shadow-md card-hover">
              <div className="space-y-4">
                <p className="text-lg font-medium italic">
                  "ThinkToBuild didn't just build our product—they helped us rethink our entire approach. The strategic
                  guidance was just as valuable as the code they wrote."
                </p>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    width={60}
                    height={60}
                    alt="Client"
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-medium">Alex Johnson</p>
                    <p className="text-sm text-graphite/70">CEO, HealthTech Startup</p>
                    <p className="text-sm text-electricIndigo">Raised $2M seed round</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border-0 bg-white p-6 shadow-md card-hover">
              <div className="space-y-4">
                <p className="text-lg font-medium italic">
                  "Working with this team cut our time to market in half. Their process helped us avoid common pitfalls
                  and focus on what really mattered for our launch."
                </p>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    width={60}
                    height={60}
                    alt="Client"
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-medium">Priya Patel</p>
                    <p className="text-sm text-graphite/70">Founder, FinTech Platform</p>
                    <p className="text-sm text-electricIndigo">10,000+ users in 3 months</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work With Us (Freelancer CTA) */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl rounded-lg bg-gradient-to-r from-electricIndigo/10 to-teal/10 p-8 md:p-12 border-0 shadow-md">
            <div className="grid gap-6 md:grid-cols-2 md:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Join Our Build Collective</h2>
                <p className="text-graphite/70">
                  Designers, developers, strategists: Work with innovative founders on exciting projects.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-teal" />
                    <span className="text-sm">Flexible remote work</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-teal" />
                    <span className="text-sm">Competitive rates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-teal" />
                    <span className="text-sm">Equity opportunities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-teal" />
                    <span className="text-sm">Work with innovative startups</span>
                  </li>
                </ul>
                <Button size="lg" asChild>
                  <Link href="/work-with-us">
                    Apply Now
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  width={300}
                  height={300}
                  alt="Team Collaboration"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-deepBlue text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-electricIndigo blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-teal blur-3xl animate-pulse-slow"></div>
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Think Smarter?</h2>
              <p className="max-w-[600px] text-white/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's turn your vision into a product users love and investors want to fund.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="gap-1 bg-white text-deepBlue hover:bg-white/90" asChild>
                <Link href="/contact">
                  Start Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-deepBlue"
                asChild
              >
                <Link href="/founder-checklist">Grab Free Kit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
