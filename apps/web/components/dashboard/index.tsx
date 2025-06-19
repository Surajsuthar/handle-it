"use client"
import { useSidebar } from "@/hooks/useSidebar"
import { cn } from "@/lib/utils"
import React from "react"
import { Sidebar } from "../app-sidebar/sidebar-menu"

const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "3.5rem"
const SIDEBAR_WIDTH_ICON = "3rem"

interface DashboardLayoutProps {
  children: React.ReactNode
  className?: string 
}

export const DashboardLayout = ({
  children,
  className
}: DashboardLayoutProps ) => {
  const { isMobile, open, state } = useSidebar()
  
  const getSidebarWidth = () => {
    if (isMobile) {
      return open ? SIDEBAR_WIDTH_MOBILE : "3.5rem"
    }
    return open ? SIDEBAR_WIDTH : SIDEBAR_WIDTH_ICON
  }
  
  return (
    <main className="m-1 h-full w-full flex relative">
      <aside
        className={cn(
          "fixed left-1 top-1 h-[calc(100%-0.5rem)] transition-all duration-200 ease-in-out border rounded-md shadow-sm flex flex-col justify-between items-center z-10",
          className
        )}
        style={{ width: getSidebarWidth() }}
      >
        <Sidebar/>
      </aside>

      <section 
        className="fixed right-1 top-1 bottom-1 border rounded-md shadow-sm transition-all duration-200 ease-in-out overflow-hidden"
        style={{ 
          left: `calc(${getSidebarWidth()} + 0.875rem)`
        }}
      >
        <div className="h-full overflow-y-auto p-2">
          {children}
        </div>
      </section>
    </main>
  )
}