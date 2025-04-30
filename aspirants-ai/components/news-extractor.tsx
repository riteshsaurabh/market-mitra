"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, LinkIcon, Loader2, Plus, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"

export default function NewsExtractor() {
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)
  const [url, setUrl] = useState("")
  const [text, setText] = useState("")
  const [extractedData, setExtractedData] = useState<null | {
    title: string
    summary: string
    keyPoints: string[]
    categories: string[]
    tags: string[]
  }>(null)
  const [editMode, setEditMode] = useState(false)
  const [newTag, setNewTag] = useState("")

  const handleExtract = () => {
    setIsProcessing(true)

    // Simulate AI processing
    setTimeout(() => {
      setExtractedData({
        title: "India's New Foreign Trade Policy Announced",
        summary:
          "The government announced a new foreign trade policy aimed at boosting exports and reducing import dependency. The policy introduces several incentives for exporters and simplifies regulatory procedures.",
        keyPoints: [
          "Export target set at $2 trillion by 2030",
          "Special focus on MSMEs and startups",
          "Simplified regulatory procedures",
          "New e-commerce export hubs to be established",
          "Green technology exports to receive additional incentives",
        ],
        categories: ["Economy", "International Relations", "Government Policies"],
        tags: ["Foreign Trade", "Export", "Economic Growth", "MSME"],
      })
      setIsProcessing(false)
    }, 2000)
  }

  const handleSave = () => {
    // In a real app, you would save the data to a database
    // For this demo, we'll just show a success message and redirect
    alert("News article saved successfully!")

    // Store in localStorage for demo purposes
    const savedArticles = JSON.parse(localStorage.getItem("savedArticles") || "[]")
    savedArticles.push({
      id: Date.now(),
      ...extractedData,
      date: new Date().toISOString(),
    })
    localStorage.setItem("savedArticles", JSON.stringify(savedArticles))

    // Reset form
    setUrl("")
    setText("")
    setExtractedData(null)

    // Redirect to browse news
    router.push("/news?tab=browse")
  }

  const handleAddTag = () => {
    if (newTag.trim() && extractedData) {
      setExtractedData({
        ...extractedData,
        tags: [...extractedData.tags, newTag.trim()],
      })
      setNewTag("")
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    if (extractedData) {
      setExtractedData({
        ...extractedData,
        tags: extractedData.tags.filter((tag) => tag !== tagToRemove),
      })
    }
  }

  const handleGenerateFlashcards = () => {
    if (extractedData) {
      // In a real app, you would generate flashcards and save them
      alert("Flashcards generated successfully!")

      // Store in localStorage for demo purposes
      const flashcardDecks = JSON.parse(localStorage.getItem("flashcardDecks") || "[]")
      flashcardDecks.push({
        id: Date.now(),
        title: extractedData.title,
        category: extractedData.categories[0],
        cardCount: Math.floor(Math.random() * 10) + 5,
        lastStudied: "Just now",
        progress: 0,
      })
      localStorage.setItem("flashcardDecks", JSON.stringify(flashcardDecks))

      // Redirect to flashcards
      router.push("/flashcards")
    }
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="url" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="url">URL</TabsTrigger>
          <TabsTrigger value="text">Text</TabsTrigger>
          <TabsTrigger value="pdf">PDF</TabsTrigger>
        </TabsList>
        <TabsContent value="url" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="news-url">News Article URL</Label>
            <div className="flex space-x-2">
              <Input
                id="news-url"
                placeholder="https://example.com/news-article"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <Button
                onClick={handleExtract}
                disabled={isProcessing || !url.trim()}
                className="bg-forest hover:bg-forest/90"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing
                  </>
                ) : (
                  <>
                    <LinkIcon className="mr-2 h-4 w-4" />
                    Extract
                  </>
                )}
              </Button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="text" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="news-text">News Article Text</Label>
            <Textarea
              id="news-text"
              placeholder="Paste the news article text here..."
              className="min-h-[200px]"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button
              onClick={handleExtract}
              disabled={isProcessing || !text.trim()}
              className="w-full bg-forest hover:bg-forest/90"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing
                </>
              ) : (
                <>
                  <FileText className="mr-2 h-4 w-4" />
                  Extract
                </>
              )}
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="pdf" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="news-pdf">Upload PDF</Label>
            <Input id="news-pdf" type="file" accept=".pdf" />
            <Button onClick={handleExtract} disabled={isProcessing} className="w-full bg-forest hover:bg-forest/90">
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing
                </>
              ) : (
                <>
                  <FileText className="mr-2 h-4 w-4" />
                  Extract
                </>
              )}
            </Button>
          </div>
        </TabsContent>
      </Tabs>

      {extractedData && (
        <Card className="mt-6">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                {editMode ? (
                  <Input
                    value={extractedData.title}
                    onChange={(e) => setExtractedData({ ...extractedData, title: e.target.value })}
                    className="text-lg font-bold"
                  />
                ) : (
                  <h3 className="text-lg font-bold">{extractedData.title}</h3>
                )}
                {editMode ? (
                  <Textarea
                    value={extractedData.summary}
                    onChange={(e) => setExtractedData({ ...extractedData, summary: e.target.value })}
                    className="text-sm mt-1"
                  />
                ) : (
                  <p className="text-sm text-muted-foreground mt-1">{extractedData.summary}</p>
                )}
              </div>

              <div>
                <h4 className="font-medium mb-2">Key Points:</h4>
                {editMode ? (
                  <div className="space-y-2">
                    {extractedData.keyPoints.map((point, idx) => (
                      <div key={idx} className="flex items-center">
                        <Input
                          value={point}
                          onChange={(e) => {
                            const newPoints = [...extractedData.keyPoints]
                            newPoints[idx] = e.target.value
                            setExtractedData({ ...extractedData, keyPoints: newPoints })
                          }}
                          className="text-sm"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="ml-2"
                          size="icon"
                          className="ml-2"
                          onClick={() => {
                            const newPoints = [...extractedData.keyPoints]
                            newPoints.splice(idx, 1)
                            setExtractedData({ ...extractedData, keyPoints: newPoints })
                          }}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2"
                      onClick={() => {
                        setExtractedData({
                          ...extractedData,
                          keyPoints: [...extractedData.keyPoints, ""],
                        })
                      }}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Point
                    </Button>
                  </div>
                ) : (
                  <ul className="list-disc pl-5 space-y-1">
                    {extractedData.keyPoints.map((point, index) => (
                      <li key={index} className="text-sm">
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div>
                <h4 className="font-medium mb-2">Categories:</h4>
                <div className="flex flex-wrap gap-2">
                  {extractedData.categories.map((category, index) => (
                    <Badge key={index} variant="outline">
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Tags:</h4>
                <div className="flex flex-wrap gap-2">
                  {extractedData.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="flex items-center">
                      {tag}
                      {editMode && <X className="h-3 w-3 ml-1 cursor-pointer" onClick={() => handleRemoveTag(tag)} />}
                    </Badge>
                  ))}
                  {editMode && (
                    <div className="flex items-center mt-2 w-full">
                      <Input
                        placeholder="Add new tag"
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        className="text-sm"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        className="ml-2"
                        onClick={handleAddTag}
                        disabled={!newTag.trim()}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-end space-x-2 pt-2">
                <Button variant="outline" onClick={() => setEditMode(!editMode)}>
                  {editMode ? "Done Editing" : "Edit"}
                </Button>
                <Button onClick={handleSave} className="bg-navy hover:bg-navy/90">
                  Save
                </Button>
                <Button
                  variant="secondary"
                  onClick={handleGenerateFlashcards}
                  className="bg-gold hover:bg-gold/90 text-navy"
                >
                  Generate Flashcards
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
