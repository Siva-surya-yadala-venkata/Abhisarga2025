import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Calendar,
  Clock,
  MapPin,
  Share2,
  Users,
  Sparkles,
  Gift,
} from "lucide-react";
import { events } from "./EventsPage";
import Loader from "../components/Loader";

function App() {
  const { name } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const event = events.find(
    (event) => event.title.replaceAll(" ", "-") === name
  );
  console.log(event);
  const [showShareMenu, setShowShareMenu] = useState(false);

  useEffect(() => {
    // Preload event image
    const img = new Image();
    img.onload = () => {
      setIsLoading(false);
    };
    img.onerror = () => {
      console.warn(`Failed to load image: ${event.image2}`);
      setIsLoading(false);
    };
    img.src = event.image2;

    // Load fonts dynamically
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Apply base styles
    document.body.style.margin = "0";
    document.body.style.minWidth = "320px";
    document.body.style.minHeight = "100vh";
    document.body.style.fontFamily = "'Montserrat', sans-serif";
    document.body.style.perspective = "1000px";

    return () => {
      document.head.removeChild(link);
    };
  }, [event.image2]);

  const handleShare = async (platform) => {
    const eventUrl = window.location.href;
    const title = "Coming Soon";
    const text = "Stay tuned for more information!";

    switch (platform) {
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            text
          )}&url=${encodeURIComponent(eventUrl)}`
        );
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            eventUrl
          )}`
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            eventUrl
          )}`
        );
        break;
      case "copy":
        await navigator.clipboard.writeText(eventUrl);
        alert("Link copied to clipboard!");
        break;
    }
    setShowShareMenu(false);
  };

  const details = [
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Experience Level",
      value: "All Levels",
    },
    {
      icon: <Gift className="w-5 h-5" />,
      title: "Perks",
      value: "Swag, Lunch, Networking",
    },
  ];

  const styles = {
    card3d: `
      relative bg-[#0A0A0A] rounded-xl border-2 border-[#F7E270] p-8 backdrop-blur-xl 
      shadow-[0_0_25px_rgba(247,226,112,0.1)]
      transform-style-preserve-3d transition-transform duration-300 ease-out
      hover:-translate-y-1 hover:rotate-x-2 hover:rotate-y-2
    `,
    infoCard: `
      group relative p-4 rounded-xl bg-white/5 border border-white/10 
      hover:border-[#F7E270] hover:bg-[#F7E270]/5
      transform-style-preserve-3d transition-all duration-300 ease-out
      hover:scale-102 hover:translate-z-20
    `,
    heading: `
      text-5xl font-bold text-white mb-2 
      font-['Playfair_Display',serif]
    `,
    subheading: `
      text-2xl font-semibold text-white mb-4 
      font-['Playfair_Display',serif]
    `,
  };

  return (
    <>
      {isLoading && <Loader />}
      <div
        className={`min-h-screen bg-gradient-to-b from-black to-[#0A0A0A] ${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-500`}
      >
        {/* Hero Section */}
        <div className="relative h-[50vh] overflow-hidden">
          <img
            src={event.image2}
            alt="Event cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto -mt-32 relative px-4 pb-16">
          <div className={styles.card3d}>
            {/* Glowing Corner Accents */}
            <div className="absolute -top-1 -left-1 w-32 h-32 bg-white opacity-5 rounded-tl-xl blur-2xl" />
            <div className="absolute -bottom-1 -right-1 w-32 h-32 bg-[#F7E270] opacity-10 rounded-br-xl blur-2xl" />

            {/* Header */}
            <div className="flex justify-between items-start relative">
              <div>
                <h1 className={styles.heading}>
                  {/* {event.title} */}
                  <span className="block text-[#F7E270]">{event.title}</span>
                </h1>
              </div>
              <div className="relative">
                <button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="p-2 text-white hover:text-[#F7E270] hover:bg-white/5 rounded-full transition-all duration-300"
                >
                  <Share2 className="w-6 h-6" />
                </button>

                {showShareMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#0A0A0A] border border-white/10 rounded-lg shadow-xl z-50 backdrop-blur-xl">
                    <div className="p-2 space-y-1">
                      {[
                        "Twitter",
                        "Facebook",
                        "LinkedIn",
                        "Copy Link",
                      ].map((platform) => (
                        <button
                          key={platform}
                          onClick={() => handleShare(platform.toLowerCase())}
                          className="w-full text-left px-4 py-2 text-white hover:text-[#F7E270] hover:bg-white/5 rounded-md transition-all duration-300"
                        >
                          {platform}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Event Details */}
            <div className="mt-8 space-y-4 border-b border-white/10 pb-6">
              <div className="flex items-center gap-3 text-white group hover:text-[#F7E270] transition-colors duration-300">
                <Calendar className="w-5 h-5" />
                <span>{event.date}</span>
              </div>
              {/* <div className="flex items-center gap-3 text-white group hover:text-[#F7E270] transition-colors duration-300">
                <Clock className="w-5 h-5" />
                <span>Coming soon...</span>
              </div> */}
              <div className="flex items-center gap-3 text-white group hover:text-[#F7E270] transition-colors duration-300">
                <MapPin className="w-5 h-5" />
                <span>Location TBD</span>
              </div>
            </div>

            {/* Quick Info */}
            {/* <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {details.map((detail, index) => (
                <div key={index} className={styles.infoCard}>
                  <div className="relative flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-white/5 text-white group-hover:text-[#F7E270] group-hover:scale-110 transition-all duration-300">
                      {detail.icon}
                    </div>
                    <div>
                      <p className="text-sm text-white/60 group-hover:text-white/80">
                        {detail.title}
                      </p>
                      <p className="text-white group-hover:text-[#F7E270] font-medium">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}

            {/* Description */}
            <div className="mt-8">
              {/* <h2 className={styles.subheading}>
                Stay tuned for more information!
              </h2> */}
              <p className="text-white/80 leading-relaxed">
                {event.description}
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-12 flex justify-center">
              <a href={event.register} target="_blank">
                <button className="relative group transform transition-all duration-300 hover:scale-105">
                  <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-[#F7E270]/20 rounded-lg blur-lg opacity-70 group-hover:opacity-100 transition duration-300" />
                  <div className="relative px-8 py-3 bg-[#0A0A0A] rounded-lg border border-[#F7E270] leading-none flex items-center">
                    <span className="text-[#F7E270] group-hover:text-white transition duration-200 font-medium">
                      Register
                    </span>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
