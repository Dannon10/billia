import Navbar from "../components/Navbar";
import AboutHero from "../sections/AboutHero";
import AboutMain from "../sections/AboutMain";
import Footer from "../components/Footer";
import AboutValues from "../sections/AboutValues";

export default function About() {
  return (
    <div className="about-container">
        <Navbar />
        <AboutHero />
        <AboutMain />
        <AboutValues/>
        <Footer/>
    </div>
  )
}
