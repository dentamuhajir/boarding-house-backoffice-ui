import Link from "next/link";
const menuItems = [
    { label: 'dashboard', path: '/dashboard'},
    

]
export default function sidebar() {
    return(
        <div className="flex-shrink-0 p-3 bg-white" >
            <a href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
            <svg className="bi me-2" width="30" height="24"></svg>
            <span className="fs-5 fw-semibold">Sidebar</span>
            </a>
            <ul className="list-unstyled ps-0">
            <li className="mb-1">
                <Link href='/dashboard' >
                    <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                    Dashboard
                    </button>
                </Link>
            </li>
            <li className="mb-1">
                <Link href='/dashboard/product'>
                    <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#product-collapse" aria-expanded="false">
                    Product
                    </button>
                </Link>
                <div className="collapse" id="product-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li>
                        <Link href='/dashboard/product/add'> Add </Link>
                    </li>
                    <li>
                        <Link href='/dashboard/product'> List </Link>
                    </li>
                </ul>
                </div>
            </li>
            <li className="border-top my-3"></li>
            <li className="mb-1">
                <Link href='/dashboard/account'>
                    <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                    Account
                    </button>
                </Link>
                <div className="collapse" id="account-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" className="link-dark rounded">Add account</a></li>
                    <li><a href="#" className="link-dark rounded">List account</a></li>
                </ul>
                </div>
            </li>
            </ul>
        </div>
    )
}