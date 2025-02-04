import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-gradient sticky-top shadow-sm py-3 glass-navbar">
      <div className="container-fluid">
        {/* Logo */}
        <a
          className="navbar-brand d-flex align-items-center text-decoration-none"
          href="#"
        >
          <div className="logo-container">
            <img
              src="/src/assets/logo.png"
              alt="Aztech Logo"
              className="logo img-fluid"
            />
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

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link px-3 active" href="#" id="nav-home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#services" id="nav-services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#contact" id="nav-contact">
                Contact Us
              </a>
            </li>
          </ul>

          {/* Search Bar */}
          <div className="d-flex align-items-center search-box position-relative">
            <input
              type="text"
              className="form-control rounded-pill px-4 search-input"
              placeholder="Search"
              aria-label="Search"
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            <div className="search-results position-absolute w-100 bg-white shadow-sm d-none"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
