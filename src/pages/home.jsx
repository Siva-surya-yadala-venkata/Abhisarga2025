import Navbar from "../components/Navbar";
import ImageCarousel from "../components/ProShows/ImageCarousel";
import HeroComponent from "../components/HeroComponent";
import TimeLine from "../components/TimelineComponent";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Video Background */}
      <HeroComponent />
      {/* <Temp/> */}
      {/* Main Content */}
      <div className="flex-grow">
        <ImageCarousel />
      </div>

      {/* Timeline */}
      <TimeLine />

      {/* FAQ */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
