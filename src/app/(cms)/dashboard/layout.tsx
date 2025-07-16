
import { SidebarProvider } from "@/context/SidebarContext";
import Dashboard from "./components/dashboard";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
          
          <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
            <SidebarProvider>
            <Sidebar/>
            <div className="h-screen flex-grow-1 overflow-y-lg-auto">
              <Header />  
              <main className="py-6 bg-surface-secondary">
                <div className="container-fluid">
                  <Dashboard />
                  { children }
                </div>
              </main>
            </div>
            </SidebarProvider>
          </div>
        </>
    );
  }