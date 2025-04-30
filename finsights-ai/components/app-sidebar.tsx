"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, FileText, Home, LineChart, Settings, History, Upload, LogOut, HelpCircle } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: Home,
      active: pathname === "/dashboard",
    },
    {
      href: "/dashboard/insights",
      label: "Insights",
      icon: BarChart3,
      active: pathname === "/dashboard/insights",
    },
    {
      href: "/dashboard/reports",
      label: "Reports",
      icon: FileText,
      active: pathname === "/dashboard/reports",
    },
    {
      href: "/dashboard/history",
      label: "History",
      icon: History,
      active: pathname === "/dashboard/history",
    },
    {
      href: "/dashboard/upload",
      label: "Upload",
      icon: Upload,
      active: pathname === "/dashboard/upload",
    },
  ]

  const bottomRoutes = [
    {
      href: "/dashboard/settings",
      label: "Settings",
      icon: Settings,
      active: pathname === "/dashboard/settings",
    },
    {
      href: "/dashboard/help",
      label: "Help & Support",
      icon: HelpCircle,
      active: pathname === "/dashboard/help",
    },
  ]

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-between p-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="bg-primary rounded-md p-1">
            <LineChart className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold">Market Mitra</span>
        </Link>
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {routes.map((route) => (
            <SidebarMenuItem key={route.href}>
              <SidebarMenuButton asChild isActive={route.active} tooltip={route.label}>
                <Link href={route.href}>
                  <route.icon className="h-5 w-5" />
                  <span>{route.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          {bottomRoutes.map((route) => (
            <SidebarMenuItem key={route.href}>
              <SidebarMenuButton asChild isActive={route.active} tooltip={route.label}>
                <Link href={route.href}>
                  <route.icon className="h-5 w-5" />
                  <span>{route.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Sign Out">
              <Link href="/">
                <LogOut className="h-5 w-5" />
                <span>Sign Out</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
