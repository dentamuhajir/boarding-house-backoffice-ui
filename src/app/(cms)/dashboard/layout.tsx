export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>        
        <header>This is header for dashboard section</header>
          {children}
        <footer>This is footer for dashboard section</footer>
        </>
    );
  }