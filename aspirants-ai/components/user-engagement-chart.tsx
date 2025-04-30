"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function UserEngagementChart() {
  const [timeRange, setTimeRange] = useState("week")

  // Mock data for the chart
  const dailyEngagement = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Hours Studied",
        data: [2.5, 3.1, 1.8, 4.2, 3.7, 2.9, 1.5],
      },
    ],
  }

  const subjectDistribution = {
    labels: ["Polity", "Economy", "Geography", "History", "Environment", "Current Affairs"],
    datasets: [
      {
        label: "Time Spent (hours)",
        data: [8.5, 6.2, 4.8, 3.5, 5.1, 7.9],
      },
    ],
  }

  const timeSlotDistribution = {
    labels: ["Morning (6-10)", "Midday (10-2)", "Afternoon (2-6)", "Evening (6-10)", "Night (10-2)"],
    datasets: [
      {
        label: "Study Sessions",
        data: [12, 8, 5, 15, 10],
      },
    ],
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Study Patterns</h3>
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

      <Tabs defaultValue="daily" className="space-y-4">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="daily">Daily Engagement</TabsTrigger>
          <TabsTrigger value="subjects">Subject Distribution</TabsTrigger>
          <TabsTrigger value="timeslots">Time Slots</TabsTrigger>
        </TabsList>

        <TabsContent value="daily">
          <Card>
            <CardContent className="pt-6">
              <div className="h-[300px] bg-muted/30 rounded-lg flex flex-col items-center justify-center p-4">
                <div className="w-full h-full flex items-end justify-between">
                  {dailyEngagement.labels.map((day, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div
                        className="bg-primary w-12 rounded-t-md"
                        style={{
                          height: `${(dailyEngagement.datasets[0].data[index] / Math.max(...dailyEngagement.datasets[0].data)) * 200}px`,
                        }}
                      ></div>
                      <div className="mt-2 text-sm">{day}</div>
                    </div>
                  ))}
                </div>
                <div className="w-full mt-4 text-center text-sm text-muted-foreground">Days of the Week</div>
              </div>
              <div className="mt-4 text-sm text-muted-foreground text-center">
                Your daily study engagement over the past week
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="subjects">
          <Card>
            <CardContent className="pt-6">
              <div className="h-[300px] bg-muted/30 rounded-lg flex flex-col items-center justify-center p-4">
                <div className="w-full h-full flex items-end justify-between">
                  {subjectDistribution.labels.map((subject, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div
                        className="bg-primary w-12 rounded-t-md"
                        style={{
                          height: `${(subjectDistribution.datasets[0].data[index] / Math.max(...subjectDistribution.datasets[0].data)) * 200}px`,
                        }}
                      ></div>
                      <div className="mt-2 text-sm text-center">{subject}</div>
                    </div>
                  ))}
                </div>
                <div className="w-full mt-4 text-center text-sm text-muted-foreground">Subjects</div>
              </div>
              <div className="mt-4 text-sm text-muted-foreground text-center">
                Distribution of your study time across different subjects
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timeslots">
          <Card>
            <CardContent className="pt-6">
              <div className="h-[300px] bg-muted/30 rounded-lg flex flex-col items-center justify-center p-4">
                <div className="w-full h-full flex items-end justify-between">
                  {timeSlotDistribution.labels.map((timeSlot, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div
                        className="bg-primary w-12 rounded-t-md"
                        style={{
                          height: `${(timeSlotDistribution.datasets[0].data[index] / Math.max(...timeSlotDistribution.datasets[0].data)) * 200}px`,
                        }}
                      ></div>
                      <div className="mt-2 text-sm text-center">{timeSlot}</div>
                    </div>
                  ))}
                </div>
                <div className="w-full mt-4 text-center text-sm text-muted-foreground">Time of Day</div>
              </div>
              <div className="mt-4 text-sm text-muted-foreground text-center">
                Distribution of your study sessions across different times of day
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
