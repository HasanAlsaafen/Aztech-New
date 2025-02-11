import { useEffect, useRef } from "react";
import hello from "../images/hello.svg";
const ContactSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="contact-section position-relative overflow-hidden py-5 align-items-center"
      id="contact"
      ref={sectionRef}
    >
      <div className="dots-container">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="animated-dot"></div>
        ))}
      </div>

      <div className="container">
        <div className="row content-wrapper align-items-center">
          <div className="left-section col-12 col-md-6 animate-left position-relative">
            <div className="gradient-overlay"></div>
            <h1 className="display-4">Hello!</h1>
            <p className="lead">Your gateway to smart solutions.</p>
            <img
              src={hello}
              alt="Robot Hand"
              className="img-fluid robot-hand"
            />
          </div>

          <div className="right-section col-12 col-md-6 animate-right">
            <h2 className="mb-3">
              Choose <span className="text-primary">The Best</span> IT Service
              Company
            </h2>
            <p>
              A &amp; Z Technology, established in 2023 in Riyadh, Saudi Arabia,
              is a leading provider of electromechanical, networking, and IT
              solutions.
            </p>
            <div className="contact-box mt-4">
              <a href="#" className="contact-btn btn btn-primary">
                Contact Us
              </a>
              <span className="phone ms-3">📞 (+0966 542 278 289)</span>
            </div>
            <div className="contact-box mt-4">
              <a href="#" className="contact-btn btn btn-primary">
                Contact Us
              </a>
              <span className="phone ms-3">📧 omar@aztech-ksa.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
