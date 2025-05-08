import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 2;
  const carouselRef = useRef(null);
  const progressBarRef = useRef(null);
  const slideInterval = useRef(null);
  const progressAnimation = useRef(null);

  const showSlide = useCallback((index) => {
    const carousel = carouselRef.current;
    if (!carousel || !(carousel instanceof HTMLElement)) return;

    let bsCarousel = window.bootstrap.Carousel.getInstance(carousel);
    if (!bsCarousel) {
      bsCarousel = new window.bootstrap.Carousel(carousel, {
        interval: false,
      });
    }
    bsCarousel.to(index);
  }, []);

  const startProgressAnimation = useCallback(() => {
    const progressBar = progressBarRef.current;
    if (!progressBar || !progressBar.animate) return;

    if (progressAnimation.current) {
      progressAnimation.current.cancel();
    }

    let startWidth = 0;
    let endWidth = 100;
    if (currentIndex === 0) {
      startWidth = 0;
      endWidth = 50;
    } else if (currentIndex === 1) {
      startWidth = 50;
      endWidth = 100;
    }

    progressBar.style.width = `${startWidth}%`;
    progressAnimation.current = progressBar.animate(
      { width: [`${startWidth}%`, `${endWidth}%`] },
      { duration: 10000, easing: "linear", fill: "forwards" }
    );
  }, [currentIndex]);

  const handleSlide = useCallback(
    (event) => {
      setCurrentIndex(event.to);
      startProgressAnimation();
    },
    [startProgressAnimation]
  );

  const startSlideInterval = useCallback(() => {
    stopSlideInterval();
    slideInterval.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const newIndex = (prev + 1) % totalSlides;
        showSlide(newIndex);
        return newIndex;
      });
    }, 10000);
  }, [totalSlides, showSlide]);

  const stopSlideInterval = useCallback(() => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
      slideInterval.current = null;
    }
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.addEventListener("slid.bs.carousel", handleSlide);
    return () => carousel.removeEventListener("slid.bs.carousel", handleSlide);
  }, [handleSlide]);

  useEffect(() => {
    startSlideInterval();
    startProgressAnimation();

    return () => {
      stopSlideInterval();
      if (progressAnimation.current) {
        progressAnimation.current.cancel();
      }
    };
  }, [startSlideInterval, startProgressAnimation, stopSlideInterval]);

  useEffect(() => {
    const section = document.querySelector(".gradient-section");
    if (!section) {
      console.warn("لم يتم العثور على العنصر .gradient-section");
      return;
    }

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(section);

    return () => observer.unobserve(section);
  }, []);

  const services = useMemo(
    () => [
      {
        id: 1,
        title: "Active Component",
        description: "Responsive and dynamic websites.",
        icon: "https://cdn-icons-png.flaticon.com/128/3242/3242120.png",
      },
      {
        id: 2,
        title: "Electro Mechanical",
        description: "Reliable cloud infrastructure.",
        icon: "https://cdn-icons-png.flaticon.com/128/8838/8838148.png",
      },
      {
        id: 3,
        title: "Telecom Infrastructure",
        description: "Custom software development.",
        icon: "https://cdn-icons-png.flaticon.com/128/4673/4673120.png",
      },
      {
        id: 4,
        title: "Physical Security",
        description: "Improve search rankings.",
        icon: "https://cdn-icons-png.flaticon.com/128/17810/17810932.png",
      },
      {
        id: 5,
        title: "Data Center",
        description: "Mobile apps for iOS and Android.",
        icon: "https://cdn-icons-png.flaticon.com/128/1925/1925060.png",
      },
      {
        id: 6,
        title: "Networking",
        description: "Advanced analytics and visualization.",
        icon: "https://cdn-icons-png.flaticon.com/128/2177/2177382.png",
      },
    ],
    []
  );

  const groupedServices = useMemo(() => {
    const groups = [];
    for (let i = 0; i < services.length; i += 3) {
      groups.push(services.slice(i, i + 3));
    }
    return groups;
  }, [services]);
  useEffect(() => {
    const navHome = document.getElementById("nav-home");
    navHome.classList.add("active");
    const navServices = document.getElementById("nav-services");
    navServices.classList.remove("active");
    const navContact = document.getElementById("nav-contact");
    navContact.classList.remove("active");
  }, []);
  return (
    <section id="services" className="py-5 bg-light gradient-section">
      <ul className="circles">
        <li></li>
        <li></li>
      </ul>
      <div className="container content">
        <h2 className="text-center mb-4 text-primary fw-bold serTitle">
          Our Services
        </h2>
        <div
          id="serviceCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-touch="true"
          ref={carouselRef}
          onMouseEnter={stopSlideInterval}
          onMouseLeave={startSlideInterval}
        >
          <div className="carousel-inner">
            {groupedServices.map((group, index) => (
              <div
                key={index}
                className={`carousel-item ${
                  index === currentIndex ? "active" : ""
                }`}
              >
                <div className="row text-center">
                  {group.map((service) => (
                    <div key={service.id} className="col-12 col-sm-6 col-md-4">
                      <div className="service-card">
                        <div className="wavy-overlay" />
                        <div className="overlay" />
                        <div className="service-header">
                          <div className="icon-box">
                            <img src={service.icon} alt={service.title} />
                          </div>
                        </div>
                        <div className="service-body">
                          <h3 className="service-title">{service.title}</h3>
                          <p className="service-description">
                            {service.description}
                          </p>
                          <a href="#!" className="learn-more">
                            Explore Solutions
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#serviceCarousel"
            data-bs-slide="prev"
            onClick={() => {
              const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
              setCurrentIndex(newIndex);
              showSlide(newIndex);
              startProgressAnimation();
            }}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#serviceCarousel"
            data-bs-slide="next"
            onClick={() => {
              const newIndex = (currentIndex + 1) % totalSlides;
              setCurrentIndex(newIndex);
              showSlide(newIndex);
              startProgressAnimation();
            }}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </button>
        </div>

        {/* Progress Bar */}
        <div
          className="progress mt-3"
          style={{ height: "10px", borderRadius: "12px" }}
        >
          <div
            ref={progressBarRef}
            className="progress-bar"
            role="progressbar"
            style={{
              background: "linear-gradient(90deg, #007bff, #00bfff)",
              width: currentIndex === 0 ? "0%" : "50%",
              transition: "width 0.5s ease",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
