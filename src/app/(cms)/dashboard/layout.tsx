
import Header from "./components/header";
import Sidebar from "./components/sidebar/sidebar";
export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
          <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
            <Sidebar/>
            <div className="h-screen flex-grow-1 overflow-y-lg-auto">
              <Header />  
            </div>
          </div>
        </>
    );
  }