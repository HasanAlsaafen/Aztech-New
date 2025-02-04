import { useEffect, useRef, useState } from "react";
import aboutImage from "/src/assets/About-us.svg";

function AboutUs() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // بعد ظهور القسم يمكن إيقاف المراقبة إذا رغبت بذلك
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // يبدأ التأثير عندما يظهر 50% من القسم
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
      className={`about-us-section ${isVisible ? "visible" : ""}`}
    >
      <div className="about-us-container">
        <div className="about-us-image">
          <img src={aboutImage} alt="About Us" />
        </div>
        <div className="about-us-content">
          <h2>About Us</h2>
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
