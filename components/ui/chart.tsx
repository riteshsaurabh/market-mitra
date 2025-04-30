"use client"

import { Bar, Line, Pie } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js"
import { useMemo } from "react"

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend)

export function Chart({ type, data, options, className }) {
  const chartType = useMemo(() => {
    switch (type) {
      case "line":
        return Line
      case "bar":
        return Bar
      case "pie":
        return Pie
      default:
        return Bar
    }
  }, [type])

  const ChartComponent = chartType

  return <ChartComponent data={data} options={options} className={className} />
}

export function ChartContainer({ children, className }) {
  return <div className={cn("relative", className)}>{children}</div>
}

export function ChartTooltip({ children }) {
  return <div className="absolute inset-0 flex items-center justify-center">{children}</div>
}

export function ChartTooltipContent({ children, className }) {
  return <div className={cn("bg-background/80 backdrop-blur-sm p-2 rounded-md shadow-md", className)}>{children}</div>
}

export function ChartLegend({ children }) {
  return <div className="flex flex-wrap gap-4 mt-4 justify-center">{children}</div>
}

export function ChartLegendContent({ label, color, className }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></div>
      <span className="text-sm">{label}</span>
    </div>
  )
}

export function ChartStyle({ children, className }) {
  return <div className={cn("", className)}>{children}</div>
}

function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}
