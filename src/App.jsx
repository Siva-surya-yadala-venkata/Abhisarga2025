import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import EventsPage from './components/EventsPage'
import EventPage from "./pages/events";
import AccommodationPage from "./components/Acomodation";
import SplashCursor from "./components/SplashCursor";

function App() {
  return (
    <>
    {/* Place this outside <Routes> */}
    <Routes>
      <Route path="/" element={ <>  <SplashCursor /> <Home /> </>} />
      <Route path="/event" element={<EventPage />} />
      <Route path="/acomodation" element={<AccommodationPage />} />
      <Route path="/events" element={<EventsPage />} />
    </Routes>
  </>
  );
}

export default App;
