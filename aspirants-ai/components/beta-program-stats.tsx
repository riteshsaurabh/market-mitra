"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { getBetaParticipantsCount, getRemainingBetaSeats, BETA_PROGRAM_LIMIT } from "@/utils/beta-program"

interface BetaProgramStatsProps {
  className?: string
}

export default function BetaProgramStats({ className }: BetaProgramStatsProps) {
  const [participants, setParticipants] = useState(0)
  const [remainingSeats, setRemainingSeats] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Get the current stats
    setParticipants(getBetaParticipantsCount())
    setRemainingSeats(getRemainingBetaSeats())
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <div className={className}>Loading stats...</div>
  }

  const percentageFilled = (participants / BETA_PROGRAM_LIMIT) * 100

  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <Badge variant="outline" className="mr-2">
            Beta Program
          </Badge>
          <span className="text-sm font-medium">{participants} participants</span>
        </div>
        <div className="text-sm">
          <span className={remainingSeats < 100 ? "text-red-500 font-bold" : "text-muted-foreground"}>
            {remainingSeats} seats remaining
          </span>
        </div>
      </div>
      <Progress value={percentageFilled} className="h-2" />
      {remainingSeats < 100 && <p className="text-xs text-red-500 mt-1">Hurry! Beta program is almost full.</p>}
    </div>
  )
}
