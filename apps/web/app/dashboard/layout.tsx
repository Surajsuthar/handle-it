import { AppSidebar } from "@/components/app-sidebar"
import { DashboardProvider } from "@/components/dashboard/dashboard-layout"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import React from "react"

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout = ({
  children
}: DashboardLayoutProps) => {
  return (
    <DashboardProvider>
      <div>
        hello
      </div>
    </DashboardProvider>
  )
}
export default DashboardLayout