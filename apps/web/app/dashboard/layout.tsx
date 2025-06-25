import { DashboardLayout } from "@/components/dashboard";
import { Navbar } from "@/components/dashboard/navbar";
import { DashboardProvider } from "@/components/providers/dashboard-provider";
import { NextAuthProvider } from "@/components/providers/nextauth-provider";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <NextAuthProvider>
      <DashboardProvider>
        <DashboardLayout>
          <main>
            <Navbar />
            {children}
          </main>
        </DashboardLayout>
      </DashboardProvider>
    </NextAuthProvider>
  );
};
export default Layout;
