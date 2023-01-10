import "./App.css";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
function App() {
  return (
    <div className="App">  
     
      <Navbar /> 
      <HeroSection />
      <AboutUs />
      <Services />
      <Team />
      <Testimonial />        
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
