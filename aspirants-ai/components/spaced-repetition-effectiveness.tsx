"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SpacedRepetitionEffectiveness() {
  const [timeRange, setTimeRange] = useState("month")

  // Mock data for retention rates
  const retentionData = {
    labels: ["Day 1", "Day 3", "Day 7", "Day 14", "Day 30"],
    datasets: [
      {
        label: "With Spaced Repetition",
        data: [95, 85, 78, 72, 68],
      },
      {
        label: "Without Spaced Repetition",
        data: [90, 60, 40, 25, 15],
      },
    ],
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Retention Rates</h3>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Time Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="month">Last Month</SelectItem>
            <SelectItem value="quarter">Last 3 Months</SelectItem>
            <SelectItem value="year">Last Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="h-[300px] bg-muted/30 rounded-lg p-4">
        <div className="w-full h-full flex flex-col">
          <div className="flex justify-between mb-2">
            <div className="text-sm font-medium">Retention Rate (%)</div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-primary rounded-full mr-1"></div>
                <span className="text-xs">With Spaced Repetition</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-secondary rounded-full mr-1"></div>
                <span className="text-xs">Without Spaced Repetition</span>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-muted-foreground">
              <div>100%</div>
              <div>75%</div>
              <div>50%</div>
              <div>25%</div>
              <div>0%</div>
            </div>

            {/* Chart area */}
            <div className="absolute left-10 right-0 top-0 bottom-0">
              {/* Grid lines */}
              <div className="absolute left-0 right-0 top-0 h-px bg-muted"></div>
              <div className="absolute left-0 right-0 top-1/4 h-px bg-muted"></div>
              <div className="absolute left-0 right-0 top-2/4 h-px bg-muted"></div>
              <div className="absolute left-0 right-0 top-3/4 h-px bg-muted"></div>
              <div className="absolute left-0 right-0 bottom-0 h-px bg-muted"></div>

              {/* Lines for the datasets */}
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* With Spaced Repetition line */}
                <polyline
                  points={`
                    ${0},${100 - retentionData.datasets[0].data[0]}
                    ${25},${100 - retentionData.datasets[0].data[1]}
                    ${50},${100 - retentionData.datasets[0].data[2]}
                    ${75},${100 - retentionData.datasets[0].data[3]}
                    ${100},${100 - retentionData.datasets[0].data[4]}
                  `}
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                />

                {/* Without Spaced Repetition line */}
                <polyline
                  points={`
                    ${0},${100 - retentionData.datasets[1].data[0]}
                    ${25},${100 - retentionData.datasets[1].data[1]}
                    ${50},${100 - retentionData.datasets[1].data[2]}
                    ${75},${100 - retentionData.datasets[1].data[3]}
                    ${100},${100 - retentionData.datasets[1].data[4]}
                  `}
                  fill="none"
                  stroke="hsl(var(--secondary))"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>

          {/* X-axis labels */}
          <div className="flex justify-between mt-2 text-xs text-muted-foreground pl-10">
            {retentionData.labels.map((label, index) => (
              <div key={index}>{label}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="font-medium">Key Insights:</h4>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Your retention rate is 68% after 30 days with spaced repetition</li>
          <li>Without spaced repetition, retention would drop to approximately 15%</li>
          <li>Most effective review intervals for you: 1 day, 3 days, 7 days</li>
          <li>Subjects with highest retention: Environment, Polity</li>
          <li>Subjects needing more review: Economy, History</li>
        </ul>
      </div>
    </div>
  )
}
