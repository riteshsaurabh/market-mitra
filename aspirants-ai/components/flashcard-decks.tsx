import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Clock } from "lucide-react"

export default function FlashcardDecks() {
  const decks = [
    {
      id: 1,
      title: "Indian Constitution",
      cardCount: 42,
      lastStudied: "2 days ago",
      categories: ["Polity"],
      progress: 68,
    },
    {
      id: 2,
      title: "Economic Survey Highlights",
      cardCount: 35,
      lastStudied: "1 week ago",
      categories: ["Economy"],
      progress: 45,
    },
    {
      id: 3,
      title: "International Organizations",
      cardCount: 28,
      lastStudied: "3 days ago",
      categories: ["International Relations"],
      progress: 72,
    },
    {
      id: 4,
      title: "Environmental Conventions",
      cardCount: 24,
      lastStudied: "5 days ago",
      categories: ["Environment"],
      progress: 30,
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {decks.map((deck) => (
        <Card key={deck.id}>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-heading text-navy">{deck.title}</CardTitle>
            <div className="flex items-center text-sm text-muted-foreground">
              <BookOpen className="mr-1 h-4 w-4" />
              <span>{deck.cardCount} cards</span>
            </div>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="flex items-center text-sm mb-2">
              <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Last studied: {deck.lastStudied}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              {deck.categories.map((category, index) => (
                <Badge key={index} variant="outline">
                  {category}
                </Badge>
              ))}
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span>Progress</span>
                <span>{deck.progress}%</span>
              </div>
              <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-forest rounded-full" style={{ width: `${deck.progress}%` }}></div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-forest hover:bg-forest/90">Study Now</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
