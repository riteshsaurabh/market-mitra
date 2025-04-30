"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BrainCircuit, BookOpen, FileText, BarChart2, ArrowRight, Play, CheckCircle2 } from "lucide-react"
import { useRouter } from "next/navigation"
import BetaProgramStats from "@/components/beta-program-stats"

export default function LandingPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")

  const handleStartDemo = () => {
    router.push("/demo")
  }

  const handleBetaSignup = () => {
    if (email) {
      localStorage.setItem("betaSignupEmail", email)
      router.push("/beta-signup")
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-lightgray">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block px-3 py-1 rounded-lg bg-gold/20 text-navy text-sm font-medium mb-2">
                UPSC Aspirants AI - Beta
              </div>
              <h1 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-navy">
                Transform Your UPSC Preparation with AI
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                The ultimate AI-driven tool that organizes and personalizes daily news and study materials, saving time
                and improving learning efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" onClick={handleStartDemo} className="bg-forest hover:bg-forest/90">
                  Start Interactive Demo
                  <Play className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" asChild className="border-navy text-navy hover:bg-navy/10">
                  <Link href="#features">Explore Features</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-xl border">
                <div className="absolute inset-0 bg-muted/30 flex items-center justify-center">
                  <div className="text-center p-6">
                    <Play className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <p className="text-lg font-medium">Demo Video</p>
                    <p className="text-sm text-muted-foreground">See UPSC Aspirants AI in action</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="w-full py-12 md:py-24 lg:py-32" id="features">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              The UPSC Preparation Challenge
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              We understand the unique challenges faced by UPSC aspirants
            </p>
          </div>

          <Tabs defaultValue="problems" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="problems">Problems</TabsTrigger>
              <TabsTrigger value="solutions">Our Solutions</TabsTrigger>
            </TabsList>
            <TabsContent value="problems" className="mt-6 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-primary" />
                    Information Overload
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Aspirants struggle with the overwhelming volume of daily news and study materials, making it
                    difficult to identify what's relevant for the UPSC examination.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-primary" />
                    Inefficient Revision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Traditional revision methods are time-consuming and often ineffective, leading to poor retention and
                    recall during examinations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart2 className="h-5 w-5 mr-2 text-primary" />
                    Lack of Pattern Recognition
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Without proper analysis, aspirants miss important connections between current affairs and previous
                    year questions, failing to identify examination patterns.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="solutions" className="mt-6 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-primary" />
                    AI-Powered News Extraction
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Our AI automatically extracts and categorizes relevant information from daily news sources, saving
                    hours of manual reading and note-taking.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-primary" />
                    Smart Flashcards & Spaced Repetition
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Automatically generated flashcards with scientifically-proven spaced repetition algorithms ensure
                    maximum retention with minimum time investment.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart2 className="h-5 w-5 mr-2 text-primary" />
                    PYQ Mapping & Trend Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Our system analyzes current news topics and maps them to previous year questions, helping you
                    identify patterns and focus on high-probability topics.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Key Benefits
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              How UPSC Aspirants AI transforms your preparation journey
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-secondary" />
                  Save 70% of Study Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Automated extraction and organization of study materials eliminates hours of manual work, allowing you
                  to focus on actual learning.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-secondary" />
                  Improve Retention by 3x
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our scientifically-backed spaced repetition system ensures you remember more information for longer
                  periods, crucial for the extensive UPSC syllabus.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-secondary" />
                  Personalized Learning Path
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  The platform adapts to your learning style, strengths, and weaknesses, creating a customized study
                  plan that maximizes your chances of success creating a customized study plan that maximizes your
                  chances of success.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-secondary" />
                  Strategic Topic Focus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  PYQ mapping helps you identify high-probability topics, allowing you to allocate your study time more
                  effectively for maximum results.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-secondary" />
                  Comprehensive Coverage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Never miss important news or topics again. Our AI ensures complete coverage of the UPSC syllabus
                  across all subjects and current affairs.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-secondary" />
                  Data-Driven Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Detailed analytics on your study patterns, strengths, and weaknesses help you continuously refine your
                  preparation strategy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Beta Access Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Join Our Beta Program Today
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Be among the first to experience the future of UPSC preparation. Get 2 months of free access in exchange
                for your valuable feedback.
              </p>
              <BetaProgramStats className="mb-4" />
              <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                  />
                </div>
                <Button onClick={handleBetaSignup} disabled={!email}>
                  Get Beta Access
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Limited spots available. Priority given to early sign-ups.
              </p>
            </div>
            <div className="flex flex-col space-y-4 rounded-xl border bg-muted/50 p-6">
              <h3 className="text-xl font-bold">Beta Program Includes:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                  <span>2 months of free full access to all features</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                  <span>Priority support from our team</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                  <span>Influence the development of new features</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                  <span>Early access to all future updates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                  <span>Special discounted pricing after the beta period</span>
                </li>
              </ul>
              <div className="pt-4">
                <Button variant="outline" className="w-full" onClick={handleStartDemo}>
                  Try Interactive Demo First
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-background border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex items-center space-x-2">
              <BrainCircuit className="h-6 w-6 text-primary" />
              <span className="font-bold">UPSC Aspirants AI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} UPSC Aspirants AI. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
                Terms
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
                Privacy
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
