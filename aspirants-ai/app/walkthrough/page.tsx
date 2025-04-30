"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  ArrowRight,
  FileText,
  BookOpen,
  BarChart2,
  BrainCircuit,
  User,
  Settings,
  LogOut,
  Clock,
} from "lucide-react"
import DashboardStats from "@/components/dashboard-stats"
import RecentNews from "@/components/recent-news"
import TrendingTopics from "@/components/trending-topics"
import RevisionReminders from "@/components/revision-reminders"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function WalkthroughPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [showWelcomeDialog, setShowWelcomeDialog] = useState(true)
  const [showTooltip, setShowTooltip] = useState<string | null>(null)
  const [showFeedbackDialog, setShowFeedbackDialog] = useState(false)
  const [walkthroughProgress, setWalkthroughProgress] = useState(0)
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)

  const totalSteps = 5

  useEffect(() => {
    // Check if user is registered for beta
    const userData = localStorage.getItem("betaUser")
    if (userData) {
      const parsedUser = JSON.parse(userData)
      setUser({
        name: parsedUser.name || "UPSC Aspirant",
        email: parsedUser.email || "aspirant@example.com",
      })
    } else {
      // Use dummy user data if not registered
      setUser({
        name: "UPSC Aspirant",
        email: "aspirant@example.com",
      })
    }
  }, [])

  useEffect(() => {
    // Update progress bar
    setWalkthroughProgress((currentStep / totalSteps) * 100)
  }, [currentStep])

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    } else {
      setShowFeedbackDialog(true)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleFinishWalkthrough = () => {
    router.push("/dashboard")
  }

  const handleLogout = () => {
    router.push("/landing")
  }

  const tooltips = {
    dashboard: "This is your personalized dashboard where you can see an overview of your study progress.",
    news: "Click here to access the AI-powered news extraction feature.",
    flashcards: "Click here to access your flashcards and revision materials.",
    analytics: "Click here to view analytics and PYQ mapping.",
    profile: "Click here to access your profile settings.",
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Welcome Dialog */}
      <Dialog open={showWelcomeDialog} onOpenChange={setShowWelcomeDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <User className="h-5 w-5 mr-2 text-primary" />
              Welcome to Your User Walkthrough
            </DialogTitle>
            <DialogDescription>
              This walkthrough will guide you through the UPSC Aspirants AI platform using a dummy account. You'll see
              how a typical user would interact with the platform.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="mb-4">During this walkthrough, you'll explore:</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Badge className="mr-2 shrink-0 mt-0.5">1</Badge>
                <span>Setting up your profile and preferences</span>
              </li>
              <li className="flex items-start">
                <Badge className="mr-2 shrink-0 mt-0.5">2</Badge>
                <span>Navigating the dashboard and key features</span>
              </li>
              <li className="flex items-start">
                <Badge className="mr-2 shrink-0 mt-0.5">3</Badge>
                <span>Extracting and organizing news articles</span>
              </li>
              <li className="flex items-start">
                <Badge className="mr-2 shrink-0 mt-0.5">4</Badge>
                <span>Creating and studying flashcards</span>
              </li>
              <li className="flex items-start">
                <Badge className="mr-2 shrink-0 mt-0.5">5</Badge>
                <span>Analyzing trends and PYQ connections</span>
              </li>
            </ul>
          </div>
          <DialogFooter>
            <Button onClick={() => setShowWelcomeDialog(false)}>Start Walkthrough</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Feedback Dialog */}
      <Dialog open={showFeedbackDialog} onOpenChange={setShowFeedbackDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Walkthrough Complete!</DialogTitle>
            <DialogDescription>
              You've completed the user walkthrough. What would you like to do next?
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 space-y-4">
            <p>
              In the full version, you'll be able to customize your experience, extract real news articles, create
              personalized flashcards, and much more.
            </p>
            <div className="flex flex-col space-y-2">
              <Button onClick={handleFinishWalkthrough}>
                Go to Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" asChild>
                <Link href="/landing">Return to Home Page</Link>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Header */}
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <TooltipProvider>
            <Tooltip open={showTooltip === "dashboard"} onOpenChange={() => setShowTooltip(null)}>
              <TooltipTrigger asChild>
                <div
                  className="flex items-center gap-2 font-bold text-xl cursor-pointer"
                  onClick={() => setShowTooltip("dashboard")}
                >
                  <BrainCircuit className="h-6 w-6" />
                  <span>UPSC Aspirants AI</span>
                </div>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="w-80">
                <p>{tooltips.dashboard}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  )
}
