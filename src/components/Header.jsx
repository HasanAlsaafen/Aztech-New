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
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover-accent social-link"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="fs-6 mx-3" />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .elegant-header {
          background: #f8f9fa;
          border-bottom: 1px solid #e9ecef;
        }
        
        .hover-accent {
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-accent:hover {
          color: #2d3436 !important;
          transform: translateY(-1px);
        }
        
        .social-link:hover svg {
          transform: scale(1.15);
        }
      `}</style>
    </header>
  );
};

export default Header;
