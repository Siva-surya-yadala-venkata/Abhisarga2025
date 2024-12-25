import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import EventPage from "./pages/events";

function App() {
  return (
    <Routes>
      {/* Define your routes here */}
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<EventPage />} />
    </Routes>
  );
}

export default App;
