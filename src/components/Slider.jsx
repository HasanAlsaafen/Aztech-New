import { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideIntervalRef = useRef(null);
  const slides = [
    {
      img: "https://i.pinimg.com/736x/ea/37/71/ea377159b319b539c893581efdae6a2c.jpg",
      title: "Who we are?",
      description:
        "A & Z Technology, established in 2023 in Riyadh, Saudi Arabia, is a leading provider of electromechanical, networking, and IT solutions.",
      buttonText: "Learn More →",
      buttonLink: "#about-us",
    },
    {
      img: "https://img.freepik.com/premium-photo/our-vision-concept-business-technology-internet_220873-13795.jpg?w=360",
      title: "Our Vision",
      description:
        "We strive to deliver top-tier services backed by exceptional technical expertise, skilled project managers, and experienced engineers.",
      buttonText: "Learn More →",
      buttonLink: "#OurVision",
    },
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    const slides = document.querySelectorAll(".carousel-item");
    slides.forEach((slide, index) => {
      slide.classList.remove("active", "next-enter", "prev-enter");
      if (index === currentIndex) {
        slide.classList.add("active", "next-enter");
      }
    });

    return () => {
      slides.forEach((slide) => {
        slide.classList.remove("next-enter", "prev-enter");
      });
    };
  }, [currentIndex]);

  const stopSlideInterval = () => {
    if (slideIntervalRef.current) clearInterval(slideIntervalRef.current);
  };
  const switchSlide = (direction) => {
    const slides = document.querySelectorAll(".carousel-item");
    const activeSlide = document.querySelector(".carousel-item.active");

    let newIndex = [...slides].indexOf(activeSlide) + direction;

    if (newIndex < 0) newIndex = slides.length - 1;
    if (newIndex >= slides.length) newIndex = 0;

    const newSlide = slides[newIndex];

    activeSlide.classList.add(direction === 1 ? "next-exit" : "prev-exit");
    newSlide.classList.add(direction === 1 ? "next-enter" : "prev-enter");

    setTimeout(() => {
      activeSlide.classList.remove("active", "next-exit", "prev-exit");
      newSlide.classList.add("active");
      newSlide.classList.remove("next-enter", "prev-enter");
    }, 1000);

    setCurrentIndex(newIndex);
  };

  return (
    <div className="container-fluid p-0">
      <div id="heroSlider" className="carousel slide hero-section">
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#heroSlider"
              data-bs-slide-to={index}
              className={index === currentIndex ? "active" : ""}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === currentIndex ? "active" : ""
              }`}
            >
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

        <button
          className="carousel-control-prev nav-arrow left"
          type="button"
          onClick={() => switchSlide(-1)}
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
          onClick={() => switchSlide(1)}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
