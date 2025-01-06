import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import EventPage from "./pages/events";
import AccommodationPage from "./components/Acomodation";
import SplashCursor from "./components/SplashCursor";

function App() {
  return (
    <>
    <SplashCursor /> {/* Place this outside <Routes> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<EventPage />} />
      <Route path="/accommodation" element={<AccommodationPage />} />
    </Routes>
  </>
  );
}

export default App;
