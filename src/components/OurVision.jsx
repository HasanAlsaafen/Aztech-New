import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef, useState } from "react";
import Vision from "../assets/vision.svg";
const OurVision = () => {
  const abouUs = useRef(null);
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

    if (abouUs.current) {
      observer.observe(abouUs.current);
    }

    return () => {
      if (abouUs.current) observer.unobserve(abouUs.current);
    };
  }, []);
  return (
    <section
      className={` our-vision-section ${isVisible ? "visible" : ""}`}
      id="OurVision"
      ref={abouUs}
    >
      <div className="container">
        <div className="row align-items-center">
          {}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="content-box">
              <h2 className="section-title">Our Vision</h2>
              <p className="section-description">
                We strive to deliver top-tier services backed by exceptional
                technical expertise, skilled project managers, and experienced
                engineers. Our commitment is to provide the expertise,
                capabilities, and service quality our customers need. We support
                business success by offering outstanding solutions in
                electromechanical systems, infrastructure, civil works,
                telecommunications, and data centers.
              </p>
            </div>
          </div>
          {}
          <div className="col-lg-6">
            <div className="image-box">
              <img
                src={Vision}
                alt="Our Vision"
                className="img-fluid shadow-lg rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
