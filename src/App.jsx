import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import EventsPage from "./components/EventsPage";
import AboutUs from "./components/AboutUs";
import AccommodationPage from "./components/Accommodation";
import Event from "./pages/events";
import Merch from "./components/Merch";
import CallForSponsors from "./components/CallForSponsors/page";
import SplashCursor from "./components/SplashCursor";
import Sponsors from "./pages/Sponsors";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SplashCursor />
              <Home />
            </>
          }
        />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/accommodation" element={<AccommodationPage />} />
        <Route path="/event/:name" element={<Event />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/call-for-sponsors" element={<CallForSponsors />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
