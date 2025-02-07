import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <header className="header elegant-header py-2">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          {/* Contact Info */}
          <div className="d-flex align-items-center">
            <a
              href="tel:+0966542278289"
              className="text-decoration-none text-muted hover-accent"
            >
              <FontAwesomeIcon icon={faPhone} className="me-2 fs-6" />
              <span className="d-none d-md-inline">(+ 0966 542 278 289)</span>
            </a>

            <span className="mx-3 text-muted d-none d-sm-inline">|</span>

            <a
              href="mailto:info@aztech.com"
              className="text-decoration-none text-muted hover-accent"
            >
              <FontAwesomeIcon icon={faEnvelope} className="me-2 fs-6" />
              <span className="d-none d-md-inline">info@aztech.com</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="d-flex">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover-accent social-link"
            >
              <FontAwesomeIcon icon={faFacebookF} className="fs-6 mx-3" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover-accent social-link"
            >
              <FontAwesomeIcon icon={faTwitter} className="fs-6 mx-3" />
            </a>
            <a
              href="https://www.linkedin.com/company/a-and-z-technology-ksa/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover-accent social-link"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="fs-6 mx-3" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
