"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Upload, TrendingUp, PieChart as PieChartIcon, Download, Check } from "lucide-react"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { useToast } from "@/components/ui/use-toast"
import { Chart, ChartContainer, ChartHeader, ChartTitle, ChartLegend, ChartLegendItem } from "@/components/ui/chart"

export default function DemoPage() {
  const { toast } = useToast()
  const [currentStep, setCurrentStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [ticker, setTicker] = useState("AAPL")

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    } else {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setShowResults(true)
        toast({
          title: "Analysis Complete",
          description: "Your financial insights for AAPL are ready to view.",
        })
      }, 3000)
    }
  }

  const resetDemo = () => {
    setCurrentStep(1)
    setShowResults(false)
  }

  const pieChartData = {
    labels: ["Product A", "Product B", "Product C"],
    datasets: [
      {
        data: [300, 200, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
      }
    ]
  }

  const pieChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    }
  }

  const barChartData = {
    labels: ["Revenue", "Profit Margin", "Operating Income", "Net Income"],
    datasets: [
      {
        label: "AAPL",
        data: [394.3, 25.3, 109.2, 94.3],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgb(54, 162, 235)",
        borderWidth: 1
      },
      {
        label: "Industry Average",
        data: [285.1, 21.2, 78.5, 67.2],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 1
      }
    ]
  }

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }

  const lineChartData = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Revenue",
        data: [85.2, 92.4, 97.1, 103.5],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1
      },
      {
        label: "EPS",
        data: [1.52, 1.65, 1.73, 1.88],
        borderColor: "rgb(153, 102, 255)",
        tension: 0.1
      }
    ]
  }

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />

      <div className="flex-1 container py-8 px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Interactive Demo</h1>
          <p className="text-muted-foreground max-w-[700px] mb-8">
            Experience how Market Mitra transforms financial data into actionable insights
          </p>
        </div>

        {!showResults ? (
          <div className="max-w-4xl mx-auto">
            {/* Steps Indicator */}
            <div className="flex justify-between mb-8">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`step-item ${currentStep >= step ? "active" : ""} ${currentStep > step ? "complete" : ""}`}
                >
                  <div className="step-counter">{currentStep > step ? <Check className="h-5 w-5" /> : step}</div>
                  <p className="text-xs mt-2">{step === 1 ? "Input" : step === 2 ? "Upload" : "Generate"}</p>
                </div>
              ))}
            </div>

            {/* Step Content */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {currentStep === 1
                    ? "Step 1: Enter Stock Ticker"
                    : currentStep === 2
                      ? "Step 2: Upload Financial Document (Optional)"
                      : "Step 3: Generate Insights"}
                </CardTitle>
                <CardDescription>
                  {currentStep === 1
                    ? "Enter a stock ticker symbol to analyze"
                    : currentStep === 2
                      ? "Upload financial documents for deeper analysis"
                      : "Review your inputs and generate insights"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="ticker">Stock Ticker</Label>
                      <Input
                        id="ticker"
                        placeholder="Enter stock ticker (e.g., AAPL)"
                        value={ticker}
                        onChange={(e) => setTicker(e.target.value)}
                      />
                      <p className="text-sm text-muted-foreground">
                        For this demo, we&apos;ll use AAPL (Apple Inc.) as an example
                      </p>
                    </div>
                    <Button onClick={handleNextStep}>
                      Continue <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Upload Document (Optional)</Label>
                      <div className="border-2 border-dashed rounded-lg p-8 text-center">
                        <Upload className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
                        <div className="text-sm mb-2">
                          <span className="font-medium">Click to upload</span> or drag and drop
                        </div>
                        <p className="text-xs text-muted-foreground">PDF, Excel, CSV (max 10MB)</p>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        For this demo, we&apos;ll skip the upload and use our pre-loaded data
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" onClick={() => setCurrentStep(1)}>
                        Back
                      </Button>
                      <Button onClick={handleNextStep}>
                        Continue <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-medium">Review Your Inputs</h3>
                      <div className="bg-muted p-4 rounded-md">
                        <div className="flex justify-between items-center">
                          <span>Stock Ticker:</span>
                          <Badge>{ticker}</Badge>
                        </div>
                        <Separator className="my-2" />
                        <div className="flex justify-between items-center">
                          <span>Documents:</span>
                          <span className="text-muted-foreground">None (using pre-loaded data)</span>
                        </div>
                        <Separator className="my-2" />
                        <div className="flex justify-between items-center">
                          <span>Analysis Type:</span>
                          <span>Full Financial Analysis</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" onClick={() => setCurrentStep(2)}>
                        Back
                      </Button>
                      <Button onClick={handleNextStep} disabled={loading}>
                        {loading ? (
                          <>
                            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                            Generating Insights...
                          </>
                        ) : (
                          <>
                            Generate Insights <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold tracking-tight">AAPL Insights</h2>
                  <Badge>Demo Results</Badge>
                </div>
                <p className="text-muted-foreground">
                  Generated on {new Date().toLocaleDateString()} • Based on quarterly earnings report
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={resetDemo}>
                  Reset Demo
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" /> Download PDF
                </Button>
              </div>
            </div>

            <Tabs defaultValue="summary" className="w-full">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="summary">Summary</TabsTrigger>
                <TabsTrigger value="ratios">Financial Ratios</TabsTrigger>
                <TabsTrigger value="earnings">Earnings</TabsTrigger>
                <TabsTrigger value="expert">Expert Views</TabsTrigger>
              </TabsList>

              <TabsContent value="summary" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Key Highlights</CardTitle>
                    <CardDescription>AI-generated summary of the most important insights</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <p className="text-sm">
                        Apple (AAPL) reported strong financial performance in the latest quarter, with revenue exceeding
                        analyst expectations by 3.2%. The services segment continues to be a growth driver, showing an
                        18% year-over-year increase. While iPhone sales slightly declined in emerging markets, the
                        company&apos;s overall market position remains strong with expanding margins and robust cash flow.
                        The board approved a 5% increase in quarterly dividend and authorized an additional $90 billion
                        for share repurchases.
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
                            <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                              Above
                            </Badge>
                            <span>Revenue: $94.8B (vs $91.9B expected)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                              Above
                            </Badge>
                            <span>EPS: $1.52 (vs $1.43 expected)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                              Above
                            </Badge>
                            <span>Services Revenue: $20.9B (vs $20.1B expected)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 hover:bg-yellow-50">
                              In-line
                            </Badge>
                            <span>iPhone Revenue: $51.3B (vs $51.4B expected)</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                          <PieChartIcon className="h-5 w-5 text-primary" />
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
                            <p className="text-xl font-semibold">1.2</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Revenue Breakdown</CardTitle>
                    <CardDescription>Revenue by product category</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer>
                      <ChartHeader>
                        <ChartTitle>Revenue Distribution</ChartTitle>
                        <ChartLegend>
                          <ChartLegendItem label="iPhone" color="hsl(198, 100%, 30%)" />
                          <ChartLegendItem label="Mac" color="hsl(198, 100%, 40%)" />
                          <ChartLegendItem label="iPad" color="hsl(198, 100%, 50%)" />
                          <ChartLegendItem label="Wearables" color="hsl(198, 100%, 60%)" />
                          <ChartLegendItem label="Services" color="hsl(175, 100%, 45%)" />
                        </ChartLegend>
                      </ChartHeader>
                      <Chart
                        type="pie"
                        data={{
                          labels: ["iPhone", "Mac", "iPad", "Wearables", "Services"],
                          datasets: [{
                            data: [52, 10, 8, 9, 21],
                            backgroundColor: [
                              "hsl(198, 100%, 30%)",
                              "hsl(198, 100%, 40%)",
                              "hsl(198, 100%, 50%)",
                              "hsl(198, 100%, 60%)",
                              "hsl(175, 100%, 45%)",
                            ],
                          }],
                        }}
                        options={{
                          responsive: true,
                          plugins: {
                            legend: {
                              display: false
                            }
                          }
                        }}
                        className="w-full h-[300px]"
                      />
                    </ChartContainer>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="ratios" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Financial Ratios Analysis</CardTitle>
                    <CardDescription>Key financial ratios compared to industry averages</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer>
                      <ChartHeader>
                        <ChartTitle>Financial Metrics Comparison</ChartTitle>
                        <ChartLegend>
                          <ChartLegendItem label="AAPL" color="hsl(198, 100%, 30%)" />
                          <ChartLegendItem label="Industry Average" color="hsl(175, 100%, 82%)" />
                        </ChartLegend>
                      </ChartHeader>
                      <Chart
                        type="bar"
                        data={{
                          labels: ["P/E", "P/B", "ROE", "ROA", "Debt/Equity", "Current Ratio"],
                          datasets: [
                            {
                              label: "AAPL",
                              data: [28.5, 35.2, 42.1, 18.7, 1.2, 1.5],
                              backgroundColor: "hsl(198, 100%, 30%)",
                            },
                            {
                              label: "Industry Avg",
                              data: [22.3, 28.7, 35.4, 15.2, 1.5, 1.8],
                              backgroundColor: "hsl(175, 100%, 82%)",
                            },
                          ],
                        }}
                        options={{
                          responsive: true,
                          plugins: {
                            legend: {
                              display: false
                            }
                          },
                          scales: {
                            y: {
                              beginAtZero: true,
                            },
                          },
                        }}
                        className="w-full h-[300px]"
                      />
                    </ChartContainer>

                    <div className="mt-6 space-y-4">
                      <h3 className="text-lg font-medium">Ratio Insights</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">P/E Ratio (28.5)</span>
                          <Badge>Above Average</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Apple's P/E ratio is higher than the industry average, indicating investors are willing to pay
                          a premium for the company's earnings, likely due to strong growth prospects and brand value.
                        </p>
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">ROE (42.1%)</span>
                          <Badge>Strong</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          The Return on Equity is significantly higher than the industry average, demonstrating Apple's
                          efficiency in generating profits from shareholders' equity.
                        </p>
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Debt/Equity (1.2)</span>
                          <Badge>Favorable</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Apple maintains a lower debt-to-equity ratio than the industry average, indicating a more
                          conservative financial structure and lower financial risk.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="earnings" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Earnings Analysis</CardTitle>
                    <CardDescription>Quarterly earnings trends and projections</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer>
                      <ChartHeader>
                        <ChartTitle>Quarterly Performance</ChartTitle>
                        <ChartLegend>
                          <ChartLegendItem label="Revenue" color="hsl(198, 100%, 30%)" />
                          <ChartLegendItem label="EPS" color="hsl(175, 100%, 45%)" />
                        </ChartLegend>
                      </ChartHeader>
                      <Chart
                        type="line"
                        data={{
                          labels: ["Q1 2022", "Q2 2022", "Q3 2022", "Q4 2022", "Q1 2023", "Q2 2023", "Q3 2023 (Est)"],
                          datasets: [
                            {
                              label: "Revenue (Billions $)",
                              data: [83.4, 82.1, 90.1, 94.8, 96.1, 94.8, 93.5],
                              borderColor: "hsl(198, 100%, 30%)",
                              backgroundColor: "transparent",
                            },
                            {
                              label: "EPS ($)",
                              data: [1.24, 1.2, 1.29, 1.4, 1.47, 1.52, 1.49],
                              borderColor: "hsl(175, 100%, 45%)",
                              backgroundColor: "transparent",
                            },
                          ],
                        }}
                        options={{
                          responsive: true,
                          plugins: {
                            legend: {
                              display: false
                            }
                          },
                          scales: {
                            y: {
                              beginAtZero: false,
                            },
                          },
                        }}
                        className="w-full h-[300px]"
                      />
                    </ChartContainer>

                    <div className="mt-6 grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Revenue Highlights</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="rounded-full bg-green-500 h-2 w-2 mt-2"></div>
                            <span>Services revenue grew 18% YoY, reaching $20.9B</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="rounded-full bg-green-500 h-2 w-2 mt-2"></div>
                            <span>Wearables segment showed 9% growth to $8.8B</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="rounded-full bg-yellow-500 h-2 w-2 mt-2"></div>
                            <span>iPhone revenue flat at $51.3B (0.2% YoY)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="rounded-full bg-red-500 h-2 w-2 mt-2"></div>
                            <span>Mac revenue declined 7.3% YoY to $7.2B</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Forward Guidance</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="rounded-full bg-blue-500 h-2 w-2 mt-2"></div>
                            <span>Q3 2023 revenue expected between $92-95B</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="rounded-full bg-blue-500 h-2 w-2 mt-2"></div>
                            <span>Gross margin projected at 43-44%</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="rounded-full bg-blue-500 h-2 w-2 mt-2"></div>
                            <span>Services growth expected to maintain double-digit pace</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="rounded-full bg-blue-500 h-2 w-2 mt-2"></div>
                            <span>$90B additional share repurchase authorized</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="expert" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Expert Analysis</CardTitle>
                    <CardDescription>AI-generated expert opinions and recommendations</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Key Strengths</h3>
                      <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-100 dark:border-green-900/30">
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-600 mt-0.5" />
                            <span>
                              Strong cash position with $73B in reserves provides flexibility for investments and
                              shareholder returns
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-600 mt-0.5" />
                            <span>
                              Services segment continues to show robust growth (18% YoY), improving margin profile
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-600 mt-0.5" />
                            <span>Expanding installed base creates opportunities for cross-selling and upselling</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-600 mt-0.5" />
                            <span>Wearables category showing strong momentum with 9% growth</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Areas of Concern</h3>
                      <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg border border-yellow-100 dark:border-yellow-900/30">
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <div className="rounded-full bg-yellow-500 h-4 w-4 mt-0.5 flex items-center justify-center text-white">
                              !
                            </div>
                            <span>Slowing iPhone sales growth in emerging markets could impact future revenue</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="rounded-full bg-yellow-500 h-4 w-4 mt-0.5 flex items-center justify-center text-white">
                              !
                            </div>
                            <span>Supply chain constraints affecting production capacity and timing</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="rounded-full bg-yellow-500 h-4 w-4 mt-0.5 flex items-center justify-center text-white">
                              !
                            </div>
                            <span>
                              Increasing regulatory scrutiny in key markets could impact App Store revenue model
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Investment Outlook</h3>
                      <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                        <p className="text-sm mb-4">
                          Apple continues to demonstrate financial resilience with strong growth in services and
                          wearables offsetting slower hardware sales. The company's robust cash position provides
                          flexibility for strategic investments and shareholder returns. Investors should monitor supply
                          chain developments and regulatory challenges in the coming quarters.
                        </p>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-primary">Recommendation</Badge>
                          <span className="font-medium">Moderate Buy</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>

      <SiteFooter />
    </div>
  )
}
