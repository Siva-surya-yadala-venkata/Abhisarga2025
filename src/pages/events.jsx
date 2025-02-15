import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Calendar, Clock, MapPin, Share2, Users, Sparkles, Gift } from 'lucide-react';
import { events } from "./EventsPage";
import Loader from "../components/Loader";
import { motion } from "framer-motion";
export default function EventDetails() {
  const params = useParams();
  const name = params.name;
  const [isLoading, setIsLoading] = useState(true);
  const event = events.find(
    (event) => event.title.replaceAll(" ", "-") === name
  );
  const [showShareMenu, setShowShareMenu] = useState(false);

  useEffect(() => {
    if (!event) return;

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
  }, [event]);



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

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="min-h-screen min-w-screen bg-black">
      {isLoading && <Loader />}
      <div
        className={`min-h-screen ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}
      >
        {/* Hero Section */}
        <div className="relative h-[70vh] sm:h-[50vh] w-full overflow-hidden">
          <img
            src={event.image2 || "/assets/EventBg.jpg"}
            alt={event.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
          
          <div className="absolute bottom-0 w-full">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 font-['Playfair_Display',serif]">
                    <span className="block text-[#F7E270]">{event.title}</span>
                  </h1>
                </div>
                <div className="flex flex-wrap gap-4 text-white/80">
                  <span className="flex items-center gap-2">
                    <Calendar className="text-[#F7E270] h-5 w-5" />
                    {(event.date)}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="text-[#F7E270] h-5 w-5" />
                    {event.location || "TBD"}
                  </span>
                  {event.club && event.club.length > 0 && (
                    <span className="flex items-center gap-2">
                     <span className="text-[#F7E270]">Organised by</span> {event.club}
                    </span>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className=" max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-12">
            {/* About */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#F7E270]">About the Event</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {event.description}
              </p>
            </motion.section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full flex justify-center mt-12"
            >
              <button 
                        className=" button px-6 py-2 bg-[#F7E290] text-black rounded-full font-semibold hover:bg-[#edd472] transition"
              > <a target="_blank" href={event.register} rel="noopener noreferrer">
                  Register Now
                </a>
              </button>
            </motion.div>
          </div>
        </div>
    </div>
    </div>
  );
}
