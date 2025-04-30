"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, RotateCcw, ThumbsUp, ThumbsDown, Clock } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function FlashcardStudy() {
  const [flipped, setFlipped] = useState(false)
  const [currentCard, setCurrentCard] = useState(0)
  const [startTime, setStartTime] = useState<number | null>(null)
  const [responseTime, setResponseTime] = useState<number | null>(null)
  const [difficulty, setDifficulty] = useState<"easy" | "hard" | null>(null)
  const [sessionStats, setSessionStats] = useState({
    totalCards: 0,
    correctAnswers: 0,
    avgResponseTime: 0,
  })

  const flashcards = [
    {
      id: 1,
      question: "What are the key features of India's new Foreign Trade Policy announced in 2023?",
      answer:
        "The key features include: 1) Export target of $2 trillion by 2030, 2) Special focus on MSMEs and startups, 3) Simplified regulatory procedures, 4) New e-commerce export hubs, 5) Green technology export incentives.",
      category: "Economy",
      difficulty: "Medium",
      nextReview: new Date(),
      interval: 1, // days
      easeFactor: 2.5,
    },
    {
      id: 2,
      question: "What was the Supreme Court's verdict on Electoral Bonds and its implications?",
      answer:
        "The Supreme Court struck down the Electoral Bonds scheme as unconstitutional, citing violations of the right to information under Article 19(1)(a). The court ordered disclosure of donor details and mandated political parties to submit information to the Election Commission.",
      category: "Polity",
      difficulty: "Hard",
      nextReview: new Date(),
      interval: 1,
      easeFactor: 2.5,
    },
    {
      id: 3,
      question: "What are India's commitments under the Paris Climate Agreement?",
      answer:
        "India's commitments include: 1) Reduce emissions intensity of GDP by 45% by 2030 from 2005 levels, 2) Achieve 50% cumulative electric power from non-fossil fuel sources by 2030, 3) Create carbon sink of 2.5-3 billion tonnes through forest cover by 2030, 4) Achieve Net Zero by 2070.",
      category: "Environment",
      difficulty: "Medium",
      nextReview: new Date(),
      interval: 1,
      easeFactor: 2.5,
    },
  ]

  useEffect(() => {
    if (!flipped) {
      setStartTime(Date.now())
      setResponseTime(null)
      setDifficulty(null)
    }
  }, [currentCard, flipped])

  const handleFlip = () => {
    if (!flipped && startTime) {
      const time = Math.round((Date.now() - startTime) / 1000)
      setResponseTime(time)
    }
    setFlipped(!flipped)
  }

  const handleDifficultyRating = (rating: "easy" | "hard") => {
    setDifficulty(rating)

    // Update session stats
    setSessionStats((prev) => {
      const newStats = { ...prev }
      newStats.totalCards += 1
      if (rating === "easy") {
        newStats.correctAnswers += 1
      }
      if (responseTime) {
        const newAvgTime = (prev.avgResponseTime * prev.totalCards + responseTime) / (prev.totalCards + 1)
        newStats.avgResponseTime = Math.round(newAvgTime)
      }
      return newStats
    })

    // In a real app, you would update the spaced repetition algorithm here
    // For example, using the SuperMemo SM-2 algorithm
  }

  const handleNext = () => {
    if (currentCard < flashcards.length - 1) {
      setCurrentCard(currentCard + 1)
      setFlipped(false)
    }
  }

  const handlePrevious = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1)
      setFlipped(false)
    }
  }

  const handleReset = () => {
    setCurrentCard(0)
    setFlipped(false)
    setSessionStats({
      totalCards: 0,
      correctAnswers: 0,
      avgResponseTime: 0,
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="text-sm text-muted-foreground">
          Card {currentCard + 1} of {flashcards.length}
        </div>
        <Button variant="outline" size="sm" onClick={handleReset}>
          <RotateCcw className="mr-2 h-4 w-4" />
          Reset
        </Button>
      </div>

      <div className="bg-muted/30 rounded-lg p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-medium">Session Progress</h3>
          <span className="text-sm text-muted-foreground">
            {sessionStats.totalCards} / {flashcards.length} cards reviewed
          </span>
        </div>
        <Progress
          value={(sessionStats.totalCards / flashcards.length) * 100}
          className="h-2 bg-lightgray [&>div]:bg-forest"
        />

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-background rounded-md p-3">
            <div className="text-sm text-muted-foreground">Accuracy</div>
            <div className="text-xl font-bold mt-1">
              {sessionStats.totalCards > 0
                ? Math.round((sessionStats.correctAnswers / sessionStats.totalCards) * 100)
                : 0}
              %
            </div>
          </div>
          <div className="bg-background rounded-md p-3">
            <div className="text-sm text-muted-foreground">Avg. Response Time</div>
            <div className="text-xl font-bold mt-1">
              {sessionStats.avgResponseTime > 0 ? `${sessionStats.avgResponseTime}s` : "N/A"}
            </div>
          </div>
        </div>
      </div>

      <Card className="min-h-[300px] cursor-pointer transition-all duration-500 perspective-1000 border-2 border-muted hover:border-accent">
        <div className={`relative w-full h-full transition-transform duration-500 ${flipped ? "rotate-y-180" : ""}`}>
          <div className={`absolute w-full h-full backface-hidden ${flipped ? "hidden" : ""}`}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="font-heading text-navy">Question</CardTitle>
                <Badge className="bg-gold text-navy">{flashcards[currentCard].difficulty}</Badge>
              </div>
            </CardHeader>
            <CardContent className="flex items-center justify-center p-6">
              <p className="text-lg text-center">{flashcards[currentCard].question}</p>
            </CardContent>
            <CardFooter className="flex justify-center text-sm text-muted-foreground">
              Click to reveal answer
            </CardFooter>
          </div>

          <div className={`absolute w-full h-full backface-hidden ${!flipped ? "hidden" : ""}`}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>Answer</CardTitle>
                <div className="flex items-center">
                  <Badge variant="outline" className="mr-2">
                    {flashcards[currentCard].category}
                  </Badge>
                  {responseTime && (
                    <Badge variant="secondary">
                      <Clock className="mr-1 h-3 w-3" />
                      {responseTime}s
                    </Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p>{flashcards[currentCard].answer}</p>
            </CardContent>
            <CardFooter className="flex justify-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDifficultyRating("hard")}
                disabled={difficulty !== null}
                className={
                  difficulty === "hard"
                    ? "bg-red-100 border-red-300 text-primary dark:bg-red-900 dark:border-red-700"
                    : "border-primary text-primary"
                }
              >
                <ThumbsDown className="mr-2 h-4 w-4" />
                Hard
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDifficultyRating("easy")}
                disabled={difficulty !== null}
                className={
                  difficulty === "easy"
                    ? "bg-green-100 border-green-300 text-primary dark:bg-green-900 dark:border-green-700"
                    : "border-secondary text-secondary"
                }
              >
                <ThumbsUp className="mr-2 h-4 w-4" />
                Easy
              </Button>
            </CardFooter>
          </div>
        </div>
      </Card>

      <div className="flex justify-between">
        <Button variant="outline" onClick={handlePrevious} disabled={currentCard === 0}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>
        <Button
          onClick={handleNext}
          disabled={currentCard === flashcards.length - 1 || (flipped && difficulty === null)}
          className="bg-forest hover:bg-forest/90"
        >
          Next
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
