"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ArrowRight, FileText, BookOpen, BarChart2, BrainCircuit, Info, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import DashboardStats from "@/components/dashboard-stats"
import RecentNews from "@/components/recent-news"
import TrendingTopics from "@/components/trending-topics"
import RevisionReminders from "@/components/revision-reminders"

export default function DemoPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [showWelcomeDialog, setShowWelcomeDialog] = useState(true)
  const [showFeatureHighlight, setShowFeatureHighlight] = useState(false)
  const [highlightedFeature, setHighlightedFeature] = useState<string | null>(null)
  const [showFeedbackDialog, setShowFeedbackDialog] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")

  const totalSteps = 5

  const features = {
    newsExtraction: {
      title: "AI-Powered News Extraction",
      description: "Extract key information from news articles relevant to UPSC syllabus.",
      icon: <FileText className="h-5 w-5 mr-2" />,
    },
    flashcards: {
      title: "Smart Flashcards & Revision",
      description: "Generate and study flashcards with spaced repetition for optimal retention.",
      icon: <BookOpen className="h-5 w-5 mr-2" />,
    },
    analytics: {
      title: "PYQ Mapping & Analytics",
      description: "Connect current affairs to previous year questions and analyze trends.",
      icon: <BarChart2 className="h-5 w-5 mr-2" />,
    },
    dashboard: {
      title: "Personalized Dashboard",
      description: "Get a comprehensive overview of your study progress and priorities.",
      icon: <BrainCircuit className="h-5 w-5 mr-2" />,
    },
  }

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

  const handleHighlightFeature = (feature: string) => {
    setHighlightedFeature(feature)
    setShowFeatureHighlight(true)
  }

  const handleCloseHighlight = () => {
    setShowFeatureHighlight(false)
    setHighlightedFeature(null)
  }

  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  const handleFinishDemo = () => {
    router.push("/beta-signup")
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Welcome Dialog */}
      <Dialog open={showWelcomeDialog} onOpenChange={setShowWelcomeDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <BrainCircuit className="h-5 w-5 mr-2 text-primary" />
              Welcome to the Interactive Demo
            </DialogTitle>
            <DialogDescription>
              Experience how UPSC Aspirants AI can transform your preparation journey. This guided tour will walk you
              through the key features of our platform.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="mb-4">During this demo, you'll explore:</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <FileText className="h-4 w-4 mr-2 text-primary shrink-0 mt-1" />
                <span>AI-powered news extraction and categorization</span>
              </li>
              <li className="flex items-start">
                <BookOpen className="h-4 w-4 mr-2 text-primary shrink-0 mt-1" />
                <span>Smart flashcards with spaced repetition</span>
              </li>
              <li className="flex items-start">
                <BarChart2 className="h-4 w-4 mr-2 text-primary shrink-0 mt-1" />
                <span>PYQ mapping and trend analysis</span>
              </li>
              <li className="flex items-start">
                <BrainCircuit className="h-4 w-4 mr-2 text-primary shrink-0 mt-1" />
                <span>Personalized dashboard and analytics</span>
              </li>
            </ul>
          </div>
          <DialogFooter>
            <Button onClick={() => setShowWelcomeDialog(false)}>Start Tour</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Feature Highlight Dialog */}
      <Dialog open={showFeatureHighlight} onOpenChange={setShowFeatureHighlight}>
        {highlightedFeature && (
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="flex items-center">
                {features[highlightedFeature as keyof typeof features].icon}
                {features[highlightedFeature as keyof typeof features].title}
              </DialogTitle>
              <DialogDescription>{features[highlightedFeature as keyof typeof features].description}</DialogDescription>
            </DialogHeader>
            <div className="py-4">
              {highlightedFeature === "newsExtraction" && (
                <div className="space-y-4">
                  <p>With our AI-powered news extraction:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Badge className="mr-2 shrink-0 mt-0.5">1</Badge>
                      <span>Upload news articles or provide URLs</span>
                    </li>
                    <li className="flex items-start">
                      <Badge className="mr-2 shrink-0 mt-0.5">2</Badge>
                      <span>AI automatically extracts UPSC-relevant information</span>
                    </li>
                    <li className="flex items-start">
                      <Badge className="mr-2 shrink-0 mt-0.5">3</Badge>
                      <span>Content is categorized by subject and topic</span>
                    </li>
                    <li className="flex items-start">
                      <Badge className="mr-2 shrink-0 mt-0.5">4</Badge>
                      <span>Generate flashcards with a single click</span>
                    </li>
                  </ul>
                </div>
              )}

              {highlightedFeature === "flashcards" && (
                <div className="space-y-4">
                  <p>With our smart flashcard system:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Badge className="mr-2 shrink-0 mt-0.5">1</Badge>
                      <span>AI generates high-quality flashcards from your content</span>
                    </li>
                    <li className="flex items-start">
                      <Badge className="mr-2 shrink-0 mt-0.5">2</Badge>
                      <span>Study with scientifically-proven spaced repetition</span>
                    </li>
                    <li className="flex items-start">
                      <Badge className="mr-2 shrink-0 mt-0.5">3</Badge>
                      <span>Track your retention and progress</span>
                    </li>
                    <li className="flex items-start">
                      <Badge className="mr-2 shrink-0 mt-0.5">4</Badge>
                      <span>Focus on your weakest areas automatically</span>
                    </li>
                  </ul>
                </div>
              )}

              {highlightedFeature === "analytics" && (
                <div className="space-y-4">
                  <p>With our PYQ mapping and analytics:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Badge className="mr-2 shrink-0 mt-0.5">1</Badge>
                      <span>Connect current news to previous year questions</span>
                    </li>
                    <li className="flex items-start">
                      <Badge className="mr-2 shrink-0 mt-0.5">2</Badge>
                      <span>Identify trending topics and examination patterns</span>
                    </li>
                    <li className="flex items-start">
                      <Badge className="mr-2 shrink-0 mt-0.5">3</Badge>
                      <span>Visualize topic distribution across the syllabus</span>
                    </li>
                    <li className="flex items-start">
                      <Badge className="mr-2 shrink-0 mt-0.5">4</Badge>
                      <span>Focus on high-probability topics for maximum results</span>
                    </li>
                  </ul>
                </div>
              )}

              {highlightedFeature === "dashboard" && (
                <div className="space-y-4">
                  <p>With your personalized dashboard:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Badge className="mr-2 shrink-0 mt-0.5">1</Badge>
                      <span>Get a comprehensive overview of your study progress</span>
                    </li>
                    <li className="flex items-start">
                      <Badge className="mr-2 shrink-0 mt-0.5">2</Badge>
                      <span>See your daily revision reminders</span>
                    </li>
                    <li className="flex items-start">
                      <Badge className="mr-2 shrink-0 mt-0.5">3</Badge>
                      <span>Track trending topics and recent news</span>
                    </li>
                    <li className="flex items-start">
                      <Badge className="mr-2 shrink-0 mt-0.5">4</Badge>
                      <span>Monitor your performance across subjects</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <DialogFooter>
              <Button onClick={handleCloseHighlight}>Continue Tour</Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>

      {/* Feedback Dialog */}
      <Dialog open={showFeedbackDialog} onOpenChange={setShowFeedbackDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>How was your experience?</DialogTitle>
            <DialogDescription>
              Thank you for exploring our interactive demo. We'd love to hear your thoughts!
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 space-y-4">
            <p>Would you like to join our beta program and get 3 months of free access?</p>
            <div className="flex flex-col space-y-2">
              <Button onClick={handleFinishDemo}>
                Yes, I want to join the beta program
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" asChild>
                <Link href="/landing">No, take me back to the landing page</Link>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Header */}
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <div className="flex items-center gap-2 font-bold text-xl">
            <BrainCircuit className="h-6 w-6" />
            <span>UPSC Aspirants AI</span>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/landing">Exit Demo</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Tour Progress */}
      <div className="bg-muted py-2 px-4 border-b">
        <div className="container flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Tour Progress:</span>
            <div className="flex items-center space-x-1">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-8 rounded-full ${
                    index + 1 <= currentStep ? "bg-primary" : "bg-muted-foreground/20"
                  }`}
                ></div>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              Step {currentStep} of {totalSteps}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={handlePrevStep} disabled={currentStep === 1}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            <Button size="sm" onClick={handleNextStep}>
              {currentStep === totalSteps ? "Finish" : "Next"}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 space-y-4 p-8 pt-6">
        {/* Step 1: Dashboard Overview */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                      onClick={() => handleHighlightFeature("dashboard")}
                    >
                      <Info className="h-4 w-4" />
                      <span className="sr-only">Dashboard Info</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Click for more information about the dashboard</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-4">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="performance">Performance</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <DashboardStats />
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="relative">
                    <div className="absolute -top-2 -right-2 z-10">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-6 w-6 rounded-full bg-primary text-primary-foreground"
                              onClick={() => handleHighlightFeature("newsExtraction")}
                            >
                              <Info className="h-3 w-3" />
                              <span className="sr-only">News Info</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Click to learn about AI news extraction</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Recent News</CardTitle>
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <RecentNews />
                      <div className="mt-4">
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={() => handleHighlightFeature("newsExtraction")}
                        >
                          View All News
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="relative">
                    <div className="absolute -top-2 -right-2 z-10">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-6 w-6 rounded-full bg-primary text-primary-foreground"
                              onClick={() => handleHighlightFeature("analytics")}
                            >
                              <Info className="h-3 w-3" />
                              <span className="sr-only">Analytics Info</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Click to learn about trend analysis</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Trending Topics</CardTitle>
                      <BarChart2 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <TrendingTopics />
                      <div className="mt-4">
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={() => handleHighlightFeature("analytics")}
                        >
                          View Analytics
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="relative">
                    <div className="absolute -top-2 -right-2 z-10">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-6 w-6 rounded-full bg-primary text-primary-foreground"
                              onClick={() => handleHighlightFeature("flashcards")}
                            >
                              <Info className="h-3 w-3" />
                              <span className="sr-only">Flashcards Info</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Click to learn about flashcards</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Revision Reminders</CardTitle>
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <RevisionReminders />
                      <div className="mt-4">
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={() => handleHighlightFeature("flashcards")}
                        >
                          Start Revision
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="analytics" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Analytics Preview</CardTitle>
                    <CardDescription>
                      In the full version, you'll see detailed analytics of your study patterns and performance.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px] flex items-center justify-center bg-muted/30 rounded-md">
                    <div className="text-center">
                      <BarChart2 className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                      <p className="font-medium">Analytics Dashboard</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Track your progress, identify patterns, and optimize your study strategy.
                      </p>
                      <Button className="mt-4" onClick={() => handleHighlightFeature("analytics")}>
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="performance" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Preview</CardTitle>
                    <CardDescription>
                      In the full version, you'll see detailed performance metrics across subjects and topics.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px] flex items-center justify-center bg-muted/30 rounded-md">
                    <div className="text-center">
                      <BookOpen className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                      <p className="font-medium">Performance Metrics</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Monitor your strengths and weaknesses to focus your study efforts effectively.
                      </p>
                      <Button className="mt-4" onClick={() => handleHighlightFeature("flashcards")}>
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {/* Step 2: News Extraction */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tight">News Extraction</h2>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                      onClick={() => handleHighlightFeature("newsExtraction")}
                    >
                      <Info className="h-4 w-4" />
                      <span className="sr-only">News Extraction Info</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Click for more information about news extraction</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>AI-Powered News Extraction</CardTitle>
                <CardDescription>Extract key information from news articles relevant to UPSC syllabus.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Demo Article</h3>
                    <Badge>Economy</Badge>
                  </div>
                  <Card className="bg-muted/30">
                    <CardContent className="pt-6">
                      <h4 className="font-bold">India's New Foreign Trade Policy Announced</h4>
                      <p className="text-sm mt-2">
                        The government announced a new foreign trade policy aimed at boosting exports and reducing
                        import dependency. The policy introduces several incentives for exporters and simplifies
                        regulatory procedures.
                      </p>
                      <div className="mt-4">
                        <h5 className="text-sm font-medium">Key Points:</h5>
                        <ul className="list-disc pl-5 space-y-1 mt-2 text-sm">
                          <li>Export target set at $2 trillion by 2030</li>
                          <li>Special focus on MSMEs and startups</li>
                          <li>Simplified regulatory procedures</li>
                          <li>New e-commerce export hubs to be established</li>
                          <li>Green technology exports to receive additional incentives</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex justify-between items-center pt-4">
                  <h3 className="text-lg font-medium">AI-Generated Outputs</h3>
                  <Badge variant="outline">Automatic</Badge>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Categories & Tags</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div>
                          <p className="text-xs text-muted-foreground">Categories:</p>
                          <div className="flex flex-wrap gap-2 mt-1">
                            <Badge>Economy</Badge>
                            <Badge>International Relations</Badge>
                            <Badge>Government Policies</Badge>
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Tags:</p>
                          <div className="flex flex-wrap gap-2 mt-1">
                            <Badge variant="secondary">Foreign Trade</Badge>
                            <Badge variant="secondary">Export</Badge>
                            <Badge variant="secondary">Economic Growth</Badge>
                            <Badge variant="secondary">MSME</Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">PYQ Connections</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div>
                          <p className="text-xs text-muted-foreground">Related Previous Year Questions:</p>
                          <ul className="list-disc pl-5 space-y-1 mt-1 text-xs">
                            <li>
                              "Discuss the impact of India's foreign trade policy on its economic growth." (UPSC 2022)
                            </li>
                            <li>
                              "What are the main constraints in transport and marketing of agricultural produce in
                              India?" (UPSC 2019)
                            </li>
                          </ul>
                        </div>
                        <div className="flex items-center mt-2">
                          <Badge variant="outline" className="mr-2">
                            Relevance Score
                          </Badge>
                          <span className="text-sm font-medium">85%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex justify-end space-x-2 pt-2">
                  <Button variant="outline">Save Article</Button>
                  <Button onClick={() => handleHighlightFeature("flashcards")}>Generate Flashcards</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 3: Flashcards */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tight">Flashcards & Revision</h2>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                      onClick={() => handleHighlightFeature("flashcards")}
                    >
                      <Info className="h-4 w-4" />
                      <span className="sr-only">Flashcards Info</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Click for more information about flashcards</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Smart Flashcards with Spaced Repetition</CardTitle>
                <CardDescription>
                  AI-generated flashcards with scientifically-proven spaced repetition for optimal retention.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-medium">Study Session Progress</h3>
                    <span className="text-sm text-muted-foreground">3 / 10 cards reviewed</span>
                  </div>
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "30%" }}></div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-background rounded-md p-3">
                      <div className="text-sm text-muted-foreground">Accuracy</div>
                      <div className="text-xl font-bold mt-1">67%</div>
                    </div>
                    <div className="bg-background rounded-md p-3">
                      <div className="text-sm text-muted-foreground">Avg. Response Time</div>
                      <div className="text-xl font-bold mt-1">8s</div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <Card className="min-h-[250px] cursor-pointer transition-all duration-500 perspective-1000 transform-style-3d">
                    <div className="absolute inset-0 backface-hidden">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle>Question</CardTitle>
                          <Badge>Medium</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="flex items-center justify-center p-6">
                        <p className="text-lg text-center">
                          What are the key features of India's new Foreign Trade Policy announced in 2023?
                        </p>
                      </CardContent>
                      <CardFooter className="flex justify-center text-sm text-muted-foreground">
                        Click to reveal answer
                      </CardFooter>
                    </div>
                  </Card>
                  <div className="absolute top-2 right-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-6 w-6 rounded-full bg-primary text-primary-foreground"
                          >
                            <Info className="h-3 w-3" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>In the full version, you can flip this card to see the answer</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Hard
                    </Button>
                    <Button variant="outline" size="sm">
                      Easy
                    </Button>
                  </div>
                  <Button>
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="pt-4">
                  <h3 className="text-lg font-medium mb-4">Spaced Repetition Schedule</h3>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <div className="grid grid-cols-5 gap-2">
                      {["Day 1", "Day 3", "Day 7", "Day 14", "Day 30"].map((day, index) => (
                        <div key={index} className="text-center">
                          <div
                            className={`h-16 rounded-md flex items-center justify-center ${
                              index === 0 ? "bg-primary text-primary-foreground" : "bg-muted-foreground/20"
                            }`}
                          >
                            <span className="font-medium">{day}</span>
                          </div>
                          <p className="text-xs mt-1 text-muted-foreground">Review {index + 1}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mt-4 text-center">
                      Our algorithm automatically schedules reviews at optimal intervals for maximum retention
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 4: Analytics */}
        {currentStep === 4 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tight">Analytics & PYQ Mapping</h2>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                      onClick={() => handleHighlightFeature("analytics")}
                    >
                      <Info className="h-4 w-4" />
                      <span className="sr-only">Analytics Info</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Click for more information about analytics</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>News Trends Analysis</CardTitle>
                <CardDescription>Track how news topics evolve over time and identify important trends.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Topic Frequency Over Time</h3>
                  <Badge variant="outline">Last 6 Months</Badge>
                </div>

                <div className="h-[300px] bg-muted/30 rounded-lg p-4">
                  <div className="w-full h-full flex flex-col">
                    <div className="flex justify-between mb-2">
                      <div className="text-sm font-medium">Frequency</div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-primary rounded-full mr-1"></div>
                          <span className="text-xs">Climate Change</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-secondary rounded-full mr-1"></div>
                          <span className="text-xs">Digital Economy</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-muted-foreground rounded-full mr-1"></div>
                          <span className="text-xs">Foreign Policy</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 relative">
                      {/* Y-axis labels */}
                      <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-muted-foreground">
                        <div>100</div>
                        <div>75</div>
                        <div>50</div>
                        <div>25</div>
                        <div>0</div>
                      </div>

                      {/* Chart area */}
                      <div className="absolute left-10 right-0 top-0 bottom-0">
                        {/* Grid lines */}
                        <div className="absolute left-0 right-0 top-0 h-px bg-muted"></div>
                        <div className="absolute left-0 right-0 top-1/4 h-px bg-muted"></div>
                        <div className="absolute left-0 right-0 top-2/4 h-px bg-muted"></div>
                        <div className="absolute left-0 right-0 top-3/4 h-px bg-muted"></div>
                        <div className="absolute left-0 right-0 bottom-0 h-px bg-muted"></div>

                        {/* Lines for the datasets */}
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                          {/* Climate Change line */}
                          <polyline
                            points="0,70 20,65 40,50 60,30 80,20 100,10"
                            fill="none"
                            stroke="hsl(var(--primary))"
                            strokeWidth="2"
                          />

                          {/* Digital Economy line */}
                          <polyline
                            points="0,80 20,75 40,60 60,55 80,40 100,25"
                            fill="none"
                            stroke="hsl(var(--secondary))"
                            strokeWidth="2"
                          />

                          {/* Foreign Policy line */}
                          <polyline
                            points="0,50 20,55 40,45 60,60 80,50 100,45"
                            fill="none"
                            stroke="hsl(var(--muted-foreground))"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* X-axis labels */}
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground pl-10">
                      <div>Jan</div>
                      <div>Feb</div>
                      <div>Mar</div>
                      <div>Apr</div>
                      <div>May</div>
                      <div>Jun</div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-medium mb-4">Rising Topics</h4>
                      <div className="space-y-3">
                        {[
                          { name: "Climate Finance", growth: "+215%" },
                          { name: "Digital Currency", growth: "+180%" },
                          { name: "AI Governance", growth: "+145%" },
                          { name: "Indo-Pacific Strategy", growth: "+120%" },
                        ].map((topic, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span>{topic.name}</span>
                            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                              {topic.growth}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-medium mb-4">PYQ Connections</h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <Badge className="mr-2 shrink-0 mt-0.5">High</Badge>
                          <span className="text-sm">
                            Climate Change and Paris Agreement (8 questions in last 5 years)
                          </span>
                        </div>
                        <div className="flex items-start">
                          <Badge className="mr-2 shrink-0 mt-0.5">Medium</Badge>
                          <span className="text-sm">Digital Economy (5 questions in last 5 years)</span>
                        </div>
                        <div className="flex items-start">
                          <Badge className="mr-2 shrink-0 mt-0.5">Medium</Badge>
                          <span className="text-sm">Indo-Pacific Strategy (4 questions in last 5 years)</span>
                        </div>
                        <div className="flex items-start">
                          <Badge className="mr-2 shrink-0 mt-0.5">Low</Badge>
                          <span className="text-sm">AI Governance (1 question in last 5 years)</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 5: Summary */}
        {currentStep === 5 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tight">Your UPSC Preparation Journey</h2>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Transform Your Preparation with UPSC Aspirants AI</CardTitle>
                <CardDescription>
                  Join our beta program today and experience the future of UPSC preparation.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">What You've Seen</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FileText className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">AI-Powered News Extraction</span>
                          <p className="text-sm text-muted-foreground">
                            Save hours of manual work with automated extraction and categorization.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <BookOpen className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Smart Flashcards & Spaced Repetition</span>
                          <p className="text-sm text-muted-foreground">
                            Improve retention by 3x with scientifically-proven learning techniques.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <BarChart2 className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">PYQ Mapping & Analytics</span>
                          <p className="text-sm text-muted-foreground">
                            Focus on high-probability topics with data-driven insights.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <BrainCircuit className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Personalized Dashboard</span>
                          <p className="text-sm text-muted-foreground">
                            Get a comprehensive overview of your study progress and priorities.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">What's Next</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Badge className="mr-2 shrink-0 mt-0.5">1</Badge>
                        <span>Join our beta program and get 3 months of free access</span>
                      </li>
                      <li className="flex items-start">
                        <Badge className="mr-2 shrink-0 mt-0.5">2</Badge>
                        <span>Set up your personalized study profile</span>
                      </li>
                      <li className="flex items-start">
                        <Badge className="mr-2 shrink-0 mt-0.5">3</Badge>
                        <span>Start extracting news and generating flashcards</span>
                      </li>
                      <li className="flex items-start">
                        <Badge className="mr-2 shrink-0 mt-0.5">4</Badge>
                        <span>Track your progress and optimize your study strategy</span>
                      </li>
                      <li className="flex items-start">
                        <Badge className="mr-2 shrink-0 mt-0.5">5</Badge>
                        <span>Provide feedback to help us improve the platform</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-4">
                  <Card className="bg-muted/30">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">Beta Program Benefits</h3>
                        <Badge>Limited Spots</Badge>
                      </div>
                      <ul className="space-y-2 mt-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                          <span>3 months of free full access to all features</span>
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
                    </CardContent>
                  </Card>
                </div>

                <div className="flex justify-center pt-4">
                  <Button size="lg" onClick={handleFinishDemo}>
                    Join Beta Program Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </main>
  )
}
