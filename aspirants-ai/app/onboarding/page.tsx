"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { BrainCircuit, ArrowRight, CheckCircle2 } from "lucide-react"
import { useRouter } from "next/navigation"

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([])
  const [selectedExams, setSelectedExams] = useState<string[]>([])

  const subjects = [
    "Indian Polity",
    "Economy",
    "Geography",
    "History",
    "Environment",
    "Science & Technology",
    "International Relations",
    "Art & Culture",
    "Current Affairs",
  ]

  const exams = [
    "UPSC CSE Prelims",
    "UPSC CSE Mains",
    "State PCS",
    "UPSC EPFO",
    "UPSC CDS",
    "UPSC CAPF",
    "UPSC IES/ISS",
  ]

  const handleSubjectToggle = (subject: string) => {
    setSelectedSubjects((prev) => (prev.includes(subject) ? prev.filter((s) => s !== subject) : [...prev, subject]))
  }

  const handleExamToggle = (exam: string) => {
    setSelectedExams((prev) => (prev.includes(exam) ? prev.filter((e) => e !== exam) : [...prev, exam]))
  }

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Save preferences to localStorage
      localStorage.setItem(
        "userPreferences",
        JSON.stringify({
          subjects: selectedSubjects,
          exams: selectedExams,
        }),
      )

      router.push("/dashboard")
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-3xl">
        <div className="flex items-center justify-center mb-8">
          <BrainCircuit className="h-12 w-12 text-primary" />
          <h1 className="text-3xl font-bold ml-2">UPSC Aspirants AI</h1>
        </div>

        <div className="flex justify-between mb-8">
          <div className="flex items-center">
            <div
              className={`rounded-full h-10 w-10 flex items-center justify-center ${step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
            >
              {step > 1 ? <CheckCircle2 className="h-6 w-6" /> : "1"}
            </div>
            <div className="ml-2">
              <p className={`font-medium ${step >= 1 ? "text-foreground" : "text-muted-foreground"}`}>Subjects</p>
            </div>
          </div>
          <div className="h-0.5 flex-1 bg-muted self-center mx-4"></div>
          <div className="flex items-center">
            <div
              className={`rounded-full h-10 w-10 flex items-center justify-center ${step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
            >
              {step > 2 ? <CheckCircle2 className="h-6 w-6" /> : "2"}
            </div>
            <div className="ml-2">
              <p className={`font-medium ${step >= 2 ? "text-foreground" : "text-muted-foreground"}`}>Exams</p>
            </div>
          </div>
          <div className="h-0.5 flex-1 bg-muted self-center mx-4"></div>
          <div className="flex items-center">
            <div
              className={`rounded-full h-10 w-10 flex items-center justify-center ${step >= 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
            >
              3
            </div>
            <div className="ml-2">
              <p className={`font-medium ${step >= 3 ? "text-foreground" : "text-muted-foreground"}`}>Complete</p>
            </div>
          </div>
        </div>

        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Select your subjects of interest</CardTitle>
              <CardDescription>
                Choose the subjects you want to focus on. This will help us personalize your learning experience.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {subjects.map((subject) => (
                  <div key={subject} className="flex items-center space-x-2">
                    <Checkbox
                      id={subject}
                      checked={selectedSubjects.includes(subject)}
                      onCheckedChange={() => handleSubjectToggle(subject)}
                    />
                    <Label htmlFor={subject}>{subject}</Label>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleNext} disabled={selectedSubjects.length === 0}>
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Select your target exams</CardTitle>
              <CardDescription>
                Choose the exams you are preparing for. This will help us tailor content to your specific needs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {exams.map((exam) => (
                  <div key={exam} className="flex items-center space-x-2">
                    <Checkbox
                      id={exam}
                      checked={selectedExams.includes(exam)}
                      onCheckedChange={() => handleExamToggle(exam)}
                    />
                    <Label htmlFor={exam}>{exam}</Label>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setStep(1)}>
                Back
              </Button>
              <Button onClick={handleNext} disabled={selectedExams.length === 0}>
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>You're all set!</CardTitle>
              <CardDescription>
                Your preferences have been saved. You can always change them later from your profile settings.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-6">
              <CheckCircle2 className="h-16 w-16 text-primary mb-4" />
              <h3 className="text-xl font-medium mb-2">Ready to start learning</h3>
              <p className="text-center text-muted-foreground">
                We've personalized your dashboard based on your preferences. You can now start exploring the platform.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setStep(2)}>
                Back
              </Button>
              <Button onClick={handleNext}>
                Go to Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  )
}
