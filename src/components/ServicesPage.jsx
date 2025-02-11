import { useEffect } from "react";

const ServicesPage = () => {
  useEffect(() => {
    const navHome = document.getElementById("nav-home");
    navHome.classList.remove("active");
    const navServices = document.getElementById("nav-services");
    navServices.classList.add("active");
    const navContact = document.getElementById("nav-contact");
    navContact.classList.remove("active");
  }, []);

  return (
    <section className="services-page py-5" id="services">
      <div className="gear-background">
        <div className="gear large top-left"></div>
        <div className="gear small top-right"></div>
        <div className="gear small bottom-left"></div>
        <div className="gear large bottom-right"></div>
      </div>

      <div className="container">
        <h2 className="text-center section-title">Our Services</h2>
        <div className="services-container">
          <div className="card ">
            <img
              src="https://i.pinimg.com/236x/2b/93/68/2b9368118a4b55c6d9d1097b55edaeb6.jpg"
              alt="active component"
              className="img-fluid card-img-top image"
            />
            <h3 className="text-center">Active Components</h3>
            <p>
              <ul>
                <li>
                  {" "}
                  A & Z Technology provides comprehensive turnkey solutions with
                  full accountability.
                </li>
                <li>
                  {" "}
                  We offer strategic, technical, and infrastructure consulting
                  services.
                </li>
                <li>
                  {" "}
                  As a partner of leading global networking vendors such as
                  Cisco, HP Aruba, and Huawei, we deliver tailored and
                  cutting-edge solutions to meet our customers needs.
                </li>
              </ul>
            </p>
          </div>
          <div className="card ">
            <img
              src="https://i.pinimg.com/236x/04/6b/c5/046bc550ef5e95233a419c3f12dd58c3.jpg"
              alt="active component"
              className="img-fluid card-img-top image"
            />
            <h3 className="text-center">Electro-Mechanical</h3>
            <p>
              We offer in-depth technical analysis services to understand your
              specific requirements better. Our innovative solutions are
              designed to enhance performance and operational efficiency,
              ensuring superior quality and reliability.
            </p>
          </div>
          <div className="card ">
            <img
              src="https://i.pinimg.com/236x/f7/44/1b/f7441b372c78efdbb4efbae09f97553d.jpg"
              alt="active component"
              className="img-fluid card-img-top image"
            />
            <h3 className="text-center">Telecom Infrastructure</h3>
            <p>
              Our customized, high-quality structured network cabling solutions
              are designed to support future technologies, ensuring seamless
              connectivity and scalability for your business operations.
            </p>
          </div>{" "}
          <div className="card ">
            <img
              src="https://i.pinimg.com/236x/ac/47/ea/ac47eaee1804ab8f4f3dd61f147baf29.jpg"
              alt="Data Center"
              className="img-fluid card-img-top image"
            />
            <h3 className="text-center">Data Center</h3>
            <p>
              Our data center solutions help businesses enhance their IT
              infrastructure with optimal performance, scalability, and
              security. We provide a comprehensive range of services, including:
              <ul>
                <li>Power Management </li>
                <li>Raised Access Flooring </li>
                <li>Cabling Solutions </li>
                <li>Civil Work </li>
                <li> Site Monitoring </li>
                <li>Secured Access Control </li>
                <li>UPS & Generator Systems </li>
                <li> Fire Protection & Air Conditioning</li>
              </ul>
            </p>
          </div>
          <div className="card ">
            <img
              src="https://i.pinimg.com/236x/f0/88/70/f088703219eee4a924584c3f653c7f76.jpg"
              alt="Power Solutions"
              className="img-fluid card-img-top image"
            />
            <h3 className="text-center">Power Solutions</h3>
            <p>
              We offer advanced power distribution and backup solutions,
              including:
              <ul>
                <li>Uninterruptible Power Supply (UPS) </li>
                <li> Power Distribution Units (PDUs)</li>
                <li>Transfer Switches</li>
                <li>
                  {" "}
                  Rack Solutions A & Z Technology partners with industry leaders
                  such as Schneider Electric to provide innovative
                  infrastructure and software solutions, ensuring reliable power
                  management for critical systems.
                </li>
              </ul>
            </p>
          </div>
          <div className="card ">
            <img
              src="https://i.pinimg.com/236x/5c/66/e0/5c66e048c687c3b35d92f1b0b46f1f2c.jpg"
              alt="Monitoring System"
              className="img-fluid card-img-top image"
            />
            <h3 className="text-center">Monitoring System</h3>
            <p>
              Our monitoring systems provide comprehensive surveillance and
              environmental monitoring solutions, including:
              <ul>
                <li>Indoor & Outdoor Surveillance</li>
                <li>Fixed & PTZ Cameras</li>
                <li>Box & Dome Cameras</li>
                <li>Coaxial & UTP Connections</li>
                <li>Various Zooming Capabilities</li>
                <li>Input/Output Port Integration</li>
                <li>DVR/NVR Connectivity</li>
                <li>
                  Environmental Monitoring with SMS, SNMP, and Email Alerts
                </li>
                <li>Custom Alerting via GSM Modems</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
