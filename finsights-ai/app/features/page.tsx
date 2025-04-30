"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, LineChart, Upload, Zap, Code, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { MainNav } from "@/components/main-nav"

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      
      <div className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/40 py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
                Powerful Features for Financial Analysis
              </h1>
              <p className="text-muted-foreground max-w-[700px] mb-8">
                Discover how Market Mitra transforms complex financial data into clear, actionable insights
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/demo">
                  <Button>
                    Try Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button variant="outline">
                    Sign Up for Beta
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-16">
              {/* Feature 1: Document Upload */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="mb-2">Feature</Badge>
                  <h2 className="text-3xl font-bold tracking-tight mb-4">Upload Financial Documents</h2>
                  <p className="text-muted-foreground mb-6">
                    Upload earnings reports, financial statements, and other documents to extract key data automatically.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Multiple Format Support</h3>
                        <p className="text-sm text-muted-foreground">PDF, Excel, CSV, and text files supported</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Intelligent Extraction</h3>
                        <p className="text-sm text-muted-foreground">AI automatically identifies key financial metrics</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Batch Processing</h3>
                        <p className="text-sm text-muted-foreground">Upload multiple documents for comparative analysis</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <Image 
                    src="/placeholder.svg?height=400&width=600" 
                    alt="Document Upload Feature" 
                    width={600} 
                    height={400} 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <Upload className="h-4 w-4 text-white" />
                      <span className="text-sm font-medium text-white">Drag & drop your financial documents</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2: Stock Analysis */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden shadow-lg">
                  <Image 
                    src="/placeholder.svg?height=400&width=600" 
                    alt="Stock Analysis Feature" 
                    width={600} 
                    height={400} 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <LineChart className="h-4 w-4 text-white" />
                      <span className="text-sm font-medium text-white">Real-time stock data analysis</span>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <Badge className="mb-2">Feature</Badge>
                  <h2 className="text-3xl font-bold tracking-tight mb-4">Stock Ticker Analysis</h2>
                  <p className="text-muted-foreground mb-6">
                    Enter any stock ticker to get instant AI-powered analysis of financial performance and market position.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Real-time Data</h3>
                        <p className="text-sm text-muted-foreground">Access up-to-date financial metrics and market data</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Comparative Analysis</h3>
                        <p className="text-sm text-muted-foreground">Compare against industry averages and competitors</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Historical Trends</h3>
                        <p className="text-sm text-muted-foreground">View performance over time with interactive charts</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 3: AI Insights */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="mb-2">Feature</Badge>
                  <h2 className="text-3xl font-bold tracking-tight mb-4">AI-Powered Insights</h2>
                  <p className="text-muted-foreground mb-6">
                    Get expert-level analysis and recommendations generated by our advanced AI models.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Financial Ratio Analysis</h3>
                        <p className="text-sm text-muted-foreground">Automated calculation and interpretation of key ratios</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Growth Trend Identification</h3>
                        <p className="text-sm text-muted-foreground">Spot patterns and trends in financial performance</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Expert Recommendations</h3>
                        <p className="text-sm text-muted-foreground">AI-generated investment insights and considerations</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <Image 
                    src="/placeholder.svg?height=400&width=600" 
                    alt="AI Insights Feature" 
                    width={600} 
                    height={400} 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-white" />
                      <span className="text-sm font-medium text-white">AI-generated financial insights</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 4: Export & Integration */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden shadow-lg">
                  <Image 
                    src="/placeholder.svg?height=400&width=600" 
                    alt="Export & Integration Feature" 
                    width={600} 
                    height={400} 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <Code className="h-4 w-4 text-white" />
                      <span className="text-sm font-medium text-white">&lt;Integration with other platforms&gt;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
