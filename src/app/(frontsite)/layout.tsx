export default function FrontsiteLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>        
        <header>This is header for frontsite section</header>
          {children}
        <footer>This is footer for frontsite section</footer>
        </>
    );
  }