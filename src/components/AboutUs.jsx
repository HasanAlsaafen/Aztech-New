import { useEffect, useRef, useState } from "react";
import aboutImage from "/src/assets/About-us.svg";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutUs() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about-us"
      className={`container py-5 about-us-section ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <img src={aboutImage} alt="About Us" className="img-fluid" />
        </div>

        <div className="col-md-6 text-center text-md-start">
          <h2 className="mb-4">About Us</h2>
          <p>
            A &amp; Z Technology, established in 2023 in Riyadh, Saudi Arabia,
            is a leading provider of electromechanical, networking, and IT
            solutions. The company is dedicated to delivering integrated
            networking solutions that empower clients to generate accurate,
            timely, and detailed reports, enabling managers to make effective
            decisions.
          </p>
          <p>
            Since its inception, A &amp; Z Technology has built a strong
            reputation and a solid foundation in the electromechanical, physical
            security, and telecommunications sectors across various industries
            in Saudi Arabia. The company has successfully completed numerous
            projects and has grown into a full-service provider, offering
            expertise across all phases of operations.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
