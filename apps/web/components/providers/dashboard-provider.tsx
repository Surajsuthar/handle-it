"use client"
import SidebarContext from "@/context/sidebar-context"
import { useIsMobile } from "@/hooks/use-mobile"
import React, { ReactNode, useMemo, useState } from "react"

interface DashboardProviderProps {
    children: ReactNode;
}

export const DashboardProvider = ({
    children
}: DashboardProviderProps) => {
    
    const isMobile = useIsMobile()
    const [open, setOpen] = useState<boolean>(true) 
    const state: "expanded" | "collapsed" = open ? "expanded" : "collapsed"

    const toggleSidebar = React.useCallback(() => {
        setOpen((open) => !open)
    }, [isMobile, open])

    const contextValue = useMemo(() => ({
        isMobile,
        open,
        setOpen,
        state,
        toggleSidebar
    }), [isMobile, open, state, toggleSidebar])

    return (
        <SidebarContext.Provider value={contextValue}>
            {children}
        </SidebarContext.Provider>
    )
}
