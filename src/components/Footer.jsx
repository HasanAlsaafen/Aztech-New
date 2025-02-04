import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const yearRef = useRef(null);

  useEffect(() => {
    if (yearRef.current) {
      yearRef.current.textContent = new Date().getFullYear();
    }
  }, []);

  const socialLinks = [
    { icon: faFacebookF, url: "#" },
    { icon: faTwitter, url: "#" },
    { icon: faLinkedinIn, url: "#" },
    { icon: faInstagram, url: "#" },
  ];

  const quickLinks = [
    { text: "About Us", url: "#" },
    { text: "Services", url: "#" },
    { text: "Portfolio", url: "#" },
    { text: "Careers", url: "#" },
  ];

  return (
    <footer className="bg-dark text-white pt-5 position-relative">
      <div className="container position-relative">
        <div className="row g-4 g-lg-5">
          {/* Contact Information Section */}
          <div className="col-lg-4 col-md-6">
            <div className="pe-lg-4">
              <h5 className="text-uppercase mb-4 h6">Contact Us</h5>
              <ul className="list-unstyled mb-4">
                <ContactItem
                  icon={faEnvelope}
                  content={
                    <a href="mailto:221141@ppu.edu.ps" className="link-light">
                      221141@ppu.edu.ps
                    </a>
                  }
                />
                <ContactItem
                  icon={faPhone}
                  content={
                    <a href="tel:+970592935904" className="link-light">
                      +970 592 935 904
                    </a>
                  }
                />
                <ContactItem
                  icon={faMapMarkerAlt}
                  content="123 Main St, Palestine"
                />
              </ul>
              <div className="d-flex gap-3 social-links">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="text-white text-decoration-none transition"
                    aria-label={link.icon.iconName}
                  >
                    <FontAwesomeIcon
                      icon={link.icon}
                      className="fs-5 hover-scale"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="col-lg-2 col-md-6">
            <h5 className="text-uppercase mb-4 h6">Quick Links</h5>
            <ul className="list-unstyled">
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={link.url}
                    className="text-white text-decoration-none hover-underline"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Location Section */}
          <div className="col-lg-6 col-md-12">
            <h5 className="text-uppercase mb-4 h6">Our Location</h5>
            <div className="ratio ratio-16x9 shadow-lg rounded-3 overflow-hidden bg-secondary">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435357.2765092885!2d34.55162528028704!3d31.4178592258711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14fd844104b258a9%3A0xfddcb14b194be89e!2sRiadh!5e0!3m2!1sen!2s!4v1716810306722!5m2!1sen!2s"
                className="border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Interactive map showing company location"
              />
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-top border-secondary mt-5 pt-4">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p className="mb-0 small">
                &copy; <span ref={yearRef}>2025</span> AZTECH. All rights
                reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <ul className="list-inline mb-0">
                <FooterLink text="Privacy Policy" url="#" />
                <li className="list-inline-item mx-2 text-muted">•</li>
                <FooterLink text="Terms of Service" url="#" />
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hover-scale {
          transition: transform 0.2s ease-in-out;
        }
        .hover-scale:hover {
          transform: translateY(-2px) scale(1.1);
        }
        .hover-underline {
          position: relative;
          padding-bottom: 2px;
        }
        .hover-underline::after {
          content: "";
          position: absolute;
          width: 0;
          height: 1px;
          bottom: 0;
          left: 0;
          background-color: currentColor;
          transition: width 0.3s ease;
        }
        .hover-underline:hover::after {
          width: 100%;
        }
        .transition {
          transition: opacity 0.2s ease;
        }
        .transition:hover {
          opacity: 0.8;
        }
      `}</style>
    </footer>
  );
};

// Reusable Components
const ContactItem = ({ icon, content }) => (
  <li className="mb-3 d-flex align-items-center gap-3">
    <FontAwesomeIcon icon={icon} className="text-primary" fixedWidth />
    <span className="text-truncate">{content}</span>
  </li>
);

const FooterLink = ({ text, url }) => (
  <li className="list-inline-item">
    <a
      href={url}
      className="text-white text-decoration-none small hover-underline"
    >
      {text}
    </a>
  </li>
);

export default Footer;
