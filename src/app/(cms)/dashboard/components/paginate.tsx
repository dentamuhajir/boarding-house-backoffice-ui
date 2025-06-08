export default function Paginate({totalPage}: any) {


    let pageNumber = []
    for(let i = 0 ; i < totalPage; i++ ) {
        pageNumber.push(
            <li key={i} className="page-item">
                <a className="page-link" href="#">{i + 1}</a>
            </li>
        )
    }

    return (
                <nav className="col d-flex align-items-center justify-content-center" aria-label="...">
                    <ul className="pagination">
                        <li className="page-item disabled">
                            <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">Prev</a>
                        </li>
                        { pageNumber }
                        {/* <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item active" aria-current="page">
                        <a className="page-link" href="#">2</a>
                        </li> */}
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            )
}