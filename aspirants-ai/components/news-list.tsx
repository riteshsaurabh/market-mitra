import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Bookmark, BookmarkCheck, Eye } from "lucide-react"

export default function NewsList() {
  const newsArticles = [
    {
      id: 1,
      title: "India's New Foreign Trade Policy Announced",
      date: "April 1, 2025",
      summary:
        "The government announced a new foreign trade policy aimed at boosting exports and reducing import dependency.",
      categories: ["Economy", "International Relations"],
      saved: true,
    },
    {
      id: 2,
      title: "Supreme Court Verdict on Electoral Bonds",
      date: "March 30, 2025",
      summary:
        "The Supreme Court delivered a landmark judgment on the constitutionality of electoral bonds and their implications for transparency in political funding.",
      categories: ["Polity", "Governance"],
      saved: false,
    },
    {
      id: 3,
      title: "New Climate Action Plan Released",
      date: "March 28, 2025",
      summary:
        "The Ministry of Environment, Forest and Climate Change released a comprehensive climate action plan with targets for carbon neutrality by 2070.",
      categories: ["Environment", "International Relations"],
      saved: true,
    },
    {
      id: 4,
      title: "India-EU Free Trade Agreement Negotiations",
      date: "March 25, 2025",
      summary:
        "India and the European Union resumed negotiations for a comprehensive free trade agreement after a gap of several years.",
      categories: ["Economy", "International Relations"],
      saved: false,
    },
  ]

  return (
    <div className="space-y-4">
      {newsArticles.map((article) => (
        <Card key={article.id}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg">{article.title}</CardTitle>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                {article.saved ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">{article.date}</p>
          </CardHeader>
          <CardContent className="pb-2">
            <p className="text-sm">{article.summary}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {article.categories.map((category, index) => (
                <Badge key={index} variant="outline">
                  {category}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex justify-between w-full">
              <Button variant="outline" size="sm">
                <Eye className="mr-2 h-4 w-4" />
                View Details
              </Button>
              <Button size="sm">Generate Flashcards</Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
