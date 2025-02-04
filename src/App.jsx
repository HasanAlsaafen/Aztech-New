import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import ScrollButton from "./components/ScrollButton";
import ServicesCarousel from "./components/ServicesCarousel";
import ContactSection from "./components/ContactSection";
import OurVision from "./components/OurVision";
import AboutUs from "./components/AboutUs";
import Statistics from "./components/Statistics";
import Footer from "./components/Footer";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Slider />
      <ScrollButton></ScrollButton>
      <ServicesCarousel />
      <ContactSection />
      <OurVision></OurVision>
      <AboutUs></AboutUs>
      <Statistics />
      <Footer />
    </>
  );
}

export default App;
