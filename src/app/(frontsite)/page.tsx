import Link from "next/link";

export default function homepage() {
    return (
        <>
            <h3 className="text-3xl font-bold underline">Homepage in frontsite</h3>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </>
    )
  }