import Link from "next/link";

export default function dashboard() {
    return (
    <>This is dashboard section
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