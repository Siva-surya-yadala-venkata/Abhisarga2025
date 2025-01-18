import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import EventsPage from './components/EventsPage'
import EventPage from "./pages/events";
import AccommodationPage from "./components/Accomodation";
import SplashCursor from "./components/SplashCursor";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    {/* Place this outside <Routes> */}
    <Routes>
      <Route path="/" element={ <>  <SplashCursor /> <Home /> </>} />
      <Route path="/events" element={<EventPage />} />
      <Route path="/accomodation" element={<AccommodationPage />} />
      <Route path="/eventspage" element={<EventsPage />} />
    </Routes>
    <Footer/>
  </>
  );
}

export default App;
