import Link from 'next/link'
export default function Header() {

    return (
    
        <header>
            <div className="flex gap-5 px-10">
                <div className="flex items-center gap-3">
                    <img className= "h-10 w-auto object-cover ..." src="https://www.maybank.co.id/-/media/Feature/Content/External-Link/logo-maybank-fin.png?h=174&iar=0&w=440&hash=509119DDFBF907B1EB89D8920E864065" />
                    <span>My Apps</span>
                </div>
                <nav className="flex items-center gap-2">
                    <Link href="/" className="hover:text-yellow-500 rounded">
                    Home
                    </Link>
                    <Link href="/about" className="hover:text-yellow-500">
                    About
                    </Link>
                    <Link href="/dashboard" className="hover:text-yellow-500">
                    dashboard
                    </Link>
                </nav>
            </div>

        </header>

    )
}