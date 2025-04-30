"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { BrainCircuit, ArrowLeft, CheckCircle2, Loader2, ArrowRight, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import BetaProgramStats from "@/components/beta-program-stats"
import { isBetaProgramFull, registerBetaParticipant } from "@/utils/beta-program"

export default function BetaSignupPage() {
  const router = useRouter()
  const [email, setEmail] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("betaSignupEmail") || ""
    }
    return ""
  })
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [experience, setExperience] = useState("")
  const [goals, setGoals] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isBetaFull, setIsBetaFull] = useState(false)

  useEffect(() => {
    // Check if beta program is full
    setIsBetaFull(isBetaProgramFull())
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      // Check if we've reached the limit and try to register
      if (!registerBetaParticipant()) {
        setIsBetaFull(true)
        setIsSubmitting(false)
        return
      }

      setIsSubmitting(false)
      setIsSubmitted(true)

      // Store user info in localStorage for demo purposes
      localStorage.setItem(
        "betaUser",
        JSON.stringify({
          name,
          email,
          phone,
          experience,
          goals,
          isRegistered: true,
        }),
      )
    }, 1500)
  }

  const handleStartWalkthrough = () => {
    router.push("/walkthrough")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <Link href="/landing" className="flex items-center gap-2 font-bold text-xl">
            <BrainCircuit className="h-6 w-6 text-forest" />
            <span>UPSC Aspirants AI</span>
          </Link>
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/landing">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 container max-w-4xl py-12">
        {isBetaFull ? (
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-navy flex items-center">
                <AlertTriangle className="h-6 w-6 mr-2 text-gold" />
                Beta Program is Full
              </CardTitle>
              <CardDescription>We've reached our limit of 1000 participants for the beta program.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted/30 rounded-lg p-6 text-center">
                <h3 className="text-xl font-medium mb-2">Thank you for your interest!</h3>
                <p className="text-muted-foreground mb-4">
                  While we can't accept any more beta participants at this time, you can join our waitlist to be
                  notified when we open registrations for the full version.
                </p>
                <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 max-w-md mx-auto">
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <Button>Join Waitlist</Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Button variant="outline" onClick={handleStartWalkthrough}>
                  Try User Walkthrough Instead
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="outline" asChild>
                <Link href="/landing">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ) : !isSubmitted ? (
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-navy">Join Our Beta Program</CardTitle>
              <CardDescription>
                Complete this form to get 2 months of free access to UPSC Aspirants AI in exchange for your feedback.
              </CardDescription>
              <BetaProgramStats className="mt-4" />
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input
                      id="phone"
                      placeholder="+91 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience">UPSC Preparation Experience</Label>
                    <Select value={experience} onValueChange={setExperience} required>
                      <SelectTrigger id="experience">
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Just starting (0-6 months)</SelectItem>
                        <SelectItem value="intermediate">Intermediate (6-18 months)</SelectItem>
                        <SelectItem value="advanced">Advanced (18+ months)</SelectItem>
                        <SelectItem value="retry">Retaking the exam</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="goals">What are your main goals for UPSC preparation?</Label>
                  <Textarea
                    id="goals"
                    placeholder="Share your preparation goals and challenges..."
                    value={goals}
                    onChange={(e) => setGoals(e.target.value)}
                    className="min-h-[100px]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Areas of Interest (Select all that apply)</Label>
                  <div className="grid gap-2 md:grid-cols-2">
                    {[
                      "Current Affairs",
                      "Indian Polity",
                      "Economy",
                      "Geography",
                      "History",
                      "Environment",
                      "Science & Technology",
                      "International Relations",
                    ].map((area) => (
                      <div key={area} className="flex items-center space-x-2">
                        <Checkbox id={area.toLowerCase().replace(/\s+/g, "-")} />
                        <Label htmlFor={area.toLowerCase().replace(/\s+/g, "-")} className="font-normal">
                          {area}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Beta Program Commitments</Label>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <Checkbox id="feedback-commitment" required />
                      <Label htmlFor="feedback-commitment" className="font-normal">
                        I agree to provide feedback on my experience with the platform at least once a month during the
                        beta period.
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="terms" required />
                      <Label htmlFor="terms" className="font-normal">
                        I agree to the{" "}
                        <Link href="/terms" className="text-forest hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-forest hover:underline">
                          Privacy Policy
                        </Link>
                        .
                      </Label>
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-forest hover:bg-forest/90" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <CheckCircle2 className="h-6 w-6 mr-2 text-primary" />
                Application Submitted Successfully!
              </CardTitle>
              <CardDescription>
                Thank you for applying to our beta program. Your application has been received.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted/30 rounded-lg p-6 text-center">
                <h3 className="text-xl font-medium mb-2">What's Next?</h3>
                <p className="text-muted-foreground mb-4">
                  We're reviewing your application and will be in touch soon. In the meantime, you can explore a
                  walkthrough of the platform.
                </p>
                <Button onClick={handleStartWalkthrough}>
                  Start User Walkthrough
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Beta Program Timeline</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex flex-col items-center mr-4">
                      <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                        1
                      </div>
                      <div className="h-full w-0.5 bg-muted-foreground/20 my-1"></div>
                    </div>
                    <div>
                      <h4 className="font-medium">Application Review</h4>
                      <p className="text-sm text-muted-foreground">
                        We'll review your application within 48 hours and send you an email with next steps.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex flex-col items-center mr-4">
                      <div className="h-8 w-8 rounded-full bg-muted-foreground/20 text-muted-foreground flex items-center justify-center">
                        2
                      </div>
                      <div className="h-full w-0.5 bg-muted-foreground/20 my-1"></div>
                    </div>
                    <div>
                      <h4 className="font-medium">Account Setup</h4>
                      <p className="text-sm text-muted-foreground">
                        Once approved, you'll receive instructions to set up your account and access the platform.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex flex-col items-center mr-4">
                      <div className="h-8 w-8 rounded-full bg-muted-foreground/20 text-muted-foreground flex items-center justify-center">
                        3
                      </div>
                      <div className="h-full w-0.5 bg-muted-foreground/20 my-1"></div>
                    </div>
                    <div>
                      <h4 className="font-medium">Onboarding Session</h4>
                      <p className="text-sm text-muted-foreground">
                        We'll schedule a brief onboarding session to help you get the most out of the platform.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex flex-col items-center mr-4">
                      <div className="h-8 w-8 rounded-full bg-muted-foreground/20 text-muted-foreground flex items-center justify-center">
                        4
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium">Beta Testing Period</h4>
                      <p className="text-sm text-muted-foreground">
                        Enjoy 2 months of free access while providing feedback to help us improve the platform.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" asChild>
                <Link href="/landing">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              <Button onClick={handleStartWalkthrough}>
                Start User Walkthrough
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>

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
          </div>
        </div>
      </footer>
    </div>
  )
}
