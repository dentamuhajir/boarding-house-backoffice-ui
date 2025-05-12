import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product | CMS",
  description: "description for product",
};
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