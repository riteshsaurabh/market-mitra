"use client"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js"
import { Bar, Line, Pie } from "react-chartjs-2"
import { ReactNode } from "react"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { useMemo } from "react"
import { cn } from "@/lib/utils"

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend)

function cn(...inputs: string[]) {
  return twMerge(clsx(inputs))
}

interface BaseChartProps {
  className?: string
}

interface BarChartProps extends BaseChartProps {
  data: ChartData<"bar">
  options?: ChartOptions<"bar">
}

interface LineChartProps extends BaseChartProps {
  data: ChartData<"line">
  options?: ChartOptions<"line">
}

interface PieChartProps extends BaseChartProps {
  data: ChartData<"pie">
  options?: ChartOptions<"pie">
}

interface ChartContainerProps {
  children: ReactNode
  className?: string
}

interface ChartHeaderProps {
  children: ReactNode
  className?: string
}

interface ChartTitleProps {
  children: ReactNode
  className?: string
}

interface ChartLegendProps {
  children: ReactNode
}

interface ChartLegendItemProps {
  label: string
  color: string
  className?: string
}

interface ChartContentProps {
  children: ReactNode
  className?: string
}

interface ChartTooltipProps {
  children: ReactNode
}

interface ChartTooltipContentProps {
  children: ReactNode
  className?: string
}

interface ChartStyleProps {
  children: ReactNode
  className?: string
}

export function Chart({ type, data, options, className }: ChartProps) {
  const ChartComponent = useMemo(() => {
    switch (type) {
      case 'bar':
        return Bar
      case 'line':
        return Line
      case 'pie':
      case 'doughnut':
        return Pie
      default:
        return Bar
    }
  }, [type])

  return (
    <ChartContainer className={className}>
      <ChartComponent data={data} options={options} />
    </ChartContainer>
  )
}

export function ChartContainer({ children, className }: ChartContainerProps) {
  return <div className={cn("w-full h-full", className)}>{children}</div>
}

export function ChartHeader({ children, className }: ChartHeaderProps) {
  return <div className={cn(className)}>{children}</div>
}

export function ChartTitle({ children, className }: ChartTitleProps) {
  return <h2 className={cn(className)}>{children}</h2>
}

export function ChartLegend({ children }: ChartLegendProps) {
  return <div className="flex items-center gap-2">{children}</div>
}

export function ChartLegendItem({ label, color, className }: ChartLegendItemProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></div>
      <span className="text-sm">{label}</span>
    </div>
  )
}

export function ChartContent({ children, className }: ChartContentProps) {
  return <div className={cn(className)}>{children}</div>
}

export function ChartTooltip({ children }: ChartTooltipProps) {
  return <div className="bg-background border rounded-md shadow-lg p-2">{children}</div>
}

export function ChartTooltipContent({ children, className }: ChartTooltipContentProps) {
  return <div className={cn("text-sm", className)}>{children}</div>
}

export function ChartStyle({ children, className }: ChartStyleProps) {
  return <div className={cn("w-full h-full", className)}>{children}</div>
}

export function BarChart({ data, options, className }: BarChartProps) {
  return (
    <ChartContainer className={className}>
      <Bar data={data} options={options} />
    </ChartContainer>
  )
}

export function LineChart({ data, options, className }: LineChartProps) {
  return (
    <ChartContainer className={className}>
      <Line data={data} options={options} />
    </ChartContainer>
  )
}

export function PieChart({ data, options, className }: PieChartProps) {
  return (
    <ChartContainer className={className}>
      <Pie data={data} options={options} />
    </ChartContainer>
  )
}

export function ChartLegendContent({ label, color, className }: ChartLegendItemProps) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
      <span className="text-sm">{label}</span>
    </div>
  )
}
