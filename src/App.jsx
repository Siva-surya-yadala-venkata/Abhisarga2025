import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import EventPage from "./pages/events";
import AccommodationPage from "./components/Acomodation";

function App() {
  return (
    <Routes>
      {/* Define your routes here */}
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<EventPage />} />
      <Route path="/acomodation" element={<AccommodationPage />} />

    </Routes>
  );
}

export default App;
