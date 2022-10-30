import { Link } from "react-router-dom"

const NavBar = (props) => {
    const {title} = props;
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div className="container-fluid">
            <h2 className="navbar-brand">{title}</h2>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to={"/"}><button className="active btn btn-dark mx-2" aria-current="page">Home</button></Link>      
                    </li>
                    <li className="nav-item">
                    <Link to={"/"}><button className="btn btn-dark  mx-2" >Features</button></Link>                      
                    </li>
                    <li className="nav-item">
                    <Link to={"/"}><button className="btn btn-dark mx-2" >Pricing</button></Link>
                    </li>
                    <li className="nav-item">
                    <Link to={"/"}><button className="btn btn-dark  mx-2" >Disabled</button></Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>)
}

export default NavBar