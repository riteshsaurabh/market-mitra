"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Download, PieChart, TrendingUp } from "lucide-react"

export default function InsightsViewer() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold tracking-tight">AAPL Insights</h1>
            <Badge>Q2 2023</Badge>
          </div>
          <p className="text-muted-foreground">
            Generated on April 3, 2023 • Based on quarterly earnings report
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" /> Download PDF
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" /> Download CSV
          </Button>
        </div>
      </div>

      <Tabs defaultValue="summary" className="w-full">
        <TabsList className="w-full mb-6">
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="full-report">Full Report</TabsTrigger>
        </TabsList>
        
        <TabsContent value="summary" className="space-y-6">
          {/* Summary View */}
          <Card>
            <CardHeader>
              <CardTitle>Key Highlights</CardTitle>
              <CardDescription>
                AI-generated summary of the most important insights
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm">
                  Apple (AAPL) reported strong financial performance in Q2 2023, with revenue exceeding analyst expectations by 3.2%. The services segment continues to be a growth driver, showing an 18% year-over-year increase. While iPhone sales slightly declined in emerging markets, the company's overall market position remains strong with expanding margins and robust cash flow. The board approved a 5% increase in quarterly dividend and authorized an additional $90 billion for share repurchases.
                </p>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Performance vs. Expectations
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">Above</Badge>
                      <span>Revenue: $94.8B (vs $91.9B expected)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">Above</Badge>
                      <span>EPS: $1.52 (vs $1.43 expected)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">Above</Badge>
                      <span>Services Revenue: $20.9B (vs $20.1B expected)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-yellow-50 text-yellow-700 hover:bg-yellow-50">In-line</Badge>
                      <span>iPhone Revenue: $51.3B (vs $51.4B expected)</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                    <PieChart className="h-5 w-5 text-primary" />
                    Key Financial Ratios
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">P/E Ratio</p>
                      <p className="text-xl font-semibold">28.5</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Gross Margin</p>
                      <p className="text-xl font-semibold">43.3%</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">ROE</p>
                      <p className="text-xl font-semibold">42.1%</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Debt/Equity</p>
                      <p className="text-xl font-semibold">1.45</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="full-report" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Full Report</CardTitle>
              <CardDescription>
                Detailed analysis of the quarterly earnings report
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Full report content will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
