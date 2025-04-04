import Link from "next/link";

export default function homepage() {
    return (
        <>
            <h3>Homepage in frontsite</h3>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/dashboard">CMS</Link>
                </li>
            </ul>
        </>
    )
  }