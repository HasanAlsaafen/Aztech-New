import { useEffect, useState } from "react";

const Statistics = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const numbers = document.querySelectorAll(".stat-number");
    let hasAnimated = false;

    const animateNumbers = (element, target, duration) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = timestamp - startTimestamp;
        const increment = Math.min(progress / duration, 1) * target;

        element.textContent =
          target % 1 === 0 ? Math.floor(increment) : increment.toFixed(1);

        if (progress < duration) {
          requestAnimationFrame(step);
        } else {
          element.textContent = target;
        }
      };
      requestAnimationFrame(step);
    };

    const startObserving = () => {
      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && !hasAnimated) {
                setHasAnimated(true);
                numbers.forEach((number) => {
                  const target = parseFloat(number.getAttribute("data-target"));
                  animateNumbers(number, target, 2000);
                });
                observer.disconnect();
              }
            });
          },
          { threshold: 0.4 }
        );
        observer.observe(document.getElementById("stats"));
      } else {
        window.addEventListener(
          "scroll",
          function scrollHandler() {
            if (
              isInViewport(document.getElementById("stats")) &&
              !hasAnimated
            ) {
              setHasAnimated(true);
              numbers.forEach((number) => {
                const target = parseFloat(number.getAttribute("data-target"));
                animateNumbers(number, target, 2000);
              });
              window.removeEventListener("scroll", scrollHandler);
            }
          },
          { passive: true }
        );
      }
    };

    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom >= 0;
    };

    startObserving();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", startObserving);
    };
  }, [hasAnimated]);

  return (
    <div className="statistics-section" id="stats">
      <h2>Vibrant Society, Thriving Economy, Ambitious Nation</h2>
      <div className="row mt-4">
        <div className="stat-item">
          <span className="stat-number" data-target="2023">
            0
          </span>
          <p>Year of establishment</p>
        </div>
        <div className="stat-item">
          <span className="stat-number" data-target="2500">
            0
          </span>
          <p>Of customers worldwide</p>
        </div>
        <div className="stat-item">
          <span className="stat-number" data-target="14">
            0
          </span>
          <p>Countries with active client base</p>
        </div>
        <div className="stat-item">
          <span className="stat-number" data-target="4.9">
            0
          </span>
          <p>Customer rating</p>
        </div>
      </div>
      <p className="mt-4">
        You have better things to do than worry about IT for your small
        business. Let’s Discuss about Project.
      </p>
    </div>
  );
};

export default Statistics;
