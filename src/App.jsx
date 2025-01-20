import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import EventsPage from "./components/EventsPage";
import Event from "./pages/events";
import AccommodationPage from "./components/Accomodation";
import SplashCursor from "./components/SplashCursor";
import Footer from "./components/Footer";
import Merch from "./components/Merch";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import CallForSponsors from "./components/CallForSponsors/page";

function App() {
  return (
    <>
      {/* Navbar placed outside Routes to persist across all pages */}
      <Navbar />

      {/* Routes for page navigation */}
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
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>

      {/* Footer placed outside Routes to persist across all pages */}
      <Footer />
    </>
  );
}

export default App;
