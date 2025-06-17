"use client"
import { useIsMobile } from "@/hooks/use-mobile"
import React from "react"

interface DashboardProviderProps {
    children: React.ReactNode
}

export const DashboardProvider = ({
    children
}: DashboardProviderProps) => {
    const ismobile = useIsMobile()

    return (
       <section className="w-full h-full relative">
            <section
            className="m-1.5 fixed w-68 bg-amber-400 rounded-xl h-full "
            >
                
            </section>

       </section>
    )   
}
