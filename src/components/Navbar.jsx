import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-gradient sticky-top shadow-sm py-3 glass-navbar ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <div className="logo-container">
            <img src={logo} alt="Aztech Logo" className="logo img-fluid" />
          </div>
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links and Search */}

        <div className="collapse navbar-collapse m-2" id="navbarNav">
          <ul className="navbar-nav  ">
            <li className="nav-item">
              <Link className="nav-link active" to="" id="nav-home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/services" id="nav-services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/contact" id="nav-contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
