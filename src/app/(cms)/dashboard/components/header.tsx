import Image from 'next/image'
import Link from 'next/link'
export default function Header() {
    return (    
            <>
                <nav className="navbar navbar-light bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="#">                   
                            <Image
                            src="/images/logo/kostfinder.png"
                            alt="Kost Finder Logo"
                            width={60} 
                            height={24}
                            />
                        </a>
                    </div>
                </nav>
            </>
    )
}
