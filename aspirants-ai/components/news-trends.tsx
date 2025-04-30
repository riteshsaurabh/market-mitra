"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function NewsTrends() {
  // This would be replaced with actual chart components in a real application
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Topic Frequency Over Time</h3>
        <Select defaultValue="6months">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Time Period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1month">Last Month</SelectItem>
            <SelectItem value="3months">Last 3 Months</SelectItem>
            <SelectItem value="6months">Last 6 Months</SelectItem>
            <SelectItem value="1year">Last Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="h-[300px] bg-muted/30 rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">Line chart showing topic frequency over time would appear here</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardContent className="pt-6">
            <h4 className="font-medium mb-4">Rising Topics</h4>
            <div className="space-y-3">
              {[
                { name: "Climate Finance", growth: "+215%" },
                { name: "Digital Currency", growth: "+180%" },
                { name: "AI Governance", growth: "+145%" },
                { name: "Indo-Pacific Strategy", growth: "+120%" },
              ].map((topic, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>{topic.name}</span>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                    {topic.growth}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h4 className="font-medium mb-4">Declining Topics</h4>
            <div className="space-y-3">
              {[
                { name: "COVID-19", decline: "-75%" },
                { name: "Brexit", decline: "-65%" },
                { name: "Cryptocurrency Regulation", decline: "-40%" },
                { name: "US-China Trade War", decline: "-35%" },
              ].map((topic, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>{topic.name}</span>
                  <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">{topic.decline}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
