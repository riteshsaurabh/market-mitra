"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function SubjectPerformance() {
  const [timeRange, setTimeRange] = useState("month")

  const subjectPerformance = [
    {
      subject: "Indian Polity",
      accuracy: 78,
      avgTime: 45,
      improvement: "+12%",
      status: "improving",
    },
    {
      subject: "Economy",
      accuracy: 65,
      avgTime: 60,
      improvement: "+5%",
      status: "improving",
    },
    {
      subject: "Geography",
      accuracy: 82,
      avgTime: 40,
      improvement: "+8%",
      status: "improving",
    },
    {
      subject: "History",
      accuracy: 70,
      avgTime: 55,
      improvement: "-3%",
      status: "declining",
    },
    {
      subject: "Environment",
      accuracy: 85,
      avgTime: 38,
      improvement: "+15%",
      status: "improving",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "improving":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "declining":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Subject Performance</h3>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Time Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="week">Last Week</SelectItem>
            <SelectItem value="month">Last Month</SelectItem>
            <SelectItem value="quarter">Last 3 Months</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        {subjectPerformance.map((subject, index) => (
          <div key={index} className="border rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium">{subject.subject}</h4>
              <Badge className={getStatusColor(subject.status)}>{subject.improvement}</Badge>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Accuracy</p>
                <div className="flex items-center mt-1">
                  <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: `${subject.accuracy}%` }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">{subject.accuracy}%</span>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Avg. Response Time</p>
                <p className="text-sm font-medium mt-1">{subject.avgTime} seconds</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="h-[200px] bg-muted/30 rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">Detailed performance graph would appear here</p>
      </div>
    </div>
  )
}
