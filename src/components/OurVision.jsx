import "bootstrap/dist/css/bootstrap.min.css";
import Vision from "../assets/vision.svg";
const OurVision = () => {
  return (
    <section className="our-vision-section" id="OurVision">
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
