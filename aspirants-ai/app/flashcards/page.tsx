import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from "lucide-react"
import FlashcardDecks from "@/components/flashcard-decks"
import FlashcardStudy from "@/components/flashcard-study"
import Link from "next/link"

export default function FlashcardsPage() {
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
            <h2 className="text-3xl font-bold tracking-tight">Flashcards & Revision</h2>
          </div>
          <Tabs defaultValue="decks" className="space-y-4">
            <TabsList>
              <TabsTrigger value="decks">My Decks</TabsTrigger>
              <TabsTrigger value="study">Study</TabsTrigger>
              <TabsTrigger value="create">Create</TabsTrigger>
            </TabsList>
            <TabsContent value="decks" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Flashcard Decks</CardTitle>
                  <CardDescription>Browse and manage your flashcard decks.</CardDescription>
                </CardHeader>
                <CardContent>
                  <FlashcardDecks />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="study" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Study Session</CardTitle>
                  <CardDescription>Review your flashcards using spaced repetition.</CardDescription>
                </CardHeader>
                <CardContent>
                  <FlashcardStudy />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="create" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Create Flashcards</CardTitle>
                  <CardDescription>Generate new flashcards from your extracted news.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Select news articles to generate flashcards from:</p>
                  <Button>Browse News Articles</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}
