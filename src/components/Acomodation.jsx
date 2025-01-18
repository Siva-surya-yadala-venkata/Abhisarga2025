"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  MapPin,
  Phone,
  Mail,
  Moon,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import AccomodationCard from "./AccomodationCard/AccomodationCard";
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.png";
import ParallaxComponent from "./ParllaxComponent";
export default function AccommodationPage() {
  const [stars, setStars] = useState([]);
  const [hover, setHover] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    const generateStars = () => {
      const starsArray = [];
      for (let i = 0; i < 100; i++) {
        starsArray.push({
          id: i,
          left: Math.random() * 100 + "%",
          top: Math.random() * 100 + "%",
          size: Math.random() * 2 + "px",
          animationDuration: Math.random() * 5 + 5 + "s",
        });
      }
      setStars(starsArray);
    };

    generateStars();
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardsData = [
    {
      title: "Boys Hostel 1",
      details: [
        "3 day tours",
        "Up to 30 people",
        "2 tour guides",
        "Sleep in cozy hotels",
        "Difficulty: easy",
      ],
      price: "$297",
      gradient: "bg-gradient-to-r from-orange-500 to-yellow-500",
      image: bg1,
    },
    {
      title: "Boys Hostel 2",
      details: [
        "5 day tours",
        "Up to 25 people",
        "3 tour guides",
        "Camp in wild nature",
        "Difficulty: medium",
      ],
      price: "$497",
      gradient: "bg-gradient-to-r from-green-500 to-teal-500",
      image: bg2,
    },
    {
      title: "Boys Hostel 3",
      details: [
        "7 day tours",
        "Up to 15 people",
        "2 tour guides",
        "Stay in cozy lodges",
        "Difficulty: hard",
      ],
      price: "$697",
      gradient: "bg-gradient-to-r from-blue-500 to-indigo-500",
      image: bg1,
    },
  ];

  return (
    <motion.div
      className="min-h-screen relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at top, #24222d, #131433)",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      ref={ref}
    >
      <ParallaxComponent backgroundImage={"/AccomodationBg.jpg"} heading={"Accomodations"}  />
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 blur-2xl rounded-full animate-float" />
        <div className="absolute bottom-32 right-20 w-60 h-60 bg-gradient-to-r from-blue-500 to-teal-500 opacity-30 blur-2xl rounded-full animate-float-delayed" />

        {/* Stars */}
        <div className="stars-container">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute bg-white rounded-full"
              style={{
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
                animation: `twinkle ${
                  hover ? "3s" : star.animationDuration
                } ease-in-out infinite`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
   
        {/* Main Content */}
        <main className="container mx-auto px-4 py-12 space-y-16">
          {/* Accommodation Details */}
          <motion.section
            className="grid md:grid-cols-2 gap-8"
            // variants={cardVariants}
            // initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="p-6 bg-[#24222d]/50 backdrop-blur-sm border border-[#F7E290]/20 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <Moon
                  className="w-6 h-6"
                  style={{ color: "#F7E290" }}
                />
                <h2
                  className="text-2xl font-semibold"
                  style={{ color: "#F7E290" }}
                >
                  Stay Details
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To ensure you feel at home, the college will take
                care of all your accommodation needs. Relax,
                unwind, and enjoy the fest without any worries.
                Our magical accommodations provide a comfortable
                and secure environment for all participants.
              </p>
            </div>
            <div className="p-6 bg-[#24222d]/50 backdrop-blur-sm border border-[#F7E290]/20 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles
                  className="w-6 h-6"
                  style={{ color: "#F7E290" }}
                />
                <h2
                  className="text-2xl font-semibold"
                  style={{ color: "#F7E290" }}
                >
                  Amenities
                </h2>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• 24/7 Security</li>
                <li>• Clean and comfortable rooms</li>
                <li>• Basic amenities provided</li>
                <li>• Common areas for socializing</li>
                <li>• Near to event venues</li>
              </ul>
            </div>
          </motion.section>

          <div className="w-full grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 sm:px-8 py-4">
            {cardsData.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <AccomodationCard
                  title={card.title}
                  details={card.details}
                  price={card.price}
                  gradient={card.gradient}
                  image={card.image}
                />
              </motion.div>
            ))}
          </div>

          {/* Contact Information */}
          <div
  className="min-h-screen p-4 xl:p-16 bg-center bg-no-repeat bg-cover xl:bg-[url('/video-frame.webp')]"
  style={{
    backgroundSize: "contain",
  }}
>
  <div className="grid p-4 xl:p-8 md:grid-cols-2 gap-8 items-start max-w-7xl mx-auto">
        {/* Contact Information Section */}
        <motion.section
          className="space-y-8 mr-8"
          initial="hidden"
          animate="visible"
        >
          <h2
            className="text-3xl font-bold text-center"
            style={{ color: "#F7E290" }}
          >
            Contact Information
          </h2>
          <div className="grid gap-6">
            {[
              {
                icon: Phone,
                title: "Phone",
                content: "+91 1234567890",
              },
              {
                icon: Mail,
                title: "Email",
                content: "accommodation@abhisarga.com",
              },
              {
                icon: MapPin,
                title: "Location",
                content: "College Campus, City, State",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="p-6 bg-[#24222d]/50 backdrop-blur-sm border border-[#F7E290]/20 rounded-lg">
                  <div className="flex flex-col items-center gap-3">
                    <item.icon
                      className="w-8 h-8"
                      style={{ color: "#F7E290" }}
                    />
                    <h3
                      className="text-xl font-semibold"
                      style={{ color: "#F7E290" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-gray-300">
                      {item.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Map Section */}
        <motion.section
          className="space-y-8 h-full"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <h2
            className="text-3xl font-bold text-center"
            style={{ color: "#F7E290" }}
          >
            How to Reach
          </h2>
          <div className="aspect-video w-full h-[calc(100%-5rem)] rounded-lg overflow-hidden border border-[#F7E290]/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5337669051037!2d77.5181624!3d12.9345799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU2JzA0LjUiTiA3N8KwMzEnMDUuNCJF!5e0!3m2!1sen!2sin!4v1640887407284!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.section>
      </div>
    </div>
        </main>
      </div>
    </motion.div>
  );
}
