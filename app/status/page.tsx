/**
 * Market Mitra - Status Report Page
 *
 * This page provides a comprehensive view of the application's health and performance.
 * It checks the loading status and speed of all pages and reports any errors encountered.
 *
 * Features:
 * - Real-time status checking of all application routes
 * - Performance metrics including load time and success rate
 * - Detailed error reporting
 * - Filtering options for viewing all pages, errors, or slow-loading pages
 */

"use client"

import { useState, useEffect } from "react"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, CheckCircle, Clock, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * Routes to check in the status report
 * Each route has a path and display name
 */
const routes = [
  { path: "/", name: "Home" },
  { path: "/features", name: "Features" },
  { path: "/demo", name: "Demo" },
  { path: "/signin", name: "Sign In" },
  { path: "/signup", name: "Sign Up" },
  { path: "/dashboard", name: "Dashboard" },
  { path: "/dashboard/insights", name: "Insights" },
  { path: "/dashboard/reports", name: "Reports" },
  { path: "/dashboard/history", name: "History" },
  { path: "/connect", name: "Connect" },
]

/**
 * Status type definition for route checking
 * Tracks the status, load time, error message, and last check time for each route
 */
type RouteStatus = {
  path: string
  name: string
  status: "loading" | "success" | "error"
  loadTime: number | null
  error: string | null
  lastChecked: Date | null
}

export default function StatusPage() {
  // State for tracking route statuses
  const [routeStatuses, setRouteStatuses] = useState<RouteStatus[]>(
    routes.map((route) => ({
      ...route,
      status: "loading",
      loadTime: null,
      error: null,
      lastChecked: null,
    })),
  )

  // State for tracking if checks are in progress
  const [isChecking, setIsChecking] = useState(true)

  // Overall system status state
  const [overallStatus, setOverallStatus] = useState<"operational" | "degraded" | "outage">("operational")

  // Last update timestamp
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  /**
   * Checks a single route's status
   *
   * @param path - The route path to check
   * @returns Promise with route status information
   */
  const checkRoute = async (path: string): Promise<Partial<RouteStatus>> => {
    const startTime = performance.now()
    try {
      // Attempt to fetch the route
      const response = await fetch(path, { method: "HEAD" })
      const endTime = performance.now()
      const loadTime = Math.round(endTime - startTime)

      if (!response.ok) {
        return {
          status: "error",
          loadTime,
          error: `HTTP error: ${response.status}`,
          lastChecked: new Date(),
        }
      }

      return {
        status: "success",
        loadTime,
        error: null,
        lastChecked: new Date(),
      }
    } catch (error) {
      const endTime = performance.now()
      const loadTime = Math.round(endTime - startTime)
      return {
        status: "error",
        loadTime,
        error: error instanceof Error ? error.message : "Unknown error",
        lastChecked: new Date(),
      }
    }
  }

  /**
   * Checks all routes and updates their status
   * Also determines the overall system status based on results
   */
  const checkAllRoutes = async () => {
    setIsChecking(true)

    const updatedStatuses = [...routeStatuses]
    let hasErrors = false
    let slowPages = 0

    // Check each route sequentially
    for (let i = 0; i < routes.length; i++) {
      const route = routes[i]
      updatedStatuses[i] = {
        ...updatedStatuses[i],
        status: "loading",
      }
      setRouteStatuses([...updatedStatuses])

      try {
        const result = await checkRoute(route.path)
        updatedStatuses[i] = {
          ...updatedStatuses[i],
          ...result,
        }

        if (result.status === "error") {
          hasErrors = true
        } else if (result.loadTime && result.loadTime > 1000) {
          slowPages++
        }

        setRouteStatuses([...updatedStatuses])
      } catch (error) {
        updatedStatuses[i] = {
          ...updatedStatuses[i],
          status: "error",
          error: error instanceof Error ? error.message : "Unknown error",
          lastChecked: new Date(),
        }
        hasErrors = true
        setRouteStatuses([...updatedStatuses])
      }
    }

    // Determine overall status based on results
    if (hasErrors) {
      setOverallStatus("outage")
    } else if (slowPages > 0) {
      setOverallStatus("degraded")
    } else {
      setOverallStatus("operational")
    }

    setLastUpdated(new Date())
    setIsChecking(false)
  }

  // Run check on initial load
  useEffect(() => {
    checkAllRoutes()
  }, [])

  /**
   * Calculates statistics from route status results
   *
   * @returns Object with average load time and success rate
   */
  const calculateStats = () => {
    const completedChecks = routeStatuses.filter((r) => r.status !== "loading")
    if (completedChecks.length === 0) return { avgLoadTime: 0, successRate: 0 }

    const totalLoadTime = completedChecks.reduce((sum, route) => sum + (route.loadTime || 0), 0)
    const avgLoadTime = Math.round(totalLoadTime / completedChecks.length)

    const successfulChecks = completedChecks.filter((r) => r.status === "success").length
    const successRate = Math.round((successfulChecks / completedChecks.length) * 100)

    return { avgLoadTime, successRate }
  }

  const stats = calculateStats()

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />

      <div className="flex-1 container py-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">System Status</h1>
            <p className="text-muted-foreground">Real-time performance monitoring for Market Mitra</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Badge
                className={
                  overallStatus === "operational"
                    ? "bg-green-500"
                    : overallStatus === "degraded"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                }
              >
                {overallStatus === "operational"
                  ? "All Systems Operational"
                  : overallStatus === "degraded"
                    ? "Performance Degraded"
                    : "System Outage"}
              </Badge>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={checkAllRoutes}
              disabled={isChecking}
              className="flex items-center gap-2"
            >
              <RefreshCw className={`h-4 w-4 ${isChecking ? "animate-spin" : ""}`} />
              Refresh
            </Button>
          </div>
        </div>

        <div className="grid gap-6">
          {/* Status Overview */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Status Overview</CardTitle>
              <CardDescription>
                Last updated: {lastUpdated ? lastUpdated.toLocaleString() : "Checking..."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-2">
                  <div className="text-sm font-medium text-muted-foreground">Success Rate</div>
                  <div className="flex items-baseline gap-2">
                    <div className="text-3xl font-bold">{stats.successRate}%</div>
                    <div className="text-sm text-muted-foreground">of pages loaded successfully</div>
                  </div>
                  <Progress value={stats.successRate} className="h-2" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm font-medium text-muted-foreground">Average Load Time</div>
                  <div className="flex items-baseline gap-2">
                    <div className="text-3xl font-bold">{stats.avgLoadTime}ms</div>
                    <div className="text-sm text-muted-foreground">across all pages</div>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full ${stats.avgLoadTime < 300 ? "bg-green-500" : stats.avgLoadTime < 1000 ? "bg-yellow-500" : "bg-red-500"}`}
                      style={{ width: `${Math.min(100, (stats.avgLoadTime / 2000) * 100)}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm font-medium text-muted-foreground">Pages Checked</div>
                  <div className="flex items-baseline gap-2">
                    <div className="text-3xl font-bold">{routes.length}</div>
                    <div className="text-sm text-muted-foreground">total routes monitored</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Status */}
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Pages</TabsTrigger>
              <TabsTrigger value="errors">Errors</TabsTrigger>
              <TabsTrigger value="slow">Slow Pages</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>All Pages</CardTitle>
                  <CardDescription>Status of all monitored pages</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-12 p-3 text-sm font-medium text-muted-foreground bg-muted/50">
                      <div className="col-span-4">Page</div>
                      <div className="col-span-2">Status</div>
                      <div className="col-span-2">Load Time</div>
                      <div className="col-span-4">Last Checked</div>
                    </div>
                    <div className="divide-y">
                      {routeStatuses.map((route, index) => (
                        <div key={index} className="grid grid-cols-12 p-3 text-sm">
                          <div className="col-span-4 font-medium">
                            {route.name} <span className="text-muted-foreground">({route.path})</span>
                          </div>
                          <div className="col-span-2">
                            {route.status === "loading" && (
                              <div className="flex items-center gap-1.5">
                                <Clock className="h-4 w-4 text-muted-foreground animate-pulse" />
                                <span>Checking</span>
                              </div>
                            )}
                            {route.status === "success" && (
                              <div className="flex items-center gap-1.5">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span>Operational</span>
                              </div>
                            )}
                            {route.status === "error" && (
                              <div className="flex items-center gap-1.5">
                                <AlertCircle className="h-4 w-4 text-red-500" />
                                <span>Error</span>
                              </div>
                            )}
                          </div>
                          <div className="col-span-2">
                            {route.loadTime !== null ? (
                              <span
                                className={
                                  route.loadTime < 300
                                    ? "text-green-500"
                                    : route.loadTime < 1000
                                      ? "text-yellow-500"
                                      : "text-red-500"
                                }
                              >
                                {route.loadTime}ms
                              </span>
                            ) : (
                              <span className="text-muted-foreground">-</span>
                            )}
                          </div>
                          <div className="col-span-4 text-muted-foreground">
                            {route.lastChecked ? route.lastChecked.toLocaleString() : "-"}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="errors">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Errors</CardTitle>
                  <CardDescription>Pages with loading errors</CardDescription>
                </CardHeader>
                <CardContent>
                  {routeStatuses.filter((r) => r.status === "error").length === 0 ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-1">No Errors Detected</h3>
                      <p className="text-muted-foreground">All pages are loading correctly</p>
                    </div>
                  ) : (
                    <div className="rounded-md border">
                      <div className="grid grid-cols-12 p-3 text-sm font-medium text-muted-foreground bg-muted/50">
                        <div className="col-span-3">Page</div>
                        <div className="col-span-3">Error</div>
                        <div className="col-span-2">Load Time</div>
                        <div className="col-span-4">Last Checked</div>
                      </div>
                      <div className="divide-y">
                        {routeStatuses
                          .filter((route) => route.status === "error")
                          .map((route, index) => (
                            <div key={index} className="grid grid-cols-12 p-3 text-sm">
                              <div className="col-span-3 font-medium">
                                {route.name} <span className="text-muted-foreground">({route.path})</span>
                              </div>
                              <div className="col-span-3 text-red-500">{route.error || "Unknown error"}</div>
                              <div className="col-span-2 text-red-500">{route.loadTime}ms</div>
                              <div className="col-span-4 text-muted-foreground">
                                {route.lastChecked ? route.lastChecked.toLocaleString() : "-"}
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="slow">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Slow Pages</CardTitle>
                  <CardDescription>Pages with load times over 1000ms</CardDescription>
                </CardHeader>
                <CardContent>
                  {routeStatuses.filter((r) => r.status === "success" && r.loadTime && r.loadTime > 1000).length ===
                  0 ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-1">No Slow Pages Detected</h3>
                      <p className="text-muted-foreground">All pages are loading within acceptable time limits</p>
                    </div>
                  ) : (
                    <div className="rounded-md border">
                      <div className="grid grid-cols-12 p-3 text-sm font-medium text-muted-foreground bg-muted/50">
                        <div className="col-span-4">Page</div>
                        <div className="col-span-4">Load Time</div>
                        <div className="col-span-4">Last Checked</div>
                      </div>
                      <div className="divide-y">
                        {routeStatuses
                          .filter((route) => route.status === "success" && route.loadTime && route.loadTime > 1000)
                          .sort((a, b) => (b.loadTime || 0) - (a.loadTime || 0))
                          .map((route, index) => (
                            <div key={index} className="grid grid-cols-12 p-3 text-sm">
                              <div className="col-span-4 font-medium">
                                {route.name} <span className="text-muted-foreground">({route.path})</span>
                              </div>
                              <div className="col-span-4 text-yellow-500">{route.loadTime}ms</div>
                              <div className="col-span-4 text-muted-foreground">
                                {route.lastChecked ? route.lastChecked.toLocaleString() : "-"}
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}
