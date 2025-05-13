
import Header from "./components/header";
import Sidebar from "./components/sidebar/sidebar";
export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
          <Header/>
          <div className='container-100'>
            <div className="row">
              <div className="col-2">
                <Sidebar/>
              </div>
              <div className="col-10">
                { children }
              </div>
          </div>
        </div>
        </>
    );
  }