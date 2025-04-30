export default function ProductLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
            <h6>From Product Layout</h6>
            { children }
        </>
    );
}