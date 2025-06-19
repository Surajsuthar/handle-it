import { DashboardLayout } from "@/components/dashboard"
import { Navbar } from "@/components/dashboard/navbar"
import { DashboardProvider } from "@/components/providers/dashboard-provider"


interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({
  children
}: LayoutProps) => {
  return (
    <DashboardProvider>
      <DashboardLayout>
        <main>
          <Navbar/>
          {children}
        </main>
      </DashboardLayout>
    </DashboardProvider>
  )
}
export default Layout