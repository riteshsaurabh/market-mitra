import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Filter, ArrowLeft } from "lucide-react"
import NewsExtractor from "@/components/news-extractor"
import NewsList from "@/components/news-list"
import Link from "next/link"

export default function NewsPage() {
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
            <h2 className="text-3xl font-bold tracking-tight">News Management</h2>
          </div>
          <Tabs defaultValue="extract" className="space-y-4">
            <TabsList>
              <TabsTrigger value="extract">Extract News</TabsTrigger>
              <TabsTrigger value="browse">Browse News</TabsTrigger>
              <TabsTrigger value="categories">Categories</TabsTrigger>
            </TabsList>
            <TabsContent value="extract" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>AI-Powered News Extraction</CardTitle>
                  <CardDescription>
                    Extract key information from news articles relevant to UPSC syllabus.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <NewsExtractor />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="browse" className="space-y-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                  <div>
                    <CardTitle>Browse Extracted News</CardTitle>
                    <CardDescription>View and manage your extracted news articles.</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                </CardHeader>
                <CardContent>
                  <NewsList />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="categories" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Categories & Tags</CardTitle>
                  <CardDescription>Manage categories and tags for your news articles.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="new-category">Add New Category</Label>
                      <div className="flex space-x-2">
                        <Input id="new-category" placeholder="Category name" />
                        <Button>Add</Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-tag">Add New Tag</Label>
                      <div className="flex space-x-2">
                        <Input id="new-tag" placeholder="Tag name" />
                        <Button>Add</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}
