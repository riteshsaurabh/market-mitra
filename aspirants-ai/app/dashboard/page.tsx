"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, BookOpen, BarChart2, BrainCircuit, User, Settings, LogOut } from "lucide-react"
import DashboardStats from "@/components/dashboard-stats"
import RecentNews from "@/components/recent-news"
import TrendingTopics from "@/components/trending-topics"
import RevisionReminders from "@/components/revision-reminders"
import UserEngagementChart from "@/components/user-engagement-chart"
import SubjectPerformance from "@/components/subject-performance"
import SpacedRepetitionEffectiveness from "@/components/spaced-repetition-effectiveness"
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

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/auth/login")
      return
    }

    setUser(JSON.parse(userData))
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/auth/login")
  }

  if (!user) {
    return null // Or a loading spinner
  }

  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex flex-col">
        <div className="border-b border-muted">
          <div className="flex h-16 items-center px-4">
            <div className="flex items-center gap-2 font-bold text-xl">
              <BrainCircuit className="h-6 w-6 text-forest" />
              <span className="font-heading text-navy">UPSC Aspirants AI</span>
            </div>
            <div className="ml-auto flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8 border border-secondary">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt={user.name} />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {user.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-heading font-bold tracking-tight text-navy">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <Button as={Link} href="/news" className="bg-forest hover:bg-forest/90">
                <FileText className="mr-2 h-4 w-4" />
                Extract News
              </Button>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="bg-muted">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="analytics"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Analytics
              </TabsTrigger>
              <TabsTrigger
                value="performance"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Performance
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <DashboardStats />
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Recent News</CardTitle>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <RecentNews />
                    <div className="mt-4">
                      <Link href="/news">
                        <Button variant="outline" className="w-full">
                          View All News
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Trending Topics</CardTitle>
                    <BarChart2 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <TrendingTopics />
                    <div className="mt-4">
                      <Link href="/analytics">
                        <Button variant="outline" className="w-full">
                          View Analytics
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Revision Reminders</CardTitle>
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <RevisionReminders />
                    <div className="mt-4">
                      <Link href="/flashcards">
                        <Button variant="outline" className="w-full">
                          Start Revision
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>User Engagement</CardTitle>
                  <CardDescription>Track your study patterns and engagement over time.</CardDescription>
                </CardHeader>
                <CardContent>
                  <UserEngagementChart />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="performance" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Subject Performance</CardTitle>
                    <CardDescription>Your performance across different subjects.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <SubjectPerformance />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Spaced Repetition Effectiveness</CardTitle>
                    <CardDescription>How spaced repetition is improving your retention.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <SpacedRepetitionEffectiveness />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}
