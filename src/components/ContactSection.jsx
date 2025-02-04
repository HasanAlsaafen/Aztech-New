import { useEffect, useRef } from "react";

const ContactSection = () => {
  const sectionRef = useRef(null);

  // Intersection Observer for reveal animation
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
      className="contact-section relative overflow-hidden"
      id="contact"
      ref={sectionRef}
    >
      {/* Animated Dots */}
      <div className="dots-container">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="animated-dot"></div>
        ))}
      </div>

      <div className="container">
        <div className="content-wrapper">
          {/* Left Side */}
          <div className="left-section animate-left">
            <div className="gradient-overlay"></div>
            <h1>Hello!</h1>
            <p>Your gateway to smart solutions.</p>
            <img
              src="https://cdn-icons-png.flaticon.com/256/8692/8692863.png"
              alt="Robot Hand"
              className="robot-hand"
            />
          </div>

          {/* Right Side */}
          <div className="right-section animate-right">
            <h2>
              Choose <span>The Best</span> IT Service Company
            </h2>
            <p>
              A & Z Technology, established in 2023 in Riyadh, Saudi Arabia, is
              a leading provider of electromechanical, networking, and IT
              solutions.
            </p>
            <div className="contact-box">
              <a href="#" className="contact-btn">
                Contact Us
              </a>
              <span className="phone">📞 (+0966 542 278 289)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
