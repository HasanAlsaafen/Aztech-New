import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import ScrollButton from "./components/ScrollButton";
import ServicesCarousel from "./components/ServicesCarousel";
import ClientsSection from "./components/ClientSection";
import ContactSection from "./components/ContactSection";
import OurVision from "./components/OurVision";
import AboutUs from "./components/AboutUs";
import Statistics from "./components/Statistics";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ScrollButton />
              <ServicesCarousel />
              <ClientsSection></ClientsSection>
              <ContactSection />
              <OurVision />
              <AboutUs />
              <Statistics />
              <Footer />
            </>
          }
        />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
