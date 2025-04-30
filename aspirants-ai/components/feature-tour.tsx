"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, X } from "lucide-react"

interface TourStep {
  title: string
  description: string
  targetSelector: string
  position: "top" | "right" | "bottom" | "left"
}

interface FeatureTourProps {
  steps: TourStep[]
  onComplete: () => void
  isOpen: boolean
  onClose: () => void
}

export default function FeatureTour({ steps, onComplete, isOpen, onClose }: FeatureTourProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [position, setPosition] = useState({ top: 0, left: 0 })

  useEffect(() => {
    if (isOpen && steps.length > 0) {
      positionTooltip()
    }
  }, [isOpen, currentStep, steps])

  useEffect(() => {
    window.addEventListener("resize", positionTooltip)
    return () => {
      window.removeEventListener("resize", positionTooltip)
    }
  }, [currentStep, steps])

  const positionTooltip = () => {
    if (!isOpen || steps.length === 0) return

    const step = steps[currentStep]
    const targetElement = document.querySelector(step.targetSelector)

    if (targetElement) {
      const rect = targetElement.getBoundingClientRect()
      const tooltipWidth = 300
      const tooltipHeight = 200
      const margin = 20

      let top = 0
      let left = 0

      switch (step.position) {
        case "top":
          top = rect.top - tooltipHeight - margin
          left = rect.left + rect.width / 2 - tooltipWidth / 2
          break
        case "right":
          top = rect.top + rect.height / 2 - tooltipHeight / 2
          left = rect.right + margin
          break
        case "bottom":
          top = rect.bottom + margin
          left = rect.left + rect.width / 2 - tooltipWidth / 2
          break
        case "left":
          top = rect.top + rect.height / 2 - tooltipHeight / 2
          left = rect.left - tooltipWidth - margin
          break
      }

      // Ensure tooltip stays within viewport
      if (top < 0) top = margin
      if (left < 0) left = margin
      if (top + tooltipHeight > window.innerHeight) top = window.innerHeight - tooltipHeight - margin
      if (left + tooltipWidth > window.innerWidth) left = window.innerWidth - tooltipWidth - margin

      setPosition({ top, left })
    }
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onComplete()
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  if (!isOpen || steps.length === 0) return null

  const currentTourStep = steps[currentStep]

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center pointer-events-none">
      <div
        className="absolute pointer-events-auto"
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`,
          width: "300px",
        }}
      >
        <Card className="shadow-lg">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">{currentTourStep.title}</CardTitle>
              <Button variant="ghost" size="icon" onClick={onClose} className="h-6 w-6">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm">{currentTourStep.description}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm" onClick={handlePrevious} disabled={currentStep === 0}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            <Button size="sm" onClick={handleNext}>
              {currentStep === steps.length - 1 ? "Finish" : "Next"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
