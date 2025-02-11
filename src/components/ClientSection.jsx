import { useEffect, useState, useRef } from "react";
import client1 from "../images/client1.png";
import client2 from "../images/client2.png";
import client3 from "../images/client3.png";
import client4 from "../images/client4.png";

const ClientsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("clients-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    class Particle {
      constructor(x, y, size, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.02;
      }
      draw() {
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    function createParticles() {
      for (let i = 0; i < 50; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 5 + 2;
        const speedX = (Math.random() - 0.5) * 2;
        const speedY = (Math.random() - 0.5) * 2;
        particles.push(new Particle(x, y, size, speedX, speedY));
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();
        if (particle.size <= 0.2) {
          particles.splice(index, 1);
        }
      });
      requestAnimationFrame(animateParticles);
    }

    createParticles();
    animateParticles();
  }, []);

  return (
    <section
      id="clients-section"
      style={{
        position: "relative",
        padding: "6rem 0",
        background: "rgb(86, 109, 113)",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      ></canvas>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="row align-items-center">
          <div className="col-md-4 text-center text-md-start">
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "1.5rem",
                color: "#fff",
                textShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-30px)",
                transition: "opacity 1s ease, transform 1s ease",
              }}
            >
              Our Valued Clients{" "}
            </h2>
            <div
              style={{
                width: "80px",
                height: "6px",
                background: "#ffeb3b",
                margin: "10px auto 0",
                borderRadius: "3px",
              }}
            ></div>
          </div>

          <div className="col-md-8">
            <div
              style={{
                overflow: "hidden",
                position: "relative",
                padding: "1rem 0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "40px",
                  animation: "scroll 15s linear infinite",
                  willChange: "transform",
                }}
              >
                {[client1, client2, client3, client4].map((logo, index) => (
                  <div
                    key={index}
                    style={{
                      background: "#fff",
                      padding: "15px",
                      borderRadius: "15px",
                      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
                      transition: "transform 0.4s ease, box-shadow 0.4s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 20px rgba(0, 0, 0, 0.3)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow =
                        "0 6px 12px rgba(0, 0, 0, 0.15)";
                    }}
                  >
                    <img
                      src={logo}
                      alt={`Client ${index + 1}`}
                      style={{
                        width: "100%",
                        maxWidth: "150px",
                        height: "auto",
                        filter: "grayscale(100%)",
                        transition: "filter 0.3s ease-in-out",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.filter = "grayscale(0%)")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.filter = "grayscale(100%)")
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}
      </style>
    </section>
  );
};

export default ClientsSection;
