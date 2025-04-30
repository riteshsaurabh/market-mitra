import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BarChart3, FileText, Upload, Search, TrendingUp, PieChart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
                Clarity. Speed. <br />
                Smarter Financial Decisions.
              </h1>
              <p className="text-lg text-white/80 md:text-xl">
                Upload financial documents or input stock tickers to get AI-powered insights in seconds.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Enter stock ticker (e.g., AAPL)"
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white/30"
                  />
                </div>
                <Button className="bg-white text-midnight hover:bg-white/90">Generate Insights</Button>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <Link href="/demo">
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto">
                    <Upload className="mr-2 h-4 w-4" /> Try Demo
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button variant="secondary" className="w-full sm:w-auto">
                    Join Beta <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/dashboard-preview.png"
                  alt="FinInsights AI Dashboard Preview"
                  width={800}
                  height={600}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-teal text-white">New</Badge>
                    <span className="text-sm font-medium text-white">Real-time earnings analysis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-2">How It Works</h2>
            <p className="text-muted-foreground max-w-[700px]">Get financial insights in three simple steps</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Upload className="h-10 w-10 text-primary" />,
                title: "Input Stock or Upload",
                description: "Upload financial documents or enter stock tickers to analyze",
              },
              {
                icon: <BarChart3 className="h-10 w-10 text-primary" />,
                title: "AI Analysis",
                description: "Our AI processes the data and extracts key financial insights",
              },
              {
                icon: <FileText className="h-10 w-10 text-primary" />,
                title: "Get Insights",
                description: "View structured reports with ratios, trends, and expert opinions",
              },
            ].map((step, index) => (
              <Card key={index} className="feature-card border-none">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Key Features</h2>
            <p className="text-muted-foreground max-w-[700px]">
              Powerful tools to help you make informed financial decisions
            </p>
          </div>

          <Tabs defaultValue="ratios" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="ratios">Financial Ratios</TabsTrigger>
              <TabsTrigger value="earnings">Earnings Analysis</TabsTrigger>
              <TabsTrigger value="trends">Market Trends</TabsTrigger>
              <TabsTrigger value="expert">Expert Insights</TabsTrigger>
            </TabsList>

            {[
              {
                id: "ratios",
                title: "Financial Ratios",
                description: "Automatically calculate and interpret key financial ratios from uploaded documents",
                icon: <PieChart className="h-12 w-12 text-primary" />,
                image: "/images/financial-chart.png",
              },
              {
                id: "earnings",
                title: "Earnings Analysis",
                description: "Extract and visualize earnings data with quarter-over-quarter comparisons",
                icon: <BarChart3 className="h-12 w-12 text-primary" />,
                image: "/images/stock-analysis.png",
              },
              {
                id: "trends",
                title: "Market Trends",
                description: "Identify market trends and patterns with AI-powered analysis",
                icon: <TrendingUp className="h-12 w-12 text-primary" />,
                image: "/images/stock-analysis.png",
              },
              {
                id: "expert",
                title: "Expert Insights",
                description: "Get AI-generated expert opinions and recommendations based on financial data",
                icon: <FileText className="h-12 w-12 text-primary" />,
                image: "/images/ai-insights.png",
              },
            ].map((feature) => (
              <TabsContent key={feature.id} value={feature.id} className="mt-0">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="order-2 md:order-1">
                    <div className="inline-block rounded-full bg-primary/10 p-3 mb-4">{feature.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground mb-6">{feature.description}</p>
                    <Link href="/demo">
                      <Button>
                        See Demo <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title}
                        width={600}
                        height={400}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
