import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ryiad from "../images/ryaidh.jpg";
import vision from "../images/vision.jpg";
import service from "../images/service.jpg";
import { ajaxSetup } from "jquery";
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      img: ryiad,
      title: "Who we are?",
      description:
        "A & Z Technology, established in 2023 in Riyadh, Saudi Arabia, is a leading provider of electromechanical, networking, and IT solutions.",
      buttonText: "Learn More →",
      buttonLink: "#about-us",
    },
    {
      img: vision,
      title: "Our Vision",
      description:
        "We strive to deliver top-tier services backed by exceptional technical expertise, skilled project managers, and experienced engineers.",
      buttonText: "Learn More →",
      buttonLink: "#OurVision",
    },
    {
      img: service,
      title: "Our Services",
      description:
        "Explore our wide range of services designed to meet your needs!",
      buttonText: "Learn More →",
      buttonLink: "#services",
    },
  ];

  return (
    <div className="container-fluid p-0">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide hero-section carousel-fade"
        data-bs-ride="carousel"
      >
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide-to={index}
              className={index === currentIndex ? "active" : ""}
              aria-current={index === currentIndex ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>

        {/* Carousel Slides */}
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === currentIndex ? "active" : ""
              }`}
            >
              {/* Overlay and decoration elements */}
              <div className="overlay"></div>
              <div className="diagonal-line"></div>
              <img
                src={slide.img}
                className="d-block w-100 slide-img"
                alt={`Slide ${index + 1}`}
              />
              <div className="carousel-caption text-start">
                <span
                  className="badge text-bg-light px-4 py-2 animate-fadeIn"
                  style={{ borderRadius: "50px" }}
                >
                  We are IT service agency
                </span>
                <h2 className="display-3 fw-bold text-white animate-slideInLeft">
                  {slide.title}
                </h2>
                <p className="lead text-white animate-slideInRight">
                  {slide.description}
                </p>
                <a
                  href={slide.buttonLink}
                  className="btn btn-primary px-4 py-2 animate-fadeInUp"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev nav-arrow left"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next nav-arrow right"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
