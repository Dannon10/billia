import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Main from "./sections/Main";
import Article from "./sections/Article";
import Review from "./sections/Review";
import Download from "./sections/Download";
import Footer from "./components/Footer";
export default function Homepage() {
  return (
    <div className="home-container">
      <Navbar />
      <Hero />
      < Main/>
      < Article/>
      <Review />
      < Download/>
      < Footer/>
    </div>
  )
}
