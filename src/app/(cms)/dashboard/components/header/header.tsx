import styles from "./header.module.css"
export default function Header() {
    return (    
            <>
            <header className={`bg-surface-primary border-bottom pt-6 pb-6 ${ styles.header }`}>
                <div className="container-fluid">
                    <div className="mb-npx">
                        <div className="row align-items-center">
                            <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                                
                                <h1 className="h2 mb-0 ls-tight">Dashboard</h1>
                            </div>
                            
                            <div className="col-sm-6 col-12 text-sm-end">
                                <div className="mx-n1">
                                    
                                <span className="position-relative pe-2">
                                    <i className="bi bi-bell"></i>
                                    {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        9
                                        <span className="visually-hidden">unread messages</span>
                                    </span> */}
                                </span>            
                                    <a href="#" className="btn d-inline-flex btn-sm btn-neutral border-base mx-1">
                                        <span className=" pe-2">
                                            <i className="bi bi-pencil"></i>
                                        </span>
                                        <span>Edit</span>
                                    </a>
                                    <a href="#" className="btn d-inline-flex btn-sm btn-primary mx-1">
                                        <span className=" pe-2">
                                            <i className="bi bi-plus"></i>
                                        </span>
                                        <span>Create</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        {/* <ul className="nav nav-tabs mt-4 overflow-x border-0">
                            <li className="nav-item ">
                                <a href="#" className="nav-link active">All files</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link font-regular">Shared</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link font-regular">File requests</a>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </header>
            </>
    )
}
