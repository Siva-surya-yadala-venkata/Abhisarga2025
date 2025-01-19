import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import EventsPage from './components/EventsPage'
import EventPage from "./pages/events";
import AccommodationPage from "./components/Accomodation";
import SplashCursor from "./components/SplashCursor";
import Footer from "./components/Footer";
import Merch from "./components/Merch";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import CallForSponsors from './components/CallForSponsors/page'
import Event from "./pages/events";
function App() {
  return (
    <>
    {/* Place this outside <Routes> */}
    <Navbar/>
    <Routes>
      <Route path="/" element={ <>  <SplashCursor /> <Home /> </>} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/accomodation" element={<AccommodationPage />} />
      <Route path="/event/:name" element={<Event />} />
      <Route path="/merch" element={<Merch />} />
      <Route path="/CallForSponsors" element={<CallForSponsors />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
    <Footer/>
  </>
  );
}

export default App;
