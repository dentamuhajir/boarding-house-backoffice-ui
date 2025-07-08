import Image from "next/image";
import Link from "next/link";
const menuItems = [
    { label: 'dashboard', path: '/dashboard'},
]
export default function sidebar() {
    return(
        <nav className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
            <div className="container-fluid">
                
                <button className="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <a className="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="#">
                    <Image
                        src="/images/logo/kostfinder-no-bg.png"
                        alt="Kost Finder Logo"
                        width={100} 
                        height={24}
                    />
                </a>
                
                <div className="navbar-user d-lg-none">
                    
                    <div className="dropdown">
                        
                        <a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="avatar-parent-child">
                                <img alt="Image Placeholder" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar- rounded-circle"/>
                                <span className="avatar-child avatar-badge bg-success"></span>
                            </div>
                        </a>
                        
                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
                            <a href="#" className="dropdown-item">Profile</a>
                            <a href="#" className="dropdown-item">Settings</a>
                            <a href="#" className="dropdown-item">Billing</a>
                            <hr className="dropdown-divider"/>
                            <a href="#" className="dropdown-item">Logout</a>
                        </div>
                    </div>
                </div>
                
                <div className="collapse navbar-collapse" id="sidebarCollapse">
                    
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" href='/dashboard'>
                                <i className="bi bi-graph-up"></i> Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href='/dashboard/users'>
                                <i className="bi bi-people"></i> Users Management
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="bi bi-house"></i> Property Management
                                <span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">6</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="bi bi-calendar2-month"></i> Booking Management
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="bi bi-credit-card-2-back"></i> Bill & Payment
                            </a>
                        </li>
                    </ul>
                    
                    
                    <div className="mt-auto"></div>
                    
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="bi bi-person-square"></i> Account
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="bi bi-box-arrow-left"></i> Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
   
    )
}