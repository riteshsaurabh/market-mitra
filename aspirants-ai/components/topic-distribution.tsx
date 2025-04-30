"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TopicDistribution() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Topic Distribution</h3>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="polity">Polity</SelectItem>
            <SelectItem value="economy">Economy</SelectItem>
            <SelectItem value="environment">Environment</SelectItem>
            <SelectItem value="international">International Relations</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardContent className="pt-6">
            <h4 className="font-medium mb-4 text-center">Distribution by UPSC Paper</h4>
            <div className="h-[250px] bg-muted/30 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Pie chart showing distribution by UPSC paper would appear here</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h4 className="font-medium mb-4 text-center">Distribution by Topic</h4>
            <div className="h-[250px] bg-muted/30 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Bar chart showing distribution by topic would appear here</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="pt-6">
          <h4 className="font-medium mb-4 text-center">Topic Interconnections</h4>
          <div className="h-[300px] bg-muted/30 rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Network diagram showing topic interconnections would appear here</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
