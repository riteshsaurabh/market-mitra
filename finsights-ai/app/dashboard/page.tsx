import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, BarChart3, FileText, LineChart, Upload, TrendingUp, PieChart } from "lucide-react"
import { Chart } from "@/components/ui/chart"

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, John!</h1>
        <p className="text-muted-foreground">
          Upload financial documents or enter stock tickers to get AI-powered insights.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Input Section */}
        <Card>
          <CardHeader>
            <CardTitle>Generate Financial Insights</CardTitle>
            <CardDescription>Enter a stock ticker or upload financial documents to analyze</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="ticker" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="ticker">Stock Ticker</TabsTrigger>
                <TabsTrigger value="upload">Upload Document</TabsTrigger>
              </TabsList>
              <TabsContent value="ticker" className="space-y-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="ticker">Stock Ticker</Label>
                    <Input id="ticker" placeholder="Enter stock ticker (e.g., AAPL)" />
                  </div>
                  <Button>
                    Generate Insights <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="upload" className="space-y-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label>Upload Document</Label>
                    <div className="border-2 border-dashed rounded-lg p-8 text-center">
                      <Upload className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
                      <div className="text-sm mb-2">
                        <span className="font-medium">Click to upload</span> or drag and drop
                      </div>
                      <p className="text-xs text-muted-foreground">PDF, Excel, CSV (max 10MB)</p>
                    </div>
                  </div>
                  <Button>
                    Upload & Analyze <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Reports Generated</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Favorite Stocks</CardTitle>
              <LineChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">AAPL, MSFT, TSLA</div>
              <p className="text-xs text-muted-foreground">Most frequently analyzed</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Time Saved</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8.5 hours</div>
              <p className="text-xs text-muted-foreground">Compared to manual analysis</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Insights */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Insights</CardTitle>
            <CardDescription>Your latest financial analysis results</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="aapl" className="w-full">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="aapl">AAPL</TabsTrigger>
                <TabsTrigger value="msft">MSFT</TabsTrigger>
                <TabsTrigger value="tsla">TSLA</TabsTrigger>
              </TabsList>
              <TabsContent value="aapl" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <PieChart className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">Financial Ratios</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Chart
                        type="bar"
                        options={{
                          scales: {
                            y: {
                              beginAtZero: true,
                            },
                          },
                        }}
                        data={{
                          labels: ["P/E", "P/B", "ROE", "ROA", "Debt/Equity"],
                          datasets: [
                            {
                              label: "AAPL",
                              data: [28.5, 35.2, 42.1, 18.7, 1.2],
                              backgroundColor: "hsl(198, 100%, 30%)",
                            },
                            {
                              label: "Industry Avg",
                              data: [22.3, 28.7, 35.4, 15.2, 1.5],
                              backgroundColor: "hsl(175, 100%, 82%)",
                            },
                          ],
                        }}
                        className="aspect-[4/3]"
                      />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">Growth Metrics</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Chart
                        type="line"
                        options={{
                          scales: {
                            y: {
                              beginAtZero: true,
                            },
                          },
                        }}
                        data={{
                          labels: ["Q1", "Q2", "Q3", "Q4", "Q1", "Q2"],
                          datasets: [
                            {
                              label: "Revenue Growth",
                              data: [5.2, 7.8, 8.5, 9.2, 8.7, 10.1],
                              borderColor: "hsl(198, 100%, 30%)",
                              backgroundColor: "transparent",
                            },
                            {
                              label: "Profit Growth",
                              data: [4.8, 6.2, 7.1, 8.5, 7.9, 9.3],
                              borderColor: "hsl(175, 100%, 82%)",
                              backgroundColor: "transparent",
                            },
                          ],
                        }}
                        className="aspect-[4/3]"
                      />
                    </CardContent>
                  </Card>
                </div>
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">Expert Opinions</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">Key Strengths</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Strong cash position with $73B in reserves</li>
                        <li>Consistent revenue growth across product lines</li>
                        <li>Services segment showing 18% YoY growth</li>
                        <li>Expanding market share in wearables category</li>
                      </ul>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <h4 className="font-medium">Areas of Concern</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Slowing iPhone sales in emerging markets</li>
                        <li>Supply chain constraints affecting production</li>
                        <li>Increasing regulatory scrutiny in key markets</li>
                      </ul>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <h4 className="font-medium">AI Summary</h4>
                      <p className="text-sm">
                        Apple continues to demonstrate financial resilience with strong growth in services and wearables
                        offsetting slower hardware sales. The company's robust cash position provides flexibility for
                        strategic investments and shareholder returns. Investors should monitor supply chain
                        developments and regulatory challenges in the coming quarters.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="msft" className="space-y-4">
                <div className="flex items-center justify-center h-40">
                  <p className="text-muted-foreground">Select MSFT to view insights</p>
                </div>
              </TabsContent>
              <TabsContent value="tsla" className="space-y-4">
                <div className="flex items-center justify-center h-40">
                  <p className="text-muted-foreground">Select TSLA to view insights</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
