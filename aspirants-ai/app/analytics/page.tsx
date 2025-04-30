import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from "lucide-react"
import NewsTrends from "@/components/news-trends"
import PYQMapping from "@/components/pyq-mapping"
import TopicDistribution from "@/components/topic-distribution"
import Link from "next/link"

export default function AnalyticsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex flex-col">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <Link href="/" className="flex items-center text-sm font-medium">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
            <div className="ml-auto flex items-center space-x-4">
              <Button variant="outline">Help</Button>
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Analytics & PYQ Mapping</h2>
          </div>
          <Tabs defaultValue="trends" className="space-y-4">
            <TabsList>
              <TabsTrigger value="trends">News Trends</TabsTrigger>
              <TabsTrigger value="pyq">PYQ Mapping</TabsTrigger>
              <TabsTrigger value="distribution">Topic Distribution</TabsTrigger>
            </TabsList>
            <TabsContent value="trends" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>News Trends Analysis</CardTitle>
                  <CardDescription>
                    Track how news topics evolve over time and identify important trends.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <NewsTrends />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="pyq" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Previous Year Question Mapping</CardTitle>
                  <CardDescription>See how current news topics relate to previous UPSC questions.</CardDescription>
                </CardHeader>
                <CardContent>
                  <PYQMapping />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="distribution" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Topic Distribution</CardTitle>
                  <CardDescription>Visualize the distribution of topics in your study material.</CardDescription>
                </CardHeader>
                <CardContent>
                  <TopicDistribution />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}
