import Navbar from "../components/Navbar";
import ImageCarousel from "../components/ProShows/ImageCarousel";
import HeroComponent from "../components/HeroComponent";
import TimeLine from "../components/TimelineComponent";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import AboutPage from "../components/AboutSection";
import SponsorCarousel from "../components/SponsorCarousel";
import { Marquee3D } from "../components/ui/Marquee3D";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
    
      {/* Video Background */}
      <HeroComponent /> 
      <AboutPage/>
      {/* Main Content */}
      <div className="flex-grow">
        <ImageCarousel />
      </div>

      {/* Timeline */}
      <TimeLine />
      <SponsorCarousel/>
      {/* FAQ */}
      <FAQ />
    </div>
  );
}

export default Home;
